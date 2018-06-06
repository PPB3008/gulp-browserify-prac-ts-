(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(hello) {
    console.log(hello);
    var promiseTs = document.querySelector(".promise-test");
    // promiseTs.addEventListener("on",()=> {
    // })
    return hello;
}
exports.sayHello = sayHello;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var show2_1 = require("./show2");
index_1.sayHello("helloWorld");
show2_1.show2(10);

},{"./index":1,"./show2":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show2(label) {
    var r1 = new XMLHttpRequest();
    r1.open('GET', "http://localhost:3000/addUser", true);
    r1.send();
    r1.onreadystatechange = function () {
        if (r1.readyState == 4 && r1.status == 200) {
            // const create = new Promise();
            createArticle(JSON.parse(r1.responseText));
        }
        else {
            console.log(r1.status);
        }
    };
    // let articleItem = document.createElement("a[]")s
    // fetch("http://localhost:3000/addUser",{mode:"no-cors"})
    // .then(response => {
    //     console.log(response.text());
    // })
}
exports.show2 = show2;
function createArticle(articleOption) {
    var articleList = document.querySelector(".article-list");
    articleOption.forEach(function (ele) {
        var item = document.createElement('a').setAttribute('class', 'article-list-item');
        var itemWrapper = document.createElement('div').setAttribute('class', 'article-list-item-wrapper');
        console.log(typeof itemWrapper);
        itemWrapper.innerHTML = "<h3>" + ele.title + "/h3><p>" + ele.article + "</p><div class='article-user'></div>";
        item.appendChild(itemWrapper);
        item.setAttribute('id', ele.ID);
        articleList.appendChild(item);
    });
}

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvaW5kZXgudHMiLCJzcmMvdHMvc2hvdy50cyIsInNyYy90cy9zaG93Mi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsa0JBQXlCLEtBQVk7SUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BELHlDQUF5QztJQUN6QyxLQUFLO0lBQ1QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQU5ELDRCQU1DOzs7OztBQ05ELGlDQUFtQztBQUNuQyxpQ0FBZ0M7QUFDaEMsZ0JBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QixhQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7Ozs7O0FDSFYsZUFBdUIsS0FBUztJQUM1QixJQUFJLEVBQUUsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO0lBQzlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLCtCQUErQixFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNWLEVBQUUsQ0FBQyxrQkFBa0IsR0FBRztRQUNwQixJQUFHLEVBQUUsQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFFLEVBQUUsQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFDO1lBQ3BDLGdDQUFnQztZQUNoQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztTQUM5QzthQUFJO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDMUI7SUFDTCxDQUFDLENBQUE7SUFJRCxtREFBbUQ7SUFDbkQsMERBQTBEO0lBQzFELHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsS0FBSztBQUNULENBQUM7QUFwQkQsc0JBb0JDO0FBRUQsdUJBQXVCLGFBQWlCO0lBQ3BDLElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUQsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQU87UUFDMUIsSUFBSSxJQUFJLEdBQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDckYsSUFBSSxXQUFXLEdBQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDdEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLFdBQVcsQ0FBQyxDQUFBO1FBQy9CLFdBQVcsQ0FBQyxTQUFTLEdBQUcsU0FBTyxHQUFHLENBQUMsS0FBSyxlQUFVLEdBQUcsQ0FBQyxPQUFPLHlDQUFzQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGZ1bmN0aW9uIHNheUhlbGxvKGhlbGxvOnN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKGhlbGxvKTtcbiAgICBsZXQgcHJvbWlzZVRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9taXNlLXRlc3RcIik7XG4gICAgICAgIC8vIHByb21pc2VUcy5hZGRFdmVudExpc3RlbmVyKFwib25cIiwoKT0+IHtcbiAgICAgICAgLy8gfSlcbiAgICByZXR1cm4gaGVsbG87XG59XG4iLCJpbXBvcnQgeyBzYXlIZWxsbyB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBzaG93MiB9IGZyb20gXCIuL3Nob3cyXCI7XG5zYXlIZWxsbyhcImhlbGxvV29ybGRcIik7XG5zaG93MigxMCk7IiwiZXhwb3J0IGZ1bmN0aW9uIHNob3cyIChsYWJlbDphbnkpe1xuICAgIGxldCByMSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHIxLm9wZW4oJ0dFVCcsXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYWRkVXNlclwiLHRydWUpO1xuICAgIHIxLnNlbmQoKTtcbiAgICByMS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKT0+IHtcbiAgICAgICAgaWYocjEucmVhZHlTdGF0ZSA9PSA0JiZyMS5zdGF0dXMgPT0gMjAwKXtcbiAgICAgICAgICAgIC8vIGNvbnN0IGNyZWF0ZSA9IG5ldyBQcm9taXNlKCk7XG4gICAgICAgICAgICBjcmVhdGVBcnRpY2xlKEpTT04ucGFyc2UocjEucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2cocjEuc3RhdHVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuICAgIFxuICAgIC8vIGxldCBhcnRpY2xlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhW11cIilzXG4gICAgLy8gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYWRkVXNlclwiLHttb2RlOlwibm8tY29yc1wifSlcbiAgICAvLyAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnRleHQoKSk7XG4gICAgLy8gfSlcbn0gXG5cbmZ1bmN0aW9uIGNyZWF0ZUFydGljbGUoYXJ0aWNsZU9wdGlvbjphbnkpOnZvaWQge1xuICAgIGNvbnN0IGFydGljbGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcnRpY2xlLWxpc3RcIik7XG4gICAgYXJ0aWNsZU9wdGlvbi5mb3JFYWNoKChlbGU6YW55KSA9PiB7XG4gICAgICAgIGxldCBpdGVtOmFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnYXJ0aWNsZS1saXN0LWl0ZW0nKTtcbiAgICAgICAgbGV0IGl0ZW1XcmFwcGVyOmFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdhcnRpY2xlLWxpc3QtaXRlbS13cmFwcGVyJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBpdGVtV3JhcHBlcilcbiAgICAgICAgaXRlbVdyYXBwZXIuaW5uZXJIVE1MID0gYDxoMz4ke2VsZS50aXRsZX0vaDM+PHA+JHtlbGUuYXJ0aWNsZX08L3A+PGRpdiBjbGFzcz0nYXJ0aWNsZS11c2VyJz48L2Rpdj5gO1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1XcmFwcGVyKTtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJyxlbGUuSUQpO1xuICAgICAgICBhcnRpY2xlTGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9KVxufSJdfQ==
