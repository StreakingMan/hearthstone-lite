/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.vue'],
    theme: {
        extend: {
            borderRadius: {
                // 手绘风格
                'hand-drawn-0': '98% 1% 99% 2% / 3% 97% 1% 98%',
                'hand-drawn-1': '90% 6% 93% 5% / 5% 94% 7% 95%',
                'hand-drawn-2': '92% 5% 94% 3% / 2% 95% 3% 93%',
                'hand-drawn-3': '94% 2% 97% 2% / 4% 98% 3% 97%',
            },
        },
    },
    plugins: [],
};
