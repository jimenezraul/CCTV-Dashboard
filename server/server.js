const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
require("dotenv").config();

const { proxy } = require("rtsp-relay")(app);

// the endpoint our RTSP uses
app.ws("/api/stream/:cameraIP/:camera", (ws, req) => {
  return proxy({
      url: `rtsp://${process.env.RTSP_AUTH}@${req.params.cameraIP}:${process.env.RTSP_PORT}/${req.params.camera}`,
      verbose: false,
  })(ws);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
