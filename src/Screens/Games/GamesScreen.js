import React, {Component} from "react/cjs/react.production.min";
import {Link} from "react-router-dom";
import "../../Styles/GamesScreenStyles.css";
import ScrollContainer from "react-indiana-drag-scroll";
import ReactModal from "react-modal";
import MobileNavBar from "../../Containers/MobileNavBar";

export default class GamesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activo: false,
            zoom: 300,
            unkConDclass: 'unk-con',
            showModal: false,
            game: '',
            vertical: false,
            mobile: false
        }
    }

    componentDidMount = () => {
        document.body.style.overflow = 'initial';
        document.conJue = document.getElementById('con-jue');
        let com = this;
        setTimeout(function () {
            document.conJue.style.zoom = '500%';
            com.setState({unkConDclass: 'unk-con unk-con-d1'})
        }, 5000);
        this.setState({
            vertical: window.innerWidth < window.innerHeight,
            mobile: window.innerWidth < 1366
        });
        window.addEventListener('resize', this.componentDidMount);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.componentDidMount);
    }

    zoomIn = () => {
        this.setState({zoom: this.state.zoom + 30}, () => document.conJue.style.zoom = this.state.zoom.toString() + '%');
    }

    zoomOut = () => {
        if (this.state.zoom === 150) {
            return;
        }
        this.setState({zoom: this.state.zoom - 30}, () => document.conJue.style.zoom = this.state.zoom.toString() + '%');
    }

    getModalContent = (game) => {
        const btnClose = <button className={'sub-btn close-btn'} onClick={() => this.setState({showModal: false})}/>;
        switch (game) {
            case 'wordfind':
                return (
                    <div className={'row nomargin world-modal-con nopadding'}>
                        <div className={'col-md-2 d-none d-md-block'}/>
                        <div className={'col-md-8 col-12 explore-modal'}>
                            <div className={'col-12 btn-modal-con'}>{ btnClose }</div>
                            <div className={'col-12 btn-modal-con'}>
                                <h1 className={'games-modal-title'}>{'Elegí una opción:'}</h1>
                            </div>
                            <div className={'col-12 btn-modal-con d-flex row'}>
                                <div className={'col-md-4 col-6 explore-opt mt-4'}>
                                    <img src={'/static/img/games/paint/1.jpg'}/>
                                </div>
                                <div className={'col-md-4 col-6 explore-opt mt-4'}>
                                    <img src={'/static/img/games/paint/2.png'}/>
                                </div>
                                <div className={'col-md-4 col-6 explore-opt mt-4'}>
                                    <img src={'/static/img/games/paint/3.jpg'}/>
                                </div>
                                <div className={'col-md-4 col-6 explore-opt mt-4'}>
                                    <img src={'/static/img/games/paint/4.jpg'}/>
                                </div>
                                <div className={'col-md-4 col-6 explore-opt mt-4'}>
                                    <img src={'/static/img/games/paint/5.jpg'}/>
                                </div>
                                <div className={'col-md-4 col-6 explore-opt mt-4'}>
                                    <img src={'/static/img/games/paint/6.jpg'}/>
                                </div>
                                <div className={'col-md-4 col-6 explore-opt mt-4'}>
                                    <img src={'/static/img/games/paint/7.png'}/>
                                </div>
                            </div>
                        </div>
                        <div className={'col-md-2 d-none d-md-block'}/>
                    </div>
                );
            default:
                return '';
        }
    }

    render() {
        const hours = new Date().getHours();
        const isDayTime = hours > 6 && hours < 20;
        return (
            <div className={'c-grab'}>
                <MobileNavBar/>
                <ReactModal
                    ariaHideApp={false}
                    isOpen={this.state.showModal}
                    portalClassName={'world-modal'}
                    contentLabel={'Info'}>
                    {
                        this.getModalContent(this.state.game)
                    }
                </ReactModal>
                <ScrollContainer className={'scrollable'} id={'scroll-jue'}>
                    <div className={isDayTime ? 'bg-unk bg-unk-d' : 'bg-unk bg-unk-n'} id={'con-jue'}>
                        <div className={this.state.unkConDclass}>
                            {
                                this.state.mobile && this.state.vertical ?
                                    <div className={this.state.unkConDclass}>
                                        <img alt={'nubes1'} src={'/static/img/games/c1.png'} className={'unk-c1-mv'} />
                                        <img alt={'nubes2'} src={'/static/img/games/c2.png'} className={'unk-c2-mv'} />
                                        <img alt={'island'} src={'/static/img/games/island.png'} className={'unk-c1-mv'} />
                                        <div className={'btn-access btn-lag-letras'} onClick={() =>
                                            this.setState({showModal: true, game: 'wordfind'})} />
                                        <div className={'btn-access btn-bos-memoria'} onClick={() =>
                                            this.setState({showModal: true, game: 'memory'})} />
                                        <div className={'btn-access btn-sendero'} onClick={() =>
                                            this.setState({showModal: true, game: 'puzzle'})} />
                                        <div className={'btn-access btn-mont'} onClick={() =>
                                            this.setState({showModal: true, game: 'paint'})} />
                                    </div> :
                                    this.state.mobile && !this.state.vertical ?
                                        <div className={this.state.unkConDclass}>
                                            <img alt={'nubes1'} src={'/static/img/games/c1.png'} className={'unk-c1'} />
                                            <img alt={'nubes2'} src={'/static/img/games/c2.png'} className={'unk-c2'} />
                                            <img alt={'island'} src={'/static/img/games/island.png'} className={'unk-c1'} />
                                            <div className={'btn-access btn-lag-letras'} onClick={() =>
                                                this.setState({showModal: true, game: 'wordfind'})} />
                                            <div className={'btn-access btn-bos-memoria'} onClick={() =>
                                                this.setState({showModal: true, game: 'memory'})} />
                                            <div className={'btn-access btn-sendero'} onClick={() =>
                                                this.setState({showModal: true, game: 'puzzle'})} />
                                            <div className={'btn-access btn-mont'} onClick={() =>
                                                this.setState({showModal: true, game: 'paint'})} />
                                        </div> :
                                        <div className={this.state.unkConDclass}>
                                            <img alt={'nubes1'} src={'/static/img/games/c1.png'} className={'unk-c1'} />
                                            <img alt={'nubes2'} src={'/static/img/games/c2.png'} className={'unk-c2'} />
                                            <img alt={'island'} src={'/static/img/games/island.png'} className={'unk-c1'} />
                                            <div className={'btn-access btn-lag-letras'} onClick={() =>
                                                this.setState({showModal: true, game: 'wordfind'})} />
                                            <div className={'btn-access btn-bos-memoria'} onClick={() =>
                                                this.setState({showModal: true, game: 'memory'})} />
                                            <div className={'btn-access btn-sendero'} onClick={() =>
                                                this.setState({showModal: true, game: 'puzzle'})} />
                                            <div className={'btn-access btn-mont'} onClick={() =>
                                                this.setState({showModal: true, game: 'paint'})} />
                                        </div>
                            }
                        </div>
                    </div>
                </ScrollContainer>
                <div className={'zoom-bar row nomargin'}>
                    <div className={'col-4 zo'}>
                        <img onClick={this.zoomOut} src={'/static/img/games/zoomout.png'} alt={'zoom out'} /></div>
                    <div className={'col-4'} />
                    <div className={'col-4 zi'}>
                        <img onClick={this.zoomIn} src={'/static/img/games/zoomin.png'} alt={'zoom in'} /></div>
                </div>
            </div>

        );
    }
}