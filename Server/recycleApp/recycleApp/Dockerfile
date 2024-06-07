FROM openjdk:17


COPY target/recycleApp-0.0.1-SNAPSHOT.jar  /usr/app/


WORKDIR /usr/app/

ENV PORT=8080


ENTRYPOINT ["java", "-jar", "recycleApp-0.0.1-SNAPSHOT.jar"]