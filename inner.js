function InnerLoop(){
    let text="";

    loop1: for(let i=0;i<5;i++){
        loop2: for(let j=0;j<10;j++){
            if(j==4) break loop2;
            text+=j+"<br>";
        }
    }
    document.getElementById('inside').innerHTML=text;
}