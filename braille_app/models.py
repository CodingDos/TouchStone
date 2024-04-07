from django.db import models

# Create your models here.

class Home(APIView):
  def get(self, request):
    content = {'message': 'Welcome to the cat-collector api home route!'}
    return Response(content)
