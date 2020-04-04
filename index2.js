console.log("index2");

/*const crypto = require('crypto');
const assert = require('assert');

const token = crypto.createHmac('sha256', 'domain.com').digest('hex');

console.dir({ token });*/

'use strict';

/*const http = require('https');

//const baseAPIUrl = 'https://api.arbuztour.com/';
const baseAPIUrl = 'https://amixtour.com/atfront/';
//const refererDomain = 'https://arbuztour.com';
const refererDomain = 'https://api.arbuztour.com/';
const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36';

const config = {
  reviewsLink: baseAPIUrl + 'testimonials.php',
  deptCitiesLink: baseAPIUrl +'from.php',
  searchLink: baseAPIUrl + 'search.php',
  offerLink: baseAPIUrl +'offer.php',
  tourLink: baseAPIUrl +'hotel.php',
  citiesLink: baseAPIUrl +'cities.php',
  countriesLink: baseAPIUrl +'countries.php',
  thumbBaseLink: baseAPIUrl +'thumb.php?src=',
  thumbHotBaseLink: baseAPIUrl +'hot-thumb.php?src=',
  imageBaseLink: baseAPIUrl +'image.php?src=',
  hotLink: baseAPIUrl +'hot.php',
  hotToursLink: baseAPIUrl +'hot-offers.php',
  hotelsLink: baseAPIUrl +'hotels.php',
  suggestLink: baseAPIUrl +'suggest.php',
  excursionsLink: baseAPIUrl +'excursions.php',
};

const options = {
  headers: {
    'Referer': refererDomain,
    'Content-Type': 'application/json; charset=utf-8',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache, must-revalidate',

  },
  protocol: 'https:',
  agent: false
};
let response = '';
//options.agent = new http.Agent(options);

const req = http.request(config.countriesLink + '?lang=ru', options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);



  res.on('data', (d) => {
    //let receivedData = process.stdout.write(d);
    response += d.toString();
    //console.dir(JSON.parse(receivedData));
  });

  res.on('end', () => {
    console.log(JSON.parse(response).countries.length);
  });
});

//console.dir(req);

req.on('error', (e) => {
  console.error(e);
});
req.end();*/

const str = 'test.+Morning&)?* ';

let outStr = str.replace(/\W/g, '_').toLowerCase();

console.log(outStr);
