import { tutorial } from '../models';

export default class tutoController {
  static async getAll(req, res) {
    try {
      const tutos = await tutorial.findAll();
      if (tutos) {
        res.status(200).json(tutos);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async create(req, res) {
    try {
      const user = tutorial.create(req.body);
      if (user) {
        return res.status(201).json({ message: 'user created' });
      }
      return res.status(400).json({ error: 'user not created' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // function to upload a user using id

  static async update(req, res) {
    try {
      const { id } = req.params;
      const tutorialToUpdate = await tutorial.update(req.body, {
        where: { id },
      });
      if (tutorialToUpdate) {
        const updatedTutorial = await tutorial.findOne({ where: { id } });
        return res.status(200).json(updatedTutorial);
      }
      return res.status(404).json({ message: 'user not found' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async getOne(req, res) {
    try {
      const { id } = req.params;
      const tuto = await tutorial.findOne({ where: { id } });
      if (tuto) {
        return res.status(200).json(tuto);
      }
      return res.status(400).json({ message: 'tutorial not found' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const tutodel = await tutorial.destroy({ where: { id } });
      if (tutodel) {
        return res.status(204).json({ message: 'tutorial deleted' });
      }
      return res.status(400).json({ message: 'tutorial not deleted' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
