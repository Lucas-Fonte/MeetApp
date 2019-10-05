import { call, put, all, takeLatest } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';
import { signInSucess, signFailure } from './actions';
import { toast } from 'react-toastify';

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;

        const response = yield call(api.post, 'sessions', {
            email,
            password
        });

        const { token, user } = response.data;

        yield put(signInSucess(token, user));
        history.push('/dashboard');
    }
    catch(err){
        toast.error('Falha na autenticação, verifique seus dados');
        yield put(signFailure());
    }
}
export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
