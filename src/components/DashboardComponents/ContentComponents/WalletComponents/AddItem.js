import React, { useState } from 'react';
import axios from 'axios';

const AddItem = (props) => {
    const [inputCategory, setInputCategory] = useState("Currencies")
    const [purchaseDate, setPurchaseDate] = useState("");
    const [quantity, setQuantity] = useState();
    const [price, setPrice] = useState();
    const [asset, setAsset] = useState();
    const [currency, setCurrency] = useState();

    const handleCategory = (e) => {
        setInputCategory(e.target.value)
    }
    const handlePurchaseDate = (e) => {
        setPurchaseDate(e.target.value);
    }
    const handleQuantity = (e) => {
        setQuantity(e.target.value)
    }
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }
    const handleAsset = (e) => {
        setAsset(e.target.value);
    }
    const handleCurrency = (e) => {
        setCurrency(e.target.value)
    }

    const optionsCurrency = props.currencyRates.map(el => <option key={el.code} value={el.code}>{el.code}</option>)
    const optionsCryptoCurrency = props.cryptoCurrencyRates.map(el => <option key={el.name} value={el.name}>{el.name}</option>)
    const optionsMetals = props.metalsRates.map(el => <option key={el.name} value={el.name}>{el.name}</option>)
    optionsCurrency[optionsCurrency.length] = <option key='PLN' value="PLN">PLN</option>

    const submitItem = (e) => {
        e.preventDefault();
        const item = {
            purchaseDate: purchaseDate,
            category: inputCategory,
            asset: asset,
            quantity: quantity,
            purchasePrice: price,
            currency: currency,
            valuePLN: 1
        }
        if (validateData()) {
            axios.post('http://localhost:5000/addItem', item, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            }).then((result) => {
                console.log('Item added');
                console.log(result);
            }).catch((err) => {
                console.log(err)
            })
        } else {
            console.log("data not correct")
        }

    }
    const validateData = () => {
        if (purchaseDate === "") return false;
        if (quantity <= 0 || price <= 0) return false;

        return true

    }
    return (
        <div className="Add-Item">
            <form className="add-item_form col-lg-12 col-md-12">
                <div className="add-item_form_group col-md-4 Display-inline">
                    <label htmlFor="add-item_category" className="col-md-12">Kategoria</label>
                    <select name="add-item_category" className="col-md-10" onChange={handleCategory}>
                        <option value="Currencies" >Waluty obce</option>
                        <option value="CryptoCurrencies">Kryptowaluty</option>
                        <option value="PreciousMetals" >Metale szlachetne</option>
                        <option value="GPWExchange" >Akcje GPW</option>
                    </select>
                </div>
                <div className="add-item_form_group col-md-4 Display-inline">
                    <label htmlFor="add-item_asset" className="col-md-12">Aktywo</label>
                    <select name="add-item_asset" className="col-md-10" onChange={handleAsset}>
                        {inputCategory === "Currencies" ? optionsCurrency : inputCategory === "CryptoCurrencies" ? optionsCryptoCurrency : optionsMetals}
                    </select>
                </div>
                <div className="add-item_form_group col-md-4 Display-inline">
                    <label htmlFor="add-item_purchaseDate" className="col-md-12">Data Zakupu</label>
                    <input name="add-item_purchaseDate" type="date" className="col-md-10" onChange={handlePurchaseDate}></input>
                </div>
                <div className="add-item_form_group col-md-3 Display-inline">
                    <label htmlFor="add-item_quantity" className="col-md-12">Ilość</label>
                    <input name="add-item_quantity" type="number" className="col-md-12" onChange={handleQuantity}></input>
                </div>
                <div className="add-item_form_group col-md-3 Display-inline">
                    <label htmlFor="add-item_price" className="col-md-12">Cena zakupu</label>
                    <input name="add-item_price" type="number" className="col-md-12" onChange={handlePrice}></input>
                </div>
                <div className="add-item_form_group col-md-3 Display-inline ">
                    <label htmlFor="add-item_currency" className="col-md-12">Waluta</label>
                    <select name="add-item_currency" className="col-md-12" onChange={handleCurrency}>
                        {inputCategory === "Currencies" ? <option value='PLN'>PLN</option> : optionsCurrency}

                    </select>
                </div>
                <div className="add-item_form_group col-md-3 Display-inline ">
                    <button className="btn btn-success btn-block" onClick={submitItem}>Dodaj</button>
                </div>
            </form>
        </div>
    )
}
export default AddItem;