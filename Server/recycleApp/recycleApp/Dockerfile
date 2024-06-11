FROM maven:3.8.4-openjdk-17 AS build

WORKDIR /app



COPY pom.xml .


RUN mvn dependency:go-offline


COPY src /app/src
RUN mvn clean package


FROM openjdk:17

WORKDIR /usr/app


COPY --from=build /app/target/recycleApp-0.0.1-SNAPSHOT.jar /usr/app/recycleApp-0.0.1-SNAPSHOT.jar


ENTRYPOINT ["java", "-jar", "recycle_app.jar"]
