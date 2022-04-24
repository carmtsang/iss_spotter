const { fetchMyIP } = require('./iss');

fetchMyIP((err, ip) => {
  if (err) {
    console.log(`It didnt work! ${err}`)
    return;
  }

  console.log(`It worked! Rturned IP: ${ip}`)
})