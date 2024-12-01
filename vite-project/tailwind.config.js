/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        overlay: {
          1: 'rgba(0, 0, 0, 0.5)'
        },
        primary: {
          1: '#003468',
          2: '#042751',
          3: '#eff6fd',
        },
        secondary: {
          1: '#c48c46',
          2: '#c17310',
          3: '#fff4e7',
        },
        info: {
          100: '#E2F1FF',
          200: '#ADD9FF',
          300: '#72B7FB',
          400: '#2B88FB',
          500: '#006EEF',
        },
        error: {
          100: '#FDECEF',
          200: '#FFABB5',
          300: '#FA8091',
          400: '#EA3E53',
          500: '#DA072D',
        },
        warning: {
          100: '#FFF6D9',
          200: '#FFE1A8',
          300: '#FDC66E',
          400: '#F0A328',
          500: '#E99208',
        },
        success: {
          100: '#DEF5D9',
          200: '#AEE4AD',
          300: '#73C686',
          400: '#28A745',
          500: '#008E39',
        },
        neutral: {
          1: {
            100: '#F9FAFB',
            200: '#F4F6F8',
            300: '#DFE3E8',
            400: '#C4CDD5',
            500: '#919EAB',
            600: '#637381',
            700: '#454F5B',
            800: '#212B36',
            900: '#161C24',
            black: '#000000',
          },
          2: {
            50: '#F2F4F7',
            100: '#E9EDF2',
            200: '#E2E7ED',
            300: '#DAE0E6'
          },
          3: {
            white: '#FFFFFF',
            50: '#F8F9FB',
            100: '#F0F1F3',
            200: '#EBEDEF',
            300: '#E3E6E9'
          },
        },
        red: {
          50: '#FFF1F0',
          100: '#FFD2CF',
          200: '#FFA9A6',
          300: '#FF7D7D',
          400: '#F75257',
          500: '#EA2733',
          600: '#C41829',
          700: '#9E0B1F',
          800: '#780216',
          900: '#520111',
        },

        orange: {
          50: '#FFF5EB',
          100: '#FFDFC2',
          200: '#FFC799',
          300: '#FFAC70',
          400: '#FF8E47',
          500: '#FA6C1D',
          600: '#D44D0F',
          700: '#AD3403',
          800: '#872200',
          900: '#611500',
        },

        amber: {
          50: '#FFFBE6',
          100: '#FFF1B8',
          200: '#FFE58F',
          300: '#FFD666',
          400: '#FFC53D',
          500: '#FAAD14',
          600: '#D48806',
          700: '#AD6800',
          800: '#874D00',
          900: '#613400',
        },

        yellow: {
          50: '#FEFFE0',
          100: '#FFFFB8',
          200: '#FFFB8F',
          300: '#FFF566',
          400: '#FFEC3C',
          500: '#FADB15',
          600: '#D4B108',
          700: '#AD8B02',
          800: '#876801',
          900: '#614700',
        }
      },
      backgroundImage: {
        bannerHome: "url('./src/assets/images/background.jfif')",
        rating: "url('./src/assets/images/rating.png')",
        bannerProduct: "url('./src/assets/images/3768c767fbc5954b51b6cb5714dc5488.jfif')"
      },
      fontFamily: {
        opensans: ['"Open Sans"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif']
      },
      boxShadow: {
        custom: '0 12px 105px 0 rgba(35, 41, 49, 0.08)'
      },
      fontSize: {
        'caption-1': ['13px', '22px'],
        'caption-2': ['12px', '18px'],
        'body-1': ['16px', '26px'],
        'body-2': ['14px', '22px'],
        'title-1': ['16px', '26px'],
        'title-2': ['14px', '26px'],
        'header-2': ['18px', '28px'],
        'header-1': ['20px', '30px'],
        'heading-4': ['24px', '36px'],
        'heading-3': ['28px', '42px'],
        'heading-2': ['32px', '48px'],
        'heading-1': ['40px', '58px'],
        'display-6': ['40px', '58px'],
        'display-5': ['48px', '70px'],
        'display-4': ['56px', '82px'],
        'display-3': ['64px', '92px'],
        'display-2': ['72px', '104px'],
        'display-1': ['80px', '114px'],
      },


    },
  },
  plugins: [],
}

