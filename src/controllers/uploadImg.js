const uploadImg = require('../services/uploadImg');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { user } = req;
  const data = await uploadImg(id, user);
  return res.status(200).json(data);
};
