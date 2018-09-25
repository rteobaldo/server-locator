const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/search/:domain", (req, res) => {
    return app.render(req, res, "/search", { domain: req.params.domain });
  });

  server.get('\\S+\/$', function (req, res) {
    return res.redirect(301, req.path.slice(0, -1) + req.url.slice(req.path.length));
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
