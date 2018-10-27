import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import smartphoneReducer from './_reducers';
import { createStore } from 'redux';
import * as Actions from './_actions/index'

const store = createStore(smartphoneReducer, window.devToolsExtension && window.devToolsExtension());

class SmartPhone {
    constructor(element) {
        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider> , element);
            serviceWorker.unregister();
    }

    setBackground = (url) => {
        store.dispatch(Actions.setBackground(url));
    }

    installApp = (app, index) => {
        store.dispatch(Actions.installApp(app.name,app.color,app.background,app.initScript?app.initScript.toString():'',index));
    }

    removeApp = (name) => {
        store.dispatch(Actions.removeApp(name));
    }

    moveApp = (name, index) => {
        store.dispatch(Actions.moveApp(name,index));
    }

    runApp = (name) => {

    }
}

const rotateText = (target) => {
    if (target) {
        target.classList.add('rotateIn') // relay on animate.css - https://daneden.github.io/animate.css/
    }
}

const init = () => {
    const smartPhone = new SmartPhone(document.querySelector('#smartphone'));

    smartPhone.setBackground('https://www.sideshowtoy.com/wp-content/uploads/2018/06/dc-comics-superman-premium-art-print-sideshow-feature-500563.jpg');
    const badApp = {name: "badApp", background: "red", color: "black"};

    let coolApp = {name: "cool app", background: "yellow", color: "black"};
    coolApp.initScript = rotateText;

    smartPhone.installApp({name: "game", background: "yellow", color: "black"});
    smartPhone.installApp(coolApp);
    smartPhone.installApp({name: "watch", background: "green", color: "pink"});
    smartPhone.installApp({name: "face", background: "darkBlue", color: "pink"}, 0);
    smartPhone.installApp({name: "crypro", background: "lightGray", color: "black"});
    smartPhone.installApp(badApp);
    smartPhone.installApp({name: "to do", background: "white", color: "black"});
    smartPhone.installApp({name: "tinder", background: "grey", color: "yellow"});
    smartPhone.removeApp("badApp");
    smartPhone.moveApp("cool app", 14);
}

init()

