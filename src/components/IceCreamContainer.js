import React from 'react';
import { buyIceCream } from '../redux'
import { connect } from 'react-redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>No of Ice Cream - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy Ice Cream</button>
        </div>
    )
}

//step 1
const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

//step 2
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream(1))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (IceCreamContainer)
