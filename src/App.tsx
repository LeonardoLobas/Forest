import { WeatherCard } from "./components/WeatherCard";
import { Menu } from "./components/Menu";
import { Banner } from "./components/Banner";
import { Accommodations } from "./components/Accommodations";
import { Events } from "./components/Events";
import { Experience } from "./components/Experience";
import { NaturalCycle } from "./components/NaturalCycle";
import { Contact } from "./components/Contact";

function App() {
    return (
        <>
            <WeatherCard dia="segunda" temperatura="25" emoji="🌤️" />
            <Menu />
            <Banner />
            <Accommodations />
            <Events />
            <Experience />
            <NaturalCycle />
            <Contact />
        </>
    );
}

export default App;
