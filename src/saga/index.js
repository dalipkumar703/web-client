import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Message from '../Api/Message'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchMessage(action) {
   try {
      const user = yield call(Message, action.text);
      yield put({type: "MESSAGE_FETCH", message:"complete"});
   } catch (e) {
      yield put({type: "MESSAGE_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("Message", fetchMessage);
}


export default mySaga;
