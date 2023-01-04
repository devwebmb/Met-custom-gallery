import React, { useRef } from "react";

export default function MediumTypeForm(props) {
  const allCheckboxes = useRef([]);

  const preventFunc = (e) => {
    e.preventDefault();

    const data = {
      period: [],
    };

    allCheckboxes.current.forEach((checkbox) => {
      if (checkbox.checked) {
        data.period.push(checkbox.value);
      }
    });

    props.modifyIndex(4, data);
  };

  const addCheck = (el) => {
    if (el && !allCheckboxes.current.includes(el)) {
      allCheckboxes.current.push(el);
    }
  };

  const handleReturn = () => {
    props.modifyIndex(2);
  };
  return (
    <form className="form-container" onSubmit={preventFunc}>
      <p>
        Quels sont les périodes durant lesquelles vous souhaitez voir des
        &oelig;uvres ? (plusieurs choix sont possibles)
      </p>
      <label htmlFor="21Century">21ème siècle</label>
      <input
        type="checkbox"
        name="21century"
        id="21century"
        value="2001"
        ref={addCheck}
      />
      <label htmlFor="20Century">20ème siècle</label>
      <input
        type="checkbox"
        name="20century"
        id="20century"
        value="1901"
        ref={addCheck}
      />
      <label htmlFor="19Century">19ème siècle</label>
      <input
        type="checkbox"
        name="19century"
        id="19century"
        value="1801"
        ref={addCheck}
      />
      <label htmlFor="18Century">18ème siècle</label>
      <input
        type="checkbox"
        name="18century"
        id="18century"
        value="1701"
        ref={addCheck}
      />
      <label htmlFor="17Century">17ème siècle</label>
      <input
        type="checkbox"
        name="17century"
        id="17century"
        value="1601"
        ref={addCheck}
      />
      <label htmlFor="16Century">16ème siècle</label>
      <input
        type="checkbox"
        name="16century"
        id="16century"
        value="1501"
        ref={addCheck}
      />
      <label htmlFor="15Century">15ème siècle</label>
      <input
        type="checkbox"
        name="15century"
        id="15century"
        value="1401"
        ref={addCheck}
      />
      <label htmlFor="pre15century">Antérieur au 15ème Siècle</label>
      <input
        type="checkbox"
        name="pre15century"
        id="pre15century"
        value="1300"
        ref={addCheck}
      />{" "}
      <div className="container-nav-btns">
        <button type="button" className="prev" onClick={handleReturn}>
          PRECEDENT
        </button>
        <button>VALIDER</button>
      </div>
    </form>
  );
}
