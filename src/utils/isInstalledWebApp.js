const isInStandaloneMode = () => {
  return (
    window?.matchMedia('(display-mode: standalone)')?.matches ||
    window?.navigator?.standalone ||
    document?.referrer?.includes('android-app://')
  );
};

window.isInstalled = isInStandaloneMode;

export default isInStandaloneMode;
