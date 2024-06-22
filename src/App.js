import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import ContactPage from './pages/ContactPage';
import Main from './pages/Main';
import AboutUsPage from './pages/AboutUsPage';
import CardsDetailPage from './pages/CardsDetailPage';
import EditPage from './pages/EditPage';
import ViewPage from './pages/ViewPage';

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
      <Router>
        <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Contact" element={<ContactPage/>}/>
        <Route path="/AboutUs" element={<AboutUsPage/>}/>
        <Route path="/CardsDetail/:id" element={<CardsDetailPage/>} />
        <Route path="/ViewTemplate/:id" element={<ViewPage/>} />
        <Route path="/EditTemplate/:id" element={<EditPage/>} />
    
        </Routes>
      </Router>
      </DndProvider>
  </div>
  );
}

export default App;
