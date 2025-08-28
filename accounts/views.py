from django.shortcuts import render, redirect
from django.contrib.auth import login, logout
from django.contrib import messages
from .forms import CustomUserCreationForm 

def registro(request):
    next_url = request.GET.get('next', '') or request.POST.get('next', '')

    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)  
            if next_url:
                return redirect(next_url)
            return redirect('/')  
    else:
        form = CustomUserCreationForm()

    return render(request, "accounts/registro.html", {"form": form})

def logout_and_redirect(request):
    next_url = request.GET.get('next') or request.META.get('HTTP_REFERER') or '/'
    logout(request)
    return redirect(next_url)

