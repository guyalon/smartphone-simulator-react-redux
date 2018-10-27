
import {getNextAvailableIndex} from "../_helpers/index";

export default function smartphoneReducer(state={},action){
    switch (action.type){
        case 'SET_BACKGROUND':
            return Object.assign({},state,{background:action.background});

        case 'INSTALL_APP': {

            let numberOfTiles = state.gridHeight * state.gridWidth;

            var index = getNextAvailableIndex(state.applications,action.index,numberOfTiles);

            let newState = Object.assign({}, state, {
                applications: [...(state.applications?state.applications:[]), {
                    name: action.name,
                    color: action.color,
                    background: action.background,
                    index: index,
                    initScript: action.initScript
                }]
            });
            return newState;
        }
        case 'REMOVE_APP': {
            let newState = Object.assign({}, state, {applications: state.applications.filter((app) => app.name !== action.name)});
            return newState;
        }
        case 'MOVE_APP':{
            let newState = Object.assign({},state,{appToMove: action.name,moveToIndex: action.index});
            return newState;
        }
        case 'ON_SCREEN_RESIZE':{
            let newState = Object.assign({},state,{
                screenWidth:action.screenWidth,
                screenHeight:action.screenHeight,
                gridWidth:action.gridWidth,
                gridHeight:action.gridHeight,
            }) ;
            return newState;
        }

        case 'RUN_APP':{
            let newState = Object.assign({},state,state.applications.map(function (app) {
                if (app.name === action.name){
                    app.isRunning = !app.isRunning;
                }
                return app;

            }))

            return newState;
        }
        case 'ON_DRAG_START':{
            let newState = Object.assign({},state,{
                dragItem:action.dragItem
            })
            return newState;
        }

        default:
            return state;
    }

};
