import re
from django.core.mail import send_mail
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse

from .models import Post
from .forms import ComentarioForm

# Lista de posts + barra lateral de años
def lista_posts(request):
    posts = Post.objects.order_by('-fecha_publicacion')
    years = Post.objects.dates('fecha_publicacion', 'year', order='DESC')
    return render(request, 'blog/post_list.html', {
        'posts': posts,
        'years': years
    })

# Registro de usuario
def registro(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            usuario = form.save()
            login(request, usuario)
            return redirect('lista_posts')
    else:
        form = UserCreationForm()
    return render(request, 'registro.html', {'form': form})

# Detalle del post + comentarios con menciones
def detalle_post(request, pk):
    post = get_object_or_404(Post, pk=pk)
    comentarios = post.comentarios.order_by('-fecha')

    # Si es POST: solo permitimos procesar si el usuario está autenticado
    if request.method == 'POST':
        if not request.user.is_authenticated:
            # Redirigimos al login (nombre 'login' definido en blog/urls.py), conservando next
            login_url = reverse('login')
            return redirect(f"{login_url}?next={request.path}")

        form = ComentarioForm(request.POST)
        if form.is_valid():
            comentario = form.save(commit=False)
            comentario.post = post
            comentario.usuario = request.user
            comentario.autor = request.user.username
            comentario.save()

            # Detectar menciones tipo @usuario y notificar por e-mail si corresponde
            menciones = re.findall(r'@(\w+)', comentario.texto)
            if menciones:
                for username in menciones:
                    try:
                        mencionado = User.objects.get(username=username)

                        # Buscar un comentario previo del usuario mencionado en este post
                        parent = (
                            post.comentarios.filter(usuario=mencionado).first()
                            or post.comentarios.filter(autor=mencionado.username).first()
                        )

                        # Si el modelo Comentario tiene campo 'respuesta_a', lo asignamos (con try por si no)
                        if parent and hasattr(comentario, 'respuesta_a'):
                            try:
                                comentario.respuesta_a = parent
                                comentario.save()
                            except Exception:
                                # Si por alguna razón no se puede asignar, lo ignoramos
                                pass

                        # Enviar correo si tiene e-mail y está configurado el mail backend
                        if mencionado.email:
                            send_mail(
                                subject=f"Te respondieron en '{post.titulo}'",
                                message=f"{request.user.username} respondió: {comentario.texto}",
                                from_email=getattr(settings, 'DEFAULT_FROM_EMAIL', None),
                                recipient_list=[mencionado.email],
                            )
                        break
                    except User.DoesNotExist:
                        continue

            return redirect('detalle_post', pk=post.pk)
        # si el form no es válido, renderizamos de nuevo con errores

    else:
        form = ComentarioForm()

    return render(request, 'blog/post_detail.html', {
        'post': post,
        'comentarios': comentarios,
        'form': form
    })

# Página de inicio
def home(request):
    return render(request, 'index.html')
