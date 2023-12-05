import { NavLink } from "dva/router";
import { connect } from "dva";

import routes from "../userRoutes";
import RouterView from "../RouterView";

function User(props) {
  console.log("props: ", props);
  const { dispatch, loading } = props;

  let loading1 = loading.effects["user/changDreamAsync"];
  console.log("loading1: ", loading1);

  function onChangeDream() {
    dispatch({
      type: "user/changDream",
      payload: "共同富裕时间" + Date.now(),
    });
  }
  function onChangeDreamAsync() {
    dispatch({
      type: "user/changDreamAsync",
      payload: "共同富裕时间" + Date.now(),
    });
  }
  return (
    <div>
      <h1>个人信心</h1>
      <div>common:{props.token}</div>
      <div>这里是redux中user的数据</div>
      <div>
        name：
        {props.name}
      </div>
      -------------------------
      <div>
        age：
        {props.age}
      </div>
      -------------------------
      <div>
        dream：
        {props.dream}
        <button onClick={onChangeDream}>同步更新</button>
        <button onClick={onChangeDreamAsync}>
          {loading1 ? "正在更新中，请不要重复点击" : "异步更新"}
        </button>
      </div>
      <div>
        <NavLink to="/user/xm">小明同学</NavLink>
        <NavLink to="/user/xy">小杨同学</NavLink>
      </div>
      <div>
        <h4> 下方二级路由的内容 </h4>
        <hr />
        <RouterView routes={routes}></RouterView>
      </div>
    </div>
  );
}
export default connect((state) => ({
  ...state.user,
  ...state.common,
  loading: state.loading,
}))(User);
