import logo from './logo.svg';
import './App.css';
import { Routes , Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className = 'min-h-[100vh] w-[11/12] max-w-[1260px] mx-auto'>
     <Navbar/>
          <Routes>
            <Route path = '/' element = {<Dashboard/>}/>
          </Routes>
    </div>
  );
}

export default App;
