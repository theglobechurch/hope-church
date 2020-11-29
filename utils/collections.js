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
};
