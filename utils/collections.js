const dayjs = require('dayjs');

module.exports = {
  people: (collection) => {
    return collection.getFilteredByGlob(["./src/people/**/*.md"]);
  },
  activities: (collection) => {
    return collection.getFilteredByGlob(["./src/activities/**/*.md"]);
  },
  sections: (collection) => {
    return collection.getFilteredByGlob(["./src/sections/**/*.md"]);
  },
  events: (collection) => {
    return collection.getFilteredByGlob(["./src/events/**/*.md"])
      .filter(function(item) {
        return dayjs(item.data.date).isAfter(dayjs());
      });
  }
};
