"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_transportor-space_transportor-space_module_ts"],{

/***/ 91408:
/*!***********************************************************************!*\
  !*** ./src/app/transportor-space/transportor-space-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransportorSpacePageRoutingModule": () => (/* binding */ TransportorSpacePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _transportor_space_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transportor-space.page */ 74989);




const routes = [
    {
        path: '',
        component: _transportor_space_page__WEBPACK_IMPORTED_MODULE_0__.TransportorSpacePage
    }
];
let TransportorSpacePageRoutingModule = class TransportorSpacePageRoutingModule {
};
TransportorSpacePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TransportorSpacePageRoutingModule);



/***/ }),

/***/ 13335:
/*!***************************************************************!*\
  !*** ./src/app/transportor-space/transportor-space.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransportorSpacePageModule": () => (/* binding */ TransportorSpacePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _transportor_space_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transportor-space-routing.module */ 91408);
/* harmony import */ var _transportor_space_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transportor-space.page */ 74989);







let TransportorSpacePageModule = class TransportorSpacePageModule {
};
TransportorSpacePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _transportor_space_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransportorSpacePageRoutingModule
        ],
        declarations: [_transportor_space_page__WEBPACK_IMPORTED_MODULE_1__.TransportorSpacePage]
    })
], TransportorSpacePageModule);



/***/ }),

/***/ 74989:
/*!*************************************************************!*\
  !*** ./src/app/transportor-space/transportor-space.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransportorSpacePage": () => (/* binding */ TransportorSpacePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _transportor_space_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transportor-space.page.html?ngResource */ 32790);
/* harmony import */ var _transportor_space_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transportor-space.page.scss?ngResource */ 58238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TransportorSpacePage = class TransportorSpacePage {
    constructor() { }
    ngOnInit() {
    }
};
TransportorSpacePage.ctorParameters = () => [];
TransportorSpacePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-transportor-space',
        template: _transportor_space_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_transportor_space_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TransportorSpacePage);



/***/ }),

/***/ 58238:
/*!**************************************************************************!*\
  !*** ./src/app/transportor-space/transportor-space.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc3BvcnRvci1zcGFjZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 32790:
/*!**************************************************************************!*\
  !*** ./src/app/transportor-space/transportor-space.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>transportorSpace</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_transportor-space_transportor-space_module_ts.js.map