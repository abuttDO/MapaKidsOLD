import React, {Component} from "react/cjs/react.production.min";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Styles/Compass.css';
import OldHomeScreen from "./Screens/OldHomeScreen";
import ExploreSubScreen from "./Screens/ExploreSubScreen";
import SubScreenGallery from "./Screens/SubScreenGallery";
import SubScreenGalleryKids from "./Screens/SubScreenGalleryKids";
import NewExploreScreen from "./Screens/NewExploreScreen";
import NewExploreSubScreen from "./Screens/NewExploreSubScreen";
import NewSubScreenGallery from "./Screens/NewSubScreenGallery";
import NewSubScreenGalleryKids from "./Screens/NewSubScreenGalleryKids";
import HomeScreen from "./Screens/HomeScreen";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_creative: 'un'
        };
    }

    componentDidMount = async() => {
        let is_creative = 'yes'//await localStorage.getItem('is_creative');
        this.setState({
            is_creative: is_creative === null ? 'un' : is_creative
        })
    }

    setCreative = async(is_creative) => {
        await localStorage.setItem('is_creative', is_creative);
        this.setState({is_creative});
    }

    render() {
        switch (this.state.is_creative) {
            case "yes":
                return (
                    <BrowserRouter>
                        <Switch>
                            <Route exact path={'/'} key={'/'}
                                   render={({match}) => (<HomeScreen/>)}/>
                            {/*<Route exact path={'/'} key={'/alt'}
                                   render={({match}) => (<HomeAltScreen/>)}/>
                            <Route exact path={'/juegos'} key={'/juegos'}
                                   render={({match}) => (<GamesScreen/>)}/>
                            <Route exact path={'/juegos/memoria'} key={'/juegos/memoria'}
                                   render={({match}) => (<MemoryGameScreen/>)}/>
                            <Route exact path={'/juegos/pintura'} key={'/juegos/pintura'}
                                   render={({match}) => (<PaintGameScreen/>)}/>
                            <Route exact path={'/juegos/rompecabezas'} key={'/juegos/rompecabezas'}
                                   render={({match}) => (<PuzzleGameScreen/>)}/>
                            <Route exact path={'/juegos/sopa_de_letras'} key={'/juegos/sopa_de_letras'}
                                   render={({match}) => (<WordFindGameScreen/>)}/>*/}

                            <Route exact path={'/explorar'} key={'/explorar'}
                                   render={({match}) => (<NewExploreScreen/>)}/>
                            <Route exact path={'/guardianes'} key={'/guardianes'}
                                   render={({match}) => (
                                       <NewExploreSubScreen res={1} class={'bg-1'} gallery_link={'/guardianes/galeria'}
                                                         data={{image: 'autoestima', video_es: 'autoestima_es.mp4', video_gu: 'autoestima_gu.mp4'}}/>
                                   )}/>
                            <Route exact path={'/guardianes/galeria'} key={'/guardianes/galeria'}
                                   render={({match}) => (
                                       <NewSubScreenGallery world={'ambiental'} />
                                   )}/>
                            <Route exact path={'/guardianes/galeria/exploradores/:city'} key={'/guardianes/galeria/exploradores'}
                                   render={({match}) => (
                                       <NewSubScreenGalleryKids world={'ambiental'} city={match.params.city} />
                                   )}/>

                            <Route exact path={'/autoestima'} key={'/autoestima'}
                                   render={({match}) => (
                                       <ExploreSubScreen res={1} class={'bg-1'} gallery_link={'/autoestima/galeria'}
                                                         data={{image: 'autoestima', video_es: 'autoestima_es.mp4', video_gu: 'autoestima_gu.mp4'}}/>
                                   )}/>
                            <Route exact path={'/autoestima/galeria'} key={'/autoestima/galeria'}
                                   render={({match}) => (
                                       <SubScreenGallery world={'autoestima'} />
                                   )}/>
                            <Route exact path={'/autoestima/galeria/exploradores/:city'} key={'/autoestima/galeria/exploradores'}
                                   render={({match}) => (
                                       <SubScreenGalleryKids world={'autoestima'} city={match.params.city} />
                                   )}/>
                            <Route exact path={'/generosidad'} key={'/generosidad'}
                                   render={({match}) => (
                                       <ExploreSubScreen res={3} class={'bg-3'} gallery_link={'/generosidad/galeria'}
                                                         data={{image: 'generosidad', video_es: 'generosidad_es.mp4', video_gu: 'generosidad_gu.mp4'}}/>
                                   )}/>
                            <Route exact path={'/generosidad/galeria'} key={'/generosidad/galeria'}
                                   render={({match}) => (
                                       <SubScreenGallery world={'generosidad'} />
                                   )}/>
                            <Route exact path={'/generosidad/galeria/exploradores/:city'} key={'/generosidad/galeria/exploradores'}
                                   render={({match}) => (
                                       <SubScreenGalleryKids world={'generosidad'} city={match.params.city} />
                                   )}/>
                            <Route exact path={'/colaboracion'} key={'/colaboracion'}
                                   render={({match}) => (
                                       <ExploreSubScreen res={1} class={'bg-1'} gallery_link={'/colaboracion/galeria'}
                                                         data={{image: 'colaboracion', video_es: 'colaboracion_es.mp4', video_gu: 'colaboracion_gu.mp4'}}/>
                                   )}/>
                            <Route exact path={'/colaboracion/galeria'} key={'/colaboracion/galeria'}
                                   render={({match}) => (
                                       <SubScreenGallery world={'colaboracion'} />
                                   )}/>

                            {/*
                            <Route exact path={'/colaboracion/galeria/exploradores/:city'} key={'/colaboracion/galeria/exploradores'}
                                   render={({match}) => (
                                       <SubScreenGalleryKids world={'colaboracion'} city={match.params.city} />
                                   )}/>
                                   */}
                            <Route exact path={'/ambiental'} key={'/ambiental'}
                                   render={({match}) => (
                                       <ExploreSubScreen res={2} class={'bg-2'} gallery_link={'/ambiental/galeria'}
                                                         data={{image: 'ambiental', video_es: 'ambiental_es.mp4', video_gu: 'ambiental_gu.mp4'}}/>
                                   )}/>
                            <Route exact path={'/ambiental/galeria'} key={'/ambiental/galeria'}
                                   render={({match}) => (
                                       <SubScreenGallery world={'ambiental'} />
                                   )}/>
                            <Route exact path={'/ambiental/galeria/exploradores/:city'} key={'/ambiental/galeria/exploradores'}
                                   render={({match}) => (
                                       <SubScreenGalleryKids world={'ambiental'} city={match.params.city} />
                                   )}/>
                        </Switch>
                    </BrowserRouter>
                );
            case "no":
                return (
                    <div className={'row nomargin form-control text-center compass-bg'}>
                        <img alt={'brujula'} className={'thecompass'} src={'/static/img/compass/c_no.gif'} />
                        <h1>{'¡Este sitio es para personas creativas!'}</h1>
                        <button onClick={() => this.setCreative('un')}>{'OK, volver'}</button>
                    </div>
                );
            default:
                return (
                    <div className={'row nomargin form-control text-center compass-bg'}>
                        <img alt={'brujula'} className={'thecompass'} src={'/static/img/compass/c_wait.gif'} />
                        <h4>{'Eres creativo?'}</h4>
                        <button onClick={() => this.setCreative('yes')}>{'SI'}</button>
                        <button onClick={() => this.setCreative('no')}>{'NO'}</button>
                    </div>
                );
        }
    }
}

export default App;
