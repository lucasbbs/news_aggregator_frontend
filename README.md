# The NewsHubConnect Frontend

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md)

## Introduction

The frontend project is responsible for providing a user-friendly interface for the news aggregator application. It allows users to search for news articles, filter results based on various criteria, and manage their preferences and settings. This document provides an overview of the frontend project, including its features, technologies used, and important considerations.

## Description
The frontend project offers the following key features:

- News Search: Users can search for news articles across multiple sources using keywords, categories, and specific sources.
- Filter and Sorting: Users can refine their search results by applying filters based on categories, dates, and other criteria. They can also sort the results based on relevance, date, or other parameters.
- User Registration and Login: Users can register an account and log in to access personalized features and preferences.
- User Preferences: Logged-in users can save their favorite sources, manage tags, and customize their news feed based on their interests.
- Latest News: The frontend displays the latest news articles from popular sources to keep users updated.
- Responsive Design: The interface is designed to be responsive, providing an optimal viewing experience across different devices and screen sizes.

## Prerequisites

- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Technologies Used
The frontend project utilizes the following technologies and frameworks:

- React: A popular JavaScript library for building user interfaces.
- TypeScript: A statically typed superset of JavaScript that enhances developer productivity and provides improved type safety..
- Axios: A popular HTTP client for making API requests from the frontend to the backend.
- React Router: A library for managing navigation within the application.
- Docker: A containerization platform for packaging the frontend application into a portable and reproducible environment.
- Styled-components: A CSS-in-JS library for writing styled components with ease.
- Material UI: A popular React component library that provides pre-designed UI components following the Material Design guidelines.

## Getting Started
These instructions will help you get a copy of the project up and running on your local machine for testing purposes.

### Installation
To set up and run the frontend project locally using Docker, follow these steps:

1. Clone the project repository from GitHub to your local machine.

```bash
git clone https://github.com/lucasbbs/news_aggregator_frontend.git
```
2. Change directory into the newly created folder.

```bash
cd news_aggregator_frontend
```

3. Install all required dependencies

```bash
docker-compose up
```
The frontend project follows a structured organization to ensure modularity and maintainability. Here's an overview of the project's directory structure:

- /src: Contains the main source code of the frontend project.
    - /components: Contains reusable React components used across different pages.
    - /pages: Contains the main page components representing different sections of the application.
    - /services: Includes utility functions and API service modules for making backend requests.
    - /hooks: Includes custom hooks for global state management and other shared functionality.
    - /assets: Stores static assets such as images, icons, and fonts.
- /public: Contains static files that are directly copied to the build output.

## Usage and Workflow
To use the frontend application, follow these steps:

1. Access the application through the provided local development URL.
2. Use the search functionality to find news articles based on keywords, categories, and sources.
3. Apply filters and sorting options to refine the search results.
4. Register an account or log in to access personalized features.
5. After logging in, you can save your preferred categories for different news sources. This allows the application to prioritize articles from those categories in your news feed.
6. Explore the latest news articles from popular sources on the homepage.
Customize your news feed by managing your saved categories and preferences in the settings section.
7. Update your saved categories as your interests change, and the application will adjust your news feed accordingly.
8. Enjoy a personalized news browsing experience tailored to your preferred categories and sources.
