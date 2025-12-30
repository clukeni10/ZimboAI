import {
  HStack,
  VStack,
  Box,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import type { StatCardProps } from "../types/StatCardProps";

export default function StatCard({
  label,
  value,
  icon,
  trend,
  color,
}: StatCardProps) {
  return (
    <Box
      bg="white"
      p="5"
      rounded="2xl"
      shadow="sm"
      borderWidth="1px"
      borderColor="gray.100"
      flex="1"
    >
      <HStack justifyContent="space-between" align="flex-start">
        <VStack align="flex-start" gap="1">
          <Text
            fontSize="xs"
            fontWeight="bold"
            color="gray.400"
            textTransform="uppercase"
          >
            {label}
          </Text>
          <Heading size="md" color="gray.800">
            {value}
          </Heading>
          <Text fontSize="xs" color="green.500" fontWeight="bold">
            {trend}{" "}
            <span style={{ color: "#a0aec0", fontWeight: "normal" }}>
              este mês
            </span>
          </Text>
        </VStack>
        <Box p="3" bg={`${color}.50`} rounded="xl">
          <Icon as={icon} boxSize="6" color={`${color}.500`} />
        </Box>
      </HStack>
    </Box>
  );
}
