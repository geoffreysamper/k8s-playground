# run you first container 
```
docker run -it ubuntu bash
```

# run first container with enviremont variables
```
docker run -it -e a=b ubuntu bash
printenv
```

# run container with volumes
```
docker volume create myvol

docker run -it --mount source=myvol,target=/myvol ubuntu bash
cd /myvol
touch hello.txt

ls /var/lib/docker/volumes/myvol/_data

```

# try to build you own docker image 
navigate to folder playground-webapp-v1 and run command below

```
docker build -t playground-webapp .  
```

# run you docker image 
docker run -p 4000:4000 playground-webapp

# Do it your self
- clone repo https://github.com/docker-training/webapp
- make a docker build
- try to run the docker image tip port for this app is 5000