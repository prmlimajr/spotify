import api from '../../services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as PlaylistActions } from '../ducks/playlists';
import { Creators as ErrorActions } from '../ducks/error';

export function* getPlaylists() {
  try {
    const res = yield call(api.get, '/playlists');

    yield put(PlaylistActions.getPlaylistSuccess(res.data));
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possível obter as playlists.'));
  }
}
