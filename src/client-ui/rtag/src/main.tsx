import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import App from './App.tsx'
import AddChallenges from './components/AddChallenges.tsx';
import Auth from './components/Auth'
import LeaderBoard from './components/LeaderBoard'
import Challenges from './components/Challenges'
import Challenge from './components/Challenge'
import Splash from './components/Splash'
import Rules from './components/Rules'
import Rtag from './components/Rtag'
import Rtags from './components/Rtags'
import PostRtag from './components/PostRtag'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add_challenge",
    element: <AddChallenges />
  },
  {
    path: "/authorize",
    element: <Auth />
  },
  {
    path: "/leaders",
    element: <LeaderBoard />
  },
  {
    path: "/challenges",
    element: <Challenges />
  },
  {
    path: "/challenge",
    element: <Challenge />
  },
  {
    path: "/post-rtag",
    element: <PostRtag />
  },
  {
    path: "/splash",
    element: <Splash />
  },
  {
    path: "/rules",
    element: <Rules />
  },
  {
    path: "/rtag",
    element: <Rtag />
  },
  {
    path: "/rtags",
    element: <Rtags />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
