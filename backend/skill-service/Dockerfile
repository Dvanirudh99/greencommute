FROM openjdk:latest
ADD target/Skill-service-0.0.1-SNAPSHOT.jar /tmp
WORKDIR /tmp
EXPOSE 9003
ENTRYPOINT ["java", "-jar", "Skill-service-0.0.1-SNAPSHOT.jar"]
