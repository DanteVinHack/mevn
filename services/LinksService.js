const config = require('config');
const shortid = require('shortid');
const Link = require('../models/Link');

class LinksService {
  async create(user, link) {
    try {
      const baseURL = config.get('base_url');
      const code = shortid.generate();
      const { from } = link;

      console.log(link)
      
      const existing = await Link.findOne({ from });

      if (existing) {
        return { link: existing };
      }

      const to = `${baseURL}/t/${code}`;

      const newLink = new Link({
        code, 
        to, 
        from, 
        owner: user.userId
      })
      
      await newLink.save();

      return { link: newLink };

    } catch (e) {
      console.log(e);
      return e;
    }
  }

  async getAll(owner) {
    try {
      const links = await Link.find({ owner });
    
      return links;
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  async getById(id) {
    try {
      const link = await Link.findById(id);
      
      return link;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}

module.exports = new LinksService();