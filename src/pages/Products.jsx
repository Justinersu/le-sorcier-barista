import IconShoppingBag from '../assets/images/icons/icon-shopping-bag.png';
import Catan from '../assets/images/products/products-catan.png';
import SevenWonders from '../assets/images/products/products-seven-wonders.png';
import HereToSlay from '../assets/images/products/products-here-to-slay.png';
import Jaipur from '../assets/images/products/products-jaipur.png';
import ArkhamHorror from '../assets/images/products/products-arkham-horror.png';
import Wingspan from '../assets/images/products/products-Wingspan.png';

function Products() {
    const products = [{
        id: 0,
        name: "Catan",
        price: "59,99",
        image: Catan,
    }, {
        id: 1,
        name: "7 Wonders",
        price: "49,99",
        image: SevenWonders,
    }, {
        id: 2,
        name: "Here to slay",
        price: "39,99",
        image: HereToSlay,
    }, {
        id: 3,
        name: "Jaipur",
        price: "29,99",
        image: Jaipur,
    }, {
        id: 4,
        name: "Arkham Horror",
        price: "79,99",
        image: ArkhamHorror,
    }, {
        id: 5,
        name: "Wingpsan",
        price: "69,99",
        image: Wingspan,
    }]

    const listProducts = products.map(product =>
        <div className="products-cell">
            <img src={product.image} />
            <p className="products-name">{product.name}</p>
            <div className="products-price">
                <p className="price">{product.price}</p>
                <input type="number" value="1" id="quantity" />
                <div className="btn-add">
                    <img src={IconShoppingBag} />
                </div>
            </div>
        </div>
    );

    return (
        <div className="products-wrapper">
            <div className="products-title">
                <h2>Nos <span className="woodland">produits</span></h2>
            </div>
            <div className="products-search"><input id="searchInput" onKeyUp="searchProduct()" type="text"
                placeHolder="Chercher un produit..." /></div>
            <div className="products-grid">
                {listProducts}
            </div>
        </div>
    )
}

export default Products;