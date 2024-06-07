FROM maven:3.9.7-openjdk-17 AS build

COPY Server/recycleApp/recycleApp/pom.xml .


RUN mvn dependency:go-offline


COPY Server/recycleApp/recycleApp/src /app/src
RUN mvn clean package


FROM openjdk:17

WORKDIR /usr/app


COPY --from=build /app/target/recycle_app.jar /usr/app/recycle_app.jar

ENTRYPOINT ["java", "-jar", "recycle_app.jar"]

