import {Component} from "react";

export default class RotateScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restrict: true,
        }
    }

    componentDidMount() {
        this.setState({
           restrict: window.innerWidth > window.innerHeight && window.innerWidth < 1366
        });
        window.addEventListener('resize', this.componentDidMount);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.componentDidMount);
    }

    restrict = () => {
        return (
            <div className={'container-fluid nomargin nopadding'}>
                <img alt={'rotate'} className={'rotate-bg'} src={'/static/img/games/games-bg.png'} />
                <div className={'rotate-div'}>
                    <h2 className={'rotate-text'}>{'¡Girá la pantalla para poder jugar!'}</h2>
                    <button className={'btn-mid btn-gallery'} onClick={() => alert('Tenés que girar la pantalla de tu dispositivo')}>
                        <span>{'Hecho'}</span>
                    </button>
                </div>
            </div>
        );
    }
}