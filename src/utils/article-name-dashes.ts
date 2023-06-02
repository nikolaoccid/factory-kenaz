export const articleNameDashes = (articleName: string) => {
  return articleName.replace(/\W+/g, '-').toLowerCase();
};
