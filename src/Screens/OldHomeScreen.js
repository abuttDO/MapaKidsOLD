import React, {Component} from "react/cjs/react.production.min";
import '../Styles/HomeAltStyles.css';
import { Parallax } from "react-parallax";
import {Link} from "react-router-dom";
import Slider from "react-slick";
import emailjs from "emailjs-com";
import swal from "sweetalert2";
import ReactPlayer from "react-player";

const TEAM = {
    1: {
        name: 'Catalina Bautista',
        role: 'Cofundadora y Coordinadora Creativa',
        img: 'catalina-bautista',
        nat: 'co'
    },
    2: {
        name: 'Magali Caceres',
        role: 'Cofundadora',
        img: 'magali-caceres',
        nat: 'py'
    },
    3: {
        name: 'Sol Rocholl',
        role: 'Coordinadora de proyectos',
        img: 'sol-rocholl',
        nat: 'py'
    },
    4: {
        name: 'Mónica Bazán',
        role: 'Comunicación y logística',
        img: 'monica-bazan',
        nat: 'py'
    },
    5: {
        name: 'Ana Paz Talavera',
        role: 'Proyectos especiales',
        img: 'ana-talavera',
        nat: 'py'
    },
    6: {
        name: 'Gabriela Teasdale',
        role: 'Presidenta de Transformación Paraguay',
        img: 'gabriela-teasdale',
        nat: 'py'
    },
    7: {
        name: 'Timothy Teasdale',
        role: 'Director Ejecutivo de Transformación Paraguay',
        img: 'timothy-teasdale',
        nat: 'su'
    },
    8: {
        name: 'Hugo López',
        role: 'Asesor de Tecnología',
        img: 'hugo-lopez',
        nat: 'py'
    },
    9: {
        name: 'Sara Paredes',
        role: 'Diseño gráfico',
        img: 'sara-paredes',
        nat: 'py'
    },
    10: {
        name: 'Adriana Sánchez',
        role: 'Ilustración y animación',
        img: 'adriana-sanchez',
        nat: 'co'
    },
    11: {
        name: 'Juan José Marín',
        role: 'Animación',
        img: 'juan-marin',
        nat: 'py'
    },
    12: {
        name: 'Christian Padillla',
        role: 'Asesor de contenido artístico',
        img: 'christian-padilla',
        nat: 'co'
    },
    13: {
        name: 'Christian Chávez',
        role: 'Soporte de tecnología',
        img: 'christian-chavez',
        nat: 'py'
    },
}

const EXPES = [
    'Ojalá puedan continuar estos proyectos que enseñan y abren la mente de los niños, mi hija está súper feliz de ser parte de este mundo mágico, muchas gracias MAPA',
    'A mis hijos les ayudó muchísimo, por sobre todo a valorar a los artistas que tenemos en nuestro país y en otros países. Aprendieron muchas cosas buenas de MAPA... muchas gracias!',
    'Gracias a MAPA por hacerme ver arte por todos lados. La vida es más hermosa con colores. Que esto no pare y que muchos niños más reciban este regalo inolvidable',
    'Muchísimas gracias a MAPA por todo, fue una experiencia inolvidable para mi hija. Esperamos volver a ser parte de esta hermosa experiencia, mientras tanto, como dicen ustedes, ella seguirá imaginando sin límites',
    'Como mamá de una exploradora, estoy muy contenta por la oportunidad de participar en este programa. Hicieron que la creatividad e imaginación de los chicos sean valiosas y puedan ser plasmadas en cada una de las actividades que realizaban. Esperamos muy pronto nos volvamos a encontrar todos de vuelta'
]

const REGEXS = {
    'text': /^.{1,}$/,
    'number': /^.{1,}$/,
    'email': /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
}

export default class OldHomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_creative: 'un',
            accept: 'SI',
            correct: {
                'p2': false,
                'p4': false,
                'p5': false,
                'p6': false,
                'p8': false,
                'p9': false,
                'p10': false,
            },
            types:{
                'p2': 'text',
                'p4': 'number',
                'p5': 'email',
                'p6': 'text',
                'p8': 'text',
                'p9': 'number',
                'p10': 'text',
            },
            all_ok: false,
            showVideo: false,
            player: null,
            slidesTeam: 3,
        };
    }

    componentDidMount = () => {
        const loadScriptByURL = (id, url, callback) => {
            const isScriptExist = document.getElementById(id);
            if (!isScriptExist) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = url;
                script.id = id;
                script.onload = function () {
                    if (callback) callback();
                };
                document.body.appendChild(script);
            }
            if (isScriptExist && callback) callback();
        }
        loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=6Lfeu0IbAAAAAIgAnYHNB93ul_j4XpOffHYhBjSa`, function () {
        });
        if (window.innerHeight > window.innerWidth) {
            this.setState({
                slidesTeam: 2
            });
        }
        document.body.style.overflow = 'initial';
    }

    validateValue = (field, value) => {
        let passed;
        try {
            passed = REGEXS[this.state.types[field]].test(value);
        } catch (e) {
            passed = false;
        }
        let oldState = this.state;
        oldState.correct[field] = passed;
        oldState.all_ok = oldState.correct['p2']
            && oldState.correct['p4'] && oldState.correct['p5'] && oldState.correct['p6']
            && oldState.correct['p8'] && oldState.correct['p9']
            && oldState.correct['p10'];
        this.setState(oldState);
    }

    sendEmail = (e) => {
        e.preventDefault();
        window.showSpin();
        let com = this;
        window.grecaptcha.ready(() => {
            window.grecaptcha.execute('6Lfeu0IbAAAAAIgAnYHNB93ul_j4XpOffHYhBjSa', { action: 'submit' }).then(token => {
                if (token !== null && token !== undefined) {
                    emailjs.sendForm('service_ek42o8c', 'template_43a1f0b', e.target, 'user_IF3QnX13L9i48oQ26S49J')
                        .then((result) => {
                            window.hideSpin();
                            com.setState({accept: 'NO',
                                correct: {
                                    'p2': false,
                                    'p4': false,
                                    'p5': false,
                                    'p6': false,
                                    'p8': false,
                                    'p9': false,
                                    'p10': false,
                                },
                                types:{
                                    'p2': 'text',
                                    'p4': 'number',
                                    'p5': 'email',
                                    'p6': 'text',
                                    'p8': 'text',
                                    'p9': 'number',
                                    'p10': 'text',
                                },
                                all_ok: false,
                                p11: "-"}, () => com.setState({accept: 'SI'}));
                            swal.fire('',
                                'La suscripción se realizó correctamente',
                                'success'
                            );
                        }, (error) => {
                            window.hideSpin();
                        });
                } else {
                    swal.fire('',
                        'Por favor, recargue la página e intente de nuevo',
                        'error'
                    );
                }
            });
        });
    }

    render() {
        const team_carousel = {
            dots: false,
            infinite: true,
            slidesToShow: this.state.slidesTeam,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true
        };
        const experiences_carousel = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true
        };
        return (
            <div className={'container-fluid nopadding'}>
                <div className={'home-bg'}>
                    <img className={'home-rocket r1'} alt={'cohete'} src={'/static/img/home/home-cohete.png'}/>
                    <div className="f-anime f1">
                        <svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 184.8 452.5">
                            <defs>
                            </defs>
                            <path className="flame flame-0" fill="#FF673E" d="M159.7,235.5c-11.3-28.4-10.7-51.6-9.5-81.7c1.1-26.3-6-47.3-15.2-70.6c1.3,14.3-2.2,46.8-8.7,58.4
	c-1.9-26.8-3-52.8-9.8-78.6c-6.2-23.7-20.6-40.8-30-63C98.7,28.4,66,73.2,57.5,100.8c-10.8,35-4.6,71.2-4,106.9
	c-3.4-12.2-15.5-24.9-21.7-34.1C48,216.1,8.6,259.6,2.3,299c-4.6,28.5-2.8,58.7,11.5,82.1c10.6,31,29.8,62.6,63.8,69.6
	c38.3,7.8,72.2-10.3,90.4-42.8C198.8,352.6,181.8,291.2,159.7,235.5"/>
                            <path className="flame flame-1" fill="#FF9B50" d="M148.7,324.7c-2.4-47.6-26.2-91.8-22.7-140.9c-2.1,11.9-12.2,28-13.9,40.9c-5.4-16.6-3.5-36.3-9.9-54.3
	c-5.7-16-11.4-34.9-11.2-52.4c-1.5,13-10.9,26.8-12.3,40.3c-1.5,15.3-0.2,31.3-1.2,46.9c-1,16-9.8,27-15.5,42
	c-4.6,12.2-2.2,27.2-7.2,39.1c-3.8-11.4-2.8-22.5-13.6-30.7c2.2,16.9-7.3,31.7-9,47.9c-1.7,15.6-1.1,34.9,1.9,49.9
	c4.2,21.1,13.3,57.5,43.8,67.8c21.5,7.2,52.2-9.8,61.7-25.4C151.8,376,149.9,348.2,148.7,324.7"/>
                            <path className="flame flame-2" fill="#FF9B50"
                                  d="M91.2,113.4c-0.1,1.5-0.2,3.1-0.2,4.6C91.2,116.4,91.3,114.9,91.2,113.4"/>
                            <path className="flame flame-3" fill="#FF9B50"
                                  d="M126,183.9c0.3-1.5,0.4-2.9,0.4-4.3C126.2,181,126.1,182.5,126,183.9"/>
                            <path className="flame flame-2" fill="#FFCC4D" d="M127.6,353.5c-4.1-15.4-9.3-46.6-20.9-57.4c-1,9.1-5.2,18.2-9.5,26.6c0.3-27.3-7.8-50.3-10.5-76.3
	c0.3,11-5.7,20.8-7.2,31.3c-1.4,9.6,2.4,22.6-3.1,30.1c-1.3-4.9-3.7-7-6.4-11.5c2.9,20.1-17.5,43.5-19.6,64.5
	c-0.8,7.8,3.4,46.2,13.5,56.4c15,15,45.9,14,59.5-3C134.9,399.9,132.1,370.7,127.6,353.5"/>
                            <rect y="0" fill="none" width="184.8" height="452.5"/>
                        </svg></div>
                    <div className="f-anime f2">
                        <svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 184.8 452.5">
                            <defs>
                            </defs>
                            <path className="flame flame-0" fill="#FF673E" d="M159.7,235.5c-11.3-28.4-10.7-51.6-9.5-81.7c1.1-26.3-6-47.3-15.2-70.6c1.3,14.3-2.2,46.8-8.7,58.4
	c-1.9-26.8-3-52.8-9.8-78.6c-6.2-23.7-20.6-40.8-30-63C98.7,28.4,66,73.2,57.5,100.8c-10.8,35-4.6,71.2-4,106.9
	c-3.4-12.2-15.5-24.9-21.7-34.1C48,216.1,8.6,259.6,2.3,299c-4.6,28.5-2.8,58.7,11.5,82.1c10.6,31,29.8,62.6,63.8,69.6
	c38.3,7.8,72.2-10.3,90.4-42.8C198.8,352.6,181.8,291.2,159.7,235.5"/>
                            <path className="flame flame-1" fill="#FF9B50" d="M148.7,324.7c-2.4-47.6-26.2-91.8-22.7-140.9c-2.1,11.9-12.2,28-13.9,40.9c-5.4-16.6-3.5-36.3-9.9-54.3
	c-5.7-16-11.4-34.9-11.2-52.4c-1.5,13-10.9,26.8-12.3,40.3c-1.5,15.3-0.2,31.3-1.2,46.9c-1,16-9.8,27-15.5,42
	c-4.6,12.2-2.2,27.2-7.2,39.1c-3.8-11.4-2.8-22.5-13.6-30.7c2.2,16.9-7.3,31.7-9,47.9c-1.7,15.6-1.1,34.9,1.9,49.9
	c4.2,21.1,13.3,57.5,43.8,67.8c21.5,7.2,52.2-9.8,61.7-25.4C151.8,376,149.9,348.2,148.7,324.7"/>
                            <path className="flame flame-2" fill="#FF9B50"
                                  d="M91.2,113.4c-0.1,1.5-0.2,3.1-0.2,4.6C91.2,116.4,91.3,114.9,91.2,113.4"/>
                            <path className="flame flame-3" fill="#FF9B50"
                                  d="M126,183.9c0.3-1.5,0.4-2.9,0.4-4.3C126.2,181,126.1,182.5,126,183.9"/>
                            <path className="flame flame-2" fill="#FFCC4D" d="M127.6,353.5c-4.1-15.4-9.3-46.6-20.9-57.4c-1,9.1-5.2,18.2-9.5,26.6c0.3-27.3-7.8-50.3-10.5-76.3
	c0.3,11-5.7,20.8-7.2,31.3c-1.4,9.6,2.4,22.6-3.1,30.1c-1.3-4.9-3.7-7-6.4-11.5c2.9,20.1-17.5,43.5-19.6,64.5
	c-0.8,7.8,3.4,46.2,13.5,56.4c15,15,45.9,14,59.5-3C134.9,399.9,132.1,370.7,127.6,353.5"/>
                            <rect y="0" fill="none" width="184.8" height="452.5"/>
                        </svg></div>
                    <img className={'rocket-1 r2'} alt={'cohete'} src={'/static/img/home/home-cohete.png'}/>
                    <section className={'s1 cwhite text-center'}>
                        <img alt={'MAPA: Abriendo caminos'} className={'nav-logo'}
                             src={'/static/img/home/mapa.svg'} />
                        <h1>{'SÉ PARTE DE ESTE UNIVERSO ÚNICO Y CREATIVO'}</h1>
                        <div className={'row nomargin'}>
                            {/*}
                            <Link to={'/juegos'}
                                  className={'col-5 mt-4'}><button className={'btn-mid'}>
                                <span>{'Juegos'}</span>
                            </button></Link>
                            <div className={'col-1'} />*/}
                            <Link to={'/explorar'}
                                  className={'col-5 mt-4'}><button className={'btn-mid'}>
                                <span>{'Explorar'}</span>
                            </button></Link>
                        </div>
                    </section>
                </div>
                <section className={'row nomargin s2a form-con'} id={'inscripcion'}>
                    <div className={'col-md-5'}>
                        <img alt={'portada'} src={'/static/img/home/portada.png'} className={'portada'} />
                    </div>
                    <div className={'col-md-7 text-center'}>
                        <h1>{'Suscribite'}</h1>
                        <h2>{'¡Para disfrutar de la NUEVA REVISTA DIGITAL 100% gratuita!'}</h2>
                        <div className={'row'}>
                            {
                                this.state.accept === 'SI' ?
                                    <form className={'col-12 row nomargin'} onSubmit={(e) => this.sendEmail(e)}>
                                        <div className={'col-md-6'}>
                                            <label className={'d-flex'}
                                                   htmlFor={'p2'}>{'Nombre y Apellido del Padre/Madre suscriptor'}</label>
                                            <input className={this.state.correct.p2 ? 'form-control' : 'form-control error-field'} type={'text'}
                                                   autoFocus={false} name={'p2'}
                                                   onChange={(e) => this.validateValue('p2', e.target.value)}
                                                   id={'p2'}/>
                                            <small className={this.state.correct.p2 ? 'd-none' : 'error-label'} id={'error-p2'}>{'Este campo es requerido'}</small>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <label className={'d-flex'}
                                                   htmlFor={'p4'}>{'Número de celular del Padre/Madre suscriptor'}</label>
                                            <input className={this.state.correct.p4 ? 'form-control' : 'form-control error-field'}
                                                   type={'number'} name={'p4'}
                                                   onChange={(e) => this.validateValue('p4', e.target.value)}
                                                   id={'p4'}/>
                                            <small className={this.state.correct.p4 ? 'd-none' : 'error-label'}  id={'error-p4'}>
                                                {'Este campo es requerido (debe ser un número de celular válido)'}</small>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <label className={'d-flex'}
                                                   htmlFor={'p5'}>{'Correo electrónico del Padre/Madre suscriptor'}</label>
                                            <input className={this.state.correct.p5 ? 'form-control' : 'form-control error-field'}
                                                   type={'email'} name={'p5'}
                                                   onChange={(e) => this.validateValue('p5', e.target.value)}
                                                   id={'p5'}/>
                                            <small className={this.state.correct.p5 ? 'd-none' : 'error-label'}  id={'error-p5'}>{'Este campo es requerido (debe ser un email válido)'}</small>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <label className={'d-flex'}
                                                   htmlFor={'p6'}>{'Nombre y Apellido del niño/niña'}</label>
                                            <input className={this.state.correct.p6 ? 'form-control' : 'form-control error-field'}
                                                   type={'text'} name={'p6'}
                                                   onChange={(e) => this.validateValue('p6', e.target.value)}
                                                   id={'p6'}/>
                                            <small className={this.state.correct.p6 ? 'd-none' : 'error-label'}  id={'error-p6'}>{'Este campo es requerido'}</small>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <label className={'d-flex'}
                                                   htmlFor={'p8'}>{'Nacionalidad del niño/niña'}</label>
                                            <input className={this.state.correct.p8 ? 'form-control' : 'form-control error-field'}
                                                   type={'text'} name={'p8'}
                                                   onChange={(e) => this.validateValue('p8', e.target.value)}
                                                   id={'p8'}/>
                                            <small className={this.state.correct.p8 ? 'd-none' : 'error-label'}  id={'error-p8'}>{'Este campo es requerido'}</small>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <label className={'d-flex'}
                                                   htmlFor={'p9'}>{'Edad del niño/niña'}</label>
                                            <input className={this.state.correct.p9 ? 'form-control' : 'form-control error-field'}
                                                   type={'number'} name={'p9'}
                                                   onChange={(e) => this.validateValue('p9', e.target.value)}
                                                   id={'p9'}/>
                                            <small className={this.state.correct.p9 ? 'd-none' : 'error-label'}  id={'error-p9'}>{'Este campo es requerido'}</small>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <label className={'d-flex'}
                                                   htmlFor={'p10'}>{'Ciudad de residencia'}</label>
                                            <input className={this.state.correct.p10 ? 'form-control' : 'form-control error-field'}
                                                   type={'text'} name={'p10'}
                                                   onChange={(e) => this.validateValue('p10', e.target.value)}
                                                   id={'p10'}/>
                                            <small className={this.state.correct.p10 ? 'd-none' : 'error-label'}  id={'error-p10'}>{'Este campo es requerido'}</small>
                                        </div>
                                        <div className={'col-12'}>

                                        </div>
                                        {
                                            this.state.all_ok ?
                                                <div className={'col-12 mt-4'}>
                                                    <button className={'btn-mid'} type={'submit'}>
                                                        <span>{'Enviar'}</span>
                                                    </button>
                                                </div> : ''
                                        }
                                    </form>
                                    : ''
                            }
                        </div>
                    </div>
                </section>
                <section className={'s2 row nomargin'}>
                    <div className={'col-12 col-md-4 s2a'}>
                        <img alt={'que es mapa'} src={'/static/img/home/que-es-mapa.svg'} />
                        <h2>{'El primer laboratorio paraguayo de creatividad para niños y niñas'}</h2>
                        <p>{'Es un espacio creativo y artístico 100% virtual y gratuito dirigido a niños y niñas entre los 7 y 10 años, que busca potenciar la imaginación, expresión y el desarrollo de habilidades blandas a través del arte y diferentes técnicas creativas.'}</p>
                    </div>
                    <div className={'col-12 col-md-4 s2b'}>
                        <img alt={'bg'} src={'/static/img/home/b-landing-8.png'} className={'d-none d-md-block sep1'} />
                        <img alt={'ninha'} src={'/static/img/home/landing-3.png'} />
                        <img alt={'bg'} src={'/static/img/home/b-landing-7.png'} className={'d-none d-md-block sep2'} />
                    </div>
                    <div className={'col-12 col-md-4 s2c s20 cwhite'}>
                        <p>{'«En MAPA los niños y niñas son llamados “exploradores”. Todos los niños nacen con una curiosidad infinita por conocer el mundo del que son parte, son exploradores y observadores por naturaleza, por eso la creatividad es un derecho fundamental para cada uno de ellos. MAPA celebra la creatividad»'}</p>
                        <h2>{'Catalina Bautista, cofundadora de MAPA Abriendo Caminos'}</h2>
                    </div>
                </section>
                <section className={'se1 row nomargin'}>
                    <div className={'col-12 col-md-4 se1a'}>
                        <img alt={'trans'} src={'/static/img/logos/transformacion-paraguay.png'} />
                        <p>{'Transformación Paraguay es una organización sin fines de lucro cuyo objetivo es transformar la educación a través de herramientas gratuitas en valores, habilidades blandas, y liderazgo positivo. En alianza con distintos colaboradores locales e internacionales, ya ha beneficiado a más de 200.000 paraguayos agregando valor en valores y habilidades a través de diferentes programas 100% gratuitos.'}</p>
                        <button className={'nomargin btn-mid'}><span>{'Ir a la web'}</span></button>
                    </div>
                    <div className={'col-12 col-md-4 se1b'}>
                        <img alt={'bg'} src={'/static/img/home/b-landing-4.png'} className={'d-none d-md-block sep1'} />
                        <img alt={'bg'} src={'/static/img/home/b-landing-2.png'} className={'d-none d-md-block sep2'} />
                        <img alt={'ninhp'} src={'/static/img/home/landing-2.png'} />
                    </div>
                    <div className={'col-12 col-md-4 se1c s20 s2c'}>
                        <p>{'“Es un honor y un orgullo formar parte del proyecto MAPA para educar en valores a nuestros niños y niñas a través del mundo de las artes. El arte comunica, evoca y genera emociones que nos hacen reflexionar. Es, por tanto, un vehículo ideal para trabajar contenidos y competencias vinculadas al crecimiento personal. Con MAPA exploramos la creatividad, el gusto estético y la expresión de las ideas de los más pequeños con la ilusión de sembrar una semilla que contribuya a construir un futuro mejor”.'}</p>
                        <h2>{'Gabriela Teasdale, presidenta de Transformación Paraguay'}</h2>
                    </div>
                </section>
                <section className={'se2 row nomargin'}>
                    <div className={'col-12 col-md-6 s2c se2a'}>
                        <img alt={'bg'} src={'/static/img/home/b-landing-3.png'} className={'d-none d-md-block sep2'} />
                        <img alt={'objetivos'} className={'goal-tit'} src={'/static/img/home/objetivos.svg'} />
                        <h2>{'¡Despegar es necesario!'}</h2>
                        <div className={'goal-box d-flex'}>
                            <img alt={'goal'} src={'/static/img/home/goal-1.svg'} />
                            <p>{'1. Brindar herramientas creativas que permitan a los niños y niñas reconocer sus capacidades y actitudes, aumentar la confianza y el autoestima.'}</p>
                        </div>
                        <div className={'goal-box d-flex goal-right'}>
                            <p>{'2. Estimular y dar a conocer a los niños y niñas nuevas perspectivas para ampliar su visión del mundo y entorno, a través del arte y los artistas.'}</p>
                            <img alt={'goal'} src={'/static/img/home/goal-2.svg'} />
                        </div>
                        <div className={'goal-box d-flex'}>
                            <img alt={'goal'} src={'/static/img/home/goal-3.svg'} />
                            <p>{'3. Generar un espacio seguro donde los niños y niñas sean capaces de expresar libremente sus ideas y pensamientos.'}</p>
                        </div>
                        <div className={'goal-box d-flex goal-right'}>
                            <p>{'4. Universalizar el acceso al arte y la cultura desde temprana edad.'}</p>
                            <img alt={'goal'} src={'/static/img/home/goal-4.svg'} />
                        </div>
                    </div>
                    <div className={'col-12 col-md-6 se2b s2b'}>
                        <img alt={'objetivos'} className={'goal-tit'} src={'/static/img/home/porque-creatividad.svg'} />
                        <h2>{'¡Despegar es necesario!'}</h2>
                        <p>{'El sistema educativo tradicional limita el desarrollo de la capacidad creativa de los niños y niñas, no potencia la innovación y no se les invita a pensar diferente. Tampoco existen demasiadas iniciativas con las que se puedan nutrir las potencialidades creativas durante la infancia.'}<br/><br/>
                            {'La creatividad conecta talentos, habilidades y experiencias. No sólo es divertida y sorprendente, es una parte esencial de la vida cotidiana y todos los niños deben tener la oportunidad de imaginar y crear sin límites.'}<br/><br/>
                            {'Debemos plantearnos ¿qué le ofrecemos a la niñez para que pueda aprovechar ese recurso inagotable de imaginación y logre hacer frente al mundo desafiante y cambiante de hoy?'}</p>
                    </div>
                </section>
                <section className={'s3 row nomargin'}>
                    <div className={'col-md-6 s3a'}>
                        <img alt={'bg'} src={'/static/img/home/b-landing-6.png'} className={'d-none d-md-block sep3'} />
                        <img alt={'mision'} src={'/static/img/home/nuestra-mision.svg'} />
                        <h2>{'PERIODO ENERO-MARZO 2021'}</h2>
                        <div className={'row nomargin'}>
                            <div className={'col-12 counter-con'}>
                                <div className={'counter-box'}>
                                    <div className={'counter-value'}>{'200'}</div>
                                    <p>{'exploradores/as de 7-10 años'}</p>
                                </div>
                            </div>
                            <div className={'col-4 counter-con'}>
                                <div className={'counter-box'}>
                                    <div className={'counter-value'}>{'3'}</div>
                                    <p>{'departamentos'}</p>
                                </div>
                            </div>
                            <div className={'col-4 counter-con'}>
                                <div className={'counter-box'}>
                                    <div className={'counter-value'}>{'12'}</div>
                                    <p>{'ciudades'}</p>
                                </div>
                            </div>
                            <div className={'col-4 counter-con'}>
                                <div className={'counter-box'}>
                                    <div className={'counter-value'}>{'57%'}</div>
                                    <p>{'niñas'}</p>
                                </div>
                            </div>
                            <div className={'col-4 counter-con'}>
                                <div className={'counter-box'}>
                                    <div className={'counter-value'}>{'43%'}</div>
                                    <p>{'niños'}</p>
                                </div>
                            </div>
                            <div className={'col-4 counter-con'}>
                                <div className={'counter-box'}>
                                    <div className={'counter-value'}>{'90%'}</div>
                                    <p>{'de escuelas públicas'}</p>
                                </div>
                            </div>
                            <div className={'col-4 counter-con'}>
                                <div className={'counter-box'}>
                                    <div className={'counter-value'}>{'93%'}</div>
                                    <p>{'participación activa'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-md-6 s3b nopadding'}>
                        <Parallax strength={200} blur={.4} bgImage={'/static/img/home/galeria-arte.jpg'}>
                            <img alt={'datos'} src={'/static/img/home/mapa-datos.svg'} className={'mapa-datos'}/>
                        </Parallax>
                    </div>
                </section>
                <section className={'s4 row nomargin'}>
                    <div className={'col-12 text-center'}>
                        <img src={'/static/img/home/impacto.svg'} alt={'impacto'} className={'impac-tit'}/>
                    </div>
                    <div className={'col-12 text-center'}>
                        <img src={'/static/img/home/impacto.jpg'} alt={'impacto'} className={'impac-con'}/>
                    </div>
                </section>
                <section className={'se3 row nomargin'}>
                    <div className={'col-12 se3a'}>
                        <img alt={'mbae'} src={'/static/img/home/mbaeichapa.svg'} />
                        <div className={'home-player video'}>
                            <ReactPlayer
                                playsinline={true}
                                id={'lan-vid'}
                                controls={true}
                                playing={false}
                                url={'/static/video/landing.mp4'} />
                        </div>
                    </div>
                </section>
                <section className={'s5 row nomargin'}>
                    <div className={'col-12 text-center'}>
                        <img src={'/static/img/home/experiencias.svg'} alt={'impacto'} className={'expe-tit'}/>
                    </div>
                    <div className={'col-12 text-center expe-con'}>
                        <div className={'expe-in'}>
                            <img alt={'q1'} className={'q1'} src={'/static/img/home/quote-1.svg'}/>
                            <img alt={'q2'} className={'q2'} src={'/static/img/home/quote-2.svg'}/>
                            <Slider {...experiences_carousel}>
                                {
                                    EXPES.map((key) =>
                                        <div key={'ex' + key} className={'expe-div'}>
                                            <p className={'expe-span'}>{key}</p>
                                        </div>
                                    )
                                }
                            </Slider>
                        </div>
                    </div>
                </section>
                <section className={'row nomargin s6'}>
                    <img alt={'bg'} className={'bg-top-w'} src={'/static/img/home/top-bg-2.svg'} />
                    <img alt={'bg'} className={'bg-bot-w'} src={'/static/img/home/top-bg-1.svg'} />
                    <h2 className={'green col-12 col-md-2 text-center'}>{'NUESTRO '}<br/>{'EQUIPO'}</h2>
                    <Slider className={'col-12 col-md-10 team-car'} {...team_carousel}>
                        {
                            Object.keys(TEAM).map((key) =>
                                <div key={'tm' + key} className={'home-team-con'}>
                                    <div className={'home-team-carousel'}>
                                        <img alt={'pais'} className={'nation'}  src={'/static/img/home/'+  TEAM[key]['nat'] + '.svg'}/>
                                        <div>
                                            <img alt={'equipo'} src={'/static/img/team/'+  TEAM[key]['img'] + '.jpg'} />
                                            <span><b>{TEAM[key]['name']}</b></span>
                                            <p className={'role'}>{TEAM[key]['role']}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </Slider>
                </section>
                <section className={'row nomargin s7'}>
                    <div className={'col-12 text-center'}>
                        <img src={'/static/img/home/colaboradores.svg'} alt={'colaboradores'} className={'expe-tit'}/>
                    </div>
                    <div className={'col-12 text-center'}>
                        <h3>{'IMPULSADO POR:'}</h3>
                    </div>
                    <div className={'row nomargin cent'}>
                        <div className={'col-md-3 col-6'}>
                            <div>
                                <img alt={'trans'} src={'/static/img/logos/transformacion-paraguay.png'} />
                            </div>
                        </div>
                    </div>
                    <div className={'col-12 text-center'}>
                        <h3>{'CON EL APOYO DE:'}</h3>
                    </div>
                    <div className={'row nomargin cent'}>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((n) =>
                                <div key={'ap' + n} className={'col-md-3 col-6'}>
                                    <div>
                                        <img alt={n} src={'/static/img/s7/' + n + '.png'} />
                                    </div>
                                </div>)
                        }
                    </div>
                    <div className={'col-12 text-center'}>
                        <h3>{'ALIADOS SOCIALES:'}</h3>
                    </div>
                    <div className={'row nomargin cent'}>
                        {
                            [18, 19, 20, 21].map((n) =>
                                <div key={'al' + n} className={'col-md-3 col-6'}>
                                    <div>
                                        <img alt={n} src={'/static/img/s7/' + n + '.png'} />
                                    </div>
                                </div>)
                        }
                    </div>
                    <div className={'col-12 text-center'}>
                        <h3>{'ALIADOS LOCALES:'}</h3>
                    </div>
                    <div className={'row nomargin cent'}>
                        {
                            [14, 15, 16, 17].map((n) =>
                                <div key={'al' + n} className={'col-md-3 col-6'}>
                                    <div>
                                        <img alt={n} src={'/static/img/s7/' + n + '.png'} />
                                    </div>
                                </div>)
                        }
                    </div>
                    <div className={'col-12 text-center'}>
                        <h3>{'MEDIA PARTNERS:'}</h3>
                    </div>
                    <div className={'row nomargin cent'}>
                        {
                            [22, 23].map((n) =>
                                <div key={'mp' + n} className={'col-md-3 col-6'}>
                                    <div>
                                        <img alt={n} src={'/static/img/s7/' + n + '.png'} />
                                    </div>
                                </div>)
                        }
                    </div>
                </section>
                <section className={'s8 row nomargin'}>
                    <img alt={'bg'} className={'bg-bot-r'} src={'/static/img/home/top-bg-3.svg'} />
                    <div className={'col-12 text-center mb-3'}>
                        <img src={'/static/img/home/contacto.svg'} alt={'contacto'} className={'expe-tit'}/>
                    </div>
                    <div className={'col-12 text-center'}>
                        <h3>{'Si tenés dudas o te gustaría más información contactanos a través de:'}</h3>
                    </div>
                    <div className={'d-none d-md-block col-md-2'}></div>
                    <div className={'col-md-3 text-center'}>
                        <h4>{'Llamanos al '}<br/><a href={'tel:595971828888'} rel={'noreferrer'}>{'+595 971 828 888'}</a></h4>
                    </div>
                    <div className={'col-md-2 text-center mt-2 mb-3'}>
                        <span>{'o escribinos al'}</span>
                    </div>
                    <div className={'col-md-4 text-center'}>
                        <h4>{'Email'}<br/><a href={'mailto:mapa@transformacion.org'} rel={'noreferrer'}>{'mapa@transformacion.org'}</a></h4>
                    </div>
                    <div className={'d-none d-md-block col-md-2'}></div>
                    <br/><br/>
                    <div className={'col-12 text-center mt-2'}>
                        <span className={'signature'}>{'© 2021 Mapakids.org, todos los derechos reservados. Desarrollado por '}
                        <a target={'_blank'} rel={'noreferrer'} href={'https://hugolo27.github.io/'}>{'Hugo López'}</a></span>
                    </div>
                </section>
            </div>)
    }
}