const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/.{ts,js,tsx,jsx}", "./index.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["poppins", ...fontFamily["sans"]],
            },
        },
    },
    plugins: [],
};
