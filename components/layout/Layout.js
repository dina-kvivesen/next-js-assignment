import Nav from "./Nav";
import { AuthProvider } from "../../context/AuthContext";

export default function Layout({ children }) {
	return (
    <AuthProvider>
      <Nav />
			<div className="container">{children}</div>
      </AuthProvider>
	);
}