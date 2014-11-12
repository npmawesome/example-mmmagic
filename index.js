var mmmagic = require('mmmagic');
var magic = new mmmagic.Magic(mmmagic.MAGIC_MIME_TYPE);

magic.detectFile('./kitten.jpg', function(err, result) {
  if (err) throw err;

  // image/jpeg
  console.log('kitten.jpg', result);
});

magic.detectFile('./kitten.png', function(err, result) {
  if (err) throw err;

  // also `image/jpeg` even though extension is PNG
  console.log('kitten.png', result);
});
