# Organization Management System

A React-based application designed for seamless management of companies, departments, and employees.

## Features

### Company Management

- Switch between multiple companies
- View company details
- Manage company structure

### Department Management

- View all departments in a company
- Delete departments
- Handle department employees (delete or move) when removing departments

### Employee Management

- View all employees
- Filter employees by department
- Search employees by name or email
- Add new employees
- Delete employees

## Tech Stack

- **React 18**
- **TypeScript**
- **MobX** for state management
- **Ant Design** for UI components
- **Styled Components** for styling
- **Jest** for testing
- **Vite** for build tooling
- **GitHub Actions** for CI/CD

## CI/CD

The project uses GitHub Actions for continuous integration and deployment:

- Automated testing on every push to the main branch
- Automatic build process
- Deployment to GitHub Pages when tests pass

View the deployed application at: `/org-department-employee-management/`

## Project Structure

```
src/
├── components/    # Reusable UI components
├── controllers/   # Business logic controllers
├── context/       # React context providers
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── services/      # API and storage services
├── store/         # MobX stores
├── style/         # Global styles and theme
├── tests/         # Test files
└── types/         # TypeScript type definitions
```

## Getting Started

1. Clone the repository:

   ```sh
   git clone <repository-url>
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Run tests:

   ```sh
   npm test
   ```

## Build

To build for production:

```sh
npm run build
```

## Architecture

The application follows a clean architecture pattern with:

- **MobX Stores:** Handle state management and data persistence
- **Controllers:** Manage business logic and data operations
- **Services:** Handle API calls and storage operations
- **Components:** Present UI and handle user interactions

## Testing

The project includes unit tests for:

- **Services**
- **Hooks**
- **Utilities**

Run tests with:

```sh
npm test
```

For watch mode:

```sh
npm run test:watch
```

## Contributing

1. Fork the repository
2. Create your feature branch:
   ```sh
   git checkout -b feature/my-new-feature
   ```
3. Commit your changes:
   ```sh
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```sh
   git push origin feature/my-new-feature
   ```
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
