import { Text, Box } from "@mantine/core";
import PasswordRequirements from "@/constants/PasswordRequirements";
import { IconX, IconCheck } from "@tabler/icons-react";

export function PasswordRequirement({
  meets,
  label,
}: {
  meets: boolean;
  label: string;
}) {
  return (
    <Text
      color={meets ? "teal" : "red"}
      sx={{ display: "flex", alignItems: "center" }}
      mt={7}
      size="sm"
    >
      {meets ? <IconCheck size="0.9rem" /> : <IconX size="0.9rem" />}{" "}
      <Box ml={10}>{label}</Box>
    </Text>
  );
}

export function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  PasswordRequirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(
    100 - (100 / (PasswordRequirements.length + 1)) * multiplier,
    10
  );
}
