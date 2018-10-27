import React from 'react';

const SmartphoneApplication = ({name,background,color,index,gridWidth,drag,isRunning=false,runApp,initScript})=> {

    let columnIndex = ((index+1) % gridWidth);
    let rowIndex = Math.ceil((index+1)/gridWidth);
    columnIndex = columnIndex? columnIndex:gridWidth;

    let style= {
        color:color,
        backgroundColor: background,
        gridRow: rowIndex.toString(),
        gridColumn: columnIndex.toString() ,
        order:index
    }

    function onClick(event){
        runApp(name);
        if (initScript){
            var foo = Function("return "+initScript);
            foo()(event.target.nextSibling);
        }
    }

    return (<div className='sp-application' style={style} draggable="true" onDragStart={(e)=>{drag(e)}} name={name} onClick={(e)=>{onClick(e)}}>
                <div className="app-name">{name}</div>
                <div className="app-content animated" style={{display:isRunning?'block':'none',backgroundColor:background}}>{name}</div>
            </div>)

}

export default SmartphoneApplication;