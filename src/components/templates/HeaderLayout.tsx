import { memo, ReactElement, ReactNode } from "react";
import { Header } from "../organisms/layout/Header";

type Props = {
  children: ReactNode;
};

export const HeaderLayout = memo(
  (props: Props): ReactElement => {
    const { children } = props;
    return (
      <>
        <Header />
        {children}
      </>
    );
  }
);
