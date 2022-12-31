import React, { useEffect, useState } from "react";
import { data } from "./AllImages";
import "./gallery.css";
import CloseIcon from "@material-ui/icons/Close";

function Gallery() {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  useEffect(() => {
    document.title = "Image Gallery";
  }, []);

  const shuffleData = (data) => {
    for (let i = data.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
    }
    return data;
  };

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {shuffleData(data).map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
