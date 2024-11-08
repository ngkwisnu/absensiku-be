import UAParser from "ua-parser-js";

function parseUserAgent(userAgent) {
  const parser = new UAParser(userAgent);
  const browserInfo = parser.getBrowser();
  return browserInfo;
}

export default function callbackHandle(controller) {
  return async (req, res) => {
    try {
      const httpRequest = {
        host: req.hostname,
        protocol: req.protocol,
        body: req.body || "",
        query: req.query || "",
        params: req.params || "",
        browser: parseUserAgent(req.get("User-Agent")) || "",
        ip: req.ip,
        fileImage: req.files,
        method: req.method,
        path: req.path,
        originalUrl: req.originalUrl,
        user: req.user || {},
        headers: {
          "Content-Type": req.get("Content-Type"),
          Referer: req.get("referer"),
          "User-Agent": req.get("User-Agent"),
        },
      };
      const httpResponse = await controller(httpRequest, res);
      if (httpResponse.headers) {
        res.set(httpResponse.headers);
      }
      res.type("json");
      return res.status(httpResponse.statusCode).send(httpResponse.body);
    } catch (err) {
      return res
        .status(err.status || 500)
        .send({ error: "An unknown error occurred", message: err.message });
    }
  };
}
