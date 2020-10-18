import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import Orphanage from '../models/Orphanage';
import orphanageView from '../views/orphanages_view';

export default {

  //(DELETE)
  //(UPDATE)

  //Listar (INDEX)
  async index(req: Request, res: Response) {
    const orphanagesRepository = getRepository(Orphanage);
    const orphanages = await orphanagesRepository.find({
      relations: ['images']
    });
    return res.json(orphanageView.rendermany(orphanages));
  },

  //VISUALIZAÇÃO UNICA (SHOW)
  async show(req: Request, res: Response) {
    const { id } = req.params;
    const orphanagesRepository = getRepository(Orphanage);
    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images']
    });
    return res.json(orphanageView.render(orphanage));
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

    //Validadndo dados
    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images
    };

    const shema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required()
        })
      )
    })

    // A Validação acontece aqui, Caso encontre um campo que não esta no padrão
    // schema, retorne os erros.
    await shema.validate(data, {
      abortEarly: false,
    })

    //Criação de orfanato no banco
    const orphanage = orphanagesRepository.create(data)

    //Salvar dados no banco
    await orphanagesRepository.save(orphanage)

    return res.status(201).json({ "Orfanato Criado: ": orphanage })
  }

}