export function show2 (label:number){
    let r1 = new XMLHttpRequest();
    r1.open('GET',"http://localhost:3000/addUser",true);
    r1.send();
    r1.onreadystatechange = ()=> {
        (r1.readyState == 4&&r1.status == 200)?console.log(r1.responseText):console.log(r1.status);
    }
    
    fetch("http://localhost:3000/addUser",{mode:"no-cors"})
    .then(response => {
        console.log(response);
    })
} 