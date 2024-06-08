import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import Main from './pages/Main';
import AboutUsPage from './pages/AboutUsPage';
import CardsDetailPage from './pages/CardsDetailPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Contact" element={<ContactPage/>}/>
        <Route path="/AboutUs" element={<AboutUsPage/>}/>
        <Route path="/CardsDetail" element={<CardsDetailPage/>}/>
        </Routes>
      </Router>
  </div>
  );
}

export default App;
