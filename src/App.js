import { useState } from "react";
import { Button, Input } from "antd";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [items, setItems] = useState([]);

  const [name, setName] = useState("");
  const [qty, setQty] = useState("");

  function addToCart() {
    const tempData = { name, qty };

    setItems((prv) => {
      return [...prv, tempData];
    });
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 16 }}>
      <>
        <div style={{ display: "flex" }}>
          <Input
            onChange={(e) => {
              setName(e.target.value);
            }}
            style={{ width: 100 }}
            placeholder="item name"
          />
          <Input
            onChange={(e) => {
              setQty(e.target.value);
            }}
            placeholder="Qty"
            style={{ width: 100, marginLeft: 20 }}
          />
        </div>
        <div style={{ marginTop: 15 }}>
          <Button onClick={addToCart}>Add to cart</Button>
        </div>
        <div style={{ marginTop: 15 }}>
          <Button>
            <Link to={`/items`}>Navigate to items</Link>
          </Button>
        </div>

        <div style={{ backgroundColor: "lavender" }}>
          {items.map((items, idx) => {
            return (
              <>
                <div>{items?.name}</div>
                <div>{items?.qty}</div>
              </>
            );
          })}
        </div>
      </>
    </div>
  );
}

export default App;
