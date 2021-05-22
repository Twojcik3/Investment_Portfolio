import React, { useState } from 'react';

const AddItem = () => {
    const [inputSwitch, setInputSwitch] = useState("Currencies")
    const handleSwitch = (e) => {
        setInputSwitch(e.target.value)
    }
    return (
        <div className="Add-Item">
            <form className="add-item_form col-lg-12 col-md-12">

                <div className="add-item_form_group col-md-4 Display-inline">
                    <label htmlFor="add-item_category" className="col-md-12">Kategoria</label>
                    <select name="add-item_category" className="col-md-10" value={inputSwitch} onChange={handleSwitch}>
                        <option value="Currencies" selected>Waluty obce</option>
                        <option value="CryptoCurrencies">Kryptowaluty</option>
                        <option value="PreciousMetals" >Metale szlachetne</option>
                        <option value="GPWExchange" >Akcje GPW</option>
                    </select>
                </div>
                <div className="add-item_form_group col-md-4 Display-inline">
                    <label htmlFor="add-item_asset" className="col-md-12">Aktywo</label>
                    <select name="add-item_asset" className="col-md-10">
                        <option selected>Bitcoin</option>
                    </select>
                </div>
                <div className="add-item_form_group col-md-4 Display-inline">
                    <label htmlFor="add-item_purchaseDate" className="col-md-12">Data Zakupu</label>
                    <input name="add-item_purchaseDate" type="date" className="col-md-10"></input>
                </div>
                <div className="add-item_form_group col-md-3 Display-inline">
                    <label htmlFor="add-item_quantity" className="col-md-12">Ilość</label>
                    <input name="add-item_quantity" type="number" className="col-md-12"></input>
                </div>
                <div className="add-item_form_group col-md-3 Display-inline">
                    <label htmlFor="add-item_price" className="col-md-12">Cena zakupu</label>
                    <input name="add-item_price" type="number" className="col-md-12"></input>
                </div>
                <div className="add-item_form_group col-md-3 Display-inline ">
                    <label htmlFor="add-item_currency" className="col-md-12">Waluta</label>
                    <select name="add-item_currency" className="col-md-12">
                        <option value="">EUR</option>
                    </select>
                </div>
                <div className="add-item_form_group col-md-3 Display-inline ">
                    <button className="btn btn-success btn-block">Dodaj</button>
                </div>
            </form>
        </div>
    )
}
export default AddItem;