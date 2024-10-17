import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Component/Navbar';
import Home from './Pages/HomePage/Home';
import Contact from './Pages/Contact/Contact';
import Confirmation from './Pages/Contact/Confermation'; // Ensure this path is correct
import AboutNav from './Pages/About/AboutNav';
import Resume from './Pages/Resume/Resume';
import Projects from './Pages/Project/Projects';
import NotFound from './Pages/NotFound/NotFound';
import WhiteImg from './assets/Whiteback.jpg';

function App() {
    const [myStyle, setStyles] = useState({ 
        color: '#484646',
        backgroundColor: '#fff',
        backgroundImage: `url(${WhiteImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    });

    return (
        <Router>
            <Navbar setStyle={setStyles} myStyle={myStyle} />
            <div className="content" style={myStyle}>
                <Routes>
                    <Route path="/" element={<Home myStyle={myStyle} setStyle={setStyles} />} />
                    <Route path="/about" element={<AboutNav myStyle={myStyle} setStyle={setStyles} />} />
                    <Route path="/resume" element={<Resume myStyle={myStyle} setStyle={setStyles} />} />
                    <Route path="/projects" element={<Projects myStyle={myStyle} setStyle={setStyles} />} />
                    <Route path="/contact" element={<Contact myStyle={myStyle} setStyle={setStyles} />} />
                    <Route path="/confirmation" element={<Confirmation />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
