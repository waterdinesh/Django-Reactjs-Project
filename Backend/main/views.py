from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, APIView
from .models import Category,Discover,Discover2,Contact,BookClass,TrainerApply
from .serializer import CategorySerializer,DiscoverSerializer,Discover2Serializer,ContactSerializer,BookClassSerializer,TrainerApplySerializer
from django.views import View
from django.conf import settings
import os
from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticated



class CategoryView(APIView):
   
    def get(self, request):
        categories = Category.objects.all().values()
        return Response({"category": categories})

    def get(self, request, id=None):
        if id is not None:
            category = Category.objects.filter(id=id).values()
        else:
            category = Category.objects.all().values()
        return Response({"category": category})

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

    def put(self, request, id):  
        category = Category.objects.get(id=id)
        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

    def delete(self, request, id):  
        category = Category.objects.get(id=id)
        category.delete()
        return Response({"message": "Category deleted successfully."})
    
class DiscoverView(APIView):

    def get(self, request):
        discoveries = Discover.objects.all().values()
        return Response({"discover": discoveries})

    def get(self, request, id=None):
        if id is not None:
            discover = Discover.objects.filter(id=id).values()
        else:
            discover = Discover.objects.all().values()
        return Response({"discover": discover})

    def post(self, request):
        serializer = DiscoverSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

    def put(self, request, id):  
        discover = Discover.objects.get(id=id)
        serializer = DiscoverSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

    def delete(self, request, id):  
        discover = Discover.objects.get(id=id)
        discover.delete()
        return Response({"message": "Category deleted successfully."})

class Discover2View(APIView):

    def get(self, request):
        discover2ies = Discover2.objects.all().values()
        return Response({"discover2": discover2ies})

    def get(self, request, id=None):
        if id is not None:
            discover2 = Discover2.objects.filter(id=id).values()
        else:
            discover2 = Discover2.objects.all().values()
        return Response({"discover2": discover2})

    def post(self, request):
        serializer = Discover2Serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

    def put(self, request, id):  
        discover2 = Discover2.objects.get(id=id)
        serializer = Discover2Serializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

    def delete(self, request, id):  
        discover2 = Discover2.objects.get(id=id)
        discover2.delete()
        return Response({"message": "Category2 deleted successfully."})

   
class ImageView(View):
    def get(self, request, image_name):
        image_path = os.path.join(settings.MEDIA_ROOT, 'addimg', image_name)
        with open(image_path, 'rb') as f:
            return HttpResponse(f.read(), content_type="image/jpeg")
  
# class BookClassView(APIView):

#     def get(self, request):
#         bookclassies = BookClass.objects.all().values()
#         return Response({"bookclass": bookclassies})

#     def get(self, request, id=None):
#         if id is not None:
#             bookclass = BookClass.objects.filter(id=id).values()
#         else:
#             bookclass = BookClass.objects.all().values()
#         return Response({"bookclass": bookclass})

#     def post(self, request):
#         serializer = BookClassSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=201)
#         return Response(serializer.errors, status=400)

#     def put(self, request, id):  
#         bookclass = BookClass.objects.get(id=id)
#         serializer = BookClassSerializer(bookclass, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=400)

#     def delete(self, request, id):  
#         bookclass = BookClass.objects.get(id=id)
#         bookclass.delete()
#         return Response({"message": "BookClass deleted successfully."})


# bookclass_form_submit = BookClassView.as_view()

@api_view(['GET', 'POST'])
def bookclass_form_submit(request, id=None):
    if request.method == 'POST':
        serializer = BookClassSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    elif request.method == 'GET':
        if id is not None:
            bookclass = BookClass.objects.filter(id=id).values()
            return Response({"bookclass": bookclass})
        else:
            bookclasses = BookClass.objects.all().values()
            return Response({"bookclasses": bookclasses})
   
@api_view(['GET', 'POST'])
def contact_form_submit(request, id=None):
    print('Request method:', request.method)
    print('Form data:', request.data)
    if request.method == 'POST':
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    elif request.method == 'GET':
        if id is not None:
            contact = Contact.objects.filter(id=id).values()
            return Response({"contact": contact})
        else:
            contacts = Contact.objects.all().values()
            return Response({"contacts": contacts})
   
@api_view(['POST', 'GET'])
def trainerapply_form_submit(request, id=None):
    if request.method == 'POST':
        serializer = TrainerApplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    elif request.method == 'GET':
        if id is not None:
            trainerapply = TrainerApply.objects.filter(id=id).values()
            return Response({"trainerapply": trainerapply})
        else:
            trainerapplys = TrainerApply.objects.all().values()
            return Response({"trainerapplys": trainerapplys})