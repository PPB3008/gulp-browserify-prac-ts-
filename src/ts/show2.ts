export function show2 ():void{
    let r1 = new XMLHttpRequest();
    r1.open('GET',"http://localhost:3000/addUser",true);
    r1.send();
    r1.onreadystatechange = ()=> {
        if(r1.readyState == 4&&r1.status == 200){
            // const create = new Promise();
            createArticle(JSON.parse(r1.responseText));
        }else{
            console.log(r1.status);
        }
        
    }

    
    // let articleItem = document.createElement("a[]")s
    // fetch("http://localhost:3000/addUser",{mode:"no-cors"})
    // .then(response => {
    //     console.log(response.text());
    // })
} 

interface domfunction {
    
}

function createArticle(articleOption:any):void {
    const articleList = document.querySelector(".article-list");
    const test1:string = ""
    articleOption.forEach((ele:{ID:number,title:string,article:string}):void => {
        let item:HTMLAnchorElement = document.createElement('a');
        item.setAttribute('class','article-list-item');
        let itemWrapper:HTMLDivElement = document.createElement('div');
        itemWrapper.setAttribute('class','article-list-item-wrapper');
        console.log(typeof itemWrapper)
        itemWrapper.innerHTML = `<h3>${ele.title}/h3><p>${ele.article}</p><div class='article-user'></div>`;
        item.appendChild(itemWrapper);
        item.setAttribute('id',ele.ID.toString());
        articleList.appendChild(item);
    })
}