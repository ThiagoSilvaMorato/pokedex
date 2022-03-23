import React from "react";
import { SearchInput } from "../SearchInput";
import "./index.scss";

export const Header = () => {
  return (
    <div className='container--Header'>
      <strong>Pokedex</strong>
      <SearchInput />
    </div>
  );
};
