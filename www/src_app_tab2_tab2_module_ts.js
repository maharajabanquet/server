"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var E_Maharaja_Banquet_maharaja_banquet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 1748);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss?ngResource */ 1597);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _common_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../common-service.service */ 3889);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _tab1_simple_modal_simple_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tab1/simple-modal/simple-modal.page */ 130);








let Tab2Page = class Tab2Page {
  constructor(bookingService, modalController, loadingController) {
    this.bookingService = bookingService;
    this.modalController = modalController;
    this.loadingController = loadingController;
    this.status = 'approved';
    this.bookingData = [];
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.getBooking();
  }

  getBooking() {
    this.presentLoading().then(a => console.log('presented'));
    this.bookingService.getAllBooking(this.status).subscribe(resp => {
      console.log(resp);
      this.bookingData = resp && resp.bookingData || [];
      this.loadingController.dismiss().then(a => console.log('dismissed'));
    });
  }

  onToogle(event, booking) {
    console.log(booking);
    let status;
    console.log(event.target.value);

    if (event.detail.checked) {
      status = 'approved';
    } else {
      status = 'pending';
    }

    this.bookingService.confirmBooking(booking._id, status).subscribe(resp => {
      if (resp.status === 'success') {
        this.getBooking();
      }
    }, err => {
      console.log("Internal server error, Please try again");
    });
  }

  ChangeToogle(value) {
    if (value === 'pending') {
      return false;
    } else {
      return true;
    }
  }

  presentModal(booking) {
    var _this = this;

    return (0,E_Maharaja_Banquet_maharaja_banquet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("form main", booking);
      const modal = yield _this.modalController.create({
        component: _tab1_simple_modal_simple_modal_page__WEBPACK_IMPORTED_MODULE_4__.SimpleModalPage,
        breakpoints: [0, 0.3, 0.5, 0.8, 1],
        initialBreakpoint: 0.8,
        componentProps: {
          booking: booking
        }
      });
      modal.onDidDismiss().then(() => {
        _this.getBooking();
      });
      yield modal.present();
    })();
  }

  presentLoading() {
    var _this2 = this;

    return (0,E_Maharaja_Banquet_maharaja_banquet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this2.loadingController.create({
        message: 'please wait. . .',
        duration: 5000
      });
      return yield loading.present();
    })();
  }

};

Tab2Page.ctorParameters = () => [{
  type: _common_service_service__WEBPACK_IMPORTED_MODULE_3__.CommonServiceService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}];

Tab2Page.propDecorators = {
  status: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }]
};
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-tab2',
  template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Tab2Page);


/***/ }),

/***/ 1597:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxNYWhhcmFqYSUyMEJhbnF1ZXRcXG1haGFyYWphLWJhbnF1ZXRcXHNyY1xcYXBwXFx0YWIyXFx0YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0FKOztBREdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0ZKOztBREtFO0VBQ0UscUJBQUE7QUNGSiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgXHJcbiAgICBjb2xvcjogIzhjOGM4YztcclxuICBcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9IiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";

/***/ }),

/***/ 1748:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title (click)=\"getBooking()\">\n      BOOKING CONFIRMED \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ng-container *ngIf=\"bookingData && bookingData.length > 0\">\n      \n        <ion-card  *ngFor=\"let booking of bookingData\" (click)=\"presentModal(booking)\">\n          <ion-card-header>\n            <ion-card-subtitle>Booking Date</ion-card-subtitle>\n            <ion-card-title>\n              <ion-label >{{booking.bookingDate | date}}</ion-label>\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-card-subtitle>NAME: {{booking.firstName}} {{booking.lastName}}</ion-card-subtitle>\n          </ion-card-content>\n          <ion-card-content>\n            <ion-card-subtitle>DUE : {{booking.balancedAmount}}</ion-card-subtitle> \n          </ion-card-content>\n        </ion-card>\n        <!-- <ion-label (click)=\"presentModal(booking)\">{{booking.bookingDate | date}}</ion-label> -->\n  </ng-container>\n  <ng-container *ngIf=\"bookingData && bookingData.length === 0\">\n    <div id=\"container\">\n      <p>No Pending Booking</p>\n    </div>\n  </ng-container>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map