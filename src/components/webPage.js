import React, { Component } from 'react';
import CarList from '../containers/car-list';
import Details from '../containers/datails';

export default class WebPage extends Component {
    render(){
        return(<div>
            <h2>Cars:</h2>
            <CarList />
            <hr/>
            <h4>Details:</h4>
            <Details/>
        </div>)
    }
}