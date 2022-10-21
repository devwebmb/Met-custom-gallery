import React from 'react'

export default function EndCard(props) {
  return (
    <div className="card-container">
      <p>
        Prêt à découvrir la gallerie que nous vous avons concocté selon vos
        choix !{" "}
      </p>
      <button
        onClick={() => {
          props.modifyIndex(5);
        }}
      >
        VOIR LA GALLERIE
      </button>
    </div>
  );
}
