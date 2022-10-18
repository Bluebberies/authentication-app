import Joi from 'joi'

export default function validateInputs (email, password) {
  const schema = Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com'] }
      })
      .required(),
    password: Joi.string()
      .min(5)
      .max(20)
      .required()
  })

  return schema.validate({ email, password })
}
