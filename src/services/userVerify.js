module.exports = (name, email, password) => {
  const emailIsValid = /\S+@\S+\.\S+/;
  if (!name) return { status: 400, message: 'Invalid entries. Try again.' };
  if (!email) return { status: 400, message: 'Invalid entries. Try again.' };
  if (!password) return { status: 400, message: 'Invalid entries. Try again.' };
  if (!emailIsValid.test(email)) return { status: 400, message: 'Invalid entries. Try again.' };
  return null;
};

// fonte regex: 