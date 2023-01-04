import React, { useState, useEffect } from "react";
import "./gallery.css";
import axios from "axios";

export default function Gallery(props) {
  const [idArray, setIdArray] = useState();

  useEffect(() => {
    console.log(props);
    for (let i = 0; i < props.data.departmentsId.length; i++) {
      axios.get()
    }
})
  

  return <div>Gallery</div>;
}
