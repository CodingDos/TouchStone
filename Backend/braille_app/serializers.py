from rest_framework import serializers
from .models import Braille, Words, Phrases
from rest_framework.validators import UniqueTogetherValidator

class BrailleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Braille
        fields = '__all__'
        Validators = [
                UniqueTogetherValidator(
                    queryset = Braille.objects.all(),
                    fields = ['english', 'braille', 'binary'],
                    message = 'you did this one already you goof'
                    )
                ]

class WordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Words
        fields = '__all__'

class PhraseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phrases
        fields = '__all__'
