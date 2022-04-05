import Head from "next/head";
import Layout from "../components/layout/Layout";
import Heading from "../components/layout/Heading";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthProvider } from "/context/AuthContext";

const schema = yup.object().shape({
  firstName: yup.string().required("Please enter your first name").min(3, "Your first name must be at least 3 characters"),
  lastName: yup.string().required("Please enter your last name").min(4, "Your last name must be at least 4 characters"),
  email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
  select: yup.string().required("please choose a subject"),
  message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters")
});

export default function Contact() {
  
  const {
    register,
    handleSubmit,
    formState: { errors }
} = useForm({
    mode: "onChange",
    resolver: yupResolver(schema)
});

function onSubmit(data) {
    console.log(data);
}

console.log(errors);
return (
  <AuthProvider>
    <Layout>
    <Head>
      <title>Contact us</title>
    </Head>

    <Heading content="Contact us" />
    
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First name:</Form.Label>
          <Form.Control placeholder="First name..." {...register("firstName")} />
          {errors.firstName && (
          <Form.Text className="error"> {errors.firstName.message} </Form.Text>)}
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last name:</Form.Label>
          <Form.Control placeholder="Last name..." {...register("lastName")} />
          {errors.lastName && (
          <Form.Text className="error"> {errors.lastName.message} </Form.Text>)}
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address:</Form.Label>
          <Form.Control placeholder="Email..." {...register("email")} />
          {errors.email && (
          <Form.Text className="error"> {errors.email.message} </Form.Text>)}
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Subject:</Form.Label>
          <Form.Select className="mb-3 form-subject" {...register("select")} >
          <option value=""> Select Subject </option>
          <option value="Support"> Support </option>
          <option value="Shipping"> Shipping </option>
          </Form.Select>
          {errors.select && (
          <Form.Text className="error"> {errors.select.message} </Form.Text>)}
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" {...register("message")} />
          {errors.message && (
          <Form.Text className="error"> {errors.message.message} </Form.Text>)}
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Layout>
   </AuthProvider>
  
);
}