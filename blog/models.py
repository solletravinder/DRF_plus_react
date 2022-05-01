from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

STATUS = (
    ("draft", "Draft"),
    ("published", "Published")
)

class PostObjects(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(status='published')


class Category(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.name}"

class Post(models.Model):
    objects = models.Manager()
    postobjects = PostObjects()
    title = models.CharField(max_length=200, unique=True)
    excerpt = models.TextField(null=True)
    slug = models.SlugField(max_length=200, unique=True)
    content = models.TextField() 
    author = models.ForeignKey(User, on_delete= models.CASCADE,related_name='blog_posts')
    category = models.ForeignKey(Category, on_delete=models.PROTECT, default=1)
    published = models.DateTimeField(default=timezone.now)
    updated_on = models.DateTimeField(auto_now= True)
    created_on = models.DateTimeField(auto_now_add=True)
    status = models.CharField(choices=STATUS, default='published', max_length=500)

    class Meta:
        ordering = ['-published']

    def __str__(self):
        return f"{self.title}"