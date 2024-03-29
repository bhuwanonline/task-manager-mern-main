export const sortByCompletedStatus = (tasks) => {
  return [...tasks].sort((a, b) => a.completedStatus - b.completedStatus);
};
