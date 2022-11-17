const RedirectService = require('../services/RedirectService');

class RedirectController {
  async redirect(req, res) {
    try {
      const link = await RedirectService.getLink(req.params.code);

      if (link) {
        return res.redirect(link.from);
      }

      res.status(404).json({ message: 'Ссылка не найдена' });

    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }
}

module.exports = new RedirectController();