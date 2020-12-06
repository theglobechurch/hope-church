const dayjs = require('dayjs');

module.exports = {
  activityByDay: (events, day) => {
    return events.filter((event) => event.data.day === day);
  },
  findBySlug: (collection, slug) => {
    return collection.find((item) => item.fileSlug === slug);
  },
  readableDateTime: (dateObj) => {
    return dayjs(dateObj).format('dddd, D MMMM YYYY, h:mma');
  },
  readableDate: (dateObj) => {
    return dayjs(dateObj).format('dddd, D MMMM');
  },
};
