import { useState } from "#app";

export const useWindowWidth = () => {
  return useState("useWindowWidth", () => {
    return {
      sizeType: 0,
    };
  });
};
