function Sum(...args){
    let sum=0;
    for(let it of args){
        sum+=it;
    }
    document.getElementById('demo11').innerHTML=sum;
}