FROM gradle:jdk8

USER root

RUN mkdir /home/gradle/project
WORKDIR /home/gradle/project

ADD . /home/gradle/project

RUN  gradle wrapper && ./gradlew build 

CMD java -jar build/libs/gs-rest-service-0.1.0.jar
