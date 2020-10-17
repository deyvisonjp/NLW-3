import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

export default {

  //(DELETE)
  //(UPDATE)

  //Listar (INDEX)
  async index(req: Request, res: Response) {
    const orphanagesRepository = getRepository(Orphanage);
    const orphanages = await orphanagesRepository.find();
    return res.json(orphanages)
  },

  //VISUALIZAÇÃO UNICA (SHOW)
  async show(req: Request, res: Response) {
    const { id } = req.params;
    const orphanagesRepository = getRepository(Orphanage);
    const orphanage = await orphanagesRepository.findOneOrFail(id);
    return res.json(orphanage)
  },

  //Criação (CREATE)
  async create(req: Request, res: Response) {

    // console.log(req.files);

    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = req.body;

    const orphanagesRepository = getRepository(Orphanage);

    //Salvando uma ou mais imagens
    const requestImages = req.files as Express.Multer.File[];
    const images = requestImages.map(image => {
      return { path: image.filename }
    })

    //Criação de orfanato no banco
    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images
    })

    //Salvar dados no banco
    await orphanagesRepository.save(orphanage)

    return res.status(201).json({ "Orfanato Criado: ": orphanage })
  }

}