# Bhilaipedia Backend

Bhilaipedia is a collaborative knowledge platform for IIT Bhilai's internal affairs. This repository contains the backend services for Bhilaipedia, built with **NestJS**, providing a robust and scalable API to manage articles, discussions, users, rewards, and more.

## Table of Contents
- [Project Structure](#project-structure)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Modules Overview](#modules-overview)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

---

## Project Structure

```
src/
├── common/
│   ├── decorators/         # Custom decorators
│   ├── dto/                # Shared DTOs
│   ├── filters/            # Global exception filters
│   ├── guards/             # Auth and role-based guards
│   ├── interceptors/       # Custom interceptors
│   ├── middleware/         # Request middlewares
│   └── utils/              # Utility functions
├── config/                 # Configuration files (env, db, etc.)
├── modules/
│   ├── auth/               # Authentication (signin, signup, OAuth)
│   ├── users/              # User registration, profiles, activities
│   ├── articles/           # Article creation, versioning, publishing
│   ├── categories/         # Category and subcategory management
│   ├── comments/           # Commenting, editing, upvotes/downvotes
│   ├── discussions/        # Discussions tied to articles/categories
│   ├── rewards/            # Badges, points, streaks
│   ├── moderation/         # Reporting and resolving articles/comments
│   └── search/             # Search functionality (articles, discussions)
├── main.ts                 # Application entry point
└── app.module.ts           # Root module
```

---

## Features

### Auth
- Signin, Signup, Signout
- OAuth integration
- Password reset

### User Management
- Profile updates and activities
- Role-based access control

### Articles & Categories
- CRUD operations for articles and categories
- Versioning and rollback support

### Discussions & Comments
- Comment threads, replies, and voting
- Article-related discussions with locking feature

### Rewards
- Track badges, points, and streaks
- View earned badges and leaderboard

### Moderation
- Reporting and resolving inappropriate content

### Search
- Search for articles, discussions, comments, and users

---

## Tech Stack

- **Framework**: [NestJS](https://nestjs.com/)
- **Database**: PostgreSQL (via TypeORM)
- **Search Engine**: Elasticsearch
- **Authentication**: JWT and OAuth
- **Language**: TypeScript

---

## Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v12 or higher)
- [Elasticsearch](https://www.elastic.co/elasticsearch/)
- [Docker](https://www.docker.com/) (Optional, for containerization)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-repo/bhilaipedia-backend.git
   cd bhilaipedia-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   Create a `.env` file at the root of the project and configure it:
   ```env
   DATABASE_URL=postgres://<username>:<password>@localhost:5432/bhilaipedia
   JWT_SECRET=your-secret-key
   ELASTICSEARCH_URL=http://localhost:9200
   ```

4. **Run migrations**
   ```bash
   npm run migration:run
   ```

5. **Start the server**
   ```bash
   npm run start:dev
   ```

6. **Access the API**
   The API will be available at `http://localhost:3000`.

---

## Modules Overview

### Auth Module
Handles authentication with JWT and OAuth. Includes features for signin, signup, and password resets.

### User Module
Manages user profiles, roles, and activities. Includes features for viewing and updating user profiles.

### Articles Module
Supports CRUD operations for articles, versioning, and draft publishing.

### Categories Module
Manages hierarchical categories with parent-child relationships.

### Comments Module
Enables threaded commenting with support for voting, editing, and moderation.

### Discussions Module
Provides a platform for creating and managing article-related discussions.

### Rewards Module
Implements gamification through badges, points, and streaks.

### Moderation Module
Allows reporting of articles, comments, and users. Provides tools for moderators to resolve reports.

### Search Module
Integrates Elasticsearch for efficient searching of articles, discussions, and users.

---

## Scripts

- **Development mode**: `npm run start:dev`
- **Build project**: `npm run build`
- **Run tests**: `npm run test`
- **Run migrations**: `npm run migration:run`
- **Revert migrations**: `npm run migration:revert`

---

## Contributing

Contributions are welcome! Please follow the [contributing guidelines](CONTRIBUTING.md) for more details.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.