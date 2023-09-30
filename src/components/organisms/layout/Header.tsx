import { memo, ReactElement, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  DrawerBody,
  Flex,
  Heading,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MunuDrawer } from "../../molecules/MunuDrawer";

export const Header = memo((): ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onClickHome = useCallback(() => {
    navigate("/home"), onClose();
  }, []);
  const onClickUserManagement = useCallback(() => {
    navigate("/home/user_management"), onClose();
  }, []);
  const onClickSetting = useCallback(() => {
    navigate("/home/setting"), onClose();
  }, []);
  const onClickLogout = useCallback(() => {
    navigate("/"), onClose();
  }, []);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Stack direction="row" spacing={4} align="center">
            <Box>
              <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
            </Box>
            <Box>
              <Link onClick={onClickSetting}>設定</Link>
            </Box>
            <Box>
              <Link onClick={onClickLogout}>ログアウト</Link>
            </Box>
          </Stack>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MunuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
        onClickLogout={onClickLogout}
      />
    </>
  );
});
