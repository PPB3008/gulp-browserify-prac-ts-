export function show2 (label:any){
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

function createArticle(articleOption:any) {
    const articleList = document.querySelector(".article-list");
    articleOption.forEach((ele:any) => {
        let item:any = document.createElement('a').setAttribute('class','article-list-item');
        let itemWrapper:any = document.createElement('div').setAttribute('class','article-list-item-wrapper');
        console.log(typeof itemWrapper)
        itemWrapper.innerHTML = `<h3>${ele.title}/h3><p>${ele.article}</p><div class='article-user'></div>`;
        item.appendChild(itemWrapper);
        item.setAttribute('id',ele.ID);
        articleList.appendChild(item);
    })
}