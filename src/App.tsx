import Frame from "./frame";
import bc from "./images/BinanceCoin.png";
import bc1 from "./images/Bitcoin.png";
import et from "./images/Ethereum.png";
import sh from "./images/SHIBA.png";
import sl from "./images/Solana.png";
import act from "./images/activity.png"

const App=()=> {
  const data=[
    {
      name:"Bitcoin (BTC)",
      stock:"$31,812.00",
      change:"+10%",
      price:"$60,000",
      image:bc1,
      pop_image1:sl,
      pop_image2:et,
      pop_image3:bc1
    },
    {
      name:"Solana (SOL)",
      stock:"$32.83",
      change:"-12.32%",
      price:"$60,000",
      image:bc,
      pop_image1:bc,
      pop_image2:et,
      pop_image3:bc1
    },
    {
      name:"Ethereum (ETH)",
      stock:"$1,466.45",
      change:"-11.93%",
      price:"$60,000",
      image:et,
      pop_image1:sl,
      pop_image2:bc,
      pop_image3:bc1
    },
    {
      name:"Binance USD (BUSD)",
      stock:"$1.00",
      change:"+0.26%",
      price:"$60,000",
      image:sh,
      pop_image1:sl,
      pop_image2:et,
      pop_image3:bc1
    },
    {
      name:"Shina Inu (SHIB)",
      stock:"$0.0000001948.00",
      change:"-8.1%",
      price:"$60,000",
      image:sl,
      pop_image1:sl,
      pop_image2:et,
      pop_image3:bc
    }

  ]

  return (
    <>
    <div className={"tag"}>
        <img src={act}/>
        <div className={"text"}>Trending Assets</div>
    </div>
    <div className={"trading_list"}>
      {
        data.map(item => {return (<Frame info={item}/>)})
      }
    </div>
    </>
  );
}

export default App;
