# Generated by Django 5.0.4 on 2024-04-16 19:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('braille_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='braille',
            name='braille',
        ),
        migrations.AddField(
            model_name='braille',
            name='braille_img',
            field=models.CharField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='braille',
            name='category',
            field=models.CharField(blank=True, choices=[('abc', 'Alphabet'), ('123', 'Numbers'), ('!?.', 'Special Characters')], max_length=3, null=True),
        ),
        migrations.AddField(
            model_name='braille',
            name='learning_img',
            field=models.CharField(blank=True, null=True),
        ),
    ]
