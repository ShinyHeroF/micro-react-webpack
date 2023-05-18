import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  function naviTo(path: string) {
    navigate(path);
  }
  return (
    <>
      <div>我是主页面sdddss</div>
      {/* <div>------------------</div>
      <div onClick={() => naviTo('/sub/a')}>点我去子页面A, appHistory.push 方式</div> */}

      {/* <div>------------------</div>
      <AppLink to='/sub/b'>点我去子页面B, AppLink 方式</AppLink> */}

      <div>------------------</div>
      <Link to='sub/a'>点我去子页面A Link 方式</Link>

      <div>------------------</div>
      <div onClick={() => naviTo('/sub/b')}>点我去子页面B, useNavigate 方式</div>

      {/* <div>------------------</div>
      <a href={`/sub/a`}>点我去子页面A</a> */}

      {/* <div>------------------</div>
      <a href={`/sub/b`}>点我去子页面B</a> */}
    </>
  )
}
