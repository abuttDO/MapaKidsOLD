import React, {Component} from "react/cjs/react.production.min";
import {Link} from "react-router-dom";
import MobileNavBar from "../Containers/MobileNavBar";

export default class NewExploreScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vertical: false,
            mobile: false
        }
        window.showSpin();
    }

    componentDidMount = async() => {
        this.setState({
            vertical: window.innerWidth < window.innerHeight,
            mobile: window.innerWidth < 1366
        });
        window.addEventListener('resize', this.componentDidMount);
        document.body.style.overflow = 'initial';
        //document.body.style.zoom = '300%';
        setTimeout(function () {
            window.hideSpin();
        }, 2000);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.componentDidMount);
    }

    render() {
        return (
            this.state.mobile && !this.state.vertical ?
                <div  className={'d-block p-relative explore'}>
                    <MobileNavBar/>
                    <Link to={'/guardianes'}><img className={'btn-explore b1 mob-hori'} alt={'btn3'} src={'/static/img/explore/btn1.png'} /></Link>
                    <Link to={'/tinta'}><img className={'btn-explore b2 mob-hori'} alt={'btn3'} src={'/static/img/explore/btn2.png'} /></Link>

                    {/*<Link to={'/generosidad'}><img className={'btn-explore b2 mob-hori'} alt={'btn2'} src={'/static/img/explore/btn2.png'} /></Link>*/}
                    {/*<Link to={'/ambiental'}><img className={'btn-explore b1 mob-hori'} alt={'btn1'} src={'/static/img/explore/btn1.png'} /></Link>*/}
                    {/*<Link to={'/colaboracion'}><img className={'btn-explore b4 mob-hori'} alt={'btn4'} src={'/static/img/explore/btn4.png'} /></Link>*/}

                    <img alt={'fondo'} src={'/static/img/explore/bg.jpg'} className={'explore-bg-mob-hori'} />
                    <img alt={'islas'} src={'/static/img/explore/fg.gif'} className={'explore-fg-mob-hori'} />
                </div>
                :
                this.state.mobile && this.state.vertical ?
                    <div  className={'d-block p-relative explore'}>
                        <MobileNavBar/>
                        <Link to={'/guardianes'}><img className={'btn-explore b1 mob-vert'}
                                                      alt={'btn3'} src={'/static/img/explore/btn1.png'} /></Link>
                        <Link to={'/tinta'}><img className={'btn-explore b2 mob-vert'}
                                                      alt={'btn3'} src={'/static/img/explore/btn2.png'} /></Link>

                        {/*<Link to={'/generosidad'}><img className={'btn-explore b2 mob-vert'} alt={'btn2'} src={'/static/img/explore/btn2.png'} /></Link>*/}
                        {/*<Link to={'/ambiental'}><img className={'btn-explore b1 mob-vert'} alt={'btn1'} src={'/static/img/explore/btn1.png'} /></Link>*/}
                        {/*<Link to={'/colaboracion'}><img className={'btn-explore b4 mob-vert'} alt={'btn4'} src={'/static/img/explore/btn4.png'} /></Link>*/}

                        <img alt={'fondo'} src={'/static/img/explore/bg.jpg'} className={'explore-bg-mob-vert'} />
                        <img alt={'islas'} src={'/static/img/explore/fg.gif'} className={'explore-fg-mob-vert'} />
                    </div>
                    :
                    <div  className={'d-block p-relative explore'}>
                        <MobileNavBar/>
                        <Link to={'/'}>
                            <img alt={'logo'} className={'nav-logo d-none d-md-block'} src={'/static/img/home/mapa.svg'} />
                        </Link>
                        <Link to={'/guardianes'}><img className={'btn-explore b1'} title={'Guardianes'}
                                                      alt={'btn3'} src={'/static/img/explore/btn1.png'} /></Link>
                        {/*<Link to={'/generosidad'}><img className={'btn-explore b2'} title={'Generosidad'}*/}
                        {/*                               alt={'btn2'} src={'/static/img/explore/btn2.png'} /></Link>*/}
                        {/*<Link to={'/ambiental'}><img className={'btn-explore b1'} title={'Ambiental'}*/}
                        {/*                              alt={'btn1'} src={'/static/img/explore/btn1.png'} /></Link>*/}
                        {/*<Link to={'/colaboracion'}><img className={'btn-explore b4'} title={'colaboracion'}*/}
                        {/*                                alt={'btn4'} src={'/static/img/explore/btn4.png'} /></Link>*/}

                        <img alt={'fondo'} src={'/static/img/explore/bg.jpg'} className={'explore-bg'} />
                        <img alt={'islas'} src={'/static/img/explore/fg.gif'} className={'explore-fg'} />
                    </div>
        );
    }
}