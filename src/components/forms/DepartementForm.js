import React, { useRef } from "react";
import "./form.css";

export default function DepartementForm(props) {
  const allCheckboxes = useRef([]);

  const preventFunc = (e) => {
    e.preventDefault();

    const data = {
      departmentsId: [],
    };

    allCheckboxes.current.forEach((checkbox) => {
      if (checkbox.checked) {
        data.departmentsId.push(checkbox.value);
      }
    });

    props.modifyIndex(3, data);
  };

  const addCheck = (el) => {
    if (el && !allCheckboxes.current.includes(el)) {
      allCheckboxes.current.push(el);
    }
  };

  const handleReturn = () => {
    props.modifyIndex(1);
  };

  return (
    <form className="form-container" onSubmit={preventFunc}>
      <p>
        Dans quelles collections souhaitez vous choisir les &#339;uvres de votre
        gallerie ? (plusieurs choix sont possibles)
      </p>
      <label htmlFor="americanDecorativeArts">Art Décoratif Américain</label>
      <input
        type="checkbox"
        name="americanDecorativeArts"
        id="americanDecorativeArts"
        value="1"
        ref={addCheck}
      />
      <label htmlFor="ancientNearEasternArt">Art Ancien du Proche Orient</label>
      <input
        type="checkbox"
        name="ancientNearEasternArt"
        id="ancientNearEasternArt"
        value="3"
        ref={addCheck}
      />
      <label htmlFor="armsAndArmors">Armes et Armures</label>
      <input
        type="checkbox"
        name="armsAndArmors"
        id="armsAndArmors"
        value="4"
        ref={addCheck}
      />
      <label htmlFor="artsOfAfricaOceaniaAndAmericas">
        Art Africain, Océanien ou des Amériques
      </label>
      <input
        type="checkbox"
        name="artsOfAfricaOceaniaAndAmericas"
        id="artsOfAfricaOceaniaAndAmericas"
        value="5"
        ref={addCheck}
      />
      <label htmlFor="artAsiatic">Art Asiatique</label>
      <input type="checkbox" name="artAsiatic" id="artAsiatic" value="6" />
      <label htmlFor="costumeInstitute">L'Institut du Costume</label>
      <input
        type="checkbox"
        name="costumeInstitute"
        id="costumeInstitute"
        value="8"
        ref={addCheck}
      />
      <label htmlFor="drawingsAndPrints">Dessins et Estampes</label>
      <input
        type="checkbox"
        name="drawingsAndPrints"
        id="drawingsAndPrints"
        value="9"
        ref={addCheck}
      />
      <label htmlFor="egyptianArt">Art Egyptien</label>
      <input type="checkbox" name="egyptianArt" id="egyptianArt" value="10" />
      <label htmlFor="europeanPaintings">Peintures Européenne</label>
      <input
        type="checkbox"
        name="europeanPaintings"
        id="europeanPaintings"
        value="11"
        ref={addCheck}
      />
      <label htmlFor="europeanSculptureeAndDecorativeArt">
        Scuplpture et Art Décoratif Européen
      </label>
      <input
        type="checkbox"
        name="europeanSculptureeAndDecorativeArt"
        id="europeanSculptureeAndDecorativeArt"
        value="12"
        ref={addCheck}
      />
      <label htmlFor="greekAndRomanArt">Art Grec et Romain</label>
      <input
        type="checkbox"
        name="greekAndRomanArt"
        id="greekAndRomanArt"
        value="13"
        ref={addCheck}
      />
      <label htmlFor="islamicArt">Art de l'Islam</label>
      <input
        type="checkbox"
        name="islamicArt"
        id="islamicArt"
        value="14"
        ref={addCheck}
      />
      <label htmlFor="medievalArt">Art Médiéval</label>
      <input
        type="checkbox"
        name="medievalArt"
        id="medievalArt"
        value="17"
        ref={addCheck}
      />
      <label htmlFor="photography">Photographies</label>
      <input
        type="checkbox"
        name="photography"
        id="photography"
        value="19"
        ref={addCheck}
      />
      <label htmlFor="modernArt">Art Moderne</label>
      <input
        type="checkbox"
        name="modernArt"
        id="modernArt"
        value="21"
        ref={addCheck}
      />
      <div className="container-nav-btns">
        <button type="button" className="prev" onClick={handleReturn}>
          PRECEDENT
        </button>
        <button>VALIDER</button>
      </div>
    </form>
  );
}
