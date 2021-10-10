import React, { FC } from "react";

import stiles from "./Header.module.scss";

interface HeaderProps {
  pageTitleText: string;
}

const Header: FC<HeaderProps> = ({ pageTitleText }: HeaderProps) => (
  <header>
    <h2 className={stiles.pageTitle}>{pageTitleText}</h2>
  </header>
);

export default Header;
