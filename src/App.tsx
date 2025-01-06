import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { AppContextProvider } from "./context/AppContextProvider";
import { useInitApp } from "./hooks/useInitApp";
import { observer } from "mobx-react-lite";
import { DepartmentsPage } from "./components/pages/departments/DepartmentsPage";
import { EmployeesPage } from "./components/pages/employees/EmployeesPage";

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  );
};

const App = observer(() => {
  useInitApp();

  return (
    <Layout>
      <Routes>
        <Route
          path='/company/:companyId/departments'
          element={<DepartmentsPage />}
        />
        <Route
          path='/company/:companyId/employees'
          element={<EmployeesPage />}
        />
      </Routes>
    </Layout>
  );
});

export default AppWrapper;
