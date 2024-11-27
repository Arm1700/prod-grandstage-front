/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#fd0100',
                secondary: '#2a4856',
                pseudo: '#ffffff',
                primaryDark: '#333333',
                primaryLight: '#f0f4fa',
                secondaryLight: '#8f908f',
                lightGreen: '#82d16f',
                lightBlue: '#4489f3',
                lightYellow: '#ffb606',
                lightRed: '#dd4b39',
                color60: '#606060',
                color7C: '#7C7C7C',
                colorF2:'#F2F2F2',
                color5f:'#5f31d2',
                color99: '#999999',
                color92: '#929292',
                color33: '#333',
                color86: '#868686',
                color85: '#858585',
                color66: '#666666',
                color12: '#121212',
                colorF8:'#f8f8f8',
                colorFb: '#fbfbfb',
                color54:'#54b551',
                black: '#111111',


            },
            transform: {
                'rotate-x-180': 'rotateX(40deg)',
            },
            fontFamily: {
                sans: ['"Roboto"'],
                // 'roboto-slab': ['"Roboto Slab"', 'serif'],
                'sans-serif': ['sans-serif'],
                'roboto-slab': ['Roboto Slab'],
                'roboto-slab-sans': ['Roboto Slab', 'sans-serif'],
            },
            fontWeight: {
                'medium': 500,
                'bold': 700,
                'black': 900,
            },
            fontSize: {
                'xs': '0.75rem',  // Extra small 12.0px
                'sm': '0.875rem', // Small 14.0px
                'base': '1rem',    // Base font size 16.0px (default)
                'lg': '1.125rem',  // Large 18.0px
                'xl': '1.25rem',   // Extra large 20.0px
                '2xl': '1.5rem',   // 2x large 24.0px
                '3xl': '1.875rem', // 3x large 30.0px
                '4xl': '2.25rem',  // 4x large 36.0px
                '5xl': '3rem',     // 5x large 48.0px
                'custom-15': '0.9375rem',  // Custom 15px
                'custom-28': '1.75rem',   // Custom 28px
                'custom-80': '5rem',   // Custom 80px
            },
        },
        screens: {
            xs: '360px', // Минимальные размеры, обычно для телефонов
            sm: '640px', // Небольшие устройства (малые телефоны, портретный режим)
            md: '768px', // Средние устройства (большие телефоны, маленькие планшеты)
            mid: '780px',
            lg: '992px', // Лаптопы или большие планшеты
            xlMin: '1100px',
            xl: '1200px', // Настольные компьютеры, стандартные экраны
            xlBig: '1300px',
        },


    },
    plugins: [],
};
