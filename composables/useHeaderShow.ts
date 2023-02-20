import { useState } from "#app";
let show: boolean = true;
export const useHeaderShow = () => {
  return useState("useHeaderShow", () => show);
};
