import {useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [btc, setBtc] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState("");
  useEffect(() => {
      fetch("https://api.coinpaprika.com/v1/tickers")
          .then((response) => response.json())
          .then(json => {
              setCoins(json);
              setLoading(false);
              const btcData = json.find((coin) => coin.id === "btc-bitcoin");
              if (btcData) {
                  setBtc(btcData.quotes.USD.price);
              }
          });
  }, [])
  const onSelectChange = (event) => {
      const selectedIndex = event.target.value;
      if (selectedIndex === "-1"){
          setSelectedCoin(null);
          return;
      }
      setSelectedCoin(coins[selectedIndex]);
  }
  return (
      <div>
        <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
        {loading ? (
            <strong>Loading....</strong>
        ) : (
            <select onChange={onSelectChange}>
                <option value="-1">Select a coin</option>
                {coins.map((coin, index) => (
                    <option key={coin.id} value={index}>
                        {coin.name} ({coin.symbol})
                    </option>
                ))}
            </select>
        )}
        <hr />

          {selectedCoin ? (
              <div>
                  <h3>Selected : {selectedCoin.name} ({selectedCoin.symbol})</h3>
                  <p>Price : ${selectedCoin.quotes.USD.price.toFixed(5)} USD</p>
                  <p>Update Date : {new Date(selectedCoin.last_updated).toLocaleString()}</p>
              </div>
          ) : (
              <div>Please select a coin.</div>
          )}

      </div>
  );
}

export default App;
