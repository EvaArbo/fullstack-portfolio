# Developer Portfolio

A full-stack developer portfolio built to showcase my projects, technical skills, and experience building web and mobile applications.

The portfolio includes a React frontend, a Flask API, PostgreSQL storage, email notifications, and production deployment.

## Live Portfolio

🌐 https://portfolio-frontend-sage-delta.vercel.app

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Python
- Flask
- PostgreSQL
- SQLAlchemy
- Flask-Migrate
- Flask-Limiter
- Supabase
- Resend
- Vercel
- Render
- Git / GitHub

## Features

The portfolio includes:

- Responsive navigation
- Active navigation based on scroll position
- Animated hero section
- Scroll reveal animations
- Interactive 3D project cards
- Responsive mobile design
- Full-stack contact form
- Server-side form validation
- PostgreSQL message storage
- Email notifications
- Reply-to visitor email support
- Contact form rate limiting
- Production CORS configuration
- Environment-variable based configuration

## Architecture

The application uses a separate frontend and backend.

```text
React / Vite
Hosted on Vercel
        |
        | HTTP / JSON
        v
Flask API
Hosted on Render
        |
        +------> Supabase PostgreSQL
        |        stores contact messages
        |
        +------> Resend
                 sends email notifications
```
