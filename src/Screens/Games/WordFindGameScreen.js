import React from "react/cjs/react.production.min";
import "../../Styles/WordFindGameStyles.css";
import swal from "sweetalert2";
import RotateScreen from "./RotateScreen";
import MobileNavBar from "../../Containers/MobileNavBar";
import {Link} from "react-router-dom";

const sets = {
    0: [
        'COLOR', 'CREACION', 'CULTURA', 'DESCUBRIR', 'EXPRESION', 'HISTORIA'
    ],
    1: [
        'MAPA', 'TALENTO', 'CONOCIMIENTO', 'CREATIVIDAD', 'DERAIN', 'EXPLORADORES'
    ],
    2: [
        'FAUVISMO', 'IDEAS', 'MATISSE', 'VIAJE', 'ACTIVIDAD', 'ARTE'
    ]
}

export default class WordFindGameScreen extends RotateScreen {
    constructor(props) {
        super(props);
        const sc0 = document.createElement("script");
        const sc1 = document.createElement("script");
        const sc2 = document.createElement("script");
        sc0.src = "/static/js/jquery.min.js";
        sc0.async = false;
        sc1.src = "/static/js/wordfind.js";
        sc1.async = false;
        sc2.src = "/static/js/wordfindgame.js";
        sc2.async = false;
        document.body.appendChild(sc0);
        document.body.appendChild(sc1);
        document.body.appendChild(sc2);
        this.state = {
            words: sets[Math.floor(Math.random() * 2)],
            started: false,
            completed: false,
        }
    }

    complete = () => {
        let extraStyle = '<style>.swal2-container.swal2-backdrop-show, ' +
            '.swal2-container.swal2-noanimation {background: rgb(0 0 0 / 88%);} ' +
            '.swal2-popup{background: none} .swal2-popup img{width: 100% !important;}</style>';
        this.setState({completed: true}, () =>
            swal.fire({
            title: '',
            html: '<img class="game-pop-img" src="/static/img/games/wordfind/popup.png" />' + extraStyle,
            confirmButtonText: '<button class="sub-btn close-btn"/>'
        }).then((res) => window.history.back()));
    }

    verifyTimeout = () => {
        if (!this.state.completed) {
            let extraStyle = '<style>.swal2-container.swal2-backdrop-show, ' +
                '.swal2-container.swal2-noanimation {background: rgb(0 0 0 / 88%);} ' +
                '.swal2-popup{background: none} .swal2-popup img{width: 100% !important;}</style>';
            setTimeout(function () {
                swal.fire({
                    title: '',
                    html: '<img class="game-pop-img" src="/static/img/games/wordfind/fail.png" />' + extraStyle,
                    confirmButtonText: '<button class="sub-btn again-btn"/>'
                }).then((res) => window.location.reload());
            }, 500);
        }
    }

    componentDidMount = () => {
        super.componentDidMount();
        document.body.style.overflow = 'hidden';
        document.body.style.overscrollBehavior = 'contain';
        window.complete = this.complete;
        if (!this.state.started) {
            this.setState({started: true});
            let extraStyle = '<style>.swal2-container.swal2-backdrop-show, ' +
                '.swal2-container.swal2-noanimation {background: rgb(0 0 0 / 88%);} ' +
                '.swal2-popup{background: none} .swal2-popup img{width: 100% !important;}</style>';
            swal.fire({
                title: '',
                html: '<img class="game-pop-img" src="/static/img/games/wordfind/init.png" />' + extraStyle,
                confirmButtonText: '<button class="sub-btn play-btn"/>'
            }).then((res) =>
                setTimeout(function (words, timeout) {
                    window.wordfindgame.create(words, '#puzzle', '#words', {
                        width: 12,
                        height: 12
                    });
                    setTimeout(function (verifyTimeout) {
                        verifyTimeout();
                    }, 60000, timeout);
                }, 500, this.state.words, this.verifyTimeout)
            );
        }
    }

    componentWillUnmount = () => {
        document.body.style.overflow = 'initial';
        document.body.style.overscrollBehavior = 'initial';
    }

    render() {
        if (this.state.restrict) {
            return this.restrict();
        }
        const hours = new Date().getHours();
        const isDayTime = hours > 6 && hours < 20;
        return(
            <div className={isDayTime ? 'container d-block bg-game-d wfparent' : 'container d-block bg-game-n wfparent'}>
                <MobileNavBar/>
                <Link to={'/'}>
                    <img alt={'logo'} className={'nav-logo d-none d-md-block'} src={'/static/img/home/mapa.svg'} />
                </Link>
                <div className={'wfcon'}>
                    <div id={'puzzle'}/>
                    <div id={'words'}/>
                </div>
            </div>
        );
    }
}