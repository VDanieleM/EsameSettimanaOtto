import React from "react";
import Chiamata from "./Chiamata";

export default function Galleria() {
  const nomeFilm = "indiana jones";

    return (
        <div>
            <Chiamata nomedelfilm={nomeFilm}/>
        </div>
    );
}