import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render () {
        return (
            <div>
                <div className="banner rounded border border-info text-center">{this.props.ctr}</div>
                <div className="d-flex justify-content-between mt-3">
                    <button onClick={this.props.onIncrementCounter} className="btn btn-outline-info">Increment</button>
                    <button onClick={this.props.onDecrementCounter} className="btn btn-outline-info">Decrement</button>
                    <button onClick={this.props.onAddCounter} className="btn btn-outline-info">+8</button>
                    <button onClick={this.props.onSubtractCounter} className="btn btn-outline-info">-8</button>
                    <button onClick={this.props.onClearCounter} className="btn btn-outline-info">Clear</button>
                </div>
                <div className="d-flex justify-content-around mt-3">
                    <button onClick={() => this.props.onStoreResult(this.props.ctr)} className="btn btn-outline-dark">Store Result</button>
                </div>
                <div className="list-group mt-3">
                    {this.props.storedResults.map(strResult => (
                        <button type="button" className="list-group-item list-group-item-action text-center" key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</button>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onClearCounter: () => dispatch({type: actionTypes.CLEAR}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, val: 8}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, val: 8}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);