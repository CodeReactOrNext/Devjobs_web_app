const getImageUrl = (logo: string): string => {
  return new URL(`/src/assets/logos/${logo}`, import.meta.url).toString();
};

export { getImageUrl };
