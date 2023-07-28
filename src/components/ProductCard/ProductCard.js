import React, { useState } from "react";
import "./productcard.css";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiOutlineHeart,AiFillHeart} from "react-icons/ai";


const ProductCard = ({ product: { image, title, price, id } }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="card" key={id}>
      <div className="image">
        <div className="star-icon" onClick={handleClick}>
          {click ? (
            <AiFillHeart style={{ color: "red" }} />
          ) : (
            <AiOutlineHeart style={{ color: "red" }} />
          )}
        </div>

        <img src={image} alt="productimage" className="product-image" />
      </div>
      <span className="title">{title}</span>
      <span className="price">
        <MdOutlineAttachMoney />
        {price}
      </span>
    </div>
  );
};

export default ProductCard;
