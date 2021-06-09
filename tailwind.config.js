const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        extend: {
            colors: {
                green: {
                    color: '#319795'
                },
                blue: {
                    color: '#3182CE'
                },
                gradientBlue: {
                    color: '#EBF4FF'
                },
                gradientLightblue: {
                    color: '#E6FFFA'
                }
                
            },
            fontFamily: {
                'lato': 'Lato'

            },
            fontSize: {
                '14px': '14px',
                '42px': '42px'
            },
            lineHeight: {
                '50px': '50px'
            },
            backgroundImage: theme => ({
                'intro': "url('/img/intro-bg.png')"
            }),
            spacing: {
                '12px': '12px',
                '0px': '0px',
                '2px': '2px',
                '5px': '5px',
                '18px': '18px',
                '20px': '20px',
                '26px': '26px',
                '39px': '39px',
                '40px': '40px',
                '67px': '67px',
                '23px': '23px',
                '24px': '24px',
                '50px': '50px',
                '128px': '128px',
                '304px': '304px',
                '320px': '320px',
                '405px': '405px',
                '360px': '360px',
            },
            shadows: {
                'box': '0px 3px 6px #00000029'
            },
            letterSpacing: {
                '0.84px': '0.84px',
                '1.26px': '1.26px'
            }
        }
    }
}