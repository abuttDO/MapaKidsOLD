import React, {Component} from "react/cjs/react.production.min";
import '../Styles/SubScreenGalleryStyles.css';
import MobileNavBar from "../Containers/MobileNavBar";
import Slider from "react-slick";
import ReactModal from "react-modal";
import ReactPlayer from "react-player";
import {Link} from "react-router-dom";


const WORLDS_DATA = {
    'generosidad': {
        bg: 'generosidad-bg',
        bgVert: 'generosidad-bg-vert',
        sub: 'Esculturas',
        png: [1, 2, 3, 4, 5, 6, 7],
        actiTit: 'ESCULTURA',
        actiSub: 'Animales fantásticos',
        color: '#ff4238',
        video: 'generosidad_acti.mp4',
        colorFg: '#97dee4',
        question: 'REGALÁ UN ANIMAL FANTÁSTICO A TU CIUDAD',
        answer: 'Si pudieras crear una escultura para tu ciudad o comunidad ¿Qué harías? ¿Cómo sería? ¿Qué mensaje buscarías comunicar?',
        content: 'Ha llegado la hora de convertirse en escultor o escultora, para darle vida al misterioso cuadrúpedo que viene en tu kit de creatividad.\nRealiza un dibujo preparatorio o boceto, así como Leonardo da Vinci lo realizó para la escultura del enorme caballo. Dale rienda suelta a tu imaginación creando un ANIMAL FANTÁSTICO, diferente, impensable, imposible, misterioso y sobretodo MÁGICO.\nUtiliza los materiales que encuentres en tu kit de creatividad: plastilina, papeles de colores, cartulinas, pintura, colores y otros materiales u objetos que encuentres en tu casa y quieras reutilizar.\nPoco a poco construye, crea y moldea ese animal fantástico, anímate a darle vida y regalarlo a tu ciudad o comunidad.',
        art: [{
            "name":"Comunidad Aché",
            "hover":"Hola exploradores/as",
            "thumb":"1_mini.png",
            "img":"1.png",
            "content":"1_i.png"
        },
            {
                "name":"Louise Bourgeois",
                "hover":"¡Je suis Louise!",
                "thumb":"2_mini.png",
                "img":"2.jpeg",
                "content":"2_i.png"
            },
            {
                "name":"Fernando Feliciangeli",
                "hover":"Mba'éichapa",
                "thumb":"3_mini.png",
                "img":"3.jpeg",
                "content":"3_i.png"
            },
            {
                "name":"Pedro Linares",
                "hover":"Hola escultores/as",
                "thumb":"4_mini.png",
                "img":"4.jpg",
                "content":"4_i.png"
            },
            {
                "name":"Fernando Botero",
                "hover":"Soy Fernando",
                "thumb":"5_mini.png",
                "img":"5.jpeg",
                "content":"5_i.png"
            },
            {
                "name":"Pablo Picasso",
                "hover":"Soy Pablo",
                "thumb":"6_mini.png",
                "img":"6.jpeg",
                "content":"6_i.png"
            },
            {
                "name":"Leonardo da Vinci",
                "hover":"Bongiorno",
                "thumb":"7_mini.png",
                "img":"7.jpg",
                "content":"7_i.png"
            },
            {
                "name":"Bancos de ojos II",
                "hover":"¡Bonjour!",
                "thumb":"8_mini.png",
                "img":"8.jpg",
                "content":"8_i.png"
            },
            {
                "name":"Mamá",
                "hover":"¡Bonjour!",
                "thumb":"9_mini.png",
                "img":"9.jpeg",
                "content":"9_i.png"
            },
            {
                "name":"Alebrijes",
                "hover":"Hola escultores/as",
                "thumb":"10_mini.png",
                "img":"10.jpg",
                "content":"10_i.png"
            },
            {
                "name":"Alebrijes",
                "hover":"Hola escultores/as",
                "thumb":"11_mini.png",
                "img":"11.jpg",
                "content":"11_i.png"
            },
            {
                "name":"Caballo",
                "hover":"Hola soy Fernando",
                "thumb":"12_mini.png",
                "img":"12.jpg",
                "content":"12_i.png"
            },
            {
                "name":"Gato",
                "hover":"Hola soy Fernando",
                "thumb":"13_mini.png",
                "img":"13.jpg",
                "content":"13_i.png"
            },
            {
                "name":"Mandril y jóven",
                "hover":"Hola, soy Pablo",
                "thumb":"14_mini.png",
                "img":"14.jpg",
                "content":"14_i.png"
            },
            {
                "name":"Cabeza de toro",
                "hover":"Hola, soy Pablo",
                "thumb":"15_mini.png",
                "img":"15.jpeg",
                "content":"15_i.png"
            },
            {
                "name":"Petit Cheval",
                "hover":"Hola, soy Pablo",
                "thumb":"16_mini.png",
                "img":"16.jpeg",
                "content":"16_i.png"
            },
            {
                "name":"El caballo de Leonardo da Vinci",
                "hover":"Bongiorno",
                "thumb":"17_mini.png",
                "img":"17.jpeg",
                "content":"17_i.png"
            }
        ]
    },
    'autoestima': {
        bg: 'autoestima-bg',
        bgVert: 'autoestima-bg-vert',
        sub: 'ESCULTURAS',
        png: [1, 2, 3, 4, 5],
        actiTit: 'AUTORRETRATO',
        actiSub: 'Manos a la obra',
        color: '#FFc843',
        video: 'autoestima_acti.mp4',
        colorFg: '#548d87',
        question: '¿QUÉ ES UN AUTORRETRATO?',
        answer: 'Representación de la descripción que hace una persona de sí misma.\n"Al principio, el autorretrato es un aprendizaje y luego se vuelve una representación. he aquí como me veo, he aquí como pienso que me vi"\nPablo Picasso',
        content: 'Observa el video las veces que sea necesario, presta atención a las instrucciones y ejemplos.\nInspiráte en las obras de los artistas que viste anteriormente. ¿Te gustó Arcimboldo y su gusto por las frutas y vegetales? Suena delicioso hacer un autorretrato con uvas, naranjas, lechugas, tomates, zanahorias... Observa detalladamente cómo el artista usa las formas y colores de los vegetales o las frutas para incluirlos en sus retratos. Recuerda que puedes usar cualquier objeto o material\nYa que has descubierto el maravilloso niño o niña que eres, anímate a buscar por toda tu casa o el entorno en donde vives, aquellos objetos y cosas que puedan ayudarte a crear la imagen de tu autorretrato, sigue las instrucciones del video y utiliza los materiales del KIT DE CREATIVIDAD para esta actividad.\nEnvía una fotografía de tu creación al WhatsApp del grupo en la fecha indicada para exponerla y compartirla en la Galería de Arte',
        art: [
            {
                "name":"Olga Blinder",
                "hover":"Hola exploradores/as",
                "thumb": "1_mini.png",
                "img": "1.jpg",
                "content":"1_i.png",
            },
            {
                "name":"Vik Muniz",
                "hover":"Meu nome é Vik",
                "thumb": "2_mini.png",
                "img": "2.jpeg",
                "content":"2_i.png",
            },
            {
                "name":"Frida Kahlo",
                "hover":"Soy Frida",
                "thumb": "3_mini.png",
                "img": "3.jpg",
                "content":"3_i.png",
            },
            {
                "name":"Giuseppe Arcimboldo",
                "hover":"¡Ciao!",
                "thumb": "4_mini.png",
                "img": "4.jpeg",
                "content":"4_i.png",
            },
            {
                "name":"Vincent van Gogh",
                "hover":"Je suis Vincent",
                "thumb": "5_mini.png",
                "img": "5.jpeg",
                "content":"5_i.png",
            },
            {
                "name":"Sin título",
                "hover":"Hola exploradores/as",
                "thumb": "6_mini.png",
                "img": "6.jpeg",
                "content":"6_i.png",
            },
            {
                "name":"Sin título",
                "hover":"Hola exploradores/as",
                "thumb": "7_mini.png",
                "img": "7.jpeg",
                "content":"7_i.png",
            },
            {
                "name":"Autorretrato",
                "hover":"Meu nome é Vik",
                "thumb": "8_mini.png",
                "img": "8.jpg",
                "content":"8_i.png",
            },
            {
                "name":"Autorretrato como oriental",
                "hover":"Meu nome é Vik",
                "thumb": "9_mini.png",
                "img": "9.jpg",
                "content":"9_i.png",
            },
            {
                "name":"Autorretrato",
                "hover":"Meu nome é Vik",
                "thumb": "10_mini.png",
                "img": "10.jpg",
                "content":"10_i.png",
            },
            {
                "name":"Autorretrato con mono",
                "hover":"Soy Frida",
                "thumb": "11_mini.png",
                "img": "11.jpg",
                "content":"11_i.png",
            },
            {
                "name":"Mis pericos y yo",
                "hover":"Soy Frida",
                "thumb": "12_mini.png",
                "img": "12.png",
                "content":"12_i.png",
            },
            {
                "name":"Diego en mis pensamientos",
                "hover":"Soy Frida",
                "thumb": "13_mini.png",
                "img": "13.jpg",
                "content":"13_i.png",
            },
            {
                "name":"La primavera",
                "hover":"¡Ciao!",
                "thumb": "14_mini.png",
                "img": "14.jpg",
                "content":"14_i.png",
            },
            {
                "name":"Retrato de Rodolfo II con traje de vertumno",
                "hover":"¡Ciao!",
                "thumb": "15_mini.png",
                "img": "15.png",
                "content":"15_i.png",
            },
            {
                "name":"El Bibliotecario",
                "hover":"¡Ciao!",
                "thumb": "16_mini.png",
                "img": "16.png",
                "content":"16_i.png",
            },
            {
                "name":"Autorretrato dedicado a Gaugin",
                "hover":"Je suis Vincent",
                "thumb": "17_mini.png",
                "img": "17.jpg",
                "content":"17_i.png",
            },
            {
                "name":"Autorretrato con sombrero de paja",
                "hover":"Je suis Vincent",
                "thumb": "18_mini.png",
                "img": "18.jpg",
                "content":"18_i.png",
            },
            {
                "name":"Autorretrato como pintor",
                "hover":"Je suis Vincent",
                "thumb": "19_mini.png",
                "img": "19.png",
                "content":"19_i.png",
            }
        ]
    },
    'ambiental': {
        bg: 'ambiental-bg',
        bgVert: 'ambiental-bg-vert',
        sub: 'Arte y naturaleza',
        png: [1, 2, 3, 4, 5, 6],
        actiTit: 'ARTE Y NATURALEZA',
        actiSub: 'Convertite en expedicionario botánico',
        color: '#00b2e3',
        video: 'ambiental_acti.mp4',
        colorFg: '#fedadf',
        question: '¿QUÉ ES UN ALBUM DE EXPEDICIONARIO?',
        answer: 'Es un libro ilustrado, con varias páginas en las que se pueden apreciar los dibujos e ilustraciones detalladas de diferentes plantas que son desconocidas o causan admiración.',
        content: 'Comienza a crear tu álbum de expedicionario botánico, sal a explorar en compañía de tus padres y escoge 4 plantas diferentes, pueden ser flores, hojas, arbustos, etc.\nObserva muy bien cada partecita de las hojas, los pétalos, los tallos y las diferencias entre sus colores. Dibuja con el lápiz las 4 plantas por separado en las hojas blancas que vienen en el kit de creatividad, luego colorea con los lápices de colores o con los marcadores.\nAl finalizar, busca el nombre de cada planta y escríbelo junto con tu firma. Luego toma una fotografía de tu dibujo preferido y envíala a MAPA con tu nombre completo.',
        art: [{
            "name":"Expediciones Botánicas",
            "hover":"¡Hola explorador/ra!",
            "thumb":"1_mini.png",
            "img":"1.jpg",
            "content":"1_i.png"
        },
            {
                "name":"Ysanne Gayet",
                "hover":"Hola, soy Ysanne",
                "thumb":"2_mini.png",
                "img":"2.jpg",
                "content":"2_i.png"
            },
            {
                "name":"Esteban Klassen",
                "hover":"Mba'éichapa",
                "thumb":"3_mini.png",
                "img":"3.jpg",
                "content":"3_i.png"
            },
            {
                "name":"Michael Burt",
                "hover":"Mba'éichapa",
                "thumb":"4_mini.png",
                "img":"4.png",
                "content":"4_i.png"
            },
            {
                "name":"Abel Rodríguez",
                "hover":"Hola, soy Abel",
                "thumb":"5_mini.png",
                "img":"5.jpg",
                "content":"5_i.png"
            },
            {
                "name":"Passiflora Edulis, Mburucuyá",
                "hover":"¡Hola explorador/a!",
                "thumb":"6_mini.png",
                "img":"6.jpg",
                "content":"6_i.png"
            },
            {
                "name":"Quina",
                "hover":"¡Hola explorador/a!",
                "thumb":"7_mini.png",
                "img":"7.jpg",
                "content":"7_i.png"
            },
            {
                "name":"Ilex paraguarienses",
                "hover":"¡Hola explorador/a!",
                "thumb":"8_mini.png",
                "img":"8.jpg",
                "content":"8_i.png"
            },
            {
                "name":"Amigos del Chaco",
                "hover":"Soy Ysanne",
                "thumb":"9_mini.png",
                "img":"9.jpg",
                "content":"9:i.jpg"
            },
            {
                "name":"Y (Water)",
                "hover":"Soy Ysanne",
                "thumb":"10_mini.png",
                "img":"10.png",
                "content":"10_i.png"
            },
            {
                "name":"El último refugio",
                "hover":"Soy Ysanne",
                "thumb":"11_mini.png",
                "img":"11.jpg",
                "content":"11_i.png"
            },
            {
                "name":"Sin título",
                "hover":"Soy Esteban",
                "thumb":"12_mini.png",
                "img":"12.jpg",
                "content":"12_i.png"
            },
            {
                "name":"Sin título",
                "hover":"Soy Esteban",
                "thumb":"13_mini.png",
                "img":"13.jpg",
                "content":"13_i.png"
            },
            {
                "name":"Sin título",
                "hover":"Hola niños/as",
                "thumb":"14_mini.png",
                "img":"14.jpg",
                "content":"14_i.png"
            },
            {
                "name":"El árbol de la vida y la abundancia",
                "hover":"¿Qué tal?",
                "thumb":"15_mini.png",
                "img":"15.jpg",
                "content":"15_i.png"
            },
            {
                "name":"La Maloka",
                "hover":"¿Qué tal?",
                "thumb":"16_mini.png",
                "img":"16.jpg",
                "content":"16_i.png"
            }]
    },
    'colaboracion': {
        bg: 'colaboracion-bg',
        bgVert: 'colaboracion-bg-vert',
        sub: 'Arte Mural',
        png: [1, 2, 3, 4, 5],
        actiTit: 'ARTE MURAL',
        actiSub: 'Alegro mi ciudad',
        color: '#da3ab3',
        video: 'colaboracion_acti.mp4',
        colorFg: '#002f32',
        question: '¿QUÉ ES UN COLLAGE?',
        answer: 'Es una técnica artística que contiene distintos fragmentos, imágenes y pedazos de diferentes materiales unidos o pegados entre sí sobre una superficie o fondo.',
        content: '¿Estás listo para convertirte en un muralista? Entre todos vamos a intervenir y embellecer un gran muro o pared de nuestra ciudad. Presta atención a las instrucciones del video.\nVamos a emplear la técnica del collage, puedes elegir entre pedazos de papel de colores, recortes de revistas o diarios, fotografías, recortes de tus propios dibujos, pedazos de otros materiales como esponja, cartón, plástico, etc.\n El tema para el mural es contarle a tu ciudad ¿qué es Mapa? ¿qué significa Mapa para vos? ¿qué aprendiste en Mapa?\nAl finalizar tu grandiosa obra de arte, realiza un video corto o una nota de voz explicando tu colaboración en este gran mural. Tómale una fotografía y envía las dos cosas a MAPA.',
        art: [{
            "name":"PrizPrazPruz",
            "hover":"Mba'éichapa",
            "thumb":"1_mini.png",
            "img": "1.jpg",
            "content":"1_i.png"
        },
            {
                "name":"JR",
                "hover":"Bonjour",
                "thumb":"2_mini.png",
                "img":"2.jpg",
                "content":"2_i.png"
            },
            {
                "name":"Michelangelo Buonarroti",
                "hover":"Buongiorno ",
                "thumb":"3_mini.png",
                "img":"3.jpg",
                "content":"3_i.png"
            },
            {
                "name":"Diego Rivera",
                "hover":"Soy Diego",
                "thumb":"4_mini.png",
                "img":"4.jpg",
                "content":"4_i.png"
            },
            {
                "name":"Quyquyhó",
                "hover":"Mba'éichapa",
                "thumb":"5_mini.png",
                "img":"5.jpg",
                "content":"5_i.png"
            },
            {
                "name":"Sin título",
                "hover":"Mba'éichapa",
                "thumb":"6_mini.png",
                "img":"6.jpg",
                "content":"6_i.png"
            },
            {
                "name":"Biodiversidad",
                "hover":"Mba'éichapa",
                "thumb":"7_mini.png",
                "img":"7.jpg",
                "content":"7_i.png"
            },
            {
                "name":"Las mujeres son heroínas, Brasil",
                "hover":"Bonjour",
                "thumb":"8_mini.png",
                "img":"8.jpg",
                "content":"8_i.png"
            },
            {
                "name":"Las mujeres son heroínas, Brasil",
                "hover":"Bonjour",
                "thumb":"9_mini.png",
                "img":"9.jpg",
                "content":"9_i.png"
            },
            {
                "name":"Cara a cara, Israel y Palestina",
                "hover":"Bonjour",
                "thumb":"10_mini.png",
                "img":"10.jpeg",
                "content":"10_i.png"
            },
            {
                "name":"Bóveda de la Capilla Sixtina",
                "hover":"Buongiorno",
                "thumb":"11_mini.png",
                "img":"11.jpg",
                "content":"11_i.png"
            },
            {
                "name":"Sueño de una tarde dominical en la Alameda Central",
                "hover":"Soy Diego",
                "thumb":"12_mini.png",
                "img":"12.jpg",
                "content":"12_i.png"
            },
            {
                "name":"Los frutos",
                "hover":"Soy Diego",
                "thumb":"13_mini.png",
                "img":"13.jpg",
                "content":"13_i.png"
            },
            {
                "name":"Cantando el corrido",
                "hover":"Soy Diego",
                "thumb":"14_mini.png",
                "img":"14.jpg",
                "content":"14_i.png"
            }]
    }
}


export default class SubScreenGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showVideo: false,
            player: null,
            modalInfo: {},
            config: WORLDS_DATA[this.props.world],
            vertical: false,
            mobile: false
        }
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
            try {
                let elem = document.getElementById('mat').firstChild;
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                } else if (elem.webkitRequestFullscreen) {
                    elem.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) {
                    elem.msRequestFullscreen();
                }
            } catch (e) {}
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

    showInfo = (data) => {
        this.setState({
            showModal: true,
            modalInfo: data
        }, () => this.setModalsBg());
    }

    setModalsBg = () => {
        let com = this;
        setTimeout(function (com) {
            let child = document.getElementsByClassName('world-modal')[0];
            try {
                child.firstElementChild.classList.add(com.state.mobile && com.state.vertical ?
                    com.state.config.bgVert : com.state.config.bg);
                child.firstElementChild.firstElementChild.classList.add(com.state.mobile && com.state.vertical ?
                    com.state.config.bgVert : com.state.config.bg);
            } catch (e) {}
        }, 2000, com);
    }

    getModalContent = () => {
        const btnClose = <button className={'sub-btn close-btn'} onClick={() => this.setState({showModal: false})}/>;
        switch (this.props.world) {
            case 'generosidad':
                return (
                    <div className={'row nomargin world-modal-con nopadding generosidad-bg'}>
                        <div className={'col-12 btn-modal-con'}>{ btnClose }</div>
                        <div className={'col-md-6 world-modal-img-con'}>
                            <img alt={'info-img'} src={'/static/img/exploregallery/' + this.props.world + '/' + this.state.modalInfo.img} />
                        </div>
                        <div className={'col-md-6 world-modal-info-con generosidad-info d-block'}>
                            <img className={this.state.mobile && !this.state.vertical ? 'data-img-alt' : 'data-img'} alt={'info'}
                                 src={'/static/img/exploregallery/' + this.props.world + '/' + this.state.modalInfo.content} />
                        </div>
                    </div>
                );
            case 'autoestima':
                return (
                    <div className={'row nomargin world-modal-con nopadding autoestima-bg'}>
                        <div className={'col-12 btn-modal-con'}>{ btnClose }</div>
                        <div className={'col-md-6 world-modal-img-con'}>
                            <img alt={'info-img'} src={'/static/img/exploregallery/' + this.props.world + '/' + this.state.modalInfo.img} />
                        </div>
                        <div className={'col-md-6 world-modal-info-con d-block'}>
                            <img className={this.state.mobile && !this.state.vertical ? 'data-img-alt' : 'data-img'} alt={'info'}
                                 src={'/static/img/exploregallery/' + this.props.world + '/' + this.state.modalInfo.content} />
                        </div>
                    </div>
                );
            case 'colaboracion':
                return (
                    <div className={'row nomargin world-modal-con nopadding colaboracion-bg'}>
                        <div className={'col-12 btn-modal-con'}>{ btnClose }</div>
                        <div className={'col-md-6 world-modal-info-con d-block'}>
                            <img className={this.state.mobile && !this.state.vertical ? 'data-img-alt' : 'data-img'} alt={'info'}
                                 src={'/static/img/exploregallery/' + this.props.world + '/' + this.state.modalInfo.content} />
                        </div>
                        <div className={'col-md-6 world-modal-img-con'}>
                            <img alt={'info-img'} src={'/static/img/exploregallery/' + this.props.world + '/' + this.state.modalInfo.img} />
                        </div>
                    </div>
                );
            case 'ambiental':
                return (
                    <div className={'row nomargin world-modal-con nopadding ambiental-bg'}>
                        <div className={'col-12 btn-modal-con'}>{ btnClose }</div>
                        <div className={'col-md-6 world-modal-info-con d-block'}>
                            <img className={this.state.mobile && !this.state.vertical ? 'data-img-alt' : 'data-img'} alt={'info'}
                                 src={'/static/img/exploregallery/' + this.props.world + '/' + this.state.modalInfo.content} />
                        </div>
                        <div className={'col-md-6 world-modal-img-con'}>
                            <img alt={'info-img'} src={'/static/img/exploregallery/' + this.props.world + '/' + this.state.modalInfo.img} />
                        </div>
                    </div>
                );
            default:
                return '';
        }

    }

    componentDidMount = () => {
        this.setState({
            vertical: window.innerWidth < window.innerHeight,
            mobile: window.innerWidth < 1366
        });
        window.addEventListener('resize', this.componentDidMount);
        document.body.style.overflow = 'initial';
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.componentDidMount);
    }

    render() {
        const config = this.state.config;
        const carousel = {
            dots: false,
            infinite: true,
            arrows: true,
            slidesToShow: this.state.mobile ? 3 : 5,
            slidesToScroll: 3,
        };
        const carousel_mobile = {
            dots: false,
            infinite: true,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            useTransform: false
        };
        return (
            <div>
                <MobileNavBar/>
                <Link to={'/'}>
                    <img alt={'logo'} className={'nav-logo d-none d-md-block'} src={'/static/img/home/mapa.svg'} />
                </Link>
                <ReactModal
                    ariaHideApp={false}
                    isOpen={this.state.showVideo}
                    portalClassName={'explore-sub-modal'}
                    contentLabel={'Video'}>
                    {this.state.player}
                    <button className={'ml-10 sub-btn close-btn'} onClick={this.hideVideo}/>
                </ReactModal>
                <ReactModal
                    ariaHideApp={false}
                    isOpen={this.state.showModal}
                    portalClassName={'world-modal'}
                    contentLabel={'Info'}>
                    {
                        this.getModalContent()
                    }
                </ReactModal>
                <div className={'row nomargin ssg-car ssg-bg mtnav ' + (this.state.mobile && this.state.vertical ? config.bgVert : config.bg)}>
                    {
                        this.state.mobile && !this.state.vertical ?
                            <div className={'col-12'}>
                                <img className={'ssg-title-alt'} src={'/static/img/exploregallery/' +
                                this.props.world + '/title.png' } alt={config.sub} />
                            </div> :
                            <div className={'col-12'}>
                                <img className={'ssg-title'} src={'/static/img/exploregallery/' +
                                this.props.world + '/title.png' } alt={config.sub} />
                            </div>
                    }
                    {
                        config.png.map((p) =>
                            <img alt={'png'} src={'/static/img/exploregallery/' +
                                 this.props.world + '/' + this.props.world + '-' + p + '.png'}
                                 className={this.props.world + '-' + p + ' ssg-png'}
                                 key={this.props.world + '-' + p}/>
                        )
                    }
                    <div className={'col-2 col-md-1'} />
                    {
                        this.state.mobile && this.state.vertical ?
                            <Slider className={'col-8 col-md-10 ssg-car1 ssg-car2'} {...carousel_mobile}>
                                {
                                    config.art.map((a, k) =>
                                        k%3 === 1 ?
                                            <div key={'mob' + k}>
                                                <div className={'ssg-car-item ssg-car-item2'}
                                                     onClick={() => this.showInfo(a)}
                                                     key={'mob' + a.name + k} data-title={a.hover}>
                                                    <img
                                                        alt={'png'} src={'/static/img/exploregallery/' +
                                                    this.props.world + '/' + a.thumb} />
                                                </div>
                                                {
                                                    config.art[k+1] === undefined ? '' :
                                                        <div className={'ssg-car-item ssg-car-item2'}
                                                             key={'mob' + config.art[k+1].name + (k+1)}
                                                             onClick={() => this.showInfo(config.art[k+1])}
                                                             data-title={config.art[k+1].hover}>
                                                            <img
                                                                alt={'png'} src={'/static/img/exploregallery/' +
                                                            this.props.world + '/' + config.art[k+1].thumb} />
                                                        </div>
                                                }
                                                {
                                                    config.art[k+2] === undefined ? '' :
                                                        <div className={'ssg-car-item ssg-car-item2'}
                                                             key={'mob' + config.art[k+2].name + (k+2)}
                                                             onClick={() => this.showInfo(config.art[k+2])}
                                                             data-title={config.art[k+2].hover}>
                                                            <img
                                                                alt={'png'} src={'/static/img/exploregallery/' +
                                                            this.props.world + '/' + config.art[k+2].thumb} />
                                                        </div>
                                                }
                                            </div>
                                            : ''
                                    )
                                }
                            </Slider>
                            :
                            <Slider className={'col-8 col-md-10 ssg-car1'} {...carousel}>
                                {
                                    config.art.map((a) =>
                                        <div className={'ssg-car-item'}
                                             onClick={() => this.showInfo(a)}
                                             key={'nor' + a.name} data-title={a.hover}>
                                            <img
                                                alt={'png'} src={'/static/img/exploregallery/' +
                                            this.props.world + '/' + a.thumb} />
                                        </div>
                                    )
                                }
                            </Slider>
                    }
                    <div className={'col-2 col-md-1'} />
                </div>
                {/* SECCION GALERIA DE EXPLORADORES */}
                {
                    this.props.world === 'autoestima' || this.props.world === 'generosidad'
                   /* || this.props.world === 'colaboracion'*/ || this.props.world === 'ambiental'
                        ?
                            this.state.mobile && this.state.vertical ?
                                <div className={'row nomargin entrance-bg-alt'}>
                                    <div className={'col-12'}>
                                        <Link to={'/' + this.props.world + '/galeria/exploradores/pilar'}>
                                            <img alt={'pilar'} className={'entrance-icon'} src={'/static/img/kidsgallery/pilar.png'} />
                                        </Link>
                                    </div>
                                    <div className={'col-12'}>
                                        <Link to={'/' + this.props.world + '/galeria/exploradores/encarnacion'}>
                                            <img alt={'encarnacion'} className={'entrance-icon'} src={'/static/img/kidsgallery/encarnacion.png'} />
                                        </Link>
                                    </div>
                                </div>
                                :
                                <div className={'row nomargin entrance-bg'}>
                                    <div className={'col-4'} />
                                    <div className={'col-2'}>
                                        <Link to={'/' + this.props.world + '/galeria/exploradores/pilar'}>
                                            <img alt={'pilar'} className={'entrance-icon'} src={'/static/img/kidsgallery/pilar.png'} />
                                        </Link>
                                    </div>
                                    <div className={'col-2'}>
                                        <Link to={'/' + this.props.world + '/galeria/exploradores/encarnacion'}>
                                            <img alt={'encarnacion'} className={'entrance-icon'} src={'/static/img/kidsgallery/encarnacion.png'} />
                                        </Link>
                                    </div>
                                    <div className={'col-4'} />
                                </div>
                         : ''
                }
                {/* SECCION ACTIVIDADES */}
                {
                    this.props.world === 'autoestima' || this.props.world === 'generosidad'
                     || this.props.world === 'colaboracion' || this.props.world === 'ambiental'
                        ?
                        <div className={'acti-bg row nomargin'}>
                            <div className={'col-1 d-none d-md-block'} />
                            <div className={'col-12 col-md-10 row nomargin nopadding'}>
                                <div className={'col-md-7'}>
                                    <h1 className={'acti-tit'} style={{color: config.color}}>{config.actiTit}</h1>
                                    <div className={'row nomargin nopadding'}>
                                        <h2 className={'acti-sub col-6 nopadding'}>{'Actividad 1'}</h2>
                                        <div className={'col-6 acti-ex ' + (this.props.world + '-sub-bg')}>
                                            <h3 className={'acti-sub-sub'} style={{color: config.colorFg}}>{config.actiSub}</h3>
                                        </div>
                                    </div>
                                    <div className={'row nomargin nopadding acti-des'}>
                                        <img alt={'muestra'} src={'/static/img/exploregallery/' +
                                        this.props.world + '/acti-img.png'} className={'col-md-3 col-6'} />
                                        <h3 className={'col-md-4 col-6'} style={{color: config.color}}>{config.question}</h3>
                                        <div className={'col-md-5'}>
                                            {config.answer.split('\n').map((t, k) => <p key={'des-' + k}>{t}</p>)}
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => this.showVideo(config.video)}
                                     className={'col-md-5 acti-vid-con ' + (this.props.world + '-vid-bg')}>
                                    <img alt={'video'} src={'/static/img/exploregallery/' +
                                    this.props.world + '/acti-vid-fg.png'} />
                                </div>
                                <div className={'col-md-5 ssg-se acti-im'}>
                                    <img alt={'des'} src={'/static/img/exploregallery/' +
                                    this.props.world + '/acti-des.png'} />
                                </div>
                                <div className={'col-md-7 acti-con ssg-se'}>
                                    {
                                        config.content.split('\n').map((p, k) =>
                                            <p key={'cn-' + k}><span style={{color: config.color}}>{(k+1) + '. '}</span>{p}</p>)
                                    }
                                </div>
                            </div>
                            <div className={'col-1 d-none d-md-block'} />
                        </div> : ''
                }
            </div>
        );
    }
}