import Vote from './vote/Vote.jsx';
import store from './store/index';

import StoreContext from './StoreContext.js';

export default function Index() {
  return (
    <>
      <StoreContext.Provider value={{ store }}>
        <Vote></Vote>
      </StoreContext.Provider>
    </>
  );
}
