
import {NavLink,Switch,Route,Redirect} from 'dva/router'

import Xm from './user/Xm'

export default function User() {
    return <div>
        <h1>个人信心</h1>
        <div>
            <NavLink to='/user/xm'>小明同学</NavLink>
            <NavLink  to='/user/xy'>小杨同学</NavLink>
        </div>
        <div >
            <h4> 下方二级路由的内容 </h4>
            <hr />
            <Switch>
                <Redirect from='/user' exact to='/user/xm'></Redirect>
                <Route path='/user/xm' exact  component={()=><Xm userName='小明'/>}></Route>
                <Route path='/user/xy' exact  component={()=><Xm userName='小杨'/>}></Route>
            </Switch>
        </div>
    </div>;
  }
  