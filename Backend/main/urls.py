from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import CategoryView,DiscoverView,Discover2View,ImageView,contact_form_submit,bookclass_form_submit,trainerapply_form_submit
urlpatterns = [
   
    path("category/",CategoryView.as_view(), name="category-views"),
    path("category/<int:id>",CategoryView.as_view(), name="category-views"),
    path("discover/",DiscoverView.as_view(), name="discover-views"),
    path("discover/<int:id>",DiscoverView.as_view(), name="discover-views"),
    path("discover2/",Discover2View.as_view(), name="discover2-views"),
    path("discover2/<int:id>",Discover2View.as_view(), name="discover2-views"),
    path("addimg/<str:image_name>", ImageView.as_view(), name="image-view"),
    path('bookclass/', bookclass_form_submit, name='bookclass_form_submit'),
    path('contact/', contact_form_submit, name='contact_form_submit'),
    path('trainerapply/', trainerapply_form_submit, name='trainerapply_form_submit'),
    # path("bookclass/",BookClassView.as_view(), name="bookclass-views"),
    # path("bookclass/<int:id>",BookClassView.as_view(), name="bookclass-views"),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)