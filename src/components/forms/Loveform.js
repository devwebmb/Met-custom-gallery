import React, { useState } from "react";

export default function Loveform(props) {
  const [formData, setFormData] = useState({
    prefs: {
      love: "",
    },
  });

  const preventFunc = (e) => {
    e.preventDefault();
  };

  const handleTextarea = (e, pref) => {
    if (pref == "love") {
      setFormData({
        ...formData.prefs,
        love: e.target.value,
      });
    }
    };
    
      const handleReturn = () => {
        props.modifyIndex(3);
      };

  return (
    <form className="form-container" onSubmit={preventFunc}>
      <p>
        Allez pour le plaisir nous vous laissons choisir quelques artistes que
        vous adorez et avec un peu de chance peut-être ont-ils de &oelig;uvres
        au MET ! (séparer les noms des artistes par des virgules et attention à
        l'orthographe)
      </p>
      <label>Votre ou vos artistes préférés :</label>
      <textarea
        name="prefered"
        id="prefered"
        rows="5"
        onChange={(e) => {
          handleTextarea(e, "love");
        }}
      ></textarea>
      <div className="container-nav-btns">
        <button type="button" onClick={handleReturn} className="prev">
          PRECEDENT
        </button>
        <button
          onClick={() => {
            props.modifyIndex(5, formData);
          }}
        >
          VALIDER
        </button>
      </div>
    </form>
  );
}
