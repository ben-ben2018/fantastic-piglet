import { useState } from "#app";
let browserDark = false;

if (process.client && window) {
  browserDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
}

const currHours = new Date().getHours();
const timeIsDark = currHours >= 23 || currHours < 7;
let darkMode = "";
darkMode = String(Boolean(darkMode) || timeIsDark || browserDark);
export const useDarkMode = () => {
  return useState("userDarkMode", () => darkMode);
};
