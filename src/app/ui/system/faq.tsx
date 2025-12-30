"use client";


import { 
  Box, 
  Heading, 
  Text, 
  VStack, 
  Accordion, 
  Icon, 
  HStack,
  Button
} from "@chakra-ui/react";
import {   LuInfo, LuShieldCheck, LuChevronDown } from "react-icons/lu";

// --- TYPES ---

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

// --- DATA ---

const faqData: FAQItem[] = [
  {
    category: "Geral",
    question: "O que é o ZimboAI?",
    answer: "O ZimboAI é um assistente financeiro inteligente que ajuda você a monitorar suas transações, gerenciar orçamentos e entender seus hábitos de consumo através de análise de dados."
  },
  {
    category: "Segurança",
    question: "Meus dados bancários estão seguros?",
    answer: "Sim. Utilizamos criptografia de ponta a ponta e seguimos os padrões internacionais de segurança. Nunca armazenamos suas senhas bancárias diretamente."
  },
  {
    category: "Pagamentos",
    question: "Como funciona a assinatura Premium?",
    answer: "A assinatura Premium oferece relatórios avançados, exportação de dados em massa e suporte prioritário. O pagamento pode ser feito via Kwanza (AOA), Cartão de Crédito ou PayPal."
  },
  {
    category: "Suporte",
    question: "Como posso entrar em contato com a equipe?",
    answer: "Você pode nos contactar através do email suporte@zimboai.com ou diretamente pelo chat disponível na aba de suporte de segunda a sexta, das 08h às 18h."
  }
];

export default function FAQ() {
  return (
    <Box display="flex" minH="100vh" bg="#f4f7fe">


      <Box flex="1" p={{ base: "4", md: "10" }} overflowY="auto">
        <Box maxW="900px" mx="auto">
          
          {/* Header da Página */}
          <VStack align="flex-start" mb="10" gap="2">
            <HStack gap="3">
              <Box p="2" bg="purple.50" rounded="lg">
                <Icon as={LuInfo} boxSize="6" color="#6c63ff" />
              </Box>
              <Heading size="xl" color="gray.800">FAQ</Heading>
            </HStack>
            <Text color="gray.500" fontSize="lg">
              Tudo o que você precisa saber sobre o ZimboAI e suas finanças.
            </Text>
          </VStack>

          {/* Container do Accordion */}
          <Box 
            bg="white" 
            p={{ base: "4", md: "8" }} 
            rounded="2xl" 
            shadow="sm" 
            borderWidth="1px" 
            borderColor="gray.100"
          >
            <Accordion.Root variant="subtle" collapsible defaultValue={["0"]}>
              {faqData.map((item, index) => (
                <Accordion.Item 
                  key={index} 
                  value={index.toString()}
                  borderBottomWidth="1px"
                  borderColor="gray.50"
                  _last={{ borderBottomWidth: "0" }}
                >
                  <Accordion.ItemTrigger 
                    py="5" 
                    _hover={{ bg: "purple.50/50" }}
                    cursor="pointer"
                    rounded="md"
                    transition="all 0.2s"
                  >
                    <HStack gap="4" flex="1" textAlign="left">
                      <Icon 
                        as={item.category === "Segurança" ? LuShieldCheck : LuInfo} 
                        color="#6c63ff" 
                      />
                      <Text fontWeight="bold" fontSize="md" color="gray.700">
                        {item.question}
                      </Text>
                    </HStack>
                    <Accordion.ItemIndicator>
                        <LuChevronDown />
                    </Accordion.ItemIndicator>
                  </Accordion.ItemTrigger>

                  <Accordion.ItemContent pb="6" pt="2">
                    <Text color="gray.600" lineHeight="tall" pl="10">
                      {item.answer}
                    </Text>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Box>

          {/* CTA para contato extra */}
          <Box 
            mt="12" 
            p="8" 
            bg="#6c63ff" 
            rounded="2xl" 
            color="white" 
            textAlign="center"
            shadow="lg"
          >
            <Heading size="md" mb="2">Ainda tem dúvidas?</Heading>
            <Text opacity="0.9" mb="6">Estamos prontos para ajudar você a dominar suas finanças.</Text>
            <Button 
                bg="white" 
                color="#6c63ff" 
                _hover={{ bg: "gray.100" }} 
                px="8"
                rounded="xl"
                fontWeight="bold"
            >
              Falar com o Suporte
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}