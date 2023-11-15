import { useSelector, useDispatch } from 'react-redux';
// import { VOTE_SUP, VOTE_OPP, USER_INFO } from '../store/action-types';
import { addSupNum, addOppNum, addOppNumAsyncPromise, addOppNumAsyncThunk } from '../store/features/voteSlice';
import { setUser } from '../store/features/userSlice';
export default function VoteBody() {
  const { userInfo } = useSelector(state => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <button
          onClick={() => {
            dispatch(addOppNum(2));
          }}
        >
          反对
        </button>
        <button
          onClick={() => {
            dispatch(addOppNumAsyncThunk(3000));
          }}
        >
          反对 thunk
        </button>
        <button
          onClick={() => {
            dispatch(addOppNumAsyncPromise());
          }}
        >
          反对 priomese
        </button>
        <button
          onClick={() => {
            dispatch(addSupNum());
          }}
        >
          赞成
        </button>
        <button
          onClick={() => {
            dispatch(
              setUser({
                name: userInfo.name + '~!',
              }),
            );
          }}
        >
          设置用户信息：{userInfo.name}
        </button>
      </div>
    </>
  );
}
