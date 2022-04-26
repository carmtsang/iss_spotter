const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = ipString => {
  const ipObject = JSON.parse(ipString).ip;
  return request(`https://api.ipbase.com/v2/info?apikey=155e98b0-c385-11ec-8582-1d90b85ec049&ip=${ipObject}`);
};

const fetchISSFlyOverTimes = coordinates => {
  const { latitude, longitude } = JSON.parse(coordinates).data.location;
  return request(`http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`);
};


const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then((ip) => {
      return fetchCoordsByIP(ip);
    })
    .then((coordinates) => {
      return fetchISSFlyOverTimes(coordinates)
    })
    .then((data) => {
      const { response } = JSON.parse(data);
      return response; 
    })
    .catch((error) => {
      console.log("It didn't work: ", error.message);
    })
};

module.exports = { nextISSTimesForMyLocation };