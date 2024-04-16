from django.urls import path
from .views import Home, BrailleList, BrailleDetail

urlpatterns = [
        path('', Home.as_view(), name='home'),
        path('braille/', BrailleList.as_view(), name='braille-list'),
        path('braille/<str:info>/', BrailleDetail.as_view(), name='braille-detail'),
        ]
