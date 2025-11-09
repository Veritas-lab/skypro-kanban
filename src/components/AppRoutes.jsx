import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ExitPage from "../pages/ExitPage";
import NotFoundPage from "../pages/NotFoundPage";
import PopBrowse from "../components/popups/PopBrowse";
import PopNewCardPage from "../pages/PopNewCardPage";
import Layout from "./Layout";

function ProtectedRoute({ isAuth, children }) {
  return isAuth ? children : <Navigate to="/login" replace />;
}

function PublicRoute({ isAuth, children }) {
  return !isAuth ? children : <Navigate to="/" replace />;
}

export default function AppRoutes({
  cards,
  onAddCard,
  onLoadTasks,
  loading,
  isAuth,
  onAuthChange,
}) {
  // Функция для выхода
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    onAuthChange(false);
  };

  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute isAuth={isAuth}>
            <Layout onLogout={handleLogout} />
          </ProtectedRoute>
        }
      >
        <Route
          path="/"
          element={
            <MainPage
              cards={cards}
              onAddCard={onAddCard}
              onLoadTasks={onLoadTasks}
              loading={loading}
            />
          }
        >
          <Route path="card/:id" element={<PopBrowse />} />
          <Route path="new" element={<PopNewCardPage />} />
          <Route path="exit" element={<ExitPage onLogout={handleLogout} />} />
        </Route>
      </Route>

      <Route
        path="/login"
        element={
          <PublicRoute isAuth={isAuth}>
            <LoginPage onAuthChange={onAuthChange} />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute isAuth={isAuth}>
            <RegisterPage onAuthChange={onAuthChange} />
          </PublicRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
