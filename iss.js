const request = require("request");

// fetching IP address
const fetchMyIP = callback => {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    // error for invalid domain, user offline, etc.
    if (error) return callback(error, null);
    
  
    // if non-200 status, assume server error.
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    
    callback(null, ip);
  });
};

// fetching geo coordinates
const fetchCoordsByIP = (ip, callback) => {
  request(`https://api.ipbase.com/v2/info?apikey=155e98b0-c385-11ec-8582-1d90b85ec049&ip=${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const { latitude, longitude } = JSON.parse(body);

    callback(null, { latitude, longitude });
  });
};

//fetching flytime

const fetchISSFlyOverTimes = (coords, callback) => {
  request(`https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for ISS Fly Time. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const flyOver = JSON.parse(body).response;
    callback(null, flyOver);
  });
};

// combining all 3  functions
const nextISSTimesForMyLocation = callback => {
  fetchMyIP((err, ip) => {
    if (err) {
      return callback(err,null);
    }

    fetchCoordsByIP(ip, (err, coords) => {
      if (err) {
        return callback(err,null);
      }

      fetchISSFlyOverTimes(coords, (err, flyOver) => {
        if (err) {
          return callback(err,null);
        }

        callback(null, flyOver);
      });
    });
  });
};

module.exports = { nextISSTimesForMyLocation };