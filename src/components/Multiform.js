import React, { useState } from "react";
import "./multiform.css";
import BeginCard from "./infos/BeginCard";
import DepartementForm from "./forms/DepartementForm";
import PeriodForm from "./forms/PeriodForm";
import Loveform from "./forms/Loveform";
import EndCard from "./infos/EndCard";
import Gallery from "./gallery/Gallery";

export default function Multiform() {
  const [formIndex, setFormIndex] = useState(1);
  const [allFormsData, setAllFormsData] = useState({});

  const modifyIndex = (index, data) => {
    setFormIndex(index);
    if (data) {
      const newData = { ...allFormsData };
      const firstPropNewData = Object.keys(data)[0];

      newData[firstPropNewData] = data[firstPropNewData];
      setAllFormsData(newData);
    }
  };

  return (
    <div>
      {formIndex === 1 ? (
        <BeginCard modifyIndex={modifyIndex} />
      ) : formIndex === 2 ? (
        <DepartementForm modifyIndex={modifyIndex} />
      ) : formIndex === 3 ? (
        <PeriodForm modifyIndex={modifyIndex} />
      ) : formIndex === 4 ? (
        <Loveform modifyIndex={modifyIndex} />
      ) : formIndex === 5 ? (
        <EndCard modifyIndex={modifyIndex} />
      ) : formIndex === 6 ? (
        <Gallery data={allFormsData} />
      ) : (
        ""
      )}
    </div>
  );
}
