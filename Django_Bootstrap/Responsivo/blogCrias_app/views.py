from django.shortcuts import render
from blogCrias_app.models import Topic

def home(request):
    text = Topic.objects.order_by("id")
    contexto = {'text': text}
    return render(request, "index.html", contexto)
