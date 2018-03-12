# Lab

## Lab 1: create a pod

``` bash

kubectl create -f ./deployments/01-simple-pod.yaml
 ```
 
### Commands

```bash

kubectl log k8-playground-webapp
kubectl describe k8-playground-webapp

```

## Lab 2: Create a service of type loadbalancer

``` bash

kubectl create -f ./deployments/02-services.yml
minikube service k8-playground-svc  # to get ip 

 ```

## Lab 3: create simple deployment

```bash

kubectl create -f ./deployments/03-deployment.yml

```

### scale

```bash
kubectl scale  deployment/k8-playground-webapp --replicas=5
```

### delete a pod

``` bash
kubectl delete pod name
```


## Lab 4: create deployment with readyness and health probes

```bash
kubectl create -f ./deployments/04-deployment.yml
 ```

### edit deployement to do a rolleout

```bash 
kubectl edit deployment k8-playground-webapp #v2.0
```

## undo deployment

``` bash

kubectl rolleout undo

```

## deploy a bad version 

```bash 

kubectl edit deployment k8-playground-webapp #v2.1-bad

```
