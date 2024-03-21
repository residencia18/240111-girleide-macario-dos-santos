from django.contrib import admin
'''importar o que tá no models'''
from blogCrias_app.models import Topic, Entry

admin.site.register(Topic)
admin.site.register(Entry)

