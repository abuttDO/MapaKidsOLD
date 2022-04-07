import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class MobileNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vertical: false,
            mobile: false
        }
    }

    render() {
        return (
            <nav className={'col-12 navbar row nomargin nopadding nav-bg'} id={'navbar'}>
                <div className={'col-4'}>
                    <h4 onClick={() => window.history.back()}>&nbsp;</h4>
                </div>
                <div className={'col-4'}>
                    <Link to={'/'}>&nbsp;</Link>
                </div>
                <div className={'col-4'}>
                    <h4 onClick={() => window.location.reload()}>&nbsp;</h4>
                </div>
            </nav>
        );
    }
}