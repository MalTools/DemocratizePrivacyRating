# Research on Democratizing Privacy Rating

## DePRa

DePRa (Democratize Privacy Rating) is a web-based research platform designed to collect and analyze user privacy assessments regarding mobile apps. 
The system facilitates privacy research through interactive evaluation tasks.

### System Architecture

#### Frontend (`frontend/`)
- **Framework**: React 18 with Ant Design Pro
- **Technology Stack**: TypeScript, Ant Design components, UmiJS
- **Key Features**:
  - User authentication and session management
  - Interactive privacy risk surveys
  - Multi-category app evaluation system (Weather, Social, Events, Tools)
  - Dynamic question lists with rating scales
  - Responsive design with internationalization support

#### Backend (`backend/`)
- **Framework**: Flask with SQLAlchemy ORM
- **Key Components**:
  - User management with password hashing
  - Survey data collection and storage
  - Dynamic table creation for different app categories
  - RESTful API endpoints
  - Database migrations with Alembic

#### Database Schema
- **Users**: Authentication and user management
- **Surveys**: Risk preference questionnaires with demographics
- **Contact**: User feedback and contact forms
- **Dynamic Tables**: Category-specific app evaluation responses


### Key Files
- `backend/app.py`: Main Flask application with API routes
- `backend/models.py`: Database models and dynamic table management
- `frontend/src/pages/PrivacyRiskSurvey.tsx`: Main survey interface
- `frontend/config/routes.ts`: Application routing configuration

### Setup and Development
- Frontend: Node.js with npm/yarn, supports hot reloading
- Backend: Python Flask with virtual environment support
- Database: MySQL with migration support