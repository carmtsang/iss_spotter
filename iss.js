const request = require("request")

// fetching IP address
const fetchMyIP = callback => {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    
    const data = JSON.parse(body)
    
    return callback(null, data.ip)
  })
};

module.exports = { fetchMyIP };