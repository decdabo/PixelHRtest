const Ajv = require('ajv');

const ajv = new Ajv();

const taskPostSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    description: { type: 'string' },
    list: { type: 'array' }
  },
  required: ['name', 'list'],
  additionalProperties: false
}

const postValidator = ajv.compile(taskPostSchema);

const postTaskValidator = async( req, res, next ) => {
  const valid = await postValidator( req.body );
  if (!valid) return res.status(400).send(postValidator.errors);

  return next();
}

module.exports = {
  postTaskValidator,
}
