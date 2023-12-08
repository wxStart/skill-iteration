import { useDispatch } from 'react-redux';
import * as TYPES from '../store/action-types';

function VoteBody(props) {
  console.log('props: ', props);

  const dispatch = useDispatch();
  return (
    <>
      <div>
        <button
          onClick={() => {
            dispatch({
              type: TYPES.VOTE_OPP,
            });
          }}
        >
          反对
        </button>
        <button
          onClick={() => {
            dispatch({
              type: TYPES.VOTE_OPP + '@SAGA@',
            });
          }}
        >
          异步反对 sage
        </button>
        <button
          onClick={() => {
            dispatch({
              type: TYPES.VOTE_SUP,
            });
          }}
        >
          赞成
        </button>
        <button
          onClick={() => {
            dispatch({
              type: TYPES.VOTE_SUP + '@SAGA@',
            });
          }}
        >
          异步赞成 sage
        </button>
      </div>
    </>
  );
}

export default VoteBody;
