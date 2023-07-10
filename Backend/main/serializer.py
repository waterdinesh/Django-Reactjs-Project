from rest_framework import serializers
from .models import Category,Discover,Discover2,BookClass,Contact,TrainerApply

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields='__all__'

class DiscoverSerializer(serializers.ModelSerializer):
    class Meta:
        model=Discover
        fields='__all__'

class Discover2Serializer(serializers.ModelSerializer):
    class Meta:
        model=Discover2
        fields='__all__'

class BookClassSerializer(serializers.ModelSerializer):
    class Meta:
        model=BookClass
        fields='__all__'

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model=Contact
        fields='__all__'

class TrainerApplySerializer(serializers.ModelSerializer):
    class Meta:
        model=TrainerApply
        fields='__all__'