from django.db import models
from django.utils import timezone

class Post(models.Model):
    titulo = models.CharField(max_length=200)
    contenido = models.TextField()
    fecha_publicacion = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.titulo

class Imagen(models.Model):
    post = models.ForeignKey(Post, related_name='imagenes', on_delete=models.CASCADE)
    imagen = models.ImageField(upload_to='imagenes_post/')

    def __str__(self):
        return f"Imagen de {self.post.titulo}"
    
class ArchivoMultimedia(models.Model):
    post = models.ForeignKey(Post, related_name='archivos', on_delete=models.CASCADE)
    archivo = models.FileField(upload_to='archivos_post/')

    def __str__(self):
        return f"Archivo para {self.post.titulo}"

class Comentario(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comentarios')
    autor = models.CharField(max_length=100)
    texto = models.TextField()
    fecha = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f'Comentario de {self.autor} en {self.post}'


