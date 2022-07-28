FROM openjdk:latest
ADD target/SaveJob-service-0.0.1-SNAPSHOT.jar /tmp
WORKDIR /tmp
EXPOSE 9006
ENTRYPOINT ["java", "-jar", "SaveJob-service-0.0.1-SNAPSHOT.jar"]
