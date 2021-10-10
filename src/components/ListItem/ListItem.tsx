import React, { FC } from "react";

import stiles from "./ListItem.module.scss";

interface ListItemPromise {
  dataArray: string[];
}
const ListItem: FC<ListItemPromise> = ({ dataArray }) => {
  return (
    <ul className={stiles.module}>
      {dataArray.map((item) => (
        <li className={stiles.program_list} key={item}>
          <span className={stiles.program_listItem}>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
