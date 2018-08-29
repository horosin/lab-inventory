FROM openjdk:8-jdk-alpine

RUN mkdir /app
WORKDIR /app

ADD . /app

CMD ./gradlew build && java -jar build/libs/gs-rest-service-0.1.0.jar