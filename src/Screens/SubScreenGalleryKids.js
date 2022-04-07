import React, {Component} from "react/cjs/react.production.min";
import '../Styles/SubScreenGalleryStyles.css';
import MobileNavBar from "../Containers/MobileNavBar";
import Slider from "react-slick";
import ReactModal from "react-modal";
import ReactPlayer from "react-player";
import {Link} from "react-router-dom";


const WORLDS_DATA = {
    'autoestima': {
        bg: 'autoestima-kids-bg',
        bgVert: 'autoestima-kids-bg kids-vert',
        png: [1, 2],
        pilar: [
            {
                "name": "Abigail Morel",
                "thumb": "Abigail-Morel_i.png",
                "img": "Abigail_Morel.jpg",
                "group": "g3"
            },
            {
                "name": "Abigail Rolón",
                "thumb": "Abigail-Rolón_i.png",
                "img": "Abigail_Rolón_.jpg",
                "group": "g1"
            },
            {
                "name": "Alejandro Benjamín Cañete Páez",
                "thumb": "Alejandro-Benjamín-Cañete-Páez_i.png",
                "img": "Alejandro_Benjamín_Cañete_Páez.jpg",
                "group": "g4"
            },
            {
                "name": "Alexandro Daniel Rojas",
                "thumb": "Alexandro-Daniel-Rojas_i.png",
                "img": "Alexandro_Daniel_Rojas.jpg",
                "group": "g4"
            },
            {
                "name": "Alma Acosta",
                "thumb": "Alma-Acosta_i.png",
                "img": "Alma_Acosta.jpg",
                "group": "g3"
            },
            {
                "name": "Alma Mongelós",
                "thumb": "Alma-Mongelós_i.png",
                "img": "Alma Mongelós.jpg",
                "group": "g3"
            },
            {
                "name": "Amira Villalba",
                "thumb": "Amira-Villalba_i.png",
                "img": "Amira_Villalba_.jpg",
                "group": "g1"
            },
            {
                "name": "Anahi Mellone",
                "thumb": "Anahi-Mellone_i.png",
                "img": "Anahi_Mellone.jpeg",
                "group": "g2"
            },
            {
                "name": "Andrea Barrios",
                "thumb": "Andrea-Barrios__i.png",
                "img": "Andrea_Barrios_.jpg",
                "group": "g3"
            },
            {
                "name": "Annia Sofía Ramírez Ferreira",
                "thumb": "Annia-Sofía-Ramírez-Ferreira_i.png",
                "img": "Annia_Sofía_Ramírez_Ferreira.jpg",
                "group": "g1"
            },
            {
                "name": "Aracely Amarilla",
                "thumb": "Aracely-Amarilla_i.png",
                "img": "Aracely_Amarilla.jpg",
                "group": "g4"
            },
            {
                "name": "Ariana Torres",
                "thumb": "Ariana-Torres_i.png",
                "img": "Ariana_Torres.jpg",
                "group": "g3"
            },
            {
                "name": "Benjamín González",
                "thumb": "Benjamín-González_i.png",
                "img": "Benjamín Quintana.jpg",
                "group": "g4"
            },
            {
                "name": "Benjamín Morell",
                "thumb": "Benjamín-Morell_i.png",
                "img": "Benjamín_Morell.jpg",
                "group": "g3"
            },
            {
                "name": "Benjamín Nicolás Portillo Ríos",
                "thumb": "Benjamín-Nicolás-Portillo-Ríos_i.png",
                "img": "Benjamín_Nicolás_Portillo_Ríos_.jpg",
                "group": "g1"
            },
            {
                "name": "Benjamín Quintana",
                "thumb": "Benjamín-González_i.png",
                "img": "Benjamín_González.jpg",
                "group": "g4"
            },
            {
                "name": "Brenda Valdez",
                "thumb": "Brenda-Valdez_i.png",
                "img": "Brenda_Valdez.jpg",
                "group": "g4"
            },
            {
                "name": "Bruno Aguilera",
                "thumb": "Bruno-Aguilera_i.png",
                "img": "Bruno_Aguilera.jpg",
                "group": "g1"
            },
            {
                "name": "Bruno José Gutiérrez Cantero",
                "thumb": "Bruno-José-Gutiérrez-Cantero_i.png",
                "img": "Bruno_José_Gutiérrez_Cantero.jpeg",
                "group": "g2"
            },
            {
                "name": "Bárbara Fretes Castells",
                "thumb": "Bárbara-Fretes-Castells_i.png",
                "img": "Bárbara_Fretes_Castells.jpeg",
                "group": "g2"
            },
            {
                "name": "Carlos Mateo",
                "thumb": "Carlos-Mateo_i.png",
                "img": "Carlos_Mateo.jpg",
                "group": "g4"
            },
            {
                "name": "Cecilia Evangelina Olmedo",
                "thumb": "Cecilia-Evangelina-Olmedo_i.png",
                "img": "Cecilia_Evangelina_Olmedo.jpeg",
                "group": "g2"
            },
            {
                "name": "Celeste Claribel Céspedes Ferreira",
                "thumb": "Celeste-Claribel-Céspedes-Ferreira_i.png",
                "img": "Celeste_Claribel_Céspedes_ Ferreira.jpg",
                "group": "g4"
            },
            {
                "name": "Claudia Armoa",
                "thumb": "Claudia-Armoa_i.png",
                "img": "Claudia_Armoa.jpeg",
                "group": "g2"
            },
            {
                "name": "Danna Jiménez",
                "thumb": "Danna-Jiménez__i.png",
                "img": "Danna_Jiménez_.jpg",
                "group": "g3"
            },
            {
                "name": "Darling Céspedes",
                "thumb": "Darling--Céspedes_i.png",
                "img": "Darling _Céspedes.jpeg",
                "group": "g1"
            },
            {
                "name": "Diamela Ferreira",
                "thumb": "Diamela-Ferreira_i.png",
                "img": "Diamela_Ferreira.jpeg",
                "group": "g2"
            },
            {
                "name": "Diogo Giménez",
                "thumb": "Diogo-Giménez__i.png",
                "img": "Diogo_Giménez_.jpg",
                "group": "g3"
            },
            {
                "name": "Dylan Luciano López",
                "thumb": "Dylan Luciano López_i.png",
                "img": "Dylan_Luciano_López_.jpg",
                "group": "g1"
            },
            {
                "name": "Eduardo Francisco Cañete Páez",
                "thumb": "Eduardo-Francisco-Cañete-Páez_i.png",
                "img": "Eduardo_Francisco_Cañete_Páez.jpg",
                "group": "g4"
            },
            {
                "name": "Elena Mora",
                "thumb": "Elena_Mora_i.png",
                "img": "null",
                "group": "g3"
            },
            {
                "name": "Emanuel Velazco",
                "thumb": "Emanuel-Velazco_i.png",
                "img": "Emanuel_Velazco.jpeg",
                "group": "g2"
            },
            {
                "name": "Emma Nahiara Cousirat",
                "thumb": "Emma-Nahiara-Cousirat_i.png",
                "img": "Emma_Nahiara_Cousirat.jpg",
                "group": "g1"
            },
            {
                "name": "Enzo Leonel Portillo González",
                "thumb": "Enzo-Leonel-Portillo-González_i.png",
                "img": "Enzo_Leonel_Portillo_González_.jpg",
                "group": "g1"
            },
            {
                "name": "Ethan Montiel",
                "thumb": "Ethan-Montiel_i.png",
                "img": "Ethan_Montiel.jpeg",
                "group": "g2"
            },
            {
                "name": "Euclides Flores",
                "thumb": "Euclides-Flores_i.png",
                "img": "Euclides_Flores.jpg",
                "group": "g3"
            },
            {
                "name": "Fabio Rolón",
                "thumb": "Fabio-Rolón_i.png",
                "img": "Fabio_Rolón_.jpg",
                "group": "g1"
            },
            {
                "name": "Fiorella Amatte",
                "thumb": "Fiorella-Amatte_i.png",
                "img": "Fiorella_Amatte.jpg",
                "group": "g3"
            },
            {
                "name": "Fiorella Lobos",
                "thumb": "Fiorella-Lobos_i.png",
                "img": "Fiorella_Lobos_.jpg",
                "group": "g1"
            },
            {
                "name": "Fiorella Miranda",
                "thumb": "Fiorella-Miranda_i.png",
                "img": "Fiorella_Miranda.jpeg",
                "group": "g2"
            },
            {
                "name": "Franco Pinto",
                "thumb": "Franco-Pinto_i.png",
                "img": "Franco_Pinto.jpg",
                "group": "g4"
            },
            {
                "name": "Gabriela Sánchez Guillén",
                "thumb": "Gabriela-Sánchez-Guillén_i.png",
                "img": "Gabriela_Sánchez_Guillén.jpg",
                "group": "g1"
            },
            {
                "name": "Giulianna Romero Riveros",
                "thumb": "Giulianna-Romero-Riveros_i.png",
                "img": "Giulianna_Romero_Riveros.jpg",
                "group": "g1"
            },
            {
                "name": "Giuliano Pereyra",
                "thumb": "Giuliano-Pereyra_i.png",
                "img": "Giuliano_Pereyra.jpg",
                "group": "g1"
            },
            {
                "name": "Gonzalo Ferreira",
                "thumb": "Gonzalo-Ferreira_i.png",
                "img": "Gonzalo_Ferreira.jpeg",
                "group": "g2"
            },
            {
                "name": "Guadalupe Aceval",
                "thumb": "Guadalupe-Aceval_i.png",
                "img": "Guadalupe_Aceval.jpeg",
                "group": "g2"
            },
            {
                "name": "Hanna Zalazar",
                "thumb": "Hanna-Zalazar_i.png",
                "img": "Hanna_Zalazar.jpg",
                "group": "g3"
            },
            {
                "name": "Helem Paredes",
                "thumb": "Helem-Paredes_i.png",
                "img": "Helem_Paredes.jpg",
                "group": "g4"
            },
            {
                "name": "Iván Nahuel Attis Sánchez",
                "thumb": "Iván-Nahuel-Attis-Sánchez_i.png",
                "img": "Iván_Nahuel_Attis_Sánchez.jpg",
                "group": "g4"
            },
            {
                "name": "Jessica Báez",
                "thumb": "Jessica-Báez_i.png",
                "img": "Jessica_Báez.jpg",
                "group": "g3"
            },
            {
                "name": "Johana Sosa",
                "thumb": "Johana-Sosa_i.png",
                "img": "Johana_Sosa.jpg",
                "group": "g1"
            },
            {
                "name": "Josué Agustín Ramírez Solis",
                "thumb": "Josué-Agustín-Ramírez-Solis_i.png",
                "img": "Josué_Agustín_Ramírez_Solis_.jpg",
                "group": "g1"
            },
            {
                "name": "José Miguel Antola Espinoza",
                "thumb": "José-Miguel-Antola-Espinoza_i.png",
                "img": "José_Miguel_Antola_Espinoza.jpeg",
                "group": "g2"
            },
            {
                "name": "Juan Miguel Martínez",
                "thumb": "Juan-Miguel-Martínez_i.png",
                "img": "Juan_Miguel_Martínez.jpeg",
                "group": "g2"
            },
            {
                "name": "Julieta Vargas",
                "thumb": "Julieta-Vargas_i.png",
                "img": "Julieta_Vargas.jpg",
                "group": "g3"
            },
            {
                "name": "Julieta Veloso",
                "thumb": "Julieta-Veloso_i.png",
                "img": "Julieta_Veloso.jpg",
                "group": "g4"
            },
            {
                "name": "Karla Gauto",
                "thumb": "Karla-Gauto_i.png",
                "img": "Karla_Gauto.jpg",
                "group": "g4"
            },
            {
                "name": "Keilly Salcedo",
                "thumb": "Keilly-Salcedo_i.png",
                "img": "Keilly_Salcedo.jpeg",
                "group": "g2"
            },
            {
                "name": "Kevin Zarnikowsky",
                "thumb": "Kevin-Zarnikowsky_i.png",
                "img": "Kevin_Zarnikowsky_.jpg",
                "group": "g1"
            },
            {
                "name": "Kiara Ferreira",
                "thumb": "Kiara-Ferreira-2.png",
                "img": "Kiara Ferreira 2.jpg",
                "group": "g4"
            },
            {
                "name": "Kiara Ferreira",
                "thumb": "Kiara-Ferreira_i.png",
                "img": "Kiara_Ferreira.jpg",
                "group": "g4"
            },
            {
                "name": "Kiara Mora",
                "thumb": "Kiara-Mora_i.png",
                "img": "Kiara_Mora.jpeg",
                "group": "g2"
            },
            {
                "name": "Kiara Zarnikowsky",
                "thumb": "Kiara-Zarnikowsky_i.png",
                "img": "Kiara_Zarnikowsky.jpg",
                "group": "g1"
            },
            {
                "name": "Lara Anabell Gómez Cáceres",
                "thumb": "Lara-Anabell-Gómez-Cáceres_i.png",
                "img": "Lara_Anabell_Gómez_Cáceres.jpg",
                "group": "g4"
            },
            {
                "name": "Lara Caballero",
                "thumb": "Lara-Caballero_i.png",
                "img": "Lara_Caballero.jpg",
                "group": "g3"
            },
            {
                "name": "Larissa Monserrat Ruiz Vargas",
                "thumb": "Larissa-Monserrat-Ruiz-Vargas_i.png",
                "img": "Larissa_Monserrat_Ruiz_Vargas_.jpg",
                "group": "g1"
            },
            {
                "name": "Lizandro Mellone",
                "thumb": "Lizandro-Mellone_i.png",
                "img": "Lizandro_Mellone.jpeg",
                "group": "g2"
            },
            {
                "name": "Lua Margarita López Zalazar",
                "thumb": "Lua-Margarita-López-Zalazar_i.png",
                "img": "Lua_Margarita_López_Zalazar.jpg",
                "group": "g4"
            },
            {
                "name": "Luana Veloso",
                "thumb": "Luana-Veloso_i.png",
                "img": "Luana_Veloso_.jpg",
                "group": "g3"
            },
            {
                "name": "Lucas Ezequiel Portillo González",
                "thumb": "Lucas-Ezequiel-Portillo-González_i.png",
                "img": "Lucas_Ezequiel_Portillo_González.jpg",
                "group": "g1"
            },
            {
                "name": "Lucas Misael Cardozo",
                "thumb": "Lucas-Misael-Cardozo_i.png",
                "img": "Lucas_Misael_Cardozo.jpeg",
                "group": "g2"
            },
            {
                "name": "Lucas Santino",
                "thumb": "Lucas-Santino_i.png",
                "img": "Lucas_Santino.jpg",
                "group": "g4"
            },
            {
                "name": "Lucca Fabrizio Acosta Mellone",
                "thumb": "Lucca-Fabrizio-Acosta-Mellone_i.png",
                "img": "Lucca_Fabrizio_Acosta_Mellone.jpg",
                "group": "g1"
            },
            {
                "name": "Luissana Antonella Benítez Gutiérrez",
                "thumb": "Luissana-Antonella-Benítez-Gutiérrez_i.png",
                "img": "Luissana_Antonella_Benítez_Gutiérrez.jpg",
                "group": "g4"
            },
            {
                "name": "Martina López De Felice",
                "thumb": "Martina-López-De-Felice_i.png",
                "img": "Martina_López_De_Felice.jpg",
                "group": "g1"
            },
            {
                "name": "María del Cielo Montiel",
                "thumb": "María-del-Cielo-Montiel_i.png",
                "img": "María_del_Cielo_Montiel.jpg",
                "group": "g3"
            },
            {
                "name": "María del Cielo Velazco Formichelli",
                "thumb": "María-del-Cielo-Velazco-Formichelli_i.png",
                "img": "María_del_Cielo_Velazco_Formichelli.jpg",
                "group": "g4"
            },
            {
                "name": "María Eugenia Portillo Ríos",
                "thumb": "María-Eugenia-Portillo-Ríos_i.png",
                "img": "María_Eugenia_Portillo_Ríos_.jpg",
                "group": "g1"
            },
            {
                "name": "María Paz Acuña Ferreira",
                "thumb": "María-Paz-Acuña-Ferreira_i.png",
                "img": "María Paz Acuña Ferreira.jpg",
                "group": "g4"
            },
            {
                "name": "Matías Alejandro Zalazar",
                "thumb": "Matías-Alejandro-Zalazar_i.png",
                "img": "Matías_Alejandro_Zalazar.jpeg",
                "group": "g2"
            },
            {
                "name": "Matías Segovia",
                "thumb": "Matías-Segovia_i.png",
                "img": "Matías_Segovia.jpg",
                "group": "g4"
            },
            {
                "name": "Maximiliano Eliam Ferreiro Morínigo",
                "thumb": "Maximiliano-Eliam-Ferreiro-Morínigo_i.png",
                "img": "Maximiliano_Eliam_Ferreiro_Morínigo.jpeg",
                "group": "g2"
            },
            {
                "name": "Maylen Isabella",
                "thumb": "Maylen-Isabella_i.png",
                "img": "Maylen_Isabella.jpg",
                "group": "g1"
            },
            {
                "name": "Micaela Rolón",
                "thumb": "Valentino-Verón_i.png",
                "img": "Micaela_Rolón_.jpg",
                "group": "g1"
            },
            {
                "name": "Mía Achucarro",
                "thumb": "Mía-Achucarro_i.png",
                "img": "Mía_Achucarro.jpg",
                "group": "g3"
            },
            {
                "name": "Naara Velázquez",
                "thumb": "Naara-Velázquez_i.png",
                "img": "Naara_Velázquez.jpg",
                "group": "g4"
            },
            {
                "name": "Nancy Aylén Pérez Romero",
                "thumb": "Nancy-Aylén-Pérez-Romero_i.png",
                "img": "Nancy_Aylén_Pérez_Romero.jpg",
                "group": "g4"
            },
            {
                "name": "Sofía Margarita Jara Alarcón",
                "thumb": "Sofía-Margarita-Jara_i.png",
                "img": "Sofía_Margarita_Jara_Alarcón.jpg",
                "group": "g1"
            },
            {
                "name": "Sofía Pino",
                "thumb": "Sofía-Pino_i.png",
                "img": "Sofía_Pino.jpg",
                "group": "g3"
            },
            {
                "name": "Sofía Sánchez",
                "thumb": "Sofia-Sanchez_i.png",
                "img": "Sofía_Sánchez.jpg",
                "group": "g3"
            },
            {
                "name": "Sthefani Rodríguez",
                "thumb": "Sthefani-Rodríguez_i_i.png",
                "img": "Sthefani_Rodríguez.jpg",
                "group": "g4"
            },
            {
                "name": "Thiago Rolón",
                "thumb": "Thiago-Rolón_i.png",
                "img": "Thiago_Rolón.jpeg",
                "group": "g2"
            },
            {
                "name": "Tomás Morínigo",
                "thumb": "Tomás-Morínigo_i.png",
                "img": "Tomás_Morínigo.jpg",
                "group": "g4"
            },
            {
                "name": "Valentino Verón",
                "thumb": "Valentino-Verón_i.png",
                "img": "Valentino_Verón.jpg",
                "group": "g1"
            },
            {
                "name": "Valentín Ferreira",
                "thumb": "Valentín_Ferreira.jpg",
                "img": "Valentín_Ferreira.jpg",
                "group": "g3"
            },
            {
                "name": "Yheny Ayala",
                "thumb": "Yheny-Ayala_i.png",
                "img": "Yheny_Ayala.jpeg",
                "group": "g2"
            },
            {
                "name": "Zoe Gómez",
                "thumb": "Zoe-Gómez_i.png",
                "img": "Zoe Gómez.jpeg",
                "group": "g2"
            }
        ],
        encarnacion: [
            {
                "name": "Adriana Martínez",
                "thumb": "Adriana-Martínez_i.png",
                "img": "Adriana_Martínez.jpeg",
                "group": "g8"
            },
            {
                "name": "Adrián Cáceres",
                "thumb": "Adrián-Cáceres_i.png",
                "img": "Adrián_Cáceres.jpeg",
                "group": "g8"
            },
            {
                "name": "Alejandro Luis Sitzman Goncalvez",
                "thumb": "Alejandro-Luis-Sitzman-Goncalvez_i.png",
                "img": "Alejandro_Luis_Sitzman_Goncalvez.jpeg",
                "group": "g8"
            },
            {
                "name": "Alis Abreu",
                "thumb": "Alis_Abreu_i.png",
                "img": "Alis_Abreu.jpeg",
                "group": "g1"
            },
            {
                "name": "Ana Paula Guggiari",
                "thumb": "Ana-Paula-Guggiari_i.png",
                "img": "Ana_Paula_Guggiari.jpg",
                "group": "g6"
            },
            {
                "name": "Angelica Lujan Armoa",
                "thumb": "Angelica-Lujan-Armoa_i.png",
                "img": "Angelica_Lujan_Armoa.jpeg",
                "group": "g8"
            },
            {
                "name": "Anna Sophie Canala",
                "thumb": "Anna_Sophie_Canala.png",
                "img": "Anna_Sophie_Canala.jpg",
                "group": "g7"
            },
            {
                "name": "Antonela Benitez",
                "thumb": "Antonela_Benitez_i.png",
                "img": "Antonela_Benitez.jpeg",
                "group": "g1"
            },
            {
                "name": "Araceli Gomez",
                "thumb": "Araceli-Gomez_i.png",
                "img": "Araceli_Gomez.jpeg",
                "group": "g8"
            },
            {
                "name": "Arturo Portillo",
                "thumb": "Arturo-Portillo_i.png",
                "img": "ARTURO_PORTILLO.jpg",
                "group": "g7"
            },
            {
                "name": "Augusto Rojas",
                "thumb": "Augusto-Rojas_i.png",
                "img": "Augusto_Rojas.jpeg",
                "group": "g6"
            },
            {
                "name": "Bianca Duarte",
                "thumb": "Bianca_Duarte_i.png",
                "img": "Bianca_Duarte.jpg",
                "group": "g1"
            },
            {
                "name": "Brahian Daniel Figueredo",
                "thumb": "Brahian-Daniel-Figueredo_i.png",
                "img": "Brahian_Daniel_Figueredo.jpeg",
                "group": "g8"
            },
            {
                "name": "Camila Ibarra",
                "thumb": "Camila-Ibarra_i.png",
                "img": "Camila_Ibarra.jpeg",
                "group": "g8"
            },
            {
                "name": "Camila Monserrat Vera",
                "thumb": "CAMILA-MONSERRAT-VERA_i.png",
                "img": "CAMILA_MONSERRAT_VERA.jpg",
                "group": "g7"
            },
            {
                "name": "Carmen Araceli Ortiz Peralta",
                "thumb": "CARMEN-ARACELI-ORTIZ-PERALTA_i.png",
                "img": "CARMEN_ARACELI_ORTIZ_PERALTA.jpg",
                "group": "g7"
            },
            {
                "name": "Carmen Martinez",
                "thumb": "Carmen_Martinez_i.png",
                "img": "Carmen_Martinez.jpeg",
                "group": "g1"
            },
            {
                "name": "Ceferino Garcia",
                "thumb": "Ceferino-Garcia_i.png",
                "img": "Ceferino_Garcia.jpeg",
                "group": "g8"
            },
            {
                "name": "Ciro Sambuchetti",
                "thumb": "Ciro-Sambuchetti_i.png",
                "img": "Ciro_Sambuchetti.jpg",
                "group": "g6"
            },
            {
                "name": "Clara Lopez",
                "thumb": "CLARA-LOPEZ_i.png",
                "img": "CLARA_LOPEZ.jpg",
                "group": "g7"
            },
            {
                "name": "Crispin Elías Caballero",
                "thumb": "Crispin_Elias_Caballero_i.png",
                "img": "Crispin_Elias_Caballero.jpeg",
                "group": "g1"
            },
            {
                "name": "Crispin Elías Caballero",
                "thumb": "Crispin_Elías_Caballero_2_i.png",
                "img": "Crispin Elías_Caballero_2.jpeg",
                "group": "g1"
            },
            {
                "name": "Dahiana Rolon",
                "thumb": "Dahiana-Rolon_i.png",
                "img": "Dahiana_Rolon.jpg",
                "group": "g6"
            },
            {
                "name": "Danna Fariña",
                "thumb": "Danna_Fariña_i.png",
                "img": "Danna_Fariña.jpeg",
                "group": "g1"
            },
            {
                "name": "Danna Sotelo",
                "thumb": "DANNA-SOTELO_i.png",
                "img": "DANNA_SOTELO.jpg",
                "group": "g7"
            },
            {
                "name": "David Ojeda",
                "thumb": "DAVID-OJEDA_i.png",
                "img": "DAVID_OJEDA.jpg",
                "group": "g7"
            },
            {
                "name": "David Segovia Ibañez",
                "thumb": "David_Segovia_Ibanez.png",
                "img": "David_Segovia_Ibanez.jpeg",
                "group": "g7"
            },
            {
                "name": "Dimas Derico",
                "thumb": "DIMAS-DERICO_i.png",
                "img": "DIMAS_DERICO.jpg",
                "group": "g7"
            },
            {
                "name": "Dylan Estigarribia Gimenez",
                "thumb": "Dylan-Estigarribia-Gimenez_i.png",
                "img": "Dylan_Estigarribia_Gimenez.jpg",
                "group": "g6"
            },
            {
                "name": "Dylan Wood",
                "thumb": "Dylan_Wood_i.png",
                "img": "Dylan_Wood.jpeg",
                "group": "g1"
            },
            {
                "name": "Elías Aguilera Cardozo",
                "thumb": "Elias_Aguilera_Cardozo.png",
                "img": "Elias_Aguilera_Cardozo.jpg",
                "group": "g7"
            },
            {
                "name": "Enzo Ariel Ortega",
                "thumb": "Enzo_Ariel_Ortega.png",
                "img": "Enzo_Ariel_Ortega.jpeg",
                "group": "g7"
            },
            {
                "name": "Evelin Castillo",
                "thumb": "EVELIN-CASTILLO_i.png",
                "img": "EVELIN_CASTILLO.jpg",
                "group": "g7"
            },
            {
                "name": "Fabiana Benítez",
                "thumb": "Fabiana_Benitez.png",
                "img": "Fabiana_Benitez.jpg",
                "group": "g7"
            },
            {
                "name": "Fabiola Vera",
                "thumb": "Fabiola_Vera_i.png",
                "img": "Fabiola_Vera.jpeg",
                "group": "g1"
            },
            {
                "name": "Fatima Martinez",
                "thumb": "Fatima_Martinez_i.png",
                "img": "Fatima_Martinez.jpeg",
                "group": "g1"
            },
            {
                "name": "Fatima Nicole Portillo Sosa",
                "thumb": "FATIMA-NICOLE-PORTILLO-SOSA_i.png",
                "img": "FATIMA_NICOLE_PORTILLO_SOSA.jpg",
                "group": "g7"
            },
            {
                "name": "Fernando Ayala",
                "thumb": "Fernando-Ayala_i.png",
                "img": "Fernando_Ayala.jpeg",
                "group": "g8"
            },
            {
                "name": "Fidel Ullon",
                "thumb": "Fidel_Ullon_i.png",
                "img": "Fidel_Ullon.jpeg",
                "group": "g1"
            },
            {
                "name": "Genaro Vicevich",
                "thumb": "Genaro-Vicevich_i.png",
                "img": "Genaro_Vicevich.jpg",
                "group": "g6"
            },
            {
                "name": "Gerardo Vera",
                "thumb": "Gerardo-Vera_i.png",
                "img": "Gerardo_Vera.jpeg",
                "group": "g8"
            },
            {
                "name": "Gissela Fariña",
                "thumb": "Gissela_Fariña_i.png",
                "img": "Gissela_Fariña.jpeg",
                "group": "g1"
            },
            {
                "name": "Giuliana Barrios",
                "thumb": "Giuliana-Barrios_i.png",
                "img": "Giuliana_Barrios.jpg",
                "group": "g6"
            },
            {
                "name": "Giulio Derico",
                "thumb": "GIULIO-DERICO_i.png",
                "img": "GIULIO_DERICO.jpg",
                "group": "g7"
            },
            {
                "name": "Guadalupe Yeruti Gonzalez",
                "thumb": "GUADALUPE-YERUTI-GONZALEZ_i.png",
                "img": "GUADALUPE_YERUTI_GONZALEZ.jpg",
                "group": "g7"
            },
            {
                "name": "Guillermo Almada",
                "thumb": "Guillermo-Almada_i.png",
                "img": "Guillermo_Almada.jpg",
                "group": "g6"
            },
            {
                "name": "Helen Nuñez",
                "thumb": "Helen-Nuñez_i.png",
                "img": "Helen_Nuñez.jpg",
                "group": "g7"
            },
            {
                "name": "Hugo Ezekiel Stark",
                "thumb": "HUGO-EZEKIEL-STARK_i.png",
                "img": "HUGO_EZEKIEL_STARK.jpg",
                "group": "g7"
            },
            {
                "name": "Ian Alexis Rodríguez",
                "thumb": "Ian-Alexis-Rodríguez_i.png",
                "img": "Ian_Alexis_Rodríguez.jpg",
                "group": "g6"
            },
            {
                "name": "Jazmín Fariña",
                "thumb": "Jazmin-Fariño_i.png",
                "img": "Jazmín_Fariña.jpeg",
                "group": "g8"
            },
            {
                "name": "Jeremias Ojeda",
                "thumb": "Jeremias-Ojeda_i.png",
                "img": "Jeremias_Ojeda.jpeg",
                "group": "g8"
            },
            {
                "name": "Johana Benítez",
                "thumb": "Johana_Benitez.png",
                "img": "Johana_Benitez.jpeg",
                "group": "g7"
            },
            {
                "name": "Josías Brizuela",
                "thumb": "Josías-Brizuela_i.png",
                "img": "Josías_Brizuela.jpeg",
                "group": "g8"
            },
            {
                "name": "Julieta Ayala",
                "thumb": "Julieta-Ayala_i.png",
                "img": "Julieta_Ayala .jpg",
                "group": "g6"
            },
            {
                "name": "Katerine Jacquet",
                "thumb": "Katerine-Jacquet_i.png",
                "img": "Katerine_Jacquet.jpeg",
                "group": "g8"
            },
            {
                "name": "Kiara Ramírez",
                "thumb": "Kiara_Ramírez_i.png",
                "img": "Kiara_Ramírez.jpeg",
                "group": "g1"
            },
            {
                "name": "Kiara Vega",
                "thumb": "Kiara-Vega_i.png",
                "img": "Kiara_Vega.jpg",
                "group": "g6"
            },
            {
                "name": "Kimberly Nahyara Noguera",
                "thumb": "KIMBERLY-NAHYARA-NOGUERA_i.png",
                "img": "KIMBERLY_NAHYARA_NOGUERA.jpg",
                "group": "g7"
            },
            {
                "name": "Kimberlyn Sharamier",
                "thumb": "Kimberlyn_Sharamier.png",
                "img": "Kimberlyn_Sharamier.jpg",
                "group": "g7"
            },
            {
                "name": "Liz Ayelen Nuñez",
                "thumb": "Liz_Ayelen_Nunez.png",
                "img": "Liz_Ayelen_Nunez.jpg",
                "group": "g7"
            },
            {
                "name": "Lorenzo Caceres",
                "thumb": "Lorenzo-Caceres_i.png",
                "img": "Lorenzo_Caceres.jpg",
                "group": "g6"
            },
            {
                "name": "Luana Aguilera Cardozo",
                "thumb": "Luana_Aguilera_Cardozo.png",
                "img": "Luana_Aguilera_Cardozo.jpeg",
                "group": "g7"
            },
            {
                "name": "Maira Abigail Alvarez Caceres",
                "thumb": "Maira-Abigail-Alvarez-Caceres_i.png",
                "img": "Maira_Abigail_Alvarez_Caceres.jpg",
                "group": "g6"
            },
            {
                "name": "Maite Vera",
                "thumb": "Maite-Vera_i.png",
                "img": "Maite_Vera.jpg",
                "group": "g6"
            },
            {
                "name": "Mariana Arzamendia",
                "thumb": "Kiara_Ramírez_i.pngMariana_Arzamendia_i.png",
                "img": "Mariana_Arzamendia.jpg",
                "group": "g1"
            },
            {
                "name": "Mario Romero",
                "thumb": "Mario-Romero_i_i.png",
                "img": "Mario_Romero.jpeg",
                "group": "g8"
            },
            {
                "name": "Mathias Arzamendia",
                "thumb": "Mathias_Arzamendia_i.png",
                "img": "Mathias_Arzamendia.jpeg",
                "group": "g1"
            },
            {
                "name": "Melanie Zayas",
                "thumb": "Melanie-Zayas_i.png",
                "img": "Melanie_Zayas.jpeg",
                "group": "g8"
            },
            {
                "name": "Melanie Zayas",
                "thumb": "Melanie-Zayas-2.png",
                "img": "Melanie Zayas 2.jpeg",
                "group": "g8"
            },
            {
                "name": "Melissa Caballero",
                "thumb": "MELISSA-CABALLERO_i.png",
                "img": "MELISSA_CABALLERO.jpg",
                "group": "g7"
            },
            {
                "name": "Micaela Duarte",
                "thumb": "MICAELA-DUARTE_i.png",
                "img": "MICAELA_DUARTE.jpg",
                "group": "g7"
            },
            {
                "name": "Micaela Sienra",
                "thumb": "Micaela_Sienra_i.png",
                "img": "Micaela_Sienra.jpeg",
                "group": "g1"
            },
            {
                "name": "Milagros Medina",
                "thumb": "MILAGROS-MEDINA_i.png",
                "img": "MILAGROS_MEDINA B..jpg",
                "group": "g7"
            },
            {
                "name": "Milena Aquino Zarza",
                "thumb": "MILENA-AQUINO-ZARZA_i.png",
                "img": "MILENA_AQUINO_ZARZA.jpg",
                "group": "g7"
            },
            {
                "name": "Nahianka Olejnik",
                "thumb": "Nahianka_Olejnik_i.png",
                "img": "Nahianka_Olejnik.jpeg",
                "group": "g1"
            },
            {
                "name": "Piero Scipioni Squef",
                "thumb": "Piero_Scipioni_Squef_i.png",
                "img": "Piero_Scipioni Squef.jpeg",
                "group": "g1"
            },
            {
                "name": "Pierre Mazier",
                "thumb": "Pierre-Mazier_i.png",
                "img": "Pierre_Mazier.jpg",
                "group": "g6"
            },
            {
                "name": "Renato Delvalle",
                "thumb": "Renato-Delvalle_i.png",
                "img": "Renato_Delvalle.jpg",
                "group": "g6"
            },
            {
                "name": "Rita Cabrera",
                "thumb": "Rita-Cabrera_i.png",
                "img": "Rita_Cabrera.jpg",
                "group": "g6"
            },
            {
                "name": "Rocio Rolon",
                "thumb": "Rocio_Rolon_i.png",
                "img": "Rocio_Rolon.jpeg",
                "group": "g1"
            },
            {
                "name": "Sabrina Ayala",
                "thumb": "Sabrina-Ayala_i.png",
                "img": "Sabrina_Ayala.jpg",
                "group": "g6"
            },
            {
                "name": "Samira Espinola",
                "thumb": "Samira-Espinola_i.png",
                "img": "Samira_Espinola.jpeg",
                "group": "g8"
            },
            {
                "name": "Santiago Palacios",
                "thumb": "Santiago-Palacios_i.png",
                "img": "Santiago_Palacios.jpeg",
                "group": "g8"
            },
            {
                "name": "Santino Arguello",
                "thumb": "SANTINO-ARGUELLO_i.png",
                "img": "SANTINO_ARGUELLO.jpg",
                "group": "g7"
            },
            {
                "name": "Sasha Benitez",
                "thumb": "Sasha_Benitez_i.png",
                "img": "Sasha_Benitez.jpeg",
                "group": "g1"
            },
            {
                "name": "Sergio Daniel Paiva",
                "thumb": "Sergio-Daniel-Paiva_i.png",
                "img": "Sergio_Daniel_Paiva.jpeg",
                "group": "g8"
            },
            {
                "name": "Sofia Gonzalez",
                "thumb": "Sofia_Gonzalez_i.png",
                "img": "Sofia_Gonzalez.jpeg",
                "group": "g1"
            },
            {
                "name": "Sofía García",
                "thumb": "Sofia-Garcia_i.png",
                "img": "Sofia_Garcia.jpg",
                "group": "g6"
            },
            {
                "name": "Sol Villasanti",
                "thumb": "Sol_Villasanti_i.png",
                "img": "Sol_Villasanti.jpeg",
                "group": "g1"
            },
            {
                "name": "Stefano Ballesteros",
                "thumb": "Stefano_Ballesteros_i.png",
                "img": "Stefano_Ballesteros.jpg",
                "group": "g1"
            },
            {
                "name": "Stephie Ailen Bernal",
                "thumb": "STEPHIE-AILEN-BERNAL_i.png",
                "img": "STEPHIE_AILEN_BERNAL.jpg",
                "group": "g7"
            },
            {
                "name": "Tadeo Valdez",
                "thumb": "Tadeo_Valdez_i.png",
                "img": "Tadeo_Valdez.jpeg",
                "group": "g1"
            },
            {
                "name": "Tamara Paredes",
                "thumb": "Tamara-Paredes_i.png",
                "img": "Tamara_Paredes.jpg",
                "group": "g6"
            },
            {
                "name": "Yamila Octavo",
                "thumb": "YAMILA-OCTAVO_i.png",
                "img": "YAMILA_OCTAVO.jpg",
                "group": "g7"
            },
            {
                "name": "Yennifer Ocampos",
                "thumb": "YENNIFER-OCAMPOS_i.png",
                "img": "YENNIFER_OCAMPOS.jpg",
                "group": "g7"
            },
            {
                "name": "Zahijra Aquino",
                "thumb": "Zahijra_Aquino.png",
                "img": "Zahijra_Aquino.jpeg",
                "group": "g7"
            }
        ]
    },
    'generosidad': {
        bg: 'generosidad-kids-bg',
        bgVert: 'generosidad-kids-bg kids-vert',
        png: [2],
        pilar: [
            {
                "name": "Abigail Morel",
                "thumb": "Abigail_Morel-Foxy.png",
                "img": "Abigail_Morel-Foxy.jpeg",
                "title": "Foxy"
            },
            {
                "name": "Abigail Rolón",
                "thumb": "Abigail_Rolon-Lila.png",
                "img": "Abigail_Rolon-Lila.jpg",
                "title": "Lila"
            },
            {
                "name": "Adán Fernandez",
                "thumb": "Adan_Fernandez.png",
                "img": "Adan_Fernandez.jpeg",
                "title": null
            },
            {
                "name": "Alan Barrios",
                "thumb": "Alan_Barrios-Juanito_El_Patito.png",
                "img": "Alan_Barrios-Juanito_El_Patito.jpg",
                "title": "El Patito"
            },
            {
                "name": "Alejandro Cañete Páez",
                "thumb": "Alejandro_Canete_Paez.png",
                "img": "Alejandro_Canete_Paez.jpg",
                "title": null
            },
            {
                "name": "Alexandro Daniel Rojas",
                "thumb": "Alexandro_Daniel_Rojas-CHE_RENDA_ALAZAN_PILARE.png",
                "img": "Alexandro_Daniel_Rojas-CHE_RENDA_ALAZAN_PILARE.jpg",
                "title": "CHE RENDA ALAZAN PILARE"
            },
            {
                "name": "Alma Acosta",
                "thumb": "Alma_Acosta-Dinosaurio_Manchitas.png",
                "img": "Alma_Acosta-Dinosaurio_Manchitas.jpeg",
                "title": "Dinosaurio Manchitas"
            },
            {
                "name": "Alma Fiorella Mongelós Velazco",
                "thumb": "Alma_Fiorella-Mongelos_Velazco.png",
                "img": "Alma_Fiorella Mongelos_Velazco.jpeg",
                "title": null
            },
            {
                "name": "Amira Villalba",
                "thumb": "Amira_Villalba-Baby_Unicorn.png",
                "img": "Amira_Villalba-Baby_Unicorn.jpg",
                "title": "Baby Unicorn"
            },
            {
                "name": "Andrea Barrios",
                "thumb": "Andrea_Barrios.png",
                "img": "Andrea_Barrios.jpeg",
                "title": null
            },
            {
                "name": "Andrea Guadalupe Aceval Contrera",
                "thumb": "Andrea_Guadalupe_Aceval_Contrera.png",
                "img": "Andrea_Guadalupe_Aceval_Contrera.jpg",
                "title": null
            },
            {
                "name": "Annia Sofía Ramírez Ferreira",
                "thumb": "Annia_Sofia_Ramirez_Ferreira_.png",
                "img": "Annia_Sofia_Ramirez_Ferreira_.jpg",
                "title": null
            },
            {
                "name": "Arianna Torres",
                "thumb": "Arianna_Torres-Arcoiris.png",
                "img": "Arianna_Torres-Arcoiris.jpeg",
                "title": "Arcoíris"
            },
            {
                "name": "Benjamín González",
                "thumb": "Benjamin_Gonzalez.png",
                "img": "Benjamin_Gonzalez.jpg",
                "title": null
            },
            {
                "name": "Benjamín Morell",
                "thumb": "Benjamin_Morell-Terodactilo_Blue.png",
                "img": "Benjamin_Morell-Terodactilo_Blue.jpeg",
                "title": "Terodáctilo Blue"
            },
            {
                "name": "Benjamín Portillo",
                "thumb": "Benjamin_Portillo-Filiberto.png",
                "img": "Benjamin_Portillo-Filiberto.jpg",
                "title": "Filiberto"
            },
            {
                "name": "Brenda Valdez",
                "thumb": "Brenda_Valdez-Coqueta_La_Exploradora.png",
                "img": "Brenda_Valdez-Coqueta_La_Exploradora.jpg",
                "title": "Coqueta La Exploradora"
            },
            {
                "name": "Bruno Aguilera",
                "thumb": "Bruno_Aguilera-Estigui.png",
                "img": "Bruno_Aguilera-Estigui.jpg",
                "title": "Estiqui"
            },
            {
                "name": "Bruno Gutiérrez",
                "thumb": "Bruno_Gutierrez.png",
                "img": "Bruno_Gutierrez.jpg",
                "title": null
            },
            {
                "name": "Bárbara Fretes",
                "thumb": "Barbara_Fretes.png",
                "img": "Barbara_Fretes.jpg",
                "title": null
            },
            {
                "name": "Camila Martinez",
                "thumb": "Camila_Martinez.png",
                "img": "Camila_Martinez.jpg",
                "title": null
            },
            {
                "name": "Carlos Mateo Díaz Rius",
                "thumb": "Carlos_Mateo_Diaz_Rius.png",
                "img": "Carlos_Mateo_Diaz_Rius.jpg",
                "title": null
            },
            {
                "name": "Cecilia Olmedo",
                "thumb": "Cecilia_Olmedo.png",
                "img": "Cecilia_Olmedo.jpg",
                "title": null
            },
            {
                "name": "Cecilia Olmedo",
                "thumb": "Cecilia_Olmedo_2.png",
                "img": "Cecilia_Olmedo_2.jpeg",
                "title": null
            },
            {
                "name": "Celeste Claribel Céspedes",
                "thumb": "Celeste_Claribel_Cespedes-Sadi.png",
                "img": "Celeste_Claribel_Cespedes-Sadi.jpg",
                "title": "Sadi"
            },
            {
                "name": "Claudia Maricel Armoa",
                "thumb": "Claudia_Maricel_Armoa.png",
                "img": "Claudia_Maricel_Armoa.jpg",
                "title": null
            },
            {
                "name": "Danna Jiménez",
                "thumb": "Danna_Jimenez-Choco.png",
                "img": "Danna_Jimenez-Choco.jpeg",
                "title": "Choco"
            },
            {
                "name": "Darlig Céspedes",
                "thumb": "Darling_Cespedes-Tobi.png",
                "img": "Darling_Cespedes-Tobi.jpg",
                "title": "Tobi"
            },
            {
                "name": "Diamela Ferreira",
                "thumb": "Diamela_Ferreira-Unicornio_Dani.png",
                "img": "Diamela_Ferreira-Unicornio_Dani.jpg",
                "title": "Unicornio Dani"
            },
            {
                "name": "Diogo Giménez",
                "thumb": "Diogo_Gimenez-Luni_Cornio.png",
                "img": "Diogo_Gimenez-Luni_Cornio.jpeg",
                "title": "Luni Cornio"
            },
            {
                "name": "Eduardo Francisco Cañete",
                "thumb": "Eduardo_Francisco_Canete.png",
                "img": "Eduardo_Francisco_Canete.jpg",
                "title": null
            },
            {
                "name": "Ehitan Montiel",
                "thumb": "Ehitan_Montiel.png",
                "img": "Ehitan_Montiel.jpg",
                "title": null
            },
            {
                "name": "Elena Isabel Quintana",
                "thumb": "Elena_Isabel_Quintana.png",
                "img": "Elena_Isabel_Quintana.jpg",
                "title": null
            },
            {
                "name": "Emanuel Velazco Gamarra",
                "thumb": "Emanuel_Velazco_Gamarra.png",
                "img": "Emanuel_Velazco_Gamarra.jpeg",
                "title": null
            },
            {
                "name": "Emanuel Velazco Gamarra",
                "thumb": "Emanuel_Velazco_Gamarra_2.png",
                "img": "Emanuel_Velazco_Gamarra_2.jpeg",
                "title": null
            },
            {
                "name": "Emma Nahiara Cousirat Ojeda",
                "thumb": "Emma_Nahiara_Cousirat_Ojeda-Princesa_Sofia.png",
                "img": "Emma_Nahiara_Cousirat_Ojeda-Princesa_Sofia.jpg",
                "title": "Princesa Sofía"
            },
            {
                "name": "Enzo Leonel Portillo González",
                "thumb": "Enzo_Leonel_Portillo_Gonzalez_.png",
                "img": "Enzo_Leonel_Portillo_Gonzalez_.jpg",
                "title": null
            },
            {
                "name": "Euclides Flores",
                "thumb": "Euclides_Flores-Shok.png",
                "img": "Euclides_Flores-Shok.jpeg",
                "title": "Shok"
            },
            {
                "name": "Fabio Rolón",
                "thumb": "Fabio_Rolon-Leonidas.png",
                "img": "Fabio_Rolon-Leonidas.jpg",
                "title": "Leónidas"
            },
            {
                "name": "Fiorella Lobos",
                "thumb": "Fiorella_Lobos-Petra.png",
                "img": "Fiorella_Lobos-Petra.jpg",
                "title": "Petra"
            },
            {
                "name": "Fiorella Miranda",
                "thumb": "Fiorella_Miranda.png",
                "img": "Fiorella_Miranda.jpg",
                "title": null
            },
            {
                "name": "Franco Pinto",
                "thumb": "Franco_Pinto-Dinosaurio_Bronti.png",
                "img": "Franco_Pinto-Dinosaurio_Bronti.jpg",
                "title": "Dinosaurio Bronti"
            },
            {
                "name": "Fátima y Aldana Céspedes",
                "thumb": "Fatima_y_Aldana_Cespedes..png",
                "img": "Fatima_y_Aldana_Cespedes.jpeg",
                "title": null
            },
            {
                "name": "Gabriela Sánchez Guillén",
                "thumb": "Gabriela_Sanchez_Guillen.png",
                "img": "Gabriela_Sanchez_Guillen.jpg",
                "title": null
            },
            {
                "name": "Gabriela Sánchez Guillén",
                "thumb": "Gabriela_Sanchez_Guillen-Emma.png",
                "img": "Gabriela_Sanchez_Guillen-Emma.jpg",
                "title": "Emma"
            },
            {
                "name": "Giuliana Isabella Romero Riveros",
                "thumb": "Giuliana_Isabella_Romero_Riveros-Lavanda.png",
                "img": "Giuliana_Isabella_Romero_Riveros-Lavanda.jpg",
                "title": "Lavanda"
            },
            {
                "name": "Giuliano Pereyra",
                "thumb": "Giuliano-Pereyra-_Llamita-en-llamas_.png",
                "img": "Giuliano Pereyra _Llamita en llamas_.jpg",
                "title": "Llamita en llamas"
            },
            {
                "name": "Gonzalo Ferreira",
                "thumb": "Gonzalo_Ferreira-Perro_Mike.png",
                "img": "Gonzalo_Ferreira-Perro_Mike.jpg",
                "title": "Perro Mike"
            },
            {
                "name": "Hanna Zalazar Ruiz",
                "thumb": "Hanna_Zalazar-Ruiz-Hannicorn.png",
                "img": "Hanna_Zalazar Ruiz-Hannicorn.jpeg",
                "title": "Hannicorn"
            },
            {
                "name": "Helem Jannet Paredes",
                "thumb": "Helem_Jannet_Paredes.png",
                "img": "Helem_Jannet_Paredes.jpg",
                "title": null
            },
            {
                "name": "Ivan Nahuel Attis Sánchez",
                "thumb": "Ivan_Nahuel_Attis_Sanchez-Ovejurro_.png",
                "img": "Ivan_Nahuel_Attis_Sanchez-Ovejurro_.jpg",
                "title": "Ovejurro"
            },
            {
                "name": "Jessica Báez",
                "thumb": "Jessica_Baez-Sasha.png",
                "img": "Jessica_Baez-Sasha.jpeg",
                "title": "Sasha"
            },
            {
                "name": "Johana Sosa",
                "thumb": "Johana_Sosa-Dulce.png",
                "img": "Johana_Sosa-Dulce.jpg",
                "title": "Dulce"
            },
            {
                "name": "Josué Agustín Ramírez",
                "thumb": "Josue_Agustin_Ramirez_Solis-Roni.png",
                "img": "Josue_Agustin_Ramirez_Solis-Roni.jpg",
                "title": "Roni"
            },
            {
                "name": "José Miguel Antola",
                "thumb": "Jose_Miguel_Antola.png",
                "img": "Jose_Miguel_Antola.jpg",
                "title": null
            },
            {
                "name": "Juan Miguel Martínez",
                "thumb": "Juan_Miguel_Martinez-Tordillito.png",
                "img": "Juan_Miguel_Martinez-Tordillito.jpg",
                "title": "Tordillito"
            },
            {
                "name": "Julieta Vargas",
                "thumb": "Julieta-Vargas-Isabelo_Bigotes.png",
                "img": "Julieta_Vargas-Isabelo_Bigotes.jpeg",
                "title": "Isabelo Bigotes"
            },
            {
                "name": "Julieta Veloso",
                "thumb": "Julieta_Veloso-Magui.png",
                "img": "Julieta_Veloso-Magui.jpg",
                "title": "Magui"
            },
            {
                "name": "Junior Romero",
                "thumb": "Junior_Romero.png",
                "img": "Junior_Romero.jpg",
                "title": null
            },
            {
                "name": "Karla Tatiana Gauto Morínigo",
                "thumb": "Karla_Tatiana_Gauto_Morinigo-Signi.png",
                "img": "Karla_Tatiana_Gauto_Morinigo-Signi.jpg",
                "title": "Signi"
            },
            {
                "name": "Keilly Salcedo",
                "thumb": "Keilly_Salcedo.png",
                "img": "Keilly_Salcedo.jpeg",
                "title": null
            },
            {
                "name": "Kevin Zarnikowsky Mura",
                "thumb": "Kevin_Zarnikowsky_Mura.png",
                "img": "Kevin_Zarnikowsky_Mura.jpg",
                "title": null
            },
            {
                "name": "Kiara Anahí Ferreira Fontana",
                "thumb": "Kiara_Anahi_Ferreira_Fontana-Bambi.png",
                "img": "Kiara_Anahi_Ferreira_Fontana-Bambi.jpg",
                "title": "Bambi"
            },
            {
                "name": "Kiara Mora",
                "thumb": "Kiara_Mora-Black.png",
                "img": "Kiara_Mora-Black.jpg",
                "title": "Black"
            },
            {
                "name": "Kiara Zarnikowsky Mura",
                "thumb": "Kiara_Zarnikowsky_Mura-Tucan_Drag.png",
                "img": "Kiara_Zarnikowsky_Mura-Tucan_Drag.jpg",
                "title": "Tucan Drag"
            },
            {
                "name": "Lara Anabell Gómez Cáceres",
                "thumb": "Lara_Anabell_Gomez_Caceres.png",
                "img": "Lara_Anabell_Gomez_Caceres.jpg",
                "title": null
            },
            {
                "name": "Lara Caballero Romero",
                "thumb": "Lara_Caballero_Romero-Karen.png",
                "img": "Lara_Caballero_Romero-Karen.jpeg",
                "title": "Karen"
            },
            {
                "name": "Larissa Ruíz Vargas",
                "thumb": "Larissa-Ruiz-Vargas-_Lucy_.png",
                "img": "LarissaRuizVargas.jpg",
                "title": "Lucy"
            },
            {
                "name": "Lua Margarita López",
                "thumb": "Lua_Margarita_Lopez-Espumita_Blanca.png",
                "img": "Lua_Margarita_Lopez-Espumita_Blanca.jpg",
                "title": "Espumita Blanca"
            },
            {
                "name": "Luana Veloso",
                "thumb": "Luana_Veloso-Oveja_Pompo.png",
                "img": "Luana_Veloso-Oveja_Pompo.jpeg",
                "title": "La Oveja Pompo"
            },
            {
                "name": "Lucas Ezequiel Portillo González",
                "thumb": "Lucas_Ezequiel_Portillo_Gonzalez_.png",
                "img": "Lucas_Ezequiel_Portillo_Gonzalez_.jpg",
                "title": null
            },
            {
                "name": "Lucas Santino Sánchez",
                "thumb": "Lucas_Santino_Sanchez.png",
                "img": "Lucas_Santino_Sanchez.jpg",
                "title": null
            },
            {
                "name": "Lucas Santino Sánchez",
                "thumb": "Lucas_Santino_Sanchez_2.png",
                "img": "Lucas_Santino_Sanchez_2.jpg",
                "title": null
            },
            {
                "name": "Lucca Fabrizzio Acosta",
                "thumb": "Lucca_Fabrizio_Acosta_Mellone.png",
                "img": "Lucca_Fabrizio_Acosta_Mellone.jpg",
                "title": null
            },
            {
                "name": "Luissana Antonella Benítez",
                "thumb": "Luissana_Antonella_Benitez-Uni.png",
                "img": "Luissana_Antonella_Benitez-Uni.jpg",
                "title": "Uni"
            },
            {
                "name": "Martina López de Felice",
                "thumb": "Martina_Lopez_De_Felice.png",
                "img": "Martina_Lopez_De_Felice.jpg",
                "title": null
            },
            {
                "name": "María del Cielo Velazco",
                "thumb": "Maria_del_Cielo_Velazco-Deisy.png",
                "img": "Maria_del_Cielo_Velazco-Deisy.jpg",
                "title": "Deisy"
            },
            {
                "name": "María Eugenia Portillo",
                "thumb": "Maria_Eugenia_Portillo-Algodon_de_azucar.png",
                "img": "Maria_Eugenia_Portillo-Algodon_de_azucar.jpg",
                "title": "Algodón de Azúcar"
            },
            {
                "name": "María Paz Acuña Ferreira",
                "thumb": "Maria_Paz_Acuña_Ferreira-Unicornio_Algodon_de_Azucar.png",
                "img": "Maria_Paz_Acuña_Ferreira-Unicornio_Algodon_de_Azucar.jpg",
                "title": "Unicornio Algodón de Azúcar"
            },
            {
                "name": "Matías Segovia",
                "thumb": "Matias_Segovia-Dino.png",
                "img": "Matias_Segovia-Dino.jpg",
                "title": "Dino"
            },
            {
                "name": "Matías Zalazar",
                "thumb": "Matias_Zalazar.png",
                "img": "Matias_Zalazar.jpg",
                "title": null
            },
            {
                "name": "Maximiliano Ferreiro",
                "thumb": "Maximiliano_Ferreiro.png",
                "img": "Maximiliano_Ferreiro.jpg",
                "title": null
            },
            {
                "name": "Maylen Isabella Zárate Céspedes",
                "thumb": "Maylen_Isabella_Zarate_Céspedes-Ceci.png",
                "img": "Maylen_Isabella_Zarate_Céspedes-Ceci.jpg",
                "title": "Ceci"
            },
            {
                "name": "Micaela Rolón",
                "thumb": "Micaela-Rolón-_Laura-_.png",
                "img": "Micaela_Rolón-Laura.jpg",
                "title": "Laura"
            },
            {
                "name": "Mía Achucarro",
                "thumb": "Mia_Achucarro-Garfield_y_Teddy.png",
                "img": "Mía_Achucarro-Garfield_y_Teddy.jpeg",
                "title": "Garfield y Teddy"
            },
            {
                "name": "Naara Berenice Velázquez",
                "thumb": "Naara_Berenice_Velazquez.png",
                "img": "Naara_Berenice_Velazquez.jpg",
                "title": null
            },
            {
                "name": "Nancy Aylen Pérez Romero",
                "thumb": "Nancy_Aylen_Perez_Romero-Unicornio_Negro.png",
                "img": "Nancy_Aylen_Perez_Romero-Unicornio_Negro.jpg",
                "title": "Unicornio Negro"
            },
            {
                "name": "Sofía Margarita Jara Alarcón",
                "thumb": "Sofia_Margarita_Jara_Alarcon-Uniquers.png",
                "img": "Sofia_Margarita_Jara_Alarcon-Uniquers.jpg",
                "title": "Uniquers"
            },
            {
                "name": "Sofía Sánchez",
                "thumb": "Sofia_Sanchez-Ambar.png",
                "img": "Sofia_Sanchez-Ambar.jpeg",
                "title": "Ámbar"
            },
            {
                "name": "Sthefani Rodríguez",
                "thumb": "Sthefani_Rodriguez.png",
                "img": "Sthefani_Rodriguez.jpg",
                "title": null
            },
            {
                "name": "Thiago Barrios Balmaceda",
                "thumb": "Thiago_Barrios_Balmaceda.png",
                "img": "Thiago_Barrios_Balmaceda.jpeg",
                "title": null
            },
            {
                "name": "Thiago Rolón",
                "thumb": "Thiago_Rolon-El_Suertudo.png",
                "img": "Thiago_Rolon-El_Suertudo.jpg",
                "title": "El Suertudo"
            },
            {
                "name": "Tomás Morínigo",
                "thumb": "Tomas_Morinigo-El_Dragon_Final.png",
                "img": "Tomas_Morinigo-El_Dragon_Final.jpg",
                "title": "El Dragón Final"
            },
            {
                "name": "Valentino Josafat Verón Medina",
                "thumb": "Valentino_Josafat_Veron_Medina-Zeus.png",
                "img": "Valentino_Josafat_Veron_Medina-Zeus.jpg",
                "title": "Zeus"
            },
            {
                "name": "Valentín Ferreira",
                "thumb": "Valentin_Ferreira-El_Burro_Aldo.png",
                "img": "Valentin_Ferreira-El_Burro_Aldo.jpeg",
                "title": "El Burro Aldo"
            },
            {
                "name": "Yheny Ayala",
                "thumb": "Yheny_Ayala-Ovejacornio.png",
                "img": "Yheny_Ayala-Ovejacornio.jpg",
                "title": "Ovejacornio"
            },
            {
                "name": "Zoe Gómez",
                "thumb": "Zoe_Gomez-Yoy.png",
                "img": "Zoe_Gomez-Yoy.jpg",
                "title": "Yoy"
            }
        ],
        encarnacion: [
            {
                "name": "Adrián Cáceres",
                "thumb": "Adrian_Caceres.png",
                "img": "Adrian_Caceres.jpg",
                "title": null
            },
            {
                "name": "Alis Abreu",
                "thumb": "Alis_Abreu.png",
                "img": "Alis_Abreu.jpeg",
                "title": null
            },
            {
                "name": "Ana Paula Guggiari",
                "thumb": "Ana_Paula_Guggiari.png",
                "img": "Ana_Paula_Guggiari.jpg",
                "title": null
            },
            {
                "name": "Angélica Armoa",
                "thumb": "Angelica_Armoa_.png",
                "img": "Angelica_Armoa_.jpg",
                "title": null
            },
            {
                "name": "Antonela Benítez",
                "thumb": "Antonela_Benitez.png",
                "img": "Antonela_Benitez.jpeg",
                "title": null
            },
            {
                "name": "Araceli Yerutí Gómez Cáceres",
                "thumb": "Araceli_Yeruti_Gomez_Caceres.png",
                "img": "Araceli_Yeruti_Gomez_Caceres.jpeg",
                "title": null
            },
            {
                "name": "Arturo Portillo",
                "thumb": "Arturo_Portillo.png",
                "img": "Arturo_Portillo.jpg",
                "title": null
            },
            {
                "name": "Augusto Rojas",
                "thumb": "Augusto_Rojas.png",
                "img": "Augusto_Rojas.jpg",
                "title": null
            },
            {
                "name": "Bianca Duarte",
                "thumb": "Bianca_Duarte.png",
                "img": "Bianca_Duarte.jpeg",
                "title": null
            },
            {
                "name": "Bianca Duarte",
                "thumb": "Bianca_Duarte_2.png",
                "img": "Bianca_Duarte_2.jpeg",
                "title": null
            },
            {
                "name": "Brahian Figueredo",
                "thumb": "Brahian_Figueredo.png",
                "img": "Brahian_Figueredo.jpg",
                "title": null
            },
            {
                "name": "Camila Ibarra",
                "thumb": "Camila_Ibarra.png",
                "img": "Camila_Ibarra.jpeg",
                "title": null
            },
            {
                "name": "Camila Monserrat Vera",
                "thumb": "Camila_Monserrat_Vera.png",
                "img": "Camila_Monserrat_Vera.jpg",
                "title": null
            },
            {
                "name": "Carmen Ortiz",
                "thumb": "Carmen_Ortiz.png",
                "img": "Carmen_Ortiz.jpg",
                "title": null
            },
            {
                "name": "Ciro Sambuchetti",
                "thumb": "Ciro_Sambuchetti.png",
                "img": "Ciro_Sambuchetti.jpg",
                "title": null
            },
            {
                "name": "Clara López",
                "thumb": "Clara_Lopez.png",
                "img": "Clara_Lopez.jpeg",
                "title": null
            },
            {
                "name": "Crispín Elías Caballero",
                "thumb": "Crispin_Elias_Caballero.png",
                "img": "Crispin_Elias_Caballero.jpeg",
                "title": null
            },
            {
                "name": "Crispín Elías Caballero",
                "thumb": "Crispin_Elias_Caballero_2.png",
                "img": "Crispin_Elias_Caballero_2.jpeg",
                "title": null
            },
            {
                "name": "Dahiana Rolón",
                "thumb": "Dahiana_Rolon.png",
                "img": "Dahiana_Rolon.jpg",
                "title": null
            },
            {
                "name": "Danna Fariña Jara",
                "thumb": "Danna_Farina_Jara.png",
                "img": "Danna_Farina_Jara.jpeg",
                "title": null
            },
            {
                "name": "Danna Sotelo",
                "thumb": "Danna_Sotelo.png",
                "img": "Danna_Sotelo.jpg",
                "title": null
            },
            {
                "name": "David Ojeda",
                "thumb": "David_Ojeda.png",
                "img": "David_Ojeda.jpg",
                "title": null
            },
            {
                "name": "David Segovia",
                "thumb": "David_Segovia.png",
                "img": "David_Segovia.jpeg",
                "title": null
            },
            {
                "name": "Dimas Derico",
                "thumb": "Dimas_Derico.png",
                "img": "Dimas_Derico.jpg",
                "title": null
            },
            {
                "name": "Dylan Estigarribia",
                "thumb": "Dylan_Estigarribia.png",
                "img": "Dylan_Estigarribia.jpg",
                "title": null
            },
            {
                "name": "Dylan Wood",
                "thumb": "Dylan_Wood.png",
                "img": "Dylan_Wood.jpeg",
                "title": null
            },
            {
                "name": "Evelyn Castillo",
                "thumb": "Evelyn_Castillo.png",
                "img": "Evelyn_Castillo.jpg",
                "title": null
            },
            {
                "name": "Fabiola Vera",
                "thumb": "Fabiola_Vera.png",
                "img": "Fabiola_Vera.jpeg",
                "title": null
            },
            {
                "name": "Fernando Ayala",
                "thumb": "Fernando_Ayala.png",
                "img": "Fernando_Ayala.jpeg",
                "title": null
            },
            {
                "name": "Fidel Ullón",
                "thumb": "Fidel_Ullon.png",
                "img": "Fidel_Ullon.jpeg",
                "title": null
            },
            {
                "name": "Fidel Ullón",
                "thumb": "Fidel_Ullon_2.png",
                "img": "Fidel_Ullon_2.jpeg",
                "title": null
            },
            {
                "name": "Fiorella Lujan Amatte Riveros",
                "thumb": "Fiorella_Lujan-Amatte_Riveros.png",
                "img": "Fiorella_Lujan Amatte_Riveros.jpeg",
                "title": null
            },
            {
                "name": "Genaro Samuel Vicevich",
                "thumb": "Genaro_Samuel_Vicevich.png",
                "img": "Genaro_Samuel_Vicevich.jpg",
                "title": null
            },
            {
                "name": "Gerardo Vera",
                "thumb": "Gerardo_Vera.png",
                "img": "Gerardo_Vera.jpg",
                "title": null
            },
            {
                "name": "Giuliana Barrios",
                "thumb": "Giuliana_Barrios.png",
                "img": "Giuliana_Barrios.jpg",
                "title": null
            },
            {
                "name": "Giulio Derico",
                "thumb": "Giulio_Derico.png",
                "img": "Giulio_Derico.jpg",
                "title": null
            },
            {
                "name": "Guadalupe Yerutí González",
                "thumb": "Guadalupe_Yeruti_Gonzalez.png",
                "img": "Guadalupe_Yeruti_Gonzalez.jpg",
                "title": null
            },
            {
                "name": "Guillermo Almada",
                "thumb": "Guillermo_Almada.png",
                "img": "Guillermo_Almada.jpg",
                "title": null
            },
            {
                "name": "Helen Núñez",
                "thumb": "Helen_Nunez.png",
                "img": "Helen_Nunez.jpg",
                "title": null
            },
            {
                "name": "Hugo Ezequiel Stark",
                "thumb": "Hugo_Ezequiel_Stark.png",
                "img": "Hugo_Ezequiel_Stark.jpg",
                "title": null
            },
            {
                "name": "Ian Alexis Rodríguez",
                "thumb": "Ian_Alexis_Rodriguez.png",
                "img": "Ian_Alexis_Rodriguez .jpg",
                "title": null
            },
            {
                "name": "Jazmín Juliana Fariña",
                "thumb": "Jazmin_Juliana_Farina.png",
                "img": "Jazmin_Juliana_Farina.jpeg",
                "title": null
            },
            {
                "name": "Jeremías Gabriel Ojeda",
                "thumb": "Jeremias_Gabriel_Ojeda.png",
                "img": "Jeremias_Gabriel_Ojeda.jpeg",
                "title": null
            },
            {
                "name": "Johanna Benítez",
                "thumb": "Johanna_Benitez.png",
                "img": "Johanna_Benitez.jpg",
                "title": null
            },
            {
                "name": "Josías Brizuela",
                "thumb": "Josias_Brizuela.png",
                "img": "Josias_Brizuela.jpeg",
                "title": null
            },
            {
                "name": "Julieta Ayala",
                "thumb": "Julieta_Ayala.png",
                "img": "Julieta_Ayala.jpg",
                "title": null
            },
            {
                "name": "Karen Soto",
                "thumb": "Karen_Soto.png",
                "img": "Karen_Soto.jpg",
                "title": null
            },
            {
                "name": "Katerine Jacquet",
                "thumb": "Katerine_Jacquet.png",
                "img": "Katerine_Jacquet.jpg",
                "title": null
            },
            {
                "name": "Kiara Vega",
                "thumb": "Kiara_Vega.png",
                "img": "Kiara_Vega.jpg",
                "title": null
            },
            {
                "name": "Kymberli Noguera",
                "thumb": "Kymberli_Noguera.png",
                "img": "Kymberli_Noguera.jpg",
                "title": null
            },
            {
                "name": "Lorenzo Cáceres",
                "thumb": "Lorenzo_Caceres.png",
                "img": "Lorenzo_Caceres.jpg",
                "title": null
            },
            {
                "name": "Maira Abigail Alvarez",
                "thumb": "Maira_Abigail_Alvarez.png",
                "img": "Maira_Abigail_Alvarez.jpg",
                "title": null
            },
            {
                "name": "Maira Agustina Martínez",
                "thumb": "Maira_Agustina_Martinez.png",
                "img": "Maira_Agustina_Martinez.jpg",
                "title": null
            },
            {
                "name": "Maite Vera",
                "thumb": "Maite_Vera.png",
                "img": "Maite_Vera.jpg",
                "title": null
            },
            {
                "name": "Mariana Arzamendia",
                "thumb": "Mariana_Arzamendia.png",
                "img": "Mariana_Arzamendia.jpeg",
                "title": null
            },
            {
                "name": "Mario Adrián Romero",
                "thumb": "Mario_Adrian_Romero.png",
                "img": "Mario_Adrian_Romero.jpeg",
                "title": null
            },
            {
                "name": "Mathías Arzamendia",
                "thumb": "Mathias_Arzamendia.png",
                "img": "Mathias_Arzamendia.jpeg",
                "title": null
            },
            {
                "name": "Mathías Arzamendia",
                "thumb": "Mathias_Arzamendia_2.png",
                "img": "Mathias_Arzamendia_2.jpeg",
                "title": null
            },
            {
                "name": "Melaniee Zayas",
                "thumb": "Melaniee_Zayas.png",
                "img": "Melaniee_Zayas.jpeg",
                "title": null
            },
            {
                "name": "Melissa Caballero",
                "thumb": "Melissa_Caballero.png",
                "img": "Melissa_Caballero.jpg",
                "title": null
            },
            {
                "name": "Micaela Magalí Duarte",
                "thumb": "Micaela_Magali_Duarte.png",
                "img": "Micaela_Magali_Duarte.jpg",
                "title": null
            },
            {
                "name": "Milagros y Angel Medina",
                "thumb": "Milagros_y_Angel_Medina.png",
                "img": "Milagros_y_Angel_Medina.jpg",
                "title": null
            },
            {
                "name": "Milena Aquino",
                "thumb": "Milena_Aquino.png",
                "img": "Milena_Aquino.jpg",
                "title": null
            },
            {
                "name": "Nahianka Olejnik",
                "thumb": "Nahianka_Olejnik.png",
                "img": "Nahianka_Olejnik.jpeg",
                "title": null
            },
            {
                "name": "Nahir Fariña Jara",
                "thumb": "Nahir_Farina_Jara.png",
                "img": "Nahir_Farina_Jara.jpeg",
                "title": null
            },
            {
                "name": "Nicol Portillo",
                "thumb": "Nicol_Portillo.png",
                "img": "Nicol_Portillo.jpg",
                "title": null
            },
            {
                "name": "Pierre Mazier",
                "thumb": "Pierre_Mazier.png",
                "img": "Pierre_Mazier.jpg",
                "title": null
            },
            {
                "name": "Renato Delvalle",
                "thumb": "Renato_Delvalle.png",
                "img": "Renato_Delvalle.jpg",
                "title": null
            },
            {
                "name": "Rita Cabrera",
                "thumb": "Rita_Cabrera.png",
                "img": "Rita_Cabrera.jpg",
                "title": null
            },
            {
                "name": "Rocío Rolón",
                "thumb": "Rocio_Rolon.png",
                "img": "Rocio_Rolon.jpeg",
                "title": null
            },
            {
                "name": "Rocío Rolón",
                "thumb": "Rocio_Rolon_2.png",
                "img": "Rocio_Rolon_2.jpeg",
                "title": null
            },
            {
                "name": "Sabrina Ayala",
                "thumb": "Sabrina_Ayala.png",
                "img": "Sabrina_Ayala.jpg",
                "title": null
            },
            {
                "name": "Samira Jimena Ailén Espínola",
                "thumb": "Samira_Jimena_Ailen_Espinola.png",
                "img": "Samira_Jimena_Ailen_Espinola.jpeg",
                "title": null
            },
            {
                "name": "Santiago Ian Palacios",
                "thumb": "Santiago_Ian_Palacios-Caballo_Black.png",
                "img": "Santiago_Ian_Palacios-Caballo_Black.jpeg",
                "title": "Caballo Black"
            },
            {
                "name": "Santino Argüello",
                "thumb": "Santino_Arguello.png",
                "img": "Santino_Arguello.jpg",
                "title": null
            },
            {
                "name": "Sasha Benítez",
                "thumb": "Sasha_Benitez.png",
                "img": "Sasha_Benitez.jpeg",
                "title": null
            },
            {
                "name": "Sasha Benítez",
                "thumb": "Sasha_Benitez_2.png",
                "img": "Sasha_Benitez_2.jpeg",
                "title": null
            },
            {
                "name": "Sofía Rojas",
                "thumb": "Sofia_Rojas.png",
                "img": "Sofia_Rojas.jpg",
                "title": null
            },
            {
                "name": "Sol Villasanti",
                "thumb": "Sol_Villasanti.png",
                "img": "Sol_Villasanti.jpeg",
                "title": null
            },
            {
                "name": "Stephie Ailén Bernal",
                "thumb": "Stephie_Ailen_Bernal.png",
                "img": "Stephie_Ailen_Bernal.jpg",
                "title": null
            },
            {
                "name": "Tadeo Valdez",
                "thumb": "Tadeo_Valdez.png",
                "img": "Tadeo_Valdez.jpeg",
                "title": null
            },
            {
                "name": "Tamara Paredes",
                "thumb": "Tamara_Paredes.png",
                "img": "Tamara_Paredes.jpg",
                "title": null
            },
            {
                "name": "Zahijra Aquino",
                "thumb": "Zahijra_Aquino.png",
                "img": "Zahijra_Aquino.jpeg",
                "title": null
            }
        ]
    },
    'colaboracion': {
        bg: 'colaboracion-kids-bg',
        bgVert: 'colaboracion-kids-bg kids-vert',
        png: [1],
        pilar: [{
            "name":"Abigail Rolón",
            "thumb": "Abigail-Rolón_i.png",
            "img": "Abigail_Rolón_.jpg",
            "group": "g1"
        },
            {
                "name":"Amira Villalba",
                "thumb": "Amira-Villalba_i.png",
                "img": "Amira_Villalba_.jpg",
                "group": "g1"
            },{
                "name":"Abigail Rolón",
                "thumb": "Abigail-Rolón_i.png",
                "img": "Abigail_Rolón_.jpg",
                "group": "g1"
            },
            {
                "name":"Amira Villalba",
                "thumb": "Amira-Villalba_i.png",
                "img": "Amira_Villalba_.jpg",
                "group": "g1"
            },{
                "name":"Abigail Rolón",
                "thumb": "Abigail-Rolón_i.png",
                "img": "Abigail_Rolón_.jpg",
                "group": "g1"
            },
            {
                "name":"Amira Villalba",
                "thumb": "Amira-Villalba_i.png",
                "img": "Amira_Villalba_.jpg",
                "group": "g1"
            }],
        encarnacion: [{
            "name":"Alis Abreu",
            "thumb": "Alis_Abreu_i.png",
            "img": "Alis_Abreu.jpeg",
            "group": "g1"
        },
            {
                "name":"Antonela Benitez",
                "thumb": "Antonela_Benitez_i.png",
                "img": "Antonela_Benitez.jpeg",
                "group": "g1"
            },{
                "name":"Alis Abreu",
                "thumb": "Alis_Abreu_i.png",
                "img": "Alis_Abreu.jpeg",
                "group": "g1"
            },
            {
                "name":"Antonela Benitez",
                "thumb": "Antonela_Benitez_i.png",
                "img": "Antonela_Benitez.jpeg",
                "group": "g1"
            },{
                "name":"Alis Abreu",
                "thumb": "Alis_Abreu_i.png",
                "img": "Alis_Abreu.jpeg",
                "group": "g1"
            },
            {
                "name":"Antonela Benitez",
                "thumb": "Antonela_Benitez_i.png",
                "img": "Antonela_Benitez.jpeg",
                "group": "g1"
            },]
    },
    'ambiental': {
        bg: 'ambiental-kids-bg',
        bgVert: 'ambiental-kids-bg kids-vert',
        png: [1],
        encarnacion: [{"name":	"Adriana Martínez"	,"img":	"Adriana_Martinez.jpeg"	,"thumb":	"Adriana_Martinez.png"	,"title":null},
            {"name":	"Ana Paula Guggiari"	,"img":	"Ana_Paula_Guggiari.jpg"	,"thumb":	"Ana_Paula_Guggiari.png"	,"title":null},
            {"name":	"Ángel Manuel Medina"	,"img":	"Angel_Manuel_Medina.jpg"	,"thumb":	"Angel_Manuel_Medina.png"	,"title":null},
            {"name":	"Angélica Armoa"	,"img":	"Angelica_Armoa.jpeg"	,"thumb":	"Angelica_Armoa.png"	,"title":null},
            {"name":	"Antonela Benítez"	,"img":	"Antonela_Benitez.jpg"	,"thumb":	"Antonela_Benitez.png"	,"title":null},
            {"name":	"Bianca Yerutí Duarte Villalba"	,"img":	"Bianca_Yeruti_Duarte_Villalba.jpg"	,"thumb":	"Bianca_Yeruti_Duarte_Villalba.png"	,"title":null},
            {"name":	"Camila Ibarra"	,"img":	"Camila_Ibarra.jpeg"	,"thumb":	"Camila_Ibarra.png"	,"title":null},
            {"name":	"Camila Vera"	,"img":	"Camila_Vera.jpg"	,"thumb":	"Camila_Vera.png"	,"title":null},
            {"name":	"Carmen Aracelí Ortíz"	,"img":	"Carmen_Araceli_Ortiz.jpg"	,"thumb":	"Carmen_Araceli_Ortiz.png"	,"title":null},
            {"name":	"Ciro Sambuchetti"	,"img":	"Ciro_Sambuchetti.jpg"	,"thumb":	"Ciro_Sambuchetti.png"	,"title":null},
            {"name":	"Crispín Caballero"	,"img":	"Crispin_Caballero.jpeg"	,"thumb":	"Crispin_Caballero.png"	,"title":null},
            {"name":	"Dahiana Rolón"	,"img":	"Dahiana_Rolon.jpg"	,"thumb":	"Dahiana_Rolon.png"	,"title":null},
            {"name":	"Dana Sotelo"	,"img":	"Dana_Sotelo.jpg"	,"thumb":	"Dana_Sotelo.png"	,"title":null},
            {"name":	"David Segovia"	,"img":	"David_Segovia.jpeg"	,"thumb":	"David_Segovia.png"	,"title":null},
            {"name":	"Dimas Derico"	,"img":	"Dimas_Derico.jpg"	,"thumb":	"Dimas_Derico.png"	,"title":null},
            {"name":	"Dylan Wood"	,"img":	"Dylan_Wood"	,"thumb":	"Dylan_Wood.png"	,"title":null},
            {"name":	"Fabiana Benítez"	,"img":	"Fabiana_Benitez.jpg"	,"thumb":	"Fabiana_Benitez.png"	,"title":null},
            {"name":	"Fabiola Vera"	,"img":	"Fabiola_Vera.jpg"	,"thumb":	"Fabiola_Vera.png"	,"title":null},
            {"name":	"Fernando Ayala"	,"img":	"Fernando_Ayala.jpeg"	,"thumb":	"Fernando_Ayala.png"	,"title":null},
            {"name":	"Fidel Ullón"	,"img":	"Fidel_Ullon.jpg"	,"thumb":	"Fidel_Ullon.png"	,"title":null},
            {"name":	"Fiorella Lujan Amatte Riveros"	,"img":	"Fiorella_Lujan_Amatte_Riveros.jpeg"	,"thumb":	"Fiorella_Lujan_Amatte_Riveros.png"	,"title":null},
            {"name":	"Gerardo Vera"	,"img":	"Gerardo_Vera.jpeg"	,"thumb":	"Gerardo_Vera.png"	,"title":null},
            {"name":	"Guilio Derico"	,"img":	"Guilio_Derico.jpg"	,"thumb":	"Guilio_Derico.png"	,"title":null},
            {"name":	"Hugo Ezequiel Stark"	,"img":	"Hugo_Ezequiel_Stark.jpg"	,"thumb":	"Hugo_Ezequiel_Stark.png"	,"title":null},
            {"name":	"Ian Alexis Rodríguez"	,"img":	"Ian_Alexis_Rodriguez.jpg"	,"thumb":	"Ian_Alexis_Rodriguez.png"	,"title":null},
            {"name":	"Jeremías Ojeda"	,"img":	"Jeremias_Ojeda.jpeg"	,"thumb":	"Jeremias_Ojeda.png"	,"title":null},
            {"name":	"Josías Alejandro Brizuela Arzamendia"	,"img":	"Josias_Alejandro_Brizuela_Arzamendia.jpeg"	,"thumb":	"Josias_Alejandro_Brizuela_Arzamendia.png"	,"title":null},
            {"name":	"Julieta Ayala"	,"img":	"Julieta_Ayala.jpg"	,"thumb":	"Julieta_Ayala.png"	,"title":null},
            {"name":	"Karen Soto"	,"img":	"Karen_Soto.jpg"	,"thumb":	"Karen_Soto.png"	,"title":null},
            {"name":	"Katerin Jacquet"	,"img":	"Katerin_Jacquet.jpeg"	,"thumb":	"Katerin_Jacquet.png"	,"title":null},
            {"name":	"Kiara Vega"	,"img":	"Kiara_Vega.jpg"	,"thumb":	"Kiara_Vega.png"	,"title":null},
            {"name":	"Liz Ayelen Nuñez"	,"img":	"Liz_Ayelen_Nunez.jpg"	,"thumb":	"Liz_Ayelen_Nunez.png"	,"title":null},
            {"name":	"Maira Alvarez"	,"img":	"Maira_Alvarez.jpg"	,"thumb":	"Maira_Alvarez.png"	,"title":null},
            {"name":	"Maite Vera"	,"img":	"Maite_Vera.jpg"	,"thumb":	"Maite_Vera.png"	,"title":null},
            {"name":	"Mario Romero"	,"img":	"Mario_Romero.jpeg"	,"thumb":	"Mario_Romero.png"	,"title":null},
            {"name":	"Mathías Arzamendia"	,"img":	"Mathias_Arzamendia.jpg"	,"thumb":	"Mathias_Arzamendia.png"	,"title":null},
            {"name":	"Melaniee Zayas"	,"img":	"Melaniee_Zayas.jpeg"	,"thumb":	"Melaniee_Zayas.png"	,"title":null},
            {"name":	"Micaela Duarte"	,"img":	"Micaela_Duarte.jpg"	,"thumb":	"Micaela_Duarte.png"	,"title":null},
            {"name":	"Milagros Medina"	,"img":	"Milagros_Medina.jpg"	,"thumb":	"Milagros_Medina.png"	,"title":null},
            {"name":	"Milena Aquino Zarza"	,"img":	"Milena_Aquino_Zarza.jpg"	,"thumb":	"Milena_Aquino_Zarza.png"	,"title":null},
            {"name":	"Renato Delvalle"	,"img":	"Renato_Delvalle.jpg"	,"thumb":	"Renato_Delvalle.png"	,"title":null},
            {"name":	"Rita Cabrera"	,"img":	"Rita_Cabrera.jpg"	,"thumb":	"Rita_Cabrera.png"	,"title":null},
            {"name":	"Rocio Rolón"	,"img":	"Rocio_Rolon.jpg"	,"thumb":	"Rocio_Rolon.png"	,"title":null},
            {"name":	"Sabrina Ayala"	,"img":	"Sabrina_Ayala.jpg"	,"thumb":	"Sabrina_Ayala.png"	,"title":null},
            {"name":	"Santiago Ian Palacios"	,"img":	"Santiago_Ian_Palacios.jpeg"	,"thumb":	"Santiago_Ian_Palacios.png"	,"title":null},
            {"name":	"Santino Arguello"	,"img":	"Santino_Arguello.jpg"	,"thumb":	"Santino_Arguello.png"	,"title":null},
            {"name":	"Sergio Daniel"	,"img":	"Sergio_Daniel.jpeg"	,"thumb":	"Sergio_Daniel.png"	,"title":null},
            {"name":	"Shasha Benítez"	,"img":	"Shasha_Benitez.jpg"	,"thumb":	"Shasha_Benitez.png"	,"title":null},
            {"name":	"Stephie Aylen Bernal"	,"img":	"Stephie_Aylen_Bernal.jpg"	,"thumb":	"Stephie_Aylen_Bernal.png"	,"title":null},
            {"name":	"Tadeo Valdez"	,"img":	"Tadeo_Valdez.jpg"	,"thumb":	"Tadeo_Valdez.png"	,"title":null},
            {"name":	"Tamara Paredes"	,"img":	"Tamara_Paredes.jpg"	,"thumb":	"Tamara_Paredes.png"	,"title":null},
            {"name":	"Mariana Arzamendia"	,"img":	"Mariana_Arzamendia.jpg"	,"thumb":	"Mathias_Arzamendia.png"	,"title":null},
            {"name":	"Pierre Ignacio Mazier"	,"img":	"Pierre_Ignacio_Mazier.jpeg"	,"thumb":	"Pierre_Ignacio_Mazier.png"	,"title":null},
            {"name":	"David Ojeda"	,"img":	"David_Ojeda.jpeg"	,"thumb":	"David_Ojeda.png"	,"title":null},
            {"name":	"Genaro Samuel Vicevich"	,"img":	"Genaro_Samuel_Vicevich.jpeg"	,"thumb":	"Genaro_Samuel_Vicevich.png"	,"title":null},
            {"name":	"Alejandro Luis Sitzmann"	,"img":	"Alejandro_Luis_Sitzmann.jpeg"	,"thumb":	"Alejandro_Luis_Sitzmann.png"	,"title":null},
            {"name":	"Sofía Rojas"	,"img":	"Sofia_Rojas.jpg"	,"thumb":	"Sofia_Rojas.png"	,"title":null},
        ],
        pilar: [{"name":	"Abigail Morel"	,"img":	"Abigail_Morel.jpeg"	,"thumb":	"Abigail_Morel.png"	,"title":null},
            {"name":	"Alejandro Cañete Páez"	,"img":	"Alejandro_Canete_Paez.jpg"	,"thumb":	"Alejandro_Canete_Paez.png"	,"title":null},
            {"name":	"Alma Acosta"	,"img":	"Alma_Acosta.jpeg"	,"thumb":	"Alma_Acosta.png"	,"title":null},
            {"name":	"Alma Mongelos"	,"img":	"Alma_Mongelos.jpeg"	,"thumb":	"Alma_Mongelos.png"	,"title":null},
            {"name":	"Ámbar Diamela Ferreira"	,"img":	"Ambar_Diamela_Ferreira.jpeg"	,"thumb":	"Ambar_Diamela_Ferreira.png"	,"title":null},
            {"name":	"Andrea Aceval"	,"img":	"Andrea_Aceval.jpeg"	,"thumb":	"Andrea_Aceval.png"	,"title":null},
            {"name":	"Andrea Barrios"	,"img":	"Andrea_Barrios.jpeg"	,"thumb":	"Andrea_Barrios.png"	,"title":null},
            {"name":	"Aracely Amarilla"	,"img":	"Aracely_Amarilla.jpg"	,"thumb":	"Aracely_Amarilla.png"	,"title":null},
            {"name":	"Arianna Torres"	,"img":	"Arianna_Torres.jpeg"	,"thumb":	"Arianna_Torres.png"	,"title":null},
            {"name":	"Bárbara Fretes"	,"img":	"Barbara_Fretes.jpeg"	,"thumb":	"Barbara_Fretes.png"	,"title":null},
            {"name":	"Benjamín González"	,"img":	"Benjamin_Gonzalez.jpg"	,"thumb":	"Benjamin_Gonzalez.png"	,"title":null},
            {"name":	"Blás Gonzalo Ferreira"	,"img":	"Blas_Gonzalo_Ferreira.jpeg"	,"thumb":	"Blas_Gonzalo_Ferreira.png"	,"title":null},
            {"name":	"Brenda Valdez"	,"img":	"Brenda_Valdez.jpg"	,"thumb":	"Brenda_Valdez.png"	,"title":null},
            {"name":	"Bruno Aguilera"	,"img":	"Bruno_Aguilera.jpg"	,"thumb":	"Bruno_Aguilera.png"	,"title":null},
            {"name":	"Bruno Guitierrez"	,"img":	"Bruno_Guitierrez.jpeg"	,"thumb":	"Bruno_Guitierrez.png"	,"title":null},
            {"name":	"Celeste Cespedes"	,"img":	"Celeste_Cespedes.jpg"	,"thumb":	"Celeste_Cespedes.png"	,"title":null},
            {"name":	"Claudia Maricel"	,"img":	"Claudia_Maricel.jpeg"	,"thumb":	"Claudia_Maricel.png"	,"title":null},
            {"name":	"Danna Jimenez"	,"img":	"Danna_Jimenez.jpeg"	,"thumb":	"Danna_Jimenez.png"	,"title":null},
            {"name":	"Diogo Gimenez"	,"img":	"Diogo_Gimenez.jpeg"	,"thumb":	"Diogo_Gimenez.png"	,"title":null},
            {"name":	"Eduardo Cañete Páez"	,"img":	"Eduardo_Canete_Paez.jpg"	,"thumb":	"Eduardo_Canete_Paez.png"	,"title":null},
            {"name":	"Ehitan Montiel"	,"img":	"Ehitan_Montiel.jpeg"	,"thumb":	"Ehitan_Montiel.png"	,"title":null},
            {"name":	"Emanuel Velazco"	,"img":	"Emanuel_Velazco.jpeg"	,"thumb":	"Emanuel_Velazco.png"	,"title":null},
            {"name":	"Emma Cousirat"	,"img":	"Emma_Cousirat.jpg"	,"thumb":	"Emma_Cousirat.png"	,"title":null},
            {"name":	"Enzo Portillo"	,"img":	"Enzo_Portillo.jpg"	,"thumb":	"Enzo_Portillo.png"	,"title":null},
            {"name":	"Euclides Flores"	,"img":	"Euclides_Flores.jpeg"	,"thumb":	"Euclides_Flores.png"	,"title":null},
            {"name":	"Fiorella Miranda"	,"img":	"Fiorella_Miranda.jpeg"	,"thumb":	"Fiorella_Miranda.png"	,"title":null},
            {"name":	"Franco Ezequiel Pinto Guillen"	,"img":	"Franco_Ezequiel_Pinto_Guillen.jpg"	,"thumb":	"Franco_Ezequiel_Pinto_Guillen.png"	,"title":null},
            {"name":	"Gabriela Sánchez Guillen"	,"img":	"Gabriela_Sanchez_Guillen.jpg"	,"thumb":	"Gabriela_Sanchez_Guillen.png"	,"title":null},
            {"name":	"Giulianna Romero"	,"img":	"Giulianna_Romero.jpg"	,"thumb":	"Giulianna_Romero.png"	,"title":null},
            {"name":	"Giuliano Pereyra"	,"img":	"Giuliano_Pereyra.jpg"	,"thumb":	"Giuliano_Pereyra.png"	,"title":null},
            {"name":	"Hanna Zalazar"	,"img":	"Hanna_Zalazar.jpeg"	,"thumb":	"Hanna_Zalazar.png"	,"title":null},
            {"name":	"Jessica Báez"	,"img":	"Jessica_Baez.jpeg"	,"thumb":	"Jessica_Baez.png"	,"title":null},
            {"name":	"José Antola"	,"img":	"Jose_Antola.jpeg"	,"thumb":	"Jose_Antola.png"	,"title":null},
            {"name":	"Julieta Veloso"	,"img":	"Julieta_Veloso.jpg"	,"thumb":	"Julieta_Veloso.png"	,"title":null},
            {"name":	"Karla Tatiana Gauto Morínigo"	,"img":	"Karla_Tatiana_Gauto_Morinigo.jpg"	,"thumb":	"Karla_Tatiana_Gauto_Morinigo.png"	,"title":null},
            {"name":	"Keilly Kiara"	,"img":	"Keilly_Kiara.jpeg"	,"thumb":	"Keilly_Kiara.png"	,"title":null},
            {"name":	"Kiara Anahi Ferreira Fontana"	,"img":	"Kiara_Anahi_Ferreira_Fontana.jpg"	,"thumb":	"Kiara_Anahi_Ferreira_Fontana.png"	,"title":null},
            {"name":	"Lara Caballero"	,"img":	"Lara_Caballero.jpeg"	,"thumb":	"Lara_Caballero.png"	,"title":null},
            {"name":	"Lara Gómez"	,"img":	"Lara_Gomez.jpg"	,"thumb":	"Lara_Gomez.png"	,"title":null},
            {"name":	"Larissa Ruíz"	,"img":	"Larissa_Ruiz.jpg"	,"thumb":	"Larissa_Ruiz.png"	,"title":null},
            {"name":	"Lua Margarita López"	,"img":	"Lua_Margarita_Lopez.jpg"	,"thumb":	"Lua_Margarita_Lopez.png"	,"title":null},
            {"name":	"Luana Veloso"	,"img":	"Luana_Veloso.jpeg"	,"thumb":	"Luana_Veloso.png"	,"title":null},
            {"name":	"Lucas Misael Cardozo"	,"img":	"Lucas_Misael_Cardozo.jpeg"	,"thumb":	"Lucas_Misael_Cardozo.png"	,"title":null},
            {"name":	"Lucas Portillo"	,"img":	"Lucas_Portillo.jpg"	,"thumb":	"Lucas_Portillo.png"	,"title":null},
            {"name":	"Lucas Santino Sánchez"	,"img":	"Lucas_Santino_Sanchez.jpg"	,"thumb":	"Lucas_Santino_Sanchez.png"	,"title":null},
            {"name":	"Lucca Fabrizio Acosta Mellone"	,"img":	"Lucca_Fabrizio_Acosta_Mellone.jpg"	,"thumb":	"Lucca_Fabrizio_Acosta_Mellone.png"	,"title":null},
            {"name":	"María del Cielo Velazco"	,"img":	"Maria_del_Cielo_Velazco.jpg"	,"thumb":	"Maria_del_Cielo_Velazco.png"	,"title":null},
            {"name":	"María Paz Acuña Ferreira"	,"img":	"Maria_Paz_Acuna_Ferreira.jpg"	,"thumb":	"Maria_Paz_Acuna_Ferreira.png"	,"title":null},
            {"name":	"Martina López De Felice"	,"img":	"Martina_Lopez_De_Felice.jpg"	,"thumb":	"Martina_Lopez_De_Felice.png"	,"title":null},
            {"name":	"Matías Alejandro Riveros"	,"img":	"Matias_Alejandro_Riveros.jpeg"	,"thumb":	"Matias_Alejandro_Riveros.png"	,"title":null},
            {"name":	"Matías Segovia"	,"img":	"Matias_Segovia.jpg"	,"thumb":	"Matias_Segovia.png"	,"title":null},
            {"name":	"Maxi Ferreiro"	,"img":	"Maxi_Ferreiro.jpeg"	,"thumb":	"Maxi_Ferreiro.png"	,"title":null},
            {"name":	"Maylen Zárate"	,"img":	"Maylen_Zarate.jpg"	,"thumb":	"Maylen_Zarate.png"	,"title":null},
            {"name":	"Mia Abigail Achucarro Sánchez"	,"img":	"Mia_Abigail_Achucarro_Sanchez.jpeg"	,"thumb":	"Mia_Abigail_Achucarro_Sanchez.png"	,"title":null},
            {"name":	"Naara Berenice Velázquez"	,"img":	"Naara_Berenice_Velazquez.jpg"	,"thumb":	"Naara_Berenice_Velazquez.png"	,"title":null},
            {"name":	"Nancy Aylen Pérez Romero"	,"img":	"Nancy_Aylen_Perez_Romero.jpg"	,"thumb":	"Nancy_Aylen_Perez_Romero.png"	,"title":null},
            {"name":	"Sofía Pino"	,"img":	"Sofia_Pino.jpeg"	,"thumb":	"Sofia_Pino.png"	,"title":null},
            {"name":	"Sthefani Rodríguez"	,"img":	"Sthefani_Rodriguez.jpg"	,"thumb":	"Sthefani_Rodriguez.png"	,"title":null},
            {"name":	"Thiago Barrios"	,"img":	"Thiago_Barrios.jpeg"	,"thumb":	"Thiago_Barrios.png"	,"title":null},
            {"name":	"Tomás Morínigo"	,"img":	"Tomas_Morinigo.jpg"	,"thumb":	"Tomas_Morinigo.png"	,"title":null},
            {"name":	"Valentino Verón"	,"img":	"Valentino_Veron.jpg"	,"thumb":	"Valentino_Veron.png"	,"title":null},
            {"name":	"Yheny Ayala Contrera"	,"img":	"Yheny_Ayala_Contrera.jpeg"	,"thumb":	"Yheny_Ayala_Contrera.png"	,"title":null},
            {"name":	"Cecilia Evangelina Olmedo"	,"img":	"Cecilia_Evangelina_Olmedo.jpg"	,"thumb":	"Cecilia_Evangelina_Olmedo.png"	,"title":null},
            {"name":	"Zoe Gómez"	,"img":	"Zoe_Gomez.jpeg"	,"thumb":	"Zoe_Gomez.png"	,"title":null},
        ]
    },
}


export default class SubScreenGalleryKids extends Component {
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
                            <img alt={'info-img'} src={'/static/img/kidsgallery/' +
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
                            <img alt={'info-img'} src={'/static/img/kidsgallery/' +
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
                            <img alt={'info-img'} src={'/static/img/kidsgallery/' +
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
                            <img alt={'info-img'} src={'/static/img/kidsgallery/' +
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
                                <img className={'ssg-kids-alt ssg-title-alt'} src={'/static/img/kidsgallery/' +
                                this.props.world + '/title.png' } alt={config.sub} />
                            </div> :
                            <div className={'col-12'}>
                                <img className={'ssg-kids ssg-title'} src={'/static/img/kidsgallery/' +
                                this.props.world + '/title.png' } alt={config.sub} />
                            </div>
                    }
                    {
                        config.png.map((p) =>
                            <img alt={'png'} src={'/static/img/kidsgallery/' +
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
                                                        alt={'png'} src={'/static/img/kidsgallery/' +
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
                                                alt={'png'} src={'/static/img/kidsgallery/' +
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