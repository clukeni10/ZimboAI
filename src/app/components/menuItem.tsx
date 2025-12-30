import { IconMap } from "@/assets/iconMap";
import { Box, Text } from "@chakra-ui/react";

type Props = {
  type: keyof IconMap;
  label: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function MenuItem({ type, label, ...props }: Props) {
  const Icon = IconMap[type];
  return (
    <Box
      w="100%"
      h="40px"
      p="2"
      bg="white"
      rounded="md"
      _hover={{ bg: "#f2f2f2", cursor: "pointer", color: "#6c63ff" }}
      display="flex"
      alignItems="center"
      gap="2"
      {...props}
    >
      {Icon && <Icon className="icon" />}
      <Text fontSize="md" fontWeight="md" >
        {label}
      </Text>
    </Box>
  );
}
