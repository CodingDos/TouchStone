from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import BrailleSerializer, WordSerializer, PhraseSerializer
from .models import Braille, Words, Phrases
from rest_framework import generics, filters, permissions
from django.db.models import Q

class Home(APIView):
    def get(self, request):
        content = {'message': 'Welcome to the TouchStone api home route!'}
        return Response(content)


class BrailleList(generics.ListAPIView):
    queryset = Braille.objects.all()
    serializer_class = BrailleSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['english', 'braille', 'binary']
    ordering_fields = ['english', 'binary']


class BrailleDetail(generics.RetrieveAPIView):
    serializer_class = BrailleSerializer

    def get_queryset(self):
        info = self.kwargs['info']
        binaryinfo = 0
        if info.isdigit() :
            binaryinfo = int(info)
        return Braille.objects.filter(Q(english=info) | Q(braille=info) | Q(binary=binaryinfo))

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
    search_fields = ['phrase']


class PhraseDetail(generics.RetrieveAPIView):
    serializer_class = PhraseSerializer

    def get_queryset(self):
        phrase = self.kwargs['phrase']
        return Words.objects.filter(phrase=phrase)

    def get_object(self):
        queryset = self.get_queryset()
        obj = generics.get_object_or_404(queryset)
        self.check_object_permissions(self.request, obj)
        return obj


class PhraseIdDetail(generics.RetrieveAPIView):
    serializer_class = PhraseSerializer
    queryset = Phrases.objects.all()
    lookup_field = 'id'
