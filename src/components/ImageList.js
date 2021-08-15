import React from "react";
import ImageCont from "./ImageCont";

const ImageList = (pics) => {
  const renderImages = pics.images.map((image) => {
    return <ImageCont pics={image} key={image.id} />
  });
  return <div className="text-center" id="imageContainer">{renderImages}</div>;
};

export default ImageList;
