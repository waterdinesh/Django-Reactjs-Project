from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=20)

class Discover(models.Model):
    title = models.CharField(max_length=20)
    cover = models.ImageField(upload_to='addimg/', null=True, blank=True)

class Discover2(models.Model):
    title = models.CharField(max_length=20)
    cover2= models.CharField(max_length=500)
    cover = models.ImageField(upload_to='addimg/', null=True, blank=True)

class BookClass(models.Model):
    EmailAddress = models.CharField(max_length=20)
    Employee = models.CharField(max_length=500)
    YourName=models.CharField(max_length=50)
    LastName=models.CharField(max_length=50)
    LocalTime=models.CharField(max_length=50)
    Payment=models.IntegerField()
    PhoneNumber=models.IntegerField()
    Service=models.CharField(max_length=50)

class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phonenumber = models.IntegerField()
    subject = models.CharField(max_length=255)
    message = models.TextField()
    

    def __str__(self):
        return self.name

class TrainerApply(models.Model):
    name = models.CharField(max_length=255)
    phonenumber = models.IntegerField()
    email = models.EmailField()
    message = models.TextField()
    

    def __str__(self):
        return self.name
