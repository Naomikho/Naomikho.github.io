export const openURL = (url, newTab) => {
    newTab ? window.open(url, "_blank"): window.open(url, "_self");
  }

