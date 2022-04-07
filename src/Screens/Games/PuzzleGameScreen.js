import React from "react/cjs/react.production.min";
import "../../Styles/PuzzleGameStyles.css";
import swal from 'sweetalert2';
import RotateScreen from "./RotateScreen";
import MobileNavBar from "../../Containers/MobileNavBar";
import {Link} from "react-router-dom";

const _ = require('lodash');

const themes = {
    0: 'a',
    1: 'b',
    2: 'c'
}

const names = {
    a: 'Raya verde',
    b: 'André Derain - retrato',
    c: 'Henri Matisse - retrato'
}

const layout = _.range(0, 9).map(n => {
    const row = Math.floor(n / 3);
    const col = n % 3;
    return [105 * col, 105 * row];
});

export default class PuzzleGameScreen extends RotateScreen {

    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            positions:  /*[1,2,3,4,5,6,0,7,8]*/ _.shuffle(_.range(0, 9)),
            theme: themes[Math.floor(Math.random() * 3)],
            completed: false,
        }
    }

    componentDidMount = () => {
        super.componentDidMount();
        document.body.style.overflow = 'hidden';
        setTimeout(function (verifyTimeout) {
            verifyTimeout();
        }, 60000, this.verifyTimeout);
    }

    componentWillUnmount = () => {
        document.body.style.overflow = 'initial';
    }

    verifyTimeout = () => {
        if (!this.state.completed) {
            let extraStyle = '<style>.swal2-container.swal2-backdrop-show, ' +
                '.swal2-container.swal2-noanimation {background: rgb(0 0 0 / 88%);} ' +
                '.swal2-popup{background: none} .swal2-popup img{width: 100% !important;}</style>';
            setTimeout(function () {
                swal.fire({
                    title: '',
                    html: '<img class="game-pop-img" src="/static/img/games/puzzle/fail.png" />' + extraStyle,
                    confirmButtonText: '<button class="sub-btn again-btn"/>'
                }).then((res) => window.location.reload());
            }, 500);
        }
    }

    updatePosition(index) {
        let {positions} = this.state;
        let emptyIndex = positions.indexOf(0);
        let targetIndex = positions.indexOf(index);
        const dif = Math.abs(targetIndex - emptyIndex);
        if (dif === 1 || dif === 3) {
            positions[emptyIndex] = index;
            positions[targetIndex] = 0;
            this.setState({positions, completed: positions[0] === 1 && positions[1] === 2 && positions[2] === 3 && positions[3] === 4 &&
                    positions[4] === 5 && positions[5] === 6 && positions[6] === 7 && positions[7] === 8 &&
                    positions[8] === 0});
            if (positions[0] === 1 && positions[1] === 2 && positions[2] === 3 && positions[3] === 4 &&
                positions[4] === 5 && positions[5] === 6 && positions[6] === 7 && positions[7] === 8 &&
                positions[8] === 0){
                let extraStyle = '<style>.swal2-container.swal2-backdrop-show, ' +
                    '.swal2-container.swal2-noanimation {background: rgb(0 0 0 / 88%);} ' +
                    '.swal2-popup{background: none} .swal2-popup img{width: 100% !important;}</style>';
                setTimeout(function (theme, names) {
                    swal.fire({
                        title: '',
                        html: '<img class="game-pop-img" src="/static/img/games/puzzle/popup.png" />' + extraStyle,
                        confirmButtonText: '<button class="sub-btn close-btn"/>'
                    }).then((res) => window.history.back());
                }, 350, this.state.theme, names);
            }
        }
    }

    render() {
        if (this.state.restrict) {
            return this.restrict();
        }
        const hours = new Date().getHours();
        const isDayTime = hours > 6 && hours < 20;
        return (
            <div className={isDayTime ? 'container puz bg-game-d' : 'container puz bg-game-n'}>
                <MobileNavBar/>
                <Link to={'/'}>
                    <img alt={'logo'} className={'nav-logo d-none d-md-block'} src={'/static/img/home/mapa.svg'} />
                </Link>
                <div className={'game'}>
                    {this.state.positions.map((i, key)=> {
                        let cellClass = key ? "cell":'empty cell';
                        let [x, y] = layout[this.state.positions.indexOf(key)];
                        return <div  key={key}
                                     className={'c ' + cellClass}
                                     onClick={this.updatePosition.bind(this, key)}
                                     style={{transform: `translate3d(${x}px,${y}px,0) scale(1.15)`}}>
                            <img alt={'piece'} className={'piece'} src={'/static/img/games/puzzle/' +
                                this.state.theme + (key) + '.jpg'} />
                        </div>
                    })}
                </div>
                <img alt={'solucion'} className={'puzzle-hint'} src={"/static/img/games/puzzle/" + this.state.theme + ".jpg"} />
                <h4 className={'puzzle-name mt-2'}><b>{'Obra:'}</b><br/>{names[this.state.theme]}</h4>
            </div>
        )
    }
}