import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PATH, RECIEPE_PATH, ROOM_PATH, TALK_PATH } from '@/constants/paths';

import AuthRouter from './AuthRouter';

import { MainPage } from '@/pages/Main';
import { LoginPage } from '@/pages/Login';
import { RegisterPage } from '@/pages/Register';
import { ReciepePage } from '@/pages/Reciepe';
import { RoomPage } from '@/pages/Room';
import { TalkPage } from '@/pages/Talk';
import { ReciepeDetailPage } from '@/pages/ReciepeDetail';
import { RoomDetailPage } from '@/pages/RoomDetail';
import { TalkDetailPage } from '@/pages/TalkDetail';
import { ReciepeWritePage } from '@/pages/ReciepeWrite';
import { RoomWritePage } from '@/pages/RoomWrite';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={PATH.root} element={<MainPage />} />

        <Route element={<AuthRouter />}>
          <Route path={PATH.login} element={<LoginPage />} />
          <Route path={PATH.register} element={<RegisterPage />} />
        </Route>

        <Route path={PATH.receipe} element={<ReciepePage />} />
        <Route path={PATH.receipeWrite} element={<ReciepeWritePage />} />
        <Route path={RECIEPE_PATH.detail} element={<ReciepeDetailPage />} />

        <Route path={PATH.room} element={<RoomPage />} />
        <Route path={PATH.roomWrite} element={<RoomWritePage />} />
        <Route path={ROOM_PATH.detail} element={<RoomDetailPage />} />

        <Route path={PATH.talk} element={<TalkPage />} />
        <Route path={TALK_PATH.detail} element={<TalkDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
