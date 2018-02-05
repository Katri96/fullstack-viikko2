import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = (newObject) => {
  return axios.post(baseUrl, { name: newObject.name, number: newObject.number }); 
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const deleteById = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, deleteById }