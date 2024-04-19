from django.db import models

# Create your models here.

TYPE = (
        ('abc', 'Alphabet'),
        ('123', 'Numbers'),
        ('!?.', 'Special Characters'),
        ('the', 'Combo Characters')
        )

class Braille(models.Model):
    binary = models.CharField()
    english = models.CharField()
    braille_img = models.CharField(null=True, blank=True)
    learning_img = models.CharField(null=True, blank=True)
    category = models.CharField(max_length=3, choices=TYPE, null=True, blank=True)


    def __str__(self):
        return f'{self.english} - {str(self.binary)}'

class Words(models.Model):
    word = models.CharField()
    img = models.CharField()
    # im not sure exactly how we want to store the img for now im just doing url

    def __str__(self):
        return self.word

class Phrases(models.Model):
    phrase = models.CharField()
    #img? = models.CharField()

    def __str__(self):
        return self.phrase
