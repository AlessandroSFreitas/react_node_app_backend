const Box = require('../models/Box');

class BoxController {
  // Criar um novo box
  async store(req, res) {
    const box = await Box.create(req.body);

    return res.json(box);
  }

  // Mostra a box e seus arquivos
  async show(req, res) {
    const box = await Box.findById(req.params.id).populate({
      path: 'files',
      options: { sort: { createdAt: -1 } },
    });

    return res.json(box);
  }
}

module.exports = new BoxController();
