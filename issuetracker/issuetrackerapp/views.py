from rest_framework_mongoengine import generics
from .models import Issue
from .serializers import IssueSerializer


class IssueListCreateView(generics.ListAPIView,
                          generics.CreateAPIView,
                          generics.GenericAPIView):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer
    print("I'm working")
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class IssueRetrieveUpdateDestroyView(generics.RetrieveAPIView,
                                      generics.RetrieveUpdateAPIView,
                                      generics.RetrieveDestroyAPIView,
                                      generics.GenericAPIView):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer
    print("I'm working too")
    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        print("Deletion has been called")
        return self.destroy(request, *args, **kwargs)
