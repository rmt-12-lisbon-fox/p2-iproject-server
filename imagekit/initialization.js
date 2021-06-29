const ImageKit = require("imagekit");

module.exports = () => {
  const imagekit = new ImageKit({
    publicKey : "public_OhEFOtx2/onjc8GLaeZwQUBAtq8=",
    privateKey : process.env.IMAGEKIT_KEY,
    urlEndpoint : "https://ik.imagekit.io/2vlphz4bd6m"
  })
  return imagekit
}