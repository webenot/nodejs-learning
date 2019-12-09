/*
 * Title: Index
 * Description: Index file
 * @Author: Webenot
 * @Date: 02.12.2019
 */

// Dependencies
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

// Needs to read environment variables
require('dotenv').config();

// The server should response to all requests with a string
const httpServer = http.createServer((req, res) => {

  // Get the url and parse it
  const parsedUrl = url.parse(req.url, true);

  // Get the path from url
  const path = parsedUrl.pathname;

  // Get the query string as an object
  const queryStringObject = parsedUrl.query;

  // Get the HTTP method
  const method = req.method.toLowerCase();

  // Get the headers as an object
  //const headers = req.headers;

  // Get the payload, if any
  const decoder = new StringDecoder('utf-8');
  let buffer = '';

  req.on('data', (data) => {
    buffer += decoder.write(data);
  });

  req.on('end', () => {
    buffer += decoder.end();

    // Send the response
    res.end('Hello World!\n');

    // Log the request path
    console.log(
      `${method} ${path} `,
      Object.keys(queryStringObject).length ? queryStringObject : '',
      //headers
    );

    console.log('data', buffer);
  });
});

// Start the server, abd have it listen port
httpServer.listen(process.env.PORT, () => {
  console.log(`The server is listening on port ${process.env.PORT}`);
});
