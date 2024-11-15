"use strict";
(self["webpackChunkakhils"] = self["webpackChunkakhils"] || []).push([["src_app_page-not-found_page-not-found_module_ts"],{

/***/ 439:
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


const _c0 = function (a0, a1) {
  return {
    "top": a0,
    "left": a1
  };
};
class PageNotFoundComponent {
  constructor(router, changeDetectorRef) {
    this.router = router;
    this.changeDetectorRef = changeDetectorRef;
    this.top = "0px";
    this.left = "0px";
    changeDetectorRef.detach();
  }
  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    document.addEventListener('mousemove', event => {
      this.top = event.pageY + 'px';
      this.left = event.pageX + 'px';
      this.changeDetectorRef.detectChanges();
    });
  }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
  return new (t || PageNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
PageNotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageNotFoundComponent,
  selectors: [["app-page-not-found"]],
  decls: 8,
  vars: 5,
  consts: [[1, "notfound"], ["id", "torch", 3, "click"]],
  template: function PageNotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Uh, Ohh");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sorry we can't find what you are looking for 'cuz its so dark in here.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageNotFoundComponent_Template_div_click_7_listener() {
        return ctx.router.navigate(["/"]);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.top, ctx.left));
    }
  },
  styles: [".notfound[_ngcontent-%COMP%]{cursor:pointer;height:100vh;background:url('404.webp') no-repeat left top;background-size:cover;display:flex;justify-content:center;align-items:center;scroll-behavior:unset;flex-direction:column}.notfound[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#011718;margin-top:-200px;font-size:12em;text-align:center;text-shadow:-5px 5px 0 rgba(0,0,0,.7),-10px 10px 0 rgba(0,0,0,.4),-15px 15px 0 rgba(0,0,0,.2)}.notfound[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#000;font-size:4em;text-shadow:-5px 5px 0 rgba(0,0,0,.7);text-align:center;margin-top:-10px}.notfound[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;margin-left:30px;margin-right:30px;font-size:2em;text-shadow:-5px 5px 0 rgba(0,0,0,.7);margin-top:30px}.notfound[_ngcontent-%COMP%]   #torch[_ngcontent-%COMP%]{margin:-150px 0 0 -150px;width:200px;height:200px;box-shadow:0 0 0 9999em #000000f7;opacity:1;border-radius:50%;position:fixed;background:rgba(0,0,0,.3)}.notfound[_ngcontent-%COMP%]   #torch[_ngcontent-%COMP%]:after{content:\"\";display:block;border-radius:50%;width:100%;height:100%;top:0;left:0;box-shadow:inset 0 0 40px 2px #242a35,0 0 20px 4px rgba(13,13,10,.2)}@media (max-width:768px){.notfound[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:-50px}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVSxjQUFjLENBQUMsWUFBWSxDQUFDLDZDQUErRCxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsNkZBQTZGLENBQUMsYUFBYSxVQUFVLENBQUMsYUFBYSxDQUFDLHFDQUFxQyxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLGFBQWEsVUFBVSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxxQ0FBcUMsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsaUNBQWlDLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyx1QkFBdUIsVUFBVSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsb0VBQW9FLENBQUMseUJBQXlCLGFBQWEsZ0JBQWdCLENBQUMiLCJmaWxlIjoicGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3Rmb3VuZHtjdXJzb3I6cG9pbnRlcjtoZWlnaHQ6MTAwdmg7YmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy80MDQud2VicCkgbm8tcmVwZWF0IGxlZnQgdG9wO2JhY2tncm91bmQtc2l6ZTpjb3ZlcjtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7c2Nyb2xsLWJlaGF2aW9yOnVuc2V0O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0ubm90Zm91bmQgaDF7Y29sb3I6IzAxMTcxODttYXJnaW4tdG9wOi0yMDBweDtmb250LXNpemU6MTJlbTt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LXNoYWRvdzotNXB4IDVweCAwIHJnYmEoMCwwLDAsLjcpLC0xMHB4IDEwcHggMCByZ2JhKDAsMCwwLC40KSwtMTVweCAxNXB4IDAgcmdiYSgwLDAsMCwuMil9Lm5vdGZvdW5kIGgye2NvbG9yOiMwMDA7Zm9udC1zaXplOjRlbTt0ZXh0LXNoYWRvdzotNXB4IDVweCAwIHJnYmEoMCwwLDAsLjcpO3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi10b3A6LTEwcHh9Lm5vdGZvdW5kIGgze2NvbG9yOiNmZmY7bWFyZ2luLWxlZnQ6MzBweDttYXJnaW4tcmlnaHQ6MzBweDtmb250LXNpemU6MmVtO3RleHQtc2hhZG93Oi01cHggNXB4IDAgcmdiYSgwLDAsMCwuNyk7bWFyZ2luLXRvcDozMHB4fS5ub3Rmb3VuZCAjdG9yY2h7bWFyZ2luOi0xNTBweCAwIDAgLTE1MHB4O3dpZHRoOjIwMHB4O2hlaWdodDoyMDBweDtib3gtc2hhZG93OjAgMCAwIDk5OTllbSAjMDAwMDAwZjc7b3BhY2l0eToxO2JvcmRlci1yYWRpdXM6NTAlO3Bvc2l0aW9uOmZpeGVkO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMyl9Lm5vdGZvdW5kICN0b3JjaDphZnRlcntjb250ZW50OlwiXCI7ZGlzcGxheTpibG9jaztib3JkZXItcmFkaXVzOjUwJTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3RvcDowO2xlZnQ6MDtib3gtc2hhZG93Omluc2V0IDAgMCA0MHB4IDJweCAjMjQyYTM1LDAgMCAyMHB4IDRweCByZ2JhKDEzLDEzLDEwLC4yKX1AbWVkaWEgKG1heC13aWR0aDo3NjhweCl7Lm5vdGZvdW5kIGgxe21hcmdpbi10b3A6LTUwcHh9fVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVLGNBQWMsQ0FBQyxZQUFZLENBQUMsNkNBQStELENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLGFBQWEsYUFBYSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyw2RkFBNkYsQ0FBQyxhQUFhLFVBQVUsQ0FBQyxhQUFhLENBQUMscUNBQXFDLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxVQUFVLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLHFDQUFxQyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsd0JBQXdCLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxpQ0FBaUMsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLHlCQUF5QixDQUFDLHVCQUF1QixVQUFVLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxvRUFBb0UsQ0FBQyx5QkFBeUIsYUFBYSxnQkFBZ0IsQ0FBQzs7QUFFcmdDLG93RUFBb3dFIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGZvdW5ke2N1cnNvcjpwb2ludGVyO2hlaWdodDoxMDB2aDtiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2VzLzQwNC53ZWJwKSBuby1yZXBlYXQgbGVmdCB0b3A7YmFja2dyb3VuZC1zaXplOmNvdmVyO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtzY3JvbGwtYmVoYXZpb3I6dW5zZXQ7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5ub3Rmb3VuZCBoMXtjb2xvcjojMDExNzE4O21hcmdpbi10b3A6LTIwMHB4O2ZvbnQtc2l6ZToxMmVtO3RleHQtYWxpZ246Y2VudGVyO3RleHQtc2hhZG93Oi01cHggNXB4IDAgcmdiYSgwLDAsMCwuNyksLTEwcHggMTBweCAwIHJnYmEoMCwwLDAsLjQpLC0xNXB4IDE1cHggMCByZ2JhKDAsMCwwLC4yKX0ubm90Zm91bmQgaDJ7Y29sb3I6IzAwMDtmb250LXNpemU6NGVtO3RleHQtc2hhZG93Oi01cHggNXB4IDAgcmdiYSgwLDAsMCwuNyk7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLXRvcDotMTBweH0ubm90Zm91bmQgaDN7Y29sb3I6I2ZmZjttYXJnaW4tbGVmdDozMHB4O21hcmdpbi1yaWdodDozMHB4O2ZvbnQtc2l6ZToyZW07dGV4dC1zaGFkb3c6LTVweCA1cHggMCByZ2JhKDAsMCwwLC43KTttYXJnaW4tdG9wOjMwcHh9Lm5vdGZvdW5kICN0b3JjaHttYXJnaW46LTE1MHB4IDAgMCAtMTUwcHg7d2lkdGg6MjAwcHg7aGVpZ2h0OjIwMHB4O2JveC1zaGFkb3c6MCAwIDAgOTk5OWVtICMwMDAwMDBmNztvcGFjaXR5OjE7Ym9yZGVyLXJhZGl1czo1MCU7cG9zaXRpb246Zml4ZWQ7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4zKX0ubm90Zm91bmQgI3RvcmNoOmFmdGVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OmJsb2NrO2JvcmRlci1yYWRpdXM6NTAlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7dG9wOjA7bGVmdDowO2JveC1zaGFkb3c6aW5zZXQgMCAwIDQwcHggMnB4ICMyNDJhMzUsMCAwIDIwcHggNHB4IHJnYmEoMTMsMTMsMTAsLjIpfUBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KXsubm90Zm91bmQgaDF7bWFyZ2luLXRvcDotNTBweH19XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 6815:
/*!*********************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundModule": () => (/* binding */ PageNotFoundModule)
/* harmony export */ });
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found.component */ 439);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent
}];
class PageNotFoundModule {}
PageNotFoundModule.ɵfac = function PageNotFoundModule_Factory(t) {
  return new (t || PageNotFoundModule)();
};
PageNotFoundModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PageNotFoundModule
});
PageNotFoundModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PageNotFoundModule, {
    declarations: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_page-not-found_page-not-found_module_ts.js.map