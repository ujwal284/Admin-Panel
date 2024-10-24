// import React from "react";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Input,
//   Text,
//   Stack,
//   Heading,
//   Link,
//   useToast,
// } from "@chakra-ui/react";
// import { useForm } from "react-hook-form";
// import { FcGoogle } from "react-icons/fc";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaTwitter as FaXTwitter,
//   FaDiscord,
// } from "react-icons/fa";
// import Navbar from "../components/Navbar";
// import SideBar from "../components/SideBar";

// const SOCIAL_LINKS = {
//   google: "https://google.com",
//   facebook: "https://facebook.com",
//   instagram: "https://instagram.com",
//   twitter: "https://twitter.com",
//   discord: "https://discord.com",
// };

// const SignUp = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm();
//   const toast = useToast();

//   const onSubmit = async (data) => {
//     // Handle login logic
//     console.log(data);
//     toast({
//       title: "Login Successful.",
//       description: "You've logged in successfully.",
//       status: "success",
//       duration: 3000,
//       isClosable: true,
//     });
//   };

//   return (
//     <Flex>
//       <SideBar />
//       <Box flex={1}>
//         <Navbar />
//         <Stack spacing={4} padding={5}>
//           <Heading textAlign="center">Login</Heading>
//           <Box bg="white" p={6} borderRadius="md" boxShadow="md">
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <FormControl isInvalid={errors.email} mb={4}>
//                 <FormLabel htmlFor="email">Email</FormLabel>
//                 <Input
//                   type="email"
//                   id="email"
//                   placeholder="Enter your email"
//                   {...register("email", { required: "Email is required" })}
//                 />
//                 {errors.email && (
//                   <Text color="red.500">{errors.email.message}</Text>
//                 )}
//               </FormControl>

//               <FormControl isInvalid={errors.password} mb={4}>
//                 <FormLabel htmlFor="password">Password</FormLabel>
//                 <Input
//                   type="password"
//                   id="password"
//                   placeholder="Enter your password"
//                   {...register("password", {
//                     required: "Password is required",
//                   })}
//                 />
//                 {errors.password && (
//                   <Text color="red.500">{errors.password.message}</Text>
//                 )}
//               </FormControl>

//               <Button
//                 type="submit"
//                 width="full"
//                 isLoading={isSubmitting}
//                 colorScheme="blue"
//               >
//                 Login
//               </Button>

//               <Stack spacing={3} mt={4}>
//                 <Text textAlign="center">Or login with:</Text>
//                 <Flex justify="center">
//                   <FcGoogle
//                     className="icon"
//                     cursor="pointer"
//                     onClick={() => window.open(SOCIAL_LINKS.google, "_blank")}
//                   />
//                   <FaFacebook
//                     className="icon"
//                     cursor="pointer"
//                     onClick={() => window.open(SOCIAL_LINKS.facebook, "_blank")}
//                   />
//                   <FaInstagram
//                     className="icon"
//                     cursor="pointer"
//                     onClick={() =>
//                       window.open(SOCIAL_LINKS.instagram, "_blank")
//                     }
//                   />
//                   <FaXTwitter
//                     className="icon"
//                     cursor="pointer"
//                     onClick={() => window.open(SOCIAL_LINKS.twitter, "_blank")}
//                   />
//                   <FaDiscord
//                     className="icon"
//                     cursor="pointer"
//                     onClick={() => window.open(SOCIAL_LINKS.discord, "_blank")}
//                   />
//                 </Flex>
//               </Stack>

//               <Link href="/" textAlign="center" display="block" mt={4}>
//                 Forgot Password?
//               </Link>
//             </form>
//           </Box>
//         </Stack>
//       </Box>
//     </Flex>
//   );
// };

// export default SignUp;
