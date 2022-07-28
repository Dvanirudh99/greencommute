FROM openjdk:latest
ADD target/Company-service-0.0.1-SNAPSHOT.jar /tmp
WORKDIR /tmp
EXPOSE 9002
ENTRYPOINT ["java", "-jar", "Company-service-0.0.1-SNAPSHOT.jar"]
