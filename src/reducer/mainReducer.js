import { combineReducers } from 'redux';
import CarsReducers from './carReducer';
import ActiveCar from './car-active';

const allReducers = combineReducers({
    cars: CarsReducers,
    active: ActiveCar,
});

export default allReducers;