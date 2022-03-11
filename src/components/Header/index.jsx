import React from "react";
import { SearchInput } from "../SearchInput";
import "./index.css";

export const Header = () => {
  return (
    <div className='container--Header'>
      <div>
        <strong>Pokedex</strong>
        <SearchInput />
      </div>
    </div>
  );
};
