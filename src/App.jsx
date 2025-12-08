import "./App.css";
import AppRoutes from "./components/AppRoytes/AppRoutes";
import AuthProvider from "./context/AuthProvider";
import GlobalStyle from "./GlobalStyles/GlobalStyled";

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <AppRoutes />;
    </AuthProvider>
  );
}
export default App;
