import React, {useState} from 'react'
import requests from '../../Requests'
import axios from 'axios'
import Gallery from '../Gallery'

const SearchBar = () => {
  const [search, setSearch] = useState("")
  const [medias, setMedias] = useState([])

  const baseURL = requests.fetchAPI

  const handleSubmit = (e) => {
    e.preventDefault();
    async function fetchData() {
      const res = await axios(baseURL+"&q="+encodeURIComponent(search)+"&image_type=photo")
      setMedias(res.data.hits)
      return res
    }
    fetchData()
  }
  
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
        </form>
        <div className="contain_img">
          {medias &&
            medias.map((item) => {
              return <Gallery key={item.id} urlImage={item.previewURL} />
            })
          }
        </div>
    </div>
  )
}

export default SearchBar