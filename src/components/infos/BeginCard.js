import React from 'react'
import "./info.css"

export default function BeginCard(props) {
  return (
      <div className='card-container'>
          <p>The Metropolitan Museum of Art de New York est l'un des plus beaux musées du monde. <br /> <br />
              Je vous propose ici en fonction de vos choix de vous créer votre petite gallerie personnelle d'oeuvres du musée pouvant vous plaire en fonction de vos goûts et de vos attentes.</p>
          <button onClick={() => {props.modifyIndex(2)}}>
              COMMENCER
          </button>
    </div>
  )
}
