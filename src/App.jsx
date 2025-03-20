import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Music from './pages/Music';
import About from './pages/About';
import SearchPage from './pages/SearchPage';
import Contact from './pages/Contact';
import SongPage from './components/SongPage';
import MixtapePage from './components/MixtapePage';
import AlbumPage from './components/AlbumPage';
import BeatPage from './components/BeatPage';
import Terms from './components/Terms';
import ServicesPage from './components/ServicePage';
import Policy from './components/policy';
import DeveloperSection from './components/DeveloperSection';
import Info from './components/Info';
import './App.css'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return ( 
    <>
       <Router>
        <ScrollToTop />
        <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/music" element={<Music />} />
                <Route path="/song/:id" element={<SongPage />} />
                <Route path="/mixtape/:id" element={<MixtapePage />} />
                <Route path="/album/:id" element={<AlbumPage />} />
                <Route path="/beat/:id" element={<BeatPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms-and-conditions" element={<Terms />} />
                <Route path="/privacy-policy" element={<Policy />} />
                <Route path="/developer" element={<DeveloperSection />} />
                <Route path="/info-and-policies" element={<Info />} />
                <Route path="/services" element={<ServicesPage />} />
            </Routes>
        </Router>
  </>
        );
            }

export default App;