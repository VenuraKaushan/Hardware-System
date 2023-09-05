import {
  Button,
  Card,
  PasswordInput,
  Stack,
  TextInput,
  Title,
  Box,
  ActionIcon,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconArrowBackUp } from "@tabler/icons-react";
import { Navigate } from "react-router-dom";

const InventoryLogin = () => {
  // create login form
  const loginForm = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Box>
      <Card shadow="xl" withBorder radius={"lg"} w={"500px"} mx={"auto"}>
        <Card.Section withBorder p={15}>
          <ActionIcon component="a" href="/">
            <IconArrowBackUp />
          </ActionIcon>
          <Title align="center" mt={-20} order={4}>
            Inventory Login
          </Title>
        </Card.Section>
        <Card.Section p={30}>
          <Stack>
            <form
              onSubmit={loginForm.onSubmit((values) => console.log(values))}
            >
              <TextInput
                label="Email"
                placeholder="stock@gmail.com"
                radius={10}
                mb={10}
                required
                withAsterisk
                {...loginForm.getInputProps("email")}
              />
              <PasswordInput
                label="password"
                radius={10}
                required
                withAsterisk
                {...loginForm.getInputProps("password")}
              />
              <Button fullWidth mt={20} type="submit">
                login
              </Button>
            </form>
          </Stack>
        </Card.Section>
      </Card>
    </Box>
  );
};

export default InventoryLogin;
