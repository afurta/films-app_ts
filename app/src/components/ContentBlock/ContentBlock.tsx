import React, { useEffect } from "react";
import "./ContentBlock.css";
import ContentBlockItem from "./ContentBlockItem/ContentBlockItem";
import { useDispatch, useSelector } from "react-redux";
import { filmSlice } from "../../store/filmsStoreSlice";

type IProps = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};
type initialType = {
  filmsStore: {
    films: Array<IProps>;
  };
};

const ContentBlock: React.FC = () => {
  const { addFilms, changeState } = filmSlice.actions;
  const dispatch = useDispatch();

  useEffect((): void => {
    try {
      getData("http://www.omdbapi.com/?apikey=6e55c3bc&s=matrix");
    } catch (e) {
      console.log(e);
    }
  }, []);

  function getData(url: string) {
    fetch(url)
      .then(responce => responce.json())
      .then(data => {
        dispatch(addFilms(data.Search));
      });
  }
  const filmsArr: Array<IProps> = useSelector(
    (state: initialType) => state.filmsStore.films
  );

  const inputChangeHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      fetch(
        `http://www.omdbapi.com/?apikey=6e55c3bc&s=${e.currentTarget.value}`
      )
        .then(responce => responce.json())
        .then(data => {
          dispatch(changeState(data.Search));
        });
    }
  };

  return (
    <div className="ContentBlock">
      <input
        type="text"
        placeholder="Введите название фильма на английском"
        onKeyPress={e => inputChangeHandler(e)}
      />
      {filmsArr.map((elem, index) => {
        return <ContentBlockItem {...elem} key={index} />;
      })}
    </div>
  );
};

export default ContentBlock;
