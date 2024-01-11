import React from "react";
import Galleria from "./Galleria";
import Galleriadue from "./Galleriadue";
import Galleriatre from "./Galleriatre";

const Mainsection = () => {
    return (
        <div className="px-4"><><><h4 className="text-white">Trending Now</h4><Galleria /></><><h4 className="text-white">Watch it Again</h4><Galleriadue /></><><h4 className="text-white">New Releases</h4><Galleriatre /></></></div>
    );
}

export default Mainsection;