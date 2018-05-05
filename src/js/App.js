import React, { Component } from 'react';
import axios from 'axios';
import data from './data/Data';
import SelectCurrency from './components/SelectCurrency';
import ConversionRate from './components/ConversionRate';

//import logo from './logo.svg';
//import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currencies: data.currencies,
            currencyA: data.currencies[0],
            currencyB: data.currencies[1],
            currencyAval: data.currencies[0].sellRate,
            currencyBval: data.currencies[1].sellRate
        }

        this.onSelectCurrency = this.onSelectCurrency.bind(this);
    }

    onSelectCurrency(code) {
        //console.log("selecting currency: " + code);
        const {currencies} = this.state;
        const currency = currencies.filter(currency => currency.code === code);
        this.setState({
            currencyB: currency[0]
        })
    }

    //componentDidMount() {
    //    axios.get('https://api.coinmarketcap.com/v2/ticker/?limit=10&convert=BTC')
    //        .then(res => {
    //            console.log(res.data.data);
    //            console.log(this.state.currencies);
    //
    //        });
    //}

    render() {
        const {currencies} = this.state;

        return (
            <div className="currency-converter">
                <h1 className="converter_title">Currency Converter</h1>

                <div className="currency-containers">
                    <div className="currency_container">
                        <ConversionRate />
                        <SelectCurrency currencies={currencies} onSelectCurrency={this.onSelectCurrency} />
                        <div className="currency_value">
                            2.47
                        </div>
                    </div>

                    <div className="currency_container">
                        <span className="conversion-rate">1 EUR = 1.23 USD</span>
                        <select className="currency-selection">
                            <option value="usd">United States Dollar</option>
                            <option value="gbp">Great British Pound</option>
                            <option defaultValue value="eur">Euro</option>
                        </select>
                        <div className="currency_value">
                            2
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
