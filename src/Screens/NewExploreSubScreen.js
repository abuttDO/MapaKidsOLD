import React, {Component} from "react/cjs/react.production.min";
import ReactPlayer from 'react-player';
import '../Styles/ExploreSubScreenStyles.css';
import {Link} from "react-router-dom";
import ReactModal from "react-modal";
import MobileNavBar from "../Containers/MobileNavBar";

export default class NewExploreSubScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showVideo: false,
            vertical: false,
            mobile: false,
            player: null
        }
    }

    componentDidMount = () => {
        document.body.style.overflow = 'initial';
        this.setState({
            vertical: window.innerWidth < window.innerHeight,
            mobile: window.innerWidth < 1366
        });
        window.addEventListener('resize', this.componentDidMount);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.componentDidMount);
    }

    getPlayer = file => {
        return <ReactPlayer
            id={'mat'}
            playsinline={true}
            controls={true}
            playing={true}
            url={'/static/video/' + file} />
    }

    goFullScreen = () => {
        setTimeout(function () {
            let elem = document.getElementById('mat').firstChild;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
        }, 500);
    }

    showVideo = file => {
        let player = this.getPlayer(file);
        this.setState({
            player: player,
            showVideo: true,
        }, () => this.goFullScreen());
    }

    hideVideo = () => {
        this.setState({
            showVideo: false,
            player: null,
        });
    }

    render() {
        return (
            <div className={'row nomargin explore-sub-con p-relative'}>
                <MobileNavBar/>
                <Link to={'/'}>
                    <img alt={'logo'} className={'nav-logo d-none d-md-block'} src={'/static/img/home/mapa.svg'} />
                </Link>
                <img className={'bg-item'}
                     src={'/static/img/exploresub/bg1.png'} alt={'bg1'} />
                <img className={'bg-item'}
                     src={'/static/img/exploresub/bg2.png'} alt={'bg2'} />
                <div className={'col-12 sub-con'}>
                    <div id={'explore-sub'} className={'left-con row nomargin nopadding'}>
                        <ReactModal
                            ariaHideApp={false}
                            isOpen={this.state.showVideo}
                            portalClassName={'explore-sub-modal'}
                            contentLabel={'Video'}>
                            {this.state.player}
                            <button className={'ml-10 sub-btn close-btn'} onClick={this.hideVideo}/>
                        </ReactModal>
                        <div className={this.state.mobile && this.state.vertical ? 'col-12 left-con-in' : 'col-6 left-con-in'}>

                        </div>
                        <div className={this.state.mobile && this.state.vertical ? 'col-12' : 'col-6'}>
                            <div className={this.state.mobile && this.state.vertical ? 'out-btn-extra out-btn' : 'out-btn'}>
                                <Link to={this.props.gallery_link} aria-label={'Ir a la galería'}>
                                    <button className={'sub-btn gallery-btn'} onClick={() => this.showVideo(this.props.data.video_es)}/></Link>
                            </div>
                            <img className={this.state.mobile && this.state.vertical ? 'sub-gallery sub-gallery-extra' : 'sub-gallery'}
                                 alt={'gallery'} src={'/static/img/exploresub/gallery.png'} />
                        </div>
                    </div>
                </div>
                <img className={this.state.mobile && this.state.vertical ? 'bg3 bg3-extra' : 'bg3'}
                     alt={'bg3'} src={'/static/img/exploresub/bg3.gif'} />
                <img className={this.state.mobile && this.state.vertical ? 'd-none' : 'bg4'}
                     alt={'bg4'} src={'/static/img/exploresub/bg4.png'} />
            </div>
        );;
    }
}