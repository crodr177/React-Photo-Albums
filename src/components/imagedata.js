import axios from 'axios'

export function getAlbums() {
  return new Promise ((resolve, reject) => {
    axios.get("http://localhost:3001/albums").then(resp =>{
      resolve(resp.data)
    }).catch(err =>{
      reject(err)
  })
})
}

export function getAlbum(id) {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3001/albums/${id}?_embed=images`).then (resp =>{
      resolve(resp.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export function getPicture(id) {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:3001/images/' + id).then (resp =>{
      resolve(resp.data)
    }).catch(err => {
      reject(err)
    })
  })
}