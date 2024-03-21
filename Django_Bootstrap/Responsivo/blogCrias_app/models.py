'''Utilizado pra controlar bancos de dados'''
from django.db import models

class Topic(models.Model):
    #para cada tópico posso ter várias anotações
    text = models.CharField(max_length=200)
    date_added = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.text

class Entry(models.Model):
    # assunto relacionado ao tópico
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    text = models.TextField() #tamanho maior
    date_added = models.DateTimeField(auto_now_add=True)
    
class Meta: 
    verbose_name_plural = 'entries'
    
    def __str__(self):
        return self.text[:50] + '...'