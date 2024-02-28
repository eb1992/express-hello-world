const express = require("express");

// Create an instance of the Express application
const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse the request body as text
app.use((req, res, next) => {
  express.text()(req, res, next);
});

// Route for handling GET requests at the root URL 
app.get("/", (req, res) => {
  // Respond with an simple HTML page 
  res.type('html').send(html)
});

// Route for handling POST requests at the root URL
app.post("/", (req, res) => {
  // Log the body of the POST request to the console
  console.log(req.body);

  // Respond with a success message 
  res.status(200).send("POST request received successfully\n");
});

// Start the server on the specified port
const server = app.listen(port, () => console.log(`App listening on port ${port}!`));

// Set timeouts for server keep-alive and headers
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

// HTML content for the root route
const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Server is up!</title>
  </head>
  <body>
    <section>
      Server is up!
    </section>
  </body>
</html>
`

// const html = `
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Hello from Render!</title>
//     <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
//     <script>
//       setTimeout(() => {
//         confetti({
//           particleCount: 100,
//           spread: 70,
//           origin: { y: 0.6 },
//           disableForReducedMotion: true
//         });
//       }, 500);
//     </script>
//     <style>
//       @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
//       @font-face {
//         font-family: "neo-sans";
//         src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
//         font-style: normal;
//         font-weight: 700;
//       }
//       html {
//         font-family: neo-sans;
//         font-weight: 700;
//         font-size: calc(62rem / 16);
//       }
//       body {
//         background: white;
//       }
//       section {
//         border-radius: 1em;
//         padding: 1em;
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         margin-right: -50%;
//         transform: translate(-50%, -50%);
//       }
//     </style>
//   </head>
//   <body>
//     <section>
//       Hello from Render!
//     </section>
//   </body>
// </html>
// `
