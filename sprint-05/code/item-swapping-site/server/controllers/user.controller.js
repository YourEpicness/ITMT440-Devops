exports.allAccess = (req, res) => {
  res.status(200).redirect(req.headers.host + req.url);
};

exports.userBoard = (req, res) => {
  res.status(200).redirect(req.headers.host + req.url);
};

exports.adminBoard = (req, res) => {
  res.status(200).redirect(req.headers.host + req.url);
};
