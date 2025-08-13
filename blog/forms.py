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
                'data-i18n-placeholder': 'form_placeholder_texto',
                'placeholder': '',  
            }),
        }
        labels = {
            'texto': '',  
        }
        help_texts = {
            'texto': '',  
        }

