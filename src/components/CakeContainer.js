import React from 'react';
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>No of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}

//step 1
const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

//step 2
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake(1))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer)
