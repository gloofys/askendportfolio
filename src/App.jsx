import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./styles/main.scss";
import WhatSetsMeApart from "./components/WhatSetsMeApart.jsx";
import MyWork from "./components/MyWork.jsx";
import ContactCallout from "./components/ContactCallout.jsx";
import Header from "./components/Header.jsx";


const App = () => {
    return (
        <div className="app-layout">
            <main>
                <Header/>
                <Hero />
                <WhatSetsMeApart/>
                <MyWork/>
                <ContactCallout/>
            </main>
            <Footer/>
        </div>
    );
};

export default App;