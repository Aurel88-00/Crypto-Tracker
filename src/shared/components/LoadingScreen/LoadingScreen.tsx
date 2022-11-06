import { FC } from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";

export const LoadingScreen: FC = () => {
  return (
    <Backdrop style={{ color: "#fff", zIndex: 400000 }} open={true}>
      <CircularProgress color="primary"/>
    </Backdrop>
  );
};

export default LoadingScreen;
