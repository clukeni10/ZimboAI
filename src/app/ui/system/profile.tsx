"use client";

import type { ProfileSectionProps } from "@/app/types/ProfileSectionProps";
import {
  Box,
  Button,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  VStack,
  HStack,
  Badge,
  NativeSelect,
} from "@chakra-ui/react";
import {
  LuPencil,
  LuShieldCheck,
  LuBell,
  LuDatabase,
  LuCoins,
  LuLogOut,
} from "react-icons/lu";
// Importação correta do tipo do ícone

const ProfileSection = ({
  title,
  description,
  icon,
  children,
}: ProfileSectionProps) => (
  <Box
    p="5"
    borderWidth="1px"
    borderColor="gray.100"
    rounded="xl"
    bg="gray.50"
    _hover={{
      bg: "white",
      shadow: "md",
      borderColor: "#6c63ff33",
      transition: "0.3s",
    }}
  >
    <HStack gap="3" mb="3">
      <Icon as={icon} boxSize="5" color="#6c63ff" />
      <Heading size="sm" fontWeight="bold" color="gray.700">
        {title}
      </Heading>
    </HStack>
    <Text fontSize="sm" color="gray.600" mb="5">
      {description}
    </Text>
    <Box>{children}</Box>
  </Box>
);

export default function Profile() {
  return (
    <Box display="flex" minH="100vh" bg="#f4f7fe">


      <Box flex="1" p={{ base: "4", md: "10" }}>
        <Box
          maxW="1100px"
          mx="auto"
          bg="white"
          rounded="2xl"
          shadow="sm"
          overflow="hidden"
        >
          {/* Header do Perfil com borda inferior em vez de Divider */}
          <Box p="8" borderBottom="1px solid" borderColor="gray.100">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              gap="6"
            >
              <HStack gap="6">
                <Box
                  bgGradient="to-r"
                  gradientFrom="#6c63ff"
                  gradientTo="#5a54d1"
                  w="90px"
                  h="90px"
                  rounded="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  fontSize="2xl"
                  fontWeight="bold"
                  shadow="lg"
                >
                  NU
                </Box>
                <VStack align="start" gap="0">
                  <HStack gap="3">
                    <Heading fontSize="2xl" color="gray.800">
                      Nome do User
                    </Heading>
                    <Badge
                      colorScheme="purple"
                      variant="solid"
                      rounded="full"
                      px="3"
                    >
                      PRO
                    </Badge>
                  </HStack>
                  <Text color="gray.500" fontSize="lg">
                    user@email.com
                  </Text>
                  <Text fontSize="sm" color="gray.400" mt="1">
                    +244 938 468 426
                  </Text>
                </VStack>
              </HStack>

              <Button
                gap="2"
                bg="#6c63ff"
                color="white"
                _hover={{ bg: "#5a54d1", transform: "translateY(-2px)" }}
                transition="all 0.2s"
                px="8"
                rounded="lg"
              >
                <LuPencil /> Editar Perfil
              </Button>
            </Box>
          </Box>

          {/* Área de Conteúdo */}
          <Box p="8">
            <Heading size="md" mb="6" color="gray.700">
              Configurações da Conta
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
              <ProfileSection
                title="Moeda Base"
                description="Altere a moeda padrão para exibição de gráficos e saldos."
                icon={LuCoins}
              >
                <NativeSelect.Root
                  size="sm"
                  fontSize="xs"
                  bg="white"
                  borderColor="gray.300"
                  focusBorderColor="#6c63ff"
                  cursor="pointer"
                  defaultValue="aoa"
                >
                  <NativeSelect.Field placeholder="Selecione a moeda">
                    <option value="aoa">Kwanza Angolano (AOA)</option>
                    <option value="usd">Dólar Americano (USD)</option>
                    <option value="eur">Euro (EUR)</option>
                    <option value="gbp">Libra Esterlina (GBP)</option>
                    <option value="brl">Real Brasileiro (BRL)</option>
                  </NativeSelect.Field>
                  <NativeSelect.Indicator />
                </NativeSelect.Root>
              </ProfileSection>

              <ProfileSection
                title="Segurança"
                description="Proteja sua conta com autenticação em duas etapas."
                icon={LuShieldCheck}
              >
                <Button
                  colorScheme="purple"
                  variant="ghost"
                  size="sm"
                  fontSize="xs"
                  p="2"
                  border="1px solid"
                  borderColor="gray.300"
                >
                  Configurar 2FA →
                </Button>
              </ProfileSection>

              <ProfileSection
                title="Notificações"
                description="Escolha quais alertas você deseja receber no e-mail ou app."
                icon={LuBell}
              >
                <Button
                  variant="outline"
                  size="sm"
                  fontSize="xs"
                  border="1px solid"
                  borderColor="gray.300"
                  p="2"
                >
                  Gerenciar Alertas
                </Button>
              </ProfileSection>

              <ProfileSection
                title="Privacidade de Dados"
                description="Solicite uma cópia dos seus dados ou apague seu histórico."
                icon={LuDatabase}
              >
                <HStack gap="4">
                  <Text
                    fontSize="xs"
                    color="#6c63ff"
                    fontWeight="bold"
                    cursor="pointer"
                  >
                    Exportar JSON
                  </Text>
                  <Text
                    fontSize="xs"
                    color="red.400"
                    fontWeight="bold"
                    cursor="pointer"
                  >
                    Excluir Conta
                  </Text>
                </HStack>
              </ProfileSection>
            </SimpleGrid>

            {/* Logout sem Divider - usando apenas margem e estilo discreto */}
            <Box mt="12" textAlign="center">
              <Button
                gap="2"
                variant="ghost"
                color="gray.400"
                _hover={{ color: "red.500", bg: "red.50" }}
                fontSize="sm"
              >
                <LuLogOut /> Encerrar sessão em todos os dispositivos
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
