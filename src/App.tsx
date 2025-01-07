import { HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { AppContextProvider } from "./context/AppContextProvider";
import { useInitApp } from "./hooks/useInitApp";
import { observer } from "mobx-react-lite";
import { lazy, Suspense } from "react";
import { PageLoader } from "./components/PageLoader";

const DepartmentsPage = lazy(
  () => import("./pages/departments/DepartmentsPage")
);
const EmployeesPage = lazy(() => import("./pages/employees/EmployeesPage"));

const AppWrapper = () => {
  return (
    <HashRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </HashRouter>
  );
};

const App = observer(() => {
  useInitApp();

  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route
            path='/company/:companyId/departments'
            element={<DepartmentsPage />}
          />
          <Route
            path='/company/:companyId/employees'
            element={<EmployeesPage />}
          />
          {/*  we have redirect to /company/:companyId/departments in useInitApp */}
          <Route path='*' element={<></>} />
        </Routes>
      </Suspense>
    </Layout>
  );
});

export default AppWrapper;
