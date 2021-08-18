const initialPrice = document.querySelector("#initial-price");
const noOfStocks = document.querySelector("#quantity-of-stocks");
const currentPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check-btn");
const outputHere = document.querySelector("#output");

function clickHandler()
{
    var initial = Number(initialPrice.value);
    var quant = Number(noOfStocks.value);
    var curr = Number(currentPrice.value);
     calculateProfitOrLoss(initial , quant , curr);
}
 
function calculateProfitOrLoss(ip , quantity , current)
{
    if (ip > current)
    { var loss = (ip - current) * quantity;
        var lossPercentage = (loss / (ip * quantity)) * 100;
        var lp = lossPercentage.toFixed(2);
        outputHere.innerText = "You have a loss of " + loss + " and loss percentage of " + lp  + " % ";

    } 
    else if (current > ip)
    {
        var profit = (current - ip) * quantity;
        var profitPercntage = (profit / (ip * quantity)) * 100;
        var pp = profitPercntage.toFixed(2);
        outputHere.innerText = "You have a Profit of " + profit + " and profit percentage of " +  pp + " % ";

    } else {
        outputHere.innerText = "You have neither a profit nor a loss "   ;

    }
}
checkBtn.addEventListener("click" , clickHandler)