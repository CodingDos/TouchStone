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

class Home(APIView):
    def get(self, request):
        content = {'message': 'Welcome to the TouchStone api home route!'}
        return Response(content)


class BrailleList(generics.ListAPIView):
    queryset = Braille.objects.all()
    serializer_class = BrailleSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['english', 'binary', 'category']
    ordering_fields = ['english', 'binary', 'category']


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

genai.configure(api_key='AIzaSyCjhhJeQrHy-TrRJnQCAV2QXfgBOVSG_v8')

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


# class GenerateBrailleAPIView(APIView):
#     def post(self, request):
#         print(request.data)
#         input_text = request.data.get('input')
#         print(input_data)
#         if not input_text:
#             return Response({"error": "Input text is required"}, status=status.HTTP_400_BAD_REQUEST)

#         try:
#             payload = {
#               "content": [
#                   {
#                     "text": input_text
#                   }
#                 ]
#             }
#             response = request.post(api_url, json=payload, headers=headers)
#             response_data = response.json()
#             # response = model.generate_content(payload)
#             if response.status_code == 200:
#                 return Response({"response": response_data}, status=status.HTTP_200_OK)
#             else:
#                 return Response({"error": "API error", "details": response_data}, status=response.status_code)
#         except Exception as e:
#             return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

# class GenerateContentView(APIView):
#     def post(self, request):
#         prompt_parts = request.data.get('prompt_parts')
#         uploaded_files = upload_if_needed(request.data.get('file_path'))
#         prompt_parts += uploaded_files
#         content = generate_content(prompt_parts)
#         cleanup_files(uploaded_files)
#         return JsonResponse({'generated_content': content})

# # class GenerateContentView(APIView):
# #     def post(self, request):
# #         inputs = ['a', 'b', 'c', 'e', 'f', 'g']  # Simplified example
# #         output_mapping = {
# #             'a': '100000', 'b': '110000', 'c': '100100', 'e': '100010', 'f': '110100', 'g': '110110'
# #         }
# #         prompt_parts = []
# #         for inp in inputs:
# #             prompt_parts.append(f"input {inp}")
# #             prompt_parts.append(f"output {output_mapping[inp]}")
# #             # If image upload is needed:
# #             # image_path = f"{inp}.png"
# #             # prompt_parts.extend(upload_if_needed(image_path))

# #         # Assuming you have a function to process these parts
# #         content = process_prompt_parts(prompt_parts)  # Define this function to handle AI processing
# #         return Response({'generated_content': content})
