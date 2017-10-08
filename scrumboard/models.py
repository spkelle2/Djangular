from django.db import models
# from django.utils.encoding import python_2_unicode_compatible


# @python_2_unicode_compatible
class List(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f'List: {self.name}'


# @python_2_unicode_compatible
class Card(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)


    # foreignkey(what model to relate to, how this object will be referred)
    list_guy = models.ForeignKey(List, related_name='cards')
    story_points = models.IntegerField(null=True, blank=True)
    business_value = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return f'Card: {self.title}'
