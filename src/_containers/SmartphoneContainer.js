import {connect} from 'react-redux';
import {moveApp, runApp} from "../_actions/index";
import {onDragStart} from "../_actions/index";
import {onScreenResize} from '../_actions/index';

import SmartphoneLayout from '../components/SmartphoneLayout';

import {getNextAvailableIndex} from "../_helpers/index";


const getNewApplicationGrid =  (state={})=> {

    if (!state.applications) return Object.assign({},state,{applications:[]});

    const {applications,moveToIndex,appToMove} = state;
    const numberOfTiles = state.gridWidth * state.gridHeight;

    let newState = Object.assign({},state,{
        applications: applications.map((app) => {

            if (app.index === moveToIndex){
                app.index = getNextAvailableIndex(applications, moveToIndex,numberOfTiles);
            }

            if (app.name === appToMove) {
                app.index = moveToIndex;
            }

            return app;
        })
    });
    return newState;
}



const mapStateToProps = (state) => getNewApplicationGrid(state);

const mapDispatchToProps = dispatch => ({
    onDrop: (name,index)=> dispatch(moveApp(name,index)),
    onDragStart: (name)=> dispatch(onDragStart(name)),
    onScreenResize: (width,height)=>dispatch(onScreenResize(width,height)),
    runApp: (name)=> dispatch(runApp(name))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SmartphoneLayout)