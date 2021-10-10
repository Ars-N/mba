import React, { FC } from "react";

import { ResponseData } from "../../API/fetchData";
import Program from "../Program";
import stiles from "./Page.module.scss";

interface PageProps {
  programData: ResponseData[];
}

const Page: FC<PageProps> = ({ programData }: PageProps) => {
  return (
    <main className={stiles.page__wrapper}>
      {programData.map(({ _id, ...item }: ResponseData) => (
        <Program key={_id} {...item} />
      ))}
    </main>
  );
};

export default Page;
