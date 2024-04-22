import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

// connect to metamask
// execute a funciton

export default function Home() {
  const [isConnected, setIsConnect] = useState(false);
  const [provider, setProvider] = useState();

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      console.log("We see metamask!");
      try {
        await ethereum.request({
          method: "eth_requestAccounts",
        });
        setIsConnect(true);
        let connectedProvider = new ethers.providers.Web3Provider(
          window.ethereum
        );
        // setSigner(connectedProvider.getSigner());
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnect(false);
    }
  }

  return (
    <div className={styles.container}>
      Hello Frogs!
      {isConnected ? (
        "Connected!"
      ) : (
        <button onClick={() => connect()}>Connect</button>
      )}
    </div>
  );
}
