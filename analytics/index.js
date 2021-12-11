import ReactGA from 'react-ga4';

export const initGA = () => {
  console.log('GA init');
  ReactGA.initialize('G-5JZ27YY73N');
};

export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

export const logEvent = (category = '', action = '', label = null) => {
  if (category && action) {
    let params = {
      category,
      action,
    };
    if (label) params.label = label;

    ReactGA.event(params);
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};

export const debugEvent = (event = '') => {
  console.log(`TRACK EVENT: ${event}`);
};
