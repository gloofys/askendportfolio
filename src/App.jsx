import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./styles/main.scss";
import WhatSetsMeApart from "./components/WhatSetsMeApart.jsx";


const App = () => {
    return (
        <div className="app-layout">
            {/* Optional Nav */}
            <main>
                {/*<Hero />*/}
                <WhatSetsMeApart />
            </main>
            <Footer />
        </div>
    );
};

export default App;