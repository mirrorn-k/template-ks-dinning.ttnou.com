export const generateGoogleMapsLink = (address: string): string => {
  const encodedAddress = encodeURIComponent(address);
  return `https://www.google.com/maps/place/${encodedAddress}`;
};
