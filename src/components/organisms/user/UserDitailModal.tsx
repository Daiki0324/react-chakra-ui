import { memo, ReactElement, useEffect, useState } from "react";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  Stack,
} from "@chakra-ui/react";

import { User } from "../../../types/api/user";
import { useLoginUser } from "../../../hooks/useLoginUser";
import { useMessage } from "../../../hooks/useMessage";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  isOpen: boolean;
  isAdmin?: boolean;
  users: Array<User> | null;
  selectedUser: User | null;
  onClose: () => void;
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

export const UserDitailModal = memo((props: Props): ReactElement => {
  const { isOpen, isAdmin, users, selectedUser, onClose, setUsers } = props;
  const { loginUser } = useLoginUser();
  const { showMessage } = useMessage();
  const [userDetails, setUserDetails] = useState({
    username: "",
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    setUserDetails({
      username: selectedUser?.username || "",
      name: selectedUser?.name || "",
      email: selectedUser?.email || "",
      phone: selectedUser?.phone || "",
    });
  }, [selectedUser]);

  function onChangeDetail(e: React.ChangeEvent<HTMLInputElement>, key: string) {
    setUserDetails({
      ...userDetails,
      [key]: e.target.value,
    });
  }

  function onClickUpdate() {
    const updatedUsers = users?.map((u) =>
      u.id === selectedUser?.id ? { ...u, ...userDetails } : u,
    );
    setUsers(updatedUsers || []);
    showMessage({ title: "更新に成功しました", status: "success" });
    onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input
                value={userDetails.username}
                isReadOnly={!isAdmin}
                onChange={(e) => onChangeDetail(e, "username")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input
                value={userDetails.name}
                isReadOnly={!isAdmin}
                onChange={(e) => onChangeDetail(e, "name")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input
                value={userDetails.email}
                isReadOnly={!isAdmin}
                onChange={(e) => onChangeDetail(e, "email")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input
                value={userDetails.phone}
                isReadOnly={!isAdmin}
                onChange={(e) => onChangeDetail(e, "phone")}
              />
            </FormControl>
          </Stack>
          <ModalFooter>
            {isAdmin && (
              <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
            )}
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
