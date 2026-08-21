const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || "localhost";
const port = parseInt(process.env.PORT, 10) || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error("Error handling request:", req.url, err);
        res.statusCode = 500;
        res.end("Internal Server Error");
      }
    })
      .once("error", (err) => {
        console.error("Custom server error:", err);
        process.exit(1);
      })
      .listen(port, () => {
        console.log(
          `\n⚡ Bits & Builds Server ready at http://${hostname}:${port} (dev: ${dev})\n`
        );
      });
  })
  .catch((err) => {
    console.error("Failed to start Next.js application:", err);
    process.exit(1);
  });
