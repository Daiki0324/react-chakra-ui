import { memo, ReactElement, useEffect } from "react";
import { Center, Flex, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "../organisms/UserCard/UserCard";
import { useAllUsers } from "../hooks/useAllUsers";

export const UserManagement = memo((): ReactElement => {
  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => getUsers(), []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
