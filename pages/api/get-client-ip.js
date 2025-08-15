// pages/api/get-lan-ip.js
import os from "os";

export default function handler(req, res) {
  const nets = os.networkInterfaces();
  let localIP = null;

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        localIP = net.address; // e.g., 192.168.x.x
      }
    }
  }

  res.status(200).json({ ip: localIP });
}
