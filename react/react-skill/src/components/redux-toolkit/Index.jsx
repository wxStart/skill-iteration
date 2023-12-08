import Vote from './vote/Vote.jsx';
import store from './store/index';
import { Provider } from 'react-redux';

export default function Index() {
  return (
    <>
      <Provider store={store}>
        <Vote></Vote>
      </Provider>
    </>
  );
}
