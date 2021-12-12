import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cartStoreSlice";
import "./ContentBlockItem.css";

interface IProps {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

const ContentBlockItem: React.FC<IProps> = ({
  Poster,
  Title,
  Type,
  Year,
  imdbID,
}) => {
  const dispatch = useDispatch();

  const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = e.currentTarget.getAttribute("data-id")!;
    dispatch(addToCart(id));
  };

  return (
    <div className="card" data-id={imdbID} onClick={clickHandler}>
      <div className="card-image">
        <img src={Poster} alt="filmImage" />
        <span className="card-title">{Title}</span>
        <a
          href="/#"
          className="btn-floating halfway-fab waves-effect waves-light red"
        >
          <i className="material-icons">add</i>
        </a>
      </div>
      <div className="card-content">
        <ul>
          <li>{Type}</li>
          <li>{Year}</li>
        </ul>
      </div>
    </div>
  );
};

export default ContentBlockItem;
