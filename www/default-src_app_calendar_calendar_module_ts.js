"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_calendar_calendar_module_ts"],{

/***/ 9987:
/*!*****************************************************!*\
  !*** ./src/app/calendar/calendar-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarPageRoutingModule": () => (/* binding */ CalendarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.page */ 9667);




const routes = [
    {
        path: '',
        component: _calendar_page__WEBPACK_IMPORTED_MODULE_0__.CalendarPage
    }
];
let CalendarPageRoutingModule = class CalendarPageRoutingModule {
};
CalendarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CalendarPageRoutingModule);



/***/ }),

/***/ 979:
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarPageModule": () => (/* binding */ CalendarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-routing.module */ 9987);
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.page */ 9667);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularx-flatpickr */ 1988);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-calendar */ 5610);
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ 8617);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 4587);









 // import bn-ng-idle service

let CalendarPageModule = class CalendarPageModule {
};
CalendarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalendarPageRoutingModule,
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__.FlatpickrModule.forRoot(),
            angular_calendar__WEBPACK_IMPORTED_MODULE_9__.CalendarModule.forRoot({ provide: angular_calendar__WEBPACK_IMPORTED_MODULE_9__.DateAdapter, useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__.adapterFactory }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_calendar_page__WEBPACK_IMPORTED_MODULE_1__.CalendarPage],
        exports: [_calendar_page__WEBPACK_IMPORTED_MODULE_1__.CalendarPage],
        providers: [_awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera]
    })
], CalendarPageModule);



/***/ }),

/***/ 9667:
/*!*******************************************!*\
  !*** ./src/app/calendar/calendar.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarPage": () => (/* binding */ CalendarPage)
/* harmony export */ });
/* harmony import */ var E_Maharaja_Banquet_maharaja_banquet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _calendar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.page.html?ngResource */ 6163);
/* harmony import */ var _calendar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.page.scss?ngResource */ 2088);
/* harmony import */ var _common_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../common-service.service */ 3889);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 2757);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 9377);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 3200);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ 5610);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 4587);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);












const colors = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
let CalendarPage = class CalendarPage {
  constructor(camera, fb, commmonService, loadingCtrl, toastr) {
    this.camera = camera;
    this.fb = fb;
    this.commmonService = commmonService;
    this.loadingCtrl = loadingCtrl;
    this.toastr = toastr;
    this.message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
    this.isModalOpen = false;
    this.imageURI = [];
    this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_5__.CalendarView.Month;
    this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_5__.CalendarView;
    this.viewDate = new Date();
    this.actions = [{
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({
        event
      }) => {
        this.handleEvent('Edited', event);
      }
    }, {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({
        event
      }) => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }];
    this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.events = [];
    this.activeDayIsOpen = false;
  }

  ngOnInit() {
    this.taskForm = this.fb.group({
      date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      images: [[]],
      staffName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
    });
    this.getTaskList();
  }

  ionViewWillEnter() {}

  getTaskList() {
    var _this = this;

    return (0,E_Maharaja_Banquet_maharaja_banquet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.presentLoading(); // start loader

      console.log('check');
      let eventClone = [];
      _this.events = [];

      _this.commmonService.getTask().subscribe(resp => {
        if (resp && resp.status === 'success') {
          _this.loadingCtrl.dismiss();

          let taskList = resp && resp.task || [];

          if (taskList.length > 0) {
            taskList.forEach(element => {
              eventClone.push({
                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(element.date), 10),
                data: element,
                end: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(element.date), 23),
                title: 'A draggable and resizable event',
                color: { ...colors.yellow
                },
                resizable: {
                  beforeStart: true,
                  afterEnd: true
                },
                draggable: false,
                actions: _this.actions
              });
            });
            _this.events = eventClone;
          }
        }
      });
    })();
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  setOpen(isOpen) {
    if (!isOpen) {
      this.taskForm.get('date').patchValue('');
      this.taskForm.get('title').patchValue('');
      this.taskForm.get('images').patchValue([]);
      this.taskForm.get('staffName').patchValue('');
      this.disableButton = false;
    }

    this.isModalOpen = isOpen;
  }

  dayClicked({
    date,
    events
  }) {
    console.log("HERE EVE ", events);
    this.taskForm.patchValue(events[0] && events[0]['data']);

    if (events && events[0] && events[0]['data']) {
      this.disableButton = true;
    }

    this.selectedDate = date;
    this.taskForm.get('date').patchValue(this.selectedDate);
    this.setOpen(true);
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event) {
    const ev = event;

    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }) {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return { ...event,
          start: newStart,
          end: newEnd
        };
      }

      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action, event) {
    this.modalData = {
      event,
      action
    };
  }

  addEvent() {
    this.events = [...this.events, {
      title: 'New event',
      start: (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(new Date()),
      end: (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    }];
  }

  deleteEvent(eventToDelete) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  onFileSelected() {
    console.log("CAMERA");
    const options = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    };
    this.camera.getPicture(options).then(imageData => {
      this.taskForm.get('images').value.push("data:image/jpeg;base64," + imageData); // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
    }, err => {
      console.log(err); // Handle error
    });
  }

  submit() {
    var _this2 = this;

    return (0,E_Maharaja_Banquet_maharaja_banquet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.taskForm.getRawValue().images.length === 0) {
        const toast = yield _this2.toastr.create({
          position: 'top',
          message: 'Please upload all the images',
          duration: 3000
        });
        yield toast.present();
        return;
      }

      console.log('here');

      if (_this2.taskForm.status === 'INVALID') {
        const toast = yield _this2.toastr.create({
          position: 'top',
          message: 'All fields are required',
          duration: 3000
        });
        yield toast.present();
        return;
      }

      const loading = yield _this2.presentLoading(); // start loader

      _this2.commmonService.submitTask(_this2.taskForm.getRawValue()).subscribe(resp => {
        if (resp && resp.status === 'success') {
          _this2.loadingCtrl.dismiss(); // stop loader on successfull response


          _this2.prompt('Task Submmited');

          _this2.taskForm.reset();

          _this2.modal.dismiss();

          _this2.getTaskList();
        }
      }, err => {
        _this2.loadingCtrl.dismiss(); // stop loader on some error

      });
    })();
  }

  presentLoading() {
    var _this3 = this;

    return (0,E_Maharaja_Banquet_maharaja_banquet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this3.loadingCtrl.create({
        spinner: 'circles',
        keyboardClose: false,
        message: 'Please wait..'
      });
      return yield loading.present();
    })();
  }

  prompt(msg) {
    var _this4 = this;

    return (0,E_Maharaja_Banquet_maharaja_banquet_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this4.toastr.create({
        position: 'top',
        message: msg,
        duration: 3000
      });
      yield toast.present();
    })();
  }

};

CalendarPage.ctorParameters = () => [{
  type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_4__.Camera
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
}, {
  type: _common_service_service__WEBPACK_IMPORTED_MODULE_3__.CommonServiceService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController
}];

CalendarPage.propDecorators = {
  modalContent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
    args: ['modalContent', {
      static: true
    }]
  }],
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonModal]
  }]
};
CalendarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-calendar',
  template: _calendar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewEncapsulation.None,
  styles: [_calendar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CalendarPage);


/***/ }),

/***/ 4587:
/*!********************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/camera/__ivy_ngcc__/ngx/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera),
/* harmony export */   "DestinationType": () => (/* binding */ DestinationType),
/* harmony export */   "Direction": () => (/* binding */ Direction),
/* harmony export */   "EncodingType": () => (/* binding */ EncodingType),
/* harmony export */   "MediaType": () => (/* binding */ MediaType),
/* harmony export */   "PictureSourceType": () => (/* binding */ PictureSourceType),
/* harmony export */   "PopoverArrowDirection": () => (/* binding */ PopoverArrowDirection)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 4624);




var DestinationType;

(function (DestinationType) {
  DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
  DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
  DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));

var EncodingType;

(function (EncodingType) {
  EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
  EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));

var MediaType;

(function (MediaType) {
  MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
  MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
  MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));

var PictureSourceType;

(function (PictureSourceType) {
  PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
  PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
  PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));

var PopoverArrowDirection;

(function (PopoverArrowDirection) {
  PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
  PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
  PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
  PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
  PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));

var Direction;

(function (Direction) {
  Direction[Direction["BACK"] = 0] = "BACK";
  Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));

var Camera =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Camera, _super);

  function Camera() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    /**
     * Constant for possible destination types
     */


    _this.DestinationType = {
      /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
      DATA_URL: 0,

      /** Return file uri (content://media/external/images/media/2 for Android) */
      FILE_URI: 1,

      /** Return native uri (eg. asset-library://... for iOS) */
      NATIVE_URI: 2
    };
    /**
     * Convenience constant
     */

    _this.EncodingType = {
      /** Return JPEG encoded image */
      JPEG: 0,

      /** Return PNG encoded image */
      PNG: 1
    };
    /**
     * Convenience constant
     */

    _this.MediaType = {
      /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
      PICTURE: 0,

      /** Allow selection of video only, ONLY RETURNS URL */
      VIDEO: 1,

      /** Allow selection from all media types */
      ALLMEDIA: 2
    };
    /**
     * Convenience constant
     */

    _this.PictureSourceType = {
      /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
      PHOTOLIBRARY: 0,

      /** Take picture from camera */
      CAMERA: 1,

      /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
      SAVEDPHOTOALBUM: 2
    };
    /**
     * Convenience constant
     */

    _this.PopoverArrowDirection = {
      ARROW_UP: 1,
      ARROW_DOWN: 2,
      ARROW_LEFT: 4,
      ARROW_RIGHT: 8,
      ARROW_ANY: 15
    };
    /**
     * Convenience constant
     */

    _this.Direction = {
      /** Use the back-facing camera */
      BACK: 0,

      /** Use the front-facing camera */
      FRONT: 1
    };
    return _this;
  }

  Camera.prototype.getPicture = function (options) {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getPicture", {
      "callbackOrder": "reverse"
    }, arguments);
  };

  Camera.prototype.cleanup = function () {
    return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "cleanup", {
      "platforms": ["iOS"]
    }, arguments);
  };

  Camera.pluginName = "Camera";
  Camera.plugin = "cordova-plugin-camera";
  Camera.pluginRef = "navigator.camera";
  Camera.repo = "https://github.com/apache/cordova-plugin-camera";
  Camera.platforms = ["Android", "Browser", "iOS", "Windows"];

  Camera.ɵfac = /*@__PURE__*/function () {
    var ɵCamera_BaseFactory;
    return function Camera_Factory(t) {
      return (ɵCamera_BaseFactory || (ɵCamera_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](Camera)))(t || Camera);
    };
  }();

  Camera.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: Camera,
    factory: function (t) {
      return Camera.ɵfac(t);
    }
  });

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Camera, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null);
  })();

  return Camera;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin);



/***/ }),

/***/ 27:
/*!**********************************************************************!*\
  !*** ./node_modules/@mattlewis92/dom-autoscroller/dist/bundle.es.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getDef(f, d) {
  if (typeof f === 'undefined') {
    return typeof d === 'undefined' ? f : d;
  }

  return f;
}

function boolean(func, def) {
  func = getDef(func, def);

  if (typeof func === 'function') {
    return function f() {
      var arguments$1 = arguments;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments$1[_key];
      }

      return !!func.apply(this, args);
    };
  }

  return !!func ? function () {
    return true;
  } : function () {
    return false;
  };
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
/**
 * Returns `true` if provided input is Element.
 * @name isElement
 * @param {*} [input]
 * @returns {boolean}
 */


var isElement$1 = function (input) {
  return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.nodeType === 1 && _typeof(input.style) === 'object' && _typeof(input.ownerDocument) === 'object';
};

function indexOfElement(elements, element) {
  element = resolveElement(element, true);

  if (!isElement$1(element)) {
    return -1;
  }

  for (var i = 0; i < elements.length; i++) {
    if (elements[i] === element) {
      return i;
    }
  }

  return -1;
}

function hasElement(elements, element) {
  return -1 !== indexOfElement(elements, element);
}

function pushElements(elements, toAdd) {
  for (var i = 0; i < toAdd.length; i++) {
    if (!hasElement(elements, toAdd[i])) {
      elements.push(toAdd[i]);
    }
  }

  return toAdd;
}

function addElements(elements) {
  var arguments$1 = arguments;
  var toAdd = [],
      len = arguments.length - 1;

  while (len-- > 0) {
    toAdd[len] = arguments$1[len + 1];
  }

  toAdd = toAdd.map(resolveElement);
  return pushElements(elements, toAdd);
}

function removeElements(elements) {
  var arguments$1 = arguments;
  var toRemove = [],
      len = arguments.length - 1;

  while (len-- > 0) {
    toRemove[len] = arguments$1[len + 1];
  }

  return toRemove.map(resolveElement).reduce(function (last, e) {
    var index = indexOfElement(elements, e);

    if (index !== -1) {
      return last.concat(elements.splice(index, 1));
    }

    return last;
  }, []);
}

function resolveElement(element, noThrow) {
  if (typeof element === 'string') {
    try {
      return document.querySelector(element);
    } catch (e) {
      throw e;
    }
  }

  if (!isElement$1(element) && !noThrow) {
    throw new TypeError(element + " is not a DOM element.");
  }

  return element;
}

function createPointCB(object, options) {
  // A persistent object (as opposed to returned object) is used to save memory
  // This is good to prevent layout thrashing, or for games, and such
  // NOTE
  // This uses IE fixes which should be OK to remove some day. :)
  // Some speed will be gained by removal of these.
  // pointCB should be saved in a variable on return
  // This allows the usage of element.removeEventListener
  options = options || {};
  var allowUpdate = boolean(options.allowUpdate, true);
  /*if(typeof options.allowUpdate === 'function'){
      allowUpdate = options.allowUpdate;
  }else{
      allowUpdate = function(){return true;};
  }*/

  return function pointCB(event) {
    event = event || window.event; // IE-ism

    object.target = event.target || event.srcElement || event.originalTarget;
    object.element = this;
    object.type = event.type;

    if (!allowUpdate(event)) {
      return;
    } // Support touch
    // http://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644


    if (event.targetTouches) {
      object.x = event.targetTouches[0].clientX;
      object.y = event.targetTouches[0].clientY;
      object.pageX = event.targetTouches[0].pageX;
      object.pageY = event.targetTouches[0].pageY;
      object.screenX = event.targetTouches[0].screenX;
      object.screenY = event.targetTouches[0].screenY;
    } else {
      // If pageX/Y aren't available and clientX/Y are,
      // calculate pageX/Y - logic taken from jQuery.
      // (This is to support old IE)
      // NOTE Hopefully this can be removed soon.
      if (event.pageX === null && event.clientX !== null) {
        var eventDoc = event.target && event.target.ownerDocument || document;
        var doc = eventDoc.documentElement;
        var body = eventDoc.body;
        object.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
        object.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
      } else {
        object.pageX = event.pageX;
        object.pageY = event.pageY;
      } // pageX, and pageY change with page scroll
      // so we're not going to use those for x, and y.
      // NOTE Most browsers also alias clientX/Y with x/y
      // so that's something to consider down the road.


      object.x = event.clientX;
      object.y = event.clientY;
      object.screenX = event.screenX;
      object.screenY = event.screenY;
    }

    object.clientX = object.x;
    object.clientY = object.y;
  }; //NOTE Remember accessibility, Aria roles, and labels.
}

function createWindowRect() {
  var props = {
    top: {
      value: 0,
      enumerable: true
    },
    left: {
      value: 0,
      enumerable: true
    },
    right: {
      value: window.innerWidth,
      enumerable: true
    },
    bottom: {
      value: window.innerHeight,
      enumerable: true
    },
    width: {
      value: window.innerWidth,
      enumerable: true
    },
    height: {
      value: window.innerHeight,
      enumerable: true
    },
    x: {
      value: 0,
      enumerable: true
    },
    y: {
      value: 0,
      enumerable: true
    }
  };

  if (Object.create) {
    return Object.create({}, props);
  } else {
    var rect = {};
    Object.defineProperties(rect, props);
    return rect;
  }
}

function getClientRect(el) {
  if (el === window) {
    return createWindowRect();
  } else {
    try {
      var rect = el.getBoundingClientRect();

      if (rect.x === undefined) {
        rect.x = rect.left;
        rect.y = rect.top;
      }

      return rect;
    } catch (e) {
      throw new TypeError("Can't call getBoundingClientRect on " + el);
    }
  }
}

function pointInside(point, el) {
  var rect = getClientRect(el);
  return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
}

var objectCreate = void 0;

if (typeof Object.create != 'function') {
  objectCreate = function (undefined$1) {
    var Temp = function Temp() {};

    return function (prototype, propertiesObject) {
      if (prototype !== Object(prototype) && prototype !== null) {
        throw TypeError('Argument must be an object, or null');
      }

      Temp.prototype = prototype || {};
      var result = new Temp();
      Temp.prototype = null;

      if (propertiesObject !== undefined$1) {
        Object.defineProperties(result, propertiesObject);
      } // to imitate the case of Object.create(null)


      if (prototype === null) {
        result.__proto__ = null;
      }

      return result;
    };
  }();
} else {
  objectCreate = Object.create;
}

var objectCreate$1 = objectCreate;
var mouseEventProps = ['altKey', 'button', 'buttons', 'clientX', 'clientY', 'ctrlKey', 'metaKey', 'movementX', 'movementY', 'offsetX', 'offsetY', 'pageX', 'pageY', 'region', 'relatedTarget', 'screenX', 'screenY', 'shiftKey', 'which', 'x', 'y'];

function createDispatcher(element) {
  var defaultSettings = {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    ctrlKey: false,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    button: 0,
    buttons: 1,
    relatedTarget: null,
    region: null
  };

  if (element !== undefined) {
    element.addEventListener('mousemove', onMove);
  }

  function onMove(e) {
    for (var i = 0; i < mouseEventProps.length; i++) {
      defaultSettings[mouseEventProps[i]] = e[mouseEventProps[i]];
    }
  }

  var dispatch = function () {
    if (MouseEvent) {
      return function m1(element, initMove, data) {
        var evt = new MouseEvent('mousemove', createMoveInit(defaultSettings, initMove)); //evt.dispatched = 'mousemove';

        setSpecial(evt, data);
        return element.dispatchEvent(evt);
      };
    } else if (typeof document.createEvent === 'function') {
      return function m2(element, initMove, data) {
        var settings = createMoveInit(defaultSettings, initMove);
        var evt = document.createEvent('MouseEvents');
        evt.initMouseEvent("mousemove", true, //can bubble
        true, //cancelable
        window, //view
        0, //detail
        settings.screenX, //0, //screenX
        settings.screenY, //0, //screenY
        settings.clientX, //80, //clientX
        settings.clientY, //20, //clientY
        settings.ctrlKey, //false, //ctrlKey
        settings.altKey, //false, //altKey
        settings.shiftKey, //false, //shiftKey
        settings.metaKey, //false, //metaKey
        settings.button, //0, //button
        settings.relatedTarget //null //relatedTarget
        ); //evt.dispatched = 'mousemove';

        setSpecial(evt, data);
        return element.dispatchEvent(evt);
      };
    } else if (typeof document.createEventObject === 'function') {
      return function m3(element, initMove, data) {
        var evt = document.createEventObject();
        var settings = createMoveInit(defaultSettings, initMove);

        for (var name in settings) {
          evt[name] = settings[name];
        } //evt.dispatched = 'mousemove';


        setSpecial(evt, data);
        return element.dispatchEvent(evt);
      };
    }
  }();

  function destroy() {
    if (element) {
      element.removeEventListener('mousemove', onMove, false);
    }

    defaultSettings = null;
  }

  return {
    destroy: destroy,
    dispatch: dispatch
  };
}

function createMoveInit(defaultSettings, initMove) {
  initMove = initMove || {};
  var settings = objectCreate$1(defaultSettings);

  for (var i = 0; i < mouseEventProps.length; i++) {
    if (initMove[mouseEventProps[i]] !== undefined) {
      settings[mouseEventProps[i]] = initMove[mouseEventProps[i]];
    }
  }

  return settings;
}

function setSpecial(e, data) {
  console.log('data ', data);
  e.data = data || {};
  e.dispatched = 'mousemove';
}

var prefix = ['webkit', 'moz', 'ms', 'o'];

var requestFrame = function () {
  if (typeof window === "undefined") {
    return function () {};
  }

  for (var i = 0, limit = prefix.length; i < limit && !window.requestAnimationFrame; ++i) {
    window.requestAnimationFrame = window[prefix[i] + 'RequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    var lastTime = 0;

    window.requestAnimationFrame = function (callback) {
      var now = new Date().getTime();
      var ttc = Math.max(0, 16 - now - lastTime);
      var timer = window.setTimeout(function () {
        return callback(now + ttc);
      }, ttc);
      lastTime = now + ttc;
      return timer;
    };
  }

  return window.requestAnimationFrame.bind(window);
}();

var cancelFrame = function () {
  if (typeof window === "undefined") {
    return function () {};
  }

  for (var i = 0, limit = prefix.length; i < limit && !window.cancelAnimationFrame; ++i) {
    window.cancelAnimationFrame = window[prefix[i] + 'CancelAnimationFrame'] || window[prefix[i] + 'CancelRequestAnimationFrame'];
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (timer) {
      window.clearTimeout(timer);
    };
  }

  return window.cancelAnimationFrame.bind(window);
}();

function AutoScroller(elements, options) {
  if (options === void 0) options = {};
  var self = this;
  var maxSpeed = 4,
      scrolling = false;

  if (typeof options.margin !== 'object') {
    var margin = options.margin || -1;
    this.margin = {
      left: margin,
      right: margin,
      top: margin,
      bottom: margin
    };
  } else {
    this.margin = options.margin;
  } //this.scrolling = false;


  this.scrollWhenOutside = options.scrollWhenOutside || false;
  var point = {},
      pointCB = createPointCB(point),
      dispatcher = createDispatcher(),
      down = false;
  window.addEventListener('mousemove', pointCB, false);
  window.addEventListener('touchmove', pointCB, false);

  if (!isNaN(options.maxSpeed)) {
    maxSpeed = options.maxSpeed;
  }

  if (typeof maxSpeed !== 'object') {
    maxSpeed = {
      left: maxSpeed,
      right: maxSpeed,
      top: maxSpeed,
      bottom: maxSpeed
    };
  }

  this.autoScroll = boolean(options.autoScroll);
  this.syncMove = boolean(options.syncMove, false);

  this.destroy = function (forceCleanAnimation) {
    window.removeEventListener('mousemove', pointCB, false);
    window.removeEventListener('touchmove', pointCB, false);
    window.removeEventListener('mousedown', onDown, false);
    window.removeEventListener('touchstart', onDown, false);
    window.removeEventListener('mouseup', onUp, false);
    window.removeEventListener('touchend', onUp, false);
    window.removeEventListener('pointerup', onUp, false);
    window.removeEventListener('mouseleave', onMouseOut, false);
    window.removeEventListener('mousemove', onMove, false);
    window.removeEventListener('touchmove', onMove, false);
    window.removeEventListener('scroll', setScroll, true);
    elements = [];

    if (forceCleanAnimation) {
      cleanAnimation();
    }
  };

  this.add = function () {
    var element = [],
        len = arguments.length;

    while (len--) element[len] = arguments[len];

    addElements.apply(void 0, [elements].concat(element));
    return this;
  };

  this.remove = function () {
    var element = [],
        len = arguments.length;

    while (len--) element[len] = arguments[len];

    return removeElements.apply(void 0, [elements].concat(element));
  };

  var hasWindow = null,
      windowAnimationFrame;

  if (Object.prototype.toString.call(elements) !== '[object Array]') {
    elements = [elements];
  }

  (function (temp) {
    elements = [];
    temp.forEach(function (element) {
      if (element === window) {
        hasWindow = window;
      } else {
        self.add(element);
      }
    });
  })(elements);

  Object.defineProperties(this, {
    down: {
      get: function () {
        return down;
      }
    },
    maxSpeed: {
      get: function () {
        return maxSpeed;
      }
    },
    point: {
      get: function () {
        return point;
      }
    },
    scrolling: {
      get: function () {
        return scrolling;
      }
    }
  });
  var current = null,
      animationFrame;
  window.addEventListener('mousedown', onDown, false);
  window.addEventListener('touchstart', onDown, false);
  window.addEventListener('mouseup', onUp, false);
  window.addEventListener('touchend', onUp, false);
  /*
  IE does not trigger mouseup event when scrolling.
  It is a known issue that Microsoft won't fix.
  https://connect.microsoft.com/IE/feedback/details/783058/scrollbar-trigger-mousedown-but-not-mouseup
  IE supports pointer events instead
  */

  window.addEventListener('pointerup', onUp, false);
  window.addEventListener('mousemove', onMove, false);
  window.addEventListener('touchmove', onMove, false);
  window.addEventListener('mouseleave', onMouseOut, false);
  window.addEventListener('scroll', setScroll, true);

  function setScroll(e) {
    for (var i = 0; i < elements.length; i++) {
      if (elements[i] === e.target) {
        scrolling = true;
        break;
      }
    }

    if (scrolling) {
      requestFrame(function () {
        return scrolling = false;
      });
    }
  }

  function onDown() {
    down = true;
  }

  function onUp() {
    down = false;
    cleanAnimation();
  }

  function cleanAnimation() {
    cancelFrame(animationFrame);
    cancelFrame(windowAnimationFrame);
  }

  function onMouseOut() {
    down = false;
  }

  function getTarget(target) {
    if (!target) {
      return null;
    }

    if (current === target) {
      return target;
    }

    if (hasElement(elements, target)) {
      return target;
    }

    while (target = target.parentNode) {
      if (hasElement(elements, target)) {
        return target;
      }
    }

    return null;
  }

  function getElementUnderPoint() {
    var underPoint = null;

    for (var i = 0; i < elements.length; i++) {
      if (inside(point, elements[i])) {
        underPoint = elements[i];
      }
    }

    return underPoint;
  }

  function onMove(event) {
    if (!self.autoScroll()) {
      return;
    }

    if (event['dispatched']) {
      return;
    }

    var target = event.target,
        body = document.body;

    if (current && !inside(point, current)) {
      if (!self.scrollWhenOutside) {
        current = null;
      }
    }

    if (target && target.parentNode === body) {
      //The special condition to improve speed.
      target = getElementUnderPoint();
    } else {
      target = getTarget(target);

      if (!target) {
        target = getElementUnderPoint();
      }
    }

    if (target && target !== current) {
      current = target;
    }

    if (hasWindow) {
      cancelFrame(windowAnimationFrame);
      windowAnimationFrame = requestFrame(scrollWindow);
    }

    if (!current) {
      return;
    }

    cancelFrame(animationFrame);
    animationFrame = requestFrame(scrollTick);
  }

  function scrollWindow() {
    autoScroll(hasWindow);
    cancelFrame(windowAnimationFrame);
    windowAnimationFrame = requestFrame(scrollWindow);
  }

  function scrollTick() {
    if (!current) {
      return;
    }

    autoScroll(current);
    cancelFrame(animationFrame);
    animationFrame = requestFrame(scrollTick);
  }

  function autoScroll(el) {
    var rect = getClientRect(el),
        scrollx,
        scrolly;

    if (point.x < rect.left + self.margin.left) {
      scrollx = Math.floor(Math.max(-1, (point.x - rect.left) / self.margin.left - 1) * self.maxSpeed.left);
    } else if (point.x > rect.right - self.margin.right) {
      scrollx = Math.ceil(Math.min(1, (point.x - rect.right) / self.margin.right + 1) * self.maxSpeed.right);
    } else {
      scrollx = 0;
    }

    if (point.y < rect.top + self.margin.top) {
      scrolly = Math.floor(Math.max(-1, (point.y - rect.top) / self.margin.top - 1) * self.maxSpeed.top);
    } else if (point.y > rect.bottom - self.margin.bottom) {
      scrolly = Math.ceil(Math.min(1, (point.y - rect.bottom) / self.margin.bottom + 1) * self.maxSpeed.bottom);
    } else {
      scrolly = 0;
    }

    if (self.syncMove()) {
      /*
      Notes about mousemove event dispatch.
      screen(X/Y) should need to be updated.
      Some other properties might need to be set.
      Keep the syncMove option default false until all inconsistencies are taken care of.
      */
      dispatcher.dispatch(el, {
        pageX: point.pageX + scrollx,
        pageY: point.pageY + scrolly,
        clientX: point.x + scrollx,
        clientY: point.y + scrolly
      });
    }

    setTimeout(function () {
      if (scrolly) {
        scrollY(el, scrolly);
      }

      if (scrollx) {
        scrollX(el, scrollx);
      }
    });
  }

  function scrollY(el, amount) {
    if (el === window) {
      window.scrollTo(el.pageXOffset, el.pageYOffset + amount);
    } else {
      el.scrollTop += amount;
    }
  }

  function scrollX(el, amount) {
    if (el === window) {
      window.scrollTo(el.pageXOffset + amount, el.pageYOffset);
    } else {
      el.scrollLeft += amount;
    }
  }
}

function AutoScrollerFactory(element, options) {
  return new AutoScroller(element, options);
}

function inside(point, el, rect) {
  if (!rect) {
    return pointInside(point, el);
  } else {
    return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
  }
}
/*
git remote add origin https://github.com/hollowdoor/dom_autoscroller.git
git push -u origin master
*/


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutoScrollerFactory);

/***/ }),

/***/ 8617:
/*!***************************************************************************!*\
  !*** ./node_modules/angular-calendar/date-adapters/esm/date-fns/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adapterFactory": () => (/* binding */ adapterFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var calendar_utils_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! calendar-utils/date-adapters/date-fns */ 3435);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 8856);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 8053);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 8393);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 4531);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 5654);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 2362);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 1625);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 7722);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 2131);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 8920);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 4190);



function adapterFactory() {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, (0,calendar_utils_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_0__.adapterFactory)()), {
    addWeeks: date_fns__WEBPACK_IMPORTED_MODULE_2__["default"],
    addMonths: date_fns__WEBPACK_IMPORTED_MODULE_3__["default"],
    subDays: date_fns__WEBPACK_IMPORTED_MODULE_4__["default"],
    subWeeks: date_fns__WEBPACK_IMPORTED_MODULE_5__["default"],
    subMonths: date_fns__WEBPACK_IMPORTED_MODULE_6__["default"],
    getISOWeek: date_fns__WEBPACK_IMPORTED_MODULE_7__["default"],
    setDate: date_fns__WEBPACK_IMPORTED_MODULE_8__["default"],
    setMonth: date_fns__WEBPACK_IMPORTED_MODULE_9__["default"],
    setYear: date_fns__WEBPACK_IMPORTED_MODULE_10__["default"],
    getDate: date_fns__WEBPACK_IMPORTED_MODULE_11__["default"],
    getYear: date_fns__WEBPACK_IMPORTED_MODULE_12__["default"]
  });
}

/***/ }),

/***/ 5610:
/*!********************************************************************!*\
  !*** ./node_modules/angular-calendar/fesm2015/angular-calendar.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarA11y": () => (/* binding */ CalendarA11y),
/* harmony export */   "CalendarAngularDateFormatter": () => (/* binding */ CalendarAngularDateFormatter),
/* harmony export */   "CalendarCommonModule": () => (/* binding */ CalendarCommonModule),
/* harmony export */   "CalendarDateFormatter": () => (/* binding */ CalendarDateFormatter),
/* harmony export */   "CalendarDayModule": () => (/* binding */ CalendarDayModule),
/* harmony export */   "CalendarDayViewComponent": () => (/* binding */ CalendarDayViewComponent),
/* harmony export */   "CalendarEventTimesChangedEventType": () => (/* binding */ CalendarEventTimesChangedEventType),
/* harmony export */   "CalendarEventTitleFormatter": () => (/* binding */ CalendarEventTitleFormatter),
/* harmony export */   "CalendarModule": () => (/* binding */ CalendarModule),
/* harmony export */   "CalendarMomentDateFormatter": () => (/* binding */ CalendarMomentDateFormatter),
/* harmony export */   "CalendarMonthModule": () => (/* binding */ CalendarMonthModule),
/* harmony export */   "CalendarMonthViewComponent": () => (/* binding */ CalendarMonthViewComponent),
/* harmony export */   "CalendarNativeDateFormatter": () => (/* binding */ CalendarNativeDateFormatter),
/* harmony export */   "CalendarUtils": () => (/* binding */ CalendarUtils),
/* harmony export */   "CalendarView": () => (/* binding */ CalendarView),
/* harmony export */   "CalendarWeekModule": () => (/* binding */ CalendarWeekModule),
/* harmony export */   "CalendarWeekViewComponent": () => (/* binding */ CalendarWeekViewComponent),
/* harmony export */   "DAYS_OF_WEEK": () => (/* reexport safe */ calendar_utils__WEBPACK_IMPORTED_MODULE_1__.DAYS_OF_WEEK),
/* harmony export */   "DateAdapter": () => (/* binding */ DateAdapter),
/* harmony export */   "MOMENT": () => (/* binding */ MOMENT),
/* harmony export */   "collapseAnimation": () => (/* binding */ collapseAnimation),
/* harmony export */   "getWeekViewPeriod": () => (/* binding */ getWeekViewPeriod),
/* harmony export */   "ɵCalendarA11yPipe": () => (/* binding */ CalendarA11yPipe),
/* harmony export */   "ɵCalendarDatePipe": () => (/* binding */ CalendarDatePipe),
/* harmony export */   "ɵCalendarEventActionsComponent": () => (/* binding */ CalendarEventActionsComponent),
/* harmony export */   "ɵCalendarEventTitleComponent": () => (/* binding */ CalendarEventTitleComponent),
/* harmony export */   "ɵCalendarEventTitlePipe": () => (/* binding */ CalendarEventTitlePipe),
/* harmony export */   "ɵCalendarMonthCellComponent": () => (/* binding */ CalendarMonthCellComponent),
/* harmony export */   "ɵCalendarMonthViewHeaderComponent": () => (/* binding */ CalendarMonthViewHeaderComponent),
/* harmony export */   "ɵCalendarNextViewDirective": () => (/* binding */ CalendarNextViewDirective),
/* harmony export */   "ɵCalendarOpenDayEventsComponent": () => (/* binding */ CalendarOpenDayEventsComponent),
/* harmony export */   "ɵCalendarPreviousViewDirective": () => (/* binding */ CalendarPreviousViewDirective),
/* harmony export */   "ɵCalendarTodayDirective": () => (/* binding */ CalendarTodayDirective),
/* harmony export */   "ɵCalendarTooltipDirective": () => (/* binding */ CalendarTooltipDirective),
/* harmony export */   "ɵCalendarTooltipWindowComponent": () => (/* binding */ CalendarTooltipWindowComponent),
/* harmony export */   "ɵCalendarWeekViewCurrentTimeMarkerComponent": () => (/* binding */ CalendarWeekViewCurrentTimeMarkerComponent),
/* harmony export */   "ɵCalendarWeekViewEventComponent": () => (/* binding */ CalendarWeekViewEventComponent),
/* harmony export */   "ɵCalendarWeekViewHeaderComponent": () => (/* binding */ CalendarWeekViewHeaderComponent),
/* harmony export */   "ɵCalendarWeekViewHourSegmentComponent": () => (/* binding */ CalendarWeekViewHourSegmentComponent),
/* harmony export */   "ɵClickDirective": () => (/* binding */ ClickDirective),
/* harmony export */   "ɵKeydownEnterDirective": () => (/* binding */ KeydownEnterDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 5398);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 3491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 6426);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! positioning */ 7381);
/* harmony import */ var calendar_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! calendar-utils */ 1916);
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-draggable-droppable */ 2682);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ 7329);
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-resizable-element */ 1118);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 4929);
















const _c0 = function (a0) {
  return {
    action: a0
  };
};

function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mwlClick", function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template_a_mwlClick_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const action_r7 = restoredCtx.$implicit;
      const event_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).event;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](action_r7.onClick({
        event: event_r3,
        sourceEvent: $event
      }));
    })("mwlKeydownEnter", function CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template_a_mwlKeydownEnter_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const action_r7 = restoredCtx.$implicit;
      const event_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).event;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](action_r7.onClick({
        event: event_r3,
        sourceEvent: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const action_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", action_r7.cssClass)("innerHtml", action_r7.label, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, action_r7), "actionButtonLabel"));
  }
}

function CalendarEventActionsComponent_ng_template_0_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarEventActionsComponent_ng_template_0_span_0_a_1_Template, 2, 8, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const event_r3 = ctx_r13.event;
    const trackByActionId_r4 = ctx_r13.trackByActionId;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", event_r3.actions)("ngForTrackBy", trackByActionId_r4);
  }
}

function CalendarEventActionsComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarEventActionsComponent_ng_template_0_span_0_Template, 2, 2, "span", 2);
  }

  if (rf & 2) {
    const event_r3 = ctx.event;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", event_r3.actions);
  }
}

function CalendarEventActionsComponent_ng_template_2_Template(rf, ctx) {}

const _c1 = function (a0, a1) {
  return {
    event: a0,
    trackByActionId: a1
  };
};

const _c2 = function () {
  return {};
};

function CalendarEventTitleComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "calendarEventTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "calendarA11y");
  }

  if (rf & 2) {
    const event_r3 = ctx.event;
    const view_r4 = ctx.view;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](1, 2, event_r3.title, view_r4, event_r3), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c2), "hideEventTitle"));
  }
}

function CalendarEventTitleComponent_ng_template_2_Template(rf, ctx) {}

const _c3 = function (a0, a1) {
  return {
    event: a0,
    view: a1
  };
};

function CalendarTooltipWindowComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const contents_r3 = ctx.contents;
    const placement_r4 = ctx.placement;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "cal-tooltip-" + placement_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", contents_r3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}

function CalendarTooltipWindowComponent_ng_template_2_Template(rf, ctx) {}

const _c4 = function (a0, a1, a2) {
  return {
    contents: a0,
    placement: a1,
    event: a2
  };
};

function CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template_div_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const day_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.columnHeaderClicked.emit({
        isoDayNumber: day_r7.day,
        sourceEvent: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const day_r7 = ctx.$implicit;
    const locale_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().locale;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-past", day_r7.isPast)("cal-today", day_r7.isToday)("cal-future", day_r7.isFuture)("cal-weekend", day_r7.isWeekend);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", day_r7.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 10, day_r7.date, "monthViewColumnHeader", locale_r4), " ");
  }
}

function CalendarMonthViewHeaderComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarMonthViewHeaderComponent_ng_template_0_div_1_Template, 3, 14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const days_r3 = ctx.days;
    const trackByWeekDayHeaderDate_r5 = ctx.trackByWeekDayHeaderDate;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", days_r3)("ngForTrackBy", trackByWeekDayHeaderDate_r5);
  }
}

function CalendarMonthViewHeaderComponent_ng_template_2_Template(rf, ctx) {}

const _c5 = function (a0, a1, a2) {
  return {
    days: a0,
    locale: a1,
    trackByWeekDayHeaderDate: a2
  };
};

function CalendarMonthCellComponent_ng_template_0_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const day_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().day;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](day_r3.badgeTotal);
  }
}

const _c6 = function (a0) {
  return {
    backgroundColor: a0
  };
};

const _c7 = function (a0, a1) {
  return {
    event: a0,
    draggedFrom: a1
  };
};

const _c8 = function (a0, a1) {
  return {
    x: a0,
    y: a1
  };
};

const _c9 = function () {
  return {
    delay: 300,
    delta: 30
  };
};

function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const event_r19 = restoredCtx.$implicit;
      const highlightDay_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).highlightDay;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](highlightDay_r7.emit({
        event: event_r19
      }));
    })("mouseleave", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mouseleave_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const event_r19 = restoredCtx.$implicit;
      const unhighlightDay_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).unhighlightDay;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](unhighlightDay_r8.emit({
        event: event_r19
      }));
    })("mwlClick", function CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template_div_mwlClick_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const event_r19 = restoredCtx.$implicit;
      const eventClicked_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).eventClicked;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](eventClicked_r9.emit({
        event: event_r19,
        sourceEvent: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "calendarEventTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const event_r19 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const tooltipPlacement_r6 = ctx_r27.tooltipPlacement;
    const tooltipTemplate_r10 = ctx_r27.tooltipTemplate;
    const tooltipAppendToBody_r11 = ctx_r27.tooltipAppendToBody;
    const tooltipDelay_r12 = ctx_r27.tooltipDelay;
    const day_r3 = ctx_r27.day;
    const validateDrag_r14 = ctx_r27.validateDrag;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-draggable", event_r19.draggable);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](22, _c6, event_r19.color == null ? null : event_r19.color.primary))("ngClass", event_r19 == null ? null : event_r19.cssClass)("mwlCalendarTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](1, 15, event_r19.title, "monthTooltip", event_r19))("tooltipPlacement", tooltipPlacement_r6)("tooltipEvent", event_r19)("tooltipTemplate", tooltipTemplate_r10)("tooltipAppendToBody", tooltipAppendToBody_r11)("tooltipDelay", tooltipDelay_r12)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](24, _c7, event_r19, day_r3))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](27, _c8, event_r19.draggable, event_r19.draggable))("validateDrag", validateDrag_r14)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](30, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](31, _c2), "hideMonthCellEvents"));
  }
}

function CalendarMonthCellComponent_ng_template_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarMonthCellComponent_ng_template_0_div_7_div_1_Template, 3, 32, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const day_r3 = ctx_r28.day;
    const trackByEventId_r13 = ctx_r28.trackByEventId;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", day_r3.events)("ngForTrackBy", trackByEventId_r13);
  }
}

const _c10 = function (a0, a1) {
  return {
    day: a0,
    locale: a1
  };
};

function CalendarMonthCellComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CalendarMonthCellComponent_ng_template_0_span_3_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CalendarMonthCellComponent_ng_template_0_div_7_Template, 2, 2, "div", 6);
  }

  if (rf & 2) {
    const day_r3 = ctx.day;
    const locale_r5 = ctx.locale;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c10, day_r3, locale_r5), "monthCell"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", day_r3.badgeTotal > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](6, 7, day_r3.date, "monthViewDayNumber", locale_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", day_r3.events.length > 0);
  }
}

function CalendarMonthCellComponent_ng_template_2_Template(rf, ctx) {}

const _c11 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
  return {
    day: a0,
    openDay: a1,
    locale: a2,
    tooltipPlacement: a3,
    highlightDay: a4,
    unhighlightDay: a5,
    eventClicked: a6,
    tooltipTemplate: a7,
    tooltipAppendToBody: a8,
    tooltipDelay: a9,
    trackByEventId: a10,
    validateDrag: a11
  };
};

const _c12 = function (a0) {
  return {
    event: a0
  };
};

const _c13 = function (a0, a1) {
  return {
    event: a0,
    locale: a1
  };
};

function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mwl-calendar-event-title", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mwlClick", function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template_mwl_calendar_event_title_mwlClick_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const event_r10 = restoredCtx.$implicit;
      const eventClicked_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).eventClicked;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](eventClicked_r4.emit({
        event: event_r10,
        sourceEvent: $event
      }));
    })("mwlKeydownEnter", function CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template_mwl_calendar_event_title_mwlKeydownEnter_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const event_r10 = restoredCtx.$implicit;
      const eventClicked_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).eventClicked;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](eventClicked_r4.emit({
        event: event_r10,
        sourceEvent: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "mwl-calendar-event-actions", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const event_r10 = ctx.$implicit;
    const validateDrag_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).validateDrag;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-draggable", event_r10.draggable);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", event_r10 == null ? null : event_r10.cssClass)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c12, event_r10))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](18, _c8, event_r10.draggable, event_r10.draggable))("validateDrag", validateDrag_r7)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](21, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](22, _c6, event_r10.color == null ? null : event_r10.color.primary));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("event", event_r10)("customTemplate", ctx_r9.eventTitleTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](24, _c13, event_r10, ctx_r9.locale), "eventDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("event", event_r10)("customTemplate", ctx_r9.eventActionsTemplate);
  }
}

const _c14 = function (a0, a1) {
  return {
    date: a0,
    locale: a1
  };
};

function CalendarOpenDayEventsComponent_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CalendarOpenDayEventsComponent_ng_template_0_div_0_div_5_Template, 7, 27, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const events_r3 = ctx_r17.events;
    const trackByEventId_r6 = ctx_r17.trackByEventId;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@collapse", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c14, ctx_r8.date, ctx_r8.locale), "openDayEventsAlert"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](14, _c14, ctx_r8.date, ctx_r8.locale), "openDayEventsLandmark"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", events_r3)("ngForTrackBy", trackByEventId_r6);
  }
}

function CalendarOpenDayEventsComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarOpenDayEventsComponent_ng_template_0_div_0_Template, 6, 17, "div", 2);
  }

  if (rf & 2) {
    const isOpen_r5 = ctx.isOpen;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", isOpen_r5);
  }
}

function CalendarOpenDayEventsComponent_ng_template_2_Template(rf, ctx) {}

const _c15 = function (a0, a1, a2, a3, a4) {
  return {
    events: a0,
    eventClicked: a1,
    isOpen: a2,
    trackByEventId: a3,
    validateDrag: a4
  };
};

function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mwl-calendar-month-cell", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mwlClick", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_mwlClick_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const day_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.dayClicked.emit({
        day: day_r3,
        sourceEvent: $event
      }));
    })("mwlKeydownEnter", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_mwlKeydownEnter_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const day_r3 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.dayClicked.emit({
        day: day_r3,
        sourceEvent: $event
      }));
    })("highlightDay", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_highlightDay_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.toggleDayHighlight($event.event, true));
    })("unhighlightDay", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_unhighlightDay_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.toggleDayHighlight($event.event, false));
    })("drop", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_drop_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const day_r3 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.eventDropped(day_r3, $event.dropData.event, $event.dropData.draggedFrom));
    })("eventClicked", function CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template_mwl_calendar_month_cell_eventClicked_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.eventClicked.emit({
        event: $event.event,
        sourceEvent: $event.sourceEvent
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", day_r3 == null ? null : day_r3.cssClass)("day", day_r3)("openDay", ctx_r2.openDay)("locale", ctx_r2.locale)("tooltipPlacement", ctx_r2.tooltipPlacement)("tooltipAppendToBody", ctx_r2.tooltipAppendToBody)("tooltipTemplate", ctx_r2.tooltipTemplate)("tooltipDelay", ctx_r2.tooltipDelay)("customTemplate", ctx_r2.cellTemplate)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c6, day_r3.backgroundColor))("clickListenerDisabled", ctx_r2.dayClicked.observers.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("tabindex", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c2), "monthCellTabIndex"));
  }
}

function CalendarMonthViewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarMonthViewComponent_div_3_mwl_calendar_month_cell_2_Template, 2, 18, "mwl-calendar-month-cell", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mwl-calendar-open-day-events", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("eventClicked", function CalendarMonthViewComponent_div_3_Template_mwl_calendar_open_day_events_eventClicked_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.eventClicked.emit({
        event: $event.event,
        sourceEvent: $event.sourceEvent
      }));
    })("drop", function CalendarMonthViewComponent_div_3_Template_mwl_calendar_open_day_events_drop_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.eventDropped(ctx_r13.openDay, $event.dropData.event, $event.dropData.draggedFrom));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const rowIndex_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 9, ctx_r0.view.days, rowIndex_r1, rowIndex_r1 + ctx_r0.view.totalDaysVisibleInWeek))("ngForTrackBy", ctx_r0.trackByDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("locale", ctx_r0.locale)("isOpen", ctx_r0.openRowIndex === rowIndex_r1)("events", ctx_r0.openDay == null ? null : ctx_r0.openDay.events)("date", ctx_r0.openDay == null ? null : ctx_r0.openDay.date)("customTemplate", ctx_r0.openDayEventsTemplate)("eventTitleTemplate", ctx_r0.eventTitleTemplate)("eventActionsTemplate", ctx_r0.eventActionsTemplate);
  }
}

function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mwlClick", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_mwlClick_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const day_r10 = restoredCtx.$implicit;
      const dayHeaderClicked_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().dayHeaderClicked;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](dayHeaderClicked_r5.emit({
        day: day_r10,
        sourceEvent: $event
      }));
    })("drop", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_drop_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const day_r10 = restoredCtx.$implicit;
      const eventDropped_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().eventDropped;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](eventDropped_r6.emit({
        event: $event.dropData.event,
        newStart: day_r10.date
      }));
    })("dragEnter", function CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template_div_dragEnter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const day_r10 = restoredCtx.$implicit;
      const dragEnter_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().dragEnter;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](dragEnter_r8.emit({
        date: day_r10.date
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const day_r10 = ctx.$implicit;
    const locale_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().locale;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-past", day_r10.isPast)("cal-today", day_r10.isToday)("cal-future", day_r10.isFuture)("cal-weekend", day_r10.isWeekend);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", day_r10.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 11, day_r10.date, "weekViewColumnHeader", locale_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](7, 15, day_r10.date, "weekViewColumnSubHeader", locale_r4));
  }
}

function CalendarWeekViewHeaderComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarWeekViewHeaderComponent_ng_template_0_div_1_Template, 8, 19, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const days_r3 = ctx.days;
    const trackByWeekDayHeaderDate_r7 = ctx.trackByWeekDayHeaderDate;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", days_r3)("ngForTrackBy", trackByWeekDayHeaderDate_r7);
  }
}

function CalendarWeekViewHeaderComponent_ng_template_2_Template(rf, ctx) {}

const _c16 = function (a0, a1, a2, a3, a4, a5) {
  return {
    days: a0,
    locale: a1,
    dayHeaderClicked: a2,
    eventDropped: a3,
    dragEnter: a4,
    trackByWeekDayHeaderDate: a5
  };
};

const _c17 = function (a0, a1) {
  return {
    backgroundColor: a0,
    borderColor: a1
  };
};

function CalendarWeekViewEventComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mwlClick", function CalendarWeekViewEventComponent_ng_template_0_Template_div_mwlClick_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const eventClicked_r5 = restoredCtx.eventClicked;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](eventClicked_r5.emit({
        sourceEvent: $event
      }));
    })("mwlKeydownEnter", function CalendarWeekViewEventComponent_ng_template_0_Template_div_mwlKeydownEnter_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const eventClicked_r5 = restoredCtx.eventClicked;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](eventClicked_r5.emit({
        sourceEvent: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "calendarEventTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mwl-calendar-event-actions", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mwl-calendar-event-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const weekEvent_r3 = ctx.weekEvent;
    const tooltipPlacement_r4 = ctx.tooltipPlacement;
    const tooltipTemplate_r6 = ctx.tooltipTemplate;
    const tooltipAppendToBody_r7 = ctx.tooltipAppendToBody;
    const tooltipDisabled_r8 = ctx.tooltipDisabled;
    const tooltipDelay_r9 = ctx.tooltipDelay;
    const daysInWeek_r11 = ctx.daysInWeek;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](20, _c17, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.secondary, weekEvent_r3.event.color == null ? null : weekEvent_r3.event.color.primary))("mwlCalendarTooltip", !tooltipDisabled_r8 ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](1, 13, weekEvent_r3.event.title, daysInWeek_r11 === 1 ? "dayTooltip" : "weekTooltip", weekEvent_r3.tempEvent || weekEvent_r3.event) : "")("tooltipPlacement", tooltipPlacement_r4)("tooltipEvent", weekEvent_r3.tempEvent || weekEvent_r3.event)("tooltipTemplate", tooltipTemplate_r6)("tooltipAppendToBody", tooltipAppendToBody_r7)("tooltipDelay", tooltipDelay_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 17, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](23, _c13, weekEvent_r3.tempEvent || weekEvent_r3.event, ctx_r1.locale), "eventDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("event", weekEvent_r3.tempEvent || weekEvent_r3.event)("customTemplate", ctx_r1.eventActionsTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("event", weekEvent_r3.tempEvent || weekEvent_r3.event)("customTemplate", ctx_r1.eventTitleTemplate)("view", daysInWeek_r11 === 1 ? "day" : "week");
  }
}

function CalendarWeekViewEventComponent_ng_template_2_Template(rf, ctx) {}

const _c18 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
  return {
    weekEvent: a0,
    tooltipPlacement: a1,
    eventClicked: a2,
    tooltipTemplate: a3,
    tooltipAppendToBody: a4,
    tooltipDisabled: a5,
    tooltipDelay: a6,
    column: a7,
    daysInWeek: a8
  };
};

function CalendarWeekViewHourSegmentComponent_ng_template_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const segment_r3 = ctx_r9.segment;
    const daysInWeek_r7 = ctx_r9.daysInWeek;
    const locale_r4 = ctx_r9.locale;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 1, segment_r3.displayDate, daysInWeek_r7 === 1 ? "dayViewHour" : "weekViewHour", locale_r4), " ");
  }
}

function CalendarWeekViewHourSegmentComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "calendarA11y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewHourSegmentComponent_ng_template_0_div_2_Template, 3, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const segment_r3 = ctx.segment;
    const segmentHeight_r5 = ctx.segmentHeight;
    const isTimeLabel_r6 = ctx.isTimeLabel;
    const daysInWeek_r7 = ctx.daysInWeek;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", segmentHeight_r5, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-hour-start", segment_r3.isStart)("cal-after-hour-start", !segment_r3.isStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", segment_r3.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-hidden", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c2), daysInWeek_r7 === 1 ? "hideDayHourSegment" : "hideWeekHourSegment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", isTimeLabel_r6);
  }
}

function CalendarWeekViewHourSegmentComponent_ng_template_2_Template(rf, ctx) {}

const _c19 = function (a0, a1, a2, a3, a4) {
  return {
    segment: a0,
    locale: a1,
    segmentHeight: a2,
    isTimeLabel: a3,
    daysInWeek: a4
  };
};

function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 3);
  }

  if (rf & 2) {
    const topPx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().topPx;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("top", topPx_r9, "px");
  }
}

function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_div_0_Template, 1, 2, "div", 2);
  }

  if (rf & 2) {
    const isVisible_r8 = ctx.isVisible;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", isVisible_r8);
  }
}

function CalendarWeekViewCurrentTimeMarkerComponent_ng_template_2_Template(rf, ctx) {}

const _c20 = function (a0, a1, a2, a3, a4, a5, a6) {
  return {
    columnDate: a0,
    dayStartHour: a1,
    dayStartMinute: a2,
    dayEndHour: a3,
    dayEndMinute: a4,
    isVisible: a5,
    topPx: a6
  };
};

function CalendarWeekViewComponent_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("drop", function CalendarWeekViewComponent_div_2_div_4_Template_div_drop_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const day_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.eventDropped($event, day_r7.date, true));
    })("dragEnter", function CalendarWeekViewComponent_div_2_div_4_Template_div_dragEnter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const day_r7 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.dateDragEnter(day_r7.date));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

const _c21 = function () {
  return {
    left: true
  };
};

function CalendarWeekViewComponent_div_2_div_5_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 22);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c21));
  }
}

const _c22 = function () {
  return {
    right: true
  };
};

function CalendarWeekViewComponent_div_2_div_5_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 23);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c22));
  }
}

const _c23 = function (a0, a1) {
  return {
    left: a0,
    right: a1
  };
};

const _c24 = function (a0, a1) {
  return {
    event: a0,
    calendarId: a1
  };
};

const _c25 = function (a0) {
  return {
    x: a0
  };
};

function CalendarWeekViewComponent_div_2_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resizeStart", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizeStart_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const allDayEvent_r14 = restoredCtx.$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.allDayEventResizeStarted(_r12, allDayEvent_r14, $event));
    })("resizing", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizing_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const allDayEvent_r14 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.allDayEventResizing(allDayEvent_r14, $event, ctx_r20.dayColumnWidth));
    })("resizeEnd", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_resizeEnd_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const allDayEvent_r14 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.allDayEventResizeEnded(allDayEvent_r14));
    })("dragStart", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragStart_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const allDayEvent_r14 = restoredCtx.$implicit;

      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.dragStarted(_r12, _r15, allDayEvent_r14, false));
    })("dragging", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragging_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.allDayEventDragMove());
    })("dragEnd", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_div_dragEnd_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const allDayEvent_r14 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.dragEnded(allDayEvent_r14, $event, ctx_r24.dayColumnWidth));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_2_div_5_div_2_div_2_Template, 1, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mwl-calendar-week-view-event", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("eventClicked", function CalendarWeekViewComponent_div_2_div_5_div_2_Template_mwl_calendar_week_view_event_eventClicked_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const allDayEvent_r14 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.eventClicked.emit({
        event: allDayEvent_r14.event,
        sourceEvent: $event.sourceEvent
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_2_div_5_div_2_div_4_Template, 1, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const allDayEvent_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", 100 / ctx_r13.days.length * allDayEvent_r14.span, "%")("margin-left", ctx_r13.rtl ? null : 100 / ctx_r13.days.length * allDayEvent_r14.offset, "%")("margin-right", ctx_r13.rtl ? 100 / ctx_r13.days.length * (ctx_r13.days.length - allDayEvent_r14.offset) * -1 : null, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-draggable", allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0)("cal-starts-within-week", !allDayEvent_r14.startsBeforeWeek)("cal-ends-within-week", !allDayEvent_r14.endsAfterWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", allDayEvent_r14.event == null ? null : allDayEvent_r14.event.cssClass)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](32, _c23, ctx_r13.dayColumnWidth, ctx_r13.dayColumnWidth))("validateResize", ctx_r13.validateResize)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](35, _c24, allDayEvent_r14.event, ctx_r13.calendarId))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](38, _c8, allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0, !ctx_r13.snapDraggedEvents && allDayEvent_r14.event.draggable && ctx_r13.allDayEventResizes.size === 0))("dragSnapGrid", ctx_r13.snapDraggedEvents ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](41, _c25, ctx_r13.dayColumnWidth) : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](43, _c2))("validateDrag", ctx_r13.validateDrag)("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](44, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (allDayEvent_r14.event == null ? null : allDayEvent_r14.event.resizable == null ? null : allDayEvent_r14.event.resizable.beforeStart) && !allDayEvent_r14.startsBeforeWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("locale", ctx_r13.locale)("weekEvent", allDayEvent_r14)("tooltipPlacement", ctx_r13.tooltipPlacement)("tooltipTemplate", ctx_r13.tooltipTemplate)("tooltipAppendToBody", ctx_r13.tooltipAppendToBody)("tooltipDelay", ctx_r13.tooltipDelay)("customTemplate", ctx_r13.eventTemplate)("eventTitleTemplate", ctx_r13.eventTitleTemplate)("eventActionsTemplate", ctx_r13.eventActionsTemplate)("daysInWeek", ctx_r13.daysInWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (allDayEvent_r14.event == null ? null : allDayEvent_r14.event.resizable == null ? null : allDayEvent_r14.event.resizable.afterEnd) && !allDayEvent_r14.endsAfterWeek);
  }
}

function CalendarWeekViewComponent_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_2_div_5_div_2_Template, 5, 45, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const eventRow_r11 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", eventRow_r11.row)("ngForTrackBy", ctx_r6.trackByWeekAllDayEvent);
  }
}

function CalendarWeekViewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dragEnter", function CalendarWeekViewComponent_div_2_Template_div_dragEnter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.dragEnter("allDay"));
    })("dragLeave", function CalendarWeekViewComponent_div_2_Template_div_dragLeave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.dragLeave("allDay"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_2_div_4_Template, 1, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CalendarWeekViewComponent_div_2_div_5_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.allDayEventsLabelTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.days)("ngForTrackBy", ctx_r0.trackByWeekDayHeaderDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.view.allDayEventRows)("ngForTrackBy", ctx_r0.trackById);
  }
}

function CalendarWeekViewComponent_div_4_div_1_mwl_calendar_week_view_hour_segment_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mwl-calendar-week-view-hour-segment", 28);
  }

  if (rf & 2) {
    const segment_r33 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", ctx_r32.hourSegmentHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("segment", segment_r33)("segmentHeight", ctx_r32.hourSegmentHeight)("locale", ctx_r32.locale)("customTemplate", ctx_r32.hourSegmentTemplate)("isTimeLabel", true)("daysInWeek", ctx_r32.daysInWeek);
  }
}

function CalendarWeekViewComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarWeekViewComponent_div_4_div_1_mwl_calendar_week_view_hour_segment_1_Template, 1, 8, "mwl-calendar-week-view-hour-segment", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const hour_r30 = ctx.$implicit;
    const odd_r31 = ctx.odd;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-hour-odd", odd_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", hour_r30.segments)("ngForTrackBy", ctx_r29.trackByHourSegment);
  }
}

function CalendarWeekViewComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarWeekViewComponent_div_4_div_1_Template, 2, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.view.hourColumns[0].hours)("ngForTrackBy", ctx_r1.trackByHour);
  }
}

const _c26 = function () {
  return {
    left: true,
    top: true
  };
};

function CalendarWeekViewComponent_div_7_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 22);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c26));
  }
}

function CalendarWeekViewComponent_div_7_div_3_ng_template_3_Template(rf, ctx) {}

function CalendarWeekViewComponent_div_7_div_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mwl-calendar-week-view-event", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("eventClicked", function CalendarWeekViewComponent_div_7_div_3_ng_template_4_Template_mwl_calendar_week_view_event_eventClicked_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r46);
      const timeEvent_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r44.eventClicked.emit({
        event: timeEvent_r37.event,
        sourceEvent: $event.sourceEvent
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const timeEvent_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const column_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("locale", ctx_r42.locale)("weekEvent", timeEvent_r37)("tooltipPlacement", ctx_r42.tooltipPlacement)("tooltipTemplate", ctx_r42.tooltipTemplate)("tooltipAppendToBody", ctx_r42.tooltipAppendToBody)("tooltipDisabled", ctx_r42.dragActive || ctx_r42.timeEventResizes.size > 0)("tooltipDelay", ctx_r42.tooltipDelay)("customTemplate", ctx_r42.eventTemplate)("eventTitleTemplate", ctx_r42.eventTitleTemplate)("eventActionsTemplate", ctx_r42.eventActionsTemplate)("column", column_r34)("daysInWeek", ctx_r42.daysInWeek);
  }
}

const _c27 = function () {
  return {
    right: true,
    bottom: true
  };
};

function CalendarWeekViewComponent_div_7_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 23);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c27));
  }
}

const _c28 = function (a0, a1, a2, a3) {
  return {
    left: a0,
    right: a1,
    top: a2,
    bottom: a3
  };
};

function CalendarWeekViewComponent_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resizeStart", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizeStart_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50);
      const timeEvent_r37 = restoredCtx.$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);

      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r49.timeEventResizeStarted(_r2, timeEvent_r37, $event));
    })("resizing", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizing_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50);
      const timeEvent_r37 = restoredCtx.$implicit;
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r51.timeEventResizing(timeEvent_r37, $event));
    })("resizeEnd", function CalendarWeekViewComponent_div_7_div_3_Template_div_resizeEnd_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50);
      const timeEvent_r37 = restoredCtx.$implicit;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r52.timeEventResizeEnded(timeEvent_r37));
    })("dragStart", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragStart_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50);
      const timeEvent_r37 = restoredCtx.$implicit;

      const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);

      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r53.dragStarted(_r2, _r38, timeEvent_r37, true));
    })("dragging", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragging_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50);
      const timeEvent_r37 = restoredCtx.$implicit;
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r54.dragMove(timeEvent_r37, $event));
    })("dragEnd", function CalendarWeekViewComponent_div_7_div_3_Template_div_dragEnd_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50);
      const timeEvent_r37 = restoredCtx.$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r55.dragEnded(timeEvent_r37, $event, ctx_r55.dayColumnWidth, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_7_div_3_div_2_Template, 1, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CalendarWeekViewComponent_div_7_div_3_ng_template_3_Template, 0, 0, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_7_div_3_ng_template_4_Template, 1, 12, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CalendarWeekViewComponent_div_7_div_3_div_6_Template, 1, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const timeEvent_r37 = ctx.$implicit;

    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);

    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("top", timeEvent_r37.top, "px")("height", timeEvent_r37.height, "px")("left", timeEvent_r37.left, "%")("width", timeEvent_r37.width, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-draggable", timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0)("cal-starts-within-day", !timeEvent_r37.startsBeforeDay)("cal-ends-within-day", !timeEvent_r37.endsAfterDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", timeEvent_r37.event.cssClass)("hidden", timeEvent_r37.height === 0 && timeEvent_r37.width === 0)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](29, _c28, ctx_r35.dayColumnWidth, ctx_r35.dayColumnWidth, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight))("validateResize", ctx_r35.validateResize)("allowNegativeResizes", true)("dropData", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](34, _c24, timeEvent_r37.event, ctx_r35.calendarId))("dragAxis", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](37, _c8, timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0, timeEvent_r37.event.draggable && ctx_r35.timeEventResizes.size === 0))("dragSnapGrid", ctx_r35.snapDraggedEvents ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](40, _c8, ctx_r35.dayColumnWidth, ctx_r35.eventSnapSize || ctx_r35.hourSegmentHeight) : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](43, _c2))("touchStartLongPress", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](44, _c9))("ghostDragEnabled", !ctx_r35.snapDraggedEvents)("ghostElementTemplate", _r41)("validateDrag", ctx_r35.validateDrag);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (timeEvent_r37.event == null ? null : timeEvent_r37.event.resizable == null ? null : timeEvent_r37.event.resizable.beforeStart) && !timeEvent_r37.startsBeforeDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (timeEvent_r37.event == null ? null : timeEvent_r37.event.resizable == null ? null : timeEvent_r37.event.resizable.afterEnd) && !timeEvent_r37.endsAfterDay);
  }
}

function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mwl-calendar-week-view-hour-segment", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mwlClick", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_mwlClick_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r61);
      const segment_r59 = restoredCtx.$implicit;
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r60.hourSegmentClicked.emit({
        date: segment_r59.date,
        sourceEvent: $event
      }));
    })("drop", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_drop_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r61);
      const segment_r59 = restoredCtx.$implicit;
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r62.eventDropped($event, segment_r59.date, false));
    })("dragEnter", function CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template_mwl_calendar_week_view_hour_segment_dragEnter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r61);
      const segment_r59 = restoredCtx.$implicit;
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r63.dateDragEnter(segment_r59.date));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const segment_r59 = ctx.$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", ctx_r58.hourSegmentHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("segment", segment_r59)("segmentHeight", ctx_r58.hourSegmentHeight)("locale", ctx_r58.locale)("customTemplate", ctx_r58.hourSegmentTemplate)("daysInWeek", ctx_r58.daysInWeek)("clickListenerDisabled", ctx_r58.hourSegmentClicked.observers.length === 0)("dragOverClass", !ctx_r58.dragActive || !ctx_r58.snapDraggedEvents ? "cal-drag-over" : null)("isTimeLabel", ctx_r58.daysInWeek === 1);
  }
}

function CalendarWeekViewComponent_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarWeekViewComponent_div_7_div_4_mwl_calendar_week_view_hour_segment_1_Template, 1, 10, "mwl-calendar-week-view-hour-segment", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const hour_r56 = ctx.$implicit;
    const odd_r57 = ctx.odd;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-hour-odd", odd_r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", hour_r56.segments)("ngForTrackBy", ctx_r36.trackByHourSegment);
  }
}

function CalendarWeekViewComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mwl-calendar-week-view-current-time-marker", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CalendarWeekViewComponent_div_7_div_3_Template, 7, 45, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_7_div_4_Template, 2, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const column_r34 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columnDate", column_r34.date)("dayStartHour", ctx_r3.dayStartHour)("dayStartMinute", ctx_r3.dayStartMinute)("dayEndHour", ctx_r3.dayEndHour)("dayEndMinute", ctx_r3.dayEndMinute)("hourSegments", ctx_r3.hourSegments)("hourDuration", ctx_r3.hourDuration)("hourSegmentHeight", ctx_r3.hourSegmentHeight)("customTemplate", ctx_r3.currentTimeMarkerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", column_r34.events)("ngForTrackBy", ctx_r3.trackByWeekTimeEvent);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", column_r34.hours)("ngForTrackBy", ctx_r3.trackByHour);
  }
}

class ClickDirective {
  constructor(renderer, elm, document) {
    this.renderer = renderer;
    this.elm = elm;
    this.document = document;
    this.clickListenerDisabled = false;
    this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(); // eslint-disable-line

    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }

  ngOnInit() {
    if (!this.clickListenerDisabled) {
      this.listen().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(event => {
        event.stopPropagation();
        this.click.emit(event);
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  listen() {
    return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
      return this.renderer.listen(this.elm.nativeElement, 'click', event => {
        observer.next(event);
      });
    });
  }

}

ClickDirective.ɵfac = function ClickDirective_Factory(t) {
  return new (t || ClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT));
};

ClickDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: ClickDirective,
  selectors: [["", "mwlClick", ""]],
  inputs: {
    clickListenerDisabled: "clickListenerDisabled"
  },
  outputs: {
    click: "mwlClick"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClickDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[mwlClick]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
      }]
    }];
  }, {
    clickListenerDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    click: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output,
      args: ['mwlClick']
    }]
  });
})();

class KeydownEnterDirective {
  constructor(host, ngZone, renderer) {
    this.host = host;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.keydown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(); // eslint-disable-line

    this.keydownListener = null;
  }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.keydownListener = this.renderer.listen(this.host.nativeElement, 'keydown', event => {
        if (event.keyCode === 13 || event.which === 13 || event.key === 'Enter') {
          event.preventDefault();
          event.stopPropagation();
          this.ngZone.run(() => {
            this.keydown.emit(event);
          });
        }
      });
    });
  }

  ngOnDestroy() {
    if (this.keydownListener !== null) {
      this.keydownListener();
      this.keydownListener = null;
    }
  }

}

KeydownEnterDirective.ɵfac = function KeydownEnterDirective_Factory(t) {
  return new (t || KeydownEnterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2));
};

KeydownEnterDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: KeydownEnterDirective,
  selectors: [["", "mwlKeydownEnter", ""]],
  outputs: {
    keydown: "mwlKeydownEnter"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](KeydownEnterDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[mwlKeydownEnter]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
    }];
  }, {
    keydown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output,
      args: ['mwlKeydownEnter']
    }]
  });
})();
/**
 * This class is responsible for adding accessibility to the calendar.
 * You may override any of its methods via angulars DI to suit your requirements.
 * For example:
 *
 * ```typescript
 * import { A11yParams, CalendarA11y } from 'angular-calendar';
 * import { formatDate, I18nPluralPipe } from '@angular/common';
 * import { Injectable } from '@angular/core';
 *
 * // adding your own a11y params
 * export interface CustomA11yParams extends A11yParams {
 *   isDrSuess?: boolean;
 * }
 *
 * @Injectable()
 * export class CustomCalendarA11y extends CalendarA11y {
 *   constructor(protected i18nPlural: I18nPluralPipe) {
 *     super(i18nPlural);
 *   }
 *
 *   // overriding a function
 *   public openDayEventsLandmark({ date, locale, isDrSuess }: CustomA11yParams): string {
 *     if (isDrSuess) {
 *       return `
 *         ${formatDate(date, 'EEEE MMMM d', locale)}
 *          Today you are you! That is truer than true! There is no one alive
 *          who is you-er than you!
 *       `;
 *     }
 *   }
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *  provide: CalendarA11y,
 *  useClass: CustomCalendarA11y
 * }]
 * ```
 */


class CalendarA11y {
  constructor(i18nPlural) {
    this.i18nPlural = i18nPlural;
  }
  /**
   * Aria label for the badges/date of a cell
   * @example: `Saturday October 19 1 event click to expand`
   */


  monthCell({
    day,
    locale
  }) {
    if (day.badgeTotal > 0) {
      return `
        ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(day.date, 'EEEE MMMM d', locale)},
        ${this.i18nPlural.transform(day.badgeTotal, {
        '=0': 'No events',
        '=1': 'One event',
        other: '# events'
      })},
         click to expand
      `;
    } else {
      return `${(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(day.date, 'EEEE MMMM d', locale)}`;
    }
  }
  /**
   * Aria label for the open day events start landmark
   * @example: `Saturday October 19 expanded view`
   */


  openDayEventsLandmark({
    date,
    locale
  }) {
    return `
      Beginning of expanded view for ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(date, 'EEEE MMMM dd', locale)}
    `;
  }
  /**
   * Aria label for alert that a day in the month view was expanded
   * @example: `Saturday October 19 expanded`
   */


  openDayEventsAlert({
    date,
    locale
  }) {
    return `${(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(date, 'EEEE MMMM dd', locale)} expanded`;
  }
  /**
   * Descriptive aria label for an event
   * @example: `Saturday October 19th, Scott's Pizza Party, from 11:00am to 5:00pm`
   */


  eventDescription({
    event,
    locale
  }) {
    if (event.allDay === true) {
      return this.allDayEventDescription({
        event,
        locale
      });
    }

    const aria = `
      ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(event.start, 'EEEE MMMM dd', locale)},
      ${event.title}, from ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(event.start, 'hh:mm a', locale)}
    `;

    if (event.end) {
      return aria + ` to ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(event.end, 'hh:mm a', locale)}`;
    }

    return aria;
  }
  /**
   * Descriptive aria label for an all day event
   * @example:
   * `Scott's Party, event spans multiple days: start time October 19 5:00pm, no stop time`
   */


  allDayEventDescription({
    event,
    locale
  }) {
    const aria = `
      ${event.title}, event spans multiple days:
      start time ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(event.start, 'MMMM dd hh:mm a', locale)}
    `;

    if (event.end) {
      return aria + `, stop time ${(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(event.end, 'MMMM d hh:mm a', locale)}`;
    }

    return aria + `, no stop time`;
  }
  /**
   * Aria label for the calendar event actions icons
   * @returns 'Edit' for fa-pencil icons, and 'Delete' for fa-times icons
   */


  actionButtonLabel({
    action
  }) {
    return action.a11yLabel;
  }
  /**
   * @returns {number} Tab index to be given to month cells
   */


  monthCellTabIndex() {
    return 0;
  }
  /**
   * @returns true if the events inside the month cell should be aria-hidden
   */


  hideMonthCellEvents() {
    return true;
  }
  /**
   * @returns true if event titles should be aria-hidden (global)
   */


  hideEventTitle() {
    return true;
  }
  /**
   * @returns true if hour segments in the week view should be aria-hidden
   */


  hideWeekHourSegment() {
    return true;
  }
  /**
   * @returns true if hour segments in the day view should be aria-hidden
   */


  hideDayHourSegment() {
    return true;
  }

}

CalendarA11y.ɵfac = function CalendarA11y_Factory(t) {
  return new (t || CalendarA11y)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.I18nPluralPipe));
};

CalendarA11y.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CalendarA11y,
  factory: CalendarA11y.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarA11y, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
  }], function () {
    return [{
      type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.I18nPluralPipe
    }];
  }, null);
})();
/**
 * This pipe is primarily for rendering aria labels. Example usage:
 * ```typescript
 * // where `myEvent` is a `CalendarEvent` and myLocale is a locale identifier
 * {{ { event: myEvent, locale: myLocale } | calendarA11y: 'eventDescription' }}
 * ```
 */


class CalendarA11yPipe {
  constructor(calendarA11y, locale) {
    this.calendarA11y = calendarA11y;
    this.locale = locale;
  }

  transform(a11yParams, method) {
    a11yParams.locale = a11yParams.locale || this.locale;

    if (typeof this.calendarA11y[method] === 'undefined') {
      const allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarA11y.prototype)).filter(iMethod => iMethod !== 'constructor');
      throw new Error(`${method} is not a valid a11y method. Can only be one of ${allowedMethods.join(', ')}`);
    }

    return this.calendarA11y[method](a11yParams);
  }

}

CalendarA11yPipe.ɵfac = function CalendarA11yPipe_Factory(t) {
  return new (t || CalendarA11yPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](CalendarA11y, 16), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID, 16));
};

CalendarA11yPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "calendarA11y",
  type: CalendarA11yPipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarA11yPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe,
    args: [{
      name: 'calendarA11y'
    }]
  }], function () {
    return [{
      type: CalendarA11y
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID]
      }]
    }];
  }, null);
})();

class CalendarEventActionsComponent {
  constructor() {
    this.trackByActionId = (index, action) => action.id ? action.id : action;
  }

}

CalendarEventActionsComponent.ɵfac = function CalendarEventActionsComponent_Factory(t) {
  return new (t || CalendarEventActionsComponent)();
};

CalendarEventActionsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CalendarEventActionsComponent,
  selectors: [["mwl-calendar-event-actions"]],
  inputs: {
    event: "event",
    customTemplate: "customTemplate"
  },
  decls: 3,
  vars: 5,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-event-actions", 4, "ngIf"], [1, "cal-event-actions"], ["class", "cal-event-action", "href", "javascript:;", "tabindex", "0", "role", "button", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["href", "javascript:;", "tabindex", "0", "role", "button", 1, "cal-event-action", 3, "ngClass", "innerHtml", "mwlClick", "mwlKeydownEnter"]],
  template: function CalendarEventActionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarEventActionsComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarEventActionsComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c1, ctx.event, ctx.trackByActionId));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, ClickDirective, KeydownEnterDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, CalendarA11yPipe],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarEventActionsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'mwl-calendar-event-actions',
      template: `
    <ng-template
      #defaultTemplate
      let-event="event"
      let-trackByActionId="trackByActionId"
    >
      <span *ngIf="event.actions" class="cal-event-actions">
        <a
          class="cal-event-action"
          href="javascript:;"
          *ngFor="let action of event.actions; trackBy: trackByActionId"
          (mwlClick)="action.onClick({ event: event, sourceEvent: $event })"
          (mwlKeydownEnter)="
            action.onClick({ event: event, sourceEvent: $event })
          "
          [ngClass]="action.cssClass"
          [innerHtml]="action.label"
          tabindex="0"
          role="button"
          [attr.aria-label]="
            { action: action } | calendarA11y: 'actionButtonLabel'
          "
        >
        </a>
      </span>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        event: event,
        trackByActionId: trackByActionId
      }"
    >
    </ng-template>
  `
    }]
  }], null, {
    event: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();
/**
 * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
 *
 * ```typescript
 * import { Injectable } from '@angular/core';
 * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
 *
 * @Injectable()
 * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
 *
 *   month(event: CalendarEvent): string {
 *     return `Custom prefix: ${event.title}`;
 *   }
 *
 * }
 *
 * // in your component
 * providers: [{
 *  provide: CalendarEventTitleFormatter,
 *  useClass: CustomEventTitleFormatter
 * }]
 * ```
 */


class CalendarEventTitleFormatter {
  /**
   * The month view event title.
   */
  month(event, title) {
    return event.title;
  }
  /**
   * The month view event tooltip. Return a falsey value from this to disable the tooltip.
   */


  monthTooltip(event, title) {
    return event.title;
  }
  /**
   * The week view event title.
   */


  week(event, title) {
    return event.title;
  }
  /**
   * The week view event tooltip. Return a falsey value from this to disable the tooltip.
   */


  weekTooltip(event, title) {
    return event.title;
  }
  /**
   * The day view event title.
   */


  day(event, title) {
    return event.title;
  }
  /**
   * The day view event tooltip. Return a falsey value from this to disable the tooltip.
   */


  dayTooltip(event, title) {
    return event.title;
  }

}

class CalendarEventTitlePipe {
  constructor(calendarEventTitle) {
    this.calendarEventTitle = calendarEventTitle;
  }

  transform(title, titleType, event) {
    return this.calendarEventTitle[titleType](event, title);
  }

}

CalendarEventTitlePipe.ɵfac = function CalendarEventTitlePipe_Factory(t) {
  return new (t || CalendarEventTitlePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](CalendarEventTitleFormatter, 16));
};

CalendarEventTitlePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "calendarEventTitle",
  type: CalendarEventTitlePipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarEventTitlePipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe,
    args: [{
      name: 'calendarEventTitle'
    }]
  }], function () {
    return [{
      type: CalendarEventTitleFormatter
    }];
  }, null);
})();

class CalendarEventTitleComponent {}

CalendarEventTitleComponent.ɵfac = function CalendarEventTitleComponent_Factory(t) {
  return new (t || CalendarEventTitleComponent)();
};

CalendarEventTitleComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CalendarEventTitleComponent,
  selectors: [["mwl-calendar-event-title"]],
  inputs: {
    event: "event",
    customTemplate: "customTemplate",
    view: "view"
  },
  decls: 3,
  vars: 5,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-event-title", 3, "innerHTML"]],
  template: function CalendarEventTitleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarEventTitleComponent_ng_template_0_Template, 3, 10, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarEventTitleComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c3, ctx.event, ctx.view));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, CalendarEventTitlePipe, CalendarA11yPipe],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarEventTitleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'mwl-calendar-event-title',
      template: `
    <ng-template #defaultTemplate let-event="event" let-view="view">
      <span
        class="cal-event-title"
        [innerHTML]="event.title | calendarEventTitle: view:event"
        [attr.aria-hidden]="{} | calendarA11y: 'hideEventTitle'"
      >
      </span>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        event: event,
        view: view
      }"
    >
    </ng-template>
  `
    }]
  }], null, {
    event: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    view: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();

class CalendarTooltipWindowComponent {}

CalendarTooltipWindowComponent.ɵfac = function CalendarTooltipWindowComponent_Factory(t) {
  return new (t || CalendarTooltipWindowComponent)();
};

CalendarTooltipWindowComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CalendarTooltipWindowComponent,
  selectors: [["mwl-calendar-tooltip-window"]],
  inputs: {
    contents: "contents",
    placement: "placement",
    event: "event",
    customTemplate: "customTemplate"
  },
  decls: 3,
  vars: 6,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-tooltip", 3, "ngClass"], [1, "cal-tooltip-arrow"], [1, "cal-tooltip-inner", 3, "innerHtml"]],
  template: function CalendarTooltipWindowComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarTooltipWindowComponent_ng_template_0_Template, 3, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarTooltipWindowComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](2, _c4, ctx.contents, ctx.placement, ctx.event));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarTooltipWindowComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'mwl-calendar-tooltip-window',
      template: `
    <ng-template
      #defaultTemplate
      let-contents="contents"
      let-placement="placement"
      let-event="event"
    >
      <div class="cal-tooltip" [ngClass]="'cal-tooltip-' + placement">
        <div class="cal-tooltip-arrow"></div>
        <div class="cal-tooltip-inner" [innerHtml]="contents"></div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        contents: contents,
        placement: placement,
        event: event
      }"
    >
    </ng-template>
  `
    }]
  }], null, {
    contents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    event: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();

class CalendarTooltipDirective {
  constructor(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document // eslint-disable-line
  ) {
    this.elementRef = elementRef;
    this.injector = injector;
    this.renderer = renderer;
    this.viewContainerRef = viewContainerRef;
    this.document = document;
    this.placement = 'auto'; // eslint-disable-line  @angular-eslint/no-input-rename

    this.delay = null; // eslint-disable-line  @angular-eslint/no-input-rename

    this.cancelTooltipDelay$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
  }

  ngOnChanges(changes) {
    if (this.tooltipRef && (changes.contents || changes.customTemplate || changes.event)) {
      this.tooltipRef.instance.contents = this.contents;
      this.tooltipRef.instance.customTemplate = this.customTemplate;
      this.tooltipRef.instance.event = this.event;
      this.tooltipRef.changeDetectorRef.markForCheck();

      if (!this.contents) {
        this.hide();
      }
    }
  }

  ngOnDestroy() {
    this.hide();
  }

  onMouseOver() {
    const delay$ = this.delay === null ? (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)('now') : (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.timer)(this.delay);
    delay$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.cancelTooltipDelay$)).subscribe(() => {
      this.show();
    });
  }

  onMouseOut() {
    this.hide();
  }

  show() {
    if (!this.tooltipRef && this.contents) {
      this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
      this.tooltipRef.instance.contents = this.contents;
      this.tooltipRef.instance.customTemplate = this.customTemplate;
      this.tooltipRef.instance.event = this.event;

      if (this.appendToBody) {
        this.document.body.appendChild(this.tooltipRef.location.nativeElement);
      }

      requestAnimationFrame(() => {
        this.positionTooltip();
      });
    }
  }

  hide() {
    if (this.tooltipRef) {
      this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
      this.tooltipRef = null;
    }

    this.cancelTooltipDelay$.next();
  }

  positionTooltip(previousPositions = []) {
    if (this.tooltipRef) {
      this.tooltipRef.changeDetectorRef.detectChanges();
      this.tooltipRef.instance.placement = (0,positioning__WEBPACK_IMPORTED_MODULE_0__.positionElements)(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody); // keep re-positioning the tooltip until the arrow position doesn't make a difference

      if (previousPositions.indexOf(this.tooltipRef.instance.placement) === -1) {
        this.positionTooltip([...previousPositions, this.tooltipRef.instance.placement]);
      }
    }
  }

}

CalendarTooltipDirective.ɵfac = function CalendarTooltipDirective_Factory(t) {
  return new (t || CalendarTooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT));
};

CalendarTooltipDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: CalendarTooltipDirective,
  selectors: [["", "mwlCalendarTooltip", ""]],
  hostBindings: function CalendarTooltipDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function CalendarTooltipDirective_mouseenter_HostBindingHandler() {
        return ctx.onMouseOver();
      })("mouseleave", function CalendarTooltipDirective_mouseleave_HostBindingHandler() {
        return ctx.onMouseOut();
      });
    }
  },
  inputs: {
    contents: ["mwlCalendarTooltip", "contents"],
    placement: ["tooltipPlacement", "placement"],
    customTemplate: ["tooltipTemplate", "customTemplate"],
    event: ["tooltipEvent", "event"],
    appendToBody: ["tooltipAppendToBody", "appendToBody"],
    delay: ["tooltipDelay", "delay"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarTooltipDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[mwlCalendarTooltip]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
      }]
    }];
  }, {
    contents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['mwlCalendarTooltip']
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['tooltipPlacement']
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['tooltipTemplate']
    }],
    event: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['tooltipEvent']
    }],
    appendToBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['tooltipAppendToBody']
    }],
    delay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: ['tooltipDelay']
    }],
    onMouseOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['mouseenter']
    }],
    onMouseOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['mouseleave']
    }]
  });
})();

var CalendarView;

(function (CalendarView) {
  CalendarView["Month"] = "month";
  CalendarView["Week"] = "week";
  CalendarView["Day"] = "day";
})(CalendarView || (CalendarView = {}));

const validateEvents = events => {
  const warn = (...args) => console.warn('angular-calendar', ...args);

  return (0,calendar_utils__WEBPACK_IMPORTED_MODULE_1__.validateEvents)(events, warn);
};

function isInsideLeftAndRight(outer, inner) {
  return Math.floor(outer.left) <= Math.ceil(inner.left) && Math.floor(inner.left) <= Math.ceil(outer.right) && Math.floor(outer.left) <= Math.ceil(inner.right) && Math.floor(inner.right) <= Math.ceil(outer.right);
}

function isInsideTopAndBottom(outer, inner) {
  return Math.floor(outer.top) <= Math.ceil(inner.top) && Math.floor(inner.top) <= Math.ceil(outer.bottom) && Math.floor(outer.top) <= Math.ceil(inner.bottom) && Math.floor(inner.bottom) <= Math.ceil(outer.bottom);
}

function isInside(outer, inner) {
  return isInsideLeftAndRight(outer, inner) && isInsideTopAndBottom(outer, inner);
}

function roundToNearest(amount, precision) {
  return Math.round(amount / precision) * precision;
}

const trackByEventId = (index, event) => event.id ? event.id : event;

const trackByWeekDayHeaderDate = (index, day) => day.date.toISOString();

const trackByHourSegment = (index, segment) => segment.date.toISOString();

const trackByHour = (index, hour) => hour.segments[0].date.toISOString();

const trackByWeekAllDayEvent = (index, weekEvent) => weekEvent.event.id ? weekEvent.event.id : weekEvent.event;

const trackByWeekTimeEvent = (index, weekEvent) => weekEvent.event.id ? weekEvent.event.id : weekEvent.event;

const MINUTES_IN_HOUR = 60;

function getPixelAmountInMinutes(hourSegments, hourSegmentHeight, hourDuration) {
  return (hourDuration || MINUTES_IN_HOUR) / (hourSegments * hourSegmentHeight);
}

function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize, hourDuration) {
  const draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
  const pixelAmountInMinutes = getPixelAmountInMinutes(hourSegments, hourSegmentHeight, hourDuration);
  return draggedInPixelsSnapSize * pixelAmountInMinutes;
}

function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
  if (event.end) {
    return event.end;
  } else {
    return dateAdapter.addMinutes(event.start, minimumMinutes);
  }
}

function addDaysWithExclusions(dateAdapter, date, days, excluded) {
  let daysCounter = 0;
  let daysToAdd = 0;
  const changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
  let result = date;

  while (daysToAdd <= Math.abs(days)) {
    result = changeDays(date, daysCounter);
    const day = dateAdapter.getDay(result);

    if (excluded.indexOf(day) === -1) {
      daysToAdd++;
    }

    daysCounter++;
  }

  return result;
}

function isDraggedWithinPeriod(newStart, newEnd, period) {
  const end = newEnd || newStart;
  return period.start <= newStart && newStart <= period.end || period.start <= end && end <= period.end;
}

function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
  return dropEvent.dropData && dropEvent.dropData.event && (dropEvent.dropData.calendarId !== calendarId || dropEvent.dropData.event.allDay && !allDay || !dropEvent.dropData.event.allDay && allDay);
}

function getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn, excluded = [], daysInWeek) {
  let viewStart = daysInWeek ? dateAdapter.startOfDay(viewDate) : dateAdapter.startOfWeek(viewDate, {
    weekStartsOn
  });
  const endOfWeek = dateAdapter.endOfWeek(viewDate, {
    weekStartsOn
  });

  while (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1 && viewStart < endOfWeek) {
    viewStart = dateAdapter.addDays(viewStart, 1);
  }

  if (daysInWeek) {
    const viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
    return {
      viewStart,
      viewEnd
    };
  } else {
    let viewEnd = endOfWeek;

    while (excluded.indexOf(dateAdapter.getDay(viewEnd)) > -1 && viewEnd > viewStart) {
      viewEnd = dateAdapter.subDays(viewEnd, 1);
    }

    return {
      viewStart,
      viewEnd
    };
  }
}

function isWithinThreshold({
  x,
  y
}) {
  const DRAG_THRESHOLD = 1;
  return Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
}

class DateAdapter {}
/**
 * Change the view date to the previous view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarPreviousView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Previous
 * </button>
 * ```
 */


class CalendarPreviousViewDirective {
  constructor(dateAdapter) {
    this.dateAdapter = dateAdapter;
    /**
     * Days to skip when going back by 1 day
     */

    this.excludeDays = [];
    /**
     * Called when the view date is changed
     */

    this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  /**
   * @hidden
   */


  onClick() {
    const subFn = {
      day: this.dateAdapter.subDays,
      week: this.dateAdapter.subWeeks,
      month: this.dateAdapter.subMonths
    }[this.view];

    if (this.view === CalendarView.Day) {
      this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -1, this.excludeDays));
    } else if (this.view === CalendarView.Week && this.daysInWeek) {
      this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
    } else {
      this.viewDateChange.emit(subFn(this.viewDate, 1));
    }
  }

}

CalendarPreviousViewDirective.ɵfac = function CalendarPreviousViewDirective_Factory(t) {
  return new (t || CalendarPreviousViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DateAdapter));
};

CalendarPreviousViewDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: CalendarPreviousViewDirective,
  selectors: [["", "mwlCalendarPreviousView", ""]],
  hostBindings: function CalendarPreviousViewDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalendarPreviousViewDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  },
  inputs: {
    view: "view",
    viewDate: "viewDate",
    excludeDays: "excludeDays",
    daysInWeek: "daysInWeek"
  },
  outputs: {
    viewDateChange: "viewDateChange"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarPreviousViewDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[mwlCalendarPreviousView]'
    }]
  }], function () {
    return [{
      type: DateAdapter
    }];
  }, {
    view: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    viewDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    excludeDays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    daysInWeek: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    viewDateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['click']
    }]
  });
})();
/**
 * Change the view date to the next view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarNextView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Next
 * </button>
 * ```
 */


class CalendarNextViewDirective {
  constructor(dateAdapter) {
    this.dateAdapter = dateAdapter;
    /**
     * Days to skip when going forward by 1 day
     */

    this.excludeDays = [];
    /**
     * Called when the view date is changed
     */

    this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  /**
   * @hidden
   */


  onClick() {
    const addFn = {
      day: this.dateAdapter.addDays,
      week: this.dateAdapter.addWeeks,
      month: this.dateAdapter.addMonths
    }[this.view];

    if (this.view === CalendarView.Day) {
      this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, 1, this.excludeDays));
    } else if (this.view === CalendarView.Week && this.daysInWeek) {
      this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, this.daysInWeek, this.excludeDays));
    } else {
      this.viewDateChange.emit(addFn(this.viewDate, 1));
    }
  }

}

CalendarNextViewDirective.ɵfac = function CalendarNextViewDirective_Factory(t) {
  return new (t || CalendarNextViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DateAdapter));
};

CalendarNextViewDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: CalendarNextViewDirective,
  selectors: [["", "mwlCalendarNextView", ""]],
  hostBindings: function CalendarNextViewDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalendarNextViewDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  },
  inputs: {
    view: "view",
    viewDate: "viewDate",
    excludeDays: "excludeDays",
    daysInWeek: "daysInWeek"
  },
  outputs: {
    viewDateChange: "viewDateChange"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarNextViewDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[mwlCalendarNextView]'
    }]
  }], function () {
    return [{
      type: DateAdapter
    }];
  }, {
    view: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    viewDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    excludeDays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    daysInWeek: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    viewDateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['click']
    }]
  });
})();
/**
 * Change the view date to the current day. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarToday
 *  [(viewDate)]="viewDate">
 *  Today
 * </button>
 * ```
 */


class CalendarTodayDirective {
  constructor(dateAdapter) {
    this.dateAdapter = dateAdapter;
    /**
     * Called when the view date is changed
     */

    this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  /**
   * @hidden
   */


  onClick() {
    this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
  }

}

CalendarTodayDirective.ɵfac = function CalendarTodayDirective_Factory(t) {
  return new (t || CalendarTodayDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DateAdapter));
};

CalendarTodayDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: CalendarTodayDirective,
  selectors: [["", "mwlCalendarToday", ""]],
  hostBindings: function CalendarTodayDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalendarTodayDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  },
  inputs: {
    viewDate: "viewDate"
  },
  outputs: {
    viewDateChange: "viewDateChange"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarTodayDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[mwlCalendarToday]'
    }]
  }], function () {
    return [{
      type: DateAdapter
    }];
  }, {
    viewDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    viewDateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['click']
    }]
  });
})();
/**
 * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
 */


class CalendarAngularDateFormatter {
  constructor(dateAdapter) {
    this.dateAdapter = dateAdapter;
  }
  /**
   * The month view header week day labels
   */


  monthViewColumnHeader({
    date,
    locale
  }) {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(date, 'EEEE', locale);
  }
  /**
   * The month view cell day number
   */


  monthViewDayNumber({
    date,
    locale
  }) {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(date, 'd', locale);
  }
  /**
   * The month view title
   */


  monthViewTitle({
    date,
    locale
  }) {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(date, 'LLLL y', locale);
  }
  /**
   * The week view header week day labels
   */


  weekViewColumnHeader({
    date,
    locale
  }) {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(date, 'EEEE', locale);
  }
  /**
   * The week view sub header day and month labels
   */


  weekViewColumnSubHeader({
    date,
    locale
  }) {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(date, 'MMM d', locale);
  }
  /**
   * The week view title
   */


  weekViewTitle({
    date,
    locale,
    weekStartsOn,
    excludeDays,
    daysInWeek
  }) {
    const {
      viewStart,
      viewEnd
    } = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek);

    const format = (dateToFormat, showYear) => (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(dateToFormat, 'MMM d' + (showYear ? ', yyyy' : ''), locale);

    return `${format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear())} - ${format(viewEnd, true)}`;
  }
  /**
   * The time formatting down the left hand side of the week view
   */


  weekViewHour({
    date,
    locale
  }) {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(date, 'h a', locale);
  }
  /**
   * The time formatting down the left hand side of the day view
   */


  dayViewHour({
    date,
    locale
  }) {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(date, 'h a', locale);
  }
  /**
   * The day view title
   */


  dayViewTitle({
    date,
    locale
  }) {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(date, 'EEEE, MMMM d, y', locale);
  }

}

CalendarAngularDateFormatter.ɵfac = function CalendarAngularDateFormatter_Factory(t) {
  return new (t || CalendarAngularDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](DateAdapter));
};

CalendarAngularDateFormatter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CalendarAngularDateFormatter,
  factory: CalendarAngularDateFormatter.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarAngularDateFormatter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
  }], function () {
    return [{
      type: DateAdapter
    }];
  }, null);
})();
/**
 * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
 *
 * If you wish, you may override any of the defaults via angulars DI. For example:
 *
 * ```typescript
 * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
 * import { formatDate } from '@angular/common';
 * import { Injectable } from '@angular/core';
 *
 * @Injectable()
 * class CustomDateFormatter extends CalendarDateFormatter {
 *
 *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
 *     return formatDate(date, 'EEE', locale); // use short week days
 *   }
 *
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *   provide: CalendarDateFormatter,
 *   useClass: CustomDateFormatter
 * }]
 * ```
 */


class CalendarDateFormatter extends CalendarAngularDateFormatter {}

CalendarDateFormatter.ɵfac = /* @__PURE__ */function () {
  let ɵCalendarDateFormatter_BaseFactory;
  return function CalendarDateFormatter_Factory(t) {
    return (ɵCalendarDateFormatter_BaseFactory || (ɵCalendarDateFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](CalendarDateFormatter)))(t || CalendarDateFormatter);
  };
}();

CalendarDateFormatter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CalendarDateFormatter,
  factory: CalendarDateFormatter.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarDateFormatter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
  }], null, null);
})();
/**
 * This pipe is primarily for rendering the current view title. Example usage:
 * ```typescript
 * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
 * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
 * ```
 */


class CalendarDatePipe {
  constructor(dateFormatter, locale) {
    this.dateFormatter = dateFormatter;
    this.locale = locale;
  }

  transform(date, method, locale = this.locale, weekStartsOn = 0, excludeDays = [], daysInWeek) {
    if (typeof this.dateFormatter[method] === 'undefined') {
      const allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarDateFormatter.prototype)).filter(iMethod => iMethod !== 'constructor');
      throw new Error(`${method} is not a valid date formatter. Can only be one of ${allowedMethods.join(', ')}`);
    }

    return this.dateFormatter[method]({
      date,
      locale,
      weekStartsOn,
      excludeDays,
      daysInWeek
    });
  }

}

CalendarDatePipe.ɵfac = function CalendarDatePipe_Factory(t) {
  return new (t || CalendarDatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](CalendarDateFormatter, 16), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID, 16));
};

CalendarDatePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "calendarDate",
  type: CalendarDatePipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarDatePipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe,
    args: [{
      name: 'calendarDate'
    }]
  }], function () {
    return [{
      type: CalendarDateFormatter
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID]
      }]
    }];
  }, null);
})();

class CalendarUtils {
  constructor(dateAdapter) {
    this.dateAdapter = dateAdapter;
  }

  getMonthView(args) {
    return (0,calendar_utils__WEBPACK_IMPORTED_MODULE_1__.getMonthView)(this.dateAdapter, args);
  }

  getWeekViewHeader(args) {
    return (0,calendar_utils__WEBPACK_IMPORTED_MODULE_1__.getWeekViewHeader)(this.dateAdapter, args);
  }

  getWeekView(args) {
    return (0,calendar_utils__WEBPACK_IMPORTED_MODULE_1__.getWeekView)(this.dateAdapter, args);
  }

}

CalendarUtils.ɵfac = function CalendarUtils_Factory(t) {
  return new (t || CalendarUtils)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](DateAdapter));
};

CalendarUtils.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CalendarUtils,
  factory: CalendarUtils.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarUtils, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
  }], function () {
    return [{
      type: DateAdapter
    }];
  }, null);
})();

const MOMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('Moment');
/**
 * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
 *
 * ```typescript
 * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
 * import moment from 'moment';
 *
 * // in your component
 * provide: [{
 *   provide: MOMENT, useValue: moment
 * }, {
 *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
 * }]
 *
 * ```
 */

class CalendarMomentDateFormatter {
  /**
   * @hidden
   */
  constructor(moment, dateAdapter) {
    this.moment = moment;
    this.dateAdapter = dateAdapter;
  }
  /**
   * The month view header week day labels
   */


  monthViewColumnHeader({
    date,
    locale
  }) {
    return this.moment(date).locale(locale).format('dddd');
  }
  /**
   * The month view cell day number
   */


  monthViewDayNumber({
    date,
    locale
  }) {
    return this.moment(date).locale(locale).format('D');
  }
  /**
   * The month view title
   */


  monthViewTitle({
    date,
    locale
  }) {
    return this.moment(date).locale(locale).format('MMMM YYYY');
  }
  /**
   * The week view header week day labels
   */


  weekViewColumnHeader({
    date,
    locale
  }) {
    return this.moment(date).locale(locale).format('dddd');
  }
  /**
   * The week view sub header day and month labels
   */


  weekViewColumnSubHeader({
    date,
    locale
  }) {
    return this.moment(date).locale(locale).format('MMM D');
  }
  /**
   * The week view title
   */


  weekViewTitle({
    date,
    locale,
    weekStartsOn,
    excludeDays,
    daysInWeek
  }) {
    const {
      viewStart,
      viewEnd
    } = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek);

    const format = (dateToFormat, showYear) => this.moment(dateToFormat).locale(locale).format('MMM D' + (showYear ? ', YYYY' : ''));

    return `${format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear())} - ${format(viewEnd, true)}`;
  }
  /**
   * The time formatting down the left hand side of the week view
   */


  weekViewHour({
    date,
    locale
  }) {
    return this.moment(date).locale(locale).format('ha');
  }
  /**
   * The time formatting down the left hand side of the day view
   */


  dayViewHour({
    date,
    locale
  }) {
    return this.moment(date).locale(locale).format('ha');
  }
  /**
   * The day view title
   */


  dayViewTitle({
    date,
    locale
  }) {
    return this.moment(date).locale(locale).format('dddd, LL'); // dddd = Thursday
  } // LL = locale-dependent Month Day, Year


}

CalendarMomentDateFormatter.ɵfac = function CalendarMomentDateFormatter_Factory(t) {
  return new (t || CalendarMomentDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MOMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](DateAdapter));
};

CalendarMomentDateFormatter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CalendarMomentDateFormatter,
  factory: CalendarMomentDateFormatter.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarMomentDateFormatter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [MOMENT]
      }]
    }, {
      type: DateAdapter
    }];
  }, null);
})();
/**
 * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
 *
 * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
 */


class CalendarNativeDateFormatter {
  constructor(dateAdapter) {
    this.dateAdapter = dateAdapter;
  }
  /**
   * The month view header week day labels
   */


  monthViewColumnHeader({
    date,
    locale
  }) {
    return new Intl.DateTimeFormat(locale, {
      weekday: 'long'
    }).format(date);
  }
  /**
   * The month view cell day number
   */


  monthViewDayNumber({
    date,
    locale
  }) {
    return new Intl.DateTimeFormat(locale, {
      day: 'numeric'
    }).format(date);
  }
  /**
   * The month view title
   */


  monthViewTitle({
    date,
    locale
  }) {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long'
    }).format(date);
  }
  /**
   * The week view header week day labels
   */


  weekViewColumnHeader({
    date,
    locale
  }) {
    return new Intl.DateTimeFormat(locale, {
      weekday: 'long'
    }).format(date);
  }
  /**
   * The week view sub header day and month labels
   */


  weekViewColumnSubHeader({
    date,
    locale
  }) {
    return new Intl.DateTimeFormat(locale, {
      day: 'numeric',
      month: 'short'
    }).format(date);
  }
  /**
   * The week view title
   */


  weekViewTitle({
    date,
    locale,
    weekStartsOn,
    excludeDays,
    daysInWeek
  }) {
    const {
      viewStart,
      viewEnd
    } = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek);

    const format = (dateToFormat, showYear) => new Intl.DateTimeFormat(locale, {
      day: 'numeric',
      month: 'short',
      year: showYear ? 'numeric' : undefined
    }).format(dateToFormat);

    return `${format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear())} - ${format(viewEnd, true)}`;
  }
  /**
   * The time formatting down the left hand side of the week view
   */


  weekViewHour({
    date,
    locale
  }) {
    return new Intl.DateTimeFormat(locale, {
      hour: 'numeric'
    }).format(date);
  }
  /**
   * The time formatting down the left hand side of the day view
   */


  dayViewHour({
    date,
    locale
  }) {
    return new Intl.DateTimeFormat(locale, {
      hour: 'numeric'
    }).format(date);
  }
  /**
   * The day view title
   */


  dayViewTitle({
    date,
    locale
  }) {
    return new Intl.DateTimeFormat(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long'
    }).format(date);
  }

}

CalendarNativeDateFormatter.ɵfac = function CalendarNativeDateFormatter_Factory(t) {
  return new (t || CalendarNativeDateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](DateAdapter));
};

CalendarNativeDateFormatter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CalendarNativeDateFormatter,
  factory: CalendarNativeDateFormatter.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarNativeDateFormatter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
  }], function () {
    return [{
      type: DateAdapter
    }];
  }, null);
})();

var CalendarEventTimesChangedEventType;

(function (CalendarEventTimesChangedEventType) {
  CalendarEventTimesChangedEventType["Drag"] = "drag";
  CalendarEventTimesChangedEventType["Drop"] = "drop";
  CalendarEventTimesChangedEventType["Resize"] = "resize";
})(CalendarEventTimesChangedEventType || (CalendarEventTimesChangedEventType = {}));
/**
 * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
 *
 * ```typescript
 * import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
 *
 * @NgModule({
 *   imports: [
 *     CalendarCommonModule.forRoot(),
 *     CalendarMonthModule
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */


class CalendarCommonModule {
  static forRoot(dateAdapter, config = {}) {
    return {
      ngModule: CalendarCommonModule,
      providers: [dateAdapter, config.eventTitleFormatter || CalendarEventTitleFormatter, config.dateFormatter || CalendarDateFormatter, config.utils || CalendarUtils, config.a11y || CalendarA11y]
    };
  }

}

CalendarCommonModule.ɵfac = function CalendarCommonModule_Factory(t) {
  return new (t || CalendarCommonModule)();
};

CalendarCommonModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: CalendarCommonModule,
  declarations: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule],
  exports: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective]
});
CalendarCommonModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.I18nPluralPipe],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarCommonModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      declarations: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule],
      exports: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.I18nPluralPipe],
      entryComponents: [CalendarTooltipWindowComponent]
    }]
  }], null, null);
})();

class CalendarMonthViewHeaderComponent {
  constructor() {
    this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
  }

}

CalendarMonthViewHeaderComponent.ɵfac = function CalendarMonthViewHeaderComponent_Factory(t) {
  return new (t || CalendarMonthViewHeaderComponent)();
};

CalendarMonthViewHeaderComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CalendarMonthViewHeaderComponent,
  selectors: [["mwl-calendar-month-view-header"]],
  inputs: {
    days: "days",
    locale: "locale",
    customTemplate: "customTemplate"
  },
  outputs: {
    columnHeaderClicked: "columnHeaderClicked"
  },
  decls: 3,
  vars: 6,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-cell-row", "cal-header"], ["class", "cal-cell", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "0", "role", "columnheader", 1, "cal-cell", 3, "ngClass", "click"]],
  template: function CalendarMonthViewHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarMonthViewHeaderComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarMonthViewHeaderComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](2, _c5, ctx.days, ctx.locale, ctx.trackByWeekDayHeaderDate));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, CalendarDatePipe],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarMonthViewHeaderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'mwl-calendar-month-view-header',
      template: `
    <ng-template
      #defaultTemplate
      let-days="days"
      let-locale="locale"
      let-trackByWeekDayHeaderDate="trackByWeekDayHeaderDate"
    >
      <div class="cal-cell-row cal-header" role="row">
        <div
          class="cal-cell"
          *ngFor="let day of days; trackBy: trackByWeekDayHeaderDate"
          [class.cal-past]="day.isPast"
          [class.cal-today]="day.isToday"
          [class.cal-future]="day.isFuture"
          [class.cal-weekend]="day.isWeekend"
          (click)="
            columnHeaderClicked.emit({
              isoDayNumber: day.day,
              sourceEvent: $event
            })
          "
          [ngClass]="day.cssClass"
          tabindex="0"
          role="columnheader"
        >
          {{ day.date | calendarDate: 'monthViewColumnHeader':locale }}
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        days: days,
        locale: locale,
        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate
      }"
    >
    </ng-template>
  `
    }]
  }], null, {
    days: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    columnHeaderClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  });
})();

class CalendarMonthCellComponent {
  constructor() {
    this.highlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.unhighlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.trackByEventId = trackByEventId;
    this.validateDrag = isWithinThreshold;
  }

}

CalendarMonthCellComponent.ɵfac = function CalendarMonthCellComponent_Factory(t) {
  return new (t || CalendarMonthCellComponent)();
};

CalendarMonthCellComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CalendarMonthCellComponent,
  selectors: [["mwl-calendar-month-cell"]],
  hostAttrs: [1, "cal-cell", "cal-day-cell"],
  hostVars: 18,
  hostBindings: function CalendarMonthCellComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-past", ctx.day.isPast)("cal-today", ctx.day.isToday)("cal-future", ctx.day.isFuture)("cal-weekend", ctx.day.isWeekend)("cal-in-month", ctx.day.inMonth)("cal-out-month", !ctx.day.inMonth)("cal-has-events", ctx.day.events.length > 0)("cal-open", ctx.day === ctx.openDay)("cal-event-highlight", !!ctx.day.backgroundColor);
    }
  },
  inputs: {
    day: "day",
    openDay: "openDay",
    locale: "locale",
    tooltipPlacement: "tooltipPlacement",
    tooltipAppendToBody: "tooltipAppendToBody",
    customTemplate: "customTemplate",
    tooltipTemplate: "tooltipTemplate",
    tooltipDelay: "tooltipDelay"
  },
  outputs: {
    highlightDay: "highlightDay",
    unhighlightDay: "unhighlightDay",
    eventClicked: "eventClicked"
  },
  decls: 3,
  vars: 15,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-cell-top"], ["aria-hidden", "true"], ["class", "cal-day-badge", 4, "ngIf"], [1, "cal-day-number"], ["class", "cal-events", 4, "ngIf"], [1, "cal-day-badge"], [1, "cal-events"], ["class", "cal-event", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", "mouseenter", "mouseleave", "mwlClick", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event", 3, "ngStyle", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", "mouseenter", "mouseleave", "mwlClick"]],
  template: function CalendarMonthCellComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarMonthCellComponent_ng_template_0_Template, 8, 14, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarMonthCellComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](2, _c11, [ctx.day, ctx.openDay, ctx.locale, ctx.tooltipPlacement, ctx.highlightDay, ctx.unhighlightDay, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDelay, ctx.trackByEventId, ctx.validateDrag]));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DraggableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, CalendarTooltipDirective, ClickDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, CalendarA11yPipe, CalendarDatePipe, CalendarEventTitlePipe],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarMonthCellComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'mwl-calendar-month-cell',
      template: `
    <ng-template
      #defaultTemplate
      let-day="day"
      let-openDay="openDay"
      let-locale="locale"
      let-tooltipPlacement="tooltipPlacement"
      let-highlightDay="highlightDay"
      let-unhighlightDay="unhighlightDay"
      let-eventClicked="eventClicked"
      let-tooltipTemplate="tooltipTemplate"
      let-tooltipAppendToBody="tooltipAppendToBody"
      let-tooltipDelay="tooltipDelay"
      let-trackByEventId="trackByEventId"
      let-validateDrag="validateDrag"
    >
      <div
        class="cal-cell-top"
        [attr.aria-label]="
          { day: day, locale: locale } | calendarA11y: 'monthCell'
        "
      >
        <span aria-hidden="true">
          <span class="cal-day-badge" *ngIf="day.badgeTotal > 0">{{
            day.badgeTotal
          }}</span>
          <span class="cal-day-number">{{
            day.date | calendarDate: 'monthViewDayNumber':locale
          }}</span>
        </span>
      </div>
      <div class="cal-events" *ngIf="day.events.length > 0">
        <div
          class="cal-event"
          *ngFor="let event of day.events; trackBy: trackByEventId"
          [ngStyle]="{ backgroundColor: event.color?.primary }"
          [ngClass]="event?.cssClass"
          (mouseenter)="highlightDay.emit({ event: event })"
          (mouseleave)="unhighlightDay.emit({ event: event })"
          [mwlCalendarTooltip]="
            event.title | calendarEventTitle: 'monthTooltip':event
          "
          [tooltipPlacement]="tooltipPlacement"
          [tooltipEvent]="event"
          [tooltipTemplate]="tooltipTemplate"
          [tooltipAppendToBody]="tooltipAppendToBody"
          [tooltipDelay]="tooltipDelay"
          mwlDraggable
          [class.cal-draggable]="event.draggable"
          dragActiveClass="cal-drag-active"
          [dropData]="{ event: event, draggedFrom: day }"
          [dragAxis]="{ x: event.draggable, y: event.draggable }"
          [validateDrag]="validateDrag"
          [touchStartLongPress]="{ delay: 300, delta: 30 }"
          (mwlClick)="eventClicked.emit({ event: event, sourceEvent: $event })"
          [attr.aria-hidden]="{} | calendarA11y: 'hideMonthCellEvents'"
        ></div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        day: day,
        openDay: openDay,
        locale: locale,
        tooltipPlacement: tooltipPlacement,
        highlightDay: highlightDay,
        unhighlightDay: unhighlightDay,
        eventClicked: eventClicked,
        tooltipTemplate: tooltipTemplate,
        tooltipAppendToBody: tooltipAppendToBody,
        tooltipDelay: tooltipDelay,
        trackByEventId: trackByEventId,
        validateDrag: validateDrag
      }"
    >
    </ng-template>
  `,
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        class: 'cal-cell cal-day-cell',
        '[class.cal-past]': 'day.isPast',
        '[class.cal-today]': 'day.isToday',
        '[class.cal-future]': 'day.isFuture',
        '[class.cal-weekend]': 'day.isWeekend',
        '[class.cal-in-month]': 'day.inMonth',
        '[class.cal-out-month]': '!day.inMonth',
        '[class.cal-has-events]': 'day.events.length > 0',
        '[class.cal-open]': 'day === openDay',
        '[class.cal-event-highlight]': '!!day.backgroundColor'
      }
    }]
  }], null, {
    day: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    openDay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipPlacement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipAppendToBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    highlightDay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    unhighlightDay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    eventClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  });
})();

const collapseAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('collapse', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
  height: 0,
  overflow: 'hidden',
  'padding-top': 0,
  'padding-bottom': 0
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
  height: '*',
  overflow: 'hidden',
  'padding-top': '*',
  'padding-bottom': '*'
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('150ms ease-out')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('150ms ease-in'))]);

class CalendarOpenDayEventsComponent {
  constructor() {
    this.isOpen = false;
    this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.trackByEventId = trackByEventId;
    this.validateDrag = isWithinThreshold;
  }

}

CalendarOpenDayEventsComponent.ɵfac = function CalendarOpenDayEventsComponent_Factory(t) {
  return new (t || CalendarOpenDayEventsComponent)();
};

CalendarOpenDayEventsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CalendarOpenDayEventsComponent,
  selectors: [["mwl-calendar-open-day-events"]],
  inputs: {
    locale: "locale",
    isOpen: "isOpen",
    events: "events",
    customTemplate: "customTemplate",
    eventTitleTemplate: "eventTitleTemplate",
    eventActionsTemplate: "eventActionsTemplate",
    date: "date"
  },
  outputs: {
    eventClicked: "eventClicked"
  },
  decls: 3,
  vars: 8,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-open-day-events", "role", "application", 4, "ngIf"], ["role", "application", 1, "cal-open-day-events"], ["tabindex", "-1", "role", "alert"], ["tabindex", "0", "role", "landmark"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "cal-draggable", "dropData", "dragAxis", "validateDrag", "touchStartLongPress", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "ngClass", "dropData", "dragAxis", "validateDrag", "touchStartLongPress"], [1, "cal-event", 3, "ngStyle"], ["view", "month", "tabindex", "0", 3, "event", "customTemplate", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"]],
  template: function CalendarOpenDayEventsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarOpenDayEventsComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarOpenDayEventsComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction5"](2, _c15, ctx.events, ctx.eventClicked, ctx.isOpen, ctx.trackByEventId, ctx.validateDrag));
    }
  },
  dependencies: [CalendarEventTitleComponent, CalendarEventActionsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DraggableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, ClickDirective, KeydownEnterDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, CalendarA11yPipe],
  encapsulation: 2,
  data: {
    animation: [collapseAnimation]
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarOpenDayEventsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'mwl-calendar-open-day-events',
      template: `
    <ng-template
      #defaultTemplate
      let-events="events"
      let-eventClicked="eventClicked"
      let-isOpen="isOpen"
      let-trackByEventId="trackByEventId"
      let-validateDrag="validateDrag"
    >
      <div
        class="cal-open-day-events"
        [@collapse]
        *ngIf="isOpen"
        role="application"
      >
        <span
          tabindex="-1"
          role="alert"
          [attr.aria-label]="
            { date: date, locale: locale } | calendarA11y: 'openDayEventsAlert'
          "
        ></span>
        <span
          tabindex="0"
          role="landmark"
          [attr.aria-label]="
            { date: date, locale: locale }
              | calendarA11y: 'openDayEventsLandmark'
          "
        ></span>
        <div
          *ngFor="let event of events; trackBy: trackByEventId"
          [ngClass]="event?.cssClass"
          mwlDraggable
          [class.cal-draggable]="event.draggable"
          dragActiveClass="cal-drag-active"
          [dropData]="{ event: event }"
          [dragAxis]="{ x: event.draggable, y: event.draggable }"
          [validateDrag]="validateDrag"
          [touchStartLongPress]="{ delay: 300, delta: 30 }"
        >
          <span
            class="cal-event"
            [ngStyle]="{ backgroundColor: event.color?.primary }"
          >
          </span>
          &ngsp;
          <mwl-calendar-event-title
            [event]="event"
            [customTemplate]="eventTitleTemplate"
            view="month"
            (mwlClick)="
              eventClicked.emit({ event: event, sourceEvent: $event })
            "
            (mwlKeydownEnter)="
              eventClicked.emit({ event: event, sourceEvent: $event })
            "
            tabindex="0"
            [attr.aria-label]="
              { event: event, locale: locale }
                | calendarA11y: 'eventDescription'
            "
          >
          </mwl-calendar-event-title>
          &ngsp;
          <mwl-calendar-event-actions
            [event]="event"
            [customTemplate]="eventActionsTemplate"
          >
          </mwl-calendar-event-actions>
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        events: events,
        eventClicked: eventClicked,
        isOpen: isOpen,
        trackByEventId: trackByEventId,
        validateDrag: validateDrag
      }"
    >
    </ng-template>
  `,
      animations: [collapseAnimation]
    }]
  }], null, {
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    events: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    eventTitleTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    eventActionsTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    date: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    eventClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  });
})();
/**
 * Shows all events on a given month. Example usage:
 *
 * ```typescript
 * <mwl-calendar-month-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-month-view>
 * ```
 */


class CalendarMonthViewComponent {
  /**
   * @hidden
   */
  constructor(cdr, utils, locale, dateAdapter) {
    this.cdr = cdr;
    this.utils = utils;
    this.dateAdapter = dateAdapter;
    /**
     * An array of events to display on view.
     * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
     */

    this.events = [];
    /**
     * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
     */

    this.excludeDays = [];
    /**
     * Whether the events list for the day of the `viewDate` option is visible or not
     */

    this.activeDayIsOpen = false;
    /**
     * The placement of the event tooltip
     */

    this.tooltipPlacement = 'auto';
    /**
     * Whether to append tooltips to the body or next to the trigger element
     */

    this.tooltipAppendToBody = true;
    /**
     * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
     * will be displayed immediately.
     */

    this.tooltipDelay = null;
    /**
     * An output that will be called before the view is rendered for the current month.
     * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
     */

    this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Called when the day cell is clicked
     */

    this.dayClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Called when the event title is clicked
     */

    this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Called when a header week day is clicked. Returns ISO day number.
     */

    this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Called when an event is dragged and dropped
     */

    this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * @hidden
     */

    this.trackByRowOffset = (index, offset) => this.view.days.slice(offset, this.view.totalDaysVisibleInWeek).map(day => day.date.toISOString()).join('-');
    /**
     * @hidden
     */


    this.trackByDate = (index, day) => day.date.toISOString();

    this.locale = locale;
  }
  /**
   * @hidden
   */


  ngOnInit() {
    if (this.refresh) {
      this.refreshSubscription = this.refresh.subscribe(() => {
        this.refreshAll();
        this.cdr.markForCheck();
      });
    }
  }
  /**
   * @hidden
   */


  ngOnChanges(changes) {
    const refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays;
    const refreshBody = changes.viewDate || changes.events || changes.excludeDays || changes.weekendDays;

    if (refreshHeader) {
      this.refreshHeader();
    }

    if (changes.events) {
      validateEvents(this.events);
    }

    if (refreshBody) {
      this.refreshBody();
    }

    if (refreshHeader || refreshBody) {
      this.emitBeforeViewRender();
    }

    if (changes.activeDayIsOpen || changes.viewDate || changes.events || changes.excludeDays || changes.activeDay) {
      this.checkActiveDayIsOpen();
    }
  }
  /**
   * @hidden
   */


  ngOnDestroy() {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }
  /**
   * @hidden
   */


  toggleDayHighlight(event, isHighlighted) {
    this.view.days.forEach(day => {
      if (isHighlighted && day.events.indexOf(event) > -1) {
        day.backgroundColor = event.color && event.color.secondary || '#D1E8FF';
      } else {
        delete day.backgroundColor;
      }
    });
  }
  /**
   * @hidden
   */


  eventDropped(droppedOn, event, draggedFrom) {
    if (droppedOn !== draggedFrom) {
      const year = this.dateAdapter.getYear(droppedOn.date);
      const month = this.dateAdapter.getMonth(droppedOn.date);
      const date = this.dateAdapter.getDate(droppedOn.date);
      const newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
      let newEnd;

      if (event.end) {
        const secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
        newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
      }

      this.eventTimesChanged.emit({
        event,
        newStart,
        newEnd,
        day: droppedOn,
        type: CalendarEventTimesChangedEventType.Drop
      });
    }
  }

  refreshHeader() {
    this.columnHeaders = this.utils.getWeekViewHeader({
      viewDate: this.viewDate,
      weekStartsOn: this.weekStartsOn,
      excluded: this.excludeDays,
      weekendDays: this.weekendDays
    });
  }

  refreshBody() {
    this.view = this.utils.getMonthView({
      events: this.events,
      viewDate: this.viewDate,
      weekStartsOn: this.weekStartsOn,
      excluded: this.excludeDays,
      weekendDays: this.weekendDays
    });
  }

  checkActiveDayIsOpen() {
    if (this.activeDayIsOpen === true) {
      const activeDay = this.activeDay || this.viewDate;
      this.openDay = this.view.days.find(day => this.dateAdapter.isSameDay(day.date, activeDay));
      const index = this.view.days.indexOf(this.openDay);
      this.openRowIndex = Math.floor(index / this.view.totalDaysVisibleInWeek) * this.view.totalDaysVisibleInWeek;
    } else {
      this.openRowIndex = null;
      this.openDay = null;
    }
  }

  refreshAll() {
    this.refreshHeader();
    this.refreshBody();
    this.emitBeforeViewRender();
    this.checkActiveDayIsOpen();
  }

  emitBeforeViewRender() {
    if (this.columnHeaders && this.view) {
      this.beforeViewRender.emit({
        header: this.columnHeaders,
        body: this.view.days,
        period: this.view.period
      });
    }
  }

}

CalendarMonthViewComponent.ɵfac = function CalendarMonthViewComponent_Factory(t) {
  return new (t || CalendarMonthViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](CalendarUtils), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DateAdapter));
};

CalendarMonthViewComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CalendarMonthViewComponent,
  selectors: [["mwl-calendar-month-view"]],
  inputs: {
    viewDate: "viewDate",
    events: "events",
    excludeDays: "excludeDays",
    activeDayIsOpen: "activeDayIsOpen",
    activeDay: "activeDay",
    refresh: "refresh",
    locale: "locale",
    tooltipPlacement: "tooltipPlacement",
    tooltipTemplate: "tooltipTemplate",
    tooltipAppendToBody: "tooltipAppendToBody",
    tooltipDelay: "tooltipDelay",
    weekStartsOn: "weekStartsOn",
    headerTemplate: "headerTemplate",
    cellTemplate: "cellTemplate",
    openDayEventsTemplate: "openDayEventsTemplate",
    eventTitleTemplate: "eventTitleTemplate",
    eventActionsTemplate: "eventActionsTemplate",
    weekendDays: "weekendDays"
  },
  outputs: {
    beforeViewRender: "beforeViewRender",
    dayClicked: "dayClicked",
    eventClicked: "eventClicked",
    columnHeaderClicked: "columnHeaderClicked",
    eventTimesChanged: "eventTimesChanged"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
  decls: 4,
  vars: 5,
  consts: [["role", "grid", 1, "cal-month-view"], [3, "days", "locale", "customTemplate", "columnHeaderClicked"], [1, "cal-days"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row", 1, "cal-cell-row"], ["role", "gridcell", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "locale", "isOpen", "events", "date", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "eventClicked", "drop"], ["role", "gridcell", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "ngClass", "day", "openDay", "locale", "tooltipPlacement", "tooltipAppendToBody", "tooltipTemplate", "tooltipDelay", "customTemplate", "ngStyle", "clickListenerDisabled", "mwlClick", "mwlKeydownEnter", "highlightDay", "unhighlightDay", "drop", "eventClicked"]],
  template: function CalendarMonthViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mwl-calendar-month-view-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("columnHeaderClicked", function CalendarMonthViewComponent_Template_mwl_calendar_month_view_header_columnHeaderClicked_1_listener($event) {
        return ctx.columnHeaderClicked.emit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CalendarMonthViewComponent_div_3_Template, 5, 13, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("days", ctx.columnHeaders)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.view.rowOffsets)("ngForTrackBy", ctx.trackByRowOffset);
    }
  },
  dependencies: [CalendarMonthViewHeaderComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DroppableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, ClickDirective, KeydownEnterDirective, CalendarA11yPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.SlicePipe],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarMonthViewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'mwl-calendar-month-view',
      template: `
    <div class="cal-month-view" role="grid">
      <mwl-calendar-month-view-header
        [days]="columnHeaders"
        [locale]="locale"
        (columnHeaderClicked)="columnHeaderClicked.emit($event)"
        [customTemplate]="headerTemplate"
      >
      </mwl-calendar-month-view-header>
      <div class="cal-days">
        <div
          *ngFor="let rowIndex of view.rowOffsets; trackBy: trackByRowOffset"
        >
          <div role="row" class="cal-cell-row">
            <mwl-calendar-month-cell
              role="gridcell"
              *ngFor="
                let day of view.days
                  | slice: rowIndex:rowIndex + view.totalDaysVisibleInWeek;
                trackBy: trackByDate
              "
              [ngClass]="day?.cssClass"
              [day]="day"
              [openDay]="openDay"
              [locale]="locale"
              [tooltipPlacement]="tooltipPlacement"
              [tooltipAppendToBody]="tooltipAppendToBody"
              [tooltipTemplate]="tooltipTemplate"
              [tooltipDelay]="tooltipDelay"
              [customTemplate]="cellTemplate"
              [ngStyle]="{ backgroundColor: day.backgroundColor }"
              (mwlClick)="dayClicked.emit({ day: day, sourceEvent: $event })"
              [clickListenerDisabled]="dayClicked.observers.length === 0"
              (mwlKeydownEnter)="
                dayClicked.emit({ day: day, sourceEvent: $event })
              "
              (highlightDay)="toggleDayHighlight($event.event, true)"
              (unhighlightDay)="toggleDayHighlight($event.event, false)"
              mwlDroppable
              dragOverClass="cal-drag-over"
              (drop)="
                eventDropped(
                  day,
                  $event.dropData.event,
                  $event.dropData.draggedFrom
                )
              "
              (eventClicked)="
                eventClicked.emit({
                  event: $event.event,
                  sourceEvent: $event.sourceEvent
                })
              "
              [attr.tabindex]="{} | calendarA11y: 'monthCellTabIndex'"
            >
            </mwl-calendar-month-cell>
          </div>
          <mwl-calendar-open-day-events
            [locale]="locale"
            [isOpen]="openRowIndex === rowIndex"
            [events]="openDay?.events"
            [date]="openDay?.date"
            [customTemplate]="openDayEventsTemplate"
            [eventTitleTemplate]="eventTitleTemplate"
            [eventActionsTemplate]="eventActionsTemplate"
            (eventClicked)="
              eventClicked.emit({
                event: $event.event,
                sourceEvent: $event.sourceEvent
              })
            "
            mwlDroppable
            dragOverClass="cal-drag-over"
            (drop)="
              eventDropped(
                openDay,
                $event.dropData.event,
                $event.dropData.draggedFrom
              )
            "
          >
          </mwl-calendar-open-day-events>
        </div>
      </div>
    </div>
  `
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
    }, {
      type: CalendarUtils
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID]
      }]
    }, {
      type: DateAdapter
    }];
  }, {
    viewDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    events: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    excludeDays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    activeDayIsOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    activeDay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    refresh: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipPlacement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipAppendToBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    weekStartsOn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    headerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cellTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    openDayEventsTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    eventTitleTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    eventActionsTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    weekendDays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    beforeViewRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    dayClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    eventClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    columnHeaderClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    eventTimesChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  });
})();

class CalendarMonthModule {}

CalendarMonthModule.ɵfac = function CalendarMonthModule_Factory(t) {
  return new (t || CalendarMonthModule)();
};

CalendarMonthModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: CalendarMonthModule,
  declarations: [CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule, CalendarCommonModule],
  exports: [angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule, CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent]
});
CalendarMonthModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule, CalendarCommonModule], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarMonthModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule, CalendarCommonModule],
      declarations: [CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent],
      exports: [angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule, CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent]
    }]
  }], null, null);
})();

class CalendarDragHelper {
  constructor(dragContainerElement, draggableElement) {
    this.dragContainerElement = dragContainerElement;
    this.startPosition = draggableElement.getBoundingClientRect();
  }

  validateDrag({
    x,
    y,
    snapDraggedEvents,
    dragAlreadyMoved,
    transform
  }) {
    const isDraggedWithinThreshold = isWithinThreshold({
      x,
      y
    }) || dragAlreadyMoved;

    if (snapDraggedEvents) {
      const inner = Object.assign({}, this.startPosition, {
        left: this.startPosition.left + transform.x,
        right: this.startPosition.right + transform.x,
        top: this.startPosition.top + transform.y,
        bottom: this.startPosition.bottom + transform.y
      });

      if (isDraggedWithinThreshold) {
        const outer = this.dragContainerElement.getBoundingClientRect();
        const isTopInside = outer.top < inner.top && inner.top < outer.bottom;
        const isBottomInside = outer.top < inner.bottom && inner.bottom < outer.bottom;
        return isInsideLeftAndRight(outer, inner) && (isTopInside || isBottomInside);
      }
      /* istanbul ignore next */


      return false;
    } else {
      return isDraggedWithinThreshold;
    }
  }

}

class CalendarResizeHelper {
  constructor(resizeContainerElement, minWidth, rtl) {
    this.resizeContainerElement = resizeContainerElement;
    this.minWidth = minWidth;
    this.rtl = rtl;
  }

  validateResize({
    rectangle,
    edges
  }) {
    if (this.rtl) {
      // TODO - find a way of testing this, for some reason the tests always fail but it does actually work

      /* istanbul ignore next */
      if (typeof edges.left !== 'undefined') {
        rectangle.left -= edges.left;
        rectangle.right += edges.left;
      } else if (typeof edges.right !== 'undefined') {
        rectangle.left += edges.right;
        rectangle.right -= edges.right;
      }

      rectangle.width = rectangle.right - rectangle.left;
    }

    if (this.minWidth && Math.ceil(rectangle.width) < Math.ceil(this.minWidth)) {
      return false;
    }

    return isInside(this.resizeContainerElement.getBoundingClientRect(), rectangle);
  }

}

class CalendarWeekViewHeaderComponent {
  constructor() {
    this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.eventDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
  }

}

CalendarWeekViewHeaderComponent.ɵfac = function CalendarWeekViewHeaderComponent_Factory(t) {
  return new (t || CalendarWeekViewHeaderComponent)();
};

CalendarWeekViewHeaderComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CalendarWeekViewHeaderComponent,
  selectors: [["mwl-calendar-week-view-header"]],
  inputs: {
    days: "days",
    locale: "locale",
    customTemplate: "customTemplate"
  },
  outputs: {
    dayHeaderClicked: "dayHeaderClicked",
    eventDropped: "eventDropped",
    dragEnter: "dragEnter"
  },
  decls: 3,
  vars: 9,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "row", 1, "cal-day-headers"], ["class", "cal-header", "mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "ngClass", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", "tabindex", "0", "role", "columnheader", 1, "cal-header", 3, "ngClass", "mwlClick", "drop", "dragEnter"]],
  template: function CalendarWeekViewHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarWeekViewHeaderComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewHeaderComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction6"](2, _c16, ctx.days, ctx.locale, ctx.dayHeaderClicked, ctx.eventDropped, ctx.dragEnter, ctx.trackByWeekDayHeaderDate));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DroppableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, ClickDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, CalendarDatePipe],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarWeekViewHeaderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'mwl-calendar-week-view-header',
      template: `
    <ng-template
      #defaultTemplate
      let-days="days"
      let-locale="locale"
      let-dayHeaderClicked="dayHeaderClicked"
      let-eventDropped="eventDropped"
      let-trackByWeekDayHeaderDate="trackByWeekDayHeaderDate"
      let-dragEnter="dragEnter"
    >
      <div class="cal-day-headers" role="row">
        <div
          class="cal-header"
          *ngFor="let day of days; trackBy: trackByWeekDayHeaderDate"
          [class.cal-past]="day.isPast"
          [class.cal-today]="day.isToday"
          [class.cal-future]="day.isFuture"
          [class.cal-weekend]="day.isWeekend"
          [ngClass]="day.cssClass"
          (mwlClick)="dayHeaderClicked.emit({ day: day, sourceEvent: $event })"
          mwlDroppable
          dragOverClass="cal-drag-over"
          (drop)="
            eventDropped.emit({
              event: $event.dropData.event,
              newStart: day.date
            })
          "
          (dragEnter)="dragEnter.emit({ date: day.date })"
          tabindex="0"
          role="columnheader"
        >
          <b>{{ day.date | calendarDate: 'weekViewColumnHeader':locale }}</b
          ><br />
          <span>{{
            day.date | calendarDate: 'weekViewColumnSubHeader':locale
          }}</span>
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        days: days,
        locale: locale,
        dayHeaderClicked: dayHeaderClicked,
        eventDropped: eventDropped,
        dragEnter: dragEnter,
        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate
      }"
    >
    </ng-template>
  `
    }]
  }], null, {
    days: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    dayHeaderClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    eventDropped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    dragEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  });
})();

class CalendarWeekViewEventComponent {
  constructor() {
    this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }

}

CalendarWeekViewEventComponent.ɵfac = function CalendarWeekViewEventComponent_Factory(t) {
  return new (t || CalendarWeekViewEventComponent)();
};

CalendarWeekViewEventComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CalendarWeekViewEventComponent,
  selectors: [["mwl-calendar-week-view-event"]],
  inputs: {
    locale: "locale",
    weekEvent: "weekEvent",
    tooltipPlacement: "tooltipPlacement",
    tooltipAppendToBody: "tooltipAppendToBody",
    tooltipDisabled: "tooltipDisabled",
    tooltipDelay: "tooltipDelay",
    customTemplate: "customTemplate",
    eventTitleTemplate: "eventTitleTemplate",
    eventActionsTemplate: "eventActionsTemplate",
    tooltipTemplate: "tooltipTemplate",
    column: "column",
    daysInWeek: "daysInWeek"
  },
  outputs: {
    eventClicked: "eventClicked"
  },
  decls: 3,
  vars: 12,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", "role", "application", 1, "cal-event", 3, "ngStyle", "mwlCalendarTooltip", "tooltipPlacement", "tooltipEvent", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "mwlClick", "mwlKeydownEnter"], [3, "event", "customTemplate"], [3, "event", "customTemplate", "view"]],
  template: function CalendarWeekViewEventComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarWeekViewEventComponent_ng_template_0_Template, 6, 26, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewEventComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunctionV"](2, _c18, [ctx.weekEvent, ctx.tooltipPlacement, ctx.eventClicked, ctx.tooltipTemplate, ctx.tooltipAppendToBody, ctx.tooltipDisabled, ctx.tooltipDelay, ctx.column, ctx.daysInWeek]));
    }
  },
  dependencies: [CalendarEventActionsComponent, CalendarEventTitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, CalendarTooltipDirective, ClickDirective, KeydownEnterDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, CalendarEventTitlePipe, CalendarA11yPipe],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarWeekViewEventComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'mwl-calendar-week-view-event',
      template: `
    <ng-template
      #defaultTemplate
      let-weekEvent="weekEvent"
      let-tooltipPlacement="tooltipPlacement"
      let-eventClicked="eventClicked"
      let-tooltipTemplate="tooltipTemplate"
      let-tooltipAppendToBody="tooltipAppendToBody"
      let-tooltipDisabled="tooltipDisabled"
      let-tooltipDelay="tooltipDelay"
      let-column="column"
      let-daysInWeek="daysInWeek"
    >
      <div
        class="cal-event"
        [ngStyle]="{
          backgroundColor: weekEvent.event.color?.secondary,
          borderColor: weekEvent.event.color?.primary
        }"
        [mwlCalendarTooltip]="
          !tooltipDisabled
            ? (weekEvent.event.title
              | calendarEventTitle
                : (daysInWeek === 1 ? 'dayTooltip' : 'weekTooltip')
                : weekEvent.tempEvent || weekEvent.event)
            : ''
        "
        [tooltipPlacement]="tooltipPlacement"
        [tooltipEvent]="weekEvent.tempEvent || weekEvent.event"
        [tooltipTemplate]="tooltipTemplate"
        [tooltipAppendToBody]="tooltipAppendToBody"
        [tooltipDelay]="tooltipDelay"
        (mwlClick)="eventClicked.emit({ sourceEvent: $event })"
        (mwlKeydownEnter)="eventClicked.emit({ sourceEvent: $event })"
        tabindex="0"
        role="application"
        [attr.aria-label]="
          { event: weekEvent.tempEvent || weekEvent.event, locale: locale }
            | calendarA11y: 'eventDescription'
        "
      >
        <mwl-calendar-event-actions
          [event]="weekEvent.tempEvent || weekEvent.event"
          [customTemplate]="eventActionsTemplate"
        >
        </mwl-calendar-event-actions>
        &ngsp;
        <mwl-calendar-event-title
          [event]="weekEvent.tempEvent || weekEvent.event"
          [customTemplate]="eventTitleTemplate"
          [view]="daysInWeek === 1 ? 'day' : 'week'"
        >
        </mwl-calendar-event-title>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        weekEvent: weekEvent,
        tooltipPlacement: tooltipPlacement,
        eventClicked: eventClicked,
        tooltipTemplate: tooltipTemplate,
        tooltipAppendToBody: tooltipAppendToBody,
        tooltipDisabled: tooltipDisabled,
        tooltipDelay: tooltipDelay,
        column: column,
        daysInWeek: daysInWeek
      }"
    >
    </ng-template>
  `
    }]
  }], null, {
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    weekEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipPlacement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipAppendToBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    eventTitleTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    eventActionsTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    column: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    daysInWeek: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    eventClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  });
})();

class CalendarWeekViewHourSegmentComponent {}

CalendarWeekViewHourSegmentComponent.ɵfac = function CalendarWeekViewHourSegmentComponent_Factory(t) {
  return new (t || CalendarWeekViewHourSegmentComponent)();
};

CalendarWeekViewHourSegmentComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CalendarWeekViewHourSegmentComponent,
  selectors: [["mwl-calendar-week-view-hour-segment"]],
  inputs: {
    segment: "segment",
    segmentHeight: "segmentHeight",
    locale: "locale",
    isTimeLabel: "isTimeLabel",
    daysInWeek: "daysInWeek",
    customTemplate: "customTemplate"
  },
  decls: 3,
  vars: 8,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cal-hour-segment", 3, "ngClass"], ["class", "cal-time", 4, "ngIf"], [1, "cal-time"]],
  template: function CalendarWeekViewHourSegmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarWeekViewHourSegmentComponent_ng_template_0_Template, 3, 13, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewHourSegmentComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction5"](2, _c19, ctx.segment, ctx.locale, ctx.segmentHeight, ctx.isTimeLabel, ctx.daysInWeek));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, CalendarA11yPipe, CalendarDatePipe],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarWeekViewHourSegmentComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'mwl-calendar-week-view-hour-segment',
      template: `
    <ng-template
      #defaultTemplate
      let-segment="segment"
      let-locale="locale"
      let-segmentHeight="segmentHeight"
      let-isTimeLabel="isTimeLabel"
      let-daysInWeek="daysInWeek"
    >
      <div
        [attr.aria-hidden]="
          {}
            | calendarA11y
              : (daysInWeek === 1
                  ? 'hideDayHourSegment'
                  : 'hideWeekHourSegment')
        "
        class="cal-hour-segment"
        [style.height.px]="segmentHeight"
        [class.cal-hour-start]="segment.isStart"
        [class.cal-after-hour-start]="!segment.isStart"
        [ngClass]="segment.cssClass"
      >
        <div class="cal-time" *ngIf="isTimeLabel">
          {{
            segment.displayDate
              | calendarDate
                : (daysInWeek === 1 ? 'dayViewHour' : 'weekViewHour')
                : locale
          }}
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        segment: segment,
        locale: locale,
        segmentHeight: segmentHeight,
        isTimeLabel: isTimeLabel,
        daysInWeek: daysInWeek
      }"
    >
    </ng-template>
  `
    }]
  }], null, {
    segment: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    segmentHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    isTimeLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    daysInWeek: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();

class CalendarWeekViewCurrentTimeMarkerComponent {
  constructor(dateAdapter, zone) {
    this.dateAdapter = dateAdapter;
    this.zone = zone;
    this.columnDate$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(undefined);
    this.marker$ = this.zone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.interval)(60 * 1000)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.startWith)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMapTo)(this.columnDate$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(columnDate => {
      const startOfDay = this.dateAdapter.setMinutes(this.dateAdapter.setHours(columnDate, this.dayStartHour), this.dayStartMinute);
      const endOfDay = this.dateAdapter.setMinutes(this.dateAdapter.setHours(columnDate, this.dayEndHour), this.dayEndMinute);
      const hourHeightModifier = this.hourSegments * this.hourSegmentHeight / (this.hourDuration || 60);
      const now = new Date();
      return {
        isVisible: this.dateAdapter.isSameDay(columnDate, now) && now >= startOfDay && now <= endOfDay,
        top: this.dateAdapter.differenceInMinutes(now, startOfDay) * hourHeightModifier
      };
    }));
  }

  ngOnChanges(changes) {
    if (changes.columnDate) {
      this.columnDate$.next(changes.columnDate.currentValue);
    }
  }

}

CalendarWeekViewCurrentTimeMarkerComponent.ɵfac = function CalendarWeekViewCurrentTimeMarkerComponent_Factory(t) {
  return new (t || CalendarWeekViewCurrentTimeMarkerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
};

CalendarWeekViewCurrentTimeMarkerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CalendarWeekViewCurrentTimeMarkerComponent,
  selectors: [["mwl-calendar-week-view-current-time-marker"]],
  inputs: {
    columnDate: "columnDate",
    dayStartHour: "dayStartHour",
    dayStartMinute: "dayStartMinute",
    dayEndHour: "dayEndHour",
    dayEndMinute: "dayEndMinute",
    hourSegments: "hourSegments",
    hourDuration: "hourDuration",
    hourSegmentHeight: "hourSegmentHeight",
    customTemplate: "customTemplate"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
  decls: 5,
  vars: 14,
  consts: [["defaultTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cal-current-time-marker", 3, "top", 4, "ngIf"], [1, "cal-current-time-marker"]],
  template: function CalendarWeekViewCurrentTimeMarkerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewCurrentTimeMarkerComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

      let tmp_1_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.customTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction7"](6, _c20, ctx.columnDate, ctx.dayStartHour, ctx.dayStartMinute, ctx.dayEndHour, ctx.dayEndMinute, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, ctx.marker$)) == null ? null : tmp_1_0.isVisible, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, ctx.marker$)) == null ? null : tmp_1_0.top));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarWeekViewCurrentTimeMarkerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'mwl-calendar-week-view-current-time-marker',
      template: `
    <ng-template
      #defaultTemplate
      let-columnDate="columnDate"
      let-dayStartHour="dayStartHour"
      let-dayStartMinute="dayStartMinute"
      let-dayEndHour="dayEndHour"
      let-dayEndMinute="dayEndMinute"
      let-isVisible="isVisible"
      let-topPx="topPx"
    >
      <div
        class="cal-current-time-marker"
        *ngIf="isVisible"
        [style.top.px]="topPx"
      ></div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        columnDate: columnDate,
        dayStartHour: dayStartHour,
        dayStartMinute: dayStartMinute,
        dayEndHour: dayEndHour,
        dayEndMinute: dayEndMinute,
        isVisible: (marker$ | async)?.isVisible,
        topPx: (marker$ | async)?.top
      }"
    >
    </ng-template>
  `
    }]
  }], function () {
    return [{
      type: DateAdapter
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, {
    columnDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    dayStartHour: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    dayStartMinute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    dayEndHour: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    dayEndMinute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    hourSegments: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    hourDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    hourSegmentHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    customTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();
/**
 * Shows all events on a given week. Example usage:
 *
 * ```typescript
 * <mwl-calendar-week-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-week-view>
 * ```
 */


class CalendarWeekViewComponent {
  /**
   * @hidden
   */
  constructor(cdr, utils, locale, dateAdapter, element) {
    this.cdr = cdr;
    this.utils = utils;
    this.dateAdapter = dateAdapter;
    this.element = element;
    /**
     * An array of events to display on view
     * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
     */

    this.events = [];
    /**
     * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
     */

    this.excludeDays = [];
    /**
     * The placement of the event tooltip
     */

    this.tooltipPlacement = 'auto';
    /**
     * Whether to append tooltips to the body or next to the trigger element
     */

    this.tooltipAppendToBody = true;
    /**
     * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
     * will be displayed immediately.
     */

    this.tooltipDelay = null;
    /**
     * The precision to display events.
     * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
     */

    this.precision = 'days';
    /**
     * Whether to snap events to a grid when dragging
     */

    this.snapDraggedEvents = true;
    /**
     * The number of segments in an hour. Must divide equally into 60.
     */

    this.hourSegments = 2;
    /**
     * The height in pixels of each hour segment
     */

    this.hourSegmentHeight = 30;
    /**
     * The minimum height in pixels of each event
     */

    this.minimumEventHeight = 30;
    /**
     * The day start hours in 24 hour time. Must be 0-23
     */

    this.dayStartHour = 0;
    /**
     * The day start minutes. Must be 0-59
     */

    this.dayStartMinute = 0;
    /**
     * The day end hours in 24 hour time. Must be 0-23
     */

    this.dayEndHour = 23;
    /**
     * The day end minutes. Must be 0-59
     */

    this.dayEndMinute = 59;
    /**
     * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
     */

    this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Called when an event title is clicked
     */

    this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Called when an event is resized or dragged and dropped
     */

    this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * An output that will be called before the view is rendered for the current week.
     * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
     */

    this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Called when an hour segment is clicked
     */

    this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * @hidden
     */

    this.allDayEventResizes = new Map();
    /**
     * @hidden
     */

    this.timeEventResizes = new Map();
    /**
     * @hidden
     */

    this.eventDragEnterByType = {
      allDay: 0,
      time: 0
    };
    /**
     * @hidden
     */

    this.dragActive = false;
    /**
     * @hidden
     */

    this.dragAlreadyMoved = false;
    /**
     * @hidden
     */

    this.calendarId = Symbol('angular calendar week view id');
    /**
     * @hidden
     */

    this.rtl = false;
    /**
     * @hidden
     */

    this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    /**
     * @hidden
     */

    this.trackByHourSegment = trackByHourSegment;
    /**
     * @hidden
     */

    this.trackByHour = trackByHour;
    /**
     * @hidden
     */

    this.trackByWeekAllDayEvent = trackByWeekAllDayEvent;
    /**
     * @hidden
     */

    this.trackByWeekTimeEvent = trackByWeekTimeEvent;
    /**
     * @hidden
     */

    this.trackByHourColumn = (index, column) => column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column;
    /**
     * @hidden
     */


    this.trackById = (index, row) => row.id;

    this.locale = locale;
  }
  /**
   * @hidden
   */


  ngOnInit() {
    if (this.refresh) {
      this.refreshSubscription = this.refresh.subscribe(() => {
        this.refreshAll();
        this.cdr.markForCheck();
      });
    }
  }
  /**
   * @hidden
   */


  ngOnChanges(changes) {
    const refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays || changes.daysInWeek || changes.weekStartsOn;
    const refreshBody = changes.viewDate || changes.dayStartHour || changes.dayStartMinute || changes.dayEndHour || changes.dayEndMinute || changes.hourSegments || changes.hourDuration || changes.weekStartsOn || changes.weekendDays || changes.excludeDays || changes.hourSegmentHeight || changes.events || changes.daysInWeek || changes.minimumEventHeight;

    if (refreshHeader) {
      this.refreshHeader();
    }

    if (changes.events) {
      validateEvents(this.events);
    }

    if (refreshBody) {
      this.refreshBody();
    }

    if (refreshHeader || refreshBody) {
      this.emitBeforeViewRender();
    }
  }
  /**
   * @hidden
   */


  ngOnDestroy() {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }
  /**
   * @hidden
   */


  ngAfterViewInit() {
    this.rtl = typeof window !== 'undefined' && getComputedStyle(this.element.nativeElement).direction === 'rtl';
    this.cdr.detectChanges();
  }
  /**
   * @hidden
   */


  timeEventResizeStarted(eventsContainer, timeEvent, resizeEvent) {
    this.timeEventResizes.set(timeEvent.event, resizeEvent);
    this.resizeStarted(eventsContainer, timeEvent);
  }
  /**
   * @hidden
   */


  timeEventResizing(timeEvent, resizeEvent) {
    this.timeEventResizes.set(timeEvent.event, resizeEvent);
    const adjustedEvents = new Map();
    const tempEvents = [...this.events];
    this.timeEventResizes.forEach((lastResizeEvent, event) => {
      const newEventDates = this.getTimeEventResizedDates(event, lastResizeEvent);
      const adjustedEvent = Object.assign(Object.assign({}, event), newEventDates);
      adjustedEvents.set(adjustedEvent, event);
      const eventIndex = tempEvents.indexOf(event);
      tempEvents[eventIndex] = adjustedEvent;
    });
    this.restoreOriginalEvents(tempEvents, adjustedEvents, true);
  }
  /**
   * @hidden
   */


  timeEventResizeEnded(timeEvent) {
    this.view = this.getWeekView(this.events);
    const lastResizeEvent = this.timeEventResizes.get(timeEvent.event);

    if (lastResizeEvent) {
      this.timeEventResizes.delete(timeEvent.event);
      const newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
      this.eventTimesChanged.emit({
        newStart: newEventDates.start,
        newEnd: newEventDates.end,
        event: timeEvent.event,
        type: CalendarEventTimesChangedEventType.Resize
      });
    }
  }
  /**
   * @hidden
   */


  allDayEventResizeStarted(allDayEventsContainer, allDayEvent, resizeEvent) {
    this.allDayEventResizes.set(allDayEvent, {
      originalOffset: allDayEvent.offset,
      originalSpan: allDayEvent.span,
      edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
    });
    this.resizeStarted(allDayEventsContainer, allDayEvent, this.getDayColumnWidth(allDayEventsContainer));
  }
  /**
   * @hidden
   */


  allDayEventResizing(allDayEvent, resizeEvent, dayWidth) {
    const currentResize = this.allDayEventResizes.get(allDayEvent);
    const modifier = this.rtl ? -1 : 1;

    if (typeof resizeEvent.edges.left !== 'undefined') {
      const diff = Math.round(+resizeEvent.edges.left / dayWidth) * modifier;
      allDayEvent.offset = currentResize.originalOffset + diff;
      allDayEvent.span = currentResize.originalSpan - diff;
    } else if (typeof resizeEvent.edges.right !== 'undefined') {
      const diff = Math.round(+resizeEvent.edges.right / dayWidth) * modifier;
      allDayEvent.span = currentResize.originalSpan + diff;
    }
  }
  /**
   * @hidden
   */


  allDayEventResizeEnded(allDayEvent) {
    const currentResize = this.allDayEventResizes.get(allDayEvent);

    if (currentResize) {
      const allDayEventResizingBeforeStart = currentResize.edge === 'left';
      let daysDiff;

      if (allDayEventResizingBeforeStart) {
        daysDiff = allDayEvent.offset - currentResize.originalOffset;
      } else {
        daysDiff = allDayEvent.span - currentResize.originalSpan;
      }

      allDayEvent.offset = currentResize.originalOffset;
      allDayEvent.span = currentResize.originalSpan;
      const newDates = this.getAllDayEventResizedDates(allDayEvent.event, daysDiff, allDayEventResizingBeforeStart);
      this.eventTimesChanged.emit({
        newStart: newDates.start,
        newEnd: newDates.end,
        event: allDayEvent.event,
        type: CalendarEventTimesChangedEventType.Resize
      });
      this.allDayEventResizes.delete(allDayEvent);
    }
  }
  /**
   * @hidden
   */


  getDayColumnWidth(eventRowContainer) {
    return Math.floor(eventRowContainer.offsetWidth / this.days.length);
  }
  /**
   * @hidden
   */


  dateDragEnter(date) {
    this.lastDragEnterDate = date;
  }
  /**
   * @hidden
   */


  eventDropped(dropEvent, date, allDay) {
    if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId) && this.lastDragEnterDate.getTime() === date.getTime() && (!this.snapDraggedEvents || dropEvent.dropData.event !== this.lastDraggedEvent)) {
      this.eventTimesChanged.emit({
        type: CalendarEventTimesChangedEventType.Drop,
        event: dropEvent.dropData.event,
        newStart: date,
        allDay
      });
    }

    this.lastDraggedEvent = null;
  }
  /**
   * @hidden
   */


  dragEnter(type) {
    this.eventDragEnterByType[type]++;
  }
  /**
   * @hidden
   */


  dragLeave(type) {
    this.eventDragEnterByType[type]--;
  }
  /**
   * @hidden
   */


  dragStarted(eventsContainerElement, eventElement, event, useY) {
    this.dayColumnWidth = this.getDayColumnWidth(eventsContainerElement);
    const dragHelper = new CalendarDragHelper(eventsContainerElement, eventElement);

    this.validateDrag = ({
      x,
      y,
      transform
    }) => {
      const isAllowed = this.allDayEventResizes.size === 0 && this.timeEventResizes.size === 0 && dragHelper.validateDrag({
        x,
        y,
        snapDraggedEvents: this.snapDraggedEvents,
        dragAlreadyMoved: this.dragAlreadyMoved,
        transform
      });

      if (isAllowed && this.validateEventTimesChanged) {
        const newEventTimes = this.getDragMovedEventTimes(event, {
          x,
          y
        }, this.dayColumnWidth, useY);
        return this.validateEventTimesChanged({
          type: CalendarEventTimesChangedEventType.Drag,
          event: event.event,
          newStart: newEventTimes.start,
          newEnd: newEventTimes.end
        });
      }

      return isAllowed;
    };

    this.dragActive = true;
    this.dragAlreadyMoved = false;
    this.lastDraggedEvent = null;
    this.eventDragEnterByType = {
      allDay: 0,
      time: 0
    };

    if (!this.snapDraggedEvents && useY) {
      this.view.hourColumns.forEach(column => {
        const linkedEvent = column.events.find(columnEvent => columnEvent.event === event.event && columnEvent !== event); // hide any linked events while dragging

        if (linkedEvent) {
          linkedEvent.width = 0;
          linkedEvent.height = 0;
        }
      });
    }

    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */


  dragMove(dayEvent, dragEvent) {
    const newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
    const originalEvent = dayEvent.event;
    const adjustedEvent = Object.assign(Object.assign({}, originalEvent), newEventTimes);
    const tempEvents = this.events.map(event => {
      if (event === originalEvent) {
        return adjustedEvent;
      }

      return event;
    });
    this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent, originalEvent]]), this.snapDraggedEvents);
    this.dragAlreadyMoved = true;
  }
  /**
   * @hidden
   */


  allDayEventDragMove() {
    this.dragAlreadyMoved = true;
  }
  /**
   * @hidden
   */


  dragEnded(weekEvent, dragEndEvent, dayWidth, useY = false) {
    this.view = this.getWeekView(this.events);
    this.dragActive = false;
    this.validateDrag = null;
    const {
      start,
      end
    } = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY);

    if ((this.snapDraggedEvents || this.eventDragEnterByType[useY ? 'time' : 'allDay'] > 0) && isDraggedWithinPeriod(start, end, this.view.period)) {
      this.lastDraggedEvent = weekEvent.event;
      this.eventTimesChanged.emit({
        newStart: start,
        newEnd: end,
        event: weekEvent.event,
        type: CalendarEventTimesChangedEventType.Drag,
        allDay: !useY
      });
    }
  }

  refreshHeader() {
    this.days = this.utils.getWeekViewHeader(Object.assign({
      viewDate: this.viewDate,
      weekStartsOn: this.weekStartsOn,
      excluded: this.excludeDays,
      weekendDays: this.weekendDays
    }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
  }

  refreshBody() {
    this.view = this.getWeekView(this.events);
  }

  refreshAll() {
    this.refreshHeader();
    this.refreshBody();
    this.emitBeforeViewRender();
  }

  emitBeforeViewRender() {
    if (this.days && this.view) {
      this.beforeViewRender.emit(Object.assign({
        header: this.days
      }, this.view));
    }
  }

  getWeekView(events) {
    return this.utils.getWeekView(Object.assign({
      events,
      viewDate: this.viewDate,
      weekStartsOn: this.weekStartsOn,
      excluded: this.excludeDays,
      precision: this.precision,
      absolutePositionedEvents: true,
      hourSegments: this.hourSegments,
      hourDuration: this.hourDuration,
      dayStart: {
        hour: this.dayStartHour,
        minute: this.dayStartMinute
      },
      dayEnd: {
        hour: this.dayEndHour,
        minute: this.dayEndMinute
      },
      segmentHeight: this.hourSegmentHeight,
      weekendDays: this.weekendDays,
      minimumEventHeight: this.minimumEventHeight
    }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
  }

  getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY) {
    const daysDragged = roundToNearest(dragEndEvent.x, dayWidth) / dayWidth * (this.rtl ? -1 : 1);
    const minutesMoved = useY ? getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration) : 0;
    const start = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.start, daysDragged, this.excludeDays), minutesMoved);
    let end;

    if (weekEvent.event.end) {
      end = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.end, daysDragged, this.excludeDays), minutesMoved);
    }

    return {
      start,
      end
    };
  }

  restoreOriginalEvents(tempEvents, adjustedEvents, snapDraggedEvents = true) {
    const previousView = this.view;

    if (snapDraggedEvents) {
      this.view = this.getWeekView(tempEvents);
    }

    const adjustedEventsArray = tempEvents.filter(event => adjustedEvents.has(event));
    this.view.hourColumns.forEach((column, columnIndex) => {
      previousView.hourColumns[columnIndex].hours.forEach((hour, hourIndex) => {
        hour.segments.forEach((segment, segmentIndex) => {
          column.hours[hourIndex].segments[segmentIndex].cssClass = segment.cssClass;
        });
      });
      adjustedEventsArray.forEach(adjustedEvent => {
        const originalEvent = adjustedEvents.get(adjustedEvent);
        const existingColumnEvent = column.events.find(columnEvent => columnEvent.event === (snapDraggedEvents ? adjustedEvent : originalEvent));

        if (existingColumnEvent) {
          // restore the original event so trackBy kicks in and the dom isn't changed
          existingColumnEvent.event = originalEvent;
          existingColumnEvent['tempEvent'] = adjustedEvent;

          if (!snapDraggedEvents) {
            existingColumnEvent.height = 0;
            existingColumnEvent.width = 0;
          }
        } else {
          // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
          const event = {
            event: originalEvent,
            left: 0,
            top: 0,
            height: 0,
            width: 0,
            startsBeforeDay: false,
            endsAfterDay: false,
            tempEvent: adjustedEvent
          };
          column.events.push(event);
        }
      });
    });
    adjustedEvents.clear();
  }

  getTimeEventResizedDates(calendarEvent, resizeEvent) {
    const newEventDates = {
      start: calendarEvent.start,
      end: getDefaultEventEnd(this.dateAdapter, calendarEvent, this.minimumEventHeight)
    };

    const {
      end
    } = calendarEvent,
          eventWithoutEnd = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__rest)(calendarEvent, ["end"]);

    const smallestResizes = {
      start: this.dateAdapter.addMinutes(newEventDates.end, this.minimumEventHeight * -1),
      end: getDefaultEventEnd(this.dateAdapter, eventWithoutEnd, this.minimumEventHeight)
    };
    const modifier = this.rtl ? -1 : 1;

    if (typeof resizeEvent.edges.left !== 'undefined') {
      const daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth) * modifier;
      const newStart = addDaysWithExclusions(this.dateAdapter, newEventDates.start, daysDiff, this.excludeDays);

      if (newStart < smallestResizes.start) {
        newEventDates.start = newStart;
      } else {
        newEventDates.start = smallestResizes.start;
      }
    } else if (typeof resizeEvent.edges.right !== 'undefined') {
      const daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth) * modifier;
      const newEnd = addDaysWithExclusions(this.dateAdapter, newEventDates.end, daysDiff, this.excludeDays);

      if (newEnd > smallestResizes.end) {
        newEventDates.end = newEnd;
      } else {
        newEventDates.end = smallestResizes.end;
      }
    }

    if (typeof resizeEvent.edges.top !== 'undefined') {
      const minutesMoved = getMinutesMoved(resizeEvent.edges.top, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration);
      const newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);

      if (newStart < smallestResizes.start) {
        newEventDates.start = newStart;
      } else {
        newEventDates.start = smallestResizes.start;
      }
    } else if (typeof resizeEvent.edges.bottom !== 'undefined') {
      const minutesMoved = getMinutesMoved(resizeEvent.edges.bottom, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize, this.hourDuration);
      const newEnd = this.dateAdapter.addMinutes(newEventDates.end, minutesMoved);

      if (newEnd > smallestResizes.end) {
        newEventDates.end = newEnd;
      } else {
        newEventDates.end = smallestResizes.end;
      }
    }

    return newEventDates;
  }

  resizeStarted(eventsContainer, event, dayWidth) {
    this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
    const resizeHelper = new CalendarResizeHelper(eventsContainer, dayWidth, this.rtl);

    this.validateResize = ({
      rectangle,
      edges
    }) => {
      const isWithinBoundary = resizeHelper.validateResize({
        rectangle: Object.assign({}, rectangle),
        edges
      });

      if (isWithinBoundary && this.validateEventTimesChanged) {
        let newEventDates;

        if (!dayWidth) {
          newEventDates = this.getTimeEventResizedDates(event.event, {
            rectangle,
            edges
          });
        } else {
          const modifier = this.rtl ? -1 : 1;

          if (typeof edges.left !== 'undefined') {
            const diff = Math.round(+edges.left / dayWidth) * modifier;
            newEventDates = this.getAllDayEventResizedDates(event.event, diff, !this.rtl);
          } else {
            const diff = Math.round(+edges.right / dayWidth) * modifier;
            newEventDates = this.getAllDayEventResizedDates(event.event, diff, this.rtl);
          }
        }

        return this.validateEventTimesChanged({
          type: CalendarEventTimesChangedEventType.Resize,
          event: event.event,
          newStart: newEventDates.start,
          newEnd: newEventDates.end
        });
      }

      return isWithinBoundary;
    };

    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */


  getAllDayEventResizedDates(event, daysDiff, beforeStart) {
    let start = event.start;
    let end = event.end || event.start;

    if (beforeStart) {
      start = addDaysWithExclusions(this.dateAdapter, start, daysDiff, this.excludeDays);
    } else {
      end = addDaysWithExclusions(this.dateAdapter, end, daysDiff, this.excludeDays);
    }

    return {
      start,
      end
    };
  }

}

CalendarWeekViewComponent.ɵfac = function CalendarWeekViewComponent_Factory(t) {
  return new (t || CalendarWeekViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](CalendarUtils), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
};

CalendarWeekViewComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CalendarWeekViewComponent,
  selectors: [["mwl-calendar-week-view"]],
  inputs: {
    viewDate: "viewDate",
    events: "events",
    excludeDays: "excludeDays",
    refresh: "refresh",
    locale: "locale",
    tooltipPlacement: "tooltipPlacement",
    tooltipTemplate: "tooltipTemplate",
    tooltipAppendToBody: "tooltipAppendToBody",
    tooltipDelay: "tooltipDelay",
    weekStartsOn: "weekStartsOn",
    headerTemplate: "headerTemplate",
    eventTemplate: "eventTemplate",
    eventTitleTemplate: "eventTitleTemplate",
    eventActionsTemplate: "eventActionsTemplate",
    precision: "precision",
    weekendDays: "weekendDays",
    snapDraggedEvents: "snapDraggedEvents",
    hourSegments: "hourSegments",
    hourDuration: "hourDuration",
    hourSegmentHeight: "hourSegmentHeight",
    minimumEventHeight: "minimumEventHeight",
    dayStartHour: "dayStartHour",
    dayStartMinute: "dayStartMinute",
    dayEndHour: "dayEndHour",
    dayEndMinute: "dayEndMinute",
    hourSegmentTemplate: "hourSegmentTemplate",
    eventSnapSize: "eventSnapSize",
    allDayEventsLabelTemplate: "allDayEventsLabelTemplate",
    daysInWeek: "daysInWeek",
    currentTimeMarkerTemplate: "currentTimeMarkerTemplate",
    validateEventTimesChanged: "validateEventTimesChanged"
  },
  outputs: {
    dayHeaderClicked: "dayHeaderClicked",
    eventClicked: "eventClicked",
    eventTimesChanged: "eventTimesChanged",
    beforeViewRender: "beforeViewRender",
    hourSegmentClicked: "hourSegmentClicked"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
  decls: 8,
  vars: 9,
  consts: [["role", "grid", 1, "cal-week-view"], [3, "days", "locale", "customTemplate", "dayHeaderClicked", "eventDropped", "dragEnter"], ["class", "cal-all-day-events", "mwlDroppable", "", 3, "dragEnter", "dragLeave", 4, "ngIf"], ["mwlDroppable", "", 1, "cal-time-events", 3, "dragEnter", "dragLeave"], ["class", "cal-time-label-column", 4, "ngIf"], [1, "cal-day-columns"], ["dayColumns", ""], ["class", "cal-day-column", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", 1, "cal-all-day-events", 3, "dragEnter", "dragLeave"], ["allDayEventsContainer", ""], [1, "cal-time-label-column", 3, "ngTemplateOutlet"], ["class", "cal-day-column", "mwlDroppable", "", "dragOverClass", "cal-drag-over", 3, "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cal-events-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragOverClass", "cal-drag-over", 1, "cal-day-column", 3, "drop", "dragEnter"], [1, "cal-events-row"], ["eventRowContainer", ""], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-week", "cal-ends-within-week", "ngClass", "width", "marginLeft", "marginRight", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "touchStartLongPress", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "resizeSnapGrid", "validateResize", "dropData", "dragAxis", "dragSnapGrid", "validateDrag", "touchStartLongPress", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], ["event", ""], ["class", "cal-resize-handle cal-resize-handle-before-start", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "daysInWeek", "eventClicked"], ["class", "cal-resize-handle cal-resize-handle-after-end", "mwlResizeHandle", "", 3, "resizeEdges", 4, "ngIf"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-before-start", 3, "resizeEdges"], ["mwlResizeHandle", "", 1, "cal-resize-handle", "cal-resize-handle-after-end", 3, "resizeEdges"], [1, "cal-time-label-column"], ["class", "cal-hour", 3, "cal-hour-odd", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cal-hour"], [3, "height", "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "segment", "segmentHeight", "locale", "customTemplate", "isTimeLabel", "daysInWeek"], [1, "cal-day-column"], [3, "columnDate", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "hourSegments", "hourDuration", "hourSegmentHeight", "customTemplate"], [1, "cal-events-container"], ["class", "cal-event-container", "mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 3, "cal-draggable", "cal-starts-within-day", "cal-ends-within-day", "ngClass", "hidden", "top", "height", "left", "width", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "touchStartLongPress", "ghostDragEnabled", "ghostElementTemplate", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlResizable", "", "mwlDraggable", "", "dragActiveClass", "cal-drag-active", 1, "cal-event-container", 3, "ngClass", "hidden", "resizeSnapGrid", "validateResize", "allowNegativeResizes", "dropData", "dragAxis", "dragSnapGrid", "touchStartLongPress", "ghostDragEnabled", "ghostElementTemplate", "validateDrag", "resizeStart", "resizing", "resizeEnd", "dragStart", "dragging", "dragEnd"], [3, "ngTemplateOutlet"], ["weekEventTemplate", ""], [3, "locale", "weekEvent", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDisabled", "tooltipDelay", "customTemplate", "eventTitleTemplate", "eventActionsTemplate", "column", "daysInWeek", "eventClicked"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "height", "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mwlDroppable", "", "dragActiveClass", "cal-drag-active", 3, "segment", "segmentHeight", "locale", "customTemplate", "daysInWeek", "clickListenerDisabled", "dragOverClass", "isTimeLabel", "mwlClick", "drop", "dragEnter"]],
  template: function CalendarWeekViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mwl-calendar-week-view-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dayHeaderClicked", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dayHeaderClicked_1_listener($event) {
        return ctx.dayHeaderClicked.emit($event);
      })("eventDropped", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_eventDropped_1_listener($event) {
        return ctx.eventDropped({
          dropData: $event
        }, $event.newStart, true);
      })("dragEnter", function CalendarWeekViewComponent_Template_mwl_calendar_week_view_header_dragEnter_1_listener($event) {
        return ctx.dateDragEnter($event.date);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarWeekViewComponent_div_2_Template, 6, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dragEnter", function CalendarWeekViewComponent_Template_div_dragEnter_3_listener() {
        return ctx.dragEnter("time");
      })("dragLeave", function CalendarWeekViewComponent_Template_div_dragLeave_3_listener() {
        return ctx.dragLeave("time");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CalendarWeekViewComponent_div_4_Template, 2, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CalendarWeekViewComponent_div_7_Template, 5, 13, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("days", ctx.days)("locale", ctx.locale)("customTemplate", ctx.headerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.view.allDayEventRows.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.view.hourColumns.length > 0 && ctx.daysInWeek !== 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cal-resize-active", ctx.timeEventResizes.size > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.view.hourColumns)("ngForTrackBy", ctx.trackByHourColumn);
    }
  },
  dependencies: [CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DroppableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, angular_resizable_element__WEBPACK_IMPORTED_MODULE_18__.ResizableDirective, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DraggableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, angular_resizable_element__WEBPACK_IMPORTED_MODULE_18__.ResizeHandleDirective, ClickDirective],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarWeekViewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'mwl-calendar-week-view',
      template: `
    <div class="cal-week-view" role="grid">
      <mwl-calendar-week-view-header
        [days]="days"
        [locale]="locale"
        [customTemplate]="headerTemplate"
        (dayHeaderClicked)="dayHeaderClicked.emit($event)"
        (eventDropped)="
          eventDropped({ dropData: $event }, $event.newStart, true)
        "
        (dragEnter)="dateDragEnter($event.date)"
      >
      </mwl-calendar-week-view-header>
      <div
        class="cal-all-day-events"
        #allDayEventsContainer
        *ngIf="view.allDayEventRows.length > 0"
        mwlDroppable
        (dragEnter)="dragEnter('allDay')"
        (dragLeave)="dragLeave('allDay')"
      >
        <div class="cal-day-columns">
          <div
            class="cal-time-label-column"
            [ngTemplateOutlet]="allDayEventsLabelTemplate"
          ></div>
          <div
            class="cal-day-column"
            *ngFor="let day of days; trackBy: trackByWeekDayHeaderDate"
            mwlDroppable
            dragOverClass="cal-drag-over"
            (drop)="eventDropped($event, day.date, true)"
            (dragEnter)="dateDragEnter(day.date)"
          ></div>
        </div>
        <div
          *ngFor="let eventRow of view.allDayEventRows; trackBy: trackById"
          #eventRowContainer
          class="cal-events-row"
        >
          <div
            *ngFor="
              let allDayEvent of eventRow.row;
              trackBy: trackByWeekAllDayEvent
            "
            #event
            class="cal-event-container"
            [class.cal-draggable]="
              allDayEvent.event.draggable && allDayEventResizes.size === 0
            "
            [class.cal-starts-within-week]="!allDayEvent.startsBeforeWeek"
            [class.cal-ends-within-week]="!allDayEvent.endsAfterWeek"
            [ngClass]="allDayEvent.event?.cssClass"
            [style.width.%]="(100 / days.length) * allDayEvent.span"
            [style.marginLeft.%]="
              rtl ? null : (100 / days.length) * allDayEvent.offset
            "
            [style.marginRight.%]="
              rtl
                ? (100 / days.length) * (days.length - allDayEvent.offset) * -1
                : null
            "
            mwlResizable
            [resizeSnapGrid]="{ left: dayColumnWidth, right: dayColumnWidth }"
            [validateResize]="validateResize"
            (resizeStart)="
              allDayEventResizeStarted(eventRowContainer, allDayEvent, $event)
            "
            (resizing)="
              allDayEventResizing(allDayEvent, $event, dayColumnWidth)
            "
            (resizeEnd)="allDayEventResizeEnded(allDayEvent)"
            mwlDraggable
            dragActiveClass="cal-drag-active"
            [dropData]="{ event: allDayEvent.event, calendarId: calendarId }"
            [dragAxis]="{
              x: allDayEvent.event.draggable && allDayEventResizes.size === 0,
              y:
                !snapDraggedEvents &&
                allDayEvent.event.draggable &&
                allDayEventResizes.size === 0
            }"
            [dragSnapGrid]="snapDraggedEvents ? { x: dayColumnWidth } : {}"
            [validateDrag]="validateDrag"
            [touchStartLongPress]="{ delay: 300, delta: 30 }"
            (dragStart)="
              dragStarted(eventRowContainer, event, allDayEvent, false)
            "
            (dragging)="allDayEventDragMove()"
            (dragEnd)="dragEnded(allDayEvent, $event, dayColumnWidth)"
          >
            <div
              class="cal-resize-handle cal-resize-handle-before-start"
              *ngIf="
                allDayEvent.event?.resizable?.beforeStart &&
                !allDayEvent.startsBeforeWeek
              "
              mwlResizeHandle
              [resizeEdges]="{ left: true }"
            ></div>
            <mwl-calendar-week-view-event
              [locale]="locale"
              [weekEvent]="allDayEvent"
              [tooltipPlacement]="tooltipPlacement"
              [tooltipTemplate]="tooltipTemplate"
              [tooltipAppendToBody]="tooltipAppendToBody"
              [tooltipDelay]="tooltipDelay"
              [customTemplate]="eventTemplate"
              [eventTitleTemplate]="eventTitleTemplate"
              [eventActionsTemplate]="eventActionsTemplate"
              [daysInWeek]="daysInWeek"
              (eventClicked)="
                eventClicked.emit({
                  event: allDayEvent.event,
                  sourceEvent: $event.sourceEvent
                })
              "
            >
            </mwl-calendar-week-view-event>
            <div
              class="cal-resize-handle cal-resize-handle-after-end"
              *ngIf="
                allDayEvent.event?.resizable?.afterEnd &&
                !allDayEvent.endsAfterWeek
              "
              mwlResizeHandle
              [resizeEdges]="{ right: true }"
            ></div>
          </div>
        </div>
      </div>
      <div
        class="cal-time-events"
        mwlDroppable
        (dragEnter)="dragEnter('time')"
        (dragLeave)="dragLeave('time')"
      >
        <div
          class="cal-time-label-column"
          *ngIf="view.hourColumns.length > 0 && daysInWeek !== 1"
        >
          <div
            *ngFor="
              let hour of view.hourColumns[0].hours;
              trackBy: trackByHour;
              let odd = odd
            "
            class="cal-hour"
            [class.cal-hour-odd]="odd"
          >
            <mwl-calendar-week-view-hour-segment
              *ngFor="let segment of hour.segments; trackBy: trackByHourSegment"
              [style.height.px]="hourSegmentHeight"
              [segment]="segment"
              [segmentHeight]="hourSegmentHeight"
              [locale]="locale"
              [customTemplate]="hourSegmentTemplate"
              [isTimeLabel]="true"
              [daysInWeek]="daysInWeek"
            >
            </mwl-calendar-week-view-hour-segment>
          </div>
        </div>
        <div
          class="cal-day-columns"
          [class.cal-resize-active]="timeEventResizes.size > 0"
          #dayColumns
        >
          <div
            class="cal-day-column"
            *ngFor="let column of view.hourColumns; trackBy: trackByHourColumn"
          >
            <mwl-calendar-week-view-current-time-marker
              [columnDate]="column.date"
              [dayStartHour]="dayStartHour"
              [dayStartMinute]="dayStartMinute"
              [dayEndHour]="dayEndHour"
              [dayEndMinute]="dayEndMinute"
              [hourSegments]="hourSegments"
              [hourDuration]="hourDuration"
              [hourSegmentHeight]="hourSegmentHeight"
              [customTemplate]="currentTimeMarkerTemplate"
            ></mwl-calendar-week-view-current-time-marker>
            <div class="cal-events-container">
              <div
                *ngFor="
                  let timeEvent of column.events;
                  trackBy: trackByWeekTimeEvent
                "
                #event
                class="cal-event-container"
                [class.cal-draggable]="
                  timeEvent.event.draggable && timeEventResizes.size === 0
                "
                [class.cal-starts-within-day]="!timeEvent.startsBeforeDay"
                [class.cal-ends-within-day]="!timeEvent.endsAfterDay"
                [ngClass]="timeEvent.event.cssClass"
                [hidden]="timeEvent.height === 0 && timeEvent.width === 0"
                [style.top.px]="timeEvent.top"
                [style.height.px]="timeEvent.height"
                [style.left.%]="timeEvent.left"
                [style.width.%]="timeEvent.width"
                mwlResizable
                [resizeSnapGrid]="{
                  left: dayColumnWidth,
                  right: dayColumnWidth,
                  top: eventSnapSize || hourSegmentHeight,
                  bottom: eventSnapSize || hourSegmentHeight
                }"
                [validateResize]="validateResize"
                [allowNegativeResizes]="true"
                (resizeStart)="
                  timeEventResizeStarted(dayColumns, timeEvent, $event)
                "
                (resizing)="timeEventResizing(timeEvent, $event)"
                (resizeEnd)="timeEventResizeEnded(timeEvent)"
                mwlDraggable
                dragActiveClass="cal-drag-active"
                [dropData]="{ event: timeEvent.event, calendarId: calendarId }"
                [dragAxis]="{
                  x: timeEvent.event.draggable && timeEventResizes.size === 0,
                  y: timeEvent.event.draggable && timeEventResizes.size === 0
                }"
                [dragSnapGrid]="
                  snapDraggedEvents
                    ? {
                        x: dayColumnWidth,
                        y: eventSnapSize || hourSegmentHeight
                      }
                    : {}
                "
                [touchStartLongPress]="{ delay: 300, delta: 30 }"
                [ghostDragEnabled]="!snapDraggedEvents"
                [ghostElementTemplate]="weekEventTemplate"
                [validateDrag]="validateDrag"
                (dragStart)="dragStarted(dayColumns, event, timeEvent, true)"
                (dragging)="dragMove(timeEvent, $event)"
                (dragEnd)="dragEnded(timeEvent, $event, dayColumnWidth, true)"
              >
                <div
                  class="cal-resize-handle cal-resize-handle-before-start"
                  *ngIf="
                    timeEvent.event?.resizable?.beforeStart &&
                    !timeEvent.startsBeforeDay
                  "
                  mwlResizeHandle
                  [resizeEdges]="{
                    left: true,
                    top: true
                  }"
                ></div>
                <ng-template
                  [ngTemplateOutlet]="weekEventTemplate"
                ></ng-template>
                <ng-template #weekEventTemplate>
                  <mwl-calendar-week-view-event
                    [locale]="locale"
                    [weekEvent]="timeEvent"
                    [tooltipPlacement]="tooltipPlacement"
                    [tooltipTemplate]="tooltipTemplate"
                    [tooltipAppendToBody]="tooltipAppendToBody"
                    [tooltipDisabled]="dragActive || timeEventResizes.size > 0"
                    [tooltipDelay]="tooltipDelay"
                    [customTemplate]="eventTemplate"
                    [eventTitleTemplate]="eventTitleTemplate"
                    [eventActionsTemplate]="eventActionsTemplate"
                    [column]="column"
                    [daysInWeek]="daysInWeek"
                    (eventClicked)="
                      eventClicked.emit({
                        event: timeEvent.event,
                        sourceEvent: $event.sourceEvent
                      })
                    "
                  >
                  </mwl-calendar-week-view-event>
                </ng-template>
                <div
                  class="cal-resize-handle cal-resize-handle-after-end"
                  *ngIf="
                    timeEvent.event?.resizable?.afterEnd &&
                    !timeEvent.endsAfterDay
                  "
                  mwlResizeHandle
                  [resizeEdges]="{
                    right: true,
                    bottom: true
                  }"
                ></div>
              </div>
            </div>

            <div
              *ngFor="
                let hour of column.hours;
                trackBy: trackByHour;
                let odd = odd
              "
              class="cal-hour"
              [class.cal-hour-odd]="odd"
            >
              <mwl-calendar-week-view-hour-segment
                *ngFor="
                  let segment of hour.segments;
                  trackBy: trackByHourSegment
                "
                [style.height.px]="hourSegmentHeight"
                [segment]="segment"
                [segmentHeight]="hourSegmentHeight"
                [locale]="locale"
                [customTemplate]="hourSegmentTemplate"
                [daysInWeek]="daysInWeek"
                (mwlClick)="
                  hourSegmentClicked.emit({
                    date: segment.date,
                    sourceEvent: $event
                  })
                "
                [clickListenerDisabled]="
                  hourSegmentClicked.observers.length === 0
                "
                mwlDroppable
                [dragOverClass]="
                  !dragActive || !snapDraggedEvents ? 'cal-drag-over' : null
                "
                dragActiveClass="cal-drag-active"
                (drop)="eventDropped($event, segment.date, false)"
                (dragEnter)="dateDragEnter(segment.date)"
                [isTimeLabel]="daysInWeek === 1"
              >
              </mwl-calendar-week-view-hour-segment>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
    }, {
      type: CalendarUtils
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID]
      }]
    }, {
      type: DateAdapter
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }];
  }, {
    viewDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    events: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    excludeDays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    refresh: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipPlacement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipAppendToBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    weekStartsOn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    headerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    eventTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    eventTitleTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    eventActionsTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    precision: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    weekendDays: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    snapDraggedEvents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    hourSegments: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    hourDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    hourSegmentHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    minimumEventHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    dayStartHour: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    dayStartMinute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    dayEndHour: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    dayEndMinute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    hourSegmentTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    eventSnapSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    allDayEventsLabelTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    daysInWeek: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    currentTimeMarkerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    validateEventTimesChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    dayHeaderClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    eventClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    eventTimesChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    beforeViewRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    hourSegmentClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  });
})();

class CalendarWeekModule {}

CalendarWeekModule.ɵfac = function CalendarWeekModule_Factory(t) {
  return new (t || CalendarWeekModule)();
};

CalendarWeekModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: CalendarWeekModule,
  declarations: [CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, angular_resizable_element__WEBPACK_IMPORTED_MODULE_18__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule, CalendarCommonModule],
  exports: [angular_resizable_element__WEBPACK_IMPORTED_MODULE_18__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule, CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent]
});
CalendarWeekModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, angular_resizable_element__WEBPACK_IMPORTED_MODULE_18__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule, CalendarCommonModule], angular_resizable_element__WEBPACK_IMPORTED_MODULE_18__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarWeekModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, angular_resizable_element__WEBPACK_IMPORTED_MODULE_18__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule, CalendarCommonModule],
      declarations: [CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent],
      exports: [angular_resizable_element__WEBPACK_IMPORTED_MODULE_18__.ResizableModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_9__.DragAndDropModule, CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent]
    }]
  }], null, null);
})();
/**
 * Shows all events on a given day. Example usage:
 *
 * ```typescript
 * <mwl-calendar-day-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-day-view>
 * ```
 */


class CalendarDayViewComponent {
  constructor() {
    /**
     * An array of events to display on view
     * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
     */
    this.events = [];
    /**
     * The number of segments in an hour. Must divide equally into 60.
     */

    this.hourSegments = 2;
    /**
     * The height in pixels of each hour segment
     */

    this.hourSegmentHeight = 30;
    /**
     * The minimum height in pixels of each event
     */

    this.minimumEventHeight = 30;
    /**
     * The day start hours in 24 hour time. Must be 0-23
     */

    this.dayStartHour = 0;
    /**
     * The day start minutes. Must be 0-59
     */

    this.dayStartMinute = 0;
    /**
     * The day end hours in 24 hour time. Must be 0-23
     */

    this.dayEndHour = 23;
    /**
     * The day end minutes. Must be 0-59
     */

    this.dayEndMinute = 59;
    /**
     * The placement of the event tooltip
     */

    this.tooltipPlacement = 'auto';
    /**
     * Whether to append tooltips to the body or next to the trigger element
     */

    this.tooltipAppendToBody = true;
    /**
     * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
     * will be displayed immediately.
     */

    this.tooltipDelay = null;
    /**
     * Whether to snap events to a grid when dragging
     */

    this.snapDraggedEvents = true;
    /**
     * Called when an event title is clicked
     */

    this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Called when an hour segment is clicked
     */

    this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Called when an event is resized or dragged and dropped
     */

    this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * An output that will be called before the view is rendered for the current day.
     * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
     */

    this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }

}

CalendarDayViewComponent.ɵfac = function CalendarDayViewComponent_Factory(t) {
  return new (t || CalendarDayViewComponent)();
};

CalendarDayViewComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CalendarDayViewComponent,
  selectors: [["mwl-calendar-day-view"]],
  inputs: {
    viewDate: "viewDate",
    events: "events",
    hourSegments: "hourSegments",
    hourSegmentHeight: "hourSegmentHeight",
    hourDuration: "hourDuration",
    minimumEventHeight: "minimumEventHeight",
    dayStartHour: "dayStartHour",
    dayStartMinute: "dayStartMinute",
    dayEndHour: "dayEndHour",
    dayEndMinute: "dayEndMinute",
    refresh: "refresh",
    locale: "locale",
    eventSnapSize: "eventSnapSize",
    tooltipPlacement: "tooltipPlacement",
    tooltipTemplate: "tooltipTemplate",
    tooltipAppendToBody: "tooltipAppendToBody",
    tooltipDelay: "tooltipDelay",
    hourSegmentTemplate: "hourSegmentTemplate",
    eventTemplate: "eventTemplate",
    eventTitleTemplate: "eventTitleTemplate",
    eventActionsTemplate: "eventActionsTemplate",
    snapDraggedEvents: "snapDraggedEvents",
    allDayEventsLabelTemplate: "allDayEventsLabelTemplate",
    currentTimeMarkerTemplate: "currentTimeMarkerTemplate",
    validateEventTimesChanged: "validateEventTimesChanged"
  },
  outputs: {
    eventClicked: "eventClicked",
    hourSegmentClicked: "hourSegmentClicked",
    eventTimesChanged: "eventTimesChanged",
    beforeViewRender: "beforeViewRender"
  },
  decls: 1,
  vars: 26,
  consts: [[1, "cal-day-view", 3, "daysInWeek", "viewDate", "events", "hourSegments", "hourDuration", "hourSegmentHeight", "minimumEventHeight", "dayStartHour", "dayStartMinute", "dayEndHour", "dayEndMinute", "refresh", "locale", "eventSnapSize", "tooltipPlacement", "tooltipTemplate", "tooltipAppendToBody", "tooltipDelay", "hourSegmentTemplate", "eventTemplate", "eventTitleTemplate", "eventActionsTemplate", "snapDraggedEvents", "allDayEventsLabelTemplate", "currentTimeMarkerTemplate", "validateEventTimesChanged", "eventClicked", "hourSegmentClicked", "eventTimesChanged", "beforeViewRender"]],
  template: function CalendarDayViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mwl-calendar-week-view", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("eventClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventClicked_0_listener($event) {
        return ctx.eventClicked.emit($event);
      })("hourSegmentClicked", function CalendarDayViewComponent_Template_mwl_calendar_week_view_hourSegmentClicked_0_listener($event) {
        return ctx.hourSegmentClicked.emit($event);
      })("eventTimesChanged", function CalendarDayViewComponent_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) {
        return ctx.eventTimesChanged.emit($event);
      })("beforeViewRender", function CalendarDayViewComponent_Template_mwl_calendar_week_view_beforeViewRender_0_listener($event) {
        return ctx.beforeViewRender.emit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("daysInWeek", 1)("viewDate", ctx.viewDate)("events", ctx.events)("hourSegments", ctx.hourSegments)("hourDuration", ctx.hourDuration)("hourSegmentHeight", ctx.hourSegmentHeight)("minimumEventHeight", ctx.minimumEventHeight)("dayStartHour", ctx.dayStartHour)("dayStartMinute", ctx.dayStartMinute)("dayEndHour", ctx.dayEndHour)("dayEndMinute", ctx.dayEndMinute)("refresh", ctx.refresh)("locale", ctx.locale)("eventSnapSize", ctx.eventSnapSize)("tooltipPlacement", ctx.tooltipPlacement)("tooltipTemplate", ctx.tooltipTemplate)("tooltipAppendToBody", ctx.tooltipAppendToBody)("tooltipDelay", ctx.tooltipDelay)("hourSegmentTemplate", ctx.hourSegmentTemplate)("eventTemplate", ctx.eventTemplate)("eventTitleTemplate", ctx.eventTitleTemplate)("eventActionsTemplate", ctx.eventActionsTemplate)("snapDraggedEvents", ctx.snapDraggedEvents)("allDayEventsLabelTemplate", ctx.allDayEventsLabelTemplate)("currentTimeMarkerTemplate", ctx.currentTimeMarkerTemplate)("validateEventTimesChanged", ctx.validateEventTimesChanged);
    }
  },
  dependencies: [CalendarWeekViewComponent],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarDayViewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'mwl-calendar-day-view',
      template: `
    <mwl-calendar-week-view
      class="cal-day-view"
      [daysInWeek]="1"
      [viewDate]="viewDate"
      [events]="events"
      [hourSegments]="hourSegments"
      [hourDuration]="hourDuration"
      [hourSegmentHeight]="hourSegmentHeight"
      [minimumEventHeight]="minimumEventHeight"
      [dayStartHour]="dayStartHour"
      [dayStartMinute]="dayStartMinute"
      [dayEndHour]="dayEndHour"
      [dayEndMinute]="dayEndMinute"
      [refresh]="refresh"
      [locale]="locale"
      [eventSnapSize]="eventSnapSize"
      [tooltipPlacement]="tooltipPlacement"
      [tooltipTemplate]="tooltipTemplate"
      [tooltipAppendToBody]="tooltipAppendToBody"
      [tooltipDelay]="tooltipDelay"
      [hourSegmentTemplate]="hourSegmentTemplate"
      [eventTemplate]="eventTemplate"
      [eventTitleTemplate]="eventTitleTemplate"
      [eventActionsTemplate]="eventActionsTemplate"
      [snapDraggedEvents]="snapDraggedEvents"
      [allDayEventsLabelTemplate]="allDayEventsLabelTemplate"
      [currentTimeMarkerTemplate]="currentTimeMarkerTemplate"
      [validateEventTimesChanged]="validateEventTimesChanged"
      (eventClicked)="eventClicked.emit($event)"
      (hourSegmentClicked)="hourSegmentClicked.emit($event)"
      (eventTimesChanged)="eventTimesChanged.emit($event)"
      (beforeViewRender)="beforeViewRender.emit($event)"
    ></mwl-calendar-week-view>
  `
    }]
  }], null, {
    viewDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    events: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    hourSegments: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    hourSegmentHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    hourDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    minimumEventHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    dayStartHour: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    dayStartMinute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    dayEndHour: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    dayEndMinute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    refresh: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    eventSnapSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipPlacement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipAppendToBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    tooltipDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    hourSegmentTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    eventTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    eventTitleTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    eventActionsTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    snapDraggedEvents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    allDayEventsLabelTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    currentTimeMarkerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    validateEventTimesChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    eventClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    hourSegmentClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    eventTimesChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    beforeViewRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  });
})();

class CalendarDayModule {}

CalendarDayModule.ɵfac = function CalendarDayModule_Factory(t) {
  return new (t || CalendarDayModule)();
};

CalendarDayModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: CalendarDayModule,
  declarations: [CalendarDayViewComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, CalendarCommonModule, CalendarWeekModule],
  exports: [CalendarDayViewComponent]
});
CalendarDayModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, CalendarCommonModule, CalendarWeekModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarDayModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, CalendarCommonModule, CalendarWeekModule],
      declarations: [CalendarDayViewComponent],
      exports: [CalendarDayViewComponent]
    }]
  }], null, null);
})();
/**
 * The main module of this library. Example usage:
 *
 * ```typescript
 * import { CalenderModule } from 'angular-calendar';
 *
 * @NgModule({
 *   imports: [
 *     CalenderModule.forRoot()
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */


class CalendarModule {
  static forRoot(dateAdapter, config = {}) {
    return {
      ngModule: CalendarModule,
      providers: [dateAdapter, config.eventTitleFormatter || CalendarEventTitleFormatter, config.dateFormatter || CalendarDateFormatter, config.utils || CalendarUtils, config.a11y || CalendarA11y]
    };
  }

}

CalendarModule.ɵfac = function CalendarModule_Factory(t) {
  return new (t || CalendarModule)();
};

CalendarModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: CalendarModule,
  imports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule],
  exports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule]
});
CalendarModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [[CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule], CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule],
      exports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule]
    }]
  }], null, null);
})();
/*
 * Public API Surface of angular-calendar
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 2682:
/*!******************************************************************************************!*\
  !*** ./node_modules/angular-draggable-droppable/fesm2015/angular-draggable-droppable.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragAndDropModule": () => (/* binding */ DragAndDropModule),
/* harmony export */   "DraggableDirective": () => (/* binding */ DraggableDirective),
/* harmony export */   "DraggableScrollContainerDirective": () => (/* binding */ DraggableScrollContainerDirective),
/* harmony export */   "DroppableDirective": () => (/* binding */ DroppableDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 1555);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 4514);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 7760);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 3432);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 9221);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _mattlewis92_dom_autoscroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mattlewis92/dom-autoscroller */ 27);







function addClass(renderer, element, classToAdd) {
  if (classToAdd) {
    classToAdd.split(' ').forEach(className => renderer.addClass(element.nativeElement, className));
  }
}

function removeClass(renderer, element, classToRemove) {
  if (classToRemove) {
    classToRemove.split(' ').forEach(className => renderer.removeClass(element.nativeElement, className));
  }
}

class DraggableHelper {
  constructor() {
    this.currentDrag = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }

}

DraggableHelper.ɵfac = function DraggableHelper_Factory(t) {
  return new (t || DraggableHelper)();
};

DraggableHelper.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: DraggableHelper,
  factory: DraggableHelper.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DraggableHelper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/**
 * If the window isn't scrollable, then place this on the scrollable container that draggable elements are inside. e.g.
 * ```html
  <div style="overflow: scroll" mwlDraggableScrollContainer>
    <div mwlDraggable>Drag me!</div>
  </div>
  ```
 */


class DraggableScrollContainerDirective {
  /**
   * @hidden
   */
  constructor(elementRef) {
    this.elementRef = elementRef;
  }

}

DraggableScrollContainerDirective.ɵfac = function DraggableScrollContainerDirective_Factory(t) {
  return new (t || DraggableScrollContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
};

DraggableScrollContainerDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: DraggableScrollContainerDirective,
  selectors: [["", "mwlDraggableScrollContainer", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DraggableScrollContainerDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[mwlDraggableScrollContainer]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }];
  }, null);
})();

class DraggableDirective {
  /**
   * @hidden
   */
  constructor(element, renderer, draggableHelper, zone, vcr, scrollContainer, document) {
    this.element = element;
    this.renderer = renderer;
    this.draggableHelper = draggableHelper;
    this.zone = zone;
    this.vcr = vcr;
    this.scrollContainer = scrollContainer;
    this.document = document;
    /**
     * The axis along which the element is draggable
     */

    this.dragAxis = {
      x: true,
      y: true
    };
    /**
     * Snap all drags to an x / y grid
     */

    this.dragSnapGrid = {};
    /**
     * Show a ghost element that shows the drag when dragging
     */

    this.ghostDragEnabled = true;
    /**
     * Show the original element when ghostDragEnabled is true
     */

    this.showOriginalElementWhileDragging = false;
    /**
     * The cursor to use when hovering over a draggable element
     */

    this.dragCursor = '';
    /*
     * Options used to control the behaviour of auto scrolling: https://www.npmjs.com/package/dom-autoscroller
     */

    this.autoScroll = {
      margin: 20
    };
    /**
     * Called when the element can be dragged along one axis and has the mouse or pointer device pressed on it
     */

    this.dragPointerDown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Called when the element has started to be dragged.
     * Only called after at least one mouse or touch move event.
     * If you call $event.cancelDrag$.emit() it will cancel the current drag
     */

    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Called after the ghost element has been created
     */

    this.ghostElementCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Called when the element is being dragged
     */

    this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Called after the element is dragged
     */

    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * @hidden
     */

    this.pointerDown$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * @hidden
     */

    this.pointerMove$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * @hidden
     */

    this.pointerUp$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.eventListenerSubscriptions = {};
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.timeLongPress = {
      timerBegin: 0,
      timerEnd: 0
    };
  }

  ngOnInit() {
    this.checkEventListeners();
    const pointerDragged$ = this.pointerDown$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(() => this.canDrag()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(pointerDownEvent => {
      // fix for https://github.com/mattlewis92/angular-draggable-droppable/issues/61
      // stop mouse events propagating up the chain
      if (pointerDownEvent.event.stopPropagation && !this.scrollContainer) {
        pointerDownEvent.event.stopPropagation();
      } // hack to prevent text getting selected in safari while dragging


      const globalDragStyle = this.renderer.createElement('style');
      this.renderer.setAttribute(globalDragStyle, 'type', 'text/css');
      this.renderer.appendChild(globalDragStyle, this.renderer.createText(`
          body * {
           -moz-user-select: none;
           -ms-user-select: none;
           -webkit-user-select: none;
           user-select: none;
          }
        `));
      requestAnimationFrame(() => {
        this.document.head.appendChild(globalDragStyle);
      });
      const startScrollPosition = this.getScrollPosition();
      const scrollContainerScroll$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
        const scrollContainer = this.scrollContainer ? this.scrollContainer.elementRef.nativeElement : 'window';
        return this.renderer.listen(scrollContainer, 'scroll', e => observer.next(e));
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(startScrollPosition), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => this.getScrollPosition()));
      const currentDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      const cancelDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.ReplaySubject();

      if (this.dragPointerDown.observers.length > 0) {
        this.zone.run(() => {
          this.dragPointerDown.next({
            x: 0,
            y: 0
          });
        });
      }

      const dragComplete$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(this.pointerUp$, this.pointerDown$, cancelDrag$, this.destroy$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)());
      const pointerMove = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this.pointerMove$, scrollContainerScroll$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([pointerMoveEvent, scroll]) => {
        return {
          currentDrag$,
          transformX: pointerMoveEvent.clientX - pointerDownEvent.clientX,
          transformY: pointerMoveEvent.clientY - pointerDownEvent.clientY,
          clientX: pointerMoveEvent.clientX,
          clientY: pointerMoveEvent.clientY,
          scrollLeft: scroll.left,
          scrollTop: scroll.top,
          target: pointerMoveEvent.event.target
        };
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(moveData => {
        if (this.dragSnapGrid.x) {
          moveData.transformX = Math.round(moveData.transformX / this.dragSnapGrid.x) * this.dragSnapGrid.x;
        }

        if (this.dragSnapGrid.y) {
          moveData.transformY = Math.round(moveData.transformY / this.dragSnapGrid.y) * this.dragSnapGrid.y;
        }

        return moveData;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(moveData => {
        if (!this.dragAxis.x) {
          moveData.transformX = 0;
        }

        if (!this.dragAxis.y) {
          moveData.transformY = 0;
        }

        return moveData;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(moveData => {
        const scrollX = moveData.scrollLeft - startScrollPosition.left;
        const scrollY = moveData.scrollTop - startScrollPosition.top;
        return Object.assign(Object.assign({}, moveData), {
          x: moveData.transformX + scrollX,
          y: moveData.transformY + scrollY
        });
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(({
        x,
        y,
        transformX,
        transformY
      }) => !this.validateDrag || this.validateDrag({
        x,
        y,
        transform: {
          x: transformX,
          y: transformY
        }
      })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(dragComplete$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)());
      const dragStarted$ = pointerMove.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)());
      const dragEnded$ = pointerMove.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeLast)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)());
      dragStarted$.subscribe(({
        clientX,
        clientY,
        x,
        y
      }) => {
        if (this.dragStart.observers.length > 0) {
          this.zone.run(() => {
            this.dragStart.next({
              cancelDrag$
            });
          });
        }

        this.scroller = (0,_mattlewis92_dom_autoscroller__WEBPACK_IMPORTED_MODULE_0__["default"])([this.scrollContainer ? this.scrollContainer.elementRef.nativeElement : this.document.defaultView], Object.assign(Object.assign({}, this.autoScroll), {
          autoScroll() {
            return true;
          }

        }));
        addClass(this.renderer, this.element, this.dragActiveClass);

        if (this.ghostDragEnabled) {
          const rect = this.element.nativeElement.getBoundingClientRect();
          const clone = this.element.nativeElement.cloneNode(true);

          if (!this.showOriginalElementWhileDragging) {
            this.renderer.setStyle(this.element.nativeElement, 'visibility', 'hidden');
          }

          if (this.ghostElementAppendTo) {
            this.ghostElementAppendTo.appendChild(clone);
          } else {
            this.element.nativeElement.parentNode.insertBefore(clone, this.element.nativeElement.nextSibling);
          }

          this.ghostElement = clone;
          this.document.body.style.cursor = this.dragCursor;
          this.setElementStyles(clone, {
            position: 'fixed',
            top: `${rect.top}px`,
            left: `${rect.left}px`,
            width: `${rect.width}px`,
            height: `${rect.height}px`,
            cursor: this.dragCursor,
            margin: '0',
            willChange: 'transform',
            pointerEvents: 'none'
          });

          if (this.ghostElementTemplate) {
            const viewRef = this.vcr.createEmbeddedView(this.ghostElementTemplate);
            clone.innerHTML = '';
            viewRef.rootNodes.filter(node => node instanceof Node).forEach(node => {
              clone.appendChild(node);
            });
            dragEnded$.subscribe(() => {
              this.vcr.remove(this.vcr.indexOf(viewRef));
            });
          }

          if (this.ghostElementCreated.observers.length > 0) {
            this.zone.run(() => {
              this.ghostElementCreated.emit({
                clientX: clientX - x,
                clientY: clientY - y,
                element: clone
              });
            });
          }

          dragEnded$.subscribe(() => {
            clone.parentElement.removeChild(clone);
            this.ghostElement = null;
            this.renderer.setStyle(this.element.nativeElement, 'visibility', '');
          });
        }

        this.draggableHelper.currentDrag.next(currentDrag$);
      });
      dragEnded$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(dragEndData => {
        const dragEndData$ = cancelDrag$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.count)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(calledCount => Object.assign(Object.assign({}, dragEndData), {
          dragCancelled: calledCount > 0
        })));
        cancelDrag$.complete();
        return dragEndData$;
      })).subscribe(({
        x,
        y,
        dragCancelled
      }) => {
        this.scroller.destroy();

        if (this.dragEnd.observers.length > 0) {
          this.zone.run(() => {
            this.dragEnd.next({
              x,
              y,
              dragCancelled
            });
          });
        }

        removeClass(this.renderer, this.element, this.dragActiveClass);
        currentDrag$.complete();
      });
      (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(dragComplete$, dragEnded$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)).subscribe(() => {
        requestAnimationFrame(() => {
          this.document.head.removeChild(globalDragStyle);
        });
      });
      return pointerMove;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)());
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(pointerDragged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(value => [, value])), pointerDragged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.pairwise)())).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(([previous, next]) => {
      if (!previous) {
        return true;
      }

      return previous.x !== next.x || previous.y !== next.y;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([previous, next]) => next)).subscribe(({
      x,
      y,
      currentDrag$,
      clientX,
      clientY,
      transformX,
      transformY,
      target
    }) => {
      if (this.dragging.observers.length > 0) {
        this.zone.run(() => {
          this.dragging.next({
            x,
            y
          });
        });
      }

      requestAnimationFrame(() => {
        if (this.ghostElement) {
          const transform = `translate3d(${transformX}px, ${transformY}px, 0px)`;
          this.setElementStyles(this.ghostElement, {
            transform,
            '-webkit-transform': transform,
            '-ms-transform': transform,
            '-moz-transform': transform,
            '-o-transform': transform
          });
        }
      });
      currentDrag$.next({
        clientX,
        clientY,
        dropData: this.dropData,
        target
      });
    });
  }

  ngOnChanges(changes) {
    if (changes.dragAxis) {
      this.checkEventListeners();
    }
  }

  ngOnDestroy() {
    this.unsubscribeEventListeners();
    this.pointerDown$.complete();
    this.pointerMove$.complete();
    this.pointerUp$.complete();
    this.destroy$.next();
  }

  checkEventListeners() {
    const canDrag = this.canDrag();
    const hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;

    if (canDrag && !hasEventListeners) {
      this.zone.runOutsideAngular(() => {
        this.eventListenerSubscriptions.mousedown = this.renderer.listen(this.element.nativeElement, 'mousedown', event => {
          this.onMouseDown(event);
        });
        this.eventListenerSubscriptions.mouseup = this.renderer.listen('document', 'mouseup', event => {
          this.onMouseUp(event);
        });
        this.eventListenerSubscriptions.touchstart = this.renderer.listen(this.element.nativeElement, 'touchstart', event => {
          this.onTouchStart(event);
        });
        this.eventListenerSubscriptions.touchend = this.renderer.listen('document', 'touchend', event => {
          this.onTouchEnd(event);
        });
        this.eventListenerSubscriptions.touchcancel = this.renderer.listen('document', 'touchcancel', event => {
          this.onTouchEnd(event);
        });
        this.eventListenerSubscriptions.mouseenter = this.renderer.listen(this.element.nativeElement, 'mouseenter', () => {
          this.onMouseEnter();
        });
        this.eventListenerSubscriptions.mouseleave = this.renderer.listen(this.element.nativeElement, 'mouseleave', () => {
          this.onMouseLeave();
        });
      });
    } else if (!canDrag && hasEventListeners) {
      this.unsubscribeEventListeners();
    }
  }

  onMouseDown(event) {
    if (event.button === 0) {
      if (!this.eventListenerSubscriptions.mousemove) {
        this.eventListenerSubscriptions.mousemove = this.renderer.listen('document', 'mousemove', mouseMoveEvent => {
          this.pointerMove$.next({
            event: mouseMoveEvent,
            clientX: mouseMoveEvent.clientX,
            clientY: mouseMoveEvent.clientY
          });
        });
      }

      this.pointerDown$.next({
        event,
        clientX: event.clientX,
        clientY: event.clientY
      });
    }
  }

  onMouseUp(event) {
    if (event.button === 0) {
      if (this.eventListenerSubscriptions.mousemove) {
        this.eventListenerSubscriptions.mousemove();
        delete this.eventListenerSubscriptions.mousemove;
      }

      this.pointerUp$.next({
        event,
        clientX: event.clientX,
        clientY: event.clientY
      });
    }
  }

  onTouchStart(event) {
    let startScrollPosition;
    let isDragActivated;
    let hasContainerScrollbar;

    if (this.touchStartLongPress) {
      this.timeLongPress.timerBegin = Date.now();
      isDragActivated = false;
      hasContainerScrollbar = this.hasScrollbar();
      startScrollPosition = this.getScrollPosition();
    }

    if (!this.eventListenerSubscriptions.touchmove) {
      const contextMenuListener = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this.document, 'contextmenu').subscribe(e => {
        e.preventDefault();
      });
      const touchMoveListener = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this.document, 'touchmove', {
        passive: false
      }).subscribe(touchMoveEvent => {
        if (this.touchStartLongPress && !isDragActivated && hasContainerScrollbar) {
          isDragActivated = this.shouldBeginDrag(event, touchMoveEvent, startScrollPosition);
        }

        if (!this.touchStartLongPress || !hasContainerScrollbar || isDragActivated) {
          touchMoveEvent.preventDefault();
          this.pointerMove$.next({
            event: touchMoveEvent,
            clientX: touchMoveEvent.targetTouches[0].clientX,
            clientY: touchMoveEvent.targetTouches[0].clientY
          });
        }
      });

      this.eventListenerSubscriptions.touchmove = () => {
        contextMenuListener.unsubscribe();
        touchMoveListener.unsubscribe();
      };
    }

    this.pointerDown$.next({
      event,
      clientX: event.touches[0].clientX,
      clientY: event.touches[0].clientY
    });
  }

  onTouchEnd(event) {
    if (this.eventListenerSubscriptions.touchmove) {
      this.eventListenerSubscriptions.touchmove();
      delete this.eventListenerSubscriptions.touchmove;

      if (this.touchStartLongPress) {
        this.enableScroll();
      }
    }

    this.pointerUp$.next({
      event,
      clientX: event.changedTouches[0].clientX,
      clientY: event.changedTouches[0].clientY
    });
  }

  onMouseEnter() {
    this.setCursor(this.dragCursor);
  }

  onMouseLeave() {
    this.setCursor('');
  }

  canDrag() {
    return this.dragAxis.x || this.dragAxis.y;
  }

  setCursor(value) {
    if (!this.eventListenerSubscriptions.mousemove) {
      this.renderer.setStyle(this.element.nativeElement, 'cursor', value);
    }
  }

  unsubscribeEventListeners() {
    Object.keys(this.eventListenerSubscriptions).forEach(type => {
      this.eventListenerSubscriptions[type]();
      delete this.eventListenerSubscriptions[type];
    });
  }

  setElementStyles(element, styles) {
    Object.keys(styles).forEach(key => {
      this.renderer.setStyle(element, key, styles[key]);
    });
  }

  getScrollElement() {
    if (this.scrollContainer) {
      return this.scrollContainer.elementRef.nativeElement;
    } else {
      return this.document.body;
    }
  }

  getScrollPosition() {
    if (this.scrollContainer) {
      return {
        top: this.scrollContainer.elementRef.nativeElement.scrollTop,
        left: this.scrollContainer.elementRef.nativeElement.scrollLeft
      };
    } else {
      return {
        top: window.pageYOffset || this.document.documentElement.scrollTop,
        left: window.pageXOffset || this.document.documentElement.scrollLeft
      };
    }
  }

  shouldBeginDrag(event, touchMoveEvent, startScrollPosition) {
    const moveScrollPosition = this.getScrollPosition();
    const deltaScroll = {
      top: Math.abs(moveScrollPosition.top - startScrollPosition.top),
      left: Math.abs(moveScrollPosition.left - startScrollPosition.left)
    };
    const deltaX = Math.abs(touchMoveEvent.targetTouches[0].clientX - event.touches[0].clientX) - deltaScroll.left;
    const deltaY = Math.abs(touchMoveEvent.targetTouches[0].clientY - event.touches[0].clientY) - deltaScroll.top;
    const deltaTotal = deltaX + deltaY;
    const longPressConfig = this.touchStartLongPress;

    if (deltaTotal > longPressConfig.delta || deltaScroll.top > 0 || deltaScroll.left > 0) {
      this.timeLongPress.timerBegin = Date.now();
    }

    this.timeLongPress.timerEnd = Date.now();
    const duration = this.timeLongPress.timerEnd - this.timeLongPress.timerBegin;

    if (duration >= longPressConfig.delay) {
      this.disableScroll();
      return true;
    }

    return false;
  }

  enableScroll() {
    if (this.scrollContainer) {
      this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', '');
    }

    this.renderer.setStyle(this.document.body, 'overflow', '');
  }

  disableScroll() {
    /* istanbul ignore next */
    if (this.scrollContainer) {
      this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', 'hidden');
    }

    this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
  }

  hasScrollbar() {
    const scrollContainer = this.getScrollElement();
    const containerHasHorizontalScroll = scrollContainer.scrollWidth > scrollContainer.clientWidth;
    const containerHasVerticalScroll = scrollContainer.scrollHeight > scrollContainer.clientHeight;
    return containerHasHorizontalScroll || containerHasVerticalScroll;
  }

}

DraggableDirective.ɵfac = function DraggableDirective_Factory(t) {
  return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DraggableHelper), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DraggableScrollContainerDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_18__.DOCUMENT));
};

DraggableDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: DraggableDirective,
  selectors: [["", "mwlDraggable", ""]],
  inputs: {
    dropData: "dropData",
    dragAxis: "dragAxis",
    dragSnapGrid: "dragSnapGrid",
    ghostDragEnabled: "ghostDragEnabled",
    showOriginalElementWhileDragging: "showOriginalElementWhileDragging",
    validateDrag: "validateDrag",
    dragCursor: "dragCursor",
    dragActiveClass: "dragActiveClass",
    ghostElementAppendTo: "ghostElementAppendTo",
    ghostElementTemplate: "ghostElementTemplate",
    touchStartLongPress: "touchStartLongPress",
    autoScroll: "autoScroll"
  },
  outputs: {
    dragPointerDown: "dragPointerDown",
    dragStart: "dragStart",
    ghostElementCreated: "ghostElementCreated",
    dragging: "dragging",
    dragEnd: "dragEnd"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DraggableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[mwlDraggable]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
    }, {
      type: DraggableHelper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef
    }, {
      type: DraggableScrollContainerDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.DOCUMENT]
      }]
    }];
  }, {
    dropData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    dragAxis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    dragSnapGrid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    ghostDragEnabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    showOriginalElementWhileDragging: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    validateDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    dragCursor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    dragActiveClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    ghostElementAppendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    ghostElementTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    touchStartLongPress: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    autoScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    dragPointerDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    dragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    ghostElementCreated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    dragging: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    dragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  });
})();

function isCoordinateWithinRectangle(clientX, clientY, rect) {
  return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
}

class DroppableDirective {
  constructor(element, draggableHelper, zone, renderer, scrollContainer) {
    this.element = element;
    this.draggableHelper = draggableHelper;
    this.zone = zone;
    this.renderer = renderer;
    this.scrollContainer = scrollContainer;
    /**
     * Called when a draggable element starts overlapping the element
     */

    this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Called when a draggable element stops overlapping the element
     */

    this.dragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Called when a draggable element is moved over the element
     */

    this.dragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Called when a draggable element is dropped on this element
     */

    this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(); // eslint-disable-line  @angular-eslint/no-output-native
  }

  ngOnInit() {
    this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe(drag$ => {
      addClass(this.renderer, this.element, this.dragActiveClass);
      const droppableElement = {
        updateCache: true
      };
      const deregisterScrollListener = this.renderer.listen(this.scrollContainer ? this.scrollContainer.elementRef.nativeElement : 'window', 'scroll', () => {
        droppableElement.updateCache = true;
      });
      let currentDragEvent;
      const overlaps$ = drag$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(({
        clientX,
        clientY,
        dropData,
        target
      }) => {
        currentDragEvent = {
          clientX,
          clientY,
          dropData,
          target
        };

        if (droppableElement.updateCache) {
          droppableElement.rect = this.element.nativeElement.getBoundingClientRect();

          if (this.scrollContainer) {
            droppableElement.scrollContainerRect = this.scrollContainer.elementRef.nativeElement.getBoundingClientRect();
          }

          droppableElement.updateCache = false;
        }

        const isWithinElement = isCoordinateWithinRectangle(clientX, clientY, droppableElement.rect);
        const isDropAllowed = !this.validateDrop || this.validateDrop({
          clientX,
          clientY,
          target,
          dropData
        });

        if (droppableElement.scrollContainerRect) {
          return isWithinElement && isDropAllowed && isCoordinateWithinRectangle(clientX, clientY, droppableElement.scrollContainerRect);
        } else {
          return isWithinElement && isDropAllowed;
        }
      }));
      const overlapsChanged$ = overlaps$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)());
      let dragOverActive; // TODO - see if there's a way of doing this via rxjs

      overlapsChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(overlapsNow => overlapsNow)).subscribe(() => {
        dragOverActive = true;
        addClass(this.renderer, this.element, this.dragOverClass);

        if (this.dragEnter.observers.length > 0) {
          this.zone.run(() => {
            this.dragEnter.next(currentDragEvent);
          });
        }
      });
      overlaps$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(overlapsNow => overlapsNow)).subscribe(() => {
        if (this.dragOver.observers.length > 0) {
          this.zone.run(() => {
            this.dragOver.next(currentDragEvent);
          });
        }
      });
      overlapsChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.pairwise)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(([didOverlap, overlapsNow]) => didOverlap && !overlapsNow)).subscribe(() => {
        dragOverActive = false;
        removeClass(this.renderer, this.element, this.dragOverClass);

        if (this.dragLeave.observers.length > 0) {
          this.zone.run(() => {
            this.dragLeave.next(currentDragEvent);
          });
        }
      });
      drag$.subscribe({
        complete: () => {
          deregisterScrollListener();
          removeClass(this.renderer, this.element, this.dragActiveClass);

          if (dragOverActive) {
            removeClass(this.renderer, this.element, this.dragOverClass);

            if (this.drop.observers.length > 0) {
              this.zone.run(() => {
                this.drop.next(currentDragEvent);
              });
            }
          }
        }
      });
    });
  }

  ngOnDestroy() {
    if (this.currentDragSubscription) {
      this.currentDragSubscription.unsubscribe();
    }
  }

}

DroppableDirective.ɵfac = function DroppableDirective_Factory(t) {
  return new (t || DroppableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DraggableHelper), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DraggableScrollContainerDirective, 8));
};

DroppableDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: DroppableDirective,
  selectors: [["", "mwlDroppable", ""]],
  inputs: {
    dragOverClass: "dragOverClass",
    dragActiveClass: "dragActiveClass",
    validateDrop: "validateDrop"
  },
  outputs: {
    dragEnter: "dragEnter",
    dragLeave: "dragLeave",
    dragOver: "dragOver",
    drop: "drop"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DroppableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[mwlDroppable]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: DraggableHelper
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
    }, {
      type: DraggableScrollContainerDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }]
    }];
  }, {
    dragOverClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    dragActiveClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    validateDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    dragEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    dragLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    dragOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    drop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  });
})();

class DragAndDropModule {}

DragAndDropModule.ɵfac = function DragAndDropModule_Factory(t) {
  return new (t || DragAndDropModule)();
};

DragAndDropModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: DragAndDropModule,
  declarations: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective],
  exports: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective]
});
DragAndDropModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DragAndDropModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      declarations: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective],
      exports: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective]
    }]
  }], null, null);
})();
/*
 * Public API Surface of angular-draggable-droppable
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 1118:
/*!**************************************************************************************!*\
  !*** ./node_modules/angular-resizable-element/fesm2015/angular-resizable-element.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizableDirective": () => (/* binding */ ResizableDirective),
/* harmony export */   "ResizableModule": () => (/* binding */ ResizableModule),
/* harmony export */   "ResizeHandleDirective": () => (/* binding */ ResizeHandleDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 4514);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9221);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 5921);





/**
 * @hidden
 */

const IS_TOUCH_DEVICE = (() => {
  // In case we're in Node.js environment.
  if (typeof window === 'undefined') {
    return false;
  } else {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }
})();
/** Creates a deep clone of an element. */


function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll('[id]');
  const nodeName = node.nodeName.toLowerCase(); // Remove the `id` to avoid having multiple elements with the same id on the page.

  clone.removeAttribute('id');
  descendantsWithId.forEach(descendant => {
    descendant.removeAttribute('id');
  });

  if (nodeName === 'canvas') {
    transferCanvasData(node, clone);
  } else if (nodeName === 'input' || nodeName === 'select' || nodeName === 'textarea') {
    transferInputData(node, clone);
  }

  transferData('canvas', node, clone, transferCanvasData);
  transferData('input, textarea, select', node, clone, transferInputData);
  return clone;
}
/** Matches elements between an element and its clone and allows for their data to be cloned. */


function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);

  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);

    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
} // Counter for unique cloned radio button names.


let cloneUniqueId = 0;
/** Transfers the data of one input element to another. */

function transferInputData(source, clone) {
  // Browsers throw an error when assigning the value of a file input programmatically.
  if (clone.type !== 'file') {
    clone.value = source.value;
  } // Radio button `name` attributes must be unique for radio button groups
  // otherwise original radio buttons can lose their checked state
  // once the clone is inserted in the DOM.


  if (clone.type === 'radio' && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
/** Transfers the data of one canvas element to another. */


function transferCanvasData(source, clone) {
  const context = clone.getContext('2d');

  if (context) {
    // In some cases `drawImage` can throw (e.g. if the canvas size is 0x0).
    // We can't do much about it so just ignore the error.
    try {
      context.drawImage(source, 0, 0);
    } catch (_a) {}
  }
}

function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
  const newBoundingRect = {
    top: startingRect.top,
    bottom: startingRect.bottom,
    left: startingRect.left,
    right: startingRect.right
  };

  if (edges.top) {
    newBoundingRect.top += clientY;
  }

  if (edges.bottom) {
    newBoundingRect.bottom += clientY;
  }

  if (edges.left) {
    newBoundingRect.left += clientX;
  }

  if (edges.right) {
    newBoundingRect.right += clientX;
  }

  newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
  newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
  return newBoundingRect;
}

function getElementRect(element, ghostElementPositioning) {
  let translateX = 0;
  let translateY = 0;
  const style = element.nativeElement.style;
  const transformProperties = ['transform', '-ms-transform', '-moz-transform', '-o-transform'];
  const transform = transformProperties.map(property => style[property]).find(value => !!value);

  if (transform && transform.includes('translate')) {
    translateX = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, '$1');
    translateY = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, '$2');
  }

  if (ghostElementPositioning === 'absolute') {
    return {
      height: element.nativeElement.offsetHeight,
      width: element.nativeElement.offsetWidth,
      top: element.nativeElement.offsetTop - translateY,
      bottom: element.nativeElement.offsetHeight + element.nativeElement.offsetTop - translateY,
      left: element.nativeElement.offsetLeft - translateX,
      right: element.nativeElement.offsetWidth + element.nativeElement.offsetLeft - translateX
    };
  } else {
    const boundingRect = element.nativeElement.getBoundingClientRect();
    return {
      height: boundingRect.height,
      width: boundingRect.width,
      top: boundingRect.top - translateY,
      bottom: boundingRect.bottom - translateY,
      left: boundingRect.left - translateX,
      right: boundingRect.right - translateX,
      scrollTop: element.nativeElement.scrollTop,
      scrollLeft: element.nativeElement.scrollLeft
    };
  }
}

const DEFAULT_RESIZE_CURSORS = Object.freeze({
  topLeft: 'nw-resize',
  topRight: 'ne-resize',
  bottomLeft: 'sw-resize',
  bottomRight: 'se-resize',
  leftOrRight: 'col-resize',
  topOrBottom: 'row-resize'
});

function getResizeCursor(edges, cursors) {
  if (edges.left && edges.top) {
    return cursors.topLeft;
  } else if (edges.right && edges.top) {
    return cursors.topRight;
  } else if (edges.left && edges.bottom) {
    return cursors.bottomLeft;
  } else if (edges.right && edges.bottom) {
    return cursors.bottomRight;
  } else if (edges.left || edges.right) {
    return cursors.leftOrRight;
  } else if (edges.top || edges.bottom) {
    return cursors.topOrBottom;
  } else {
    return '';
  }
}

function getEdgesDiff({
  edges,
  initialRectangle,
  newRectangle
}) {
  const edgesDiff = {};
  Object.keys(edges).forEach(edge => {
    edgesDiff[edge] = (newRectangle[edge] || 0) - (initialRectangle[edge] || 0);
  });
  return edgesDiff;
}

const RESIZE_ACTIVE_CLASS = 'resize-active';
const RESIZE_GHOST_ELEMENT_CLASS = 'resize-ghost-element';
const MOUSE_MOVE_THROTTLE_MS = 50;
/**
 * Place this on an element to make it resizable. For example:
 *
 * ```html
 * <div
 *   mwlResizable
 *   [resizeEdges]="{bottom: true, right: true, top: true, left: true}"
 *   [enableGhostResize]="true">
 * </div>
 * ```
 * Or in case they are sibling elements:
 * ```html
 * <div mwlResizable #resizableElement="mwlResizable"></div>
 * <div mwlResizeHandle [resizableContainer]="resizableElement" [resizeEdges]="{bottom: true, right: true}"></div>
 * ```
 */

class ResizableDirective {
  /**
   * @hidden
   */
  constructor(platformId, renderer, elm, zone) {
    this.platformId = platformId;
    this.renderer = renderer;
    this.elm = elm;
    this.zone = zone;
    /**
     * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
     */

    this.enableGhostResize = false;
    /**
     * A snap grid that resize events will be locked to.
     *
     * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
     */

    this.resizeSnapGrid = {};
    /**
     * The mouse cursors that will be set on the resize edges
     */

    this.resizeCursors = DEFAULT_RESIZE_CURSORS;
    /**
     * Define the positioning of the ghost element (can be fixed or absolute)
     */

    this.ghostElementPositioning = 'fixed';
    /**
     * Allow elements to be resized to negative dimensions
     */

    this.allowNegativeResizes = false;
    /**
     * The mouse move throttle in milliseconds, default: 50 ms
     */

    this.mouseMoveThrottleMS = MOUSE_MOVE_THROTTLE_MS;
    /**
     * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
     */

    this.resizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
     */

    this.resizing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
     */

    this.resizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * @hidden
     */

    this.mouseup = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * @hidden
     */

    this.mousedown = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * @hidden
     */

    this.mousemove = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
  }
  /**
   * @hidden
   */


  ngOnInit() {
    const mousedown$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(this.pointerEventListeners.pointerDown, this.mousedown);
    const mousemove$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(this.pointerEventListeners.pointerMove, this.mousemove).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(({
      event
    }) => {
      if (currentResize) {
        try {
          event.preventDefault();
        } catch (e) {// just adding try-catch not to see errors in console if there is a passive listener for same event somewhere
          // browser does nothing except of writing errors to console
        }
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
    const mouseup$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(this.pointerEventListeners.pointerUp, this.mouseup);
    let currentResize;

    const removeGhostElement = () => {
      if (currentResize && currentResize.clonedNode) {
        this.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);
        this.renderer.setStyle(this.elm.nativeElement, 'visibility', 'inherit');
      }
    };

    const getResizeCursors = () => {
      return Object.assign(Object.assign({}, DEFAULT_RESIZE_CURSORS), this.resizeCursors);
    };

    const mousedrag = mousedown$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(startCoords => {
      function getDiff(moveCoords) {
        return {
          clientX: moveCoords.clientX - startCoords.clientX,
          clientY: moveCoords.clientY - startCoords.clientY
        };
      }

      const getSnapGrid = () => {
        const snapGrid = {
          x: 1,
          y: 1
        };

        if (currentResize) {
          if (this.resizeSnapGrid.left && currentResize.edges.left) {
            snapGrid.x = +this.resizeSnapGrid.left;
          } else if (this.resizeSnapGrid.right && currentResize.edges.right) {
            snapGrid.x = +this.resizeSnapGrid.right;
          }

          if (this.resizeSnapGrid.top && currentResize.edges.top) {
            snapGrid.y = +this.resizeSnapGrid.top;
          } else if (this.resizeSnapGrid.bottom && currentResize.edges.bottom) {
            snapGrid.y = +this.resizeSnapGrid.bottom;
          }
        }

        return snapGrid;
      };

      function getGrid(coords, snapGrid) {
        return {
          x: Math.ceil(coords.clientX / snapGrid.x),
          y: Math.ceil(coords.clientY / snapGrid.y)
        };
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(mousemove$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(coords => [, coords])), mousemove$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.pairwise)())).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([previousCoords, newCoords]) => {
        return [previousCoords ? getDiff(previousCoords) : previousCoords, getDiff(newCoords)];
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(([previousCoords, newCoords]) => {
        if (!previousCoords) {
          return true;
        }

        const snapGrid = getSnapGrid();
        const previousGrid = getGrid(previousCoords, snapGrid);
        const newGrid = getGrid(newCoords, snapGrid);
        return previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y;
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([, newCoords]) => {
        const snapGrid = getSnapGrid();
        return {
          clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
          clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
        };
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(mouseup$, mousedown$)));
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(() => !!currentResize));
    mousedrag.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(({
      clientX,
      clientY
    }) => {
      return getNewBoundingRectangle(currentResize.startingRect, currentResize.edges, clientX, clientY);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(newBoundingRect => {
      return this.allowNegativeResizes || !!(newBoundingRect.height && newBoundingRect.width && newBoundingRect.height > 0 && newBoundingRect.width > 0);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(newBoundingRect => {
      return this.validateResize ? this.validateResize({
        rectangle: newBoundingRect,
        edges: getEdgesDiff({
          edges: currentResize.edges,
          initialRectangle: currentResize.startingRect,
          newRectangle: newBoundingRect
        })
      }) : true;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(newBoundingRect => {
      if (currentResize && currentResize.clonedNode) {
        this.renderer.setStyle(currentResize.clonedNode, 'height', `${newBoundingRect.height}px`);
        this.renderer.setStyle(currentResize.clonedNode, 'width', `${newBoundingRect.width}px`);
        this.renderer.setStyle(currentResize.clonedNode, 'top', `${newBoundingRect.top}px`);
        this.renderer.setStyle(currentResize.clonedNode, 'left', `${newBoundingRect.left}px`);
      }

      if (this.resizing.observers.length > 0) {
        this.zone.run(() => {
          this.resizing.emit({
            edges: getEdgesDiff({
              edges: currentResize.edges,
              initialRectangle: currentResize.startingRect,
              newRectangle: newBoundingRect
            }),
            rectangle: newBoundingRect
          });
        });
      }

      currentResize.currentRect = newBoundingRect;
    });
    mousedown$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(({
      edges
    }) => {
      return edges || {};
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(edges => {
      return Object.keys(edges).length > 0;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(edges => {
      if (currentResize) {
        removeGhostElement();
      }

      const startingRect = getElementRect(this.elm, this.ghostElementPositioning);
      currentResize = {
        edges,
        startingRect,
        currentRect: startingRect
      };
      const resizeCursors = getResizeCursors();
      const cursor = getResizeCursor(currentResize.edges, resizeCursors);
      this.renderer.setStyle(document.body, 'cursor', cursor);
      this.setElementClass(this.elm, RESIZE_ACTIVE_CLASS, true);

      if (this.enableGhostResize) {
        currentResize.clonedNode = deepCloneNode(this.elm.nativeElement);
        this.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);
        this.renderer.setStyle(this.elm.nativeElement, 'visibility', 'hidden');
        this.renderer.setStyle(currentResize.clonedNode, 'position', this.ghostElementPositioning);
        this.renderer.setStyle(currentResize.clonedNode, 'left', `${currentResize.startingRect.left}px`);
        this.renderer.setStyle(currentResize.clonedNode, 'top', `${currentResize.startingRect.top}px`);
        this.renderer.setStyle(currentResize.clonedNode, 'height', `${currentResize.startingRect.height}px`);
        this.renderer.setStyle(currentResize.clonedNode, 'width', `${currentResize.startingRect.width}px`);
        this.renderer.setStyle(currentResize.clonedNode, 'cursor', getResizeCursor(currentResize.edges, resizeCursors));
        this.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS);
        currentResize.clonedNode.scrollTop = currentResize.startingRect.scrollTop;
        currentResize.clonedNode.scrollLeft = currentResize.startingRect.scrollLeft;
      }

      if (this.resizeStart.observers.length > 0) {
        this.zone.run(() => {
          this.resizeStart.emit({
            edges: getEdgesDiff({
              edges,
              initialRectangle: startingRect,
              newRectangle: startingRect
            }),
            rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
          });
        });
      }
    });
    mouseup$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(() => {
      if (currentResize) {
        this.renderer.removeClass(this.elm.nativeElement, RESIZE_ACTIVE_CLASS);
        this.renderer.setStyle(document.body, 'cursor', '');
        this.renderer.setStyle(this.elm.nativeElement, 'cursor', '');

        if (this.resizeEnd.observers.length > 0) {
          this.zone.run(() => {
            this.resizeEnd.emit({
              edges: getEdgesDiff({
                edges: currentResize.edges,
                initialRectangle: currentResize.startingRect,
                newRectangle: currentResize.currentRect
              }),
              rectangle: currentResize.currentRect
            });
          });
        }

        removeGhostElement();
        currentResize = null;
      }
    });
  }
  /**
   * @hidden
   */


  ngOnDestroy() {
    // browser check for angular universal, because it doesn't know what document is
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.isPlatformBrowser)(this.platformId)) {
      this.renderer.setStyle(document.body, 'cursor', '');
    }

    this.mousedown.complete();
    this.mouseup.complete();
    this.mousemove.complete();
    this.destroy$.next();
  }

  setElementClass(elm, name, add) {
    if (add) {
      this.renderer.addClass(elm.nativeElement, name);
    } else {
      this.renderer.removeClass(elm.nativeElement, name);
    }
  }

}

ResizableDirective.ɵfac = function ResizableDirective_Factory(t) {
  return new (t || ResizableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

ResizableDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ResizableDirective,
  selectors: [["", "mwlResizable", ""]],
  inputs: {
    validateResize: "validateResize",
    enableGhostResize: "enableGhostResize",
    resizeSnapGrid: "resizeSnapGrid",
    resizeCursors: "resizeCursors",
    ghostElementPositioning: "ghostElementPositioning",
    allowNegativeResizes: "allowNegativeResizes",
    mouseMoveThrottleMS: "mouseMoveThrottleMS"
  },
  outputs: {
    resizeStart: "resizeStart",
    resizing: "resizing",
    resizeEnd: "resizeEnd"
  },
  exportAs: ["mwlResizable"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mwlResizable]',
      exportAs: 'mwlResizable'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    validateResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    enableGhostResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resizeSnapGrid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resizeCursors: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ghostElementPositioning: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    allowNegativeResizes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    mouseMoveThrottleMS: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resizeStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    resizing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    resizeEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class PointerEventListeners {
  constructor(renderer, zone) {
    this.pointerDown = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Observable(observer => {
      let unsubscribeMouseDown;
      let unsubscribeTouchStart;
      zone.runOutsideAngular(() => {
        unsubscribeMouseDown = renderer.listen('document', 'mousedown', event => {
          observer.next({
            clientX: event.clientX,
            clientY: event.clientY,
            event
          });
        });

        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchStart = renderer.listen('document', 'touchstart', event => {
            observer.next({
              clientX: event.touches[0].clientX,
              clientY: event.touches[0].clientY,
              event
            });
          });
        }
      });
      return () => {
        unsubscribeMouseDown();

        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchStart();
        }
      };
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
    this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Observable(observer => {
      let unsubscribeMouseMove;
      let unsubscribeTouchMove;
      zone.runOutsideAngular(() => {
        unsubscribeMouseMove = renderer.listen('document', 'mousemove', event => {
          observer.next({
            clientX: event.clientX,
            clientY: event.clientY,
            event
          });
        });

        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchMove = renderer.listen('document', 'touchmove', event => {
            observer.next({
              clientX: event.targetTouches[0].clientX,
              clientY: event.targetTouches[0].clientY,
              event
            });
          });
        }
      });
      return () => {
        unsubscribeMouseMove();

        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchMove();
        }
      };
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
    this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Observable(observer => {
      let unsubscribeMouseUp;
      let unsubscribeTouchEnd;
      let unsubscribeTouchCancel;
      zone.runOutsideAngular(() => {
        unsubscribeMouseUp = renderer.listen('document', 'mouseup', event => {
          observer.next({
            clientX: event.clientX,
            clientY: event.clientY,
            event
          });
        });

        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchEnd = renderer.listen('document', 'touchend', event => {
            observer.next({
              clientX: event.changedTouches[0].clientX,
              clientY: event.changedTouches[0].clientY,
              event
            });
          });
          unsubscribeTouchCancel = renderer.listen('document', 'touchcancel', event => {
            observer.next({
              clientX: event.changedTouches[0].clientX,
              clientY: event.changedTouches[0].clientY,
              event
            });
          });
        }
      });
      return () => {
        unsubscribeMouseUp();

        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchEnd();
          unsubscribeTouchCancel();
        }
      };
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
  }

  static getInstance(renderer, zone) {
    if (!PointerEventListeners.instance) {
      PointerEventListeners.instance = new PointerEventListeners(renderer, zone);
    }

    return PointerEventListeners.instance;
  }

}
/**
 * An element placed inside a `mwlResizable` directive to be used as a drag and resize handle
 *
 * For example
 *
 * ```html
 * <div mwlResizable>
 *   <div mwlResizeHandle [resizeEdges]="{bottom: true, right: true}"></div>
 * </div>
 * ```
 * Or in case they are sibling elements:
 * ```html
 * <div mwlResizable #resizableElement="mwlResizable"></div>
 * <div mwlResizeHandle [resizableContainer]="resizableElement" [resizeEdges]="{bottom: true, right: true}"></div>
 * ```
 */


class ResizeHandleDirective {
  constructor(renderer, element, zone, resizableDirective) {
    this.renderer = renderer;
    this.element = element;
    this.zone = zone;
    this.resizableDirective = resizableDirective;
    /**
     * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
     */

    this.resizeEdges = {};
    this.eventListeners = {};
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.listenOnTheHost('mousedown').subscribe(event => {
        this.onMousedown(event, event.clientX, event.clientY);
      });
      this.listenOnTheHost('mouseup').subscribe(event => {
        this.onMouseup(event.clientX, event.clientY);
      });

      if (IS_TOUCH_DEVICE) {
        this.listenOnTheHost('touchstart').subscribe(event => {
          this.onMousedown(event, event.touches[0].clientX, event.touches[0].clientY);
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(this.listenOnTheHost('touchend'), this.listenOnTheHost('touchcancel')).subscribe(event => {
          this.onMouseup(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
        });
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.unsubscribeEventListeners();
  }
  /**
   * @hidden
   */


  onMousedown(event, clientX, clientY) {
    event.preventDefault();

    if (!this.eventListeners.touchmove) {
      this.eventListeners.touchmove = this.renderer.listen(this.element.nativeElement, 'touchmove', touchMoveEvent => {
        this.onMousemove(touchMoveEvent, touchMoveEvent.targetTouches[0].clientX, touchMoveEvent.targetTouches[0].clientY);
      });
    }

    if (!this.eventListeners.mousemove) {
      this.eventListeners.mousemove = this.renderer.listen(this.element.nativeElement, 'mousemove', mouseMoveEvent => {
        this.onMousemove(mouseMoveEvent, mouseMoveEvent.clientX, mouseMoveEvent.clientY);
      });
    }

    this.resizable.mousedown.next({
      clientX,
      clientY,
      edges: this.resizeEdges
    });
  }
  /**
   * @hidden
   */


  onMouseup(clientX, clientY) {
    this.unsubscribeEventListeners();
    this.resizable.mouseup.next({
      clientX,
      clientY,
      edges: this.resizeEdges
    });
  } // directive might be passed from DI or as an input


  get resizable() {
    return this.resizableDirective || this.resizableContainer;
  }

  onMousemove(event, clientX, clientY) {
    this.resizable.mousemove.next({
      clientX,
      clientY,
      edges: this.resizeEdges,
      event
    });
  }

  unsubscribeEventListeners() {
    Object.keys(this.eventListeners).forEach(type => {
      this.eventListeners[type]();
      delete this.eventListeners[type];
    });
  }

  listenOnTheHost(eventName) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.fromEvent)(this.element.nativeElement, eventName).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$));
  }

}

ResizeHandleDirective.ɵfac = function ResizeHandleDirective_Factory(t) {
  return new (t || ResizeHandleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ResizableDirective, 8));
};

ResizeHandleDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ResizeHandleDirective,
  selectors: [["", "mwlResizeHandle", ""]],
  inputs: {
    resizeEdges: "resizeEdges",
    resizableContainer: "resizableContainer"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizeHandleDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mwlResizeHandle]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: ResizableDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    resizeEdges: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resizableContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class ResizableModule {}

ResizableModule.ɵfac = function ResizableModule_Factory(t) {
  return new (t || ResizableModule)();
};

ResizableModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ResizableModule,
  declarations: [ResizableDirective, ResizeHandleDirective],
  exports: [ResizableDirective, ResizeHandleDirective]
});
ResizableModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizableModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [ResizableDirective, ResizeHandleDirective],
      exports: [ResizableDirective, ResizeHandleDirective]
    }]
  }], null, null);
})();
/*
 * Public API Surface of angular-resizable-element
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 1988:
/*!*************************************************************************************!*\
  !*** ./node_modules/angularx-flatpickr/__ivy_ngcc__/fesm2015/angularx-flatpickr.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlatpickrDefaults": () => (/* binding */ FlatpickrDefaults),
/* harmony export */   "FlatpickrDirective": () => (/* binding */ FlatpickrDirective),
/* harmony export */   "FlatpickrModule": () => (/* binding */ FlatpickrModule),
/* harmony export */   "USER_DEFAULTS": () => (/* binding */ USER_DEFAULTS),
/* harmony export */   "defaultsFactory": () => (/* binding */ defaultsFactory),
/* harmony export */   "ɵa": () => (/* binding */ FLATPICKR_CONTROL_VALUE_ACCESSOR)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flatpickr */ 9282);



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



class FlatpickrDefaults {
  constructor() {
    /**
     * Exactly the same as date format, but for the altInput field.
     */
    this.altFormat = 'F j, Y';
    /**
     * 	Show the user a readable date (as per altFormat), but return something totally different to the server.
     */

    this.altInput = false;
    /**
     * This class will be added to the input element created by the altInput option.
     * Note that `altInput` already inherits classes from the original input.
     */

    this.altInputClass = '';
    /**
     * Allows the user to enter a date directly input the input field. By default, direct entry is disabled.
     */

    this.allowInput = false;
    /**
     * Instead of `body`, appends the calendar to the specified node instead.
     */

    this.appendTo = undefined;
    /**
     * Defines how the date will be formatted in the aria-label for calendar days, using the same tokens as dateFormat. If you change this, you should choose a value that will make sense if a screen reader reads it out loud.
     */

    this.ariaDateFormat = 'F j, Y';
    /**
     * Whether clicking on the input should open the picker.
     * You could disable this if you wish to open the calendar manually `with.open()`.
     */

    this.clickOpens = true;
    /**
     * A string of characters which are used to define how the date will be displayed in the input box.
     * The supported characters are defined in the table below.
     */

    this.dateFormat = 'Y-m-d';
    /**
     * Initial value of the hour element.
     */

    this.defaultHour = 12;
    /**
     * Initial value of the minute element.
     */

    this.defaultMinute = 0;
    /**
     * Initial value of the seconds element.
     */

    this.defaultSeconds = 0;
    /**
     * See <a href="https://chmln.github.io/flatpickr/examples/#disabling-specific-dates">disabling dates</a>.
     */

    this.disable = [];
    /**
     * Set disableMobile to true to always use the non-native picker.
     * By default, Flatpickr utilizes native datetime widgets unless certain options (e.g. disable) are used.
     */

    this.disableMobile = false;
    /**
     * Enables time picker.
     */

    this.enableTime = false;
    /**
     * Enables seconds in the time picker.
     */

    this.enableSeconds = false;
    /**
     * Allows using a custom date formatting function instead of the built-in handling for date formats using dateFormat, altFormat, etc.
     */

    this.formatDate = undefined;
    /**
     * Adjusts the step for the hour input (incl. scrolling).
     */

    this.hourIncrement = 1;
    /**
     * Displays the calendar inline.
     */

    this.inline = false;
    /**
     * The maximum date that a user can pick to (inclusive).
     */

    this.maxDate = undefined;
    /**
     * The minimum date that a user can start picking from (inclusive).
     */

    this.minDate = undefined;
    /**
     * Adjusts the step for the minute input (incl. scrolling).
     */

    this.minuteIncrement = 5;
    /**
     * Select a single date, multiple dates or a date range.
     */

    this.mode = 'single';
    /**
     * HTML for the arrow icon, used to switch months.
     */

    this.nextArrow = '>';
    /**
     * Hides the day selection in calendar. Use it along with `enableTime` to create a time picker.
     */

    this.noCalendar = false;
    /**
     * Default now to the current date
     */

    this.now = new Date();
    /**
     * HTML for the left arrow icon.
     */

    this.prevArrow = '<';
    /**
     * Show the month using the shorthand version (ie, Sep instead of September).
     */

    this.shorthandCurrentMonth = false;
    /**
     * Position the calendar inside the wrapper and next to the input element. (Leave `false` unless you know what you're doing).
     */

    this.static = false;
    /**
     * Displays time picker in 24 hour mode without AM/PM selection when enabled.
     */

    this.time24hr = false;
    /**
     * When true, dates will parsed, formatted, and displayed in UTC.
     * It's recommended that date strings contain the timezone, but not necessary.
     */

    this.utc = false;
    /**
     * Enables display of week numbers in calendar.
     */

    this.weekNumbers = false;
    /**
     * Custom elements and input groups.
     */

    this.wrap = false;
    /**
     * Array of plugin instances to use.
     */

    this.plugins = [];
    /**
     * The locale object or string to use for the locale.
     */

    this.locale = 'default';
    /**
     * Auto convert the ngModel value from a string to a date / array of dates / from - to date object depending on the `mode`
     */

    this.convertModelValue = false;
    /**
     * The number of months shown.
     */

    this.showMonths = 1;
    /**
     * How the month should be displayed in the header of the calendar.
     */

    this.monthSelectorType = 'static';
  }

}

FlatpickrDefaults.ɵfac = function FlatpickrDefaults_Factory(t) {
  return new (t || FlatpickrDefaults)();
};

FlatpickrDefaults.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: FlatpickrDefaults,
  factory: FlatpickrDefaults.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlatpickrDefaults, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


const
/** @type {?} */
FLATPICKR_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => FlatpickrDirective),
  //tslint:disable-line
  multi: true
};

class FlatpickrDirective {
  /**
   * @param {?} elm
   * @param {?} defaults
   * @param {?} renderer
   */
  constructor(elm, defaults, renderer) {
    this.elm = elm;
    this.defaults = defaults;
    this.renderer = renderer;
    /**
     * Object-options that can be user for multiple instances of Flatpickr.
     * Option from this object is applied only if specific option is not specified.
     * Example:
     * ```typescript
     * options: FlatpickrDefaultsInterface = {
     *      altFormat: 'd/m/Y',   // will be ignored since altFormat is provided via specific attribute
     *      altInput: true        // will be used since specific attribute is not provided
     * };
     * ```
     * ```html
     * <input
     *   class="form-control"
     *   type="text"
     *   mwlFlatpickr
     *   [options]="options"
     *   altFormat="d/m/Y">
     * ```
     */

    this.options = {};
    /**
     * Gets triggered once the calendar is in a ready state
     */

    this.flatpickrReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Gets triggered when the user selects a date, or changes the time on a selected date.
     */

    this.flatpickrChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Gets triggered when the input value is updated with a new date string.
     */

    this.flatpickrValueUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Gets triggered when the calendar is opened.
     */

    this.flatpickrOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Gets triggered when the calendar is closed.
     */

    this.flatpickrClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Gets triggered when the month is changed, either by the user or programmatically.
     */

    this.flatpickrMonthChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Gets triggered when the year is changed, either by the user or programmatically.
     */

    this.flatpickrYearChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * Take full control of every date cell with this output
     */

    this.flatpickrDayCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.isDisabled = false;

    this.onChangeFn = () => {};

    this.onTouchedFn = () => {};
  }
  /**
   * @return {?}
   */


  ngAfterViewInit() {
    const
    /** @type {?} */
    options = {
      altFormat: this.altFormat,
      altInput: this.altInput,
      altInputClass: this.altInputClass,
      allowInput: this.allowInput,
      appendTo: this.appendTo,
      ariaDateFormat: this.ariaDateFormat,
      clickOpens: this.clickOpens,
      dateFormat: this.dateFormat,
      defaultHour: this.defaultHour,
      defaultMinute: this.defaultMinute,
      defaultSeconds: this.defaultSeconds,
      disable: this.disable,
      disableMobile: this.disableMobile,
      enable: this.enable,
      enableTime: this.enableTime,
      enableSeconds: this.enableSeconds,
      formatDate: this.formatDate,
      hourIncrement: this.hourIncrement,
      defaultDate: this.initialValue,
      inline: this.inline,
      maxDate: this.maxDate,
      minDate: this.minDate,
      minuteIncrement: this.minuteIncrement,
      mode: this.mode,
      nextArrow: this.nextArrow,
      noCalendar: this.noCalendar,
      now: this.now,
      parseDate: this.parseDate,
      prevArrow: this.prevArrow,
      shorthandCurrentMonth: this.shorthandCurrentMonth,
      showMonths: this.showMonths,
      monthSelectorType: this.monthSelectorType,
      static: this.static,
      time24hr: this.time24hr,
      weekNumbers: this.weekNumbers,
      getWeek: this.getWeek,
      wrap: this.wrap,
      plugins: this.plugins,
      locale: this.locale,
      onChange: (selectedDates, dateString, instance) => {
        this.flatpickrChange.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onOpen: (selectedDates, dateString, instance) => {
        this.flatpickrOpen.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onClose: (selectedDates, dateString, instance) => {
        this.flatpickrClose.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onMonthChange: (selectedDates, dateString, instance) => {
        this.flatpickrMonthChange.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onYearChange: (selectedDates, dateString, instance) => {
        this.flatpickrYearChange.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onReady: (selectedDates, dateString, instance) => {
        this.flatpickrReady.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onValueUpdate: (selectedDates, dateString, instance) => {
        this.flatpickrValueUpdate.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onDayCreate: (selectedDates, dateString, instance, dayElement) => {
        this.flatpickrDayCreate.emit({
          selectedDates,
          dateString,
          instance,
          dayElement
        });
      }
    };
    Object.keys(options).forEach(key => {
      if (typeof options[key] === 'undefined') {
        if (typeof this.options[key] !== 'undefined') {
          options[key] =
          /** @type {?} */
          this.options[key];
        } else {
          options[key] =
          /** @type {?} */
          this.defaults[key];
        }
      }
    });
    options.time_24hr = options.time24hr; // workaround bug in flatpickr 4.6 where it doesn't copy the classes across
    // TODO - remove once fix in https://github.com/flatpickr/flatpickr/issues/1860 is released

    options.altInputClass = (options.altInputClass || '') + ' ' + this.elm.nativeElement.className;

    if (!options.enable) {
      delete options.enable;
    }

    this.instance =
    /** @type {?} */
    (0,flatpickr__WEBPACK_IMPORTED_MODULE_0__["default"])(this.elm.nativeElement, options);
    this.setDisabledState(this.isDisabled);
  }
  /**
   * @param {?} changes
   * @return {?}
   */


  ngOnChanges(changes) {
    if (this.instance) {
      Object.keys(changes).forEach(inputKey => {
        this.instance.set(
        /** @type {?} */
        inputKey,
        /** @type {?} */
        this[inputKey]);
      });
    }
  }
  /**
   * @return {?}
   */


  ngOnDestroy() {
    if (this.instance) {
      this.instance.destroy();
    }
  }
  /**
   * @param {?} value
   * @return {?}
   */


  writeValue(value) {
    let
    /** @type {?} */
    convertedValue = value;

    if (this.convertModelValue && this.mode === 'range' && value) {
      convertedValue = [value.from, value.to];
    }

    if (this.instance) {
      this.instance.setDate(convertedValue);
    } else {
      // flatpickr hasn't been initialised yet, store the value for later use
      this.initialValue = convertedValue;
    }
  }
  /**
   * @param {?} fn
   * @return {?}
   */


  registerOnChange(fn) {
    this.onChangeFn = fn;
  }
  /**
   * @param {?} fn
   * @return {?}
   */


  registerOnTouched(fn) {
    this.onTouchedFn = fn;
  }
  /**
   * @param {?} isDisabled
   * @return {?}
   */


  setDisabledState(isDisabled) {
    this.isDisabled = isDisabled;

    if (this.instance) {
      if (this.isDisabled) {
        this.renderer.setProperty(this.instance._input, 'disabled', 'disabled');
      } else {
        this.renderer.removeAttribute(this.instance._input, 'disabled');
      }
    }
  }
  /**
   * @return {?}
   */


  inputChanged() {
    const
    /** @type {?} */
    value = this.elm.nativeElement.value;

    if (this.convertModelValue && typeof value === 'string') {
      switch (this.mode) {
        case 'multiple':
          const
          /** @type {?} */
          dates = value.split('; ').map(str => this.instance.parseDate(str, this.instance.config.dateFormat, !this.instance.config.enableTime));
          this.onChangeFn(dates);
          break;

        case 'range':
          const [from, to] = value.split(this.instance.l10n.rangeSeparator).map(str => this.instance.parseDate(str, this.instance.config.dateFormat, !this.instance.config.enableTime));
          this.onChangeFn({
            from,
            to
          });
          break;

        case 'single':
        default:
          this.onChangeFn(this.instance.parseDate(value, this.instance.config.dateFormat, !this.instance.config.enableTime));
      }
    } else {
      this.onChangeFn(value);
    }
  }

}

FlatpickrDirective.ɵfac = function FlatpickrDirective_Factory(t) {
  return new (t || FlatpickrDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FlatpickrDefaults), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
};

FlatpickrDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: FlatpickrDirective,
  selectors: [["", "mwlFlatpickr", ""]],
  hostBindings: function FlatpickrDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function FlatpickrDirective_blur_HostBindingHandler() {
        return ctx.onTouchedFn();
      })("input", function FlatpickrDirective_input_HostBindingHandler() {
        return ctx.inputChanged();
      });
    }
  },
  inputs: {
    options: "options",
    altFormat: "altFormat",
    altInput: "altInput",
    altInputClass: "altInputClass",
    allowInput: "allowInput",
    appendTo: "appendTo",
    ariaDateFormat: "ariaDateFormat",
    clickOpens: "clickOpens",
    dateFormat: "dateFormat",
    defaultHour: "defaultHour",
    defaultMinute: "defaultMinute",
    defaultSeconds: "defaultSeconds",
    disable: "disable",
    disableMobile: "disableMobile",
    enable: "enable",
    enableTime: "enableTime",
    enableSeconds: "enableSeconds",
    formatDate: "formatDate",
    hourIncrement: "hourIncrement",
    inline: "inline",
    maxDate: "maxDate",
    minDate: "minDate",
    minuteIncrement: "minuteIncrement",
    mode: "mode",
    nextArrow: "nextArrow",
    noCalendar: "noCalendar",
    now: "now",
    parseDate: "parseDate",
    prevArrow: "prevArrow",
    shorthandCurrentMonth: "shorthandCurrentMonth",
    showMonths: "showMonths",
    static: "static",
    time24hr: "time24hr",
    weekNumbers: "weekNumbers",
    getWeek: "getWeek",
    wrap: "wrap",
    plugins: "plugins",
    locale: "locale",
    convertModelValue: "convertModelValue",
    monthSelectorType: "monthSelectorType"
  },
  outputs: {
    flatpickrReady: "flatpickrReady",
    flatpickrChange: "flatpickrChange",
    flatpickrValueUpdate: "flatpickrValueUpdate",
    flatpickrOpen: "flatpickrOpen",
    flatpickrClose: "flatpickrClose",
    flatpickrMonthChange: "flatpickrMonthChange",
    flatpickrYearChange: "flatpickrYearChange",
    flatpickrDayCreate: "flatpickrDayCreate"
  },
  exportAs: ["mwlFlatpickr"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([FLATPICKR_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
});
/** @nocollapse */

FlatpickrDirective.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
}, {
  type: FlatpickrDefaults
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
}];

FlatpickrDirective.propDecorators = {
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  altFormat: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  altInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  altInputClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  allowInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  appendTo: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  ariaDateFormat: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  clickOpens: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  dateFormat: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  defaultHour: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  defaultMinute: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  defaultSeconds: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  disable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  disableMobile: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  enable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  enableTime: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  enableSeconds: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  formatDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  hourIncrement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  inline: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  maxDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  minDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  minuteIncrement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  mode: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  nextArrow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  noCalendar: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  now: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  parseDate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  prevArrow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  shorthandCurrentMonth: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  showMonths: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  static: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  time24hr: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  weekNumbers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  getWeek: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  wrap: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  plugins: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  locale: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  convertModelValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  monthSelectorType: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  flatpickrReady: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  flatpickrChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  flatpickrValueUpdate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  flatpickrOpen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  flatpickrClose: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  flatpickrMonthChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  flatpickrYearChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  flatpickrDayCreate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  inputChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
    args: ['input']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlatpickrDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[mwlFlatpickr]',
      providers: [FLATPICKR_CONTROL_VALUE_ACCESSOR],
      host: {
        // tslint:disable-line use-host-property-decorator
        '(blur)': 'onTouchedFn()'
      },
      exportAs: 'mwlFlatpickr'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: FlatpickrDefaults
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    flatpickrReady: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    flatpickrChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    flatpickrValueUpdate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    flatpickrOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    flatpickrClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    flatpickrMonthChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    flatpickrYearChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    flatpickrDayCreate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],

    /**
     * @return {?}
     */
    inputChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['input']
    }],
    altFormat: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    altInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    altInputClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    allowInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    ariaDateFormat: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    clickOpens: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    dateFormat: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    defaultHour: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    defaultMinute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    defaultSeconds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    disable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    disableMobile: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    enable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    enableTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    enableSeconds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    formatDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    hourIncrement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maxDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minuteIncrement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    mode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nextArrow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    noCalendar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    now: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    parseDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    prevArrow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    shorthandCurrentMonth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showMonths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    static: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    time24hr: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    weekNumbers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    getWeek: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    wrap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    plugins: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    locale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    convertModelValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    monthSelectorType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


const
/** @type {?} */
USER_DEFAULTS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('flatpickr defaults');
/**
 * @param {?} userDefaults
 * @return {?}
 */

function defaultsFactory(userDefaults) {
  const
  /** @type {?} */
  defaults = new FlatpickrDefaults();
  Object.assign(defaults, userDefaults);
  return defaults;
}

class FlatpickrModule {
  /**
   * @param {?=} userDefaults
   * @return {?}
   */
  static forRoot(userDefaults = {}) {
    return {
      ngModule: FlatpickrModule,
      providers: [{
        provide: USER_DEFAULTS,
        useValue: userDefaults
      }, {
        provide: FlatpickrDefaults,
        useFactory: defaultsFactory,
        deps: [USER_DEFAULTS]
      }]
    };
  }

}

FlatpickrModule.ɵfac = function FlatpickrModule_Factory(t) {
  return new (t || FlatpickrModule)();
};

FlatpickrModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: FlatpickrModule
});
FlatpickrModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlatpickrModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: [FlatpickrDirective],
      exports: [FlatpickrDirective]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FlatpickrModule, {
    declarations: [FlatpickrDirective],
    exports: [FlatpickrDirective]
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */




/***/ }),

/***/ 1916:
/*!*******************************************************!*\
  !*** ./node_modules/calendar-utils/calendar-utils.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DAYS_OF_WEEK": () => (/* binding */ DAYS_OF_WEEK),
/* harmony export */   "EventValidationErrorMessage": () => (/* binding */ EventValidationErrorMessage),
/* harmony export */   "SECONDS_IN_DAY": () => (/* binding */ SECONDS_IN_DAY),
/* harmony export */   "getAllDayWeekEvents": () => (/* binding */ getAllDayWeekEvents),
/* harmony export */   "getDifferenceInDaysWithExclusions": () => (/* binding */ getDifferenceInDaysWithExclusions),
/* harmony export */   "getEventsInPeriod": () => (/* binding */ getEventsInPeriod),
/* harmony export */   "getMonthView": () => (/* binding */ getMonthView),
/* harmony export */   "getWeekView": () => (/* binding */ getWeekView),
/* harmony export */   "getWeekViewHeader": () => (/* binding */ getWeekViewHeader),
/* harmony export */   "validateEvents": () => (/* binding */ validateEvents)
/* harmony export */ });
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

var DAYS_OF_WEEK;

(function (DAYS_OF_WEEK) {
  DAYS_OF_WEEK[DAYS_OF_WEEK["SUNDAY"] = 0] = "SUNDAY";
  DAYS_OF_WEEK[DAYS_OF_WEEK["MONDAY"] = 1] = "MONDAY";
  DAYS_OF_WEEK[DAYS_OF_WEEK["TUESDAY"] = 2] = "TUESDAY";
  DAYS_OF_WEEK[DAYS_OF_WEEK["WEDNESDAY"] = 3] = "WEDNESDAY";
  DAYS_OF_WEEK[DAYS_OF_WEEK["THURSDAY"] = 4] = "THURSDAY";
  DAYS_OF_WEEK[DAYS_OF_WEEK["FRIDAY"] = 5] = "FRIDAY";
  DAYS_OF_WEEK[DAYS_OF_WEEK["SATURDAY"] = 6] = "SATURDAY";
})(DAYS_OF_WEEK || (DAYS_OF_WEEK = {}));

var DEFAULT_WEEKEND_DAYS = [DAYS_OF_WEEK.SUNDAY, DAYS_OF_WEEK.SATURDAY];
var DAYS_IN_WEEK = 7;
var HOURS_IN_DAY = 24;
var MINUTES_IN_HOUR = 60;
var SECONDS_IN_DAY = 60 * 60 * 24;

function getExcludedSeconds(dateAdapter, _a) {
  var startDate = _a.startDate,
      seconds = _a.seconds,
      excluded = _a.excluded,
      precision = _a.precision;

  if (excluded.length < 1) {
    return 0;
  }

  var addSeconds = dateAdapter.addSeconds,
      getDay = dateAdapter.getDay,
      addDays = dateAdapter.addDays;
  var endDate = addSeconds(startDate, seconds - 1);
  var dayStart = getDay(startDate);
  var dayEnd = getDay(endDate);
  var result = 0; // Calculated in seconds

  var current = startDate;

  var _loop_1 = function () {
    var day = getDay(current);

    if (excluded.some(function (excludedDay) {
      return excludedDay === day;
    })) {
      result += calculateExcludedSeconds(dateAdapter, {
        dayStart: dayStart,
        dayEnd: dayEnd,
        day: day,
        precision: precision,
        startDate: startDate,
        endDate: endDate
      });
    }

    current = addDays(current, 1);
  };

  while (current < endDate) {
    _loop_1();
  }

  return result;
}

function calculateExcludedSeconds(dateAdapter, _a) {
  var precision = _a.precision,
      day = _a.day,
      dayStart = _a.dayStart,
      dayEnd = _a.dayEnd,
      startDate = _a.startDate,
      endDate = _a.endDate;
  var differenceInSeconds = dateAdapter.differenceInSeconds,
      endOfDay = dateAdapter.endOfDay,
      startOfDay = dateAdapter.startOfDay;

  if (precision === 'minutes') {
    if (day === dayStart) {
      return differenceInSeconds(endOfDay(startDate), startDate) + 1;
    } else if (day === dayEnd) {
      return differenceInSeconds(endDate, startOfDay(endDate)) + 1;
    }
  }

  return SECONDS_IN_DAY;
}

function getWeekViewEventSpan(dateAdapter, _a) {
  var event = _a.event,
      offset = _a.offset,
      startOfWeekDate = _a.startOfWeekDate,
      excluded = _a.excluded,
      precision = _a.precision,
      totalDaysInView = _a.totalDaysInView;
  var max = dateAdapter.max,
      differenceInSeconds = dateAdapter.differenceInSeconds,
      addDays = dateAdapter.addDays,
      endOfDay = dateAdapter.endOfDay,
      differenceInDays = dateAdapter.differenceInDays;
  var span = SECONDS_IN_DAY;
  var begin = max([event.start, startOfWeekDate]);

  if (event.end) {
    switch (precision) {
      case 'minutes':
        span = differenceInSeconds(event.end, begin);
        break;

      default:
        span = differenceInDays(addDays(endOfDay(event.end), 1), begin) * SECONDS_IN_DAY;
        break;
    }
  }

  var offsetSeconds = offset * SECONDS_IN_DAY;
  var totalLength = offsetSeconds + span; // the best way to detect if an event is outside the week-view
  // is to check if the total span beginning (from startOfWeekDay or event start) exceeds the total days in the view

  var secondsInView = totalDaysInView * SECONDS_IN_DAY;

  if (totalLength > secondsInView) {
    span = secondsInView - offsetSeconds;
  }

  span -= getExcludedSeconds(dateAdapter, {
    startDate: begin,
    seconds: span,
    excluded: excluded,
    precision: precision
  });
  return span / SECONDS_IN_DAY;
}

function getWeekViewEventOffset(dateAdapter, _a) {
  var event = _a.event,
      startOfWeekDate = _a.startOfWeek,
      excluded = _a.excluded,
      precision = _a.precision;
  var differenceInDays = dateAdapter.differenceInDays,
      startOfDay = dateAdapter.startOfDay,
      differenceInSeconds = dateAdapter.differenceInSeconds;

  if (event.start < startOfWeekDate) {
    return 0;
  }

  var offset = 0;

  switch (precision) {
    case 'days':
      offset = differenceInDays(startOfDay(event.start), startOfWeekDate) * SECONDS_IN_DAY;
      break;

    case 'minutes':
      offset = differenceInSeconds(event.start, startOfWeekDate);
      break;
  }

  offset -= getExcludedSeconds(dateAdapter, {
    startDate: startOfWeekDate,
    seconds: offset,
    excluded: excluded,
    precision: precision
  });
  return Math.abs(offset / SECONDS_IN_DAY);
}

function isEventIsPeriod(dateAdapter, _a) {
  var event = _a.event,
      periodStart = _a.periodStart,
      periodEnd = _a.periodEnd;
  var isSameSecond = dateAdapter.isSameSecond;
  var eventStart = event.start;
  var eventEnd = event.end || event.start;

  if (eventStart > periodStart && eventStart < periodEnd) {
    return true;
  }

  if (eventEnd > periodStart && eventEnd < periodEnd) {
    return true;
  }

  if (eventStart < periodStart && eventEnd > periodEnd) {
    return true;
  }

  if (isSameSecond(eventStart, periodStart) || isSameSecond(eventStart, periodEnd)) {
    return true;
  }

  if (isSameSecond(eventEnd, periodStart) || isSameSecond(eventEnd, periodEnd)) {
    return true;
  }

  return false;
}

function getEventsInPeriod(dateAdapter, _a) {
  var events = _a.events,
      periodStart = _a.periodStart,
      periodEnd = _a.periodEnd;
  return events.filter(function (event) {
    return isEventIsPeriod(dateAdapter, {
      event: event,
      periodStart: periodStart,
      periodEnd: periodEnd
    });
  });
}

function getWeekDay(dateAdapter, _a) {
  var date = _a.date,
      _b = _a.weekendDays,
      weekendDays = _b === void 0 ? DEFAULT_WEEKEND_DAYS : _b;
  var startOfDay = dateAdapter.startOfDay,
      isSameDay = dateAdapter.isSameDay,
      getDay = dateAdapter.getDay;
  var today = startOfDay(new Date());
  var day = getDay(date);
  return {
    date: date,
    day: day,
    isPast: date < today,
    isToday: isSameDay(date, today),
    isFuture: date > today,
    isWeekend: weekendDays.indexOf(day) > -1
  };
}

function getWeekViewHeader(dateAdapter, _a) {
  var viewDate = _a.viewDate,
      weekStartsOn = _a.weekStartsOn,
      _b = _a.excluded,
      excluded = _b === void 0 ? [] : _b,
      weekendDays = _a.weekendDays,
      _c = _a.viewStart,
      viewStart = _c === void 0 ? dateAdapter.startOfWeek(viewDate, {
    weekStartsOn: weekStartsOn
  }) : _c,
      _d = _a.viewEnd,
      viewEnd = _d === void 0 ? dateAdapter.addDays(viewStart, DAYS_IN_WEEK) : _d;
  var addDays = dateAdapter.addDays,
      getDay = dateAdapter.getDay;
  var days = [];
  var date = viewStart;

  while (date < viewEnd) {
    if (!excluded.some(function (e) {
      return getDay(date) === e;
    })) {
      days.push(getWeekDay(dateAdapter, {
        date: date,
        weekendDays: weekendDays
      }));
    }

    date = addDays(date, 1);
  }

  return days;
}
function getDifferenceInDaysWithExclusions(dateAdapter, _a) {
  var date1 = _a.date1,
      date2 = _a.date2,
      excluded = _a.excluded;
  var date = date1;
  var diff = 0;

  while (date < date2) {
    if (excluded.indexOf(dateAdapter.getDay(date)) === -1) {
      diff++;
    }

    date = dateAdapter.addDays(date, 1);
  }

  return diff;
}
function getAllDayWeekEvents(dateAdapter, _a) {
  var _b = _a.events,
      events = _b === void 0 ? [] : _b,
      _c = _a.excluded,
      excluded = _c === void 0 ? [] : _c,
      _d = _a.precision,
      precision = _d === void 0 ? 'days' : _d,
      _e = _a.absolutePositionedEvents,
      absolutePositionedEvents = _e === void 0 ? false : _e,
      viewStart = _a.viewStart,
      viewEnd = _a.viewEnd;
  viewStart = dateAdapter.startOfDay(viewStart);
  viewEnd = dateAdapter.endOfDay(viewEnd);
  var differenceInSeconds = dateAdapter.differenceInSeconds,
      differenceInDays = dateAdapter.differenceInDays;
  var maxRange = getDifferenceInDaysWithExclusions(dateAdapter, {
    date1: viewStart,
    date2: viewEnd,
    excluded: excluded
  });
  var totalDaysInView = differenceInDays(viewEnd, viewStart) + 1;
  var eventsMapped = events.filter(function (event) {
    return event.allDay;
  }).map(function (event) {
    var offset = getWeekViewEventOffset(dateAdapter, {
      event: event,
      startOfWeek: viewStart,
      excluded: excluded,
      precision: precision
    });
    var span = getWeekViewEventSpan(dateAdapter, {
      event: event,
      offset: offset,
      startOfWeekDate: viewStart,
      excluded: excluded,
      precision: precision,
      totalDaysInView: totalDaysInView
    });
    return {
      event: event,
      offset: offset,
      span: span
    };
  }).filter(function (e) {
    return e.offset < maxRange;
  }).filter(function (e) {
    return e.span > 0;
  }).map(function (entry) {
    return {
      event: entry.event,
      offset: entry.offset,
      span: entry.span,
      startsBeforeWeek: entry.event.start < viewStart,
      endsAfterWeek: (entry.event.end || entry.event.start) > viewEnd
    };
  }).sort(function (itemA, itemB) {
    var startSecondsDiff = differenceInSeconds(itemA.event.start, itemB.event.start);

    if (startSecondsDiff === 0) {
      return differenceInSeconds(itemB.event.end || itemB.event.start, itemA.event.end || itemA.event.start);
    }

    return startSecondsDiff;
  });
  var allDayEventRows = [];
  var allocatedEvents = [];
  eventsMapped.forEach(function (event, index) {
    if (allocatedEvents.indexOf(event) === -1) {
      allocatedEvents.push(event);
      var rowSpan_1 = event.span + event.offset;
      var otherRowEvents = eventsMapped.slice(index + 1).filter(function (nextEvent) {
        if (nextEvent.offset >= rowSpan_1 && rowSpan_1 + nextEvent.span <= totalDaysInView && allocatedEvents.indexOf(nextEvent) === -1) {
          var nextEventOffset = nextEvent.offset - rowSpan_1;

          if (!absolutePositionedEvents) {
            nextEvent.offset = nextEventOffset;
          }

          rowSpan_1 += nextEvent.span + nextEventOffset;
          allocatedEvents.push(nextEvent);
          return true;
        }
      });

      var weekEvents = __spreadArrays([event], otherRowEvents);

      var id = weekEvents.filter(function (weekEvent) {
        return weekEvent.event.id;
      }).map(function (weekEvent) {
        return weekEvent.event.id;
      }).join('-');
      allDayEventRows.push(__assign({
        row: weekEvents
      }, id ? {
        id: id
      } : {}));
    }
  });
  return allDayEventRows;
}

function getWeekViewHourGrid(dateAdapter, _a) {
  var events = _a.events,
      viewDate = _a.viewDate,
      hourSegments = _a.hourSegments,
      hourDuration = _a.hourDuration,
      dayStart = _a.dayStart,
      dayEnd = _a.dayEnd,
      weekStartsOn = _a.weekStartsOn,
      excluded = _a.excluded,
      weekendDays = _a.weekendDays,
      segmentHeight = _a.segmentHeight,
      viewStart = _a.viewStart,
      viewEnd = _a.viewEnd,
      minimumEventHeight = _a.minimumEventHeight;
  var dayViewHourGrid = getDayViewHourGrid(dateAdapter, {
    viewDate: viewDate,
    hourSegments: hourSegments,
    hourDuration: hourDuration,
    dayStart: dayStart,
    dayEnd: dayEnd
  });
  var weekDays = getWeekViewHeader(dateAdapter, {
    viewDate: viewDate,
    weekStartsOn: weekStartsOn,
    excluded: excluded,
    weekendDays: weekendDays,
    viewStart: viewStart,
    viewEnd: viewEnd
  });
  var setHours = dateAdapter.setHours,
      setMinutes = dateAdapter.setMinutes,
      getHours = dateAdapter.getHours,
      getMinutes = dateAdapter.getMinutes;
  return weekDays.map(function (day) {
    var dayView = getDayView(dateAdapter, {
      events: events,
      viewDate: day.date,
      hourSegments: hourSegments,
      dayStart: dayStart,
      dayEnd: dayEnd,
      segmentHeight: segmentHeight,
      eventWidth: 1,
      hourDuration: hourDuration,
      minimumEventHeight: minimumEventHeight
    });
    var hours = dayViewHourGrid.map(function (hour) {
      var segments = hour.segments.map(function (segment) {
        var date = setMinutes(setHours(day.date, getHours(segment.date)), getMinutes(segment.date));
        return __assign(__assign({}, segment), {
          date: date
        });
      });
      return __assign(__assign({}, hour), {
        segments: segments
      });
    });

    function getColumnCount(allEvents, prevOverlappingEvents) {
      var columnCount = Math.max.apply(Math, prevOverlappingEvents.map(function (iEvent) {
        return iEvent.left + 1;
      }));
      var nextOverlappingEvents = allEvents.filter(function (iEvent) {
        return iEvent.left >= columnCount;
      }).filter(function (iEvent) {
        return getOverLappingWeekViewEvents(prevOverlappingEvents, iEvent.top, iEvent.top + iEvent.height).length > 0;
      });

      if (nextOverlappingEvents.length > 0) {
        return getColumnCount(allEvents, nextOverlappingEvents);
      } else {
        return columnCount;
      }
    }

    var mappedEvents = dayView.events.map(function (event) {
      var columnCount = getColumnCount(dayView.events, getOverLappingWeekViewEvents(dayView.events, event.top, event.top + event.height));
      var width = 100 / columnCount;
      return __assign(__assign({}, event), {
        left: event.left * width,
        width: width
      });
    });
    return {
      hours: hours,
      date: day.date,
      events: mappedEvents.map(function (event) {
        var overLappingEvents = getOverLappingWeekViewEvents(mappedEvents.filter(function (otherEvent) {
          return otherEvent.left > event.left;
        }), event.top, event.top + event.height);

        if (overLappingEvents.length > 0) {
          return __assign(__assign({}, event), {
            width: Math.min.apply(Math, overLappingEvents.map(function (otherEvent) {
              return otherEvent.left;
            })) - event.left
          });
        }

        return event;
      })
    };
  });
}

function getWeekView(dateAdapter, _a) {
  var _b = _a.events,
      events = _b === void 0 ? [] : _b,
      viewDate = _a.viewDate,
      weekStartsOn = _a.weekStartsOn,
      _c = _a.excluded,
      excluded = _c === void 0 ? [] : _c,
      _d = _a.precision,
      precision = _d === void 0 ? 'days' : _d,
      _e = _a.absolutePositionedEvents,
      absolutePositionedEvents = _e === void 0 ? false : _e,
      hourSegments = _a.hourSegments,
      hourDuration = _a.hourDuration,
      dayStart = _a.dayStart,
      dayEnd = _a.dayEnd,
      weekendDays = _a.weekendDays,
      segmentHeight = _a.segmentHeight,
      minimumEventHeight = _a.minimumEventHeight,
      _f = _a.viewStart,
      viewStart = _f === void 0 ? dateAdapter.startOfWeek(viewDate, {
    weekStartsOn: weekStartsOn
  }) : _f,
      _g = _a.viewEnd,
      viewEnd = _g === void 0 ? dateAdapter.endOfWeek(viewDate, {
    weekStartsOn: weekStartsOn
  }) : _g;

  if (!events) {
    events = [];
  }

  var startOfDay = dateAdapter.startOfDay,
      endOfDay = dateAdapter.endOfDay;
  viewStart = startOfDay(viewStart);
  viewEnd = endOfDay(viewEnd);
  var eventsInPeriod = getEventsInPeriod(dateAdapter, {
    events: events,
    periodStart: viewStart,
    periodEnd: viewEnd
  });
  var header = getWeekViewHeader(dateAdapter, {
    viewDate: viewDate,
    weekStartsOn: weekStartsOn,
    excluded: excluded,
    weekendDays: weekendDays,
    viewStart: viewStart,
    viewEnd: viewEnd
  });
  return {
    allDayEventRows: getAllDayWeekEvents(dateAdapter, {
      events: eventsInPeriod,
      excluded: excluded,
      precision: precision,
      absolutePositionedEvents: absolutePositionedEvents,
      viewStart: viewStart,
      viewEnd: viewEnd
    }),
    period: {
      events: eventsInPeriod,
      start: header[0].date,
      end: endOfDay(header[header.length - 1].date)
    },
    hourColumns: getWeekViewHourGrid(dateAdapter, {
      events: events,
      viewDate: viewDate,
      hourSegments: hourSegments,
      hourDuration: hourDuration,
      dayStart: dayStart,
      dayEnd: dayEnd,
      weekStartsOn: weekStartsOn,
      excluded: excluded,
      weekendDays: weekendDays,
      segmentHeight: segmentHeight,
      viewStart: viewStart,
      viewEnd: viewEnd,
      minimumEventHeight: minimumEventHeight
    })
  };
}
function getMonthView(dateAdapter, _a) {
  var _b = _a.events,
      events = _b === void 0 ? [] : _b,
      viewDate = _a.viewDate,
      weekStartsOn = _a.weekStartsOn,
      _c = _a.excluded,
      excluded = _c === void 0 ? [] : _c,
      _d = _a.viewStart,
      viewStart = _d === void 0 ? dateAdapter.startOfMonth(viewDate) : _d,
      _e = _a.viewEnd,
      viewEnd = _e === void 0 ? dateAdapter.endOfMonth(viewDate) : _e,
      weekendDays = _a.weekendDays;

  if (!events) {
    events = [];
  }

  var startOfWeek = dateAdapter.startOfWeek,
      endOfWeek = dateAdapter.endOfWeek,
      differenceInDays = dateAdapter.differenceInDays,
      startOfDay = dateAdapter.startOfDay,
      addHours = dateAdapter.addHours,
      endOfDay = dateAdapter.endOfDay,
      isSameMonth = dateAdapter.isSameMonth,
      getDay = dateAdapter.getDay,
      getMonth = dateAdapter.getMonth;
  var start = startOfWeek(viewStart, {
    weekStartsOn: weekStartsOn
  });
  var end = endOfWeek(viewEnd, {
    weekStartsOn: weekStartsOn
  });
  var eventsInMonth = getEventsInPeriod(dateAdapter, {
    events: events,
    periodStart: start,
    periodEnd: end
  });
  var initialViewDays = [];
  var previousDate;

  var _loop_2 = function (i) {
    // hacky fix for https://github.com/mattlewis92/angular-calendar/issues/173
    var date;

    if (previousDate) {
      date = startOfDay(addHours(previousDate, HOURS_IN_DAY));

      if (previousDate.getTime() === date.getTime()) {
        // DST change, so need to add 25 hours

        /* istanbul ignore next */
        date = startOfDay(addHours(previousDate, HOURS_IN_DAY + 1));
      }

      previousDate = date;
    } else {
      date = previousDate = start;
    }

    if (!excluded.some(function (e) {
      return getDay(date) === e;
    })) {
      var day = getWeekDay(dateAdapter, {
        date: date,
        weekendDays: weekendDays
      });
      var eventsInPeriod = getEventsInPeriod(dateAdapter, {
        events: eventsInMonth,
        periodStart: startOfDay(date),
        periodEnd: endOfDay(date)
      });
      day.inMonth = isSameMonth(date, viewDate);
      day.events = eventsInPeriod;
      day.badgeTotal = eventsInPeriod.length;
      initialViewDays.push(day);
    }
  };

  for (var i = 0; i < differenceInDays(end, start) + 1; i++) {
    _loop_2(i);
  }

  var days = [];
  var totalDaysVisibleInWeek = DAYS_IN_WEEK - excluded.length;

  if (totalDaysVisibleInWeek < DAYS_IN_WEEK) {
    for (var i = 0; i < initialViewDays.length; i += totalDaysVisibleInWeek) {
      var row = initialViewDays.slice(i, i + totalDaysVisibleInWeek);
      var isRowInMonth = row.some(function (day) {
        return viewStart <= day.date && day.date < viewEnd;
      });

      if (isRowInMonth) {
        days = __spreadArrays(days, row);
      }
    }
  } else {
    days = initialViewDays;
  }

  var rows = Math.floor(days.length / totalDaysVisibleInWeek);
  var rowOffsets = [];

  for (var i = 0; i < rows; i++) {
    rowOffsets.push(i * totalDaysVisibleInWeek);
  }

  return {
    rowOffsets: rowOffsets,
    totalDaysVisibleInWeek: totalDaysVisibleInWeek,
    days: days,
    period: {
      start: days[0].date,
      end: endOfDay(days[days.length - 1].date),
      events: eventsInMonth
    }
  };
}

function getOverLappingWeekViewEvents(events, top, bottom) {
  return events.filter(function (previousEvent) {
    var previousEventTop = previousEvent.top;
    var previousEventBottom = previousEvent.top + previousEvent.height;

    if (top < previousEventBottom && previousEventBottom < bottom) {
      return true;
    } else if (top < previousEventTop && previousEventTop < bottom) {
      return true;
    } else if (previousEventTop <= top && bottom <= previousEventBottom) {
      return true;
    }

    return false;
  });
}

function getDayView(dateAdapter, _a) {
  var events = _a.events,
      viewDate = _a.viewDate,
      hourSegments = _a.hourSegments,
      dayStart = _a.dayStart,
      dayEnd = _a.dayEnd,
      eventWidth = _a.eventWidth,
      segmentHeight = _a.segmentHeight,
      hourDuration = _a.hourDuration,
      minimumEventHeight = _a.minimumEventHeight;
  var setMinutes = dateAdapter.setMinutes,
      setHours = dateAdapter.setHours,
      startOfDay = dateAdapter.startOfDay,
      startOfMinute = dateAdapter.startOfMinute,
      endOfDay = dateAdapter.endOfDay,
      differenceInMinutes = dateAdapter.differenceInMinutes;
  var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
  var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
  endOfView.setSeconds(59, 999);
  var previousDayEvents = [];
  var eventsInPeriod = getEventsInPeriod(dateAdapter, {
    events: events.filter(function (event) {
      return !event.allDay;
    }),
    periodStart: startOfView,
    periodEnd: endOfView
  });
  var dayViewEvents = eventsInPeriod.sort(function (eventA, eventB) {
    return eventA.start.valueOf() - eventB.start.valueOf();
  }).map(function (event) {
    var eventStart = event.start;
    var eventEnd = event.end || eventStart;
    var startsBeforeDay = eventStart < startOfView;
    var endsAfterDay = eventEnd > endOfView;
    var hourHeightModifier = hourSegments * segmentHeight / (hourDuration || MINUTES_IN_HOUR);
    var top = 0;

    if (eventStart > startOfView) {
      // adjust the difference in minutes if the user's offset is different between the start of the day and the event (e.g. when going to or from DST)
      var eventOffset = dateAdapter.getTimezoneOffset(eventStart);
      var startOffset = dateAdapter.getTimezoneOffset(startOfView);
      var diff = startOffset - eventOffset;
      top += differenceInMinutes(eventStart, startOfView) + diff;
    }

    top *= hourHeightModifier;
    top = Math.floor(top);
    var startDate = startsBeforeDay ? startOfView : eventStart;
    var endDate = endsAfterDay ? endOfView : eventEnd;
    var timezoneOffset = dateAdapter.getTimezoneOffset(startDate) - dateAdapter.getTimezoneOffset(endDate);
    var height = differenceInMinutes(endDate, startDate) + timezoneOffset;

    if (!event.end) {
      height = segmentHeight;
    } else {
      height *= hourHeightModifier;
    }

    if (minimumEventHeight && height < minimumEventHeight) {
      height = minimumEventHeight;
    }

    height = Math.floor(height);
    var bottom = top + height;
    var overlappingPreviousEvents = getOverLappingWeekViewEvents(previousDayEvents, top, bottom);
    var left = 0;

    while (overlappingPreviousEvents.some(function (previousEvent) {
      return previousEvent.left === left;
    })) {
      left += eventWidth;
    }

    var dayEvent = {
      event: event,
      height: height,
      width: eventWidth,
      top: top,
      left: left,
      startsBeforeDay: startsBeforeDay,
      endsAfterDay: endsAfterDay
    };
    previousDayEvents.push(dayEvent);
    return dayEvent;
  });
  var width = Math.max.apply(Math, dayViewEvents.map(function (event) {
    return event.left + event.width;
  }));
  var allDayEvents = getEventsInPeriod(dateAdapter, {
    events: events.filter(function (event) {
      return event.allDay;
    }),
    periodStart: startOfDay(startOfView),
    periodEnd: endOfDay(endOfView)
  });
  return {
    events: dayViewEvents,
    width: width,
    allDayEvents: allDayEvents,
    period: {
      events: eventsInPeriod,
      start: startOfView,
      end: endOfView
    }
  };
}

function sanitiseHours(hours) {
  return Math.max(Math.min(23, hours), 0);
}

function sanitiseMinutes(minutes) {
  return Math.max(Math.min(59, minutes), 0);
}

function getDayViewHourGrid(dateAdapter, _a) {
  var viewDate = _a.viewDate,
      hourSegments = _a.hourSegments,
      hourDuration = _a.hourDuration,
      dayStart = _a.dayStart,
      dayEnd = _a.dayEnd;
  var setMinutes = dateAdapter.setMinutes,
      setHours = dateAdapter.setHours,
      startOfDay = dateAdapter.startOfDay,
      startOfMinute = dateAdapter.startOfMinute,
      endOfDay = dateAdapter.endOfDay,
      addMinutes = dateAdapter.addMinutes,
      addHours = dateAdapter.addHours,
      addDays = dateAdapter.addDays;
  var hours = [];
  var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
  var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
  var segmentDuration = (hourDuration || MINUTES_IN_HOUR) / hourSegments;
  var startOfViewDay = startOfDay(viewDate);
  var endOfViewDay = endOfDay(viewDate);

  var dateAdjustment = function (d) {
    return d;
  }; // this means that we change from or to DST on this day and that's going to cause problems so we bump the date


  if (dateAdapter.getTimezoneOffset(startOfViewDay) !== dateAdapter.getTimezoneOffset(endOfViewDay)) {
    startOfViewDay = addDays(startOfViewDay, 1);
    startOfView = addDays(startOfView, 1);
    endOfView = addDays(endOfView, 1);

    dateAdjustment = function (d) {
      return addDays(d, -1);
    };
  }

  var dayDuration = hourDuration ? HOURS_IN_DAY * 60 / hourDuration : MINUTES_IN_HOUR;

  for (var i = 0; i < dayDuration; i++) {
    var segments = [];

    for (var j = 0; j < hourSegments; j++) {
      var date = addMinutes(addMinutes(startOfView, i * (hourDuration || MINUTES_IN_HOUR)), j * segmentDuration);

      if (date >= startOfView && date < endOfView) {
        segments.push({
          date: dateAdjustment(date),
          displayDate: date,
          isStart: j === 0
        });
      }
    }

    if (segments.length > 0) {
      hours.push({
        segments: segments
      });
    }
  }

  return hours;
}

var EventValidationErrorMessage;

(function (EventValidationErrorMessage) {
  EventValidationErrorMessage["NotArray"] = "Events must be an array";
  EventValidationErrorMessage["StartPropertyMissing"] = "Event is missing the `start` property";
  EventValidationErrorMessage["StartPropertyNotDate"] = "Event `start` property should be a javascript date object. Do `new Date(event.start)` to fix it.";
  EventValidationErrorMessage["EndPropertyNotDate"] = "Event `end` property should be a javascript date object. Do `new Date(event.end)` to fix it.";
  EventValidationErrorMessage["EndsBeforeStart"] = "Event `start` property occurs after the `end`";
})(EventValidationErrorMessage || (EventValidationErrorMessage = {}));

function validateEvents(events, log) {
  var isValid = true;

  function isError(msg, event) {
    log(msg, event);
    isValid = false;
  }

  if (!Array.isArray(events)) {
    log(EventValidationErrorMessage.NotArray, events);
    return false;
  }

  events.forEach(function (event) {
    if (!event.start) {
      isError(EventValidationErrorMessage.StartPropertyMissing, event);
    } else if (!(event.start instanceof Date)) {
      isError(EventValidationErrorMessage.StartPropertyNotDate, event);
    }

    if (event.end) {
      if (!(event.end instanceof Date)) {
        isError(EventValidationErrorMessage.EndPropertyNotDate, event);
      }

      if (event.start > event.end) {
        isError(EventValidationErrorMessage.EndsBeforeStart, event);
      }
    }
  });
  return isValid;
}

/***/ }),

/***/ 3435:
/*!*************************************************************************!*\
  !*** ./node_modules/calendar-utils/date-adapters/esm/date-fns/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adapterFactory": () => (/* binding */ adapterFactory)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 312);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 2757);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 2317);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 4674);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 8210);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 371);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 7860);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 3200);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 1618);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 913);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 4270);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 7064);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 5845);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 3470);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 3569);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 7399);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ 6119);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns */ 2366);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! date-fns */ 9377);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! date-fns */ 6361);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! date-fns */ 2375);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns */ 8031);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! date-fns */ 1385);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! date-fns */ 586);


function getTimezoneOffset(date) {
  return new Date(date).getTimezoneOffset();
}

function adapterFactory() {
  return {
    addDays: date_fns__WEBPACK_IMPORTED_MODULE_0__["default"],
    addHours: date_fns__WEBPACK_IMPORTED_MODULE_1__["default"],
    addMinutes: date_fns__WEBPACK_IMPORTED_MODULE_2__["default"],
    addSeconds: date_fns__WEBPACK_IMPORTED_MODULE_3__["default"],
    differenceInDays: date_fns__WEBPACK_IMPORTED_MODULE_4__["default"],
    differenceInMinutes: date_fns__WEBPACK_IMPORTED_MODULE_5__["default"],
    differenceInSeconds: date_fns__WEBPACK_IMPORTED_MODULE_6__["default"],
    endOfDay: date_fns__WEBPACK_IMPORTED_MODULE_7__["default"],
    endOfMonth: date_fns__WEBPACK_IMPORTED_MODULE_8__["default"],
    endOfWeek: date_fns__WEBPACK_IMPORTED_MODULE_9__["default"],
    getDay: date_fns__WEBPACK_IMPORTED_MODULE_10__["default"],
    getMonth: date_fns__WEBPACK_IMPORTED_MODULE_11__["default"],
    isSameDay: date_fns__WEBPACK_IMPORTED_MODULE_12__["default"],
    isSameMonth: date_fns__WEBPACK_IMPORTED_MODULE_13__["default"],
    isSameSecond: date_fns__WEBPACK_IMPORTED_MODULE_14__["default"],
    max: date_fns__WEBPACK_IMPORTED_MODULE_15__["default"],
    setHours: date_fns__WEBPACK_IMPORTED_MODULE_16__["default"],
    setMinutes: date_fns__WEBPACK_IMPORTED_MODULE_17__["default"],
    startOfDay: date_fns__WEBPACK_IMPORTED_MODULE_18__["default"],
    startOfMinute: date_fns__WEBPACK_IMPORTED_MODULE_19__["default"],
    startOfMonth: date_fns__WEBPACK_IMPORTED_MODULE_20__["default"],
    startOfWeek: date_fns__WEBPACK_IMPORTED_MODULE_21__["default"],
    getHours: date_fns__WEBPACK_IMPORTED_MODULE_22__["default"],
    getMinutes: date_fns__WEBPACK_IMPORTED_MODULE_23__["default"],
    getTimezoneOffset: getTimezoneOffset
  };
}

/***/ }),

/***/ 5380:
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ 6610:
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ 1170:
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ 967:
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/roundingMethods/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRoundingMethod": () => (/* binding */ getRoundingMethod)
/* harmony export */ });
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function (value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  } // Math.trunc is not supported by IE

};
var defaultRoundingMethod = 'trunc';
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

/***/ }),

/***/ 7367:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ 312:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ 2757:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/addHours/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addHours)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ 9672);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);



var MILLISECONDS_IN_HOUR = 3600000;
/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the hours added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */

function addHours(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, amount * MILLISECONDS_IN_HOUR);
}

/***/ }),

/***/ 9672:
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ 2317:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMinutes/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMinutes)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ 9672);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);



var MILLISECONDS_IN_MINUTE = 60000;
/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the minutes added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * const result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */

function addMinutes(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, amount * MILLISECONDS_IN_MINUTE);
}

/***/ }),

/***/ 8053:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMonths/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ }),

/***/ 4674:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/addSeconds/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addSeconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ 9672);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);



/**
 * @name addSeconds
 * @category Second Helpers
 * @summary Add the specified number of seconds to the given date.
 *
 * @description
 * Add the specified number of seconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 30 seconds to 10 July 2014 12:45:00:
 * const result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:45:30
 */

function addSeconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, amount * 1000);
}

/***/ }),

/***/ 8856:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/addWeeks/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addWeeks)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ 312);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);



/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */

function addWeeks(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  var days = amount * 7;
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, days);
}

/***/ }),

/***/ 677:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ 6323:
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ 6610);
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ 9377);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);



var MILLISECONDS_IN_DAY = 86400000;
/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */

function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ 8210:
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInDays/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInDays)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ 6323);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


 // Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.

function compareLocalAsc(dateLeft, dateRight) {
  var diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}
/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.floor(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full days according to the local timezone
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * const result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
//=> 92
 */


function differenceInDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = compareLocalAsc(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight));
  dateLeft.setDate(dateLeft.getDate() - sign * difference); // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastDayNotFull = Number(compareLocalAsc(dateLeft, dateRight) === -sign);
  var result = sign * (difference - isLastDayNotFull); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/***/ }),

/***/ 4913:
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dateLeft, dateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft).getTime() - (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateRight).getTime();
}

/***/ }),

/***/ 371:
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMinutes/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMinutes)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ 677);
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ 4913);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ 967);




/**
 * @name differenceInMinutes
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the signed number of full (rounded towards 0) minutes between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of minutes
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * const result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 *
 * @example
 * // How many minutes are between 10:01:59 and 10:00:00
 * const result = differenceInMinutes(
 *   new Date(2000, 0, 1, 10, 0, 0),
 *   new Date(2000, 0, 1, 10, 1, 59)
 * )
 * //=> -1
 */

function differenceInMinutes(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_3__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ 7860:
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInSeconds)
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ 4913);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ 967);



/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / 1000;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ 3200:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ 1618:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ 913:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfWeek/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfWeek)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ 5380);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);




/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */

function endOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ 8920:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getDate/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDate)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * const result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */

function getDate(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dayOfMonth = date.getDate();
  return dayOfMonth;
}

/***/ }),

/***/ 4270:
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/getDay/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */

function getDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getDay();
  return day;
}

/***/ }),

/***/ 115:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/getDaysInMonth/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDaysInMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of days in a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */

function getDaysInMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getFullYear();
  var monthIndex = date.getMonth();
  var lastDayOfMonth = new Date(0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}

/***/ }),

/***/ 1385:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/getHours/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHours)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


/**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * const result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */

function getHours(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var hours = date.getHours();
  return hours;
}

/***/ }),

/***/ 1137:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/getISOWeekYear/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfISOWeek/index.js */ 9632);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);



/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */

function getISOWeekYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ 2362:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/getISOWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfISOWeek/index.js */ 9632);
/* harmony import */ var _startOfISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfISOWeekYear/index.js */ 4688);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);




var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */

function getISOWeek(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ 586:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/getMinutes/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMinutes)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


/**
 * @name getMinutes
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * const result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */

function getMinutes(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var minutes = date.getMinutes();
  return minutes;
}

/***/ }),

/***/ 7064:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/getMonth/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */

function getMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = date.getMonth();
  return month;
}

/***/ }),

/***/ 4190:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getYear/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */

function getYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getFullYear();
}

/***/ }),

/***/ 5845:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ 9377);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ 3470:
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameMonth/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month (and year)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */

function isSameMonth(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}

/***/ }),

/***/ 3569:
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameSecond/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameSecond)
/* harmony export */ });
/* harmony import */ var _startOfSecond_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfSecond/index.js */ 9676);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


/**
 * @name isSameSecond
 * @category Second Helpers
 * @summary Are the given dates in the same second (and hour and day)?
 *
 * @description
 * Are the given dates in the same second (and hour and day)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same second (and hour and day)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500 in the same second?
 * const result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 30, 15),
 *   new Date(2014, 8, 4, 6, 30, 15, 500)
 * )
 * //=> true
 *
 * @example
 * // Are 4 September 2014 06:00:15.000 and 4 September 2014 06:01.15.000 in the same second?
 * const result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 0, 15),
 *   new Date(2014, 8, 4, 6, 1, 15)
 * )
 * //=> false
 *
 * @example
 * // Are 4 September 2014 06:00:15.000 and 5 September 2014 06:00.15.000 in the same second?
 * const result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 0, 15),
 *   new Date(2014, 8, 5, 6, 0, 15)
 * )
 * //=> false
 */

function isSameSecond(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfSecond = (0,_startOfSecond_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfSecond = (0,_startOfSecond_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime();
}

/***/ }),

/***/ 7399:
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/max/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ max)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


/**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @param {Date[]|Number[]} datesArray - the dates to compare
 * @returns {Date} the latest of the dates
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which of these dates is the latest?
 * const result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */

function max(dirtyDatesArray) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var datesArray; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method

  if (dirtyDatesArray && typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array.
  } else if (typeof dirtyDatesArray === 'object' && dirtyDatesArray !== null) {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  } else {
    // `dirtyDatesArray` is non-iterable, return Invalid Date
    return new Date(NaN);
  }

  var result;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);

    if (result === undefined || result < currentDate || isNaN(Number(currentDate))) {
      result = currentDate;
    }
  });
  return result || new Date(NaN);
}

/***/ }),

/***/ 1625:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/setDate/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setDate)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);



/**
 * @name setDate
 * @category Day Helpers
 * @summary Set the day of the month to the given date.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} dayOfMonth - the day of the month of the new date
 * @returns {Date} the new date with the day of the month set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * const result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */

function setDate(dirtyDate, dirtyDayOfMonth) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dayOfMonth = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDayOfMonth);
  date.setDate(dayOfMonth);
  return date;
}

/***/ }),

/***/ 6119:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/setHours/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setHours)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);



/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * const result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */

function setHours(dirtyDate, dirtyHours) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var hours = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyHours);
  date.setHours(hours);
  return date;
}

/***/ }),

/***/ 2366:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/setMinutes/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setMinutes)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);



/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */

function setMinutes(dirtyDate, dirtyMinutes) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var minutes = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyMinutes);
  date.setMinutes(minutes);
  return date;
}

/***/ }),

/***/ 7722:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/setMonth/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setMonth)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _getDaysInMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getDaysInMonth/index.js */ 115);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);




/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @returns {Date} the new date with the month set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */

function setMonth(dirtyDate, dirtyMonth) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyMonth);
  var year = date.getFullYear();
  var day = date.getDate();
  var dateWithDesiredMonth = new Date(0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = (0,_getDaysInMonth_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateWithDesiredMonth); // Set the last day of the new month
  // if the original date was the last day of the longer month

  date.setMonth(month, Math.min(day, daysInMonth));
  return date;
}

/***/ }),

/***/ 2131:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/setYear/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setYear)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);



/**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @returns {Date} the new date with the year set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */

function setYear(dirtyDate, dirtyYear) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyYear); // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date

  if (isNaN(date.getTime())) {
    return new Date(NaN);
  }

  date.setFullYear(year);
  return date;
}

/***/ }),

/***/ 9377:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 4688:
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfISOWeekYear/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getISOWeekYear/index.js */ 1137);
/* harmony import */ var _startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfISOWeek/index.js */ 9632);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);



/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */

function startOfISOWeekYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  var date = (0,_startOfISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ 9632:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfISOWeek/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ 8031);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfISOWeek(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, {
    weekStartsOn: 1
  });
}

/***/ }),

/***/ 6361:
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfMinute/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfMinute)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


/**
 * @name startOfMinute
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a minute
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * const result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */

function startOfMinute(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setSeconds(0, 0);
  return date;
}

/***/ }),

/***/ 2375:
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfMonth/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 9676:
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfSecond/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfSecond)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);


/**
 * @name startOfSecond
 * @category Second Helpers
 * @summary Return the start of a second for the given date.
 *
 * @description
 * Return the start of a second for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a second
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a second for 1 December 2014 22:15:45.400:
 * const result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.000
 */

function startOfSecond(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setMilliseconds(0);
  return date;
}

/***/ }),

/***/ 8031:
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ 8325);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ 5380);




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 8393:
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/subDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subDays)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ 312);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);



/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */

function subDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ 5654:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/subMonths/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMonths/index.js */ 8053);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);



/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * const result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */

function subMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ 4531:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/subWeeks/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subWeeks)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 7367);
/* harmony import */ var _addWeeks_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addWeeks/index.js */ 8856);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);



/**
 * @name subWeeks
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * const result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */

function subWeeks(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addWeeks_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ 8325:
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 1170);

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ 9282:
/*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/options */ 3273);
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./l10n/default */ 9185);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ 9354);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/dom */ 5559);
/* harmony import */ var _utils_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/dates */ 5606);
/* harmony import */ var _utils_formatting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/formatting */ 9922);
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/polyfills */ 2800);
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_polyfills__WEBPACK_IMPORTED_MODULE_6__);
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};








var DEBOUNCED_CHANGE_MS = 300;

function FlatpickrInstance(element, instanceConfig) {
  var self = {
    config: __assign(__assign({}, _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults), flatpickr.defaultConfig),
    l10n: _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]
  };
  self.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({
    config: self.config,
    l10n: self.l10n
  });
  self._handlers = [];
  self.pluginElements = [];
  self.loadedPlugins = [];
  self._bind = bind;
  self._setHoursFromDate = setHoursFromDate;
  self._positionCalendar = positionCalendar;
  self.changeMonth = changeMonth;
  self.changeYear = changeYear;
  self.clear = clear;
  self.close = close;
  self.onMouseOver = onMouseOver;
  self._createElement = _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement;
  self.createDay = createDay;
  self.destroy = destroy;
  self.isEnabled = isEnabled;
  self.jumpToDate = jumpToDate;
  self.updateValue = updateValue;
  self.open = open;
  self.redraw = redraw;
  self.set = set;
  self.setDate = setDate;
  self.toggle = toggle;

  function setupHelperFunctions() {
    self.utils = {
      getDaysInMonth: function (month, yr) {
        if (month === void 0) {
          month = self.currentMonth;
        }

        if (yr === void 0) {
          yr = self.currentYear;
        }

        if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
        return self.l10n.daysInMonth[month];
      }
    };
  }

  function init() {
    self.element = self.input = element;
    self.isOpen = false;
    parseConfig();
    setupLocale();
    setupInputs();
    setupDates();
    setupHelperFunctions();
    if (!self.isMobile) build();
    bindEvents();

    if (self.selectedDates.length || self.config.noCalendar) {
      if (self.config.enableTime) {
        setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
      }

      updateValue(false);
    }

    setCalendarWidth();
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (!self.isMobile && isSafari) {
      positionCalendar();
    }

    triggerEvent("onReady");
  }

  function getClosestActiveElement() {
    var _a;

    return ((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode()).activeElement || document.activeElement;
  }

  function bindToInstance(fn) {
    return fn.bind(self);
  }

  function setCalendarWidth() {
    var config = self.config;

    if (config.weekNumbers === false && config.showMonths === 1) {
      return;
    } else if (config.noCalendar !== true) {
      window.requestAnimationFrame(function () {
        if (self.calendarContainer !== undefined) {
          self.calendarContainer.style.visibility = "hidden";
          self.calendarContainer.style.display = "block";
        }

        if (self.daysContainer !== undefined) {
          var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
          self.daysContainer.style.width = daysWidth + "px";
          self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== undefined ? self.weekWrapper.offsetWidth : 0) + "px";
          self.calendarContainer.style.removeProperty("visibility");
          self.calendarContainer.style.removeProperty("display");
        }
      });
    }
  }

  function updateTime(e) {
    if (self.selectedDates.length === 0) {
      var defaultDate = self.config.minDate === undefined || (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(new Date(), self.config.minDate) >= 0 ? new Date() : new Date(self.config.minDate.getTime());
      var defaults = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config);
      defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
      self.selectedDates = [defaultDate];
      self.latestSelectedDateObj = defaultDate;
    }

    if (e !== undefined && e.type !== "blur") {
      timeWrapper(e);
    }

    var prevValue = self._input.value;
    setHoursFromInputs();
    updateValue();

    if (self._input.value !== prevValue) {
      self._debouncedChange();
    }
  }

  function ampm2military(hour, amPM) {
    return hour % 12 + 12 * (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(amPM === self.l10n.amPM[1]);
  }

  function military2ampm(hour) {
    switch (hour % 24) {
      case 0:
      case 12:
        return 12;

      default:
        return hour % 12;
    }
  }

  function setHoursFromInputs() {
    if (self.hourElement === undefined || self.minuteElement === undefined) return;
    var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24,
        minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
        seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;

    if (self.amPM !== undefined) {
      hours = ampm2military(hours, self.amPM.textContent);
    }

    var limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(self.latestSelectedDateObj, self.config.minDate, true) === 0;
    var limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(self.latestSelectedDateObj, self.config.maxDate, true) === 0;

    if (self.config.maxTime !== undefined && self.config.minTime !== undefined && self.config.minTime > self.config.maxTime) {
      var minBound = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.calculateSecondsSinceMidnight)(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
      var maxBound = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.calculateSecondsSinceMidnight)(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
      var currentTime = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.calculateSecondsSinceMidnight)(hours, minutes, seconds);

      if (currentTime > maxBound && currentTime < minBound) {
        var result = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.parseSeconds)(minBound);
        hours = result[0];
        minutes = result[1];
        seconds = result[2];
      }
    } else {
      if (limitMaxHours) {
        var maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
        hours = Math.min(hours, maxTime.getHours());
        if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
        if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
      }

      if (limitMinHours) {
        var minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
        hours = Math.max(hours, minTime.getHours());
        if (hours === minTime.getHours() && minutes < minTime.getMinutes()) minutes = minTime.getMinutes();
        if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
      }
    }

    setHours(hours, minutes, seconds);
  }

  function setHoursFromDate(dateObj) {
    var date = dateObj || self.latestSelectedDateObj;

    if (date && date instanceof Date) {
      setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
  }

  function setHours(hours, minutes, seconds) {
    if (self.latestSelectedDateObj !== undefined) {
      self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
    }

    if (!self.hourElement || !self.minuteElement || self.isMobile) return;
    self.hourElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(!self.config.time_24hr ? (12 + hours) % 12 + 12 * (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(hours % 12 === 0) : hours);
    self.minuteElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(minutes);
    if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(hours >= 12)];
    if (self.secondElement !== undefined) self.secondElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(seconds);
  }

  function onYearInput(event) {
    var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(event);
    var year = parseInt(eventTarget.value) + (event.delta || 0);

    if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
      changeYear(year);
    }
  }

  function bind(element, event, handler, options) {
    if (event instanceof Array) return event.forEach(function (ev) {
      return bind(element, ev, handler, options);
    });
    if (element instanceof Array) return element.forEach(function (el) {
      return bind(el, event, handler, options);
    });
    element.addEventListener(event, handler, options);

    self._handlers.push({
      remove: function () {
        return element.removeEventListener(event, handler, options);
      }
    });
  }

  function triggerChange() {
    triggerEvent("onChange");
  }

  function bindEvents() {
    if (self.config.wrap) {
      ["open", "close", "toggle", "clear"].forEach(function (evt) {
        Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
          return bind(el, "click", self[evt]);
        });
      });
    }

    if (self.isMobile) {
      setupMobile();
      return;
    }

    var debouncedResize = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.debounce)(onResize, 50);
    self._debouncedChange = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.debounce)(triggerChange, DEBOUNCED_CHANGE_MS);
    if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", function (e) {
      if (self.config.mode === "range") onMouseOver((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e));
    });
    bind(self._input, "keydown", onKeyDown);

    if (self.calendarContainer !== undefined) {
      bind(self.calendarContainer, "keydown", onKeyDown);
    }

    if (!self.config.inline && !self.config.static) bind(window, "resize", debouncedResize);
    if (window.ontouchstart !== undefined) bind(window.document, "touchstart", documentClick);else bind(window.document, "mousedown", documentClick);
    bind(window.document, "focus", documentClick, {
      capture: true
    });

    if (self.config.clickOpens === true) {
      bind(self._input, "focus", self.open);
      bind(self._input, "click", self.open);
    }

    if (self.daysContainer !== undefined) {
      bind(self.monthNav, "click", onMonthNavClick);
      bind(self.monthNav, ["keyup", "increment"], onYearInput);
      bind(self.daysContainer, "click", selectDate);
    }

    if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
      var selText = function (e) {
        return (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e).select();
      };

      bind(self.timeContainer, ["increment"], updateTime);
      bind(self.timeContainer, "blur", updateTime, {
        capture: true
      });
      bind(self.timeContainer, "click", timeIncrement);
      bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
      if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
        return self.secondElement && self.secondElement.select();
      });

      if (self.amPM !== undefined) {
        bind(self.amPM, "click", function (e) {
          updateTime(e);
        });
      }
    }

    if (self.config.allowInput) {
      bind(self._input, "blur", onBlur);
    }
  }

  function jumpToDate(jumpDate, triggerChange) {
    var jumpTo = jumpDate !== undefined ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
    var oldYear = self.currentYear;
    var oldMonth = self.currentMonth;

    try {
      if (jumpTo !== undefined) {
        self.currentYear = jumpTo.getFullYear();
        self.currentMonth = jumpTo.getMonth();
      }
    } catch (e) {
      e.message = "Invalid date supplied: " + jumpTo;
      self.config.errorHandler(e);
    }

    if (triggerChange && self.currentYear !== oldYear) {
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }

    if (triggerChange && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
      triggerEvent("onMonthChange");
    }

    self.redraw();
  }

  function timeIncrement(e) {
    var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
    if (~eventTarget.className.indexOf("arrow")) incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
  }

  function incrementNumInput(e, delta, inputElem) {
    var target = e && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
    var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
    var event = createEvent("increment");
    event.delta = delta;
    input && input.dispatchEvent(event);
  }

  function build() {
    var fragment = window.document.createDocumentFragment();
    self.calendarContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-calendar");
    self.calendarContainer.tabIndex = -1;

    if (!self.config.noCalendar) {
      fragment.appendChild(buildMonthNav());
      self.innerContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-innerContainer");

      if (self.config.weekNumbers) {
        var _a = buildWeeks(),
            weekWrapper = _a.weekWrapper,
            weekNumbers = _a.weekNumbers;

        self.innerContainer.appendChild(weekWrapper);
        self.weekNumbers = weekNumbers;
        self.weekWrapper = weekWrapper;
      }

      self.rContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-rContainer");
      self.rContainer.appendChild(buildWeekdays());

      if (!self.daysContainer) {
        self.daysContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-days");
        self.daysContainer.tabIndex = -1;
      }

      buildDays();
      self.rContainer.appendChild(self.daysContainer);
      self.innerContainer.appendChild(self.rContainer);
      fragment.appendChild(self.innerContainer);
    }

    if (self.config.enableTime) {
      fragment.appendChild(buildTime());
    }

    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rangeMode", self.config.mode === "range");
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "animate", self.config.animate === true);
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
    self.calendarContainer.appendChild(fragment);
    var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;

    if (self.config.inline || self.config.static) {
      self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");

      if (self.config.inline) {
        if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
      }

      if (self.config.static) {
        var wrapper = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-wrapper");
        if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
        wrapper.appendChild(self.element);
        if (self.altInput) wrapper.appendChild(self.altInput);
        wrapper.appendChild(self.calendarContainer);
      }
    }

    if (!self.config.static && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
  }

  function createDay(className, date, _dayNumber, i) {
    var dateIsEnabled = isEnabled(date, true),
        dayElement = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", className, date.getDate().toString());
    dayElement.dateObj = date;
    dayElement.$i = i;
    dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));

    if (className.indexOf("hidden") === -1 && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.now) === 0) {
      self.todayDateElem = dayElement;
      dayElement.classList.add("today");
      dayElement.setAttribute("aria-current", "date");
    }

    if (dateIsEnabled) {
      dayElement.tabIndex = -1;

      if (isDateSelected(date)) {
        dayElement.classList.add("selected");
        self.selectedDateElem = dayElement;

        if (self.config.mode === "range") {
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(dayElement, "startRange", self.selectedDates[0] && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[0], true) === 0);
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(dayElement, "endRange", self.selectedDates[1] && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[1], true) === 0);
          if (className === "nextMonthDay") dayElement.classList.add("inRange");
        }
      }
    } else {
      dayElement.classList.add("flatpickr-disabled");
    }

    if (self.config.mode === "range") {
      if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
    }

    if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && i % 7 === 6) {
      self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
    }

    triggerEvent("onDayCreate", dayElement);
    return dayElement;
  }

  function focusOnDayElem(targetNode) {
    targetNode.focus();
    if (self.config.mode === "range") onMouseOver(targetNode);
  }

  function getFirstAvailableDay(delta) {
    var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
    var endMonth = delta > 0 ? self.config.showMonths : -1;

    for (var m = startMonth; m != endMonth; m += delta) {
      var month = self.daysContainer.children[m];
      var startIndex = delta > 0 ? 0 : month.children.length - 1;
      var endIndex = delta > 0 ? month.children.length : -1;

      for (var i = startIndex; i != endIndex; i += delta) {
        var c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj)) return c;
      }
    }

    return undefined;
  }

  function getNextAvailableDay(current, delta) {
    var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
    var endMonth = delta > 0 ? self.config.showMonths : -1;
    var loopDelta = delta > 0 ? 1 : -1;

    for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
      var month = self.daysContainer.children[m];
      var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
      var numMonthDays = month.children.length;

      for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
        var c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
      }
    }

    self.changeMonth(loopDelta);
    focusOnDay(getFirstAvailableDay(loopDelta), 0);
    return undefined;
  }

  function focusOnDay(current, offset) {
    var activeElement = getClosestActiveElement();
    var dayFocused = isInView(activeElement || document.body);
    var startElem = current !== undefined ? current : dayFocused ? activeElement : self.selectedDateElem !== undefined && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== undefined && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);

    if (startElem === undefined) {
      self._input.focus();
    } else if (!dayFocused) {
      focusOnDayElem(startElem);
    } else {
      getNextAvailableDay(startElem, offset);
    }
  }

  function buildMonthDays(year, month) {
    var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
    var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
    var daysInMonth = self.utils.getDaysInMonth(month, year),
        days = window.document.createDocumentFragment(),
        isMultiMonth = self.config.showMonths > 1,
        prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay",
        nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
    var dayNumber = prevMonthDays + 1 - firstOfMonth,
        dayIndex = 0;

    for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
    }

    for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
    }

    for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
    }

    var dayContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "dayContainer");
    dayContainer.appendChild(days);
    return dayContainer;
  }

  function buildDays() {
    if (self.daysContainer === undefined) {
      return;
    }

    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.daysContainer);
    if (self.weekNumbers) (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.weekNumbers);
    var frag = document.createDocumentFragment();

    for (var i = 0; i < self.config.showMonths; i++) {
      var d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i);
      frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
    }

    self.daysContainer.appendChild(frag);
    self.days = self.daysContainer.firstChild;

    if (self.config.mode === "range" && self.selectedDates.length === 1) {
      onMouseOver();
    }
  }

  function buildMonthSwitch() {
    if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown") return;

    var shouldBuildMonth = function (month) {
      if (self.config.minDate !== undefined && self.currentYear === self.config.minDate.getFullYear() && month < self.config.minDate.getMonth()) {
        return false;
      }

      return !(self.config.maxDate !== undefined && self.currentYear === self.config.maxDate.getFullYear() && month > self.config.maxDate.getMonth());
    };

    self.monthsDropdownContainer.tabIndex = -1;
    self.monthsDropdownContainer.innerHTML = "";

    for (var i = 0; i < 12; i++) {
      if (!shouldBuildMonth(i)) continue;
      var month = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("option", "flatpickr-monthDropdown-month");
      month.value = new Date(self.currentYear, i).getMonth().toString();
      month.textContent = (0,_utils_formatting__WEBPACK_IMPORTED_MODULE_5__.monthToStr)(i, self.config.shorthandCurrentMonth, self.l10n);
      month.tabIndex = -1;

      if (self.currentMonth === i) {
        month.selected = true;
      }

      self.monthsDropdownContainer.appendChild(month);
    }
  }

  function buildMonth() {
    var container = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-month");
    var monthNavFragment = window.document.createDocumentFragment();
    var monthElement;

    if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
      monthElement = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "cur-month");
    } else {
      self.monthsDropdownContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("select", "flatpickr-monthDropdown-months");
      self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
      bind(self.monthsDropdownContainer, "change", function (e) {
        var target = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
        var selectedMonth = parseInt(target.value, 10);
        self.changeMonth(selectedMonth - self.currentMonth);
        triggerEvent("onMonthChange");
      });
      buildMonthSwitch();
      monthElement = self.monthsDropdownContainer;
    }

    var yearInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("cur-year", {
      tabindex: "-1"
    });
    var yearElement = yearInput.getElementsByTagName("input")[0];
    yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);

    if (self.config.minDate) {
      yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
    }

    if (self.config.maxDate) {
      yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
      yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
    }

    var currentMonth = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-current-month");
    currentMonth.appendChild(monthElement);
    currentMonth.appendChild(yearInput);
    monthNavFragment.appendChild(currentMonth);
    container.appendChild(monthNavFragment);
    return {
      container: container,
      yearElement: yearElement,
      monthElement: monthElement
    };
  }

  function buildMonths() {
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.monthNav);
    self.monthNav.appendChild(self.prevMonthNav);

    if (self.config.showMonths) {
      self.yearElements = [];
      self.monthElements = [];
    }

    for (var m = self.config.showMonths; m--;) {
      var month = buildMonth();
      self.yearElements.push(month.yearElement);
      self.monthElements.push(month.monthElement);
      self.monthNav.appendChild(month.container);
    }

    self.monthNav.appendChild(self.nextMonthNav);
  }

  function buildMonthNav() {
    self.monthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-months");
    self.yearElements = [];
    self.monthElements = [];
    self.prevMonthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-prev-month");
    self.prevMonthNav.innerHTML = self.config.prevArrow;
    self.nextMonthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-next-month");
    self.nextMonthNav.innerHTML = self.config.nextArrow;
    buildMonths();
    Object.defineProperty(self, "_hidePrevMonthArrow", {
      get: function () {
        return self.__hidePrevMonthArrow;
      },
      set: function (bool) {
        if (self.__hidePrevMonthArrow !== bool) {
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.prevMonthNav, "flatpickr-disabled", bool);
          self.__hidePrevMonthArrow = bool;
        }
      }
    });
    Object.defineProperty(self, "_hideNextMonthArrow", {
      get: function () {
        return self.__hideNextMonthArrow;
      },
      set: function (bool) {
        if (self.__hideNextMonthArrow !== bool) {
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.nextMonthNav, "flatpickr-disabled", bool);
          self.__hideNextMonthArrow = bool;
        }
      }
    });
    self.currentYearElement = self.yearElements[0];
    updateNavigationCurrentMonth();
    return self.monthNav;
  }

  function buildTime() {
    self.calendarContainer.classList.add("hasTime");
    if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
    var defaults = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config);
    self.timeContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-time");
    self.timeContainer.tabIndex = -1;
    var separator = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-time-separator", ":");
    var hourInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-hour", {
      "aria-label": self.l10n.hourAriaLabel
    });
    self.hourElement = hourInput.getElementsByTagName("input")[0];
    var minuteInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-minute", {
      "aria-label": self.l10n.minuteAriaLabel
    });
    self.minuteElement = minuteInput.getElementsByTagName("input")[0];
    self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
    self.hourElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults.hours : military2ampm(defaults.hours));
    self.minuteElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults.minutes);
    self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
    self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
    self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
    self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
    self.hourElement.setAttribute("maxlength", "2");
    self.minuteElement.setAttribute("min", "0");
    self.minuteElement.setAttribute("max", "59");
    self.minuteElement.setAttribute("maxlength", "2");
    self.timeContainer.appendChild(hourInput);
    self.timeContainer.appendChild(separator);
    self.timeContainer.appendChild(minuteInput);
    if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

    if (self.config.enableSeconds) {
      self.timeContainer.classList.add("hasSeconds");
      var secondInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-second");
      self.secondElement = secondInput.getElementsByTagName("input")[0];
      self.secondElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults.seconds);
      self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
      self.secondElement.setAttribute("min", "0");
      self.secondElement.setAttribute("max", "59");
      self.secondElement.setAttribute("maxlength", "2");
      self.timeContainer.appendChild((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-time-separator", ":"));
      self.timeContainer.appendChild(secondInput);
    }

    if (!self.config.time_24hr) {
      self.amPM = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-am-pm", self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
      self.amPM.title = self.l10n.toggleTitle;
      self.amPM.tabIndex = -1;
      self.timeContainer.appendChild(self.amPM);
    }

    return self.timeContainer;
  }

  function buildWeekdays() {
    if (!self.weekdayContainer) self.weekdayContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekdays");else (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.weekdayContainer);

    for (var i = self.config.showMonths; i--;) {
      var container = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekdaycontainer");
      self.weekdayContainer.appendChild(container);
    }

    updateWeekdays();
    return self.weekdayContainer;
  }

  function updateWeekdays() {
    if (!self.weekdayContainer) {
      return;
    }

    var firstDayOfWeek = self.l10n.firstDayOfWeek;

    var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);

    if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
      weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
    }

    for (var i = self.config.showMonths; i--;) {
      self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
    }
  }

  function buildWeeks() {
    self.calendarContainer.classList.add("hasWeeks");
    var weekWrapper = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekwrapper");
    weekWrapper.appendChild((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
    var weekNumbers = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weeks");
    weekWrapper.appendChild(weekNumbers);
    return {
      weekWrapper: weekWrapper,
      weekNumbers: weekNumbers
    };
  }

  function changeMonth(value, isOffset) {
    if (isOffset === void 0) {
      isOffset = true;
    }

    var delta = isOffset ? value : value - self.currentMonth;
    if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
    self.currentMonth += delta;

    if (self.currentMonth < 0 || self.currentMonth > 11) {
      self.currentYear += self.currentMonth > 11 ? 1 : -1;
      self.currentMonth = (self.currentMonth + 12) % 12;
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }

    buildDays();
    triggerEvent("onMonthChange");
    updateNavigationCurrentMonth();
  }

  function clear(triggerChangeEvent, toInitial) {
    if (triggerChangeEvent === void 0) {
      triggerChangeEvent = true;
    }

    if (toInitial === void 0) {
      toInitial = true;
    }

    self.input.value = "";
    if (self.altInput !== undefined) self.altInput.value = "";
    if (self.mobileInput !== undefined) self.mobileInput.value = "";
    self.selectedDates = [];
    self.latestSelectedDateObj = undefined;

    if (toInitial === true) {
      self.currentYear = self._initialDate.getFullYear();
      self.currentMonth = self._initialDate.getMonth();
    }

    if (self.config.enableTime === true) {
      var _a = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config),
          hours = _a.hours,
          minutes = _a.minutes,
          seconds = _a.seconds;

      setHours(hours, minutes, seconds);
    }

    self.redraw();
    if (triggerChangeEvent) triggerEvent("onChange");
  }

  function close() {
    self.isOpen = false;

    if (!self.isMobile) {
      if (self.calendarContainer !== undefined) {
        self.calendarContainer.classList.remove("open");
      }

      if (self._input !== undefined) {
        self._input.classList.remove("active");
      }
    }

    triggerEvent("onClose");
  }

  function destroy() {
    if (self.config !== undefined) triggerEvent("onDestroy");

    for (var i = self._handlers.length; i--;) {
      self._handlers[i].remove();
    }

    self._handlers = [];

    if (self.mobileInput) {
      if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
      self.mobileInput = undefined;
    } else if (self.calendarContainer && self.calendarContainer.parentNode) {
      if (self.config.static && self.calendarContainer.parentNode) {
        var wrapper = self.calendarContainer.parentNode;
        wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);

        if (wrapper.parentNode) {
          while (wrapper.firstChild) wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);

          wrapper.parentNode.removeChild(wrapper);
        }
      } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
    }

    if (self.altInput) {
      self.input.type = "text";
      if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
      delete self.altInput;
    }

    if (self.input) {
      self.input.type = self.input._type;
      self.input.classList.remove("flatpickr-input");
      self.input.removeAttribute("readonly");
    }

    ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
      try {
        delete self[k];
      } catch (_) {}
    });
  }

  function isCalendarElem(elem) {
    return self.calendarContainer.contains(elem);
  }

  function documentClick(e) {
    if (self.isOpen && !self.config.inline) {
      var eventTarget_1 = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
      var isCalendarElement = isCalendarElem(eventTarget_1);
      var isInput = eventTarget_1 === self.input || eventTarget_1 === self.altInput || self.element.contains(eventTarget_1) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
      var lostFocus = !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
      var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
        return elem.contains(eventTarget_1);
      });

      if (lostFocus && isIgnored) {
        if (self.config.allowInput) {
          self.setDate(self._input.value, false, self.config.altInput ? self.config.altFormat : self.config.dateFormat);
        }

        if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined && self.input.value !== "" && self.input.value !== undefined) {
          updateTime();
        }

        self.close();
        if (self.config && self.config.mode === "range" && self.selectedDates.length === 1) self.clear(false);
      }
    }
  }

  function changeYear(newYear) {
    if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
    var newYearNum = newYear,
        isNewYear = self.currentYear !== newYearNum;
    self.currentYear = newYearNum || self.currentYear;

    if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
      self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
    } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
      self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
    }

    if (isNewYear) {
      self.redraw();
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
  }

  function isEnabled(date, timeless) {
    var _a;

    if (timeless === void 0) {
      timeless = true;
    }

    var dateToCheck = self.parseDate(date, undefined, timeless);
    if (self.config.minDate && dateToCheck && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
    if (!self.config.enable && self.config.disable.length === 0) return true;
    if (dateToCheck === undefined) return false;
    var bool = !!self.config.enable,
        array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;

    for (var i = 0, d = void 0; i < array.length; i++) {
      d = array[i];
      if (typeof d === "function" && d(dateToCheck)) return bool;else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) return bool;else if (typeof d === "string") {
        var parsed = self.parseDate(d, undefined, true);
        return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
      } else if (typeof d === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
    }

    return !bool;
  }

  function isInView(elem) {
    if (self.daysContainer !== undefined) return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self.daysContainer.contains(elem);
    return false;
  }

  function onBlur(e) {
    var isInput = e.target === self._input;
    var valueChanged = self._input.value.trimEnd() !== getDateStr();

    if (isInput && valueChanged && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
      self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
    }
  }

  function onKeyDown(e) {
    var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
    var isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
    var allowInput = self.config.allowInput;
    var allowKeydown = self.isOpen && (!allowInput || !isInput);
    var allowInlineKeydown = self.config.inline && isInput && !allowInput;

    if (e.keyCode === 13 && isInput) {
      if (allowInput) {
        self.setDate(self._input.value, true, eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat);
        self.close();
        return eventTarget.blur();
      } else {
        self.open();
      }
    } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
      var isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);

      switch (e.keyCode) {
        case 13:
          if (isTimeObj) {
            e.preventDefault();
            updateTime();
            focusAndClose();
          } else selectDate(e);

          break;

        case 27:
          e.preventDefault();
          focusAndClose();
          break;

        case 8:
        case 46:
          if (isInput && !self.config.allowInput) {
            e.preventDefault();
            self.clear();
          }

          break;

        case 37:
        case 39:
          if (!isTimeObj && !isInput) {
            e.preventDefault();
            var activeElement = getClosestActiveElement();

            if (self.daysContainer !== undefined && (allowInput === false || activeElement && isInView(activeElement))) {
              var delta_1 = e.keyCode === 39 ? 1 : -1;
              if (!e.ctrlKey) focusOnDay(undefined, delta_1);else {
                e.stopPropagation();
                changeMonth(delta_1);
                focusOnDay(getFirstAvailableDay(1), 0);
              }
            }
          } else if (self.hourElement) self.hourElement.focus();

          break;

        case 38:
        case 40:
          e.preventDefault();
          var delta = e.keyCode === 40 ? 1 : -1;

          if (self.daysContainer && eventTarget.$i !== undefined || eventTarget === self.input || eventTarget === self.altInput) {
            if (e.ctrlKey) {
              e.stopPropagation();
              changeYear(self.currentYear - delta);
              focusOnDay(getFirstAvailableDay(1), 0);
            } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
          } else if (eventTarget === self.currentYearElement) {
            changeYear(self.currentYear - delta);
          } else if (self.config.enableTime) {
            if (!isTimeObj && self.hourElement) self.hourElement.focus();
            updateTime(e);

            self._debouncedChange();
          }

          break;

        case 9:
          if (isTimeObj) {
            var elems = [self.hourElement, self.minuteElement, self.secondElement, self.amPM].concat(self.pluginElements).filter(function (x) {
              return x;
            });
            var i = elems.indexOf(eventTarget);

            if (i !== -1) {
              var target = elems[i + (e.shiftKey ? -1 : 1)];
              e.preventDefault();

              (target || self._input).focus();
            }
          } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(eventTarget) && e.shiftKey) {
            e.preventDefault();

            self._input.focus();
          }

          break;

        default:
          break;
      }
    }

    if (self.amPM !== undefined && eventTarget === self.amPM) {
      switch (e.key) {
        case self.l10n.amPM[0].charAt(0):
        case self.l10n.amPM[0].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[0];
          setHoursFromInputs();
          updateValue();
          break;

        case self.l10n.amPM[1].charAt(0):
        case self.l10n.amPM[1].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[1];
          setHoursFromInputs();
          updateValue();
          break;
      }
    }

    if (isInput || isCalendarElem(eventTarget)) {
      triggerEvent("onKeyDown", e);
    }
  }

  function onMouseOver(elem, cellClass) {
    if (cellClass === void 0) {
      cellClass = "flatpickr-day";
    }

    if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains(cellClass) || elem.classList.contains("flatpickr-disabled"))) return;
    var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(),
        initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(),
        rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()),
        rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
    var containsDisabled = false;
    var minRange = 0,
        maxRange = 0;

    for (var t = rangeStartDate; t < rangeEndDate; t += _utils_dates__WEBPACK_IMPORTED_MODULE_4__.duration.DAY) {
      if (!isEnabled(new Date(t), true)) {
        containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
        if (t < initialDate && (!minRange || t > minRange)) minRange = t;else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
      }
    }

    var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+" + self.config.showMonths + ") > ." + cellClass));
    hoverableCells.forEach(function (dayElem) {
      var date = dayElem.dateObj;
      var timestamp = date.getTime();
      var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;

      if (outOfRange) {
        dayElem.classList.add("notAllowed");
        ["inRange", "startRange", "endRange"].forEach(function (c) {
          dayElem.classList.remove(c);
        });
        return;
      } else if (containsDisabled && !outOfRange) return;

      ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
        dayElem.classList.remove(c);
      });

      if (elem !== undefined) {
        elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
        if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
        if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.isBetween)(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
      }
    });
  }

  function onResize() {
    if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
  }

  function open(e, positionElement) {
    if (positionElement === void 0) {
      positionElement = self._positionElement;
    }

    if (self.isMobile === true) {
      if (e) {
        e.preventDefault();
        var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);

        if (eventTarget) {
          eventTarget.blur();
        }
      }

      if (self.mobileInput !== undefined) {
        self.mobileInput.focus();
        self.mobileInput.click();
      }

      triggerEvent("onOpen");
      return;
    } else if (self._input.disabled || self.config.inline) {
      return;
    }

    var wasOpen = self.isOpen;
    self.isOpen = true;

    if (!wasOpen) {
      self.calendarContainer.classList.add("open");

      self._input.classList.add("active");

      triggerEvent("onOpen");
      positionCalendar(positionElement);
    }

    if (self.config.enableTime === true && self.config.noCalendar === true) {
      if (self.config.allowInput === false && (e === undefined || !self.timeContainer.contains(e.relatedTarget))) {
        setTimeout(function () {
          return self.hourElement.select();
        }, 50);
      }
    }
  }

  function minMaxDateSetter(type) {
    return function (date) {
      var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
      var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];

      if (dateObj !== undefined) {
        self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
      }

      if (self.selectedDates) {
        self.selectedDates = self.selectedDates.filter(function (d) {
          return isEnabled(d);
        });
        if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
        updateValue();
      }

      if (self.daysContainer) {
        redraw();
        if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();else self.currentYearElement.removeAttribute(type);
        self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
      }
    };
  }

  function parseConfig() {
    var boolOpts = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];

    var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);

    var formats = {};
    self.config.parseDate = userConfig.parseDate;
    self.config.formatDate = userConfig.formatDate;
    Object.defineProperty(self.config, "enable", {
      get: function () {
        return self.config._enable;
      },
      set: function (dates) {
        self.config._enable = parseDateRules(dates);
      }
    });
    Object.defineProperty(self.config, "disable", {
      get: function () {
        return self.config._disable;
      },
      set: function (dates) {
        self.config._disable = parseDateRules(dates);
      }
    });
    var timeMode = userConfig.mode === "time";

    if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
      var defaultDateFormat = flatpickr.defaultConfig.dateFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults.dateFormat;
      formats.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
    }

    if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
      var defaultAltFormat = flatpickr.defaultConfig.altFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults.altFormat;
      formats.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
    }

    Object.defineProperty(self.config, "minDate", {
      get: function () {
        return self.config._minDate;
      },
      set: minMaxDateSetter("min")
    });
    Object.defineProperty(self.config, "maxDate", {
      get: function () {
        return self.config._maxDate;
      },
      set: minMaxDateSetter("max")
    });

    var minMaxTimeSetter = function (type) {
      return function (val) {
        self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
      };
    };

    Object.defineProperty(self.config, "minTime", {
      get: function () {
        return self.config._minTime;
      },
      set: minMaxTimeSetter("min")
    });
    Object.defineProperty(self.config, "maxTime", {
      get: function () {
        return self.config._maxTime;
      },
      set: minMaxTimeSetter("max")
    });

    if (userConfig.mode === "time") {
      self.config.noCalendar = true;
      self.config.enableTime = true;
    }

    Object.assign(self.config, formats, userConfig);

    for (var i = 0; i < boolOpts.length; i++) self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";

    _types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.filter(function (hook) {
      return self.config[hook] !== undefined;
    }).forEach(function (hook) {
      self.config[hook] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(self.config[hook] || []).map(bindToInstance);
    });
    self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    for (var i = 0; i < self.config.plugins.length; i++) {
      var pluginConf = self.config.plugins[i](self) || {};

      for (var key in pluginConf) {
        if (_types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.indexOf(key) > -1) {
          self.config[key] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
        } else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
      }
    }

    if (!userConfig.altInputClass) {
      self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
    }

    triggerEvent("onParseConfig");
  }

  function getInputElem() {
    return self.config.wrap ? element.querySelector("[data-input]") : element;
  }

  function setupLocale() {
    if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
    self.l10n = __assign(__assign({}, flatpickr.l10ns.default), typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.D = "(" + self.l10n.weekdays.shorthand.join("|") + ")";
    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.l = "(" + self.l10n.weekdays.longhand.join("|") + ")";
    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.M = "(" + self.l10n.months.shorthand.join("|") + ")";
    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.F = "(" + self.l10n.months.longhand.join("|") + ")";
    _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";

    var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));

    if (userConfig.time_24hr === undefined && flatpickr.defaultConfig.time_24hr === undefined) {
      self.config.time_24hr = self.l10n.time_24hr;
    }

    self.formatDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateFormatter)(self);
    self.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({
      config: self.config,
      l10n: self.l10n
    });
  }

  function positionCalendar(customPositionElement) {
    if (typeof self.config.position === "function") {
      return void self.config.position(self, customPositionElement);
    }

    if (self.calendarContainer === undefined) return;
    triggerEvent("onPreCalendarPosition");
    var positionElement = customPositionElement || self._positionElement;
    var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function (acc, child) {
      return acc + child.offsetHeight;
    }, 0),
        calendarWidth = self.calendarContainer.offsetWidth,
        configPos = self.config.position.split(" "),
        configPosVertical = configPos[0],
        configPosHorizontal = configPos.length > 1 ? configPos[1] : null,
        inputBounds = positionElement.getBoundingClientRect(),
        distanceFromBottom = window.innerHeight - inputBounds.bottom,
        showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
    var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowTop", !showOnTop);
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowBottom", showOnTop);
    if (self.config.inline) return;
    var left = window.pageXOffset + inputBounds.left;
    var isCenter = false;
    var isRight = false;

    if (configPosHorizontal === "center") {
      left -= (calendarWidth - inputBounds.width) / 2;
      isCenter = true;
    } else if (configPosHorizontal === "right") {
      left -= calendarWidth - inputBounds.width;
      isRight = true;
    }

    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowCenter", isCenter);
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowRight", isRight);
    var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
    var rightMost = left + calendarWidth > window.document.body.offsetWidth;
    var centerMost = right + calendarWidth > window.document.body.offsetWidth;
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rightMost", rightMost);
    if (self.config.static) return;
    self.calendarContainer.style.top = top + "px";

    if (!rightMost) {
      self.calendarContainer.style.left = left + "px";
      self.calendarContainer.style.right = "auto";
    } else if (!centerMost) {
      self.calendarContainer.style.left = "auto";
      self.calendarContainer.style.right = right + "px";
    } else {
      var doc = getDocumentStyleSheet();
      if (doc === undefined) return;
      var bodyWidth = window.document.body.offsetWidth;
      var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
      var centerBefore = ".flatpickr-calendar.centerMost:before";
      var centerAfter = ".flatpickr-calendar.centerMost:after";
      var centerIndex = doc.cssRules.length;
      var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rightMost", false);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "centerMost", true);
      doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
      self.calendarContainer.style.left = centerLeft + "px";
      self.calendarContainer.style.right = "auto";
    }
  }

  function getDocumentStyleSheet() {
    var editableSheet = null;

    for (var i = 0; i < document.styleSheets.length; i++) {
      var sheet = document.styleSheets[i];
      if (!sheet.cssRules) continue;

      try {
        sheet.cssRules;
      } catch (err) {
        continue;
      }

      editableSheet = sheet;
      break;
    }

    return editableSheet != null ? editableSheet : createStyleSheet();
  }

  function createStyleSheet() {
    var style = document.createElement("style");
    document.head.appendChild(style);
    return style.sheet;
  }

  function redraw() {
    if (self.config.noCalendar || self.isMobile) return;
    buildMonthSwitch();
    updateNavigationCurrentMonth();
    buildDays();
  }

  function focusAndClose() {
    self._input.focus();

    if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) {
      setTimeout(self.close, 0);
    } else {
      self.close();
    }
  }

  function selectDate(e) {
    e.preventDefault();
    e.stopPropagation();

    var isSelectable = function (day) {
      return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
    };

    var t = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.findParent)((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e), isSelectable);
    if (t === undefined) return;
    var target = t;
    var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
    var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
    self.selectedDateElem = target;
    if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
      var selectedIndex = isDateSelected(selectedDate);
      if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);else self.selectedDates.push(selectedDate);
    } else if (self.config.mode === "range") {
      if (self.selectedDates.length === 2) {
        self.clear(false, false);
      }

      self.latestSelectedDateObj = selectedDate;
      self.selectedDates.push(selectedDate);
      if ((0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
        return a.getTime() - b.getTime();
      });
    }
    setHoursFromInputs();

    if (shouldChangeMonth) {
      var isNewYear = self.currentYear !== selectedDate.getFullYear();
      self.currentYear = selectedDate.getFullYear();
      self.currentMonth = selectedDate.getMonth();

      if (isNewYear) {
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }

      triggerEvent("onMonthChange");
    }

    updateNavigationCurrentMonth();
    buildDays();
    updateValue();
    if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1) focusOnDayElem(target);else if (self.selectedDateElem !== undefined && self.hourElement === undefined) {
      self.selectedDateElem && self.selectedDateElem.focus();
    }
    if (self.hourElement !== undefined) self.hourElement !== undefined && self.hourElement.focus();

    if (self.config.closeOnSelect) {
      var single = self.config.mode === "single" && !self.config.enableTime;
      var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;

      if (single || range) {
        focusAndClose();
      }
    }

    triggerChange();
  }

  var CALLBACKS = {
    locale: [setupLocale, updateWeekdays],
    showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
    minDate: [jumpToDate],
    maxDate: [jumpToDate],
    positionElement: [updatePositionElement],
    clickOpens: [function () {
      if (self.config.clickOpens === true) {
        bind(self._input, "focus", self.open);
        bind(self._input, "click", self.open);
      } else {
        self._input.removeEventListener("focus", self.open);

        self._input.removeEventListener("click", self.open);
      }
    }]
  };

  function set(option, value) {
    if (option !== null && typeof option === "object") {
      Object.assign(self.config, option);

      for (var key in option) {
        if (CALLBACKS[key] !== undefined) CALLBACKS[key].forEach(function (x) {
          return x();
        });
      }
    } else {
      self.config[option] = value;
      if (CALLBACKS[option] !== undefined) CALLBACKS[option].forEach(function (x) {
        return x();
      });else if (_types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.indexOf(option) > -1) self.config[option] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(value);
    }

    self.redraw();
    updateValue(true);
  }

  function setSelectedDate(inputDate, format) {
    var dates = [];
    if (inputDate instanceof Array) dates = inputDate.map(function (d) {
      return self.parseDate(d, format);
    });else if (inputDate instanceof Date || typeof inputDate === "number") dates = [self.parseDate(inputDate, format)];else if (typeof inputDate === "string") {
      switch (self.config.mode) {
        case "single":
        case "time":
          dates = [self.parseDate(inputDate, format)];
          break;

        case "multiple":
          dates = inputDate.split(self.config.conjunction).map(function (date) {
            return self.parseDate(date, format);
          });
          break;

        case "range":
          dates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
            return self.parseDate(date, format);
          });
          break;

        default:
          break;
      }
    } else self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
    self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter(function (d) {
      return d instanceof Date && isEnabled(d, false);
    });
    if (self.config.mode === "range") self.selectedDates.sort(function (a, b) {
      return a.getTime() - b.getTime();
    });
  }

  function setDate(date, triggerChange, format) {
    if (triggerChange === void 0) {
      triggerChange = false;
    }

    if (format === void 0) {
      format = self.config.dateFormat;
    }

    if (date !== 0 && !date || date instanceof Array && date.length === 0) return self.clear(triggerChange);
    setSelectedDate(date, format);
    self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
    self.redraw();
    jumpToDate(undefined, triggerChange);
    setHoursFromDate();

    if (self.selectedDates.length === 0) {
      self.clear(false);
    }

    updateValue(triggerChange);
    if (triggerChange) triggerEvent("onChange");
  }

  function parseDateRules(arr) {
    return arr.slice().map(function (rule) {
      if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
        return self.parseDate(rule, undefined, true);
      } else if (rule && typeof rule === "object" && rule.from && rule.to) return {
        from: self.parseDate(rule.from, undefined),
        to: self.parseDate(rule.to, undefined)
      };

      return rule;
    }).filter(function (x) {
      return x;
    });
  }

  function setupDates() {
    self.selectedDates = [];
    self.now = self.parseDate(self.config.now) || new Date();
    var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
    if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
    self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
    self.currentYear = self._initialDate.getFullYear();
    self.currentMonth = self._initialDate.getMonth();
    if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
    if (self.config.minTime !== undefined) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
    if (self.config.maxTime !== undefined) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
    self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
    self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
  }

  function setupInputs() {
    self.input = getInputElem();

    if (!self.input) {
      self.config.errorHandler(new Error("Invalid input element specified"));
      return;
    }

    self.input._type = self.input.type;
    self.input.type = "text";
    self.input.classList.add("flatpickr-input");
    self._input = self.input;

    if (self.config.altInput) {
      self.altInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(self.input.nodeName, self.config.altInputClass);
      self._input = self.altInput;
      self.altInput.placeholder = self.input.placeholder;
      self.altInput.disabled = self.input.disabled;
      self.altInput.required = self.input.required;
      self.altInput.tabIndex = self.input.tabIndex;
      self.altInput.type = "text";
      self.input.setAttribute("type", "hidden");
      if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
    }

    if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
    updatePositionElement();
  }

  function updatePositionElement() {
    self._positionElement = self.config.positionElement || self._input;
  }

  function setupMobile() {
    var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
    self.mobileInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("input", self.input.className + " flatpickr-mobile");
    self.mobileInput.tabIndex = 1;
    self.mobileInput.type = inputType;
    self.mobileInput.disabled = self.input.disabled;
    self.mobileInput.required = self.input.required;
    self.mobileInput.placeholder = self.input.placeholder;
    self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

    if (self.selectedDates.length > 0) {
      self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
    }

    if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
    if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
    if (self.input.getAttribute("step")) self.mobileInput.step = String(self.input.getAttribute("step"));
    self.input.type = "hidden";
    if (self.altInput !== undefined) self.altInput.type = "hidden";

    try {
      if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
    } catch (_a) {}

    bind(self.mobileInput, "change", function (e) {
      self.setDate((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e).value, false, self.mobileFormatStr);
      triggerEvent("onChange");
      triggerEvent("onClose");
    });
  }

  function toggle(e) {
    if (self.isOpen === true) return self.close();
    self.open(e);
  }

  function triggerEvent(event, data) {
    if (self.config === undefined) return;
    var hooks = self.config[event];

    if (hooks !== undefined && hooks.length > 0) {
      for (var i = 0; hooks[i] && i < hooks.length; i++) hooks[i](self.selectedDates, self.input.value, self, data);
    }

    if (event === "onChange") {
      self.input.dispatchEvent(createEvent("change"));
      self.input.dispatchEvent(createEvent("input"));
    }
  }

  function createEvent(name) {
    var e = document.createEvent("Event");
    e.initEvent(name, true, true);
    return e;
  }

  function isDateSelected(date) {
    for (var i = 0; i < self.selectedDates.length; i++) {
      var selectedDate = self.selectedDates[i];
      if (selectedDate instanceof Date && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(selectedDate, date) === 0) return "" + i;
    }

    return false;
  }

  function isDateInRange(date) {
    if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
    return (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[0]) >= 0 && (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[1]) <= 0;
  }

  function updateNavigationCurrentMonth() {
    if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
    self.yearElements.forEach(function (yearElement, i) {
      var d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i);

      if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
        self.monthElements[i].textContent = (0,_utils_formatting__WEBPACK_IMPORTED_MODULE_5__.monthToStr)(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
      } else {
        self.monthsDropdownContainer.value = d.getMonth().toString();
      }

      yearElement.value = d.getFullYear().toString();
    });
    self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
    self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
  }

  function getDateStr(specificFormat) {
    var format = specificFormat || (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
    return self.selectedDates.map(function (dObj) {
      return self.formatDate(dObj, format);
    }).filter(function (d, i, arr) {
      return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i;
    }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
  }

  function updateValue(triggerChange) {
    if (triggerChange === void 0) {
      triggerChange = true;
    }

    if (self.mobileInput !== undefined && self.mobileFormatStr) {
      self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
    }

    self.input.value = getDateStr(self.config.dateFormat);

    if (self.altInput !== undefined) {
      self.altInput.value = getDateStr(self.config.altFormat);
    }

    if (triggerChange !== false) triggerEvent("onValueUpdate");
  }

  function onMonthNavClick(e) {
    var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
    var isPrevMonth = self.prevMonthNav.contains(eventTarget);
    var isNextMonth = self.nextMonthNav.contains(eventTarget);

    if (isPrevMonth || isNextMonth) {
      changeMonth(isPrevMonth ? -1 : 1);
    } else if (self.yearElements.indexOf(eventTarget) >= 0) {
      eventTarget.select();
    } else if (eventTarget.classList.contains("arrowUp")) {
      self.changeYear(self.currentYear + 1);
    } else if (eventTarget.classList.contains("arrowDown")) {
      self.changeYear(self.currentYear - 1);
    }
  }

  function timeWrapper(e) {
    e.preventDefault();
    var isKeyDown = e.type === "keydown",
        eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e),
        input = eventTarget;

    if (self.amPM !== undefined && eventTarget === self.amPM) {
      self.amPM.textContent = self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(self.amPM.textContent === self.l10n.amPM[0])];
    }

    var min = parseFloat(input.getAttribute("min")),
        max = parseFloat(input.getAttribute("max")),
        step = parseFloat(input.getAttribute("step")),
        curValue = parseInt(input.value, 10),
        delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
    var newValue = curValue + step * delta;

    if (typeof input.value !== "undefined" && input.value.length === 2) {
      var isHourElem = input === self.hourElement,
          isMinuteElem = input === self.minuteElement;

      if (newValue < min) {
        newValue = max + newValue + (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!isHourElem) + ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(isHourElem) && (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!self.amPM));
        if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
      } else if (newValue > max) {
        newValue = input === self.hourElement ? newValue - max - (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!self.amPM) : min;
        if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
      }

      if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
        self.amPM.textContent = self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(self.amPM.textContent === self.l10n.amPM[0])];
      }

      input.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(newValue);
    }
  }

  init();
  return self;
}

function _flatpickr(nodeList, config) {
  var nodes = Array.prototype.slice.call(nodeList).filter(function (x) {
    return x instanceof HTMLElement;
  });
  var instances = [];

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];

    try {
      if (node.getAttribute("data-fp-omit") !== null) continue;

      if (node._flatpickr !== undefined) {
        node._flatpickr.destroy();

        node._flatpickr = undefined;
      }

      node._flatpickr = FlatpickrInstance(node, config || {});
      instances.push(node._flatpickr);
    } catch (e) {
      console.error(e);
    }
  }

  return instances.length === 1 ? instances[0] : instances;
}

if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
  HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
    return _flatpickr(this, config);
  };

  HTMLElement.prototype.flatpickr = function (config) {
    return _flatpickr([this], config);
  };
}

var flatpickr = function (selector, config) {
  if (typeof selector === "string") {
    return _flatpickr(window.document.querySelectorAll(selector), config);
  } else if (selector instanceof Node) {
    return _flatpickr([selector], config);
  } else {
    return _flatpickr(selector, config);
  }
};

flatpickr.defaultConfig = {};
flatpickr.l10ns = {
  en: __assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]),
  default: __assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"])
};

flatpickr.localize = function (l10n) {
  flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
};

flatpickr.setDefaults = function (config) {
  flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
};

flatpickr.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({});
flatpickr.formatDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateFormatter)({});
flatpickr.compareDates = _utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates;

if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
  jQuery.fn.flatpickr = function (config) {
    return _flatpickr(this, config);
  };
}

Date.prototype.fp_incr = function (days) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};

if (typeof window !== "undefined") {
  window.flatpickr = flatpickr;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (flatpickr);

/***/ }),

/***/ 9185:
/*!*********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/l10n/default.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "english": () => (/* binding */ english)
/* harmony export */ });
var english = {
  weekdays: {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  },
  months: {
    shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: function (nth) {
    var s = nth % 100;
    if (s > 3 && s < 21) return "th";

    switch (s % 10) {
      case 1:
        return "st";

      case 2:
        return "nd";

      case 3:
        return "rd";

      default:
        return "th";
    }
  },
  rangeSeparator: " to ",
  weekAbbreviation: "Wk",
  scrollTitle: "Scroll to increment",
  toggleTitle: "Click to toggle",
  amPM: ["AM", "PM"],
  yearAriaLabel: "Year",
  monthAriaLabel: "Month",
  hourAriaLabel: "Hour",
  minuteAriaLabel: "Minute",
  time_24hr: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (english);

/***/ }),

/***/ 3273:
/*!**********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/types/options.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HOOKS": () => (/* binding */ HOOKS),
/* harmony export */   "defaults": () => (/* binding */ defaults)
/* harmony export */ });
var HOOKS = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"];
var defaults = {
  _disable: [],
  allowInput: false,
  allowInvalidPreload: false,
  altFormat: "F j, Y",
  altInput: false,
  altInputClass: "form-control input",
  animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
  ariaDateFormat: "F j, Y",
  autoFillDefaultTime: true,
  clickOpens: true,
  closeOnSelect: true,
  conjunction: ", ",
  dateFormat: "Y-m-d",
  defaultHour: 12,
  defaultMinute: 0,
  defaultSeconds: 0,
  disable: [],
  disableMobile: false,
  enableSeconds: false,
  enableTime: false,
  errorHandler: function (err) {
    return typeof console !== "undefined" && console.warn(err);
  },
  getWeek: function (givenDate) {
    var date = new Date(givenDate.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
  },
  hourIncrement: 1,
  ignoredFocusElements: [],
  inline: false,
  locale: "default",
  minuteIncrement: 5,
  mode: "single",
  monthSelectorType: "dropdown",
  nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
  noCalendar: false,
  now: new Date(),
  onChange: [],
  onClose: [],
  onDayCreate: [],
  onDestroy: [],
  onKeyDown: [],
  onMonthChange: [],
  onOpen: [],
  onParseConfig: [],
  onReady: [],
  onValueUpdate: [],
  onYearChange: [],
  onPreCalendarPosition: [],
  plugins: [],
  position: "auto",
  positionElement: undefined,
  prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
  shorthandCurrentMonth: false,
  showMonths: 1,
  static: false,
  time_24hr: false,
  weekNumbers: false,
  wrap: false
};

/***/ }),

/***/ 5606:
/*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dates.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateSecondsSinceMidnight": () => (/* binding */ calculateSecondsSinceMidnight),
/* harmony export */   "compareDates": () => (/* binding */ compareDates),
/* harmony export */   "compareTimes": () => (/* binding */ compareTimes),
/* harmony export */   "createDateFormatter": () => (/* binding */ createDateFormatter),
/* harmony export */   "createDateParser": () => (/* binding */ createDateParser),
/* harmony export */   "duration": () => (/* binding */ duration),
/* harmony export */   "getDefaultHours": () => (/* binding */ getDefaultHours),
/* harmony export */   "isBetween": () => (/* binding */ isBetween),
/* harmony export */   "parseSeconds": () => (/* binding */ parseSeconds)
/* harmony export */ });
/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatting */ 9922);
/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/options */ 3273);
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../l10n/default */ 9185);



var createDateFormatter = function (_a) {
  var _b = _a.config,
      config = _b === void 0 ? _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults : _b,
      _c = _a.l10n,
      l10n = _c === void 0 ? _l10n_default__WEBPACK_IMPORTED_MODULE_2__.english : _c,
      _d = _a.isMobile,
      isMobile = _d === void 0 ? false : _d;
  return function (dateObj, frmt, overrideLocale) {
    var locale = overrideLocale || l10n;

    if (config.formatDate !== undefined && !isMobile) {
      return config.formatDate(dateObj, frmt, locale);
    }

    return frmt.split("").map(function (c, i, arr) {
      return _formatting__WEBPACK_IMPORTED_MODULE_0__.formats[c] && arr[i - 1] !== "\\" ? _formatting__WEBPACK_IMPORTED_MODULE_0__.formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
    }).join("");
  };
};
var createDateParser = function (_a) {
  var _b = _a.config,
      config = _b === void 0 ? _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults : _b,
      _c = _a.l10n,
      l10n = _c === void 0 ? _l10n_default__WEBPACK_IMPORTED_MODULE_2__.english : _c;
  return function (date, givenFormat, timeless, customLocale) {
    if (date !== 0 && !date) return undefined;
    var locale = customLocale || l10n;
    var parsedDate;
    var dateOrig = date;
    if (date instanceof Date) parsedDate = new Date(date.getTime());else if (typeof date !== "string" && date.toFixed !== undefined) parsedDate = new Date(date);else if (typeof date === "string") {
      var format = givenFormat || (config || _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults).dateFormat;
      var datestr = String(date).trim();

      if (datestr === "today") {
        parsedDate = new Date();
        timeless = true;
      } else if (config && config.parseDate) {
        parsedDate = config.parseDate(date, format);
      } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) {
        parsedDate = new Date(date);
      } else {
        var matched = void 0,
            ops = [];

        for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
          var token = format[i];
          var isBackSlash = token === "\\";
          var escaped = format[i - 1] === "\\" || isBackSlash;

          if (_formatting__WEBPACK_IMPORTED_MODULE_0__.tokenRegex[token] && !escaped) {
            regexStr += _formatting__WEBPACK_IMPORTED_MODULE_0__.tokenRegex[token];
            var match = new RegExp(regexStr).exec(date);

            if (match && (matched = true)) {
              ops[token !== "Y" ? "push" : "unshift"]({
                fn: _formatting__WEBPACK_IMPORTED_MODULE_0__.revFormat[token],
                val: match[++matchIndex]
              });
            }
          } else if (!isBackSlash) regexStr += ".";
        }

        parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
        ops.forEach(function (_a) {
          var fn = _a.fn,
              val = _a.val;
          return parsedDate = fn(parsedDate, val, locale) || parsedDate;
        });
        parsedDate = matched ? parsedDate : undefined;
      }
    }

    if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
      config.errorHandler(new Error("Invalid date provided: " + dateOrig));
      return undefined;
    }

    if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
    return parsedDate;
  };
};
function compareDates(date1, date2, timeless) {
  if (timeless === void 0) {
    timeless = true;
  }

  if (timeless !== false) {
    return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
  }

  return date1.getTime() - date2.getTime();
}
function compareTimes(date1, date2) {
  return 3600 * (date1.getHours() - date2.getHours()) + 60 * (date1.getMinutes() - date2.getMinutes()) + date1.getSeconds() - date2.getSeconds();
}
var isBetween = function (ts, ts1, ts2) {
  return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
var calculateSecondsSinceMidnight = function (hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
};
var parseSeconds = function (secondsSinceMidnight) {
  var hours = Math.floor(secondsSinceMidnight / 3600),
      minutes = (secondsSinceMidnight - hours * 3600) / 60;
  return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
};
var duration = {
  DAY: 86400000
};
function getDefaultHours(config) {
  var hours = config.defaultHour;
  var minutes = config.defaultMinute;
  var seconds = config.defaultSeconds;

  if (config.minDate !== undefined) {
    var minHour = config.minDate.getHours();
    var minMinutes = config.minDate.getMinutes();
    var minSeconds = config.minDate.getSeconds();

    if (hours < minHour) {
      hours = minHour;
    }

    if (hours === minHour && minutes < minMinutes) {
      minutes = minMinutes;
    }

    if (hours === minHour && minutes === minMinutes && seconds < minSeconds) seconds = config.minDate.getSeconds();
  }

  if (config.maxDate !== undefined) {
    var maxHr = config.maxDate.getHours();
    var maxMinutes = config.maxDate.getMinutes();
    hours = Math.min(hours, maxHr);
    if (hours === maxHr) minutes = Math.min(maxMinutes, minutes);
    if (hours === maxHr && minutes === maxMinutes) seconds = config.maxDate.getSeconds();
  }

  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

/***/ }),

/***/ 5559:
/*!******************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dom.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearNode": () => (/* binding */ clearNode),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createNumberInput": () => (/* binding */ createNumberInput),
/* harmony export */   "findParent": () => (/* binding */ findParent),
/* harmony export */   "getEventTarget": () => (/* binding */ getEventTarget),
/* harmony export */   "toggleClass": () => (/* binding */ toggleClass)
/* harmony export */ });
function toggleClass(elem, className, bool) {
  if (bool === true) return elem.classList.add(className);
  elem.classList.remove(className);
}
function createElement(tag, className, content) {
  var e = window.document.createElement(tag);
  className = className || "";
  content = content || "";
  e.className = className;
  if (content !== undefined) e.textContent = content;
  return e;
}
function clearNode(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}
function findParent(node, condition) {
  if (condition(node)) return node;else if (node.parentNode) return findParent(node.parentNode, condition);
  return undefined;
}
function createNumberInput(inputClassName, opts) {
  var wrapper = createElement("div", "numInputWrapper"),
      numInput = createElement("input", "numInput " + inputClassName),
      arrowUp = createElement("span", "arrowUp"),
      arrowDown = createElement("span", "arrowDown");

  if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
    numInput.type = "number";
  } else {
    numInput.type = "text";
    numInput.pattern = "\\d*";
  }

  if (opts !== undefined) for (var key in opts) numInput.setAttribute(key, opts[key]);
  wrapper.appendChild(numInput);
  wrapper.appendChild(arrowUp);
  wrapper.appendChild(arrowDown);
  return wrapper;
}
function getEventTarget(event) {
  try {
    if (typeof event.composedPath === "function") {
      var path = event.composedPath();
      return path[0];
    }

    return event.target;
  } catch (error) {
    return event.target;
  }
}

/***/ }),

/***/ 9922:
/*!*************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/formatting.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formats": () => (/* binding */ formats),
/* harmony export */   "monthToStr": () => (/* binding */ monthToStr),
/* harmony export */   "revFormat": () => (/* binding */ revFormat),
/* harmony export */   "tokenRegex": () => (/* binding */ tokenRegex)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ 9354);


var doNothing = function () {
  return undefined;
};

var monthToStr = function (monthNumber, shorthand, locale) {
  return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
};
var revFormat = {
  D: doNothing,
  F: function (dateObj, monthName, locale) {
    dateObj.setMonth(locale.months.longhand.indexOf(monthName));
  },
  G: function (dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  H: function (dateObj, hour) {
    dateObj.setHours(parseFloat(hour));
  },
  J: function (dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  K: function (dateObj, amPM, locale) {
    dateObj.setHours(dateObj.getHours() % 12 + 12 * (0,_utils__WEBPACK_IMPORTED_MODULE_0__.int)(new RegExp(locale.amPM[1], "i").test(amPM)));
  },
  M: function (dateObj, shortMonth, locale) {
    dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
  },
  S: function (dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  U: function (_, unixSeconds) {
    return new Date(parseFloat(unixSeconds) * 1000);
  },
  W: function (dateObj, weekNum, locale) {
    var weekNumber = parseInt(weekNum);
    var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
    return date;
  },
  Y: function (dateObj, year) {
    dateObj.setFullYear(parseFloat(year));
  },
  Z: function (_, ISODate) {
    return new Date(ISODate);
  },
  d: function (dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  h: function (dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  i: function (dateObj, minutes) {
    dateObj.setMinutes(parseFloat(minutes));
  },
  j: function (dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  l: doNothing,
  m: function (dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  n: function (dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  s: function (dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  u: function (_, unixMillSeconds) {
    return new Date(parseFloat(unixMillSeconds));
  },
  w: doNothing,
  y: function (dateObj, year) {
    dateObj.setFullYear(2000 + parseFloat(year));
  }
};
var tokenRegex = {
  D: "",
  F: "",
  G: "(\\d\\d|\\d)",
  H: "(\\d\\d|\\d)",
  J: "(\\d\\d|\\d)\\w+",
  K: "",
  M: "",
  S: "(\\d\\d|\\d)",
  U: "(.+)",
  W: "(\\d\\d|\\d)",
  Y: "(\\d{4})",
  Z: "(.+)",
  d: "(\\d\\d|\\d)",
  h: "(\\d\\d|\\d)",
  i: "(\\d\\d|\\d)",
  j: "(\\d\\d|\\d)",
  l: "",
  m: "(\\d\\d|\\d)",
  n: "(\\d\\d|\\d)",
  s: "(\\d\\d|\\d)",
  u: "(.+)",
  w: "(\\d\\d|\\d)",
  y: "(\\d{2})"
};
var formats = {
  Z: function (date) {
    return date.toISOString();
  },
  D: function (date, locale, options) {
    return locale.weekdays.shorthand[formats.w(date, locale, options)];
  },
  F: function (date, locale, options) {
    return monthToStr(formats.n(date, locale, options) - 1, false, locale);
  },
  G: function (date, locale, options) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(formats.h(date, locale, options));
  },
  H: function (date) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getHours());
  },
  J: function (date, locale) {
    return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
  },
  K: function (date, locale) {
    return locale.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_0__.int)(date.getHours() > 11)];
  },
  M: function (date, locale) {
    return monthToStr(date.getMonth(), true, locale);
  },
  S: function (date) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getSeconds());
  },
  U: function (date) {
    return date.getTime() / 1000;
  },
  W: function (date, _, options) {
    return options.getWeek(date);
  },
  Y: function (date) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getFullYear(), 4);
  },
  d: function (date) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getDate());
  },
  h: function (date) {
    return date.getHours() % 12 ? date.getHours() % 12 : 12;
  },
  i: function (date) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getMinutes());
  },
  j: function (date) {
    return date.getDate();
  },
  l: function (date, locale) {
    return locale.weekdays.longhand[date.getDay()];
  },
  m: function (date) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getMonth() + 1);
  },
  n: function (date) {
    return date.getMonth() + 1;
  },
  s: function (date) {
    return date.getSeconds();
  },
  u: function (date) {
    return date.getTime();
  },
  w: function (date) {
    return date.getDay();
  },
  y: function (date) {
    return String(date.getFullYear()).substring(2);
  }
};

/***/ }),

/***/ 9354:
/*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayify": () => (/* binding */ arrayify),
/* harmony export */   "debounce": () => (/* binding */ debounce),
/* harmony export */   "int": () => (/* binding */ int),
/* harmony export */   "pad": () => (/* binding */ pad)
/* harmony export */ });
var pad = function (number, length) {
  if (length === void 0) {
    length = 2;
  }

  return ("000" + number).slice(length * -1);
};
var int = function (bool) {
  return bool === true ? 1 : 0;
};
function debounce(fn, wait) {
  var t;
  return function () {
    var _this = this;

    var args = arguments;
    clearTimeout(t);
    t = setTimeout(function () {
      return fn.apply(_this, args);
    }, wait);
  };
}
var arrayify = function (obj) {
  return obj instanceof Array ? obj : [obj];
};

/***/ }),

/***/ 2800:
/*!************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/polyfills.js ***!
  \************************************************************/
/***/ (() => {



if (typeof Object.assign !== "function") {
  Object.assign = function (target) {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    if (!target) {
      throw TypeError("Cannot convert undefined or null to object");
    }

    var _loop_1 = function (source) {
      if (source) {
        Object.keys(source).forEach(function (key) {
          return target[key] = source[key];
        });
      }
    };

    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
      var source = args_1[_a];

      _loop_1(source);
    }

    return target;
  };
}

/***/ }),

/***/ 7381:
/*!************************************************!*\
  !*** ./node_modules/positioning/dist/entry.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "positionElements": () => (/* reexport safe */ _positioning__WEBPACK_IMPORTED_MODULE_0__.positionElements)
/* harmony export */ });
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positioning */ 4423);


/***/ }),

/***/ 4423:
/*!******************************************************!*\
  !*** ./node_modules/positioning/dist/positioning.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Positioning": () => (/* binding */ Positioning),
/* harmony export */   "positionElements": () => (/* binding */ positionElements)
/* harmony export */ });
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var Positioning =
/** @class */
function () {
  function Positioning() {}

  Positioning.prototype.getAllStyles = function (element) {
    return window.getComputedStyle(element);
  };

  Positioning.prototype.getStyle = function (element, prop) {
    return this.getAllStyles(element)[prop];
  };

  Positioning.prototype.isStaticPositioned = function (element) {
    return (this.getStyle(element, 'position') || 'static') === 'static';
  };

  Positioning.prototype.offsetParent = function (element) {
    var offsetParentEl = element.offsetParent || document.documentElement;

    while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
      offsetParentEl = offsetParentEl.offsetParent;
    }

    return offsetParentEl || document.documentElement;
  };

  Positioning.prototype.position = function (element, round) {
    if (round === void 0) {
      round = true;
    }

    var elPosition;
    var parentOffset = {
      width: 0,
      height: 0,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    };

    if (this.getStyle(element, 'position') === 'fixed') {
      elPosition = element.getBoundingClientRect();
      elPosition = {
        top: elPosition.top,
        bottom: elPosition.bottom,
        left: elPosition.left,
        right: elPosition.right,
        height: elPosition.height,
        width: elPosition.width
      };
    } else {
      var offsetParentEl = this.offsetParent(element);
      elPosition = this.offset(element, false);

      if (offsetParentEl !== document.documentElement) {
        parentOffset = this.offset(offsetParentEl, false);
      }

      parentOffset.top += offsetParentEl.clientTop;
      parentOffset.left += offsetParentEl.clientLeft;
    }

    elPosition.top -= parentOffset.top;
    elPosition.bottom -= parentOffset.top;
    elPosition.left -= parentOffset.left;
    elPosition.right -= parentOffset.left;

    if (round) {
      elPosition.top = Math.round(elPosition.top);
      elPosition.bottom = Math.round(elPosition.bottom);
      elPosition.left = Math.round(elPosition.left);
      elPosition.right = Math.round(elPosition.right);
    }

    return elPosition;
  };

  Positioning.prototype.offset = function (element, round) {
    if (round === void 0) {
      round = true;
    }

    var elBcr = element.getBoundingClientRect();
    var viewportOffset = {
      top: window.pageYOffset - document.documentElement.clientTop,
      left: window.pageXOffset - document.documentElement.clientLeft
    };
    var elOffset = {
      height: elBcr.height || element.offsetHeight,
      width: elBcr.width || element.offsetWidth,
      top: elBcr.top + viewportOffset.top,
      bottom: elBcr.bottom + viewportOffset.top,
      left: elBcr.left + viewportOffset.left,
      right: elBcr.right + viewportOffset.left
    };

    if (round) {
      elOffset.height = Math.round(elOffset.height);
      elOffset.width = Math.round(elOffset.width);
      elOffset.top = Math.round(elOffset.top);
      elOffset.bottom = Math.round(elOffset.bottom);
      elOffset.left = Math.round(elOffset.left);
      elOffset.right = Math.round(elOffset.right);
    }

    return elOffset;
  };
  /*
    Return false if the element to position is outside the viewport
  */


  Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
    var _a = placement.split('-'),
        _b = _a[0],
        placementPrimary = _b === void 0 ? 'top' : _b,
        _c = _a[1],
        placementSecondary = _c === void 0 ? 'center' : _c;

    var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
    var targetElStyles = this.getAllStyles(targetElement);
    var marginTop = parseFloat(targetElStyles.marginTop);
    var marginBottom = parseFloat(targetElStyles.marginBottom);
    var marginLeft = parseFloat(targetElStyles.marginLeft);
    var marginRight = parseFloat(targetElStyles.marginRight);
    var topPosition = 0;
    var leftPosition = 0;

    switch (placementPrimary) {
      case 'top':
        topPosition = hostElPosition.top - (targetElement.offsetHeight + marginTop + marginBottom);
        break;

      case 'bottom':
        topPosition = hostElPosition.top + hostElPosition.height;
        break;

      case 'left':
        leftPosition = hostElPosition.left - (targetElement.offsetWidth + marginLeft + marginRight);
        break;

      case 'right':
        leftPosition = hostElPosition.left + hostElPosition.width;
        break;
    }

    switch (placementSecondary) {
      case 'top':
        topPosition = hostElPosition.top;
        break;

      case 'bottom':
        topPosition = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
        break;

      case 'left':
        leftPosition = hostElPosition.left;
        break;

      case 'right':
        leftPosition = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
        break;

      case 'center':
        if (placementPrimary === 'top' || placementPrimary === 'bottom') {
          leftPosition = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
        } else {
          topPosition = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
        }

        break;
    } /// The translate3d/gpu acceleration render a blurry text on chrome, the next line is commented until a browser fix
    // targetElement.style.transform = `translate3d(${Math.round(leftPosition)}px, ${Math.floor(topPosition)}px, 0px)`;


    targetElement.style.transform = "translate(" + Math.round(leftPosition) + "px, " + Math.round(topPosition) + "px)"; // Check if the targetElement is inside the viewport

    var targetElBCR = targetElement.getBoundingClientRect();
    var html = document.documentElement;
    var windowHeight = window.innerHeight || html.clientHeight;
    var windowWidth = window.innerWidth || html.clientWidth;
    return targetElBCR.left >= 0 && targetElBCR.top >= 0 && targetElBCR.right <= windowWidth && targetElBCR.bottom <= windowHeight;
  };

  return Positioning;
}();


var placementSeparator = /\s+/;
var positionService = new Positioning();
/*
 * Accept the placement array and applies the appropriate placement dependent on the viewport.
 * Returns the applied placement.
 * In case of auto placement, placements are selected in order
 *   'top', 'bottom', 'left', 'right',
 *   'top-left', 'top-right',
 *   'bottom-left', 'bottom-right',
 *   'left-top', 'left-bottom',
 *   'right-top', 'right-bottom'.
 * */

function positionElements(hostElement, targetElement, placement, appendToBody, baseClass) {
  var placementVals = Array.isArray(placement) ? placement : placement.split(placementSeparator);
  var allowedPlacements = ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top', 'left-bottom', 'right-top', 'right-bottom'];
  var classList = targetElement.classList;

  var addClassesToTarget = function (targetPlacement) {
    var _a = targetPlacement.split('-'),
        primary = _a[0],
        secondary = _a[1];

    var classes = [];

    if (baseClass) {
      classes.push(baseClass + "-" + primary);

      if (secondary) {
        classes.push(baseClass + "-" + primary + "-" + secondary);
      }

      classes.forEach(function (classname) {
        classList.add(classname);
      });
    }

    return classes;
  }; // Remove old placement classes to avoid issues


  if (baseClass) {
    allowedPlacements.forEach(function (placementToRemove) {
      classList.remove(baseClass + "-" + placementToRemove);
    });
  } // replace auto placement with other placements


  var hasAuto = placementVals.findIndex(function (val) {
    return val === 'auto';
  });

  if (hasAuto >= 0) {
    allowedPlacements.forEach(function (obj) {
      if (placementVals.find(function (val) {
        return val.search('^' + obj) !== -1;
      }) == null) {
        placementVals.splice(hasAuto++, 1, obj);
      }
    });
  } // coordinates where to position
  // Required for transform:


  var style = targetElement.style;
  style.position = 'absolute';
  style.top = '0';
  style.left = '0';
  style['will-change'] = 'transform';
  var testPlacement;
  var isInViewport = false;

  for (var _i = 0, placementVals_1 = placementVals; _i < placementVals_1.length; _i++) {
    testPlacement = placementVals_1[_i];
    var addedClasses = addClassesToTarget(testPlacement);

    if (positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody)) {
      isInViewport = true;
      break;
    } // Remove the baseClasses for further calculation


    if (baseClass) {
      addedClasses.forEach(function (classname) {
        classList.remove(classname);
      });
    }
  }

  if (!isInViewport) {
    // If nothing match, the first placement is the default one
    testPlacement = placementVals[0];
    addClassesToTarget(testPlacement);
    positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody);
  }

  return testPlacement;
}

/***/ }),

/***/ 7928:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Notification.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Notification": () => (/* binding */ Notification),
/* harmony export */   "NotificationKind": () => (/* binding */ NotificationKind)
/* harmony export */ });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observable/empty */ 6439);
/* harmony import */ var _observable_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable/of */ 4139);
/* harmony import */ var _observable_throwError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observable/throwError */ 6587);



var NotificationKind;

(function (NotificationKind) {
  NotificationKind["NEXT"] = "N";
  NotificationKind["ERROR"] = "E";
  NotificationKind["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));

class Notification {
  constructor(kind, value, error) {
    this.kind = kind;
    this.value = value;
    this.error = error;
    this.hasValue = kind === 'N';
  }

  observe(observer) {
    switch (this.kind) {
      case 'N':
        return observer.next && observer.next(this.value);

      case 'E':
        return observer.error && observer.error(this.error);

      case 'C':
        return observer.complete && observer.complete();
    }
  }

  do(next, error, complete) {
    const kind = this.kind;

    switch (kind) {
      case 'N':
        return next && next(this.value);

      case 'E':
        return error && error(this.error);

      case 'C':
        return complete && complete();
    }
  }

  accept(nextOrObserver, error, complete) {
    if (nextOrObserver && typeof nextOrObserver.next === 'function') {
      return this.observe(nextOrObserver);
    } else {
      return this.do(nextOrObserver, error, complete);
    }
  }

  toObservable() {
    const kind = this.kind;

    switch (kind) {
      case 'N':
        return (0,_observable_of__WEBPACK_IMPORTED_MODULE_0__.of)(this.value);

      case 'E':
        return (0,_observable_throwError__WEBPACK_IMPORTED_MODULE_1__.throwError)(this.error);

      case 'C':
        return (0,_observable_empty__WEBPACK_IMPORTED_MODULE_2__.empty)();
    }

    throw new Error('unexpected notification kind value');
  }

  static createNext(value) {
    if (typeof value !== 'undefined') {
      return new Notification('N', value);
    }

    return Notification.undefinedValueNotification;
  }

  static createError(err) {
    return new Notification('E', undefined, err);
  }

  static createComplete() {
    return Notification.completeNotification;
  }

}
Notification.completeNotification = new Notification('C');
Notification.undefinedValueNotification = new Notification('N', undefined);

/***/ }),

/***/ 1555:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/ReplaySubject.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplaySubject": () => (/* binding */ ReplaySubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 2218);
/* harmony import */ var _scheduler_queue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scheduler/queue */ 8198);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscription */ 2425);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operators/observeOn */ 3888);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ 9086);
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubjectSubscription */ 1722);






class ReplaySubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
  constructor(bufferSize = Number.POSITIVE_INFINITY, windowTime = Number.POSITIVE_INFINITY, scheduler) {
    super();
    this.scheduler = scheduler;
    this._events = [];
    this._infiniteTimeWindow = false;
    this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
    this._windowTime = windowTime < 1 ? 1 : windowTime;

    if (windowTime === Number.POSITIVE_INFINITY) {
      this._infiniteTimeWindow = true;
      this.next = this.nextInfiniteTimeWindow;
    } else {
      this.next = this.nextTimeWindow;
    }
  }

  nextInfiniteTimeWindow(value) {
    if (!this.isStopped) {
      const _events = this._events;

      _events.push(value);

      if (_events.length > this._bufferSize) {
        _events.shift();
      }
    }

    super.next(value);
  }

  nextTimeWindow(value) {
    if (!this.isStopped) {
      this._events.push(new ReplayEvent(this._getNow(), value));

      this._trimBufferThenGetEvents();
    }

    super.next(value);
  }

  _subscribe(subscriber) {
    const _infiniteTimeWindow = this._infiniteTimeWindow;

    const _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();

    const scheduler = this.scheduler;
    const len = _events.length;
    let subscription;

    if (this.closed) {
      throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__.ObjectUnsubscribedError();
    } else if (this.isStopped || this.hasError) {
      subscription = _Subscription__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    } else {
      this.observers.push(subscriber);
      subscription = new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_3__.SubjectSubscription(this, subscriber);
    }

    if (scheduler) {
      subscriber.add(subscriber = new _operators_observeOn__WEBPACK_IMPORTED_MODULE_4__.ObserveOnSubscriber(subscriber, scheduler));
    }

    if (_infiniteTimeWindow) {
      for (let i = 0; i < len && !subscriber.closed; i++) {
        subscriber.next(_events[i]);
      }
    } else {
      for (let i = 0; i < len && !subscriber.closed; i++) {
        subscriber.next(_events[i].value);
      }
    }

    if (this.hasError) {
      subscriber.error(this.thrownError);
    } else if (this.isStopped) {
      subscriber.complete();
    }

    return subscription;
  }

  _getNow() {
    return (this.scheduler || _scheduler_queue__WEBPACK_IMPORTED_MODULE_5__.queue).now();
  }

  _trimBufferThenGetEvents() {
    const now = this._getNow();

    const _bufferSize = this._bufferSize;
    const _windowTime = this._windowTime;
    const _events = this._events;
    const eventsCount = _events.length;
    let spliceCount = 0;

    while (spliceCount < eventsCount) {
      if (now - _events[spliceCount].time < _windowTime) {
        break;
      }

      spliceCount++;
    }

    if (eventsCount > _bufferSize) {
      spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
    }

    if (spliceCount > 0) {
      _events.splice(0, spliceCount);
    }

    return _events;
  }

}

class ReplayEvent {
  constructor(time, value) {
    this.time = time;
    this.value = value;
  }

}

/***/ }),

/***/ 1925:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scheduler": () => (/* binding */ Scheduler)
/* harmony export */ });
class Scheduler {
  constructor(SchedulerAction, now = Scheduler.now) {
    this.SchedulerAction = SchedulerAction;
    this.now = now;
  }

  schedule(work, delay = 0, state) {
    return new this.SchedulerAction(this, work).schedule(state, delay);
  }

}

Scheduler.now = () => Date.now();

/***/ }),

/***/ 3491:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interval": () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 2378);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 328);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isNumeric */ 7269);



function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  if (!(0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
    period = 0;
  }

  if (!scheduler || typeof scheduler.schedule !== 'function') {
    scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
  }

  return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
    subscriber.add(scheduler.schedule(dispatch, period, {
      subscriber,
      counter: 0,
      period
    }));
    return subscriber;
  });
}

function dispatch(state) {
  const {
    subscriber,
    counter,
    period
  } = state;
  subscriber.next(counter);
  this.schedule({
    subscriber,
    counter: counter + 1,
    period
  }, period);
}

/***/ }),

/***/ 5398:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/timer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timer": () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ 2378);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduler/async */ 328);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isNumeric */ 7269);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ 7507);




function timer(dueTime = 0, periodOrScheduler, scheduler) {
  let period = -1;

  if ((0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(periodOrScheduler)) {
    period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
  } else if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(periodOrScheduler)) {
    scheduler = periodOrScheduler;
  }

  if (!(0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(scheduler)) {
    scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_2__.async;
  }

  return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(subscriber => {
    const due = (0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(dueTime) ? dueTime : +dueTime - scheduler.now();
    return scheduler.schedule(dispatch, due, {
      index: 0,
      period,
      subscriber
    });
  });
}

function dispatch(state) {
  const {
    index,
    period,
    subscriber
  } = state;
  subscriber.next(index);

  if (subscriber.closed) {
    return;
  } else if (period === -1) {
    return subscriber.complete();
  }

  state.index = index + 1;
  this.schedule(state, period);
}

/***/ }),

/***/ 3432:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/count.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "count": () => (/* binding */ count)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 14);

function count(predicate) {
  return source => source.lift(new CountOperator(predicate, source));
}

class CountOperator {
  constructor(predicate, source) {
    this.predicate = predicate;
    this.source = source;
  }

  call(subscriber, source) {
    return source.subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
  }

}

class CountSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
  constructor(destination, predicate, source) {
    super(destination);
    this.predicate = predicate;
    this.source = source;
    this.count = 0;
    this.index = 0;
  }

  _next(value) {
    if (this.predicate) {
      this._tryPredicate(value);
    } else {
      this.count++;
    }
  }

  _tryPredicate(value) {
    let result;

    try {
      result = this.predicate(value, this.index++, this.source);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    if (result) {
      this.count++;
    }
  }

  _complete() {
    this.destination.next(this.count);
    this.destination.complete();
  }

}

/***/ }),

/***/ 3888:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/observeOn.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObserveOnMessage": () => (/* binding */ ObserveOnMessage),
/* harmony export */   "ObserveOnOperator": () => (/* binding */ ObserveOnOperator),
/* harmony export */   "ObserveOnSubscriber": () => (/* binding */ ObserveOnSubscriber),
/* harmony export */   "observeOn": () => (/* binding */ observeOn)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 14);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Notification */ 7928);


function observeOn(scheduler, delay = 0) {
  return function observeOnOperatorFunction(source) {
    return source.lift(new ObserveOnOperator(scheduler, delay));
  };
}
class ObserveOnOperator {
  constructor(scheduler, delay = 0) {
    this.scheduler = scheduler;
    this.delay = delay;
  }

  call(subscriber, source) {
    return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
  }

}
class ObserveOnSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
  constructor(destination, scheduler, delay = 0) {
    super(destination);
    this.scheduler = scheduler;
    this.delay = delay;
  }

  static dispatch(arg) {
    const {
      notification,
      destination
    } = arg;
    notification.observe(destination);
    this.unsubscribe();
  }

  scheduleMessage(notification) {
    const destination = this.destination;
    destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
  }

  _next(value) {
    this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__.Notification.createNext(value));
  }

  _error(err) {
    this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__.Notification.createError(err));
    this.unsubscribe();
  }

  _complete() {
    this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__.Notification.createComplete());
    this.unsubscribe();
  }

}
class ObserveOnMessage {
  constructor(notification, destination) {
    this.notification = notification;
    this.destination = destination;
  }

}

/***/ }),

/***/ 9221:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/pairwise.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pairwise": () => (/* binding */ pairwise)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 14);

function pairwise() {
  return source => source.lift(new PairwiseOperator());
}

class PairwiseOperator {
  call(subscriber, source) {
    return source.subscribe(new PairwiseSubscriber(subscriber));
  }

}

class PairwiseSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
  constructor(destination) {
    super(destination);
    this.hasPrev = false;
  }

  _next(value) {
    let pair;

    if (this.hasPrev) {
      pair = [this.prev, value];
    } else {
      this.hasPrev = true;
    }

    this.prev = value;

    if (pair) {
      this.destination.next(pair);
    }
  }

}

/***/ }),

/***/ 6426:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/switchMapTo.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "switchMapTo": () => (/* binding */ switchMapTo)
/* harmony export */ });
/* harmony import */ var _switchMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switchMap */ 9095);

function switchMapTo(innerObservable, resultSelector) {
  return resultSelector ? (0,_switchMap__WEBPACK_IMPORTED_MODULE_0__.switchMap)(() => innerObservable, resultSelector) : (0,_switchMap__WEBPACK_IMPORTED_MODULE_0__.switchMap)(() => innerObservable);
}

/***/ }),

/***/ 5921:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "takeUntil": () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ 2831);

function takeUntil(notifier) {
  return source => source.lift(new TakeUntilOperator(notifier));
}

class TakeUntilOperator {
  constructor(notifier) {
    this.notifier = notifier;
  }

  call(subscriber, source) {
    const takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
    const notifierSubscription = (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(this.notifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(takeUntilSubscriber));

    if (notifierSubscription && !takeUntilSubscriber.seenValue) {
      takeUntilSubscriber.add(notifierSubscription);
      return source.subscribe(takeUntilSubscriber);
    }

    return takeUntilSubscriber;
  }

}

class TakeUntilSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber {
  constructor(destination) {
    super(destination);
    this.seenValue = false;
  }

  notifyNext() {
    this.seenValue = true;
    this.complete();
  }

  notifyComplete() {}

}

/***/ }),

/***/ 5353:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 2425);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(scheduler, work) {
    super();
  }

  schedule(state, delay = 0) {
    return this;
  }

}

/***/ }),

/***/ 3670:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncAction": () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 5353);

class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
    this.pending = false;
  }

  schedule(state, delay = 0) {
    if (this.closed) {
      return this;
    }

    this.state = state;
    const id = this.id;
    const scheduler = this.scheduler;

    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }

    this.pending = true;
    this.delay = delay;
    this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
    return this;
  }

  requestAsyncId(scheduler, id, delay = 0) {
    return setInterval(scheduler.flush.bind(scheduler, this), delay);
  }

  recycleAsyncId(scheduler, id, delay = 0) {
    if (delay !== null && this.delay === delay && this.pending === false) {
      return id;
    }

    clearInterval(id);
    return undefined;
  }

  execute(state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }

    this.pending = false;

    const error = this._execute(state, delay);

    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }

  _execute(state, delay) {
    let errored = false;
    let errorValue = undefined;

    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = !!e && e || new Error(e);
    }

    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  }

  _unsubscribe() {
    const id = this.id;
    const scheduler = this.scheduler;
    const actions = scheduler.actions;
    const index = actions.indexOf(this);
    this.work = null;
    this.state = null;
    this.pending = false;
    this.scheduler = null;

    if (index !== -1) {
      actions.splice(index, 1);
    }

    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, null);
    }

    this.delay = null;
  }

}

/***/ }),

/***/ 2901:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncScheduler": () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 1925);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
  constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
    super(SchedulerAction, () => {
      if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
        return AsyncScheduler.delegate.now();
      } else {
        return now();
      }
    });
    this.actions = [];
    this.active = false;
    this.scheduled = undefined;
  }

  schedule(work, delay = 0, state) {
    if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
      return AsyncScheduler.delegate.schedule(work, delay, state);
    } else {
      return super.schedule(work, delay, state);
    }
  }

  flush(action) {
    const {
      actions
    } = this;

    if (this.active) {
      actions.push(action);
      return;
    }

    let error;
    this.active = true;

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());

    this.active = false;

    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }

      throw error;
    }
  }

}

/***/ }),

/***/ 7921:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/QueueAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueueAction": () => (/* binding */ QueueAction)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ 3670);

class QueueAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
  }

  schedule(state, delay = 0) {
    if (delay > 0) {
      return super.schedule(state, delay);
    }

    this.delay = delay;
    this.state = state;
    this.scheduler.flush(this);
    return this;
  }

  execute(state, delay) {
    return delay > 0 || this.closed ? super.execute(state, delay) : this._execute(state, delay);
  }

  requestAsyncId(scheduler, id, delay = 0) {
    if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
      return super.requestAsyncId(scheduler, id, delay);
    }

    return scheduler.flush(this);
  }

}

/***/ }),

/***/ 4021:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/QueueScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueueScheduler": () => (/* binding */ QueueScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 2901);

class QueueScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler {}

/***/ }),

/***/ 328:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "async": () => (/* binding */ async),
/* harmony export */   "asyncScheduler": () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 3670);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 2901);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;

/***/ }),

/***/ 8198:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/queue.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queue": () => (/* binding */ queue),
/* harmony export */   "queueScheduler": () => (/* binding */ queueScheduler)
/* harmony export */ });
/* harmony import */ var _QueueAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueueAction */ 7921);
/* harmony import */ var _QueueScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueueScheduler */ 4021);


const queueScheduler = new _QueueScheduler__WEBPACK_IMPORTED_MODULE_0__.QueueScheduler(_QueueAction__WEBPACK_IMPORTED_MODULE_1__.QueueAction);
const queue = queueScheduler;

/***/ }),

/***/ 7269:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumeric": () => (/* binding */ isNumeric)
/* harmony export */ });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ 4327);

function isNumeric(val) {
  return !(0,_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(val) && val - parseFloat(val) + 1 >= 0;
}

/***/ }),

/***/ 2088:
/*!********************************************************!*\
  !*** ./src/app/calendar/calendar.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".img-wrapper {\n  min-height: 200px;\n  width: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcTWFoYXJhamElMjBCYW5xdWV0XFxtYWhhcmFqYS1iYW5xdWV0XFxzcmNcXGFwcFxcY2FsZW5kYXJcXGNhbGVuZGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNDSiIsImZpbGUiOiJjYWxlbmRhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXdyYXBwZXIge1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59IiwiLmltZy13cmFwcGVyIHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufSJdfQ== */";

/***/ }),

/***/ 6163:
/*!********************************************************!*\
  !*** ./src/app/calendar/calendar.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n\n  <div class=\"row text-center\">\n    <div class=\"col-md-4\">\n      <div class=\"btn-group\">\n        <div\n          class=\"btn btn-primary\"\n          mwlCalendarPreviousView\n          [view]=\"view\"\n          [(viewDate)]=\"viewDate\"\n          (viewDateChange)=\"closeOpenMonthViewDay()\"\n        >\n          Previous\n        </div>\n        <div\n          class=\"btn btn-outline-secondary\"\n          mwlCalendarToday\n          [(viewDate)]=\"viewDate\"\n        >\n          Today\n        </div>\n        <div\n          class=\"btn btn-primary\"\n          mwlCalendarNextView\n          [view]=\"view\"\n          [(viewDate)]=\"viewDate\"\n          (viewDateChange)=\"closeOpenMonthViewDay()\"\n        >\n          Next\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"btn-group\">\n        <div\n          class=\"btn btn-primary\"\n          (click)=\"setView(CalendarView.Month)\"\n          [class.active]=\"view === CalendarView.Month\"\n        >\n          Month\n        </div>\n        <div\n          class=\"btn btn-primary\"\n          (click)=\"setView(CalendarView.Week)\"\n          [class.active]=\"view === CalendarView.Week\"\n        >\n          Week\n        </div>\n        <div\n          class=\"btn btn-primary\"\n          (click)=\"setView(CalendarView.Day)\"\n          [class.active]=\"view === CalendarView.Day\"\n        >\n          Day\n        </div>\n      </div>\n    </div>\n  </div>\n  <br />\n  <div [ngSwitch]=\"view\">\n    <mwl-calendar-month-view\n      *ngSwitchCase=\"CalendarView.Month\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [refresh]=\"refresh\"\n      [activeDayIsOpen]=\"activeDayIsOpen\"\n      (dayClicked)=\"dayClicked($event.day)\"\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n      (eventTimesChanged)=\"eventTimesChanged($event)\"\n    >\n    </mwl-calendar-month-view>\n    <mwl-calendar-week-view\n      *ngSwitchCase=\"CalendarView.Week\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [refresh]=\"refresh\"\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n      (eventTimesChanged)=\"eventTimesChanged($event)\"\n    >\n    </mwl-calendar-week-view>\n    <mwl-calendar-day-view\n      *ngSwitchCase=\"CalendarView.Day\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [refresh]=\"refresh\"\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n      (eventTimesChanged)=\"eventTimesChanged($event)\"\n    >\n    </mwl-calendar-day-view>\n  </div>\n  \n  <ion-modal [isOpen]=\"isModalOpen\">\n    <ng-template>\n      <ion-header>\n        <ion-toolbar >\n          <ion-title>ADD TASK </ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"setOpen(false)\">Close</ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content class=\"ion-padding\">\n        <p [formGroup]=\"taskForm\">\n          <ion-item>\n            <ion-label position=\"floating\">Date</ion-label>\n            <ion-input formControlName=\"date\" [value]=\"selectedDate\"></ion-input>\n          </ion-item>\n          <br>\n          <ion-item>\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input formControlName=\"title\"></ion-input>\n          </ion-item>\n          <br>\n          <ion-item>\n              <ion-label position=\"floating\">Staff Name</ion-label>\n              <ion-input formControlName=\"staffName\"></ion-input>\n            </ion-item>\n            <br>\n              <ion-button *ngIf=\"!disableButton\" expand=\"round\" color=\"dark\" (click)=\"onFileSelected()\">\n                <ion-icon lazy=\"true\" slot=\"start\" name=\"image\"></ion-icon>\n                <ion-label slot=\"end\">Upload pic</ion-label>\n              </ion-button>\n              <ion-button *ngIf=\"!disableButton\" expand=\"round\" color=\"dark\" (click)=\"submit()\">\n                <ion-label slot=\"end\">submit</ion-label>\n              </ion-button>\n               <br>\n               <br>\n               <ion-grid>\n                <ion-row>\n                  <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let image of taskForm.get('images').value\">\n                    <img class=\"img-wrapper\" [src]=\"image\">\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n        </p>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_calendar_calendar_module_ts.js.map