# Plugins

Plugins offers optional functionality to the GZAC platform. For installation and configuration tips, look [here](https://docs.valtimo.nl/features/plugins/configure-plugin)

# Running locally

To run this plugin locally you need to start the backend and frontend separately.

## Backend

1. Make sure that Docker is running.
    - It is not neccesary to start any containers yourself. Gradle will take care of that.
2. Run the Gradle task `gradlew :backend:app:bootRun`

## Frontend

1. Open the terminal and go to the `/frontend` directory (`cd frontend`).
2. Run `npm install` to install all of the dependencies.
3. Run `npm run libs-build-all` in build the library code.
4. Run `npm start` to start the application.

# Building the backend

If you want to import this plugin into your implementation, run the following Gradle tasks

1. `gradlew clean`
2. `gradlew :backend:amsterdam-email-api:classes`
3. `gradlew :backend:amsterdam-email-api:jar`
4. `gradlew :backend:amsterdam-email-api:sourcesJar`

The jar and sources.jar files can be found under [`backend/amsterdam-email-api/build/libs/`](backend/amsterdam-email-api/build/libs/). Copy these to your implementation project.
