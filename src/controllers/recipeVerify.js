module.exports = async (res, recipeCreated) => {
  const { status, message } = recipeCreated;
  return res.status(status).json({ message });
};
