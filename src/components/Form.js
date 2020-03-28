import React, { useState } from 'react'
export const Form = () => {

  const [quantity, setQ] = useState(0);
  const [btnSelected, setBtnSelected] = useState(1);

  const down = () => {
    if (quantity > 0) setQ(quantity + -1);
  }
  const up = () => {
    if (quantity < 10) setQ(quantity + 1);
  }
  return (
    <div className="formbox">
      <div className="btnBox">
        <button className={btnSelected === 1 ? "btnGo Selected" : "btnGo"} onClick={() => setBtnSelected(1)}>DadJokes</button>
        <button className={btnSelected === 2 ? "btnGo Selected" : "btnGo"} onClick={() => setBtnSelected(2)}>RandomJokes</button>
      </div>
      <div className="seedBox">
        <span>Seed:</span>
        <div className="inputBox">
          <input className="seedInput" />

          <div className="quantityBox">
            <span>Q: {quantity}</span>
            <div className="actionBox">
              <a className="actionBtn" onClick={up}><i className="fas fa-sort-up"></i></a>
              <a className="actionBtn" onClick={down}><i className="fas fa-sort-down"></i></a>
            </div>
          </div>
        </div>
        <button className="btnGo btnGenerate">Generate</button>
      </div>
    </div>
  )
}

export default Form;