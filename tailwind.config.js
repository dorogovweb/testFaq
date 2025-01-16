import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                aeroport: ['Aeroport','sans-serif'],
            },
        },
        fontSize: {
            title: '90px',
        },
        backgroundColor:  ({
            'pink': '#F3EDFE',
        })
    },
    plugins: [],
};
