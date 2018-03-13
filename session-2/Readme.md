# Labs

## lab 1

### Deployment v1 

 - open dashboard ```minikube dashboard```
 - execute the deployment ```kubectl create -f  deployments/01-deployment.yaml```

### Deployment bad version

- update the image tag to 2.0```kubectl edit deployment k8-playground-webapp``` 
- check dashboard
- undo the image ``` kubectl rollout status deployments k8-playground-webapp```