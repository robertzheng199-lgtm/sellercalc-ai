export function calculateProfit(
    price: number,
    cost: number,
    shipping: number,
    affiliate: number,
    ads: number
) {

    const tiktokFee =
        price * 0.06;


    const affiliateFee =
        price * affiliate / 100;


    const profit =
        price -
        cost -
        shipping -
        tiktokFee -
        affiliateFee -
        ads;


    const margin =
        (price === 0)
            ?
            0
            :
            (profit / price) * 100;



    return {

        profit:
            Number(profit.toFixed(2)),

        margin:
            Number(margin.toFixed(2)),

        fees:
            Number(
                (tiktokFee + affiliateFee)
                    .toFixed(2)
            )

    }

}