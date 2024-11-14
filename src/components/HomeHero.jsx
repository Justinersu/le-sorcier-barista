import CoffeeCup from '../assets/images/coffee-cup.png';

const HomeHero = () => {
    return (
        <div className="hero-wrapper">
        <div className="hero-contenu">
          <div className="hero-titre">
            <h1>Le sorcier barista</h1>
          </div>
          <div className="hero-texte">
            <h2>Une expérience <span className="woodland">café</span> pour les amateurs de jeux</h2>
            <p>Le Sorcier Barista est un café unique au cœur de Montréal, où les amateurs de jeux peuvent savourer un café
              artisanal tout en s'immergeant dans des jeux de rôle, de cartes à collectionner et bien plus.
            </p>
            <a href="#community"><button>Voir plus</button></a>
          </div>
          <div className="hero-image">
            <img src={CoffeeCup} />
          </div>
        </div>
      </div>
    );
};

export default HomeHero;