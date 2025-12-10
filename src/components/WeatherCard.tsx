interface WeatherCardProps {
    dia: string;
    temperatura: string;
    emoji: string;
}

export function WeatherCard({ dia, temperatura, emoji }: WeatherCardProps) {
    return (
        <div className="container mt-4 flex justify-center md:justify-start">
            <div className="inline-flex items-center rounded-md bg-verde-900">
                <span className="size-2 bg-verde-300 block rounded-full relative -left-1"></span>
                <div className="flex text-verde-300 divide-x-2 divide-verde-800">
                    <div className="px-4 py-2 capitalize">{dia}</div>
                    <div className="px-4 py-2">{temperatura}°</div>
                    <div className="px-4 py-2">{emoji}</div>
                </div>
            </div>
        </div>
    );
}
