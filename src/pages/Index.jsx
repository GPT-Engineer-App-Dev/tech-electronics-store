import { Box, Button, Container, Flex, Heading, HStack, IconButton, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" padding={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <HStack spacing={8}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bg="blue.700" color="white" padding={16} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={8}>Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="teal" size="lg">Shop Now</Button>
      </Box>

      {/* Featured Products Section */}
      <Container maxW="container.xl" py={16}>
        <Heading size="xl" textAlign="center" mb={8}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 1" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 1</Heading>
              <Text mb={4}>Description of Product 1</Text>
              <Button colorScheme="teal">Buy Now</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 2" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 2</Heading>
              <Text mb={4}>Description of Product 2</Text>
              <Button colorScheme="teal">Buy Now</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 3" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 3</Heading>
              <Text mb={4}>Description of Product 3</Text>
              <Button colorScheme="teal">Buy Now</Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box bg="blue.800" color="white" py={8}>
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center">
            <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
            <HStack spacing={4}>
              <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
              <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
              <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;