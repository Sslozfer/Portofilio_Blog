from django.contrib import admin
from .models import Post, Comentario, ArchivoMultimedia

class ArchivoMultimediaInline(admin.TabularInline):
    model = ArchivoMultimedia
    extra = 1

class PostAdmin(admin.ModelAdmin):
    inlines = [ArchivoMultimediaInline]

admin.site.register(Post, PostAdmin)
admin.site.register(Comentario)
