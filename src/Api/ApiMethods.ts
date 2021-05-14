import Api, { ApiEndpoints } from "./Api"

const getContact = async () => {
  return await Api.get(ApiEndpoints.getContact())
}

const api = {
  getContact,
}

export default api
