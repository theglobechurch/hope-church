module.exports = {
  people: (collection) => {
    return collection.getFilteredByGlob(["./src/people/**/*.md"]);
  },
};
