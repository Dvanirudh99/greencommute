FROM openjdk:latest
ADD target/Job-service-0.0.1-SNAPSHOT.jar /tmp
WORKDIR /tmp
EXPOSE 9004
ENTRYPOINT ["java", "-jar", "Job-service-0.0.1-SNAPSHOT.jar"]
