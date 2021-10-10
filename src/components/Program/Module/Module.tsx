import React, { FC, useEffect, useState } from "react";

import { ProgramProps } from "../../../API/fetchData";
import ListItem from "../../ListItem";
import stiles from "../Program.module.scss";

const Module: FC<ProgramProps> = ({ title, specializedSubjects }) => {
  const red = "#FF3535";

  const [isModuleActive, setIsModuleActive] = useState(false);
  const [width, setDimensions] = React.useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setDimensions(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handlerOnClick = () => setIsModuleActive((prevState) => !prevState);

  return (
    <div className={stiles.module__wrapper}>
      {width > 600 ? (
        <div className={stiles.title__wrapper}>
          <h4 className={stiles.module_title}>{title}</h4>
        </div>
      ) : (
        <button
          type="button"
          style={{
            backgroundColor: isModuleActive ? red : "white",
          }}
          className={stiles.title__wrapper}
          onClick={handlerOnClick}
        >
          <h4
            className={`${stiles.module_title} ${
              isModuleActive && stiles.active
            }`}
          >
            {title}
          </h4>
        </button>
      )}

      {!(width < 600 && !isModuleActive) && (
        <ListItem dataArray={specializedSubjects} />
      )}
    </div>
  );
};

export default Module;
