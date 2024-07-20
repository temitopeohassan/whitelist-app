"use client";
import { useState } from "react";
import { useAccount, useWalletClient, useWriteContract } from 'wagmi';
import Header from './Header';
import Footer from './Footer';
import { WHITELIST_CONTRACT_ADDRESS, abi } from './constants';

export default function Home() {
  const { address, isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();
  const [isWhitelisted, setIsWhitelisted] = useState<boolean>(false);

  const { writeContract } = useWriteContract();

  const addToWhitelist = async () => {
    if (!walletClient) {
      alert("Please connect your wallet first");
      return;
    }

    if (!address) {
      alert("No address found. Please make sure your wallet is connected.");
      return;
    }

    try {
      await writeContract({
        address: WHITELIST_CONTRACT_ADDRESS,
        abi: abi,
        functionName: 'addAddressToWhitelist',
        args: [address],
      });
      setIsWhitelisted(true);
    } catch (error) {
      console.error("Error adding address to whitelist", error);
    }
  };

  return (
    <>
      <Header />
      <div className="flex items-center flex-col flex-grow">
        <div className="card bg-base-100 w-180 shadow-xl m-10 p-10">
  <figure>
    <img
      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Turned on grey laptop" />
      <div className="align-bottom align-right">
        <p className="text-white font-bold">Get Lost in Mountains</p>
    </div>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    Welcome to Buidl On Base!
      
    </h2>
    <p>It's an NFT collection for developers building apps on Base</p>
    {isWhitelisted
              ? <div className="badge badge-secondary">"You have been whitelisted!"</div>
              : "Join the whitelist now!"}
    <div className="card-actions justify-end">
    <button onClick={addToWhitelist} disabled={!isConnected || isWhitelisted} className="btn btn-accent"> {isWhitelisted ? "Whitelisted" : "Add to Whitelist"}</button>
    </div>
  </div>
        </div>
      </div>
      <Footer />
     </>
  );
}