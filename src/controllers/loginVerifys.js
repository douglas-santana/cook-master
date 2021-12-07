module.exports = async (email, password) => {
  const emailIsValid = /\S+@\S+\.\S+/;
  if (!email) return { status: 401, message: 'All fields must be filled' };
  if (!password) return { status: 401, message: 'All fields must be filled' };
  if (!emailIsValid.test(email)) return { status: 401, message: 'Incorrect username or password' };
  if (password.lenght < 8) return { status: 401, message: 'Incorrect username or password' };
  return null;
};
