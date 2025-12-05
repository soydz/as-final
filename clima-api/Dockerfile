# Builder
FROM maven:3.9.9-eclipse-temurin-21 AS builder
WORKDIR /app

COPY pom.xml ./

RUN mvn dependency:go-offline -B

COPY src ./src

# Construir el jar
RUN mvn clean package -DskipTests -B

# Runtime
FROM eclipse-temurin:21-jdk
WORKDIR /app

COPY --from=builder /app/target/*.jar app.jar

# Ejecucción
ENTRYPOINT ["java", "-jar", "app.jar"]