const request = require('request');
const breedName = process.argv.slice(2);
const fetcher = function() {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(url, function(error, response, body) {
    if (error) {
      console.log("invalid request");
      return;
    }
    const data = JSON.parse(body);
    const obj = data[0];
    if (obj) {
      console.log(obj.description);
    } else {
      console.log("OOPS! Breed not found :c");
    }
  });
};
fetcher();
