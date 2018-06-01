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
        (r1.readyState == 4 && r1.status == 200) ? console.log(r1.responseText) : console.log(r1.status);
    };
    fetch("http://localhost:3000/addUser", { mode: "no-cors" })
        .then(function (response) {
        console.log(response);
    });
}
exports.show2 = show2;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvaW5kZXgudHMiLCJzcmMvdHMvc2hvdy50cyIsInNyYy90cy9zaG93Mi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsa0JBQXlCLEtBQVk7SUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BELHlDQUF5QztJQUN6QyxLQUFLO0lBQ1QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQU5ELDRCQU1DOzs7OztBQ05ELGlDQUFtQztBQUNuQyxpQ0FBZ0M7QUFDaEMsZ0JBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QixhQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7Ozs7O0FDSFYsZUFBdUIsS0FBWTtJQUMvQixJQUFJLEVBQUUsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO0lBQzlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLCtCQUErQixFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNWLEVBQUUsQ0FBQyxrQkFBa0IsR0FBRztRQUNwQixDQUFDLEVBQUUsQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFFLEVBQUUsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUEsQ0FBQyxDQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFBLENBQUMsQ0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvRixDQUFDLENBQUE7SUFFRCxLQUFLLENBQUMsK0JBQStCLEVBQUMsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLENBQUM7U0FDdEQsSUFBSSxDQUFDLFVBQUEsUUFBUTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUIsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDO0FBWkQsc0JBWUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZnVuY3Rpb24gc2F5SGVsbG8oaGVsbG86c3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coaGVsbG8pO1xuICAgIGxldCBwcm9taXNlVHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb21pc2UtdGVzdFwiKTtcbiAgICAgICAgLy8gcHJvbWlzZVRzLmFkZEV2ZW50TGlzdGVuZXIoXCJvblwiLCgpPT4ge1xuICAgICAgICAvLyB9KVxuICAgIHJldHVybiBoZWxsbztcbn1cbiIsImltcG9ydCB7IHNheUhlbGxvIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IHNob3cyIH0gZnJvbSBcIi4vc2hvdzJcIjtcbnNheUhlbGxvKFwiaGVsbG9Xb3JsZFwiKTtcbnNob3cyKDEwKTsiLCJleHBvcnQgZnVuY3Rpb24gc2hvdzIgKGxhYmVsOm51bWJlcil7XG4gICAgbGV0IHIxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcjEub3BlbignR0VUJyxcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hZGRVc2VyXCIsdHJ1ZSk7XG4gICAgcjEuc2VuZCgpO1xuICAgIHIxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpPT4ge1xuICAgICAgICAocjEucmVhZHlTdGF0ZSA9PSA0JiZyMS5zdGF0dXMgPT0gMjAwKT9jb25zb2xlLmxvZyhyMS5yZXNwb25zZVRleHQpOmNvbnNvbGUubG9nKHIxLnN0YXR1cyk7XG4gICAgfVxuICAgIFxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FkZFVzZXJcIix7bW9kZTpcIm5vLWNvcnNcIn0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgfSlcbn0gIl19
