import Head from '../components/layout/Head';
import Layout from '../components/layout/Layout';
import Heading from "../components/layout/Heading";
import LoginForm from "/components/login/LoginForm";

export default function LoginPage() {
	return (
  
      <Layout>
        <Head />
        <Heading content="Login" />
        <LoginForm />
      </Layout>
   
	);
}