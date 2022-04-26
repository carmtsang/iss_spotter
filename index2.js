const { nextISSTimesForMyLocation } = require('./iss_promised');

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body))

const printPassTimes = passTimes => {
  for (const times of passTimes) {
    const timestamp = times.risetime * 1000;
    const date = new Date(timestamp);
    const duration = times.duration;
    console.log(`Next pass at ${date},for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });