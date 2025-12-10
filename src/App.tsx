import { WeatherCard } from "./components/WeatherCard";
import { Menu } from "./components/Menu";
import { Banner } from "./components/Banner";

function App() {
    return (
        <>
            <WeatherCard dia="segunda" temperatura="25" emoji="🌤️" />
            <Menu />
            <Banner />
        </>
    );
}

export default App;
