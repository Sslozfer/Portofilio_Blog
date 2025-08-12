from django import forms
from .models import Comentario

class ComentarioForm(forms.ModelForm):
    class Meta:
        model = Comentario
        fields = ['texto']  
        widgets = {
        'texto': forms.Textarea(attrs={
        'id': 'id_texto',
        'rows': 3,
        'placeholder': 'Escribe tu comentario...'
        }),
}

