import imagesArray from "../../images";
import './Icons.scss'

const Icons = () => {
  return (
    <div className="icons">
      {imagesArray.map((image) => (
        <img key={image.name} src={image.src} alt={image.name} />
      ))}
    </div>
  );
};

export default Icons;
