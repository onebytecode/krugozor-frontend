var request = require('request')
var _uri = 'https://registry.hub.docker.com/u/onebytecode/krugozor-frontend/trigger/a947d16a-20cc-4847-874c-f7f4f41594ca/'
console.log('Hoocking');
request({
    method: 'POST',
    uri: _uri,
    json: {
      "source_type":"Branch",
      "source_name":"develop"
    }

  },
  function (error, response, body) {
    if (error) {
      return console.error('upload failed:', error);
    }
    console.log('Hook successful!  Server responded with:', body);
  })
