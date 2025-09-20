import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import React from 'react';
export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  
  // Set the theme class on the root HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove any existing theme classes
    root.classList.remove('light', 'dark');
    
    // Add the current theme class
    if (theme) {
      root.classList.add(theme);
    } else {
      // Default to light theme if no theme is set
      root.classList.add('light');
    }
  }, [theme]);

  return (
    <div className={`${theme} min-h-screen`}>
      <div className='bg-white text-gray-700 dark:text-gray-200 dark:bg-dark min-h-screen transition-colors duration-300'>
        {children}
      </div>
    </div>
  );
}












// import { useSelector } from 'react-redux';

// export default function ThemeProvider({ children }) {
//   const { theme } = useSelector((state) => state.theme);
//   return (
//     <div className={theme}>
//       <div className='bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen'>
//         {children}
//       </div>
//     </div>
//   );
// }