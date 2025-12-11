interface WeatherCardProps {
    dia: string;
    temperatura: string;
    emoji: string;
}

export function WeatherCard({ dia, temperatura, emoji }: WeatherCardProps) {
    return (
        <div className="container mt-4 flex justify-center md:justify-start">
            <div className="bg-verde-900 inline-flex items-center rounded-md">
                <span className="bg-verde-300 relative -left-1 block size-2 rounded-full"></span>
                <div className="text-verde-300 divide-verde-800 flex divide-x-2">
                    <div className="px-4 py-2 capitalize">{dia}</div>
                    <div className="px-4 py-2">{temperatura}°</div>
                    <div className="px-4 py-2">{emoji}</div>
                </div>
            </div>
        </div>
    );
}
