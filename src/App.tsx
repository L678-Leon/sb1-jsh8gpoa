import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import WeighbridgePage from './components/WeighbridgePage';
import IndustrialScalesPage from './components/IndustrialScalesPage';
import RetailScalesPage from './components/RetailScalesPage';
import FieldScalesPage from './components/FieldScalesPage';
import PrecisionScalesPage from './components/PrecisionScalesPage';
import IndicatorsPage from './components/IndicatorsPage';
import WeighingSoftwarePage from './components/WeighingSoftwarePage';
import AccessoriesPage from './components/AccessoriesPage';
import PersonalDigitalAssistantsPage from './components/PersonalDigitalAssistantsPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/weighbridges" element={<WeighbridgePage onBack={() => window.history.back()} />} />
            <Route path="/products/industrial-scales" element={<IndustrialScalesPage onBack={() => window.history.back()} />} />
            <Route path="/products/retail-scales" element={<RetailScalesPage onBack={() => window.history.back()} />} />
            <Route path="/products/field-scales" element={<FieldScalesPage onBack={() => window.history.back()} />} />
            <Route path="/products/precision-scales" element={<PrecisionScalesPage onBack={() => window.history.back()} />} />
            <Route path="/products/indicators" element={<IndicatorsPage onBack={() => window.history.back()} />} />
            <Route path="/products/weighing-software" element={<WeighingSoftwarePage onBack={() => window.history.back()} />} />
            <Route path="/products/accessories" element={<AccessoriesPage onBack={() => window.history.back()} />} />
            <Route path="/products/personal-digital-assistants" element={<PersonalDigitalAssistantsPage onBack={() => window.history.back()} />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;