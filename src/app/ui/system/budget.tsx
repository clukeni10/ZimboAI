"use client";


import { 
  Box, Button, Heading, Text, HStack, VStack, SimpleGrid, 
  Icon, Progress, Badge, Stack
} from "@chakra-ui/react";
import { 
  LuPlus, LuWallet, LuChartPie, LuCircleAlert, 
  LuUtensils, LuCar, LuHouse, LuGamepad2 
} from "react-icons/lu";
import type { IconType } from "react-icons";

// --- TYPES ---

interface Budget {
  id: string;
  category: string;
  limit: number;
  spent: number;
  icon: IconType;
  color: string;
}

interface BudgetCardProps {
  budget: Budget;
}

// --- COMPONENTS ---

const BudgetCard = ({ budget }: BudgetCardProps) => {
  const percentage = (budget.spent / budget.limit) * 100;
  const isOverBudget = percentage > 100;

  return (
    <Box 
      bg="white" 
      p="6" 
      rounded="2xl" 
      shadow="sm" 
      borderWidth="1px" 
      borderColor="gray.100"
    >
      <HStack justifyContent="space-between" mb="4">
        <HStack gap="3">
          <Box p="2" bg={`${budget.color}.50`} rounded="lg">
            <Icon as={budget.icon} boxSize="5" color={`${budget.color}.500`} />
          </Box>
          <VStack align="start" gap="0">
            <Text fontWeight="bold" color="gray.700">{budget.category}</Text>
            <Text fontSize="xs" color="gray.500">Limite: Kz {budget.limit.toLocaleString()}</Text>
          </VStack>
        </HStack>
        <Badge colorPalette={isOverBudget ? "red" : "green"} variant="subtle">
          {percentage.toFixed(0)}%
        </Badge>
      </HStack>

      <Stack gap="2">
        {/* Chakra v3 Progress Root Pattern */}
        <Progress.Root 
          value={percentage > 100 ? 100 : percentage} 
          colorPalette={isOverBudget ? "red" : "purple"}
          shape="rounded"
          size="sm"
        >
          <Progress.Track bg="gray.100">
            <Progress.Range />
          </Progress.Track>
        </Progress.Root>
        
        <HStack justifyContent="space-between" fontSize="sm">
          <Text color="gray.600">Gasto: **Kz {budget.spent.toLocaleString()}**</Text>
          <Text color={isOverBudget ? "red.500" : "gray.400"} fontWeight="medium">
            {isOverBudget ? "Excedido" : `Resta Kz ${(budget.limit - budget.spent).toLocaleString()}`}
          </Text>
        </HStack>
      </Stack>
    </Box>
  );
};

export default function Budgets() {
  const budgets: Budget[] = [
    { id: "1", category: "Alimentação", limit: 80000, spent: 65000, icon: LuUtensils, color: "orange" },
    { id: "2", category: "Lazer", limit: 30000, spent: 35000, icon: LuGamepad2, color: "pink" },
    { id: "3", category: "Transporte", limit: 40000, spent: 12000, icon: LuCar, color: "blue" },
    { id: "4", category: "Moradia", limit: 150000, spent: 150000, icon: LuHouse, color: "teal" },
  ];

  return (
    <Box display="flex" minH="100vh" bg="#f4f7fe">
     
      
      <Box flex="1" p={{ base: "4", md: "10" }}>
        <Box maxW="1200px" mx="auto">
          
          <Box display="flex" justifyContent="space-between" alignItems="center" mb="8">
            <VStack align="start" gap="1">
              <Heading size="lg" color="gray.800">Orçamentos Mensais</Heading>
              <Text color="gray.500">Controle seus limites de gastos por categoria</Text>
            </VStack>
            <Button gap="2" bg="#6c63ff" color="white" _hover={{ bg: "#5a54d1" }} px="6" rounded="xl">
              <LuPlus /> Criar Orçamento
            </Button>
          </Box>

          {/* Cards de Resumo */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap="6" mb="10">
            <Box bg="purple.600" p="6" rounded="2xl" color="white" shadow="lg">
              <HStack justifyContent="space-between">
                <VStack align="start" gap="1">
                  <Text fontSize="sm" opacity="0.9">Total Orçado</Text>
                  <Heading size="md">Kz 300.000</Heading>
                </VStack>
                <Icon as={LuWallet} boxSize="8" />
              </HStack>
            </Box>
            
            <Box bg="white" p="6" rounded="2xl" border="1px solid" borderColor="gray.100" shadow="sm">
              <HStack justifyContent="space-between">
                <VStack align="start" gap="1">
                  <Text fontSize="sm" color="gray.500">Total Gasto</Text>
                  <Heading size="md" color="gray.800">Kz 262.000</Heading>
                </VStack>
                <Icon as={LuChartPie} boxSize="8" color="#6c63ff" />
              </HStack>
            </Box>

            <Box bg="white" p="6" rounded="2xl" border="1px solid" borderColor="gray.100" shadow="sm">
              <HStack justifyContent="space-between">
                <VStack align="start" gap="1">
                  <Text fontSize="sm" color="gray.500">Alertas</Text>
                  <Heading size="md" color="red.500">1 Excedido</Heading>
                </VStack>
                <Icon as={LuCircleAlert} boxSize="8" color="red.400" />
              </HStack>
            </Box>
          </SimpleGrid>

          {/* Grid de Orçamentos */}
          <Heading size="sm" mb="5" color="gray.600" textTransform="uppercase" letterSpacing="wider">
            Suas Categorias
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap="6">
            {budgets.map((b) => (
              <BudgetCard key={b.id} budget={b} />
            ))}
          </SimpleGrid>

        </Box>
      </Box>
    </Box>
  );
}