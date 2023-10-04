import './App.css';
import { Route,Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from  './About';
import Services  from './Services';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
   <>
   <Navbar />
   
<Routes>
<Route exact path='/' Component={Home}/>
<Route exact path='/About' Component={About} />
<Route exact path='/Services' Component={Services} />
<Route exact path="/Contact" Component={Contact} />
</Routes>
<Footer/>




   
   
   </>
  )
}

export default App