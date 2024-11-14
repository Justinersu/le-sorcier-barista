import PictureCoffeeShop from "../assets/images/picture-coffee-shop.jpg";
import BeveragesMocha from '../assets/images/beverages-mocha.png';
import BeveragesCappucino from '../assets/images/beverages-cappucino.png';

const HomeBeverages = () => {
    return (
        <div className="beverages-wrapper">
            <div className="beverages-strip to-left" id="beverages">
                <span>
                    <a href="#">notre menu</a> * <a href="#">notre menu</a> * <a href="#">notre menu</a> * <a href="#">notre
                        menu</a> * <a href="#">notre menu</a> * <a href="#">notre menu</a> * <a href="#">notre menu</a> * <a
                            href="#">notre menu</a> *
                </span>
            </div>
            <div className="beverages-content">
                <img className="picture-coffee-shop" src={PictureCoffeeShop} />
                    <div className="beverages-items">
                        <div className="items top">
                            <img src={BeveragesCappucino} />
                                <p>cappucino<br />
                                    3$</p>
                        </div>
                        <div className="items bottom">
                            <p>mocha<br />
                                4$</p>
                            <img src={BeveragesMocha} />
                        </div>
                    </div>
            </div>
            <div className="beverages-strip to-right" id="reverseBeverages">
                <span>
                    <a href="#">notre menu</a> * <a href="#">notre menu</a> * <a href="#">notre menu</a> * <a href="#">notre
                        menu</a> * <a href="#">notre menu</a> * <a href="#">notre menu</a> * <a href="#">notre menu</a> * <a
                            href="#">notre menu</a> * <a href="#">notre menu</a> * <a href="#">notre menu</a> * <a href="#">notre
                                menu</a> *
                </span>
            </div>
        </div>
    );
}

export default HomeBeverages;