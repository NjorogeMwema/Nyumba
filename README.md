Documentation


## API Directory
## Overview
The [`api`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2FDell%2FDesktop%2FKENYA%20HOMES%2Ffull-stack-estate%2Fapi%2Fapp.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A16%2C%22character%22%3A10%7D%7D%5D%2C%228b4e943c-2cba-428d-bace-861855f6fbe9%22%5D "Go to definition") directory contains the backend code for the application. It handles the server-side logic, database interactions, and API endpoints.

## Structure
```
api/
├── controllers/
│   ├── auth.controller.js
│   ├── user.controller.js
│   ├── post.controller.js
│   └── ...
├── models/
│   ├── User.js
│   ├── Post.js
│   └── ...
├── routes/
│   ├── auth.route.js
│   ├── user.route.js
│   ├── post.route.js
│   └── ...
├── middlewares/
│   ├── auth.middleware.js
│   └── ...
├── app.js
├── .env
├── package.json
└── ...
```

## Key Files
- **app.js**: The main entry point of the application. Sets up middleware, routes, and starts the server.
- **controllers/**: Contains the logic for handling requests and responses.
- **models/**: Defines the database schemas and models.
- **routes/**: Defines the API endpoints and maps them to controller functions.
- **middlewares/**: Contains middleware functions for request processing.

### Environment Variables
- **DATABASE_URL**: The connection string for the MongoDB database.
- **JWT_SECRET_KEY**: The secret key for JWT authentication.

### Running the API
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the server:
   ```sh
   npm start
   ```

---

## Client Directory

### Overview
The `client` directory contains the frontend code for the application. It handles the user interface and interactions.

### Structure
```
client/
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   └── ...
│   ├── routes/
│   │   ├── Home.jsx
│   │   ├── SinglePage.jsx
│   │   └── ...
│   ├── context/
│   │   ├── AuthContext.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── public/
│   ├── index.html
│   └── ...
├── package.json
└── ...
```

### Key Files
- **src/App.js**: The main component that sets up the application routes and context providers.
- **src/index.js**: The entry point of the React application.
- **src/components/**: Contains reusable UI components.
- **src/routes/**: Contains the main pages/routes of the application.
- **src/context/**: Contains context providers for global state management.

### Running the Client
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```

---

## Socket Directory

### Overview
The `socket` directory contains the code for handling real-time communication using WebSockets.

### Structure
```
socket/
├── index.js
├── package.json
└── ...
```

### Key Files
- **index.js**: The main entry point for the WebSocket server. Sets up the WebSocket connections and handles events.

### Running the Socket Server
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the WebSocket server:
   ```sh
   node index.js
   ```

---

This documentation provides an overview of the structure and key files in each directory, as well as instructions for running the respective parts of the application. 