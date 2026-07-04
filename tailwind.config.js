/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', 'sans-serif'], 
      },
      fontSize: {
        badgeXs: '10px',
        badgeSm: '13px', 
      },
      width: {
        sidebar: '230px',
        modalButton: '104px',
        roomsList: '300px',
        menuDropdown:'130px',
      },
      maxWidth: {
        modalSubtitle: '280px',
      },
      minWidth: {
        tabBadge: '18px',     
      },
      colors: {
        neutral: {
          textDark: '#201F1D',     
          textMedium: '#9E9B94', 
          textLighterDark: '#6B6861',
          outlineLight: '#DAD7D7',
          outlineLight2: '#F3F2F2',
          iconLight2: '#CECACA',
          activeFill: 'rgba(0, 0, 0, 0.04)',
          hoverFill: 'rgba(0, 0, 0, 0.02)',
        },
        stone: {
          surface: '#F2EEE9', 
        },
        pine:{
          30:'#44887F'
        },     
        lavender: {
          dark: '#181320',
          light: '#F4F2F7',
          cont: '#5F4C80',
          outlineMedium: '#9582B5',
          iconLight: '#A999C2',
          containerLight: '#CEC6DD',
          icon: '#705997'  
        },
        surface:{
          secondary:'#FAFAFA',
          primary:'#FFF'
        },
        success:{
          light:'#EEF7F4',
          medium:'#77BBB2'
        },
        error:{
          light:'#F8ECEC',
          medium:'#CB6C6C'
        },
        overlay: {
          pressBorder: 'rgba(0, 0, 0, 0.16)',
          lavenderHover: 'rgba(149, 130, 181, 0.24)', 
          lavenderPressed: 'rgba(149, 130, 181, 0.40)', 
          scrim: 'rgba(0, 0, 0, 0.40)',
        },
      },
    },
  },
  plugins: [],
}

