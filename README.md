<h1>Social-Cube Platfroms</h1>

Social-Cube is an innovative social platform designed to facilitate collaborative language learning experiences. It brings together people from different linguistic backgrounds, allowing them to practice and improve their language skills in an interactive and engaging environment.


<h2>Features</h2>
🌈 Theme Customization
The platform offers 30+ carefully crafted themes to enhance user experience:


Professional Themes: Corporate, Business, Winter

Dark Mode Variants: Dark, Night, Dim, Dracula

Creative Themes: Cyberpunk, Synthwave, Fantasy

Nature-Inspired: Forest, Garden, Autumn

Minimal Themes: Wireframe, Lofi, Nord

- User Authentication
  
- Friend Management System
  
- Real-time Chat (using Stream)
  
- User Onboarding
  
- Profile Management

## Technical Stack

### Frontend
- React
- TanStack Query (React Query) for data fetching
- Axios for API communication
- Custom hooks for state management

### Authentication
- Custom authentication system
- Protected routes
- Session management

## Key Components

### API Layer (`/frontend/src/lib/api.js`)
- Centralized API calls
- Authentication endpoints
- User management endpoints
- Friend system endpoints
- Chat functionality

### Custom Hooks

#### `useAuthUser` (`/frontend/src/hooks/useAuthUser.js`)
A custom hook that:
- Manages user authentication state
- Provides user data throughout the application
- Handles loading states
- Uses React Query for efficient caching and data fetching

## Setup and Installation

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
cd Social-Cube/frontend
npm install
```


3. Configure environment variables
```bash
cp .env.example .env
```

4. Start the development server
```bash
npm run dev
```

## Authentication Flow

1. User signup/login
2. Session management
3. Protected route access
4. Automatic token refresh

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## Collaborative Learning Features

Language Exchange: Connect with native speakers

Theme-Based Learning: Customize your learning environment

Real-Time Chat: Practice conversation skills

Friend System: Build your language learning network

Cultural Exchange: Learn through shared experiences
