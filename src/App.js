import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Contact } from './pages/Contact';
import Main from './pages/Main';
import { Aboutus } from './pages/Aboutus';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Aboutus" element={<Aboutus/>}/>
        </Routes>
      </Router>
  </div>
  );
}

export default App;
