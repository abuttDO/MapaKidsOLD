import React, {Component} from "react/cjs/react.production.min";
import '../Styles/SubScreenGalleryStyles.css';
import MobileNavBar from "../Containers/MobileNavBar";
import Slider from "react-slick";
import ReactModal from "react-modal";
import ReactPlayer from "react-player";
import {Link} from "react-router-dom";


const WORLDS_DATA = {
    'ambiental': {
        bg: 'ambiental-kids-bg',
        bgVert: 'ambiental-kids-bg kids-vert',
        png: [1],
        asucentral: [{"name":	"Agatha Sophia Colman"	,"img":	"Agatha_Sophia_Colman.jpeg"	,"thumb":	"Agatha_Sophia_Colman_Rojas.png"	},
            {"name":	"Anibal Mendoza"	,"img":	"Anibal_Mendoza.jpeg"	,"thumb":	"Anibal_Mendoza.png"	},
            {"name":	"Anna Victoria Espinoza"	,"img":	"Anna_Victoria_Espinoza.jpeg"	,"thumb":	"Anna_Victoria_Espinoza_Campuzano.png"	},
            {"name":	"Annabella Pavetti"	,"img":	"Annabella_Pavetti.jpeg"	,"thumb":	"Annabella_Pavetti.png"	},
            {"name":	"Camila Castillo Gonzalez"	,"img":	"Camila_Castillo_Gonzalez.jpeg"	,"thumb":	"Camila_Castillo_Gonzalez.png"	},
            {"name":	"Camila Lisset Thevenet"	,"img":	"Camila_Lisset_Thevenet.jpeg"	,"thumb":	"Camila_Lisset_Thevenet_Blase_Peralta.png"	},
            {"name":	"Cristiano Valentin LeonGarcia"	,"img":	"Cristiano_Valentin_Leon_Garcia.jpeg"	,"thumb":	"Cristiano_Valentin_Leon_Garcia.png"	},
            {"name":	"Diego AdrianPalacios Dominguez"	,"img":	"Diego_Adrian_Palacios_Dominguez.jpeg"	,"thumb":	"Diego_Adrian_Palacios_Dominguez.png"	},
            {"name":	"Dylan Ezequiel Martinez Lagiu"	,"img":	"Dylan_Ezequiel_Martinez_Lagiu.jpeg"	,"thumb":	"Dylan_Ezequiel_Martinez_Lagiu.png"	},
            {"name":	"Fabian Gimenez"	,"img":	"Fabian_Gimenez.jpeg"	,"thumb":	"Fabian_Gimenez.png"	},
            {"name":	"Guillermo Micael Riquelme"	,"img":	"Guillermo_Micael_Riquelme.jpeg"	,"thumb":	"Guillermo_Micael_Riquelme.png"	},
            {"name":	"Janeth Aleli Canhete Amarilla"	,"img":	"Janeth_Aleli_Canhete_Amarilla.jpeg"	,"thumb":	"Janeth_Aleli_Cañete_Amarilla.png"	},
            {"name":	"Jesus Emiliano Barrios Mendez"	,"img":	"Jesus_Emiliano_Barrios_Mendez.jpeg"	,"thumb":	"Jesus_Emiliano-Barrios_Mendez.png"	},
            {"name":	"Martinna Alejandra Sanchez Ibanez"	,"img":	"Martinna_Alejandra_Sanchez_Ibanez.jpeg"	,"thumb":	"Martinna_Alejandra_Sanchez_Ibañez.png"	},
            {"name":	"Melisa Lujan Orue Torales"	,"img":	"Melisa_Lujan_Orue_Torales.jpeg"	,"thumb":	"Melisa_Lujan_Orue_Torales.png"	},
            {"name":	"Santino Mule Ortega"	,"img":	"Santino_Mule_Ortega.jpeg"	,"thumb":	"Santino_Mule_Ortega.png"	},
            {"name":	"Thiago Giuliano Alcaraz Gaona"	,"img":	"Thiago_Giuliano_Alcaraz_Gaona.jpeg"	,"thumb":	"Thiago_Giuliano_Alcaraz_Gaona.png"	},
            {"name":	"Violeta Lupita Aquino Marecos"	,"img":	"Violeta_Lupita_Aquino_Marecos.jpeg"	,"thumb":	"Violeta_Lupita_Aquino_Marecos.png"	},
        ],
        remansito: [{"name":	"Ahilem Abigail Duarte Vera"	,"img":	"Ahilem_Abigail_Duarte_Vera.jpg"	,"thumb":	"Ahilem_Abigail_Duarte_Vera.png"	},
            {"name":	"Alan Lopez Garcia"	,"img":	"Alan_Lopez_Garcia.jpg"	,"thumb":	"Alan_Lopez_Garcia.png"	},
            {"name":	"Diana Soledad Castillo"	,"img":	"Diana_Soledad_Castillo.jpg"	,"thumb":	"Diana_Soledad_Castillo.png"	},
            {"name":	"Fabiola Garay Irala"	,"img":	"Fabiola_Garay_Irala.jpg"	,"thumb":	"Fabiola_Garay_Irala.png"	},
            {"name":	"Giovani Recalde"	,"img":	"Giovani_Recalde.jpg"	,"thumb":	"Giovani_Recalde.png"	},
            {"name":	"Iara Antonella Balbuena"	,"img":	"Iara_Antonella_Balbuena.jpg"	,"thumb":	"Iara_Antonella_Balbuena.png"	},
            {"name":	"Jesus Lopez Garcia"	,"img":	"Jesus_Lopez_Garcia.jpg"	,"thumb":	"Jesus_Lopez_Garcia.png"	},
            {"name":	"Jonathan Vera"	,"img":	"Jonathan_Vera.jpg"	,"thumb":	"Jonathan_Vera.png"	},
            {"name":	"Juan Ivan Aquino Cantero"	,"img":	"Juan_Ivan Aquino_Cantero.jpg"	,"thumb":	"Juan_Ivan_Aquino_Cantero.png"	},
            {"name":	"Juana Ramona Marecos"	,"img":	"Juana_Ramona_Marecos.jpg"	,"thumb":	"Juana_Ramona_Marecos.png"	},
            {"name":	"Karen Paola Rotela"	,"img":	"Karen_Paola_Rotela.jpg"	,"thumb":	"Karen_Paola_Rotela.png"	},
            {"name":	"Karoll Magdalena Arzamendia"	,"img":	"Karoll_Magdalena_Arzamendia.jpg"	,"thumb":	"Karoll_Magdalena_Arzamendia.png"	},
            {"name":	"Leonardo Lopez Garcia"	,"img":	"Leonardo_Lopez_Garcia.jpg"	,"thumb":	"Leonardo_Lopez_Garcia.png"	},
            {"name":	"Liz Fabiola Garay Arzamendia"	,"img":	"Liz_Fabiola_Garay_Arzamendia.jpg"	,"thumb":	"Liz_Fabiola_Garay_Arzamendia.png"	},
            {"name":	"Luz Valentina Benitez Romero"	,"img":	"Luz_Valentina_Benitez_Romero.jpg"	,"thumb":	"Luz_Valentina_Benitez_Romero.png"	},
            {"name":	"Marcos Daniel Cabral"	,"img":	"Marcos_Daniel_Cabral.jpg"	,"thumb":	"Marcos_Daniel_Cabral.png"	},
            {"name":	"Mathias Emiliano Galeano"	,"img":	"Mathias_Emiliano_Galeano.jpg"	,"thumb":	"Mathias_Emiliano_Galeano.png"	},
            {"name":	"Matias Lopez Garcia"	,"img":	"Matias_Lopez_Garcia.jpg"	,"thumb":	"Matias_Lopez_Garcia.png"	},
            {"name":	"Mia Anahi Rotela"	,"img":	"Mia_Anahi_Rotela.jpg"	,"thumb":	"Mia_Anahi_Rotela.png"	},
            {"name":	"Micaela Lujan Vega"	,"img":	"Micaela_Lujan_Vega.jpg"	,"thumb":	"Micaela_Lujan_Vega.png"	},
            {"name":	"Milagros Ramona Marecos"	,"img":	"Milagros_Ramona_Marecos.jpg"	,"thumb":	"Milagros_Ramona_Marecos.png"	},
            {"name":	"Milagros Valentina Florentin"	,"img":	"Milagros_Valentina_Florentin.jpg"	,"thumb":	"Milagros_Valentina_Florentin.png"	},
            {"name":	"Nahiara Beatriz Martinez"	,"img":	"Nahiara_Beatriz_Martinez.jpg"	,"thumb":	"Nahiara_Beatriz_Martinez.png"	},
            {"name":	"Samira Noemi Cabral"	,"img":	"Samira_Noemi_Cabral.jpg"	,"thumb":	"Samira_Noemi_Cabral.png"	},
            {"name":	"Selene Lujan Galeano"	,"img":	"Selene_Lujan_Galeano.jpg"	,"thumb":	"Selene_Lujan_Galeano.png"	},
            {"name":	"Tamara Coiteux"	,"img":	"Tamara_Coiteux.jpg"	,"thumb":	"Tamara_Coiteux.png"	},
            {"name":	"Thiago Daniel Villanueva"	,"img":	"Thiago_Daniel_Villanueva.jpg"	,"thumb":	"Thiago_Daniel_Villanueva.png"	},
            {"name":	"Valeria Rodriguez"	,"img":	"Valeria_Rodriguez.jpg"	,"thumb":	"Valeria_Rodriguez.png"	},
            {"name":	"Wilma Elizabeth Paredes Cano"	,"img":	"Wilma_Elizabeth_Paredes_Cano.jpg"	,"thumb":	"Wilma_Elizabeth_Paredes_Cano.png"	},
            {"name":	"Zoe Ayala Duarte"	,"img":	"Zoe_Ayala_Duarte.jpg"	,"thumb":	"Zoe_Ayala_Duarte.png"	},
        ],
        villarrica: [{"name":	"Alam Portillo"	,"img":	"Alam_Portillo.jpeg"	,"thumb":	"Alam_Portillo.png"	},
            {"name":	"Angelina Lujar Aguilar"	,"img":	"Angelina_Lujar_Aguilar.jpeg"	,"thumb":	"Angelina_Lujan_Aguilar.png"	},
            {"name":	"Ariel Gonzalez"	,"img":	"Ariel_Gonzalez.jpeg"	,"thumb":	"Ariel_Gonzalez.png"	},
            {"name":	"Armando Almiron"	,"img":	"Armando_Almiron.jpeg"	,"thumb":	"Armando_Almiron.png"	},
            {"name":	"Bianca Alderete"	,"img":	"Bianca_Alderete.jpeg"	,"thumb":	"Bianca_Alderete.png"	},
            {"name":	"Brisa Aquino"	,"img":	"Brisa_Aquino.jpeg"	,"thumb":	"Brisa_Aquino_1.png"	},
            {"name":	"Celsa Bolaños"	,"img":	"Celsa_Bolaños.jpeg"	,"thumb":	"Celsa_Bolaños.png"	},
            {"name":	"David Ayala"	,"img":	"David_Ayala.jpg"	,"thumb":	"David_Ayala.png"	},
            {"name":	"Diego Ayala"	,"img":	"Diego_Ayala.jpg"	,"thumb":	"Diego_Ayala.png"	},
            {"name":	"Emily Martinez"	,"img":	"Emily_Martinez.jpeg"	,"thumb":	"Emily_Martinez.png"	},
            {"name":	"Fiorella Lujan Achar"	,"img":	"Fiorella_Lujan_Achar.jpeg"	,"thumb":	"Fiorella_Lujan_Achar.png"	},
            {"name":	"Gabriela Raquel Moreno"	,"img":	"Gabriela_Raquel_Moreno.jpeg"	,"thumb":	"Gabriela_Raquel_Moreno.png"	},
            {"name":	"Genesis Olmedo"	,"img":	"Genesis_Olmedo.jpeg"	,"thumb":	"Genesis_Olmedo.png"	},
            {"name":	"Jeremias Benitez"	,"img":	"Jeremias_Benitez.jpeg"	,"thumb":	"Jeremias_Benitez.png"	},
            {"name":	"Jonathan Sala"	,"img":	"Jonathan_Sala.jpeg"	,"thumb":	"Jonathan_Sala.png"	},
            {"name":	"Liz Gimenez"	,"img":	"Liz_Gimenez.jpeg"	,"thumb":	"Liz_Gimenez.png"	},
            {"name":	"Liz Yamila"	,"img":	"Liz_Yamila.jpeg"	,"thumb":	"Liz_Yamila.png"	},
            {"name":	"Lujan Aquino"	,"img":	"Lujan_Aquino.jpeg"	,"thumb":	"Lujan_Aquino.png"	},
            {"name":	"Maggie Aileen Ayala"	,"img":	"Maggie_Aileen_Ayala.jpeg"	,"thumb":	"Maggie_Aileen_Ayala.png"	},
            {"name":	"Marcos Cuevas"	,"img":	"Marcos_Cuevas.jpeg"	,"thumb":	"Marcos_Cuevas.png"	},
            {"name":	"Regina Cosentino"	,"img":	"Regina_Cosentino.jpeg"	,"thumb":	"Regina_Cosentino.png"	},
            {"name":	"Tatiana Ayleen Torres"	,"img":	"Tatiana_Ayleen_Torres.jpeg"	,"thumb":	"Tatiana_Ayelen_Torres.png"	},
            {"name":	"Uriel Gimenez"	,"img":	"Uriel_Gimenez.jpeg"	,"thumb":	"Uriel_Gimenez.png"	},
            {"name":	"Yessica Duarte"	,"img":	"Yessica_Duarte.jpeg"	,"thumb":	"Yessica_Duarte.png"	},
        ],
        villeta: [{"name":	"Antonella Gamarra"	,"img":	"Antonella_Gamarra.jpeg"	,"thumb":	"Antonella_Gamarra.png"	},
            {"name":	"Bethania Ayala"	,"img":	"Bethania_Ayala.jpeg"	,"thumb":	"Bethania_Ayala.png"	},
            {"name":	"Bianca Magali Garcia	","img":	"Bianca_Magali_Garcia.jpeg"	,"thumb":	"Bianca_Magali_Garcia.png"	},
            {"name":	"Edison Centurion"	,"img":	"Edison_Centurion.jpeg"	,"thumb":	"Edison_Centurion.png"	},
            {"name":	"Guadalupe Jazmin Acosta"	,"img":	"Guadalupe_Jazmin_Acosta.jpeg"	,"thumb":	"Guadalupe_Jazmin_Acosta.png"	},
            {"name":	"Ivania Insfran"	,"img":	"Ivania_Insfran.jpeg"	,"thumb":	"Ivania_Insfran.png"	},
            {"name":	"Jimena Gonzalez"	,"img":	"Jimena_Gonzalez.jpeg"	,"thumb":	"Jimena_Gonzalez.png"	},
            {"name":	"Jonathan Gaston"	,"img":	"Jonathan_Gaston.jpeg"	,"thumb":	"Jonathan_Gaston.png"	},
            {"name":	"Junior Gimenez"	,"img":	"Junior_Gimenez.jpeg"	,"thumb":	"Junior_Gimenez.png"	},
            {"name":	"Kiara Rivas"	,"img":	"Kiara_Rivas.jpeg"	,"thumb":	"Kiara_Lujan.png"	},
            {"name":	"Kiara Lujan"	,"img":	"Kiara_Lujan.jpeg"	,"thumb":	"Kiara_Rivas.png"	},
            {"name":	"Luz Gamarra"	,"img":	"Luz_Gamarra.jpeg"	,"thumb":	"Luz_Gamarra.png"	},
            {"name":	"María Lopez"	,"img":	"María_Lopez.jpeg"	,"thumb":	"Maria_Lopez.png"	},
            {"name":	"Omar Nicolas"	,"img":	"Omar_Nicolas.jpeg"	,"thumb":	"Omar_Nicolas.png"	},
            {"name":	"Ornella Gomez"	,"img":	"Ornella_Gomez.jpeg"	,"thumb":	"Ornella_Gomez.png"	},
            {"name":	"Owen Amarilla"	,"img":	"Owen_Amarilla.jpeg"	,"thumb":	"Owen_Amarilla.png"	},
            {"name":	"Paula Torres"	,"img":	"Paula_Torres.jpeg"	,"thumb":	"Paula_Torres.png"	},
            {"name":	"Selva Miranda"	,"img":	"Selva_Miranda.jpeg"	,"thumb":	"Selva_Miranda.png"	},
            {"name":	"Wanda Jara"	,"img":	"Wanda_Jara.jpeg"	,"thumb":	"Wanda_Jara.png"	},
            {"name":	"Yasmin Rivas"	,"img":	"Yasmin_Rivas.jpeg"	,"thumb":	"Yasmin_Rivas.png"	},
            {"name":	"Yesenia Veron"	,"img":	"Yesenia_Veron.jpeg"	,"thumb":	"Yesenia_Veron.png"	},
        ]
    },
}


export default class NewSubScreenGalleryKids extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            config: WORLDS_DATA[this.props.world],
            vertical: false,
            mobile: false,
            modalInfo: {}
        }
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
                        <div className={'col-md-6 explo-text'}>
                            <h3>{'Artista'}</h3>
                            <h1>{this.state.modalInfo.name}</h1>
                            {
                                this.state.modalInfo.title !== null && this.state.modalInfo.title !== undefined ?
                                    <div><br/>
                                        <h3>{'Título'}</h3>
                                        <h1>{this.state.modalInfo.title}</h1>
                                    </div> : ''
                            }
                        </div>
                        <div className={'col-md-6 world-modal-img-con explo-img'}>
                            <img alt={'info-img'} src={'/static/img/newkidsgallery/' +
                            this.props.world + '/' + this.props.city + '/' + this.state.modalInfo.img} />
                        </div>
                    </div>
                );
            case 'autoestima':
                return (
                    <div className={'row nomargin world-modal-con nopadding autoestima-bg'}>
                        <div className={'col-12 btn-modal-con'}>{ btnClose }</div>
                        <div className={'col-md-6 explo-text'}>
                            <h3>{'Artista'}</h3>
                            <h1>{this.state.modalInfo.name}</h1>
                            {
                                this.state.modalInfo.title !== null && this.state.modalInfo.title !== undefined ?
                                    <div><br/>
                                        <h3>{'Título'}</h3>
                                        <h1>{this.state.modalInfo.title}</h1>
                                    </div> : ''
                            }
                        </div>
                        <div className={'col-md-6 world-modal-img-con explo-img'}>
                            <img alt={'info-img'} src={'/static/img/newkidsgallery/' +
                            this.props.world + '/' + this.props.city + '/' + this.state.modalInfo.img} />
                        </div>
                    </div>
                );
            case 'colaboracion':
                return (
                    <div className={'row nomargin world-modal-con nopadding colaboracion-bg'}>
                        <div className={'col-12 btn-modal-con'}>{ btnClose }</div>
                        <div className={'col-md-6 explo-text'}>
                            <h3>{'Artista'}</h3>
                            <h1>{this.state.modalInfo.name}</h1>
                        </div>
                        <div className={'col-md-6 world-modal-img-con explo-img'}>
                            <img alt={'info-img'} src={'/static/img/newkidsgallery/' +
                            this.props.world + '/' + this.props.city + '/' + this.state.modalInfo.img} />
                        </div>
                    </div>
                );
            case 'ambiental':
                return (
                    <div className={'row nomargin world-modal-con nopadding ambiental-bg'}>
                        <div className={'col-12 btn-modal-con'}>{ btnClose }</div>
                        <div className={'col-md-6 explo-text'}>
                            <h3>{'Artista'}</h3>
                            <h1>{this.state.modalInfo.name}</h1>
                        </div>
                        <div className={'col-md-6 world-modal-img-con explo-img'}>
                            <img alt={'info-img'} src={'/static/img/newkidsgallery/' +
                            this.props.world + '/' + this.props.city + '/' + this.state.modalInfo.img} />
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
            slidesToShow: 1,
            slidesToScroll: 1,
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
                                <img className={'ssg-kids-alt ssg-title-alt'} src={'/static/img/newkidsgallery/' +
                                this.props.world + '/title.png' } alt={config.sub} />
                            </div> :
                            <div className={'col-12'}>
                                <img className={'ssg-kids ssg-title'} src={'/static/img/newkidsgallery/' +
                                this.props.world + '/title.png' } alt={config.sub} />
                            </div>
                    }
                    {
                        config.png.map((p) =>
                            <img alt={'png'} src={'/static/img/newkidsgallery/' +
                                 this.props.world + '/' + p + '.png'}
                                 className={this.props.world + '-kids-' + p + ' ssg-png'}
                                 key={this.props.world + '-' + p}/>
                        )
                    }
                    <div className={'col-2 col-md-1'} />
                    {
                        this.state.mobile && this.state.vertical ?
                            <Slider className={'col-8 col-md-10 ssg-car1 ssg-car2'} {...carousel_mobile}>
                                {
                                    config[this.props.city].map((a, k) =>
                                        <div key={'mob' + k}>
                                                <div className={'ssg-car-item ssg-car-item2extra'}
                                                     onClick={() => this.showInfo(a)}
                                                     key={'mob' + a.name + k} data-title={a.name}>
                                                    <img
                                                        alt={'png'} src={'/static/img/newkidsgallery/' +
                                                    this.props.world + '/' + this.props.city + '/' + a.thumb} />
                                                </div>
                                            </div>
                                    )
                                }
                            </Slider>
                            :
                            <Slider className={'col-8 col-md-10 ssg-car1'} {...carousel}>
                                {
                                    config[this.props.city].map((a) =>
                                        <div className={'ssg-car-item'}
                                             onClick={() => this.showInfo(a)}
                                             key={'nor' + a.name} data-title={a.name}>
                                            <img
                                                alt={'png'} src={'/static/img/newkidsgallery/' +
                                            this.props.world + '/' + this.props.city + '/' + a.thumb} />
                                        </div>
                                    )
                                }
                            </Slider>
                    }
                    <div className={'col-2 col-md-1'} />
                </div>
            </div>
        );
    }
}