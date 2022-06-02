var inputInt=1;

while(inputInt<2)
{
    let input = prompt("enter","");
    inputInt=parseInt(input);
    if(input>1){break;}
    alert("you have to give input that need to be more than 1")
}
if(inputInt!=44)
{
    var i = 0;
    console.log(inputInt+" kadar sayı vardır.");
    console.log("sayıların toplamı: "+ ((inputInt)*(inputInt+1))/2);
    var countForOdd = 0;
    var countForEven = 0;
    let textForOdd ="tek sayılar: ";
    let textForEven = "çift sayılar: ";
    var totalForOdd = 0 ;
    var totalForEven = 0 ;
    for( i=1; i < inputInt ; i++ )
    {
        console.log(i);
        if(i!=7&& i<101)
        {
             if(i%2===1){
            countForOdd++;
            textForOdd=textForOdd + i + ", ";
            totalForOdd += i;
             }
        else{
            countForEven++;
            textForEven = textForEven+ i+", ";
            totalForEven += i;}
        }
    }    
    console.log(countForOdd+ " tane tek sayı vardır");
    console.log(countForEven+ " tane çift sayı vardır.");

    console.log(textForOdd);
    console.log(textForEven);

    console.log("Tek sayılar toplamı: " + totalForOdd);
    console.log("Çift sayılar toplamı: " + totalForEven);
}
    else
    {
        var j=0;
        var node = 10;    
        let text="!";
        for(node;0<node;node--)
        {
            console.log(text); 
            text="!"+text+"!";
        }
        throw new Error("you have given the secret number as an input the program terminated!!!!!!!!!!! ");
    }
