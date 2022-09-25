const Ajv = require('ajv');

const ajv = new Ajv();

const taskPostSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
  },
  required: ['name'],
  additionalProperties: false
}

const postValidator = ajv.compile(taskPostSchema);

const postTaskValidator = async( req, res, next ) => {
  const valid = await postValidator( req.body );
  if (!valid) return res.status(400).send(postValidator.errors), console.log('bad');

  return next();
}

module.exports = {
  postTaskValidator,
}
