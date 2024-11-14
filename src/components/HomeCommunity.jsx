import IllustrationDices from '../assets/images/illustration-dices.png';
import IllustrationCards from '../assets/images/illustration-cards.png';
import IllustrationChess from '../assets/images/illustration-chess.png';

const HomeCommunity = () => {
    return (
        <div className="community-wrapper" id="community">
            <div className="community-content">
                <div className="community-title">
                    <h2>Une <span className="woodland">communauté</span> forte</h2>
                </div>
                <div className="community-text top">
                    <div className="content">
                        <img src={IllustrationDices} />
                            <div className="para">
                                <p>Situé en plein cœur de Montréal, Le Sorcier Barista est bien plus qu’un simple café : c’est un lieu de
                                    rencontre pour les amateurs de jeux et de café de qualité.
                                </p>
                            </div>
                    </div>
                </div>
                <div className="community-text middle">
                    <div className="content">
                        <div className="para">
                            <p> Notre espace unique est conçu pour plonger nos clients dans une ambiance magique où l’arôme du café
                                fraîchement moulu se mêle à une sélection de nombreux jeux captivants.
                            </p>
                        </div>
                        <img src={IllustrationCards} />
                    </div>
                </div>
                <div className="community-text bottom">
                    <div className="content">
                        <img src={IllustrationChess} />
                            <div className="para">
                                <p>Que vous soyez un aventurier expérimenté ou un joueur débutant, notre café est l'endroit idéal pour se
                                    retrouver entre amis et découvrir de nouveaux jeux.
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCommunity;