import { Box, Heading, VStack, Icon, Text, Flex } from "@chakra-ui/react";
import { 
  LuDollarSign, LuLayoutDashboard, LuArrowLeftRight, LuChartPie, 
  LuInfo, LuFileText, LuUser, LuSettings, LuLogOut 
} from "react-icons/lu";
import { NavLink } from "react-router-dom";
import type { IconType } from "react-icons";

// Interface para os itens do menu
interface NavItemProps {
  to: string;
  label: string;
  icon: IconType;
}

const NavItem = ({ to, label, icon }: NavItemProps) => (
  /* O NavLink do react-router-dom já gerencia o estado "active" automaticamente */
  <NavLink to={to} style={{ width: "100%", textDecoration: "none" }}>
    {({ isActive }) => (
      <Flex
        align="center"
        p="3"
        gap="3"
        rounded="lg"
        cursor="pointer"
        bg={isActive ? "purple.50" : "transparent"}
        color={isActive ? "#6c63ff" : "gray.600"}
        _hover={{ bg: "purple.50", color: "#6c63ff" }}
        transition="all 0.2s"
        w="100%"
      >
        <Icon as={icon} boxSize="5" />
        <Text 
          fontWeight={isActive ? "bold" : "medium"} 
          fontSize="md" 
          display={{ base: "none", lg: "block" }}
        >
          {label}
        </Text>
      </Flex>
    )}
  </NavLink>
);

export default function Sidebar() {
  const name: string = "ZimboAI";

  return (
    <Box
      as="nav"
      h="100vh"
      w={{ base: "80px", lg: "20vw" }}
      bg="white"
      p={{ base: "4", lg: "6" }}
      borderRight="1px solid"
      borderColor="gray.100"
      position="sticky"
      top="0"
    >
      {/* Logo */}
      <Flex align="center" mb="10" gap="3" justify={{ base: "center", lg: "flex-start" }}>
        <Box 
          h="40px" w="40px" bg="#6c63ff" 
          display="flex" justifyContent="center" alignItems="center" 
          rounded="xl" shadow="sm"
        >
          <LuDollarSign color="white" size="24" />
        </Box>
        <Heading 
          fontWeight="bold" fontSize="2xl" color="#6c63ff" 
          display={{ base: "none", lg: "block" }}
        >
          {name}
        </Heading>
      </Flex>

      <VStack gap="6" align="stretch">
        {/* Seção Principal */}
        <Box>
          <Text 
            fontSize="xs" fontWeight="bold" color="gray.400" mb="3" px="3"
            display={{ base: "none", lg: "block" }} textTransform="uppercase"
          >
            Menu Principal
          </Text>
          <VStack gap="1">
            <NavItem to="/" label="Dashboard" icon={LuLayoutDashboard} />
            <NavItem to="/transactions" label="Transações" icon={LuArrowLeftRight} />
            <NavItem to="/budgets" label="Orçamento" icon={LuChartPie} />
          </VStack>
        </Box>

        {/* Suporte (Restaurado) */}
        <Box>
          <Text 
            fontSize="xs" fontWeight="bold" color="gray.400" mb="3" px="3"
            display={{ base: "none", lg: "block" }} textTransform="uppercase"
          >
            Suporte
          </Text>
          <VStack gap="1">
            <NavItem to="/faq" label="FAQ" icon={LuInfo} />
            <NavItem to="/docs" label="Documentação" icon={LuFileText} />
          </VStack>
        </Box>

        {/* Seção Conta */}
        <Box>
          <Text 
            fontSize="xs" fontWeight="bold" color="gray.400" mb="3" px="3"
            display={{ base: "none", lg: "block" }} textTransform="uppercase"
          >
            Conta
          </Text>
          <VStack gap="1">
            <NavItem to="/profile" label="Perfil" icon={LuUser} />
            <NavItem to="/settings" label="Configurações" icon={LuSettings} />
            <NavItem to="/logout" label="Sair" icon={LuLogOut} />
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}