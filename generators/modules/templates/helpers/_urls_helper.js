const BASE_URL = '/URL_PATH';
const RESOURCE_URL = `${BASE_URL}/{id}`

export default {
  create: BASE_URL,
  destroy: RESOURCE_URL,
  get: BASE_URL,
  getOne: RESOURCE_URL,
  update: RESOURCE_URL
};