// ** Router Import
import { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';

import { AbilityContext } from '@src/utility/context/Can';

import Router from './router/Router';

// import { handleMenuHidden } from '@store/layout';
import { DefaultRoute } from './router/routes';
import { handleLogout } from './redux/auth';
import { getUserData } from './utility/Utils';
import { checkNetworkId, connectMetamaskWallet } from './utility/web3';
import web3Config from './configs/web3Config';

const App = () => {
  const dispatch = useDispatch();

  const ability = useContext(AbilityContext);

  const user = getUserData();

  const handleCurrentNetworkId = async () => {
    const currentNetwork = await checkNetworkId();

    return currentNetwork;
  };

  const handleNetworkId = async () => {
    const currentNetwork = handleCurrentNetworkId();
    if (!(currentNetwork === web3Config.networkId)) {
      return (window.location.href = '/wrong-network');
    }

    return (window.location.href = '/');
  };

  useEffect(async () => {
    if (window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        handleNetworkId();
      });
    }
  }, [window.location.href]);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length === 0) {
          dispatch(handleLogout());
        }

        if (user) {
          if (accounts[0] !== user.address) connectMetamaskWallet(dispatch);

          // window.location.href = '/';
        }
      });
    }
  }, []);

  useEffect(() => {
    if (user && user.user && user.user.ability) {
      ability.update(user.user.ability);
    }
  }, [user]);

  return <Router />;
};

export default App;
