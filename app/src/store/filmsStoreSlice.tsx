import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IProps = [
  {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
  }
];

type IStateData = {
  films: Array<object> | null;
};

export const filmSlice = createSlice({
  name: "filmsStore",
  initialState: {
    films: [],
  },
  reducers: {
    addFilms(state: IStateData, action: PayloadAction<IProps>) {
      state.films?.push(...action.payload);
    },
    changeState(state: IStateData, action: PayloadAction<IProps>) {
      state.films = [];
      state.films?.push(...action.payload);
    },
  },
});
export const { addFilms, changeState } = filmSlice.actions;
export default filmSlice.reducer;
