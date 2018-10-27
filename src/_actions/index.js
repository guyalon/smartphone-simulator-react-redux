
export const setBackground = (background)=>({
    type:'SET_BACKGROUND',
        background

});

export const installApp = (name,color,background,initScript,index)=>({
    type:'INSTALL_APP',
    name,
    color,
    background,
    index,
    initScript
});

export const removeApp = (name)=>({
    type:'REMOVE_APP',
    name
});


export const moveApp = (name,index)=>({
    type:'MOVE_APP',
    name,
    index
});

export const runApp = (name)=>({
    type:'RUN_APP',
    name
});

const GRID_TILE_WIDTH =100;

export const onScreenResize = (width,height)=>({
    type:'ON_SCREEN_RESIZE',
    screenWidth:width,
    screenHeight:height,
    gridWidth:Math.floor(width/GRID_TILE_WIDTH),
    gridHeight:Math.floor(height/GRID_TILE_WIDTH)
});

export const onDragStart = (name)=>({
    type:'ON_DRAG_START',
    dragItem:name
});
