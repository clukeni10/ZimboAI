"use client";


import type { SummaryCardProps } from "@/app/types/SummaryCardProps";
import type { Transaction } from "@/app/types/TransactionType";
import {
  Box,
  Button,
  Heading,
  Text,
  HStack,
  VStack,
  Badge,
  SimpleGrid,
  Icon,
  Table,
  Input,

} from "@chakra-ui/react";
import {
  LuPlus,
  LuSearch,
  LuArrowUp,
  LuArrowDown,
  LuFilter,
  LuUtensils,
  LuCar,
  LuBriefcase,
} from "react-icons/lu";






// --- COMPONENTS ---

const SummaryCard = ({ title, amount, icon, color }: SummaryCardProps) => (
  <Box
    bg="white"
    p="6"
    rounded="2xl"
    shadow="sm"
    flex="1"
    borderWidth="1px"
    borderColor="gray.100"
  >
    <HStack justifyContent="space-between">
      <VStack align="start" gap="1">
        <Text fontSize="sm" color="gray.500" fontWeight="medium">
          {title}
        </Text>
        <Heading size="lg" color="gray.800">
          {amount}
        </Heading>
      </VStack>
      <Icon as={icon} boxSize="10" color={color} opacity="0.8" />
    </HStack>
  </Box>
);

export default function Transactions() {
  // Mock de dados tipado
  const transactions: Transaction[] = [
    {
      id: "1",
      description: "Restaurante Alvalade",
      category: "Alimentação",
      date: "30 Dez 2025",
      amount: 15000,
      type: "expense",
      status: "pago",
      icon: LuUtensils,
    },
    {
      id: "2",
      description: "Salário Mensal",
      category: "Renda",
      date: "25 Dez 2025",
      amount: 450000,
      type: "income",
      status: "recebido",
      icon: LuBriefcase,
    },
    {
      id: "3",
      description: "Gasolina Sonangol",
      category: "Transporte",
      date: "28 Dez 2025",
      amount: 8500,
      type: "expense",
      status: "pago",
      icon: LuCar,
    },
  ];

  return (
    <Box display="flex" minH="100vh" bg="#f4f7fe">
      

      <Box flex="1" p={{ base: "4", md: "10" }}>
        <Box maxW="1200px" mx="auto">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="8"
          >
            <VStack align="start" gap="1">
              <Heading size="lg" color="gray.800">
                Transações
              </Heading>
              <Text color="gray.500">Acompanhe seu fluxo de caixa</Text>
            </VStack>
            <Button
              gap="2"
              bg="#6c63ff"
              color="white"
              _hover={{ bg: "#5a54d1" }}
              px="6"
              rounded="xl"
            >
              <LuPlus /> Nova Transação
            </Button>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap="6" mb="8">
            <SummaryCard
              title="Entradas"
              amount="Kz 450.000"
              icon={LuArrowUp}
              color="green.400"
            />
            <SummaryCard
              title="Saídas"
              amount="Kz 23.500"
              icon={LuArrowDown}
              color="red.400"
            />
            <SummaryCard
              title="Saldo"
              amount="Kz 426.500"
              icon={LuBriefcase}
              color="#6c63ff"
            />
          </SimpleGrid>

          <Box
            bg="white"
            rounded="2xl"
            shadow="sm"
            borderWidth="1px"
            borderColor="gray.100"
            overflow="hidden"
          >
            <Box p="6" borderBottomWidth="1px" borderColor="gray.100">
              <HStack gap="4">
                {/* Solução para Chakra v3: Usando Box com posicionamento absoluto para o ícone */}
                <Box position="relative" flex="1" maxW="350px">
                  <Box
                    position="absolute"
                    left="3"
                    top="50%"
                    transform="translateY(-50%)"
                    zIndex="1"
                    color="gray.400"
                  >
                    <LuSearch />
                  </Box>
                  <Input
                    placeholder="Buscar transação..."
                    pl="10"
                    bg="gray.50"
                    border="none"
                    _focus={{ bg: "white", ring: "1px", ringColor: "#6c63ff" }}
                  />
                </Box>
                <Button variant="outline" gap="2" color="gray.600" p="2">
                  <LuFilter /> Filtros
                </Button>
              </HStack>
            </Box>

            <Box overflowX="auto" p="2">
              <Table.Root variant="line">
                <Table.Header bg="gray.50">
                  <Table.Row>
                    <Table.ColumnHeader color="gray.400">Descrição</Table.ColumnHeader>
                    <Table.ColumnHeader color="gray.400">Categoria</Table.ColumnHeader>
                    <Table.ColumnHeader color="gray.400">Data</Table.ColumnHeader>
                    <Table.ColumnHeader color="gray.400">Valor</Table.ColumnHeader>
                    <Table.ColumnHeader color="gray.400">Status</Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {transactions.map((t) => (
                    <Table.Row key={t.id} _hover={{ bg: "gray.50" }}>
                      <Table.Cell>
                        <HStack gap="3">
                          <Icon
                            as={t.icon}
                            color={
                              t.type === "income" ? "green.400" : "orange.400"
                            }
                          />
                          <Text fontWeight="medium" color="gray.700">
                            {t.description}
                          </Text>
                        </HStack>
                      </Table.Cell>
                      <Table.Cell>
                        <Badge rounded="full" px="2">
                          {t.category}
                        </Badge>
                      </Table.Cell>
                      <Table.Cell color="gray.500" fontSize="sm">
                        {t.date}
                      </Table.Cell>
                      <Table.Cell
                        fontWeight="bold"
                        color={t.type === "income" ? "green.500" : "red.500"}
                      >
                        {t.type === "income" ? "+" : "-"} Kz{" "}
                        {t.amount.toLocaleString()}
                      </Table.Cell>
                      <Table.Cell>
                        <Badge
                          colorScheme={
                            t.status === "recebido" || t.status === "pago"
                              ? "green"
                              : "yellow"
                          }
                        >
                          {t.status}
                        </Badge>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
