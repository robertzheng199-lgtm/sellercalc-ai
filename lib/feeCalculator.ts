export function calculateTikTokFee(

price:number,

commission:number,

affiliate:number

){


const platformFee =
price * commission /100;



const affiliateFee =
price * affiliate /100;



const totalFee =
platformFee +
affiliateFee;



const remaining =
price-totalFee;



return {


platformFee:
Number(platformFee.toFixed(2)),


affiliateFee:
Number(affiliateFee.toFixed(2)),


totalFee:
Number(totalFee.toFixed(2)),


sellerReceives:
Number(remaining.toFixed(2))


}


}