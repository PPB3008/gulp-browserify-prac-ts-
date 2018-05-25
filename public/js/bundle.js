(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(hello) {
    console.log(hello);
    var promiseTs = document.querySelector(".promise-test");
    promiseTs.addEventListener("on", function () {
    });
    return hello;
}
exports.sayHello = sayHello;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var show2_1 = require("./show2");
index_1.sayHello("helloWorld");
show2_1.show2(2);
},{"./index":1,"./show2":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show2(label) {
    console.log(label * 2);
}
exports.show2 = show2;
},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvaW5kZXgudHMiLCJzcmMvdHMvc2hvdy50cyIsInNyYy90cy9zaG93Mi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsa0JBQXlCLEtBQVk7SUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3hELFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUM7SUFDaEMsQ0FBQyxDQUFDLENBQUE7SUFDRixPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBTkQsNEJBTUM7Ozs7QUNORCxpQ0FBbUM7QUFDbkMsaUNBQWdDO0FBQ2hDLGdCQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdkIsYUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7O0FDSFQsZUFBdUIsS0FBWTtJQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBRkQsc0JBRUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZnVuY3Rpb24gc2F5SGVsbG8oaGVsbG86c3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZyhoZWxsbyk7XHJcbiAgICBsZXQgcHJvbWlzZVRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9taXNlLXRlc3RcIik7XHJcbiAgICBwcm9taXNlVHMuYWRkRXZlbnRMaXN0ZW5lcihcIm9uXCIsKCk9PiB7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGhlbGxvO1xyXG59XHJcbiIsImltcG9ydCB7IHNheUhlbGxvIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgc2hvdzIgfSBmcm9tIFwiLi9zaG93MlwiO1xyXG5zYXlIZWxsbyhcImhlbGxvV29ybGRcIik7XHJcbnNob3cyKDIpOyIsImV4cG9ydCBmdW5jdGlvbiBzaG93MiAobGFiZWw6bnVtYmVyKXtcclxuICAgIGNvbnNvbGUubG9nKGxhYmVsICogMik7XHJcbn0gIl19
