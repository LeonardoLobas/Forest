import { WeatherCard } from "./components/WeatherCard";
import { Menu } from "./components/Menu";
import { Banner } from "./components/Banner";
import { Accommodations } from "./components/Accommodations";
import { Events } from "./components/Events";

function App() {
    return (
        <>
            <WeatherCard dia="segunda" temperatura="25" emoji="🌤️" />
            <Menu />
            <Banner />
            <Accommodations />
            <Events />
        </>
    );
}

export default App;
