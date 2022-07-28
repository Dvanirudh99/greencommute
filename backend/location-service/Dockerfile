FROM openjdk:latest
ADD target/Location-service-0.0.1-SNAPSHOT.jar /tmp
WORKDIR /tmp
EXPOSE 9001
ENTRYPOINT ["java", "-jar", "Location-service-0.0.1-SNAPSHOT.jar"]
