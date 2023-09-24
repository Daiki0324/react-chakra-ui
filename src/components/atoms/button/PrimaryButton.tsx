import { memo, ReactNode, ReactElement } from "react";
import { Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton = memo((props: Props): ReactElement => {
  const { children, disabled = false, loading = false, onClick } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      isDisabled={disabled}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
