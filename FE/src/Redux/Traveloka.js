import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import appReducer from './Reducer/appReducer';
import quanLyLoaiTourReducer from './Reducer/quanLyLoaiTourReducer';
import quanLyLoaiVeReducer from './Reducer/quanLyLoaiVeReducer';
import quanLyVeReducer from './Reducer/quanLyVeReducer';
import quanLyDonDatVeReducer from './Reducer/quanLyDonDatVeReducer';
import quanLyTourReducer from './Reducer/quanLyTourReducer';
import thongKeReducer from './Reducer/thongKeReducer';
import { tourlistreducer } from './Reducer/Tourreducer';

const reducer = combineReducers({
  tourlist: tourlistreducer,
  quanLyVeState: quanLyVeReducer,
  quanLyLoaiVeState: quanLyLoaiVeReducer,
  quanLyLoaiTourState: quanLyLoaiTourReducer,
  quanLyDonDatVeState: quanLyDonDatVeReducer,
  quanLyTourState: quanLyTourReducer,
  thongKeState: thongKeReducer,
  appState: appReducer,
});
const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);
export default store;
