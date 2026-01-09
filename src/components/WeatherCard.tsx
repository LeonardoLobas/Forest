interface IWeatherCardProps {
    temperatura: number;
}
export function WeatherCard({ temperatura }: IWeatherCardProps) {
    const diaSemana = new Date().toLocaleDateString("pt-BR", { weekday: "long" });
    return (
        <div className="container mt-4 flex justify-center md:justify-start">
            <div className="bg-verde-900 inline-flex items-center rounded-md">
                <span className="bg-verde-300 relative -left-1 block size-2 rounded-full"></span>
                <div className="text-verde-300 divide-verde-800 flex divide-x-2">
                    <div className="px-4 py-2 capitalize">{diaSemana}</div>
                    <div className="px-4 py-2">{temperatura}°</div>
                    <div className="px-4 py-2">{temperatura > 19 ? "🌤️" : "🌦️"}</div>
                </div>
            </div>
        </div>
    );
}
