import { Route, BrowserRouter as Router, Routes } from "react-router";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {

    const { i18n } = useTranslation();

  useEffect(() => {
    const isRtl = i18n.language === "fa";
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
