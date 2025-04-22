export const handleMapLink = (latitude: number, longitude: number, label = '') => {
  // Construct the appropriate URL based on the platform.
  let mapUrl;

  if (navigator.userAgent.match(/Android/i)) {
    // Check for Android
    mapUrl = `geo:${latitude},${longitude}?q=${latitude},${longitude}(${label})`; // Geo intent for Android, includes label
  } else if (navigator.userAgent.match(/(iPhone|iPad|iPod)/i)) {
    // Check for iOS
    mapUrl = `http://maps.apple.com/?ll=${latitude},${longitude}&q=${label}`; // Apple Maps URL, includes label
  } else {
    // Default to Google Maps for other platforms (or if platform can't be determined)
    mapUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`; // Google Maps URL
  }

  // Open the map URL in a new tab/window
  window.open(mapUrl, '_blank'); //_blank to open in new tab
};

export const FormatMobileNumber = (msisdn: string) => {
  return msisdn.startsWith('0') ? `+98${msisdn.slice(1, msisdn.length)}` : `+98${msisdn}`;
};

export const RevertFormatMobileNumber = (msisdn: string) => {
  return msisdn ? `0${msisdn.slice(3, msisdn.length)}` : '-';
};
