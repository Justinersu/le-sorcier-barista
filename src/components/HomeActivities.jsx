import PictureDND from '../assets/images/picture-dnd.jpg';
import PictureMTG from '../assets/images/picture-mtg.png';

import { Link } from "react-router-dom";
// Import Swiper React components
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default () => {
    return (
        <div className="activities-wrapper">
            <Swiper
                className="swiper activities"
                modules={[Pagination]}
                spaceBetween={18}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                breakpoints={{
                    // when window width is >= 640px
                    1240: {
                        slidesPerView: 3,
                        centeredSlides: false,
                        autoplay: false,
                    },
                    600: {
                        slidesPerView: 2,
                    }
                }}
            >
                <div class="swiper-wrapper">
                    <SwiperSlide className="swiper-slide bleu">
                        <h3>Nos <span className="woodland">activités</span></h3>
                        <p>
                            Rejoignez nos sessions de Donjons & Dragons et de Magic: The Gathering dans un espace convivial où l’imagination règne. Tables ouvertes à tous niveaux, avec soirées thématiques et événements spéciaux. <span className="bold">Découvrez aussi notre sélection de jeux de société en vente sur place en cliquant sur le bouton ci-dessous!</span>
                        </p>
                        <Link to="/products"><button>Voir nos produits</button></Link>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide rose">
                        <p>Donjons & dragons</p>
                        <img src={PictureDND} />
                        <p>Chaque mardi, des maîtres de jeu passionnés animent des campagnes épiques, ouvertes aux joueurs de tous
                            niveaux.</p>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide vert">
                        <p>Magic: The Gathering</p>
                        <img src={PictureMTG} />
                        <p>Chaque jeudi, testez vos compétences stratégiques dans notre tournoi de Magic: The Gathering.</p>
                    </SwiperSlide>
                </div>
                <div className="swiper-pagination"></div>
            </Swiper>
        </div >
    );
};
