import { useState, useEffect } from "react";

export const responsiveSizes = {
  mobileSmall: "320",
  mobileMedium: "375",
  mobileLarge: "425",
  tablet: "768",
  laptop: "1024",
  desktop: "1440",
};

export const useScreenType = () => {
  const [screenType, setScreenType] = useState();

  const handleResize = () => {
    let type = "desktop";

    if (
      document.documentElement.clientWidth > responsiveSizes.mobileLarge &&
      document.documentElement.clientWidth <= responsiveSizes.tablet
    ) {
      type = "tablet";
    } else if (document.documentElement.clientWidth <= responsiveSizes.mobileLarge) {
      type = "mobile";
    }
    setScreenType(type);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenType;
};
