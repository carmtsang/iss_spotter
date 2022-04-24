const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');


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

fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (err, flyOver) => {
  if (err) {
    console.log(`It didnt work! ${err}`);
    return;
  }

  console.log(`It worked! Iss flyovertime:, flyOver` )
})