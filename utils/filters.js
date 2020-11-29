module.exports = {
  activityByDay: (events, day) => {
    return events.filter((event) => event.data.day === day);
  },
};
