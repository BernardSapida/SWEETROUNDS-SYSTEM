import {
  createStyles,
  Paper,
  Title,
  Text,
  Container,
  rem,
} from "@mantine/core";
import Head from "next/head";
import ForgotPasswordForm from "@/components/forgot_password/ForgotPasswordForm";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(26),
    fontWeight: 900,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export default function ForgotPassword() {
  const { classes } = useStyles();

  return (
    <Container size={460} my={30}>
      <Head>
        <title>Sweet Rounds | Forgot Password</title>
      </Head>
      <Title className={classes.title} align="center">
        Forgot your password?
      </Title>
      <Text c="dimmed" fz="sm" ta="center">
        Enter your email to get a reset link
      </Text>
      <Paper withBorder shadow="md" p={30} radius="md" mt="xl" pos="relative">
        <ForgotPasswordForm />
      </Paper>
    </Container>
  );
}
