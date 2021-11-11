from rest_framework import serializers 
from django.contrib.auth.models import User 
from django.contrib.auth import authenticate 

#User Serializer
class UserSerializer (serializers.ModelSerializer):
    class Meta:
        model=User
        fields=('id', 'username', 'groups')

#Register Serializer 
class RegisterSerializer (serializers.ModelSerializer):
    class Meta:
        model=User
        fields=('id', 'username', 'password', 'groups')
        extra_kwargs={'password': {'write_only': True}}
    
    def create(self, validated_data):
        user=User.objects.create_user(validated_data['username'], password= validated_data['password'], groups=validated_data['groups'] )

        return user


#Login Serializer 
class LoginSerializer(serializers.Serializer):
    username=serializers.CharField()
    password=serializers.CharField()

    def validate(self,data):
        user=authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")