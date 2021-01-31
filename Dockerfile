FROM openjdk:11
WORKDIR /
COPY mvnw .
RUN chmod 750 mvnw && chmod +x mvnw
RUN /bin/sh -c mvnw clean install
COPY ./target/geek-market-0.0.1-SNAPSHOT.jar .

EXPOSE 8080
CMD [ "java", "-jar", "geek-market-0.0.1-SNAPSHOT.jar" ]