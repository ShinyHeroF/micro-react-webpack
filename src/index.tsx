import { isInIcestark, setLibraryName, getBasename } from '@ice/stark-app';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from "./App";
import SubA from "./SubA";
import SubB from "./SubB";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sub/a",
    element: <SubA />,
  },
  {
    path: "/sub/b",
    element: <SubB />,
  }
], { basename: getBasename() });

let root: ReactDOM.Root;

if (!isInIcestark()) {
  root = ReactDOM.createRoot(document.getElementById('root') as Element);
  root.render(<RouterProvider router={router} />);
}

// ice-stark
export function mount(props) {
  console.log('mounted props==>', props);

  root = ReactDOM.createRoot(props.container);
  root.render(<RouterProvider router={router} />);
}

export function unmount(props) {
  console.log('unmounted props ==>', props);
  root.unmount();
}

// 注意：`setLibraryName` 的入参需要与 webpack 工程配置的 output.library 保持一致
setLibraryName('microReactWebpack');
