import { useState } from "#app";

export const useDarkMode = () => {
  let browserDark: boolean = false;
  let localDark: boolean = false;
  if (process.client && window) {
    browserDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    localDark = Boolean(localStorage.getItem("useDark")) || false;
  }

  const currHours = new Date().getHours();
  const timeIsDark: boolean = currHours >= 23 || currHours < 7;
  let darkMode = ref(false);
  darkMode.value = localDark || timeIsDark || browserDark;
  return useState("userDarkMode", () => darkMode);
};
