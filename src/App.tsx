import { WeatherCard } from "./components/WeatherCard";
import { Menu } from "./components/Menu";
import { Banner } from "./components/Banner";
import { Accommodations } from "./components/Accommodations";
import { Events } from "./components/Events";
import { Experience } from "./components/Experience";
import { NaturalCycle } from "./components/NaturalCycle";
import { Contact } from "./components/Contact";
import { Partners } from "./components/Partners";
import { Footer } from "./components/Footer";
import { useState } from "react";

function App() {
    const [temperatura] = useState(() => Math.floor(Math.random() * (29 - 17 + 1)) + 17);
    return (
        <>
            <WeatherCard temperatura={temperatura} />
            <Menu />
            <Banner temperatura={temperatura} />
            <Accommodations />
            <Events />
            <Experience />
            <NaturalCycle />
            <Contact />
            <Partners />
            <Footer />
        </>
    );
}

export default App;
