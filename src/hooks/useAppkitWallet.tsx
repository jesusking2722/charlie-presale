import { useState, useEffect } from "react";
import {
  type Provider,
  useAppKitAccount,
  useAppKitNetwork,
  useAppKitProvider,
} from "@reown/appkit/react";
import { BrowserProvider, formatEther } from "ethers";
import { mainnet } from "@reown/appkit/networks";
import { Address } from "viem";

const useAppkitWallet = () => {
  const { address, isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider<Provider>("eip155");
  const { chainId, switchNetwork } = useAppKitNetwork();
  const [appkitBalance, setAppkitBalance] = useState<any>(null);
  const [appkitAddress, setAppkitAddress] = useState<any>(null);
  const [appkitConnected, setAppkitConnected] = useState<boolean>(false);

  useEffect(() => {
    const getAllUserInfo = async () => {
      const provider = new BrowserProvider(walletProvider, chainId);
      const balance = await provider.getBalance(address as Address);
      const eth = formatEther(balance);
      setAppkitBalance(eth);
    };
    if (isConnected && address) {
      if (chainId !== mainnet.id) {
        switchNetwork(mainnet);
      }
      setAppkitAddress(address);
      setAppkitConnected(true);
      getAllUserInfo();
    } else {
      setAppkitAddress(null);
      setAppkitConnected(false);
      setAppkitBalance(null);
    }
  }, [isConnected, chainId, address]);

  return {
    appkitBalance,
    appkitAddress,
    appkitConnected,
  };
};

export default useAppkitWallet;
