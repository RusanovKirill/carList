import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {selectCar} from '../actions/index';

class CarsList extends Component{

    elemList(){
        return this.props.cars.map((car, index)=>{
            return (<div key={index}>
                <div onClick={() => this.props.selectCar(car)} >{car.name}</div>
                {/*<img src={car.img} style={{width:300, height:300}} />*/}
            </div>)
        })
    }

    render() {
        return (
            <div>
                {this.elemList()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cars: state.cars
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectCar:selectCar}, dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(CarsList);
