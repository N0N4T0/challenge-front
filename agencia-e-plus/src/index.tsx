import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs';
import App from './App';

createServer({
  models: {
    product: Model
  },

  seeds(server){
    server.db.loadData({
      products:[
        { 
          id: 100,
          name: "Notebook Samsung, Intel® Core™ i7, 16GB, 256GB SSD, Tela de 15”, Style S51 Pro - NP900X5T-XW1BR - SGNP900X5TXW1_PRD",
          salesChannel: "1",
          available: true,
          bestPriceFormated: "R$ 7.158,21",
          bestPrice: 715821,
          quantity: 1,
          image: "/images/products/note01-samsung-160-160.jpg"
      },
      {
          id: 101,
          name: "Notebook Gamer Acer, Intel Core i7, 16GB, 1TB, Tela de 15.6”, NVIDIA GeForce GTX 1050 Ti - pire Nitro 5 AN515-51-78D6 - 49953_PRD",
          salesChannel: "1",
          available: true,
          bestPriceFormated: "R$ 4.699,00",
          bestPrice: 469900,
          quantity: 1,
          image: "/images/products/note-gamer-acer-160-160.jpg"
      },
      {
          id: 102,
          name: "Impressora Multifuncional Canon Tanque de Tinta com USB e Wi-Fi - G3111 - N52315C021PTO_PRD",
          salesChannel: "1",
          available: true,
          bestPriceFormated: "R$ 725,80",
          bestPrice: 72580,
          quantity: 2,
          image: "/images/products/impressora-canon-160-160.jpg"
      },
      {
          id: 103,
          name: "Notebook Samsung, Processador Intel® Core™ i7, 8GB, 256GB SSD, Tela de 13,3”, Style S51 Pen - NP930QAA-KW1BR - SGNP930QAAKW1_PRD",
          salesChannel: "1",
          available: true,
          bestPriceFormated: "R$ 7.066,42",
          bestPrice: 706642,
          quantity: 1,
          image: "/images/products/note02-samsung-160-160.jpg"
      }
      ]
    })
  },

  routes(){
    this.namespace = 'api'

    this.get('/products', () => {
      return this.schema.all('product')
    })
  }

})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);