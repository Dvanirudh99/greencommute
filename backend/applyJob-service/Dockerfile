FROM openjdk:latest
ADD target/ApplyJob-service-0.0.1-SNAPSHOT.jar /tmp
WORKDIR /tmp
EXPOSE 9005
ENTRYPOINT ["java", "-jar", "ApplyJob-service-0.0.1-SNAPSHOT.jar"]
