import { useParams, withRouter } from 'umi';

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
  console.log('match: ', match);
  return (
    <div>
      demo 测试页
      <div>match.param.id{match.params.id}</div>
    </div>
  );
}

export default withRouter(DemoPage2);
