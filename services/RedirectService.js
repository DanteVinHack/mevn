const Link = require("../models/Link");

class RedirectService {
  async getLink(code) {
    try {
      const link = await Link.findOne({ code });

      link.clicks++;
      await link.save();

      return link;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}

module.exports = new RedirectService();