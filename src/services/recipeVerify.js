module.exports = async (name, ingredients, preparation) => {
  if (!name) return { status: 400, message: 'Invalid entries. Try again.' };
  if (!ingredients) return { status: 400, message: 'Invalid entries. Try again.' };
  if (!preparation) return { status: 400, message: 'Invalid entries. Try again.' };
  return null;
};
