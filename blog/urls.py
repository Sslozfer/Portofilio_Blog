from django.urls import path
from . import views

urlpatterns = [
    path('', views.lista_posts, name='lista_posts'),
    path('<int:pk>/', views.detalle_post, name='detalle_post'),
]
