"""
Django settings for messenger project.

Generated by 'django-admin startproject' using Django 2.2.5.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.2/ref/settings/
"""

import os
import sys
from celery.schedules import crontab

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'u+tap4zc_=a6c2gme*l-+fsge-@&1*xt^bkh1oqfj+)-)hw-jz'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

AUTHENTICATION_BACKENDS =[
    'social_core.backends.linkedin.LinkedinOAuth2',
    'social_core.backends.instagram.InstagramOAuth2',
    'social_core.backends.facebook.FacebookOAuth2',
    'social_core.backends.vk.VKOAuth2',
    'django.contrib.auth.backends.ModelBackend',
]


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',
    'users',
    'chats',
    'main',
    'social_django',
    'sslserver',
    'crispy_forms',
    'rest_framework',
    'captcha',
    'django_elasticsearch_dsl',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django_cprofile_middleware.middleware.ProfilerMiddleware',
]

DJANGO_CPROFILE_MIDDLEWARE_REQUIRE_STAFF = False

CORS_ALLOW_CREDENTIALS = True

CORS_ORIGIN_WHITELIST = ['https://localhost:3000', 'https://192.168.0.107:3000']

CSRF_TRUSTED_ORIGINS = ['https://localhost:3000', 'https://192.168.0.107:3000']

CENTRIFUGE_ADDRESS = 'http://localhost:8080/api'
CENTRIFUGE_SECRET = '1e5d7444-062c-4308-b138-7a1cab636160'
CENTRIFUGE_API = 'e4eef5ce-58af-4511-9505-6c1c67dee4a9'

ROOT_URLCONF = 'application.urls'


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'social_django.context_processors.backends',
            ],
        },
    },
]

WSGI_APPLICATION = 'application.wsgi.application'


# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'messenger', #'messenger_test', #'messenger',
        'USER': 'droidroot',
        'PASSWORD': '25091995',
        #'HOST':'database',
        'HOST':'127.0.0.1',
        'PORT':'5432',
        'TEST': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': ':memory:',
        }
    }
}

# Cache

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.memcached.MemcachedCache',
        'LOCATION': '127.0.0.1:11211',
    }
}

# Email

'''EMAIL_HOST = 'smtp.sendgrid.net'
EMAIL_HOST_USER = 'apikey'
EMAIL_HOST_PASSWORD = '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'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
DEFAULT_FROM_EMAIL = 'droidroot1005@gmail.com'''

'''EMAIL_HOST = 'smtp.mail.ru'
EMAIL_PORT = 465
EMAIL_HOST_USER = 'shadow1995@mail.ru'
EMAIL_HOST_PASSWORD = '25.09.1995.'
EMAIL_USE_TLS = True
EMAIL_USE_SSL = False
DEFAULT_FROM_EMAIL = 'shadow1995@mail.ru'
SERVER_EMAIL = DEFAULT_FROM_EMAIL'''

'''EMAIL_HOST = 'smtp.yandex.ru'
EMAIL_PORT = 465
EMAIL_HOST_USER = 'alex-foxic'
EMAIL_HOST_PASSWORD = 'dvlbfuukabvzljtc'
EMAIL_USE_TLS = False
EMAIL_USE_SSL = True
DEFAULT_FROM_EMAIL = 'alex-foxic@yandex.ru'
SERVER_EMAIL = DEFAULT_FROM_EMAIL'''

EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'droidroot.ttfs@gmail.com'
EMAIL_HOST_PASSWORD = 'viabeagcshnbgsjp' # 'droidroot_tt_fullstack1995'
DEFAULT_FROM_EMAIL = 'droidroot.ttfs@gmail.com'
#  DEFAULT_TO_EMAIL = 'droidroot.ttfs@gmail.com'

# Administator list

ADMINS = [('Droid','droidroot.ttfs@gmail.com'),]

# File storage

AWS_S3_ENDPOINT_URL = 'http://hb.bizmrg.com'
AWS_ACCESS_KEY_ID = 'oNjWxBKB4LSPKSAq4oCBwd'
AWS_SECRET_ACCESS_KEY = '8p8VQ7qqxaZfNk7Tph89NorDuCWhHggspBoQjPzkT3Rb'
AWS_STORAGE_BUCKET_NAME = 'track-goryakin'
DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'


# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

AUTH_USER_MODEL = "users.User"


# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = 'ru-Ru'

TIME_ZONE = 'Europe/Moscow'

USE_I18N = True

USE_L10N = True

USE_TZ = True

CELERY_BROKER_URL = 'redis://localhost:6379'  
CELERY_RESULT_BACKEND = 'redis://localhost:6379'  
CELERY_ACCEPT_CONTENT = ['application/json']  
CELERY_RESULT_SERIALIZER = 'json'  
CELERY_TASK_SERIALIZER = 'json' 
CELERY_TIMEZONE = 'Europe/Moscow'
CELERY_BEAT_SCHEDULE = {
    'user_counter': {
        'task': 'users.tasks.users_counter',
        'schedule': 30.0, # crontab(minute=59, hour=23),
        'args': ()
    },
}

ELASTICSEARCH_DSL={
    'default': {
        'hosts': 'localhost:9200'
    },
}

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

LOGIN_URL = 'login'
LOGIN_REDIRECT_URL = 'http://192.168.0.107:3000/list' # 'http://localhost:3000/list'  # 'home'
LOGOUT_URL = 'logout'
LOGOUT_REDIRECT_URL = 'login'
STATIC_URL = '/static/'

SOCIAL_AUTH_FACEBOOK_KEY = '777955572665542' # App ID
SOCIAL_AUTH_FACEBOOK_SECRET = '565b816281f29463c126fe9c4213d59c' # App Secret

SOCIAL_AUTH_FACEBOOK_SCOPE = ['email']
SOCIAL_AUTH_FACEBOOK_PROFILE_EXTRA_PARAMS = {
    'locale' : 'ru_RU',
    'fields' : 'id, name, email, age_range',
}

SOCIAL_AUTH_INSTAGRAM_KEY = '2665167783552204'        #Client ID
SOCIAL_AUTH_INSTAGRAM_SECRET = '5bfcfb904cbb1d94c2aca878dc1250a6'  #Client SECRET

SOCIAL_AUTH_VK_OAUTH2_KEY = '7224092'
SOCIAL_AUTH_VK_OAUTH2_SECRET = 'yrdZD3UwYo6NzRRlGAk2'
SOCIAL_AUTH_VK_OAUTH2_SCOPE = ['email']
SOCIAL_AUTH_VK_PROFILE_EXTRA_PARAMS = {
    'locale' : 'ru_RU',
    'fields' : 'id, name, email, age_range',
}

#STATIC_URL = "/static/"

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
]

TESTING = 'test' in sys.argv or 'jenkins' in sys.argv

if TESTING:
    DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': ':memory:',
    }
}

try:
    from application.local_settings import *
except ImportError:
    pass
