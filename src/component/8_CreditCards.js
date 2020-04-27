import React, { useState } from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './8_CreditCards.css'

const CreditCards = () => {
    const [number, setnumber] = useState('')
    const [name, setname] = useState('')
    const [expiry, setexpiry] = useState('')
    const [cvc, setcvc] = useState('')
    const [focus, setfocus] = useState('')

  return (
    <div className="CreditCards">
    <Cards 
    number = {number}
    name = {name}
    expiry = {expiry}
    cvc = {cvc}
    focused = {focus}
    />
    <center>
      <form>
          <input type="tel" name="number"
          placeholder="Card Number"
          value={number}
          className="creditCard"
          onChange={e => setnumber(e.target.value)}
          onFocus={e => setfocus(e.target.name)}
          />
          <input type="text" name="name"
          placeholder="Name"
          value={name}
          className="creditCard"
          onChange={e => setname(e.target.value)}
          onFocus={e => setfocus(e.target.name)}
          />
          <input type="text" name="expiry"
          placeholder="MM/YY Expiry"
          value={expiry}
          className="creditCard inp2"
          onChange={e => setexpiry(e.target.value)}
          onFocus={e => setfocus(e.target.name)}
          />
          <input type="tel" name="cvc"
          placeholder="CVC"
          value={cvc}
          className="creditCard inp2"
          onChange={e => setcvc(e.target.value)}
          onFocus={e => setfocus(e.target.name)}
          />
          
      </form>
      </center>
      <div className="box">
      <table>
        <tr>
          <th>Card</th>
          <th>Demo Number</th>
        </tr>
        <tr>
          <td>Visa</td>
          <td>4111 1111 1111 1111</td>
        </tr>
        <tr>
          <td>MasterCard</td>
          <td>5500 0000 0000 0004</td>
        </tr>
        <tr>
          <td>American Express</td>
          <td>3400 0000 0000 009</td>
        </tr>
        <tr>
          <td>Diner's Club</td>
          <td>3000 0000 0000 04</td>
        </tr>
        <tr>
          <td>Union Pay</td>
          <td>6200 0000 0000 0004</td>
        </tr>
        <tr>
          <td>HiperCard</td>
          <td>6010 0000 0000 0004</td>
        </tr>
        <tr>
          <td>Discover</td>
          <td>6500 0000 0000 0000</td>
        </tr>
        <tr>
          <td>JCB</td>
          <td>3500 0000 0000 0009</td>
        </tr>
      </table>
      </div>
    </div>
  )
}

export default CreditCards
