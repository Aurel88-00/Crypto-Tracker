import { FC } from "react";
import Header from "../../../shared/components/Header";
import { useRoutes } from "react-router-dom";
import getRoutes from "../../../routes";

export const HomePage: FC = () => {
  
  const content = useRoutes(getRoutes());
  
  return (
    <>
      <Header />
      {content}
    </>
  );
};
