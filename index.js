const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((err, ip) => {
//   if (err) {
//     console.log(`It didnt work! ${err}`);
//     return;
//   }

//   console.log(`It worked! Rturned IP: ${ip}`);
// });

// fetchCoordsByIP('216.71.216.131', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned coordinates:' , coordinates);
// });

// fetchISSFlyOverTimes({ latitude: 49.2189, longitude: -122.9011 }, (err, flyOver) => {
//   if (err) {
//     console.log(`It didnt work! ${err}`);
//     return;
//   }

//   console.log('It worked! Returned flyover times:' , flyOver);
// });

const printPassTimes = passTimes => {
  for (const times of passTimes) {
    const timestamp = times.risetime * 1000;
    const date = new Date(timestamp);
    const duration = times.duration;
    console.log(`Next pass at ${date},for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(passTimes);
});