export default function User1({match, userName = "小明" }) {
    console.log('match: ', match);
  return (
    <div>
      <h2>我是{userName}同学的个人介绍</h2>
    </div>
  );
}
