const GalleryItem = ({ imageUrl, photographer, description }) => {
  return (
    <div className="gallery-item">
      <img src={imageUrl}></img>
      <span className="photographer">Photographer: {photographer}</span>
      <span className="description">Description: {description}</span>
    </div>
  );
};

export default GalleryItem;
