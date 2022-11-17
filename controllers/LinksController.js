const LinksService = require('../services/LinksService');

class LinksController {
  async create(req, res) {
    try {
      console.log(req.body)
      const newLink = await LinksService.create(req.user, req.body);

      res.status(201).json(newLink);
      
    } catch (e) {
      console.log(e);
      res.json(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const links = await LinksService.getAll(req.user.userId)
    
      res.status(200).json(links);
    } catch (e) {
      console.log(e);
      res.json(500).json(e);
    }
  }

  async getById(req, res) {
    try {
      const link = await LinksService.getById(req.params.id);
      
      res.status(200).json(link);
    } catch (e) {
      console.log(e);
      res.json(500).json(e);
    }
  }

}

module.exports = new LinksController();