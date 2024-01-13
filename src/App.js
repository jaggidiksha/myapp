import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom'
import Navbr from './components/Navbr'
import Home from './components/Home'
import About from './components/About'
import Howtoreach from './components/Howtoreach';
import Tourist from './components/Tourist';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Api from './components/Api';

function App() {
  return (
    <>
    {/* <Api/> */}
    <Navbr/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Howtoreach' element={<Howtoreach/>}></Route>
      <Route path='/Tourist' element={<Tourist/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>

    </Routes>
  <Footer/>
    </>
  );
}
export default App;
