### simple spring boot web application

### Installation
1. Install java runtime enviroment
```
ubuntu
$ sudo apt install default-jre

arch
$ sudo pacman -S openjdk-11-jre-headless
```
run java -version you should see something like this:
```
openjdk version "11.0.1" 2018-04-17
OpenJDK Runtime Environment (build 11.0.1+10-Ubuntu-3ubuntu1)
OpenJDK 64-Bit Server VM (build 11.0.1+10-Ubuntu-3ubuntu1, mixed mode)
```
2. Clone repo and cd to project
```
$ git clone "https://github.com/vzvz4/spring-boot-simple-web-app"
$ cd spring-boot-simple-web-app
```
3. Compile with maven and launch your jar file
```
$ ./mvnw clean package
$ cd target/

Launch app
$ java -jar geek-market-0.0.1-SNAPSHOT.jar
```
Play with docker
- from project root 
```
$ cd docker
$ docker build -t market:market . 
$ docker run -p 8080:8595/tcp
```
open brawser go to http://localhost:8080/