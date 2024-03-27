import { Inter } from "next/font/google";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <Link href="/">
        <Image
          alt="logo image"
          src="/logo.png"
          priority
          width={120}
          height={120}
        />
      </Link>
      <div className={styles.links}>
        <Link href={"/search"}>Search</Link>
        <Link href={"/about"}>Recomended for you</Link>
        <Link href={"/SignUp"}> Sign Up</Link>
        <Link href={"/Login"}>Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
