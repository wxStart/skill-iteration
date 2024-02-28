const app1 = () => {
  return (
    <div>
      <h1 id="123">app1</h1>
    </div>
  );
};
console.log('app1: ', app1);

const App1 = () => {
  return (
    <div>
      <h1 id="123">App1</h1>
    </div>
  );
};
const App = () => {
  return (
    <div>
      1231321
      <h1 id="123">标题</h1>
      <app1 />
      <App1></App1>
    </div>
  );
};

export default App;
