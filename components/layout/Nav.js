import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useRouter } from 'next/router';
import Link from 'next/link';


function Nav() {
	const [auth] = useContext(AuthContext);
  const router = useRouter();
	

  return (
       <nav>
        <Link href="/">
                <a
                  className={
                    router.pathname == '/'
                  }>
                  Home
                </a>
              </Link>
              <Link href="/contact">
                <a
                  className={
                    router.pathname == '/contact'
                  }>
                  Contact
                </a>
            </Link>
              <Link href="/login">
                <a
                  className={
                    router.pathname == '/login'
                  }>
                  Login
                </a>
              </Link>
      </nav>
);
        }

export default Nav;