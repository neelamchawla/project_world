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
    </div>
  )
}

export default CreditCards
