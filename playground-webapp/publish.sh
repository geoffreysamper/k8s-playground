docker build -t geoffreysamper/k8s-playground:$TAG . 
 if [ $? -eq 0 ];
      then

        docker push geoffreysamper/k8s-playground:$TAG
     else
        echo "FAILED TO PUSH"
 fi