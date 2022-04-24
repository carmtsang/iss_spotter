const request = require("request")

// fetching IP address
const fetchMyIP = callback => {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      console.log('error:', error);
    }
    
    console.log('body:', body)
  })
};

module.exports = { fetchMyIP };