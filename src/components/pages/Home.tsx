import { memo, ReactElement } from "react";

export const Home = memo(
  (): ReactElement => {
    return <p>ホームページです</p>;
  }
);
