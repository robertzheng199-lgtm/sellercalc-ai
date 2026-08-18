export function calculateROAS(

revenue:number,

adSpend:number

){


if(adSpend===0){

return {

roas:0

}

}



const roas =
revenue/adSpend;



return {


roas:
Number(roas.toFixed(2))


}


}