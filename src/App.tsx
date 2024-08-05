import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./components/user/login";
import { ThemeProvider } from "./context/themeContext";
import useTheme from "./hooks/useTheme";
import { UserLayout } from "./layout/userLayout";
import { RegisterPage } from "./components/user/register";
import { TableComponent } from "./components/table/Table";

function App() {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <Router>
          <Routes>
            <Route path="/" element={<UserLayout />}>
              <Route index path="/" element={<TableComponent />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
