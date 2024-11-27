import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';

function App() {

  return (
    <div className='App' >
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route exact path="/">
            <Home />
          </Route>  */}

          <Route path="/empresa" element={<Empresa />} />
          {/* <Route path="/empresa">
            <Empresa />
          </Route> */}

          <Route path="/contato" element={<Contato />} />

          {/* <Route path="/contato">
            <Contato />
          </Route> */}
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;