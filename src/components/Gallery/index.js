import React from 'react'

const Gallery = ({urlImage}) => {
  return (
    <div>
      <img src={urlImage} alt="image search" />
    </div>
  )
}

export default Gallery