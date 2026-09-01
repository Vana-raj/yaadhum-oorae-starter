import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { ServiceDetailPage } from "./components/pages/ServiceDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
