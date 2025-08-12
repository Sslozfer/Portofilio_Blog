from django.shortcuts import render, get_object_or_404
from .models import Post
from .forms import ComentarioForm

def lista_posts(request):
    posts = Post.objects.order_by('-fecha_publicacion')
    years = Post.objects.dates('fecha_publicacion', 'year', order='DESC')
    return render(request, 'blog/post_list.html', {
        'posts': posts,
        'years': years
    })

def detalle_post(request, pk):
    post = get_object_or_404(Post, pk=pk)
    comentarios = post.comentarios.order_by('-fecha')
    
    if request.method == 'POST':
        form = ComentarioForm(request.POST)
        if form.is_valid():
            comentario = form.save(commit=False)
            comentario.post = post
            comentario.save()
    else:
        form = ComentarioForm()

    return render(request, 'blog/post_detail.html', {
        'post': post,
        'comentarios': comentarios,
        'form': form
    })

def home(request):
    return render(request, 'index.html')
