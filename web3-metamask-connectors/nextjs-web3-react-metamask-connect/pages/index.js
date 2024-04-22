import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useWeb3React } from "@web3-react/core";

export default function Home() {
  const { active, library: provider } = useWeb3React();

  return <div className={styles.container}>Hii frogs!</div>;
}
