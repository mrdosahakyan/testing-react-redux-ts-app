Object.defineProperty(window, 'matchMedia', {
  value: () => {
    return {
      matches: false,
      addListener: () => null,
      removeListener: () => null,
    };
  },
});

Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      getPropertyValue: () => null,
    };
  },
});

export {};
