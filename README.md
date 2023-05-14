# OpenAI Fun
## Description
This project consists of a Node.js backend and a React frontend. The backend provides an API that interacts with OpenAI's GPT-4 API, while the frontend provides a simple UI for using this API.

# Backend Setup
Navigate to the backend directory.
```
cd backend
```
Install dependencies.
```
npm install
```
Create a .env file and add your OpenAI API key.
```
OPENAI_API_KEY=your-api-key
```
Start the server.
```
npm run start
```
The server should now be running at http://localhost:3000.

# Frontend Setup
Navigate to the frontend directory.
```
cd client
```
Install dependencies.
```
npm install
```
Start the server.
```
npm run dev
```
The frontend should now be running at http://localhost:5173 (or whatever port you set).

# Usage
The frontend provides a form for entering a prompt and a max tokens value. When the form is submitted, it sends a request to the backend, which then makes a request to the OpenAI API. The response from the OpenAI API is then displayed in the frontend.

# Contributing
Please open an issue to discuss potential contributions before making a pull request.

# License
This project is licensed under the terms of the MIT license.
