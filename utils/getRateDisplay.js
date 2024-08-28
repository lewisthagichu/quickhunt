const getRateDisplay = (property) => {
  const { rates } = property;

  if (rates.monthly) {
    return `${rates.monthly.toLocaleString()}/mo`;
  } else if (rates.nightly) {
    return `${rates.nightly.toLocaleString()}/night`;
  } else if (rates.weekly) {
    return `${rates.weekly.toLocaleString()}/wk`;
  }
};

export default getRateDisplay;
