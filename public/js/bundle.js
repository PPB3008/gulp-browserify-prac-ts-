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
    console.log(label * 2);
}
exports.show2 = show2;
},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvaW5kZXgudHMiLCJzcmMvdHMvc2hvdy50cyIsInNyYy90cy9zaG93Mi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsa0JBQXlCLEtBQVk7SUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BELHlDQUF5QztJQUN6QyxLQUFLO0lBQ1QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQU5ELDRCQU1DOzs7O0FDTkQsaUNBQW1DO0FBQ25DLGlDQUFnQztBQUNoQyxnQkFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3ZCLGFBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQzs7OztBQ0hWLGVBQXVCLEtBQVk7SUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQUZELHNCQUVDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGZ1bmN0aW9uIHNheUhlbGxvKGhlbGxvOnN0cmluZykge1xyXG4gICAgY29uc29sZS5sb2coaGVsbG8pO1xyXG4gICAgbGV0IHByb21pc2VUcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvbWlzZS10ZXN0XCIpO1xyXG4gICAgICAgIC8vIHByb21pc2VUcy5hZGRFdmVudExpc3RlbmVyKFwib25cIiwoKT0+IHtcclxuICAgICAgICAvLyB9KVxyXG4gICAgcmV0dXJuIGhlbGxvO1xyXG59XHJcbiIsImltcG9ydCB7IHNheUhlbGxvIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgc2hvdzIgfSBmcm9tIFwiLi9zaG93MlwiO1xyXG5zYXlIZWxsbyhcImhlbGxvV29ybGRcIik7XHJcbnNob3cyKDEwKTsiLCJleHBvcnQgZnVuY3Rpb24gc2hvdzIgKGxhYmVsOm51bWJlcil7XHJcbiAgICBjb25zb2xlLmxvZyhsYWJlbCAqIDIpO1xyXG59ICJdfQ==
