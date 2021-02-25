import axios from 'axios'
const _BASE_URL = 'https://fathomless-woodland-28290.herokuapp.com/api/'
export const getApi = async (url) => {
  try {
    const res = await axios.get(_BASE_URL.concat(url))
    return res.data
  } catch (error) {}
}
