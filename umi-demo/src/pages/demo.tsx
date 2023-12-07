import { useDispatch, useParams, useSelector, withRouter } from 'umi';

// 方案一
function DemoPage() {
  const params = useParams();
  console.log('params: ', params);
  return (
    <div>
      demo 测试页
      <div>useParams().id{params.id}</div>
    </div>
  );
}

export { DemoPage };

// 方案一 withRouter
function DemoPage2({ match }) {

  const dispatch = useDispatch();
  const state = useSelector((state) => state.demo);

  return (
    <div>
      demo 测试页
      <div>state.demo.num:{state.num}</div>
      <button
        onClick={() => {
          dispatch({
            type: 'demo/save',
            payload: {
              num: state.num + 1,
            },
          });
        }}
      >++++1</button>
      <div>match.param.id{match.params.id}</div>
    </div>
  );
}

export default withRouter(DemoPage2);
