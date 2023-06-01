import React, { useEffect, useState } from 'react';
import Table from '../table';
import CardsOverview from './cards-overview';
import Graph from './graph/graph';
import { apiClient, ChainDeployment, Nexus } from 'api';

type Props = {
  contractChainId: number;
  address: `0x${string}`;
};

const Overview = ({ address, contractChainId }: Props) => {
  const [nexus, setNexus] = useState<Nexus>();

  console.log(contractChainId);
  console.log(address);

  useEffect(() => {
    apiClient.getNexusOverview(contractChainId, address).then((nexus) => {
      setNexus(nexus);
    });
  }, []);

  const tableData = [
    { assetName: 'Asset 1', amount: 100, value: 100 },
    { assetName: 'Asset 2', amount: 200, value: 100 },
    { assetName: 'Asset 3', amount: 300, value: 100 },
    { assetName: 'Asset 3', amount: 300, value: 100 },
    { assetName: 'Asset 3', amount: 300, value: 100 },
    { assetName: 'Asset 3', amount: 300, value: 100 },
    { assetName: 'Asset 3', amount: 300, value: 100 },
    { assetName: 'Asset 3', amount: 300, value: 100 },
    { assetName: 'Asset 3', amount: 300, value: 100 },
    { assetName: 'Asset 3', amount: 300, value: 100 },
    { assetName: 'Asset 3', amount: 300, value: 100 },
    { assetName: 'Asset 3', amount: 300, value: 100 },
    { assetName: 'Asset 3', amount: 300, value: 100 },
    { assetName: 'Asset 3', amount: 300, value: 100 },
  ];

  return (
    <>
      {nexus && (
        <div className="w-full h-full flex flex-col justify-center items-center gap-4">
          <CardsOverview
            address={address}
            contractChainId={contractChainId}
            nexusName={nexus?.name}
            nexusId={nexus?.nexusId}
            owner={nexus?.owner}
            subChains={nexus?.subChains}
          />
          <div className="w-full h-full flex-1 border-2 border-gray-400 bg-white shadow-lg rounded-lg">
            <h1 className="text-center text-gray-500 text-lg font-medium  font-sans">
              Timeline Chart
            </h1>
            <Graph></Graph>
          </div>
          <div className="w-full flex-1 ">
            <Table data={tableData} />
          </div>
        </div>
      )}
    </>
  );
};

export default Overview;
