module.exports = {
  activityByDay: (events, day) => {
    return events.filter((event) => event.data.day === day);
  },
  findBySlug: (collection, slug) => {
    return collection.find((item) => item.fileSlug === slug);
  },
};
