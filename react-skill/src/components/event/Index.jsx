import Synthesis from './SynthesisEvent';
import Touch from './Touch';

export default function EventIndex() {
  const handClick1 = e => {
    console.log('1e: ', e);
  };
  const handClick2 = num => {
    return e => {
      console.log('2e:num ', e, num);
    };
  };
  const handClick3 = (e, num) => {
    console.log('3e:num ', e, num);
  };
  return (
    <>
      <button onClick={handClick1}>点击1</button>
      <button onClick={handClick2(123)}>点击2</button>
      <button onClick={e => handClick3(e, 123)}>点击3</button>
      <button onClick={handClick3}>点击4</button>
      <br />

      <Synthesis></Synthesis>
      <Touch />
    </>
  );
}
