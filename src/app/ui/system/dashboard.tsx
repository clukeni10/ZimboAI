"use client";

import StatCard from "@/app/components/statCard";
import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  SimpleGrid,
  Icon,
  Badge,
  Flex,
} from "@chakra-ui/react";
import {
  LuHand,
  LuArrowUp,
  LuArrowDown,
  LuWallet,
  LuTrendingUp,
} from "react-icons/lu";


export default function Dashboard() {
  return (
    <Box display="flex" minH="100vh" bg="#f4f7fe">
      <Box flex="1" p={{ base: "4", md: "8" }} overflowY="auto">
        {/* Header de Boas-vindas */}
        <Box
          w="100%"
          bg="white"
          p="6"
          rounded="2xl"
          shadow="sm"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          borderWidth="1px"
          borderColor="gray.100"
        >
          <HStack gap="4">
            <Box
              w="50px"
              h="50px"
              bg="#6c63ff"
              rounded="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              shadow="0 4px 12px rgba(108, 99, 255, 0.3)"
            >
              <LuHand color="white" size="24" />
            </Box>
            <VStack align="flex-start" gap="0">
              <Heading size="md" fontWeight="bold">
                Olá User, bem-vindo de volta!
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Aqui está o resumo das tuas finanças hoje.
              </Text>
            </VStack>
          </HStack>

          <Badge colorPalette="purple" variant="subtle" p="2" rounded="lg">
            30 Dezembro, 2025
          </Badge>
        </Box>

        {/* Grid de Estatísticas Rápidas */}
        <SimpleGrid columns={{ base: 1, md: 3 }} gap="6" mt="8">
          <StatCard
            label="Saldo Total"
            value="Kz 1.250.000"
            icon={LuWallet}
            trend="+12%"
            color="purple"
          />
          <StatCard
            label="Receitas"
            value="Kz 450.000"
            icon={LuArrowUp}
            trend="+5%"
            color="green"
          />
          <StatCard
            label="Despesas"
            value="Kz 120.000"
            icon={LuArrowDown}
            trend="-2%"
            color="red"
          />
        </SimpleGrid>

        {/* Gráficos e Seções Principais */}
        <HStack
          w="100%"
          mt="8"
          gap="8"
          align="stretch"
          flexWrap={{ base: "wrap", lg: "nowrap" }}
        >
          {/* Box do Gráfico de Barras / Evolução */}
          <Box
            w={{ base: "100%", lg: "65%" }}
            h="45vh"
            bg="white"
            rounded="2xl"
            shadow="sm"
            p="6"
            borderWidth="1px"
            borderColor="gray.100"
          >
            <HStack justifyContent="space-between" mb="6">
              <Heading size="sm" color="gray.700">
                Fluxo de Caixa (Mensal)
              </Heading>
              <Icon as={LuTrendingUp} color="purple.500" />
            </HStack>
            {/* Espaço reservado para o Gráfico (Ex: Recharts ou Chart.js) */}
            <Flex
              h="80%"
              align="center"
              justify="center"
              bg="gray.50"
              rounded="xl"
              border="2px dashed"
              borderColor="gray.200"
            >
              <Text color="gray.400" fontSize="sm">
                Gráfico de Evolução Financeira
              </Text>
            </Flex>
          </Box>

          {/* Box de Categorias / Pizza */}
          <Box
            w={{ base: "100%", lg: "35%" }}
            h="45vh"
            bg="white"
            rounded="2xl"
            shadow="sm"
            p="6"
            borderWidth="1px"
            borderColor="gray.100"
          >
            <Heading size="sm" color="gray.700" mb="6">
              Gastos por Categoria
            </Heading>
            {/* Espaço reservado para o Gráfico de Pizza */}
            <Flex
              h="80%"
              align="center"
              justify="center"
              bg="gray.50"
              rounded="xl"
              border="2px dashed"
              borderColor="gray.200"
            >
              <Text color="gray.400" fontSize="sm">
                Distribuição de Gastos
              </Text>
            </Flex>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
