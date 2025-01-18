export const getTeamColor = (teamId) => {
  const hue = parseInt(teamId.split('-')[1]) * 20 % 360;
  return `hsl(${hue}, 70%, 60%)`;
};

