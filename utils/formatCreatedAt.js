const formatTime = (time) => {
  const formatedTime = new Date(time).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return formatedTime;
};

const formatDate = (time) => {
  const formatedDate = new Date(time).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return formatedDate;
};

export { formatTime, formatDate };
