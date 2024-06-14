import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import Main from './pages/Main';
import AboutUsPage from './pages/AboutUsPage';
import CardsDetailPage from './pages/CardsDetailPage';
import EditPage from './pages/EditPage';
import ViewPage from './pages/ViewPage';
import DowloadPage from './pages/DowloadPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Contact" element={<ContactPage/>}/>
        <Route path="/AboutUs" element={<AboutUsPage/>}/>
        <Route path="/CardsDetail/:id" element={<CardsDetailPage/>} />
        <Route path="/ViewTemplate/:id" element={<ViewPage/>} />
        <Route path="/EditTemplate/:id" element={<EditPage/>} />
        <Route path="/DownloadTemplate/:id" element={<DowloadPage/>} />
        

        </Routes>
      </Router>
  </div>
  );
}

export default App;
