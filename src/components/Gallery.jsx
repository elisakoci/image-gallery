import React, { useEffect, useState } from "react";
import getImages from "../helpers/getImages";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    getImages((data) => {
      const imagesData = data.photos?.map((image) => ({
        id: image.id,
        imageUrl: image.src?.original,
        photographer: image.photographer,
        description: image.alt,
      }));

      setImages(imagesData);
    });
  }, []);

  if (!images) {
    return <div className="gallery">Loading...</div>;
  }

  return (
    <div className="gallery">
      {/* Create a GalleryItem component */}
      {/* Add the class gallery-item to the parent of the component */}
      {/* Add an img element */}
      {/* Add a span element with class photographer */}
      {/* Add a span element with class description */}
      {/* Map the images array to generate a list of GalleryItem */}

      {/* Add a key attribute to the GalleryItem component and assign it the id of the image */}
      {/* Assign the imageUrl to the src of the img element */}
      {/* Assign the photographer to the text content of the photographer span in the following format: Photographer: <photographer here> */}
      {/* Assign the description to the text content of the description span in the following format: Description: <description here> */}

      {images.map((image) => {
        <GalleryItem
          key={image.id}
          imageUrl={image.imageUrl}
          photographer={image.photographer}
          description={image.description}
        />;
      })}
    </div>
  );
};

export default Gallery;
