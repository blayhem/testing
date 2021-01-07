// based on @danilat 's cat_mock
// https://github.com/danilat/cat_mock

export default function handler(req, res) {
  setTimeout(() => {
    res.status(200).json({
      url: req.body.url,
      number: 42,
    });
  }, randomInt(3000, 6000));
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
