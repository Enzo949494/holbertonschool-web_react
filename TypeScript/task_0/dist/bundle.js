/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   studentsList: () => (/* binding */ studentsList)
/* harmony export */ });
// Create two student objects
var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};
var student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "San Francisco"
};
// Store students in an array
var studentsList = [student1, student2];
// Render table function
var renderTable = function (students) {
    // Create table element
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
    // Create header row
    var headerRow = document.createElement('tr');
    var firstNameHeader = document.createElement('th');
    var locationHeader = document.createElement('th');
    firstNameHeader.textContent = 'First Name';
    locationHeader.textContent = 'Location';
    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(locationHeader);
    tableBody.appendChild(headerRow);
    // Create a row for each student
    students.forEach(function (student) {
        var row = document.createElement('tr');
        var firstNameCell = document.createElement('td');
        var locationCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tableBody.appendChild(row);
    });
    // Append table body to table
    table.appendChild(tableBody);
    // Append table to the document body
    document.body.appendChild(table);
};
// Render the table when DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
    renderTable(studentsList);
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gRGVmaW5lIHRoZSBTdHVkZW50IGludGVyZmFjZVxuZXhwb3J0IGludGVyZmFjZSBTdHVkZW50IHtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIGFnZTogbnVtYmVyO1xuICBsb2NhdGlvbjogc3RyaW5nO1xufVxuXG4vLyBDcmVhdGUgdHdvIHN0dWRlbnQgb2JqZWN0c1xuY29uc3Qgc3R1ZGVudDE6IFN0dWRlbnQgPSB7XG4gIGZpcnN0TmFtZTogXCJKb2huXCIsXG4gIGxhc3ROYW1lOiBcIkRvZVwiLFxuICBhZ2U6IDIwLFxuICBsb2NhdGlvbjogXCJOZXcgWW9ya1wiXG59O1xuXG5jb25zdCBzdHVkZW50MjogU3R1ZGVudCA9IHtcbiAgZmlyc3ROYW1lOiBcIkphbmVcIixcbiAgbGFzdE5hbWU6IFwiU21pdGhcIixcbiAgYWdlOiAyMixcbiAgbG9jYXRpb246IFwiU2FuIEZyYW5jaXNjb1wiXG59O1xuXG4vLyBTdG9yZSBzdHVkZW50cyBpbiBhbiBhcnJheVxuZXhwb3J0IGNvbnN0IHN0dWRlbnRzTGlzdDogQXJyYXk8U3R1ZGVudD4gPSBbc3R1ZGVudDEsIHN0dWRlbnQyXTtcblxuLy8gUmVuZGVyIHRhYmxlIGZ1bmN0aW9uXG5jb25zdCByZW5kZXJUYWJsZSA9IChzdHVkZW50czogQXJyYXk8U3R1ZGVudD4pOiB2b2lkID0+IHtcbiAgLy8gQ3JlYXRlIHRhYmxlIGVsZW1lbnRcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuICBcbiAgLy8gQ3JlYXRlIGhlYWRlciByb3dcbiAgY29uc3QgaGVhZGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgY29uc3QgZmlyc3ROYW1lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgY29uc3QgbG9jYXRpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICBcbiAgZmlyc3ROYW1lSGVhZGVyLnRleHRDb250ZW50ID0gJ0ZpcnN0IE5hbWUnO1xuICBsb2NhdGlvbkhlYWRlci50ZXh0Q29udGVudCA9ICdMb2NhdGlvbic7XG4gIFxuICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQoZmlyc3ROYW1lSGVhZGVyKTtcbiAgaGVhZGVyUm93LmFwcGVuZENoaWxkKGxvY2F0aW9uSGVhZGVyKTtcbiAgdGFibGVCb2R5LmFwcGVuZENoaWxkKGhlYWRlclJvdyk7XG4gIFxuICAvLyBDcmVhdGUgYSByb3cgZm9yIGVhY2ggc3R1ZGVudFxuICBzdHVkZW50cy5mb3JFYWNoKChzdHVkZW50KSA9PiB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBmaXJzdE5hbWVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBsb2NhdGlvbkNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIFxuICAgIGZpcnN0TmFtZUNlbGwudGV4dENvbnRlbnQgPSBzdHVkZW50LmZpcnN0TmFtZTtcbiAgICBsb2NhdGlvbkNlbGwudGV4dENvbnRlbnQgPSBzdHVkZW50LmxvY2F0aW9uO1xuICAgIFxuICAgIHJvdy5hcHBlbmRDaGlsZChmaXJzdE5hbWVDZWxsKTtcbiAgICByb3cuYXBwZW5kQ2hpbGQobG9jYXRpb25DZWxsKTtcbiAgICB0YWJsZUJvZHkuYXBwZW5kQ2hpbGQocm93KTtcbiAgfSk7XG4gIFxuICAvLyBBcHBlbmQgdGFibGUgYm9keSB0byB0YWJsZVxuICB0YWJsZS5hcHBlbmRDaGlsZCh0YWJsZUJvZHkpO1xuICAvLyBBcHBlbmQgdGFibGUgdG8gdGhlIGRvY3VtZW50IGJvZHlcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YWJsZSk7XG59O1xuXG4vLyBSZW5kZXIgdGhlIHRhYmxlIHdoZW4gRE9NIGNvbnRlbnQgaXMgbG9hZGVkXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICByZW5kZXJUYWJsZShzdHVkZW50c0xpc3QpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=