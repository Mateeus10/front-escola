import { get } from 'lodash';
import { toast } from 'react-toastify';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/axios';
import * as types from '../types';
import * as actions from './actions';


function* loginRequest({ payload }) {
  try {
    const response = yield call(api.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Você fez login');


    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    window.location.href = "/"
  } catch (e) {

    toast.error('Usuário ou senha inválidos.');

    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  api.defaults.headers.Authorization = `Bearer ${token}`;
}

export function* registerRequest({ payload }) {
  const { id, nome, email, password } = payload;

  try {
    if (id) {
      yield call(api.put, '/users', {
        email,
        nome,
        password: password || undefined,
      });
      toast.success('Usuário atualizado com sucesso!');
      yield put(actions.registerUpdatedSuccess({ nome, email, password }));
      window.location.href = '/'
    } else {
      yield call(api.post, '/users', {
        email,
        nome,
        password,
      });
      toast.success('Conta criada com sucesso!');
      yield put(actions.registerCreatedSuccess({ nome, email, password }));
      window.location.href = '/login';
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    console.log(e);

    if (status === 401) {
      toast.error('Você precisa fazer login novamente.');
      yield put(actions.loginFailure());
      window.location.href = "/login"

    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
    }

    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);