import Head from "next/head";
import Layout from "../components/layout/Layout";
import Heading from "../components/layout/Heading";
import { AuthProvider } from "/context/AuthContext";

export default function AdminPage() {
	return (
	
    <AuthProvider>
      <Layout>
        <Head />
			    <Heading content="Admin" />
      </Layout>
    </AuthProvider>
	);
}