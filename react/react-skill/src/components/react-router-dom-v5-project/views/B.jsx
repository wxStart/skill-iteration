import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

export default function Page(props) {
  console.log('props:B ', props);
  let history = useHistory();
  console.log('history: ', history, props.history === history);
  let location = useLocation();
  console.log('location: ', location, props.location === location);
  let match = useRouteMatch();
  console.log('match: ', match, props.match === match);
  return (
    <>
      <div>B页面</div>
    </>
  );
}
