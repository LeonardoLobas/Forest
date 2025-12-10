import { WeatherCard } from "./components/WeatherCard";
import { Menu } from "./components/Menu";

function App() {
    return (
        <>
            <WeatherCard dia="segunda" temperatura="25" emoji="🌤️" />
            <Menu />
        </>
    );
}

export default App;
