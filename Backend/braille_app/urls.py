from django.urls import path
from .views import Home, BrailleList, BrailleDetail, WordsList, WordDetail, PhrasesList, PhraseDetail, PhraseIdDetail, GeminiAPIView

urlpatterns = [
        path('', Home.as_view(), name='home'),
        path('braille/', BrailleList.as_view(), name='braille-list'),
        path('braille/<str:info>/', BrailleDetail.as_view(), name='braille-detail'),
        path('words/', WordsList.as_view(), name='word-list'),
        path('words/<str:word>/', WordDetail.as_view(), name='word-detail'),
        path('phrases/', PhrasesList.as_view(), name='phrase-list'),
        path('phrases/<str:phrase>/', PhraseDetail.as_view(), name='phrase-detail'),
        #^the one aboe isn't working well rn
        path('phrases/id/<int:id>/', PhraseIdDetail.as_view(), name='phrase-detail-id'),
        path('api/gemini/', GeminiAPIView.as_view(), name='gemini-api'),
        ]
