import { useState, useEffect } from 'react';

export function useHandleThemeChange() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => {
      setTheme(event.matches ? "dark" : "light");
    };

    setTheme(darkModeQuery.matches ? "dark" : "light");
    darkModeQuery.addEventListener('change', handleChange);

    return () => darkModeQuery.removeEventListener('change', handleChange);
  }, []);

  const handleThemeChange = () => {
    const newTheme = theme === 'cupcake' ? 'hello' : 'cupcake';
    setTheme(newTheme);
  };

  return [theme, handleThemeChange];
}
