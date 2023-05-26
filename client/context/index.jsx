import React, {useContext, createContext} from 'react';
import {useAddress, useContract, useMetamask, useContractWrite} from '@thirdweb-dev/react';
import {ethers} from 'ethers';


const StateContext = createContext();

export const StateContextProvider = ({children}) => {
    const {contract} = useContract('0x51b0AfE6E1C89096c1d5846b9682193DCB521A97');
    const {mutateAsync: createCampaign} = useContractWrite(contract, 'createCampaign');

    const address = useAddress();
    const connect = useMetamask();

    const publishCampaign = async (data) => {
        try {
          const d = await createCampaign([
            address, 
            data.causeTitle, //or n
            data.description,
            data.targetAmount,
            // new Date(e.deadline).getTime(), 
            data.image
          ])
    
          console.log("contract call success", d)
        } catch (error) {
          console.log("contract call failure", error)
        }
      }

      return (
        <StateContext.Provider
          value={{ 
            address,
            contract,
            connect,
            createCampaign: publishCampaign
          }}
        >
          {children}
        </StateContext.Provider>
      )  
}

export const useStateContext = () => useContext(StateContext);



//data -> d
//form-> data