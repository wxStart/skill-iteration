import Vote from './vote/Vote.jsx';
import store from './store/index';
import { Provider } from 'react-redux';
import Count from './count/Count.jsx';

export default function Index() {
  return (
    <>
      <Provider store={store}>
        <Vote></Vote>
        <hr />
        <Count></Count>
      </Provider>
    </>
  );
}
