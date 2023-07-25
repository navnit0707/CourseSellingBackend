# Course Selling - Backend

This repository is part of a Course Selling Project and contains the backend code.

## Tech Stack

- Node.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)

## Guidelines for Using Important Routes API

### Admin Routes

#### 1. Signup

- **Method:** POST
- **Endpoint:** `/admin/signup`
- **Data Format:** The data must be sent inside the request body as raw JSON.

**Request Body Example:**

```json
{
  "username": "your_username",
  "password": "your_password"
}
```

#### 2. Login

- **Method:** POST
- **Endpoint:** `/admin/login`
- **Data Format:** The data must be sent in the request headers. The headers should contain `username` and `password` fields.

### Course Routes

#### 3. Add a New Course

- **Method:** POST
- **Endpoint:** `admin/courses`
- **Data Format:** The data must be sent in the request body as raw JSON.

**Expected JSON Example:**

```json
{
  "title": "Course Title",
  "description": "Course Description",
  "price": 100,
  "imageLink": "https://example.com/image.jpg",
  "published": true
}
```

### Overview of Routes
#### Admin
![admin](https://github.com/navnit0707/CourseSellingBackend/assets/40719341/d05bfb98-4cc3-444e-ae8b-41da68f82108)
#### User
![user](https://github.com/navnit0707/CourseSellingBackend/assets/40719341/05d027db-f056-4ead-839a-385c66105745)

Please follow these guidelines while using the specified routes to ensure smooth functionality and interaction with the Course Selling backend.

---
