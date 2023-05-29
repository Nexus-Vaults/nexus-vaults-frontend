import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import EthLogo from '../../../public/images/eth.png';
import AdaLogo from '../../../public/images/ada.png';
import BnbLogo from '../../../public/images/bnb.png';
import BtcLogo from '../../../public/images/btc.png';
import UsdtLogo from '../../../public/images/usdt.png';
import black from '../../../public/images/black.png';
import { Chain } from 'api';

type Props = {
  handleTargetChain: (chain: Chain) => void;
};

const TargetChain = ({ handleTargetChain }: Props) => {
  const [selectedItem, setSelectedItem] = useState<Chain>('Hardhat');

  useEffect(() => {
    handleTargetChain(selectedItem);
  }, [selectedItem]);

  const handleItemClick = (item: Chain) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex flex-col   p-5 gap-y-10">
      <div className="flex flex-col p-5 gap-2">
        <h2 className="text-primary font-semibold font-mono text-4xl leading-12 text-center ">
          Choose your target chain
        </h2>
        <div className="flex flex-row justify-center">
          <div className="w-[100%] h-[1px] bg-gray-300"></div>
        </div>
        <p className="text-center font-serif">
          This chain is going to reflect where your nexus base is going to be.
        </p>
      </div>
      {process.env.NEXT_PUBLIC_TESTNET ? (
        <div className="flex flex-wrap justify-center gap-6 p-2">
          <div
            className={`border p-2 rounded ${
              selectedItem === 'Hardhat' ? 'bg-black' : 'hover:bg-black'
            }`}
            onClick={() => handleItemClick('Hardhat')}
          >
            <Image src={black} width={32} height={32} alt="" />
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 p-2">
          <div
            className={`border p-2 rounded ${
              selectedItem === 'Hardhat' ? 'bg-black' : 'hover:bg-black'
            }`}
            onClick={() => handleItemClick('Hardhat')}
          >
            <Image src={EthLogo} width={32} height={32} alt="" />
          </div>

        </div>
      )}
    </div>
  );
};

export default TargetChain;
