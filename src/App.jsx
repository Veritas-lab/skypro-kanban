import AppRoutes from "./components/AppRoutes";
import { GlobalStyles } from "./Styles/GlobalStyles";
import AuthProvider from "./context/AuthProvider";
import TaskProvider from "./context/TaskProvider";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <AuthProvider>
          <TaskProvider>
            <AppRoutes />
          </TaskProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
