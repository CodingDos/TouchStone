from django.http import JsonResponse
# importing for api key
import google.generativeai as genai
# importing for api key
# from .generator_utils import generate_content, upload_if_needed, cleanup_files, model
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import BrailleSerializer, WordSerializer, PhraseSerializer
from .models import Braille, Words, Phrases
from rest_framework import generics, filters, permissions
from django.db.models import Q
# this is for api key function
from dotenv import load_dotenv
load_dotenv()


import os
class Home(APIView):
    def get(self, request):
        content = {'message': 'Welcome to the TouchStone api home route!'}
        return Response(content)


class BrailleList(generics.ListAPIView):
    queryset = Braille.objects.all()
    serializer_class = BrailleSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['english', 'category']
    ordering_fields = ['english', 'category']


class BrailleDetail(generics.RetrieveAPIView):
    serializer_class = BrailleSerializer

    def get_queryset(self):
        info = self.kwargs['info']
        return Braille.objects.filter(Q(english=info) | Q(binary=info))

    def get_object(self):
        queryset = self.get_queryset()
        obj = generics.get_object_or_404(queryset)
        self.check_object_permissions(self.request, obj)
        return obj

class BrailleDetailSpecific(generics.RetrieveAPIView):
    serializer_class = BrailleSerializer

    def get_queryset(self):
        info = self.kwargs['info']
        category = self.kwargs['category']
        return Braille.objects.filter((Q(english=info) | Q(binary=info)) & Q(category=category))

    def get_object(self):
        queryset = self.get_queryset()
        obj = generics.get_object_or_404(queryset)
        self.check_object_permissions(self.request, obj)
        return obj


class WordsList(generics.ListAPIView):
    queryset = Words.objects.all()
    serializer_class = WordSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['word']


class WordDetail(generics.RetrieveAPIView):
    serializer_class = WordSerializer

    def get_queryset(self):
        word = self.kwargs['word']
        return Words.objects.filter(word=word)

    def get_object(self):
        queryset = self.get_queryset()
        obj = generics.get_object_or_404(queryset)
        self.check_object_permissions(self.request, obj)
        return obj


class PhrasesList(generics.ListAPIView):
    queryset = Phrases.objects.all()
    serializer_class = PhraseSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['phrase', 'category']


class PhraseDetail(generics.RetrieveAPIView):
    serializer_class = PhraseSerializer

    def get_queryset(self):
        phrase = self.kwargs['phrase']
        print (phrase)
        return Phrases.objects.filter(phrase=phrase)

    def get_object(self):
        queryset = self.get_queryset()
        obj = generics.get_object_or_404(queryset)
        self.check_object_permissions(self.request, obj)
        return obj


class PhraseIdDetail(generics.RetrieveAPIView):
    serializer_class = PhraseSerializer
    queryset = Phrases.objects.all()
    lookup_field = 'id'

apiKey = os.getenv('API_KEY')
genai.configure(api_key=apiKey)

class GeminiAPIView(APIView):
    def post(self, request, *args, **kwargs):
        input_text = request.data.get('input')
        if not input_text:
            return Response({"error": "No input provided"}, status=status.HTTP_400_BAD_REQUEST)

        # Initialize the Gemini model
        model = genai.GenerativeModel(model_name="gemini-1.5-pro-latest")        
        response = model.generate_content(input_text)

        if response:
            return Response({"response": response.text}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Failed to generate response"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

