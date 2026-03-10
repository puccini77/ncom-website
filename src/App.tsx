import React from 'react';
import Header from './sections/Header';
import Footer from './sections/Footer';
import About from './sections/About';
import Contact from './sections/Contact';
import Services from './sections/Services';

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;