const Ajv = require('ajv');
const ajv = new Ajv();

const datasetSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    description: { type: 'string' },
    url: { type: 'string', format: 'uri' },
    distribution: { type: 'array', items: { type: 'object' } }
  },
  required: ['name', 'url', 'description']
};

function validateDataset(dataset) {
  const validate = ajv.compile(datasetSchema);
  const valid = validate(dataset);
  if (!valid) return validate.errors;
  return null;
}

module.exports = validateDataset;