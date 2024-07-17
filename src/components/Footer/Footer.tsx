import React from "react";
import styles from './Footer.module.scss'
import Image from "next/image";
import logo from '@/assets/img/gin.svg'
import Link from "next/link";

const Footer = () => {
 return (
  <div className={styles.header}>
   <div className={styles.wrapper}>
    <div className={styles.logo_wrapper}>
     <Image className={styles.logo} src={logo} alt="logo" />
     <p>VPN-GIN</p>
    </div>

    <div className={styles.header_mobile}>
     <Link className={styles.links} href={"/privacy-policy/index.html"}>Политика конфиденциальности</Link>
     <Link className={styles.links} href={"/terms-of-service/index.html"}>Пользовательское соглашение</Link>
    </div>
   </div>
  </div>
 )
}

export default Footer;