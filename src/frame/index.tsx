type dataType={
    info:{
        name: string
        price: string
        stock:string
        change:string
        image:string
        pop_image1:string
        pop_image2:string
        pop_image3:string
    }
}

const Frame=(prop:dataType)=>{
    const change=prop.info.change;

    return (
        <>
            <div className={"item-card"}>
                <img className={"circle"} src={prop.info.image}/>
                <div className={"name"}>
                    {prop.info.name}
                </div>       

                <div className={"stock"}>
                    <div className={"value"}>{prop.info.stock}</div>
                    {
                        change[0] == '+' ?
                        <span style={{color:'green'}}>{prop.info.change}</span>
                        :
                        <span style={{color:'red'}}>{prop.info.change}</span>
                    }
                </div>

                <div className={"price_label"}>
                    Price
                </div>

                <div className={"price"}>
                    {prop.info.price}
                </div>

                <div className={"tvl"}>
                    TVL
                </div>

                <div className={"pop_pairs"}>
                    <img className={"incircle"} src={prop.info.pop_image1}/>
                    <img className={"incircle"} src={prop.info.pop_image2}/>
                    <img className={"incircle"} src={prop.info.pop_image3}/>
                </div>

                <div className={"tvl"}>
                    Popular Pairs
                </div>

            </div>
        </>
    );
}

export default Frame;