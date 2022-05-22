
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Header from './Pages/Sheard/Header/Header';
import Footer from './Pages/Sheard/Footer/Footer';
import Profile from './Pages/Profile/Profile';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
function App() {
  return (
    <div >
      <h1 className='text-center my-3'>Welcome to React Router!</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
