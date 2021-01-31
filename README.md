### simple spring boot web application
<img src="https://github.com/vzvz4/spring-boot-simple-web-app/blob/master/market.gif"/>

### Play with docker
- from project root 
```
$ docker build -t market:market . 
$ docker run -p 8080:8595/tcp market:market
```
open browser go to http://localhost:8080/

### Or build it manually 
1. Install java runtime environment
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
2. Clone repo and compile via mvnw
```
$ git clone "https://github.com/vzvz4/spring-boot-simple-web-app"
$ cd spring-boot-simple-web-app/
$ ./mvnw clean package
$ cd target/
```
3. Run jar file

```
$ java -jar geek-market-0.0.1-SNAPSHOT.jar
```
open browser go to http://localhost:8595/



