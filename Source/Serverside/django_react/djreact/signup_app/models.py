from django.contrib.auth.models import AbstractUser, BaseUserManager ## A new class is imported. ##
from django.db import models
from django.utils.translation import ugettext_lazy as _

# Create your models here.
class UserManager(BaseUserManager):
    #Define a model manager for User model with no username field
    use_in_migrations = True

    def _create_user(self, email_id, application_username, password, **extra_fields):
        #Create and save a User with the given email and password.
        if not email_id:
            raise ValueError('The Email must be set')
        email_id = self.normalize_email(email_id)
        user = self.model(email=email_id, username=application_username, **extra_fields)
        user.set_password(password)
        user.save()
        return user

   
class User(AbstractUser):
    username = None
    email_id = models.EmailField(_('email address'), unique=True, primary_key=True)
    application_username = models.CharField(max_length=20, unique= True)
    USERNAME_FIELD = 'email_id'
    REQUIRED_FIELDS = []
    objects = UserManager()

"""
class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True, null=True)
    is_staff = models.BooleanField(
        _('staff status'),
        default=False,
        help_text=_('Designates whether the user can log into this site.'),
    )
    is_active = models.BooleanField(
        _('active'),
        default=True,
        help_text=_(
            'Designates whether this user should be treated as active. '
            'Unselect this instead of deleting accounts.'
        ),
    )
    USERNAME_FIELD = 'email'
    objects = MyUserManager()

    def __str__(self):
        return self.email

    def get_full_name(self):
        return self.email


    def get_short_name(self):
        return self.email
"""