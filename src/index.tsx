import _ from 'lodash';
import { isInIcestark, setLibraryName, getBasename } from '@ice/stark-app';

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from "./App";
import SubA from "./SubA";
import SubB from "./SubB";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // element: <div>ddd</div>,
  },
  {
    path: "sub/a",
    element: <SubA />,
  },
  {
    path: "/sub/b",
    element: <SubB />,
  }
], { basename: getBasename() });

const root = createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={router} />);ssssss


// ice-stark
export function mount(props) {
  console.log('mounted ==>', getBasename());
  createRoot(props.container).render(<RouterProvider router={router} />);
}

export function unmount(props) {
  console.log('unmounted ==>', getBasename());
  createRoot(props.container).unmount();
}

// 注意：`setLibraryName` 的入参需要与 webpack 工程配置的 output.library 保持一致
setLibraryName('microReactWebpack');

if (!isInIcestark()) {
  console.log('isInIcestark ==>', getBasename());
  console.log('isInIcestark ==>', isInIcestark());
  root.render(<RouterProvider router={router} />);
}