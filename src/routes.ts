import express from 'express'
import { PrismaFeedbacksRepository } from './respositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';


export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {

  const { type, comment , screenshot } = req.body
  const nodemailerMailAdapter = new NodemailerMailAdapter
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  )
  
  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })

  

  return res.status(201).send();

})
