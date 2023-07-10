from django.contrib import admin
from .models import Category, Discover,Discover2,BookClass,Contact,TrainerApply

# Register your models here.
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    
class DiscoverAdmin(admin.ModelAdmin):
    list_display = ('title', 'cover', )

class Discover2Admin(admin.ModelAdmin):
    list_display = ('title','cover2', 'cover', )

class BookClassAdmin(admin.ModelAdmin):
    list_display = ('EmailAddress','Employee', 'YourName','LastName','LocalTime','Payment','PhoneNumber','Service')

class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email','phonenumber','subject', 'message')

class TrainerApplyAdmin(admin.ModelAdmin):
    list_display = ('name','phonenumber', 'email', 'message')


admin.site.register(Category, CategoryAdmin)
admin.site.register(Discover, DiscoverAdmin)
admin.site.register(Discover2, Discover2Admin)
admin.site.register(BookClass, BookClassAdmin)
admin.site.register(Contact, ContactAdmin)
admin.site.register(TrainerApply, TrainerApplyAdmin)