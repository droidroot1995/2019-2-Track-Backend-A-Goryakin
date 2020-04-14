from django_elasticsearch_dsl import Document, fields
from django_elasticsearch_dsl.registries import registry
from chats.models import Chat, Message
from users.models import User

@registry.register_document
class ChatDocument(Document):
    class Index:
        name = 'chats'
        settings = {'number_of_shards': 1, 'number_of_replicas': 1}
        
    class Django:
        model = Chat
        fields = ['topic', 'last_message']
        
        
@registry.register_document
class MessageDocument(Document):
    
    chat = fields.ObjectField(properties={
        'id': fields.IntegerField()
    })
    
    user = fields.ObjectField(properties={
        'first_name': fields.TextField()
    })
    
    class Index:
        name = 'messages'
        settings = {'number_of_shards': 1, 'number_of_replicas': 1}
        
    class Django:
        model = Message
        fields = ['content']
        related_models=[Chat, User]
        
    def get_queryset(self):
        return super(MessageDocument, self).get_queryset().select_related(
            'chat', 'user'
        )
        
    def get_instances_from_related(self, related_instance):
        if isinstance(related_instance, Chat):
            return related_instance.message_set.all()
        elif isinstance(related_instance, User):
            return related_instance.message