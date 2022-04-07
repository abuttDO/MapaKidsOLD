import React, {Component} from "react/cjs/react.production.min";
import "../../Styles/MemoryGameStyles.css";
import swal from "sweetalert2";
import RotateScreen from "./RotateScreen";
import MobileNavBar from "../../Containers/MobileNavBar";
import {Link} from "react-router-dom";

export default class MemoryGameScreen extends RotateScreen {
    constructor(props) {
        super(props)
        this.state = {
            frameworks: [
                'andre_derain_4.jpeg',
                'andre_derain_6.jpg',
                'henri_matisse_1.jpeg',
                'henri_matisse_2.jpeg',
                'henri_matisse_3.png',
                'henri_matisse_5.jpeg'
            ],
            duplicatedFrameworks: [],
            randomizedFrameworks: [],
            finalizedFrameworks: [],
            openedFrameworks: [],
            completed: false,
        }
    }

    verifyTimeout = () => {
        if (!this.state.completed) {
            let extraStyle = '<style>.swal2-container.swal2-backdrop-show, ' +
                '.swal2-container.swal2-noanimation {background: rgb(0 0 0 / 88%);} ' +
                '.swal2-popup{background: none} .swal2-popup img{width: 100% !important;}</style>';
            setTimeout(function () {
                swal.fire({
                    title: '',
                    html: '<img class="game-pop-img" src="/static/img/games/memory/fail.png" />' + extraStyle,
                    confirmButtonText: '<button class="sub-btn again-btn"/>'
                }).then((res) => window.location.reload());
            }, 500);
        }
    }

    componentDidMount = () => {
        super.componentDidMount();
        document.body.style.overflow = 'hidden';
        let extraStyle = '<style>.swal2-container.swal2-backdrop-show, ' +
            '.swal2-container.swal2-noanimation {background: rgb(0 0 0 / 88%);} ' +
            '.swal2-popup{background: none} .swal2-popup img{width: 100% !important;}</style>';
        swal.fire({
            title: '',
            html: '<img class="game-pop-img" src="/static/img/games/memory/init.png" />' + extraStyle,
            confirmButtonText: '<button class="sub-btn play-btn"/>'
        }).then((res) => this.start());
    }

    componentWillUnmount = () => {
        document.body.style.overflow = 'initial';
    }

    handleClick = (name, index) => {
        if (this.state.openedFrameworks.length === 2) {
            setTimeout(() => {
                this.check();
            },1700)
        } else {
            let framework = {
                name,
                index
            }
            let finalizedFrameworks = this.state.finalizedFrameworks;
            let frameworks = this.state.openedFrameworks;
            finalizedFrameworks[index].close = false;
            frameworks.push(framework);
            this.setState({
                openedFrameworks: frameworks,
                finalizedFrameworks: finalizedFrameworks
            })
            if (this.state.openedFrameworks.length === 2) {
                setTimeout(() => {
                    this.check();
                },1700);
            }
        }
    }

    check = () => {
        try {
            let finalizedFrameworks = this.state.finalizedFrameworks;
            if((this.state.openedFrameworks[0].name.name === this.state.openedFrameworks[1].name.name)
                && (this.state.openedFrameworks[0].index !== this.state.openedFrameworks[1].index)){
                finalizedFrameworks[this.state.openedFrameworks[0].index].complete = true
                finalizedFrameworks[this.state.openedFrameworks[1].index].complete = true
            }else {
                finalizedFrameworks[this.state.openedFrameworks[0].index].close = true
                finalizedFrameworks[this.state.openedFrameworks[1].index].close = true
            }
            this.setState({
                finalizedFrameworks,
                openedFrameworks: []
            }, () => this.checkGame())
        } catch (e) {}
    }

    checkGame = () => {
        let completed = true;
        for (let i in this.state.finalizedFrameworks) {
            completed = completed && this.state.finalizedFrameworks[i].complete;
        }
        if (completed) {
            this.setState({completed: true}, () => {
                let extraStyle = '<style>.swal2-container.swal2-backdrop-show, ' +
                    '.swal2-container.swal2-noanimation {background: rgb(0 0 0 / 88%);} ' +
                    '.swal2-popup{background: none} .swal2-popup img{width: 100% !important;}</style>';
                setTimeout(function () {
                    swal.fire({
                        title: '',
                        html: '<img class="game-pop-img" src="/static/img/games/memory/popup.png" />' + extraStyle,
                        confirmButtonText: '<button class="sub-btn close-btn"/>'
                    }).then((res) => window.history.back());
                }, 1000);
            })
        }
    }

    start = () =>{
        setTimeout(function (verifyTimeout) {
            verifyTimeout();
        }, 60000, this.verifyTimeout);
        let finalizedFrameworks = [];
        let duplicatedFrameworks = this.state.frameworks.concat(this.state.frameworks);
        let randomizedFrameworks = this.shuffle(duplicatedFrameworks);
        randomizedFrameworks.map((name, index) =>
            finalizedFrameworks.push({
                name,
                index,
                close: true,
                complete: false,
                fail: false
            })
        );
        this.setState({
            finalizedFrameworks,
            duplicatedFrameworks,
            randomizedFrameworks
        });
    }

    shuffle = array => {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array
    }

    render(){
        if (this.state.restrict) {
            return this.restrict();
        }
        const hours = new Date().getHours();
        const isDayTime = hours > 6 && hours < 20;
        return (
            <div className={isDayTime ? 'app bg-game-d' : 'app bg-game-n'}>
                <MobileNavBar/>
                <Link to={'/'}>
                    <img alt={'logo'} className={'nav-logo d-none d-md-block'} src={'/static/img/home/mapa.svg'} />
                </Link>
                <div className={'playground row'}>
                    {
                        this.state.finalizedFrameworks.map((framework, index) => {
                            return <Card framework={framework}
                                         key={index}
                                         click={() => { this.handleClick(framework, index) }}
                                         close={framework.close}
                                         complete={framework.complete} />
                        })
                    }
                </div>
            </div>
        )
    }
}

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    clicked = framework => {
        this.props.click(framework);
    }

    render(){
        return (
            <div className={'col-4 col-md-3'}>
                <div className={"card" +
                (!this.props.close ? ' opened' : '') +
                (this.props.complete ? ' matched' : '')} onClick={() => this.clicked(this.props.framework)}>
                    <div className="front">
                        <img alt={'isologo'} className={'isologo'} src={'/static/img/isologo.png'} />
                    </div>
                    <div className="back">
                        <img alt={'opcion'}
                             src={"/static/img/games/memory/" + this.props.framework.name}/>
                    </div>
                </div>
            </div>
        )
    }
}