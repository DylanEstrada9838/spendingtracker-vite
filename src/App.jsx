import { BrowserRouter, Routes, Route,HashRouter } from "react-router-dom";
import "./styles/App.css";
import ResponsiveAppBar from "./components/NavBarMui";
import ViewCategoriesPage from "./pages/category/ViewCategoriesPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import ViewMethodsPage from "./pages/method/ViewMethodsPage";
import ViewExpensesPage from "./pages/expense/ViewExpensesPage";
import PrivateRoutes from "./functions/PrivateRoutes";
import logged from "./functions/userLogInOut";
import ResponsiveAppBarOut from "./components/NavBarMuiOut";
import NotFound from "./pages/NotFound";
import PublicRoutes from "./functions/PublicRoutes";
import DashboardPage from "./pages/expense/Dashboard";
import HomePageIn from "./pages/HomePageIn";

function App() {
  return (
    
    <HashRouter>
      <div>
        {logged() ? <ResponsiveAppBar /> : <ResponsiveAppBarOut />}
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route element={<PublicRoutes/>}>
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/sign-in" element={<SignInPage />} />
            </Route>
            <Route element={<PrivateRoutes />}>
            <Route path="/HomePage" element={<HomePageIn />} />
              <Route path="/category" element={<ViewCategoriesPage />} />
              <Route path="/method" element={<ViewMethodsPage />} />
              <Route path="/expense" element={<ViewExpensesPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
