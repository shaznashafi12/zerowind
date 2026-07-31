import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home.tsx";
import Footer from "./pages/Footer.tsx";
import ArsenalContent from "./pages/Arsenal.tsx";
import Bergamo from "./pages/Bergamo.tsx";
import Bradsoftsh from "./pages/Bradsoftsh.tsx";
import Grandprix from "./pages/Grandprix.tsx";
import Tempest from "./pages/Teampest.tsx";
import Elaprint from "./pages/Elaprint.tsx";
import Skin from "./pages/Skin.tsx";
import Fit from "./pages/Fit.tsx";
import Motion from "./pages/Motion.tsx";
import Power from "./pages/Power.tsx";
import Brave from "./pages/Brave.tsx";
import Vapora from "./pages/Vapora.tsx";
import ZeroWindLanding from "./pages/Zwr.tsx";
import { Navbar } from "./pages/Navbar.tsx";
import ScrollToTop from "./pages/ScrollToTop";
import { News } from "./pages/News.tsx";
import { NewsDetailPage } from "./pages/NewsDetailsPage.tsx";
import { Contacts } from "./pages/Contact.tsx";

function App() {
  const location = useLocation();

  return (
    <div className="w-full min-h-screen bg-[#272727]">
      <Navbar />
      <ScrollToTop />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/Arsenal" element={<ArsenalContent />} />
          <Route path="/bergamo" element={<Bergamo />} />
          <Route path="/brad" element={<Bradsoftsh />} />
          <Route path="/grandprix" element={<Grandprix />} />
          <Route path="/teampest" element={<Tempest />} />
          <Route path="/elaprint" element={<Elaprint />} />
          <Route path="/skin" element={<Skin />} />
          <Route path="/fit" element={<Fit />} />
          <Route path="/motion" element={<Motion />} />
          <Route path="/power" element={<Power />} />
          <Route path="/brave" element={<Brave />} />
          <Route path="/vapora" element={<Vapora />} />
          <Route path="/zwr" element={<ZeroWindLanding />} />
          <Route path="/contact" element={<Contacts />} />
          {/* News Routes */}
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />
          
          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;