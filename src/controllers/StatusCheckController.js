class StatusCheckController {
  showStatus(req, res) {
    return res.status(200).json({ serverStatus: "ok" });
  }
}

module.exports = StatusCheckController;
