# Labs Session 2

## Lab 1 deployments continued


### Deployment v1 
 - 
 - execute the deployment ```kubectl create -f  deployments/01-deployment.yaml```
 - ```kubectl get deployments```
### Deployment bad version

- update the image tag to 2.0```kubectl edit deployment k8-playground-webapp``` 
- check status 
- undo the image ``` kubectl rollout status deployments k8-playground-webapp```

## Lab 2 config maps
In this lab we will only use envFrom there are a lot of options 
 - __optional__ ```kubectl create -f ./deployments/00-service.yaml```
- to create a config map run ```kubectl create -f ./deployments/02-configmap.yaml```
- now checkout run a new pod ```kubectl create -f ./deployments/03-simple-pod.yaml```
- run command ```minikube service k8-playground-svc ```

## Lab 3 config maps from files
- run follow command ```kubectl create configmap prod.web.config  --from-file=./deployments/web.config```
- run follow command ```kubectl create -f ./deployments/04-simple-pod.yaml```
- run the command describe on the ```kubectl describe pod k8-playground-webapp```

## Lab 4 kubectl exec
Allows you to interact with the container
- run follow commmand ```kubectl exec k8-playground-webapp -- uname -a ```
- interactive session ```kubectl exec -it k8-playground-webapp -- bash ```

