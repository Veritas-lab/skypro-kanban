import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { lightTheme, darkTheme } from "./context/Theme.styled";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { TasksProvider } from "./context/TasksProvider";
import AuthForm from "./components/AuthForm/AuthForm";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopExit from "./components/PopExit/PopExit";
import GlobalStyle from "./GlobalStyles/GlobalStyles.styled";

const StyledThemeWrapper = ({ children }) => {
  const { isDarkTheme } = useTheme();
  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle /> {/* Добавьте GlobalStyle здесь */}
      {children}
    </StyledThemeProvider>
  );
};

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/sign-in" />;
};

const AppContent = () => {
  const { user } = useAuth();

  return (
    <>
      {user && <Header />}
      <Routes>
        <Route
          path="/sign-in"
          element={!user ? <AuthForm /> : <Navigate to="/" />}
        />
        <Route
          path="/sign-up"
          element={!user ? <AuthForm isSignUp={true} /> : <Navigate to="/" />}
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <TasksProvider>
                <Main />
              </TasksProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/card/add"
          element={
            <ProtectedRoute>
              <PopNewCard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/card/:_id"
          element={
            <ProtectedRoute>
              <PopBrowse />
            </ProtectedRoute>
          }
        />
        <Route
          path="/exit"
          element={
            <ProtectedRoute>
              <PopExit />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to={user ? "/" : "/sign-in"} />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <StyledThemeWrapper>
          <AppContent />
        </StyledThemeWrapper>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
