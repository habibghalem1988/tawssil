"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_client-space_client-space_module_ts"],{

/***/ 77459:
/*!*************************************************************!*\
  !*** ./src/app/client-space/client-space-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientSpacePageRoutingModule": () => (/* binding */ ClientSpacePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _client_space_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-space.page */ 65471);




const routes = [
    {
        path: '',
        component: _client_space_page__WEBPACK_IMPORTED_MODULE_0__.ClientSpacePage
    }
];
let ClientSpacePageRoutingModule = class ClientSpacePageRoutingModule {
};
ClientSpacePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClientSpacePageRoutingModule);



/***/ }),

/***/ 33616:
/*!*****************************************************!*\
  !*** ./src/app/client-space/client-space.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientSpacePageModule": () => (/* binding */ ClientSpacePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _client_space_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-space-routing.module */ 77459);
/* harmony import */ var _client_space_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-space.page */ 65471);







let ClientSpacePageModule = class ClientSpacePageModule {
};
ClientSpacePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _client_space_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientSpacePageRoutingModule
        ],
        declarations: [_client_space_page__WEBPACK_IMPORTED_MODULE_1__.ClientSpacePage]
    })
], ClientSpacePageModule);



/***/ }),

/***/ 65471:
/*!***************************************************!*\
  !*** ./src/app/client-space/client-space.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientSpacePage": () => (/* binding */ ClientSpacePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _client_space_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-space.page.html?ngResource */ 63142);
/* harmony import */ var _client_space_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-space.page.scss?ngResource */ 52772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ClientSpacePage = class ClientSpacePage {
    constructor() { }
    ngOnInit() {
    }
};
ClientSpacePage.ctorParameters = () => [];
ClientSpacePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-client-space',
        template: _client_space_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_client_space_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ClientSpacePage);



/***/ }),

/***/ 52772:
/*!****************************************************************!*\
  !*** ./src/app/client-space/client-space.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQtc3BhY2UucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 63142:
/*!****************************************************************!*\
  !*** ./src/app/client-space/client-space.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>clientSpace</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_client-space_client-space_module_ts.js.map