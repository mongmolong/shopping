import { useState } from "react";
import { BsBagHeart, BsBagHeartFill} from "react-icons/bs";

function Card({ img, title, star, reviews, newPrice, prevPrice }) {
  const [ isKeep, setIsKeep] = useState(false);

  const keepClick = () => {
    setIsKeep(!isKeep);
  }

return (
    <>
      <section className="card ">
        <div className="card-img-top">
          <img
          src={img}
          alt={title}
          className="card-img" />
        </div>

        <div >
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>

          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del>&nbsp;{newPrice}
            </div>
            <div className="bag" onClick={keepClick}>
              {isKeep? <BsBagHeartFill className="bag-icon" /> : <BsBagHeart  className="bag-icon" />}
            </div>
          </section>
        </div>
      </section >
    </>
  )
}

export default Card
