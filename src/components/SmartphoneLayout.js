import React from 'react';
import SmartphoneApplication from './SmartphoneApplication';
import { getDropIndex } from '../_helpers/index';
import './layout.css';
import './animate.css';


class SmartphoneLayout extends React.Component {
    constructor(props){
        super(props);

        this.onDrop = this.onDrop.bind(this);
        this.allowDrop = this.allowDrop.bind(this);
        this.drag = this.drag.bind(this);
        this.updateWindowDimensions =this.updateWindowDimensions.bind(this)
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.props.onScreenResize(window.innerWidth,window.innerHeight)
    }

    onDrop(event){
        var index = getDropIndex(event.clientX,event.clientY,this.props);
        this.props.onDrop(this.props.dragItem,index);
    }

    allowDrop(event){
        event.preventDefault();
    }

    drag(event){
        this.props.onDragStart(event.target.attributes.name.nodeValue);
    }

    render(){

        const {background,gridWidth=1,gridHeight=1,applications} = this.props;

        let style = {
            backgroundImage: "url("+background+")",
            gridTemplateColumns: "repeat("+gridWidth+", 100px)",
            gridTemplateRows: "repeat("+gridHeight+", 100px)"
        }

    return(
        <div className='sm-layout-wrapper' style={style} onDrop={(e)=>{this.onDrop(e)}} onDragOver={this.allowDrop}>
            {applications.map(app=>(<SmartphoneApplication {...app} gridWidth={gridWidth} drag={this.drag} runApp={this.props.runApp} key={app.index}  />))}
        </div>
)}};


export default SmartphoneLayout;