import React, {Component} from "react/cjs/react.production.min";
import '../Styles/HomeStyles.css';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            masterSize: {
                width: 0,
                height: 0,
            }
        }
        this.dbgRef = React.createRef();
    }

    componentDidMount = () => {
    }

    render() {
        const { masterSize } = this.state;
        return <div>
            <div className={'h-master'}>
                <div className={'h-section row nomargin'}>
                    <div className={'col-1'}/>
                    <img alt={'h-1-1'} src={'/static/img/home/h-1-1.png'} className={'col-2 contain-img'}/>
                    <div className={'col-1'}/>
                    <img alt={'h-1-1'} src={'/static/img/home/h-1-2.png'} className={'col-5 contain-img'}/>
                    <img alt={'h-1-1'} src={'/static/img/home/h-1-3.png'} className={'col-1 contain-img'}/>
                </div>
                <div className={'h-section container-fluid'}>
                    <div className={'col-1'}/>
                    <img alt={'h-2-1'} src={'/static/img/home/h-2-1.png'} className={'col-2 contain-img'}/>
                </div>
            </div>
        </div>
    }
}