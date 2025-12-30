import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Budgets from "./app/ui/system/budget";
import Dashboard from "./app/ui/system/dashboard";
import Profile from "./app/ui/system/profile";
import Transactions from "./app/ui/system/transactions";
import Sidebar from "./app/components/sidebar";
import { Box } from "@chakra-ui/react";
import FAQ from "./app/ui/system/faq";

function App() {
  return (
    <>
      <BrowserRouter>
        <Box display="flex">
          {/* Agora o Sidebar está DENTRO do BrowserRouter, então o useLocation funciona! */}
          <Sidebar />
          <Box flex="1">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/budgets" element={<Budgets />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
