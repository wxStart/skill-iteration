import { createContext, useContext, useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';

const ThemeContext = createContext();

export function Provider(props) {
  let { store, children } = props;
  return <ThemeContext.Provider value={{ store }}>{children}</ThemeContext.Provider>;
}

/** connect:获取上下文中的store ， 然后吧公共状态、要派发的方法基于props属性传递给要渲染的组件 */
export function connect(mapStateToProps, mapDispatchToProps) {
  // connect()
  if (!mapStateToProps) {
    mapStateToProps = () => {
      return {};
    };
  }

  if (!mapDispatchToProps) {
    // 没传递第二个传输会把 dispatch 返回回去
    mapDispatchToProps = dispatch => {
      return { dispatch };
    };
  }
  return function currying(Com) {
    // connect()()

    // 最终使用的是Hoc组件  export default
    return function Hoc(props) {
      const { store } = useContext(ThemeContext);
      console.log('store: ', store);
      const { getState, dispatch, subscribe } = store;
      // 向事件池中加入组件更新的办法
      const [, forceUpdate] = useState(0);
      useEffect(() => {
        const unsubscribe = subscribe(() => {
          forceUpdate(Date.now());
        });
        return () => unsubscribe();
      }, []);

      const mapState = mapStateToProps(getState());
      let dispatchProps = {};
      if (typeof mapDispatchToProps == 'function') {
        dispatchProps = mapDispatchToProps(dispatch);
      } else {
        // 是actionCreator对象  需要经过  bindActionCreators处理 就不写这块  直接使用redux中提供的方法
        dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
      }

      return <Com {...props} {...mapState} {...dispatchProps}></Com>;
    };
  };
}
