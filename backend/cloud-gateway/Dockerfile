FROM openjdk:latest
ADD target/cloud-gateway-0.0.1-SNAPSHOT.jar /tmp
WORKDIR /tmp
EXPOSE 9191
ENTRYPOINT ["java", "-jar", "cloud-gateway-0.0.1-SNAPSHOT.jar"]
