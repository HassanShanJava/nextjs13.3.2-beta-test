import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/navbar.module.css";
import Logo from "../../../public/logo.png"

const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <Image src={Logo} alt={"/logo"} width={80} height={80} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
