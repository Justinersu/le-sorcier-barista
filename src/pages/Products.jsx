const Products = () => {
    return (
        <div className="products-wrapper">
            <div className="products-title">
                <h2>Nos <span className="woodland">produits</span></h2>
            </div>
            <div className="products-search"><input id="searchInput" onKeyUp="searchProduct()" type="text"
                placeHolder="Chercher un produit..." /></div>
            <div className="products-grid">
                <div className="products-cell">
                    <img src="./assets/images/products/products-catan.png" />
                    <p className="products-name">Catan</p>
                    <div className="products-price">
                        <p className="price">59,99$</p>
                        <input type="number" value="1" id="quantity" />
                        <div className="btn-add">
                            <img src="./assets/images/icons/icon-shopping-bag.png" />
                        </div>
                    </div>
                </div>
                <div className="products-cell">
                    <img src="./assets/images/products/products-seven-wonders.png" />
                    <p className="products-name">7 Wonders</p>
                    <div className="products-price">
                        <p className="price">49,99$</p>
                        <input type="number" value="1" id="quantity" />
                        <div className="btn-add">
                            <img src="./assets/images/icons/icon-shopping-bag.png" />
                        </div>
                    </div>
                </div>
                <div className="products-cell">
                    <img src="./assets/images/products/products-here-to-slay.png" />
                    <p className="products-name">Here to Slay</p>
                    <div className="products-price">
                        <p className="price">39,99$</p>
                        <input type="number" value="1" id="quantity" />
                            <div className="btn-add">
                                <img src="./assets/images/icons/icon-shopping-bag.png" />
                            </div>
                    </div>
                </div>
                <div className="products-cell">
                    <img src="./assets/images/products/products-jaipur.png" />
                    <p className="products-name">Jaipur</p>
                    <div className="products-price">
                        <p className="price">29,99$</p>
                        <input type="number" value="1" id="quantity" />
                        <div className="btn-add">
                            <img src="./assets/images/icons/icon-shopping-bag.png" />
                        </div>
                    </div>
                </div>
                <div className="products-cell">
                    <img src="./assets/images/products/products-arkham-horror.png" />
                    <p className="products-name">Arkham Horror</p>
                    <div className="products-price">
                        <p className="price">79,99$</p>
                        <input type="number" value="1" id="quantity" />
                        <div className="btn-add">
                            <img src="./assets/images/icons/icon-shopping-bag.png" />
                        </div>
                    </div>
                </div>
                <div className="products-cell">
                    <img src="./assets/images/products/products-wingspan.png" />
                    <p className="products-name">Wingspan</p>
                    <div className="products-price">
                        <p className="price">69,99$</p>
                        <input type="number" value="1" id="quantity" />
                        <div className="btn-add">
                            <img src="./assets/images/icons/icon-shopping-bag.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;