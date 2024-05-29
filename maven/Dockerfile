# Используем базовый образ с Maven и OpenJDK 17 для компиляции приложения
FROM maven:3.8.1-openjdk-21-slim AS build

# Устанавливаем рабочую директорию в контейнере
WORKDIR /usr/src/app

# Копируем содержимое текущей директории хоста в рабочую директорию контейнера
COPY . .

# Запускаем Maven для очистки предыдущих сборок и создания нового пакета
RUN mvn clean package

# Используем другой базовый образ с той же версией Java для выполнения приложения,
# что позволяет уменьшить размер конечного образа
FROM openjdk:21-jdk-slim

# Устанавливаем рабочую директорию в новом базовом образе
WORKDIR /usr/src/app

# Копируем скомпилированные классы из первого этапа в рабочую директорию текущего контейнера
COPY --from=build /usr/src/app/target/classes/com/example/maven/MainApplication.class .

# Копируем собранный jar-файл из первого этапа в контейнер
COPY --from=build /usr/src/app/target/maven-1.0-SNAPSHOT.jar ./app.jar

# Задаем команду для запуска jar-файла
CMD ["java", "-jar", "app.jar"]
