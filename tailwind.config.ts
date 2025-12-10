import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: ".5rem",
                sm: "1rem",
            },
        },
        extend: {
            colors: {
                verde: {
                    50: "#f0fdf4",
                    100: "#dcfce7",
                    500: "#22c55e",
                    700: "#15803d",
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
