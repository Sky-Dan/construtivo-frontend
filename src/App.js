// ** Router Import
import { useEffect, useContext } from 'react';

import { AbilityContext } from '@src/utility/context/Can';

import Router from './router/Router';

// import { handleMenuHidden } from '@store/layout';
import { DefaultRoute } from './router/routes';
import { getUserData } from './utility/Utils';

const App = () => {

  const ability = useContext(AbilityContext);

  const user = getUserData();

  useEffect(() => {
    if (user && user.user && user.user.ability) {
      ability.update(user.user.ability);
    }
  }, [user]);

  return <Router />;
};

export default App;
