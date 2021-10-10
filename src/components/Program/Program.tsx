import React, { FC } from "react";

import { ProgramProps } from "../../API/fetchData";
import Module from "./Module";
import stiles from "./Program.module.scss";

const Program: FC<ProgramProps> = ({ title, specializedSubjects }) => (
  <section>
    <h3 className={stiles.program_title}>{title}</h3>

    <div className={stiles.program__wrapper}>
      <Module
        title="1 модуль"
        specializedSubjects={specializedSubjects.slice(0, 5)}
      />
      <Module
        title="2 модуль"
        specializedSubjects={specializedSubjects.slice(5)}
      />
    </div>
  </section>
);

export default Program;
