"use client";

import React, { createContext, useState, useContext } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "@/components/ThemeProvider";

// Definícia kontextu
export const ThemeContext = createContext({
  toggleTheme: () => {},
  isDarkMode: false,
});

// Vlastný hook pre ThemeContext
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within ThemeProviderWrapper");
  }
  return context;
};

// Provider pre tému
export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
