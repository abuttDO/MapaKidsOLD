import React from "react/cjs/react.production.min";
import '../../Styles/PaintGameStyles.css';
import RotateScreen from "./RotateScreen";
import MobileNavBar from "../../Containers/MobileNavBar";
import {Link} from "react-router-dom";

export default class PaintGameScreen extends RotateScreen {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            activeColor: 'none',
            size: 'small',
        }
        this.canva = React.createRef();
    }

    componentDidMount = async() => {
        super.componentDidMount();
        document.body.style.overflow = 'hidden';
        let img = new Image();
        img.src = "http://i.stack.imgur.com/xL8it.png";
        let com = this;
        img.onload = function () {
            com.setup(this);
        }
        window.azar = true;
        window.strokeStyle = "hsla(" + (Math.random() * 360) + ", 100%, 10%, .90)";
        window.line = [];
        window.lineWidth = 20;
        window.curPath = [];
        window.paths = [];
        this.setState({
            width: window.innerHeight > window.innerWidth ? window.innerWidth * .85 : window.innerHeight * .55
        });
    }

    componentWillUnmount = () => {
        document.body.style.overflow = 'initial';
    }

    setStrokeStyle = color => {
        if (color.name === 'none') {
            window.azar = true;
        } else {
            window.strokeStyle = color.code;
            window.azar = false;
        }
        this.setState({
            activeColor: color.name,
        });
    }

    setLineWidth = size => {
        window.lineWidth = size.number;
        this.setState({
            size: size.name
        })
    }

    setup = (img) => {
        try {
            var canvas = document.getElementById('paint'),
                ctx = canvas.getContext("2d"),
                lastPos, isDown = false;

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            ctx.lineCap = "round";
            ctx.globalCompositeOperation = "multiply";

            window.startOver = function (){
                ctx.clearRect(0,0,canvas.width,canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }

            canvas.onmousedown = function(e) {
                isDown = true;
                lastPos = getPos(e);
                ctx.lineWidth = window.lineWidth;
                ctx.strokeStyle = window.azar ? "hsl(" + (Math.random() * 360) + ", 100%, 85%)" : window.strokeStyle;
                window.curPath = [];
                window.curPath.push({x: lastPos.x, y: lastPos.y});
            };
            canvas.addEventListener("touchstart",
                function(e) {
                    isDown = true;
                    lastPos = getPos(e);
                    ctx.lineWidth = window.lineWidth;
                    ctx.strokeStyle = window.azar ? "hsl(" + (Math.random() * 360) + ", 100%, 85%)" : window.strokeStyle;
                    window.curPath = [];
                    window.curPath.push({x: lastPos.x, y: lastPos.y});
                });
            window.addEventListener("touchmove",  function(e) {
                if (!isDown || e.target.id !== 'paint') return;
                let pos = getPos(e);
                ctx.beginPath();
                ctx.moveTo(lastPos.x, lastPos.y);
                ctx.lineTo(pos.x, pos.y);
                ctx.stroke();
                lastPos = pos;
                window.curPath.push({x: lastPos.x, y: lastPos.y});
            });
            window.onmousemove = function(e) {
                if (!isDown || e.target.id !== 'paint') return;
                let pos = getPos(e);
                ctx.beginPath();
                ctx.moveTo(lastPos.x, lastPos.y);
                ctx.lineTo(pos.x, pos.y);
                ctx.stroke();
                lastPos = pos;
                window.curPath.push({x: lastPos.x, y: lastPos.y});
            };
            window.onmouseup = function(e) {
                isDown = false;
                window.paths.push(window.curPath);
            };

            function getPos(e) {
                let rect = canvas.getBoundingClientRect();
                if (e.clientX === null || e.clientX === undefined || isNaN(e.clientX)) {
                    return {x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top}
                }
                return {x: e.clientX - rect.left, y: e.clientY - rect.top}
            }
        } catch (e) {}
    }

    render() {
        if (this.state.restrict) {
            return this.restrict();
        }
        const hours = new Date().getHours();
        const isDayTime = hours > 6 && hours < 20;
        return(
            <div className={isDayTime ? 'container d-block bg-game-d paint-flex' : 'container d-block bg-game-n paint-flex'}>
                <MobileNavBar/>
                <Link to={'/'}>
                    <img alt={'logo'} className={'nav-logo d-none d-md-block'} src={'/static/img/home/mapa.svg'} />
                </Link>
                <div className={'row nomargin canva-super'}>
                    <div className={'col-12 canva-con'}>
                        <canvas ref={this.canva}
                                width={this.state.width} height={this.state.width} id={'paint'} />
                    </div>
                    <div className={'col-12 row super-con'}>
                        <div className={'color-btn-con d-flex'} style={{width: this.state.width, height: this.state.height}}>
                            <div className={'col-2'}>
                                <button className={this.state.activeColor === 'none' ? 'color-btn active' : 'color-btn'}
                                        onClick={() =>
                                            this.setStrokeStyle({
                                                name: 'none',
                                            })
                                        }
                                        style={{
                                            background: 'url("/static/img/games/rainbow.jpg")',
                                            objectFit: 'contain',
                                            backgroundSize: '130% 130%',
                                            backgroundPosition: 'center'
                                        }} />
                            </div>
                            <div className={'col-2'}>
                                <button className={this.state.activeColor === 'darkred' ? 'color-btn active' : 'color-btn'}
                                        onClick={() =>
                                            this.setStrokeStyle({
                                                code: 'rgb(139 0 0 / 20%)',
                                                name: 'darkred',
                                            })
                                        }
                                        style={{background: 'darkred'}} />
                            </div>
                            <div className={'col-2'}>
                                <button className={this.state.activeColor === 'red' ? 'color-btn active' : 'color-btn'}
                                        onClick={() =>
                                            this.setStrokeStyle({
                                                code: 'rgb(255 0 0 / 20%)',
                                                name: 'red',
                                            })
                                        }
                                        style={{background: 'red'}} />
                            </div>
                            <div className={'col-2'}>
                                <button className={this.state.activeColor === 'orange' ? 'color-btn active' : 'color-btn'}
                                        onClick={() =>
                                            this.setStrokeStyle({
                                                code: 'rgb(255 165 0 / 20%)',
                                                name: 'orange',
                                            })
                                        }
                                        style={{background: 'orange'}} />
                            </div>
                            <div className={'col-2'}>
                                <button className={this.state.activeColor === 'yellow' ? 'color-btn active' : 'color-btn'}
                                        onClick={() =>
                                            this.setStrokeStyle({
                                                code: 'rgb(255 255 0 / 20%)',
                                                name: 'yellow',
                                            })
                                        }
                                        style={{background: 'yellow'}} />
                            </div>
                            <div className={'col-2'}>
                                <button className={this.state.activeColor === 'greenyellow' ? 'color-btn active' : 'color-btn'}
                                        onClick={() =>
                                            this.setStrokeStyle({
                                                code: 'rgb(173 255 47 / 20%)',
                                                name: 'greenyellow',
                                            })
                                        }
                                        style={{background: 'greenyellow'}} />
                            </div>
                            <div className={'col-2'}>
                                <button className={this.state.activeColor === 'forestgreen' ? 'color-btn active' : 'color-btn'}
                                        onClick={() =>
                                            this.setStrokeStyle({
                                                code: 'rgb(34 200 34 / 20%)',
                                                name: 'forestgreen',
                                            })
                                        }
                                        style={{background: 'forestgreen'}} />
                            </div>
                            <div className={'col-2'}>
                                <button className={this.state.activeColor === 'darkgreen' ? 'color-btn active' : 'color-btn'}
                                        onClick={() =>
                                            this.setStrokeStyle({
                                                code: 'rgb(0 100 0 / 10%)',
                                                name: 'darkgreen',
                                            })
                                        }
                                        style={{background: 'darkgreen'}} />
                            </div>
                            <div className={'col-2'}>
                                <button className={this.state.activeColor === 'lightblue' ? 'color-btn active' : 'color-btn'}
                                        onClick={() =>
                                            this.setStrokeStyle({
                                                code: 'rgb(173 216 230 / 20%)',
                                                name: 'lightblue',
                                            })
                                        }
                                        style={{background: 'lightblue'}} />
                            </div>
                            <div className={'col-2'}>
                                <button className={this.state.activeColor === 'blue' ? 'color-btn active' : 'color-btn'}
                                        onClick={() =>
                                            this.setStrokeStyle({
                                                code: 'rgb(0 0 255 / 20%)',
                                                name: 'blue',
                                            })
                                        }
                                        style={{background: 'blue'}} />
                            </div>
                            <div className={'col-2'}>
                                <button className={this.state.activeColor === 'violet' ? 'color-btn active' : 'color-btn'}
                                        onClick={() =>
                                            this.setStrokeStyle({
                                                code: 'rgb(238 130 238 / 20%)',
                                                name: 'violet',
                                            })
                                        }
                                        style={{background: 'violet'}} />
                            </div>
                            <div className={'col-2'}>
                                <button className={this.state.activeColor === 'purple' ? 'color-btn active' : 'color-btn'}
                                        onClick={() =>
                                            this.setStrokeStyle({
                                                code: 'rgb(128 0 128 / 20%)',
                                                name: 'purple',
                                            })
                                        }
                                        style={{background: 'purple'}} />
                            </div>
                        </div>
                    </div>
                    <div className={'col-12 row super-con'}>
                        <div className={'color-btn-con d-flex'} style={{width: this.state.width, height: this.state.height}}>
                            <div className={'col-3'}>
                                <button className={this.state.size === 'xsmall' ? 'color-btn-alt active' : 'color-btn-alt'}
                                        onClick={() =>
                                            this.setLineWidth({
                                                number: 5,
                                                name: 'xsmall'
                                            })
                                        }>
                                    <span>{'1'}</span>
                                </button>
                            </div>
                            <div className={'col-3'}>
                                <button className={this.state.size === 'small' ? 'color-btn-alt active' : 'color-btn-alt'}
                                        onClick={() =>
                                            this.setLineWidth({
                                                number: 10,
                                                name: 'small'
                                            })
                                        }>
                                    <span>{'2'}</span>
                                </button>
                            </div>
                            <div className={'col-3'}>
                                <button className={this.state.size === 'medium' ? 'color-btn-alt active' : 'color-btn-alt'}
                                        onClick={() =>
                                            this.setLineWidth({
                                                number: 20,
                                                name: 'medium'
                                            })
                                        }>
                                    <span>{'3'}</span>
                                </button>
                            </div>
                            <div className={'col-3'}>
                                <button className={this.state.size === 'large' ? 'color-btn-alt active' : 'color-btn-alt'}
                                        onClick={() =>
                                            this.setLineWidth({
                                                number: 30,
                                                name: 'large'
                                            })
                                        }>
                                    <span>{'4'}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={'col-12 row super-con'}>
                        <div className={'color-btn-con d-flex'} style={{width: this.state.width, height: this.state.height}}>
                            <div className={'col-12'}>
                                <button className={'btn-mid'} onClick={() => window.startOver()}>
                                    <span>{'Borrar todo'}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}