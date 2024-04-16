from django.contrib import admin
from .models import Braille, Words, Phrases

# Register your models here.
admin.site.register(Braille)
admin.site.register(Words)
admin.site.register(Phrases)
