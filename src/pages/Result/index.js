import { render as headerRender } from '../../organizations/Result/Header';
import { render as imageListRender } from '../../organizations/Result/ImageList';
import { getState } from '../../store';
import './result.scss';

class ResultPage {
    constructor() {
        this.state = {};
        this.render();
    }
    render = () => {
        document.getElementById("app").innerHTML = require('./result.html');

        const { rounds, roundIndex } = getState();

        headerRender('tournament-header-box');
        for (let i = 1; i <= roundIndex; i++) {
            imageListRender("tournament-content-box", i);
        }
    };
}


export const render = () => {
    new ResultPage();
};