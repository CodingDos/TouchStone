from django.db import models

# Create your models here.

class Braille(models.Model):
    binary = models.IntegerField()
    english = models.CharField()
    braille = models.CharField(max_length=1)

    def __Str__(self):
        return f'{self.english} - {str(self.binary)} - {self.braille}'

class Words(models.Model):
    word = models.CharField()
    img = models.CharField()
    # im not sure exactly how we want to store the img for now im just doing url

    def __Str__(self):
        return self.word

class Phrases(models.Model):
    phrase = models.CharField()
    #img? = models.CharField()

    def __Str__(self):
        return self.phrase
