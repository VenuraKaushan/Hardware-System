import {
  Button,
  Card,
  Container,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
  createStyles,
} from "@mantine/core";
import { useForm } from "@mantine/form";

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
    <Card shadow="xl" withBorder radius={"lg"} w={"30%"} mt={"10%"} mx={"auto"}>
      <Card.Section withBorder p={15}>
        <Title align="center" order={4}>
          Inventory Login
        </Title>
      </Card.Section>
      <Card.Section p={30}>
        <Stack>
          <form onSubmit={loginForm.onSubmit((values) => console.log(values))}>
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
  );
};

export default InventoryLogin;
