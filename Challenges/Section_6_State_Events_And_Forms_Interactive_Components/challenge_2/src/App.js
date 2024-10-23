import { useState } from "react";
import "./styles.css";

export default function App() {
  const [bill, setBill] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  const [total, setTotal] = useState(0);

  function handleResetButton() {
    setBill(0);
    setMyTip(0);
    setFriendTip(0);
    setTotal(0);
    window.location.reload();
  }

  return (
    <div className="App">
      <Bill
        myTip={myTip}
        friendTip={friendTip}
        setTotal={setTotal}
        setBill={setBill}
        onChange={setTotal}
      >
        How much was the bill?
      </Bill>
      <Service setTotal={setTotal} onChange={setMyTip}>
        How did you like the service?
      </Service>
      <Service setTotal={setTotal} onChange={setFriendTip}>
        How did your friend like the service?
      </Service>

      <Output total={total} bill={bill} myTip={myTip} friendTip={friendTip} />

      <button onClick={handleResetButton}>Reset</button>
    </div>
  );
}

function Output({ total, bill, myTip, friendTip }) {
  return (
    <h1>{`You pay $${total} ($${bill} + $${(myTip + friendTip) / 2} tip)`}</h1>
  );
}

function Bill({ setTotal, children, onChange, setBill, myTip, friendTip }) {
  function handleBillInput(e) {
    e.preventDefault();
    setBill(Number(e.target.value));
    onChange(Number(e.target.value));
    setTotal(Number(e.target.value) + (Number(myTip) + Number(friendTip)) / 2);
  }

  return (
    <div>
      <span>{children}</span>{" "}
      <input placeholder="0" type="text" onChange={(e) => handleBillInput(e)} />
    </div>
  );
}

function Service({ children, onChange, setTotal }) {
  function handleSelect(e) {
    e.preventDefault();
    onChange(Number(e.target.value));
    setTotal((total) => total + Number(e.target.value) / 2);
  }

  return (
    <div>
      <span>{children}</span>
      <select onChange={(e) => handleSelect(e)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
