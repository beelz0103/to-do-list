/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --main-color: lightcoral;\n  --dark-gray: #e5e5e5;\n  --light-gray: #f8f8f8;\n}\n\nhtml {\n  font-family: sans-serif;\n}\n\n.fa-solid {\n  color: rgb(136, 132, 132);\n}\n\nbody {\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  grid-template-rows: 70px 1fr 40px;\n}\n\n#header {\n  color: white;\n  font-size: 2rem;\n  padding: 10px;\n  background-color: var(--main-color);\n  grid-column: 1/-1;\n}\n\n#footer {\n  display: flex;\n  background-color: #b7b7b7;\n  grid-column: 1/-1;\n  font-size: 1.2rem;\n  font-weight: 500;\n  align-items: center;\n  justify-content: center;\n}\n\n#sidebar {\n  display: flex;\n  flex-direction: column;\n  font-size: 18px;\n  padding: 20px 5px 10px 35px;\n  background-color: var(--light-gray);\n}\n\n#project-container {\n  padding: 0 20px;\n  overflow: auto;\n  margin: 10px;\n  height: 300px;\n}\n\n.projectItem {\n  cursor: pointer;\n  padding: 5px;\n  margin: 10px 0;\n  width: 90%;\n  font-size: 16px;\n  border-radius: 5px;\n}\n\n.projectItem:hover {\n  background-color: #e1e1e1;\n}\n\n#addNewProject {\n  text-align: left;\n  font-size: inherit;\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  width: 85%;\n  padding: 0;\n  border-radius: 5px;\n  margin: 0;\n  padding: 5px;\n}\n\n.sidebarbuttons {\n  padding: 5px;\n  margin-bottom: 10px;\n  width: 85%;\n  border-radius: 5px;\n}\n\n#addNewProject:hover {\n  background-color: #e1e1e1;\n}\n\n.sidebarbuttons:hover {\n  background-color: #e1e1e1;\n}\n\n.projectsheader {\n  padding: 5px;\n  margin-bottom: 10px;\n  width: 85%;\n  border-radius: 5px;\n}\n\n.higlight {\n  background-color: #e1e1e1;\n}\n\n.projectItem {\n  display: flex;\n}\n\n.deleteButton > *,\n.editButtonForTask > *,\n.deleteButtonForTask > * {\n  pointer-events: none;\n}\n\n.projectItem {\n  display: grid;\n  grid-template-columns: 20px 1fr 20px;\n}\n\n.deleteButton,\n.editButtonForTask,\n.deleteButtonForTask {\n  width: fit-content;\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\n.none {\n  background-color: gray;\n  width: 5px;\n  height: 100%;\n}\n\n.low {\n  background-color: green;\n  width: 5px;\n  height: 100%;\n}\n\n.medium {\n  background-color: yellow;\n  width: 5px;\n  height: 100%;\n}\n\n.high {\n  background-color: red;\n  width: 5px;\n  height: 100%;\n}\n\n.checkbox {\n  margin: 5px;\n}\n\n.titleDiv {\n  flex: 1;\n  font-weight: bold;\n  color: #636060;\n}\n\n.dateDiv {\n  margin: 10px;\n}\n\n.editButtonForTask,\n.deleteButtonForTask {\n  margin: 10px;\n}\n\n.taskDiv {\n  margin: 8px;\n  display: flex;\n  height: 50px;\n  align-items: center;\n  background-color: var(--light-gray);\n}\n\n.content-container-title {\n  font-size: 1.8rem;\n  font-weight: bold;\n  text-decoration-line: underline;\n  text-align: center;\n  color: #636060;\n  margin-bottom: 5px;\n}\n.titleDivChecked {\n  text-decoration-line: line-through;\n}\n.dateDiv {\n  font-size: 80%;\n  color: #636060;\n}\n.editButtonForTask:hover,\n.deleteButton:hover,\n.deleteButtonForTask:hover,\n.checkbox:hover {\n  transform: scale(1.1);\n}\n\n.fa-solid:hover {\n  fill: #3ba395;\n  color: #3ba395;\n}\n\n.checkbox {\n  cursor: pointer;\n}\n\n#taskFormContainer {\n  margin-top: 10px;\n}\n\n.hideElement {\n  display: none;\n}\n\n.showElement {\n  display: block;\n}\n\n#content {\n  background-color: none;\n}\n\n#content-container {\n  display: flex;\n  flex-direction: column;\n  margin-left: 100px;\n  padding-right: 100px;\n  overflow: auto;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,SAAS;EACT,UAAU;EACV,aAAa;EACb,gCAAgC;EAChC,iCAAiC;AACnC;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,aAAa;EACb,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,2BAA2B;EAC3B,mCAAmC;AACrC;;AAEA;EACE,eAAe;EACf,cAAc;EACd,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,cAAc;EACd,UAAU;EACV,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,6BAA6B;EAC7B,eAAe;EACf,YAAY;EACZ,aAAa;EACb,UAAU;EACV,UAAU;EACV,kBAAkB;EAClB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf;;AAEA;;;EAGE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,oCAAoC;AACtC;;AAEA;;;EAGE,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EACd,YAAY;EACZ,UAAU;EACV,aAAa;EACb,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,UAAU;EACV,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,UAAU;EACV,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,OAAO;EACP,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,mCAAmC;AACrC;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,+BAA+B;EAC/B,kBAAkB;EAClB,cAAc;EACd,kBAAkB;AACpB;AACA;EACE,kCAAkC;AACpC;AACA;EACE,cAAc;EACd,cAAc;AAChB;AACA;;;;EAIE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,oBAAoB;EACpB,cAAc;AAChB","sourcesContent":[":root {\n  --main-color: lightcoral;\n  --dark-gray: #e5e5e5;\n  --light-gray: #f8f8f8;\n}\n\nhtml {\n  font-family: sans-serif;\n}\n\n.fa-solid {\n  color: rgb(136, 132, 132);\n}\n\nbody {\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  grid-template-rows: 70px 1fr 40px;\n}\n\n#header {\n  color: white;\n  font-size: 2rem;\n  padding: 10px;\n  background-color: var(--main-color);\n  grid-column: 1/-1;\n}\n\n#footer {\n  display: flex;\n  background-color: #b7b7b7;\n  grid-column: 1/-1;\n  font-size: 1.2rem;\n  font-weight: 500;\n  align-items: center;\n  justify-content: center;\n}\n\n#sidebar {\n  display: flex;\n  flex-direction: column;\n  font-size: 18px;\n  padding: 20px 5px 10px 35px;\n  background-color: var(--light-gray);\n}\n\n#project-container {\n  padding: 0 20px;\n  overflow: auto;\n  margin: 10px;\n  height: 300px;\n}\n\n.projectItem {\n  cursor: pointer;\n  padding: 5px;\n  margin: 10px 0;\n  width: 90%;\n  font-size: 16px;\n  border-radius: 5px;\n}\n\n.projectItem:hover {\n  background-color: #e1e1e1;\n}\n\n#addNewProject {\n  text-align: left;\n  font-size: inherit;\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  width: 85%;\n  padding: 0;\n  border-radius: 5px;\n  margin: 0;\n  padding: 5px;\n}\n\n.sidebarbuttons {\n  padding: 5px;\n  margin-bottom: 10px;\n  width: 85%;\n  border-radius: 5px;\n}\n\n#addNewProject:hover {\n  background-color: #e1e1e1;\n}\n\n.sidebarbuttons:hover {\n  background-color: #e1e1e1;\n}\n\n.projectsheader {\n  padding: 5px;\n  margin-bottom: 10px;\n  width: 85%;\n  border-radius: 5px;\n}\n\n.higlight {\n  background-color: #e1e1e1;\n}\n\n.projectItem {\n  display: flex;\n}\n\n.deleteButton > *,\n.editButtonForTask > *,\n.deleteButtonForTask > * {\n  pointer-events: none;\n}\n\n.projectItem {\n  display: grid;\n  grid-template-columns: 20px 1fr 20px;\n}\n\n.deleteButton,\n.editButtonForTask,\n.deleteButtonForTask {\n  width: fit-content;\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n}\n\n.none {\n  background-color: gray;\n  width: 5px;\n  height: 100%;\n}\n\n.low {\n  background-color: green;\n  width: 5px;\n  height: 100%;\n}\n\n.medium {\n  background-color: yellow;\n  width: 5px;\n  height: 100%;\n}\n\n.high {\n  background-color: red;\n  width: 5px;\n  height: 100%;\n}\n\n.checkbox {\n  margin: 5px;\n}\n\n.titleDiv {\n  flex: 1;\n  font-weight: bold;\n  color: #636060;\n}\n\n.dateDiv {\n  margin: 10px;\n}\n\n.editButtonForTask,\n.deleteButtonForTask {\n  margin: 10px;\n}\n\n.taskDiv {\n  margin: 8px;\n  display: flex;\n  height: 50px;\n  align-items: center;\n  background-color: var(--light-gray);\n}\n\n.content-container-title {\n  font-size: 1.8rem;\n  font-weight: bold;\n  text-decoration-line: underline;\n  text-align: center;\n  color: #636060;\n  margin-bottom: 5px;\n}\n.titleDivChecked {\n  text-decoration-line: line-through;\n}\n.dateDiv {\n  font-size: 80%;\n  color: #636060;\n}\n.editButtonForTask:hover,\n.deleteButton:hover,\n.deleteButtonForTask:hover,\n.checkbox:hover {\n  transform: scale(1.1);\n}\n\n.fa-solid:hover {\n  fill: #3ba395;\n  color: #3ba395;\n}\n\n.checkbox {\n  cursor: pointer;\n}\n\n#taskFormContainer {\n  margin-top: 10px;\n}\n\n.hideElement {\n  display: none;\n}\n\n.showElement {\n  display: block;\n}\n\n#content {\n  background-color: none;\n}\n\n#content-container {\n  display: flex;\n  flex-direction: column;\n  margin-left: 100px;\n  padding-right: 100px;\n  overflow: auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allProjects": () => (/* binding */ allProjects),
/* harmony export */   "createProjectObject": () => (/* binding */ createProjectObject),
/* harmony export */   "deleteProjectObj": () => (/* binding */ deleteProjectObj),
/* harmony export */   "prjId": () => (/* binding */ prjId),
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "setPrjId": () => (/* binding */ setPrjId)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");




let prjId = null;

function setPrjId(pid) {
  prjId = pid;
}

let allProjects = [];

const project = (title) => {
  const id = prjId.toString();
  const tasks = [];
  prjId += 1;
  return { title, id, tasks };
};

const createProjectObject = (projectValues) => {
  const projecTitle = projectValues.title;
  const newProject = project(projecTitle);
  allProjects.push(newProject);
};

function deleteProjectObj(projId) {
  console.log(projId);
  const proj = getProjObjFromId(projId);
  console.log(proj);
  console.log(proj.title);
  proj.tasks.forEach((task) => (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.deleteTaskObj)(task.id));
  allProjects = allProjects.filter((proj) => proj.id !== projId);
}

const getProjObjFromId = (projId) =>
  allProjects.filter((project) => project.id === projId)[0];

// const inbox = project("Inbox")
// allProjects.push(inbox)


/***/ }),

/***/ "./src/projectdom.js":
/*!***************************!*\
  !*** ./src/projectdom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentProject": () => (/* binding */ currentProject),
/* harmony export */   "currentProjectId": () => (/* binding */ currentProjectId),
/* harmony export */   "hideProjectForm": () => (/* binding */ hideProjectForm),
/* harmony export */   "projectFormController": () => (/* binding */ projectFormController),
/* harmony export */   "renderInbox": () => (/* binding */ renderInbox),
/* harmony export */   "renderSideBarProjectOnly": () => (/* binding */ renderSideBarProjectOnly)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _taskdom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskdom.js */ "./src/taskdom.js");






const projectForm = document.querySelector("#projForm");
const newProjectButton = document.querySelector("#addNewProject");
const addProjectButton = document.querySelector("#addProject");
const hideProjectFormButton = document.querySelector("#closeProjForm");
const titleInput = document.querySelector("#pr-title");
const errDiv = document.querySelector(".projecterror");

function projectFormController() {
  // RENAME THIS TO projectFormController or something later
  hideProjectForm();
  newProjectButton.addEventListener("click", showProjectForm);
  addProjectButton.addEventListener("click", addProject);
  hideProjectFormButton.addEventListener("click", hideProjectForm);
}

function showProjectForm() {
  projectForm.style.display = "block";
  newProjectButton.style.display = "none";
}

function hideProjectForm() {
  projectForm.style.display = "none";
  newProjectButton.style.display = "block";
  projectForm.reset();
}

function addProject(e) {
  if (submitFunction(e, titleInput, errDiv)) {
    createProject();
    hideProjectForm();
  }
}

const getProjectValues = () => {
  const title = document.querySelector("#pr-title").value;
  return { title };
};

function createProject() {
  const projectValues = getProjectValues();
  (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.createProjectObject)(projectValues);
  renderSideBarProjectOnly();
  _taskdom_js__WEBPACK_IMPORTED_MODULE_1__.taskView.createNewTaskView(_project_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.at(-1));
}

const renderInbox = () => {
  const inbx = document.querySelector("#sidebar div");
  inbx.id = "1";
  inbx.addEventListener("click", () => {
    addClassToOneDiv(inbx);
    _taskdom_js__WEBPACK_IMPORTED_MODULE_1__.taskView.createNewTaskView(_project_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0]);
  });
  addClassToOneDiv(inbx);
  _taskdom_js__WEBPACK_IMPORTED_MODULE_1__.taskView.createNewTaskView(_project_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0]);
};

function renderSideBarProjectOnly() {
  const projectContainer = document.querySelector("#project-container");
  projectContainer.textContent = "";
  _project_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach((projectObject) => {
    if (projectObject.id != "1") {
      const projectDiv = createProjectDiv(projectObject);
      projectContainer.appendChild(projectDiv);
    }
  });
}

function createProjectDiv(prj) {
  // helps renderSideBarProjectOnly() function
  const div = document.createElement("div");
  const deleteBtn = createDeleteButton();
  const fontAwesome = createFontAwesomeIcon("fa-solid", "fa-list-check");
  const textContentSpan = createTextContentSpan(prj.title);
  div.appendChild(fontAwesome);
  div.appendChild(textContentSpan);
  div.appendChild(deleteBtn);
  div.classList.add("projectItem");
  div.id = prj.id;
  div.addEventListener("click", () => {
    addClassToOneDiv(div);
    _taskdom_js__WEBPACK_IMPORTED_MODULE_1__.taskView.createNewTaskView(prj);
  });
  addClassToOneDiv(div);
  return div;
}

const currentProjectId = () => document.querySelector("#content").classList[0];

const currentProject = () => {
  const projectId = currentProjectId();
  return _project_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.filter((value) => value.id == projectId)[0];
};

function createFontAwesomeIcon(classOne, classTwo) {
  const italic = document.createElement("I");
  italic.classList.add(classOne, classTwo);
  return italic;
}

function createTextContentSpan(text) {
  const span = document.createElement("span");
  span.textContent = ` ${text}`;
  return span;
}

function deleteProject(e) {
  const inbx = document.querySelector("#sidebar div");
  e.stopPropagation();
  const projId = e.target.parentNode.id;
  console.log(e.target);
  (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.deleteProjectObj)(projId);

  hideProjectForm();
  e.target.parentNode.remove();
  addClassToOneDiv(inbx);
  _taskdom_js__WEBPACK_IMPORTED_MODULE_1__.taskView.createNewTaskView(_project_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0]);
}

const createDeleteButton = () => {
  const deleteBtn = document.createElement("button");
  const deleteIcon = createFontAwesomeIcon("fa-solid", "fa-trash");
  deleteBtn.appendChild(deleteIcon);
  deleteBtn.classList.add("deleteButton");
  deleteBtn.addEventListener("click", deleteProject);
  return deleteBtn;
};

function addClassToOneDiv(oneDiv) {
  const inbx = document.querySelector("#sidebar div");
  console.log(inbx);
  const projectsItems = document.querySelectorAll("#project-container div");
  console.log(projectsItems);
  inbx.classList.remove("higlight");
  projectsItems.forEach((value) => value.classList.remove("higlight"));
  console.log(oneDiv);
  console.log(inbx);
  oneDiv.classList.add("higlight");
}

function submitFunction(event, element, div) {
  if (element.validity.valueMissing) {
    div.textContent = "Cant be empty";
    element.focus();
    event.preventDefault();
  } else if (element.value.length > 15) {
    div.textContent = "Email should be only 15 characters";
    element.focus();
    event.preventDefault();
  } else {
    div.textContent = "";
    event.preventDefault();
    return true;
  }
}

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkTaskObj": () => (/* binding */ checkTaskObj),
/* harmony export */   "createTaskObj": () => (/* binding */ createTaskObj),
/* harmony export */   "deleteTaskObj": () => (/* binding */ deleteTaskObj),
/* harmony export */   "getTaskObjFromId": () => (/* binding */ getTaskObjFromId),
/* harmony export */   "setTaskId": () => (/* binding */ setTaskId),
/* harmony export */   "updateTaskObj": () => (/* binding */ updateTaskObj)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _projectdom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectdom.js */ "./src/projectdom.js");





let taskId = null;

function setTaskId(id) {
  taskId = id;
}

const task = (title, date, priority) => {
  const id = taskId.toString();
  const completed = false;
  taskId += 1;
  return { title, date, priority, id, completed };
};

const createTaskObj = (taskValues) => {
  const { title } = taskValues;
  const { date } = taskValues;
  const { priority } = taskValues;
  const newTask = task(title, date, priority);
  addTaskObjToArray(newTask);
};

const updateTaskObj = (task, taskValues) => {
  task.title = taskValues.title;
  task.date = taskValues.date;
  task.priority = taskValues.priority;
};

const getTaskObjFromId = (taskId) =>
  _project_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].tasks.filter((task) => task.id == taskId).at(0);

function deleteTaskObj(taskId) {
  _project_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach((project) => {
    project.tasks = project.tasks.filter((task) => task.id != taskId);
  });
}

function checkTaskObj(taskId) {
  const task = _project_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].tasks.filter((task) => task.id == taskId).at(0);
  task.completed = !task.completed;
}

const addTaskObjToArray = (newTask) => {
  _project_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach((value) => {
    if (value.id == "1" && value.title == "Inbox") {
      value.tasks.push(newTask);
    } else if (value.id === (0,_projectdom_js__WEBPACK_IMPORTED_MODULE_1__.currentProjectId)()) {
      value.tasks.push(newTask);
    }
  });
};


/***/ }),

/***/ "./src/taskdom.js":
/*!************************!*\
  !*** ./src/taskdom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskManipulator": () => (/* binding */ taskManipulator),
/* harmony export */   "taskView": () => (/* binding */ taskView)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _projectdom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectdom.js */ "./src/projectdom.js");





const taskDOM = () => {
  const taskFormContainer = document.querySelector("#taskFormContainer");
  const taskForm = document.querySelector("#taskForm");
  const newTaskButton = document.querySelector("#addNewTask");
  const addTaskButton = document.querySelector("#add-Task");
  const editTaskButton = document.querySelector("#edit-Task");
  const hideTaskFormButton = document.querySelector("#closeTaskForm");

  function taskFormController() {
    // RENAME THIS TO projectFormController or something later
    hideTaskForm();
    newTaskButton.addEventListener("click", showTaskForm);
    addTaskButton.addEventListener("click", addTask);
    editTaskButton.addEventListener("click", editTask);
    hideTaskFormButton.addEventListener("click", hideTaskForm);
  }

  // create

  function showTaskForm() {
    (0,_projectdom_js__WEBPACK_IMPORTED_MODULE_1__.hideProjectForm)();

    showElement(taskForm);

    resetTaskForm();
    focusOnTitle();

    hideElement(newTaskButton);
  }

  function addTask(e) {
    if (submitFunction(e)) {
      createTask();
      hideTaskForm();
    }
  }

  function createTask() {
    const taskValues = getTaskValues();
    (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.createTaskObj)(taskValues);
    taskView.createNewTaskView((0,_projectdom_js__WEBPACK_IMPORTED_MODULE_1__.currentProject)());
  }

  // remove
  function deleteTask(e) {
    const taskId = e.target.parentNode.id;
    (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.deleteTaskObj)(taskId);
    taskManipulator.hideTaskForm();
    (0,_projectdom_js__WEBPACK_IMPORTED_MODULE_1__.hideProjectForm)();
    e.target.parentNode.remove();
  }

  // update

  function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  function removeClassFromELemernt() {
    const allElemets = document.querySelectorAll(".taskDiv");
    if (allElemets.length !== 0) {
      allElemets.forEach((value) => {
        value.classList.remove("hideElement");
      });
    }
  }

  const moveEditFormToBelowElement = (currentNode) => {
    insertAfter(taskForm, currentNode);
  };

  const showEditForm = (e) => {
    resetTaskForm();

    (0,_projectdom_js__WEBPACK_IMPORTED_MODULE_1__.hideProjectForm)();
    const taskId = e.target.id;
    console.log(typeof taskId);
    const elementthis = e.target.parentNode;
    console.log(elementthis);
    moveEditFormToBelowElement(elementthis);
    elementthis.classList.add("hideElement");
    showElement(taskForm);
    focusOnTitle();
    setUpEditForm(taskId);
  };

  function setUpEditForm(id) {
    editTaskButton.className = id;
    const task = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.getTaskObjFromId)(id);
    updateEditFormValues(task);
    hideElement(addTaskButton);
    showElement(editTaskButton);
  }

  const updateEditFormValues = (task) => {
    const title = document.querySelector("#task-title");
    title.value = task.title;
    const date = document.querySelector("#date");
    date.value = task.date;
    const priority = document.querySelector("#task-priority");
    priority.value = task.priority;
  };

  function editTask(e) {
    if (submitFunction(e)) {
      const taskId = editTaskButton.className;
      const task = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.getTaskObjFromId)(taskId);
      const taskValues = getTaskValues();
      (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.updateTaskObj)(task, taskValues);
      hideTaskForm();
      taskView.createNewTaskView((0,_projectdom_js__WEBPACK_IMPORTED_MODULE_1__.currentProject)());
    }
  }

  function checkTask(e) {
    const taskId = e.target.parentNode.id;
    (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.checkTaskObj)(taskId);
    taskManipulator.hideTaskForm();
    (0,_projectdom_js__WEBPACK_IMPORTED_MODULE_1__.hideProjectForm)();

    e.target.nextSibling.classList.toggle("titleDivChecked");
  }

  // utility functions
  const getTaskValues = () => {
    const title = document.querySelector("#task-title").value;
    const date = document.querySelector("#date").value;
    const priority = document.querySelector("#task-priority").value;
    return { title, date, priority };
  };

  function focusOnTitle() {
    const title = document.getElementById("task-title");
    title.focus(); // sets focus to element
    const val = title.value; // store the value of the element
    title.value = ""; // clear the value of the element
    title.value = val; // set that value back.
  }

  function hideTaskForm() {
    hideElement(taskForm);
    resetTaskForm();
  }

  function resetTaskForm() {
    removeClassFromELemernt();
    taskFormContainer.appendChild(taskForm);
    showElement(newTaskButton);
    showElement(addTaskButton);
    showElement(hideTaskFormButton);
    hideElement(editTaskButton);
    taskForm.reset();
  }

  const hideElement = (elm) => {
    elm.style.display = "none";
    console.log(elm, "hidden");
  };

  const showElement = (elm) => {
    elm.style.display = "block";
  };

  return {
    taskFormController,
    showEditForm,
    checkTask,
    deleteTask,
    hideTaskForm,
    resetTaskForm,
  };
};

const createTaskViewHelper = () => {
  const createTaskDiv = (task) => {
    const createTitleDiv = () => {
      const titleDiv = document.createElement("div");
      titleDiv.classList.add("titleDiv");
      titleDiv.textContent = task.title;
      if (task.completed == false) {
        titleDiv.classList.remove("titleDivChecked");
      } else {
        titleDiv.classList.add("titleDivChecked");
      }
      return titleDiv;
    };

    const createPriorityDiv = () => {
      const priorityDiv = document.createElement("div");
      priorityDiv.classList.add("priorityDiv");
      priorityDiv.classList.add(task.priority);
      return priorityDiv;
    };

    const createDateDiv = () => {
      const dateDiv = document.createElement("div");
      dateDiv.classList.add("dateDiv");
      dateDiv.textContent = task.date;
      return dateDiv;
    };

    const createDeleteButton = () => {
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("deleteButtonForTask");
      const deleteFont = createFontAwesomeIcon("fa-solid", "fa-trash");
      deleteBtn.appendChild(deleteFont);
      deleteBtn.addEventListener("click", taskManipulator.deleteTask);
      return deleteBtn;
    };

    const createCheckButton = () => {
      const checkBtn = document.createElement("input");
      checkBtn.classList.add("checkbox");
      checkBtn.type = "checkbox";
      if (task.completed == false) {
        checkBtn.checked = false;
      } else {
        checkBtn.checked = true;
      }
      checkBtn.addEventListener("click", taskManipulator.checkTask);
      return checkBtn;
    };

    const createEditButton = () => {
      const editBtn = document.createElement("button");
      const editFont = createFontAwesomeIcon("fa-solid", "fa-edit");
      editBtn.classList.add("editButtonForTask");
      editBtn.appendChild(editFont);
      editBtn.id = task.id;
      editBtn.addEventListener("click", taskManipulator.showEditForm);
      return editBtn;
    };

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("taskDiv");
    taskDiv.id = task.id;
    taskDiv.appendChild(createPriorityDiv());
    taskDiv.appendChild(createCheckButton());
    taskDiv.appendChild(createTitleDiv());
    taskDiv.appendChild(createDateDiv());
    taskDiv.appendChild(createEditButton());
    taskDiv.appendChild(createDeleteButton());

    return taskDiv;
  };

  const setUpTaskContainer = (proj) => {
    const taskMainContainer = document.querySelector("#content-container");
    const taskContainer = document.querySelector("#content");
    taskMainContainer.className = proj.id;
    taskContainer.className = proj.id;
    taskContainer.textContent = "";
    return taskContainer;
  };

  const createNewTaskView = (contProj) => {
    const containetitle = document.querySelector(".content-container-title");
    containetitle.textContent = contProj.title;
    console.log("new task view");
    taskManipulator.hideTaskForm();
    const taskContainer = setUpTaskContainer(contProj);
    contProj.tasks.forEach((task) => {
      const taskDiv = createTaskDiv(task);
      taskContainer.appendChild(taskDiv);
    });
  };

  return { createNewTaskView };
};

const taskManipulator = taskDOM();
const taskView = createTaskViewHelper();

function submitFunction(event) {
  event.preventDefault();
  const title = document.querySelector("#task-title");

  const titleTrue = submitFunctionTitle();

  if (!titleTrue) {
    title.focus();
  } else {
    return true;
  }
}

function submitFunctionTitle() {
  const title = document.querySelector("#task-title");
  const titleErr = document.querySelector("#titleerrdiv");
  if (title.validity.valueMissing) {
    titleErr.textContent = "Cant be empty";
  } else if (title.value.length > 15) {
    titleErr.textContent = "Email should be only 15 characters";
  } else {
    titleErr.textContent = "";
    return true;
  }
}

function createFontAwesomeIcon(classOne, classTwo) {
  const italic = document.createElement("I");
  italic.classList.add(classOne, classTwo);
  return italic;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taskdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskdom */ "./src/taskdom.js");
/* harmony import */ var _projectdom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectdom */ "./src/projectdom.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/// ///// notes
/// 2. ADD 1WEEK CALENDARY ON SIDEBAR
// 3 ADD DUE TODAY ON SIDEBARD
// FOCUS TILE  ON OPENING FORMS
// change style
// STYLE NOTES
// chnage how form looks
// Feature notes
// Add sidebar hamburger
// Add home button which leads to inbox
// Make today and this week buttons works
//







let taskId = 1;
let prjId = 1;

function saveToDoList() {
  localStorage.clear();
  localStorage.setItem("projects", JSON.stringify(_project__WEBPACK_IMPORTED_MODULE_2__.allProjects));
}

function loadToDoList() {
  const projects = JSON.parse(localStorage.getItem("projects"));

  if (projects == null) {
    (0,_project__WEBPACK_IMPORTED_MODULE_2__.setPrjId)(prjId);
    (0,_task__WEBPACK_IMPORTED_MODULE_3__.setTaskId)(taskId);
    const inbox = (0,_project__WEBPACK_IMPORTED_MODULE_2__.project)("Inbox");
    _project__WEBPACK_IMPORTED_MODULE_2__.allProjects.push(inbox);
    (0,_projectdom__WEBPACK_IMPORTED_MODULE_1__.renderInbox)();
    (0,_projectdom__WEBPACK_IMPORTED_MODULE_1__.renderSideBarProjectOnly)();

    (0,_projectdom__WEBPACK_IMPORTED_MODULE_1__.projectFormController)();
    _taskdom__WEBPACK_IMPORTED_MODULE_0__.taskManipulator.taskFormController();
  } else {
    projects.forEach((val) => _project__WEBPACK_IMPORTED_MODULE_2__.allProjects.push(val));
    prjId = parseInt(_project__WEBPACK_IMPORTED_MODULE_2__.allProjects.at(-1).id) + 1;
    (0,_project__WEBPACK_IMPORTED_MODULE_2__.setPrjId)(prjId);
    if (_project__WEBPACK_IMPORTED_MODULE_2__.allProjects[0].tasks.at(-1) == undefined) {
      taskId = 1;
      (0,_task__WEBPACK_IMPORTED_MODULE_3__.setTaskId)(taskId);
    } else {
      taskId = parseInt(_project__WEBPACK_IMPORTED_MODULE_2__.allProjects[0].tasks.at(-1).id) + 1;
      (0,_task__WEBPACK_IMPORTED_MODULE_3__.setTaskId)(taskId);
    }

    (0,_projectdom__WEBPACK_IMPORTED_MODULE_1__.projectFormController)();
    (0,_projectdom__WEBPACK_IMPORTED_MODULE_1__.renderSideBarProjectOnly)();
    (0,_projectdom__WEBPACK_IMPORTED_MODULE_1__.renderInbox)();
    _taskdom__WEBPACK_IMPORTED_MODULE_0__.taskManipulator.taskFormController();
  }
}

window.addEventListener("beforeunload", () => {
  saveToDoList();
  return null;
});

loadToDoList();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF3QjtBQUM1QixJQUFJLHdEQUFXO0FBQ2YsSUFBSSx3RUFBa0M7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0ZG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2tkb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tbWFpbi1jb2xvcjogbGlnaHRjb3JhbDtcXG4gIC0tZGFyay1ncmF5OiAjZTVlNWU1O1xcbiAgLS1saWdodC1ncmF5OiAjZjhmOGY4O1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZmEtc29saWQge1xcbiAgY29sb3I6IHJnYigxMzYsIDEzMiwgMTMyKTtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAxZnIgNDBweDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3YjdiNztcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBhZGRpbmc6IDIwcHggNXB4IDEwcHggMzVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbn1cXG5cXG4jcHJvamVjdC1jb250YWluZXIge1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBtYXJnaW46IDEwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICB3aWR0aDogOTAlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucHJvamVjdEl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTFlMTtcXG59XFxuXFxuI2FkZE5ld1Byb2plY3Qge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiA4NSU7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uc2lkZWJhcmJ1dHRvbnMge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHdpZHRoOiA4NSU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNhZGROZXdQcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWUxZTE7XFxufVxcblxcbi5zaWRlYmFyYnV0dG9uczpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMWUxO1xcbn1cXG5cXG4ucHJvamVjdHNoZWFkZXIge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHdpZHRoOiA4NSU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5oaWdsaWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMWUxO1xcbn1cXG5cXG4ucHJvamVjdEl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmRlbGV0ZUJ1dHRvbiA+ICosXFxuLmVkaXRCdXR0b25Gb3JUYXNrID4gKixcXG4uZGVsZXRlQnV0dG9uRm9yVGFzayA+ICoge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0SXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmciAyMHB4O1xcbn1cXG5cXG4uZGVsZXRlQnV0dG9uLFxcbi5lZGl0QnV0dG9uRm9yVGFzayxcXG4uZGVsZXRlQnV0dG9uRm9yVGFzayB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IGluaGVyaXQ7XFxufVxcblxcbi5ub25lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgd2lkdGg6IDVweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1lZGl1bSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaGlnaCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi50aXRsZURpdiB7XFxuICBmbGV4OiAxO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzYzNjA2MDtcXG59XFxuXFxuLmRhdGVEaXYge1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uZWRpdEJ1dHRvbkZvclRhc2ssXFxuLmRlbGV0ZUJ1dHRvbkZvclRhc2sge1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4udGFza0RpdiB7XFxuICBtYXJnaW46IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxufVxcblxcbi5jb250ZW50LWNvbnRhaW5lci10aXRsZSB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjNjM2MDYwO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4udGl0bGVEaXZDaGVja2VkIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiBsaW5lLXRocm91Z2g7XFxufVxcbi5kYXRlRGl2IHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbiAgY29sb3I6ICM2MzYwNjA7XFxufVxcbi5lZGl0QnV0dG9uRm9yVGFzazpob3ZlcixcXG4uZGVsZXRlQnV0dG9uOmhvdmVyLFxcbi5kZWxldGVCdXR0b25Gb3JUYXNrOmhvdmVyLFxcbi5jaGVja2JveDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5mYS1zb2xpZDpob3ZlciB7XFxuICBmaWxsOiAjM2JhMzk1O1xcbiAgY29sb3I6ICMzYmEzOTU7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0YXNrRm9ybUNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uaGlkZUVsZW1lbnQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNob3dFbGVtZW50IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbn1cXG5cXG4jY29udGVudC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0VBQ2QsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOzs7RUFHRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDOztBQUVBOzs7RUFHRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCO0FBQ0E7Ozs7RUFJRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1tYWluLWNvbG9yOiBsaWdodGNvcmFsO1xcbiAgLS1kYXJrLWdyYXk6ICNlNWU1ZTU7XFxuICAtLWxpZ2h0LWdyYXk6ICNmOGY4Zjg7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi5mYS1zb2xpZCB7XFxuICBjb2xvcjogcmdiKDEzNiwgMTMyLCAxMzIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmciA0MHB4O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjdiN2I3O1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcGFkZGluZzogMjBweCA1cHggMTBweCAzNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxufVxcblxcbiNwcm9qZWN0LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG1hcmdpbjogMTBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxufVxcblxcbi5wcm9qZWN0SXRlbSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHdpZHRoOiA5MCU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0SXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMWUxO1xcbn1cXG5cXG4jYWRkTmV3UHJvamVjdCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lkdGg6IDg1JTtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5zaWRlYmFyYnV0dG9ucyB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgd2lkdGg6IDg1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2FkZE5ld1Byb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTFlMTtcXG59XFxuXFxuLnNpZGViYXJidXR0b25zOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWUxZTE7XFxufVxcblxcbi5wcm9qZWN0c2hlYWRlciB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgd2lkdGg6IDg1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmhpZ2xpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWUxZTE7XFxufVxcblxcbi5wcm9qZWN0SXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZGVsZXRlQnV0dG9uID4gKixcXG4uZWRpdEJ1dHRvbkZvclRhc2sgPiAqLFxcbi5kZWxldGVCdXR0b25Gb3JUYXNrID4gKiB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnByb2plY3RJdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggMWZyIDIwcHg7XFxufVxcblxcbi5kZWxldGVCdXR0b24sXFxuLmVkaXRCdXR0b25Gb3JUYXNrLFxcbi5kZWxldGVCdXR0b25Gb3JUYXNrIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogaW5oZXJpdDtcXG59XFxuXFxuLm5vbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5sb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubWVkaXVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5oaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnRpdGxlRGl2IHtcXG4gIGZsZXg6IDE7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjNjM2MDYwO1xcbn1cXG5cXG4uZGF0ZURpdiB7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5lZGl0QnV0dG9uRm9yVGFzayxcXG4uZGVsZXRlQnV0dG9uRm9yVGFzayB7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi50YXNrRGl2IHtcXG4gIG1hcmdpbjogOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICM2MzYwNjA7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi50aXRsZURpdkNoZWNrZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IGxpbmUtdGhyb3VnaDtcXG59XFxuLmRhdGVEaXYge1xcbiAgZm9udC1zaXplOiA4MCU7XFxuICBjb2xvcjogIzYzNjA2MDtcXG59XFxuLmVkaXRCdXR0b25Gb3JUYXNrOmhvdmVyLFxcbi5kZWxldGVCdXR0b246aG92ZXIsXFxuLmRlbGV0ZUJ1dHRvbkZvclRhc2s6aG92ZXIsXFxuLmNoZWNrYm94OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmZhLXNvbGlkOmhvdmVyIHtcXG4gIGZpbGw6ICMzYmEzOTU7XFxuICBjb2xvcjogIzNiYTM5NTtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Rhc2tGb3JtQ29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5oaWRlRWxlbWVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2hvd0VsZW1lbnQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxufVxcblxcbiNjb250ZW50LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZGVsZXRlVGFza09iaiB9IGZyb20gXCIuL3Rhc2suanNcIjtcblxuZXhwb3J0IHtcbiAgYWxsUHJvamVjdHMsXG4gIGNyZWF0ZVByb2plY3RPYmplY3QsXG4gIHByaklkLFxuICBwcm9qZWN0LFxuICBzZXRQcmpJZCxcbiAgZGVsZXRlUHJvamVjdE9iaixcbn07XG5cbmxldCBwcmpJZCA9IG51bGw7XG5cbmZ1bmN0aW9uIHNldFByaklkKHBpZCkge1xuICBwcmpJZCA9IHBpZDtcbn1cblxubGV0IGFsbFByb2plY3RzID0gW107XG5cbmNvbnN0IHByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgY29uc3QgaWQgPSBwcmpJZC50b1N0cmluZygpO1xuICBjb25zdCB0YXNrcyA9IFtdO1xuICBwcmpJZCArPSAxO1xuICByZXR1cm4geyB0aXRsZSwgaWQsIHRhc2tzIH07XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0T2JqZWN0ID0gKHByb2plY3RWYWx1ZXMpID0+IHtcbiAgY29uc3QgcHJvamVjVGl0bGUgPSBwcm9qZWN0VmFsdWVzLnRpdGxlO1xuICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdChwcm9qZWNUaXRsZSk7XG4gIGFsbFByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG59O1xuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0T2JqKHByb2pJZCkge1xuICBjb25zb2xlLmxvZyhwcm9qSWQpO1xuICBjb25zdCBwcm9qID0gZ2V0UHJvak9iakZyb21JZChwcm9qSWQpO1xuICBjb25zb2xlLmxvZyhwcm9qKTtcbiAgY29uc29sZS5sb2cocHJvai50aXRsZSk7XG4gIHByb2oudGFza3MuZm9yRWFjaCgodGFzaykgPT4gZGVsZXRlVGFza09iaih0YXNrLmlkKSk7XG4gIGFsbFByb2plY3RzID0gYWxsUHJvamVjdHMuZmlsdGVyKChwcm9qKSA9PiBwcm9qLmlkICE9PSBwcm9qSWQpO1xufVxuXG5jb25zdCBnZXRQcm9qT2JqRnJvbUlkID0gKHByb2pJZCkgPT5cbiAgYWxsUHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qSWQpWzBdO1xuXG4vLyBjb25zdCBpbmJveCA9IHByb2plY3QoXCJJbmJveFwiKVxuLy8gYWxsUHJvamVjdHMucHVzaChpbmJveClcbiIsImltcG9ydCB7XG4gIGFsbFByb2plY3RzLFxuICBjcmVhdGVQcm9qZWN0T2JqZWN0LFxuICBwcm9qZWN0LFxuICBkZWxldGVQcm9qZWN0T2JqLFxufSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5cbmltcG9ydCB7IHRhc2tNYW5pcHVsYXRvciwgdGFza1ZpZXcgfSBmcm9tIFwiLi90YXNrZG9tLmpzXCI7XG5cbmV4cG9ydCB7XG4gIGN1cnJlbnRQcm9qZWN0SWQsXG4gIGN1cnJlbnRQcm9qZWN0LFxuICBwcm9qZWN0Rm9ybUNvbnRyb2xsZXIsXG4gIHJlbmRlckluYm94LFxuICBoaWRlUHJvamVjdEZvcm0sXG4gIHJlbmRlclNpZGVCYXJQcm9qZWN0T25seSxcbn07XG5cbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qRm9ybVwiKTtcbmNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZE5ld1Byb2plY3RcIik7XG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQcm9qZWN0XCIpO1xuY29uc3QgaGlkZVByb2plY3RGb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZVByb2pGb3JtXCIpO1xuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHItdGl0bGVcIik7XG5jb25zdCBlcnJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RlcnJvclwiKTtcblxuZnVuY3Rpb24gcHJvamVjdEZvcm1Db250cm9sbGVyKCkge1xuICAvLyBSRU5BTUUgVEhJUyBUTyBwcm9qZWN0Rm9ybUNvbnRyb2xsZXIgb3Igc29tZXRoaW5nIGxhdGVyXG4gIGhpZGVQcm9qZWN0Rm9ybSgpO1xuICBuZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93UHJvamVjdEZvcm0pO1xuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0KTtcbiAgaGlkZVByb2plY3RGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlUHJvamVjdEZvcm0pO1xufVxuXG5mdW5jdGlvbiBzaG93UHJvamVjdEZvcm0oKSB7XG4gIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIG5ld1Byb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5mdW5jdGlvbiBoaWRlUHJvamVjdEZvcm0oKSB7XG4gIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgbmV3UHJvamVjdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KGUpIHtcbiAgaWYgKHN1Ym1pdEZ1bmN0aW9uKGUsIHRpdGxlSW5wdXQsIGVyckRpdikpIHtcbiAgICBjcmVhdGVQcm9qZWN0KCk7XG4gICAgaGlkZVByb2plY3RGb3JtKCk7XG4gIH1cbn1cblxuY29uc3QgZ2V0UHJvamVjdFZhbHVlcyA9ICgpID0+IHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByLXRpdGxlXCIpLnZhbHVlO1xuICByZXR1cm4geyB0aXRsZSB9O1xufTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgY29uc3QgcHJvamVjdFZhbHVlcyA9IGdldFByb2plY3RWYWx1ZXMoKTtcbiAgY3JlYXRlUHJvamVjdE9iamVjdChwcm9qZWN0VmFsdWVzKTtcbiAgcmVuZGVyU2lkZUJhclByb2plY3RPbmx5KCk7XG4gIHRhc2tWaWV3LmNyZWF0ZU5ld1Rhc2tWaWV3KGFsbFByb2plY3RzLmF0KC0xKSk7XG59XG5cbmNvbnN0IHJlbmRlckluYm94ID0gKCkgPT4ge1xuICBjb25zdCBpbmJ4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyIGRpdlwiKTtcbiAgaW5ieC5pZCA9IFwiMVwiO1xuICBpbmJ4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWRkQ2xhc3NUb09uZURpdihpbmJ4KTtcbiAgICB0YXNrVmlldy5jcmVhdGVOZXdUYXNrVmlldyhhbGxQcm9qZWN0c1swXSk7XG4gIH0pO1xuICBhZGRDbGFzc1RvT25lRGl2KGluYngpO1xuICB0YXNrVmlldy5jcmVhdGVOZXdUYXNrVmlldyhhbGxQcm9qZWN0c1swXSk7XG59O1xuXG5mdW5jdGlvbiByZW5kZXJTaWRlQmFyUHJvamVjdE9ubHkoKSB7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtY29udGFpbmVyXCIpO1xuICBwcm9qZWN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdE9iamVjdCkgPT4ge1xuICAgIGlmIChwcm9qZWN0T2JqZWN0LmlkICE9IFwiMVwiKSB7XG4gICAgICBjb25zdCBwcm9qZWN0RGl2ID0gY3JlYXRlUHJvamVjdERpdihwcm9qZWN0T2JqZWN0KTtcbiAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdERpdihwcmopIHtcbiAgLy8gaGVscHMgcmVuZGVyU2lkZUJhclByb2plY3RPbmx5KCkgZnVuY3Rpb25cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGVsZXRlQnRuID0gY3JlYXRlRGVsZXRlQnV0dG9uKCk7XG4gIGNvbnN0IGZvbnRBd2Vzb21lID0gY3JlYXRlRm9udEF3ZXNvbWVJY29uKFwiZmEtc29saWRcIiwgXCJmYS1saXN0LWNoZWNrXCIpO1xuICBjb25zdCB0ZXh0Q29udGVudFNwYW4gPSBjcmVhdGVUZXh0Q29udGVudFNwYW4ocHJqLnRpdGxlKTtcbiAgZGl2LmFwcGVuZENoaWxkKGZvbnRBd2Vzb21lKTtcbiAgZGl2LmFwcGVuZENoaWxkKHRleHRDb250ZW50U3Bhbik7XG4gIGRpdi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RJdGVtXCIpO1xuICBkaXYuaWQgPSBwcmouaWQ7XG4gIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFkZENsYXNzVG9PbmVEaXYoZGl2KTtcbiAgICB0YXNrVmlldy5jcmVhdGVOZXdUYXNrVmlldyhwcmopO1xuICB9KTtcbiAgYWRkQ2xhc3NUb09uZURpdihkaXYpO1xuICByZXR1cm4gZGl2O1xufVxuXG5jb25zdCBjdXJyZW50UHJvamVjdElkID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmNsYXNzTGlzdFswXTtcblxuY29uc3QgY3VycmVudFByb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RJZCA9IGN1cnJlbnRQcm9qZWN0SWQoKTtcbiAgcmV0dXJuIGFsbFByb2plY3RzLmZpbHRlcigodmFsdWUpID0+IHZhbHVlLmlkID09IHByb2plY3RJZClbMF07XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVGb250QXdlc29tZUljb24oY2xhc3NPbmUsIGNsYXNzVHdvKSB7XG4gIGNvbnN0IGl0YWxpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJXCIpO1xuICBpdGFsaWMuY2xhc3NMaXN0LmFkZChjbGFzc09uZSwgY2xhc3NUd28pO1xuICByZXR1cm4gaXRhbGljO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0Q29udGVudFNwYW4odGV4dCkge1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSBgICR7dGV4dH1gO1xuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChlKSB7XG4gIGNvbnN0IGluYnggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXIgZGl2XCIpO1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICBjb25zdCBwcm9qSWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmlkO1xuICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gIGRlbGV0ZVByb2plY3RPYmoocHJvaklkKTtcblxuICBoaWRlUHJvamVjdEZvcm0oKTtcbiAgZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgYWRkQ2xhc3NUb09uZURpdihpbmJ4KTtcbiAgdGFza1ZpZXcuY3JlYXRlTmV3VGFza1ZpZXcoYWxsUHJvamVjdHNbMF0pO1xufVxuXG5jb25zdCBjcmVhdGVEZWxldGVCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGRlbGV0ZUljb24gPSBjcmVhdGVGb250QXdlc29tZUljb24oXCJmYS1zb2xpZFwiLCBcImZhLXRyYXNoXCIpO1xuICBkZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlQnV0dG9uXCIpO1xuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVByb2plY3QpO1xuICByZXR1cm4gZGVsZXRlQnRuO1xufTtcblxuZnVuY3Rpb24gYWRkQ2xhc3NUb09uZURpdihvbmVEaXYpIHtcbiAgY29uc3QgaW5ieCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhciBkaXZcIik7XG4gIGNvbnNvbGUubG9nKGluYngpO1xuICBjb25zdCBwcm9qZWN0c0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwcm9qZWN0LWNvbnRhaW5lciBkaXZcIik7XG4gIGNvbnNvbGUubG9nKHByb2plY3RzSXRlbXMpO1xuICBpbmJ4LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdsaWdodFwiKTtcbiAgcHJvamVjdHNJdGVtcy5mb3JFYWNoKCh2YWx1ZSkgPT4gdmFsdWUuY2xhc3NMaXN0LnJlbW92ZShcImhpZ2xpZ2h0XCIpKTtcbiAgY29uc29sZS5sb2cob25lRGl2KTtcbiAgY29uc29sZS5sb2coaW5ieCk7XG4gIG9uZURpdi5jbGFzc0xpc3QuYWRkKFwiaGlnbGlnaHRcIik7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEZ1bmN0aW9uKGV2ZW50LCBlbGVtZW50LCBkaXYpIHtcbiAgaWYgKGVsZW1lbnQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgZGl2LnRleHRDb250ZW50ID0gXCJDYW50IGJlIGVtcHR5XCI7XG4gICAgZWxlbWVudC5mb2N1cygpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0gZWxzZSBpZiAoZWxlbWVudC52YWx1ZS5sZW5ndGggPiAxNSkge1xuICAgIGRpdi50ZXh0Q29udGVudCA9IFwiRW1haWwgc2hvdWxkIGJlIG9ubHkgMTUgY2hhcmFjdGVyc1wiO1xuICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9IGVsc2Uge1xuICAgIGRpdi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRBZnRlcihuZXdOb2RlLCByZWZlcmVuY2VOb2RlKSB7XG4gIHJlZmVyZW5jZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZS5uZXh0U2libGluZyk7XG59XG4iLCJpbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IGN1cnJlbnRQcm9qZWN0SWQgfSBmcm9tIFwiLi9wcm9qZWN0ZG9tLmpzXCI7XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVRhc2tPYmosXG4gIHVwZGF0ZVRhc2tPYmosXG4gIGdldFRhc2tPYmpGcm9tSWQsXG4gIGRlbGV0ZVRhc2tPYmosXG4gIGNoZWNrVGFza09iaixcbiAgc2V0VGFza0lkLFxufTtcblxubGV0IHRhc2tJZCA9IG51bGw7XG5cbmZ1bmN0aW9uIHNldFRhc2tJZChpZCkge1xuICB0YXNrSWQgPSBpZDtcbn1cblxuY29uc3QgdGFzayA9ICh0aXRsZSwgZGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgY29uc3QgaWQgPSB0YXNrSWQudG9TdHJpbmcoKTtcbiAgY29uc3QgY29tcGxldGVkID0gZmFsc2U7XG4gIHRhc2tJZCArPSAxO1xuICByZXR1cm4geyB0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGlkLCBjb21wbGV0ZWQgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRhc2tPYmogPSAodGFza1ZhbHVlcykgPT4ge1xuICBjb25zdCB7IHRpdGxlIH0gPSB0YXNrVmFsdWVzO1xuICBjb25zdCB7IGRhdGUgfSA9IHRhc2tWYWx1ZXM7XG4gIGNvbnN0IHsgcHJpb3JpdHkgfSA9IHRhc2tWYWx1ZXM7XG4gIGNvbnN0IG5ld1Rhc2sgPSB0YXNrKHRpdGxlLCBkYXRlLCBwcmlvcml0eSk7XG4gIGFkZFRhc2tPYmpUb0FycmF5KG5ld1Rhc2spO1xufTtcblxuY29uc3QgdXBkYXRlVGFza09iaiA9ICh0YXNrLCB0YXNrVmFsdWVzKSA9PiB7XG4gIHRhc2sudGl0bGUgPSB0YXNrVmFsdWVzLnRpdGxlO1xuICB0YXNrLmRhdGUgPSB0YXNrVmFsdWVzLmRhdGU7XG4gIHRhc2sucHJpb3JpdHkgPSB0YXNrVmFsdWVzLnByaW9yaXR5O1xufTtcblxuY29uc3QgZ2V0VGFza09iakZyb21JZCA9ICh0YXNrSWQpID0+XG4gIGFsbFByb2plY3RzWzBdLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCA9PSB0YXNrSWQpLmF0KDApO1xuXG5mdW5jdGlvbiBkZWxldGVUYXNrT2JqKHRhc2tJZCkge1xuICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC50YXNrcyA9IHByb2plY3QudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9IHRhc2tJZCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja1Rhc2tPYmoodGFza0lkKSB7XG4gIGNvbnN0IHRhc2sgPSBhbGxQcm9qZWN0c1swXS50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgPT0gdGFza0lkKS5hdCgwKTtcbiAgdGFzay5jb21wbGV0ZWQgPSAhdGFzay5jb21wbGV0ZWQ7XG59XG5cbmNvbnN0IGFkZFRhc2tPYmpUb0FycmF5ID0gKG5ld1Rhc2spID0+IHtcbiAgYWxsUHJvamVjdHMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUuaWQgPT0gXCIxXCIgJiYgdmFsdWUudGl0bGUgPT0gXCJJbmJveFwiKSB7XG4gICAgICB2YWx1ZS50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIH0gZWxzZSBpZiAodmFsdWUuaWQgPT09IGN1cnJlbnRQcm9qZWN0SWQoKSkge1xuICAgICAgdmFsdWUudGFza3MucHVzaChuZXdUYXNrKTtcbiAgICB9XG4gIH0pO1xufTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZVRhc2tPYmosXG4gIHVwZGF0ZVRhc2tPYmosXG4gIGdldFRhc2tPYmpGcm9tSWQsXG4gIGRlbGV0ZVRhc2tPYmosXG4gIGNoZWNrVGFza09iaixcbn0gZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHsgY3VycmVudFByb2plY3QsIGhpZGVQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL3Byb2plY3Rkb20uanNcIjtcblxuZXhwb3J0IHsgdGFza01hbmlwdWxhdG9yLCB0YXNrVmlldyB9O1xuXG5jb25zdCB0YXNrRE9NID0gKCkgPT4ge1xuICBjb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Zvcm1Db250YWluZXJcIik7XG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRm9ybVwiKTtcbiAgY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkTmV3VGFza1wiKTtcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLVRhc2tcIik7XG4gIGNvbnN0IGVkaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LVRhc2tcIik7XG4gIGNvbnN0IGhpZGVUYXNrRm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VUYXNrRm9ybVwiKTtcblxuICBmdW5jdGlvbiB0YXNrRm9ybUNvbnRyb2xsZXIoKSB7XG4gICAgLy8gUkVOQU1FIFRISVMgVE8gcHJvamVjdEZvcm1Db250cm9sbGVyIG9yIHNvbWV0aGluZyBsYXRlclxuICAgIGhpZGVUYXNrRm9ybSgpO1xuICAgIG5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dUYXNrRm9ybSk7XG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFzayk7XG4gICAgZWRpdFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRUYXNrKTtcbiAgICBoaWRlVGFza0Zvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVUYXNrRm9ybSk7XG4gIH1cblxuICAvLyBjcmVhdGVcblxuICBmdW5jdGlvbiBzaG93VGFza0Zvcm0oKSB7XG4gICAgaGlkZVByb2plY3RGb3JtKCk7XG5cbiAgICBzaG93RWxlbWVudCh0YXNrRm9ybSk7XG5cbiAgICByZXNldFRhc2tGb3JtKCk7XG4gICAgZm9jdXNPblRpdGxlKCk7XG5cbiAgICBoaWRlRWxlbWVudChuZXdUYXNrQnV0dG9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRhc2soZSkge1xuICAgIGlmIChzdWJtaXRGdW5jdGlvbihlKSkge1xuICAgICAgY3JlYXRlVGFzaygpO1xuICAgICAgaGlkZVRhc2tGb3JtKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcbiAgICBjb25zdCB0YXNrVmFsdWVzID0gZ2V0VGFza1ZhbHVlcygpO1xuICAgIGNyZWF0ZVRhc2tPYmoodGFza1ZhbHVlcyk7XG4gICAgdGFza1ZpZXcuY3JlYXRlTmV3VGFza1ZpZXcoY3VycmVudFByb2plY3QoKSk7XG4gIH1cblxuICAvLyByZW1vdmVcbiAgZnVuY3Rpb24gZGVsZXRlVGFzayhlKSB7XG4gICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQucGFyZW50Tm9kZS5pZDtcbiAgICBkZWxldGVUYXNrT2JqKHRhc2tJZCk7XG4gICAgdGFza01hbmlwdWxhdG9yLmhpZGVUYXNrRm9ybSgpO1xuICAgIGhpZGVQcm9qZWN0Rm9ybSgpO1xuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gIH1cblxuICAvLyB1cGRhdGVcblxuICBmdW5jdGlvbiBpbnNlcnRBZnRlcihuZXdOb2RlLCByZWZlcmVuY2VOb2RlKSB7XG4gICAgcmVmZXJlbmNlTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZlcmVuY2VOb2RlLm5leHRTaWJsaW5nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzRnJvbUVMZW1lcm50KCkge1xuICAgIGNvbnN0IGFsbEVsZW1ldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tEaXZcIik7XG4gICAgaWYgKGFsbEVsZW1ldHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBhbGxFbGVtZXRzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgIHZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlRWxlbWVudFwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1vdmVFZGl0Rm9ybVRvQmVsb3dFbGVtZW50ID0gKGN1cnJlbnROb2RlKSA9PiB7XG4gICAgaW5zZXJ0QWZ0ZXIodGFza0Zvcm0sIGN1cnJlbnROb2RlKTtcbiAgfTtcblxuICBjb25zdCBzaG93RWRpdEZvcm0gPSAoZSkgPT4ge1xuICAgIHJlc2V0VGFza0Zvcm0oKTtcblxuICAgIGhpZGVQcm9qZWN0Rm9ybSgpO1xuICAgIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LmlkO1xuICAgIGNvbnNvbGUubG9nKHR5cGVvZiB0YXNrSWQpO1xuICAgIGNvbnN0IGVsZW1lbnR0aGlzID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50dGhpcyk7XG4gICAgbW92ZUVkaXRGb3JtVG9CZWxvd0VsZW1lbnQoZWxlbWVudHRoaXMpO1xuICAgIGVsZW1lbnR0aGlzLmNsYXNzTGlzdC5hZGQoXCJoaWRlRWxlbWVudFwiKTtcbiAgICBzaG93RWxlbWVudCh0YXNrRm9ybSk7XG4gICAgZm9jdXNPblRpdGxlKCk7XG4gICAgc2V0VXBFZGl0Rm9ybSh0YXNrSWQpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHNldFVwRWRpdEZvcm0oaWQpIHtcbiAgICBlZGl0VGFza0J1dHRvbi5jbGFzc05hbWUgPSBpZDtcbiAgICBjb25zdCB0YXNrID0gZ2V0VGFza09iakZyb21JZChpZCk7XG4gICAgdXBkYXRlRWRpdEZvcm1WYWx1ZXModGFzayk7XG4gICAgaGlkZUVsZW1lbnQoYWRkVGFza0J1dHRvbik7XG4gICAgc2hvd0VsZW1lbnQoZWRpdFRhc2tCdXR0b24pO1xuICB9XG5cbiAgY29uc3QgdXBkYXRlRWRpdEZvcm1WYWx1ZXMgPSAodGFzaykgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpO1xuICAgIHRpdGxlLnZhbHVlID0gdGFzay50aXRsZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpO1xuICAgIGRhdGUudmFsdWUgPSB0YXNrLmRhdGU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJpb3JpdHlcIik7XG4gICAgcHJpb3JpdHkudmFsdWUgPSB0YXNrLnByaW9yaXR5O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGVkaXRUYXNrKGUpIHtcbiAgICBpZiAoc3VibWl0RnVuY3Rpb24oZSkpIHtcbiAgICAgIGNvbnN0IHRhc2tJZCA9IGVkaXRUYXNrQnV0dG9uLmNsYXNzTmFtZTtcbiAgICAgIGNvbnN0IHRhc2sgPSBnZXRUYXNrT2JqRnJvbUlkKHRhc2tJZCk7XG4gICAgICBjb25zdCB0YXNrVmFsdWVzID0gZ2V0VGFza1ZhbHVlcygpO1xuICAgICAgdXBkYXRlVGFza09iaih0YXNrLCB0YXNrVmFsdWVzKTtcbiAgICAgIGhpZGVUYXNrRm9ybSgpO1xuICAgICAgdGFza1ZpZXcuY3JlYXRlTmV3VGFza1ZpZXcoY3VycmVudFByb2plY3QoKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tUYXNrKGUpIHtcbiAgICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmlkO1xuICAgIGNoZWNrVGFza09iaih0YXNrSWQpO1xuICAgIHRhc2tNYW5pcHVsYXRvci5oaWRlVGFza0Zvcm0oKTtcbiAgICBoaWRlUHJvamVjdEZvcm0oKTtcblxuICAgIGUudGFyZ2V0Lm5leHRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJ0aXRsZURpdkNoZWNrZWRcIik7XG4gIH1cblxuICAvLyB1dGlsaXR5IGZ1bmN0aW9uc1xuICBjb25zdCBnZXRUYXNrVmFsdWVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIikudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJpb3JpdHlcIikudmFsdWU7XG4gICAgcmV0dXJuIHsgdGl0bGUsIGRhdGUsIHByaW9yaXR5IH07XG4gIH07XG5cbiAgZnVuY3Rpb24gZm9jdXNPblRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXRpdGxlXCIpO1xuICAgIHRpdGxlLmZvY3VzKCk7IC8vIHNldHMgZm9jdXMgdG8gZWxlbWVudFxuICAgIGNvbnN0IHZhbCA9IHRpdGxlLnZhbHVlOyAvLyBzdG9yZSB0aGUgdmFsdWUgb2YgdGhlIGVsZW1lbnRcbiAgICB0aXRsZS52YWx1ZSA9IFwiXCI7IC8vIGNsZWFyIHRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudFxuICAgIHRpdGxlLnZhbHVlID0gdmFsOyAvLyBzZXQgdGhhdCB2YWx1ZSBiYWNrLlxuICB9XG5cbiAgZnVuY3Rpb24gaGlkZVRhc2tGb3JtKCkge1xuICAgIGhpZGVFbGVtZW50KHRhc2tGb3JtKTtcbiAgICByZXNldFRhc2tGb3JtKCk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRhc2tGb3JtKCkge1xuICAgIHJlbW92ZUNsYXNzRnJvbUVMZW1lcm50KCk7XG4gICAgdGFza0Zvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuICAgIHNob3dFbGVtZW50KG5ld1Rhc2tCdXR0b24pO1xuICAgIHNob3dFbGVtZW50KGFkZFRhc2tCdXR0b24pO1xuICAgIHNob3dFbGVtZW50KGhpZGVUYXNrRm9ybUJ1dHRvbik7XG4gICAgaGlkZUVsZW1lbnQoZWRpdFRhc2tCdXR0b24pO1xuICAgIHRhc2tGb3JtLnJlc2V0KCk7XG4gIH1cblxuICBjb25zdCBoaWRlRWxlbWVudCA9IChlbG0pID0+IHtcbiAgICBlbG0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvbnNvbGUubG9nKGVsbSwgXCJoaWRkZW5cIik7XG4gIH07XG5cbiAgY29uc3Qgc2hvd0VsZW1lbnQgPSAoZWxtKSA9PiB7XG4gICAgZWxtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB0YXNrRm9ybUNvbnRyb2xsZXIsXG4gICAgc2hvd0VkaXRGb3JtLFxuICAgIGNoZWNrVGFzayxcbiAgICBkZWxldGVUYXNrLFxuICAgIGhpZGVUYXNrRm9ybSxcbiAgICByZXNldFRhc2tGb3JtLFxuICB9O1xufTtcblxuY29uc3QgY3JlYXRlVGFza1ZpZXdIZWxwZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZVRhc2tEaXYgPSAodGFzaykgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZVRpdGxlRGl2ID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlRGl2XCIpO1xuICAgICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgaWYgKHRhc2suY29tcGxldGVkID09IGZhbHNlKSB7XG4gICAgICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJ0aXRsZURpdkNoZWNrZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGVEaXZDaGVja2VkXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRpdGxlRGl2O1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVQcmlvcml0eURpdiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eURpdlwiKTtcbiAgICAgIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQodGFzay5wcmlvcml0eSk7XG4gICAgICByZXR1cm4gcHJpb3JpdHlEaXY7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZURhdGVEaXYgPSAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRhdGVEaXYuY2xhc3NMaXN0LmFkZChcImRhdGVEaXZcIik7XG4gICAgICBkYXRlRGl2LnRleHRDb250ZW50ID0gdGFzay5kYXRlO1xuICAgICAgcmV0dXJuIGRhdGVEaXY7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZURlbGV0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZUJ1dHRvbkZvclRhc2tcIik7XG4gICAgICBjb25zdCBkZWxldGVGb250ID0gY3JlYXRlRm9udEF3ZXNvbWVJY29uKFwiZmEtc29saWRcIiwgXCJmYS10cmFzaFwiKTtcbiAgICAgIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVGb250KTtcbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza01hbmlwdWxhdG9yLmRlbGV0ZVRhc2spO1xuICAgICAgcmV0dXJuIGRlbGV0ZUJ0bjtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlQ2hlY2tCdXR0b24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBjaGVja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNoZWNrQnRuLmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveFwiKTtcbiAgICAgIGNoZWNrQnRuLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICBpZiAodGFzay5jb21wbGV0ZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgY2hlY2tCdG4uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hlY2tCdG4uY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBjaGVja0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza01hbmlwdWxhdG9yLmNoZWNrVGFzayk7XG4gICAgICByZXR1cm4gY2hlY2tCdG47XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUVkaXRCdXR0b24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGNvbnN0IGVkaXRGb250ID0gY3JlYXRlRm9udEF3ZXNvbWVJY29uKFwiZmEtc29saWRcIiwgXCJmYS1lZGl0XCIpO1xuICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdEJ1dHRvbkZvclRhc2tcIik7XG4gICAgICBlZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRGb250KTtcbiAgICAgIGVkaXRCdG4uaWQgPSB0YXNrLmlkO1xuICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza01hbmlwdWxhdG9yLnNob3dFZGl0Rm9ybSk7XG4gICAgICByZXR1cm4gZWRpdEJ0bjtcbiAgICB9O1xuXG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza0RpdlwiKTtcbiAgICB0YXNrRGl2LmlkID0gdGFzay5pZDtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVByaW9yaXR5RGl2KCkpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQ2hlY2tCdXR0b24oKSk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVUaXRsZURpdigpKTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGNyZWF0ZURhdGVEaXYoKSk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVFZGl0QnV0dG9uKCkpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRGVsZXRlQnV0dG9uKCkpO1xuXG4gICAgcmV0dXJuIHRhc2tEaXY7XG4gIH07XG5cbiAgY29uc3Qgc2V0VXBUYXNrQ29udGFpbmVyID0gKHByb2opID0+IHtcbiAgICBjb25zdCB0YXNrTWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudC1jb250YWluZXJcIik7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICB0YXNrTWFpbkNvbnRhaW5lci5jbGFzc05hbWUgPSBwcm9qLmlkO1xuICAgIHRhc2tDb250YWluZXIuY2xhc3NOYW1lID0gcHJvai5pZDtcbiAgICB0YXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICByZXR1cm4gdGFza0NvbnRhaW5lcjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVOZXdUYXNrVmlldyA9IChjb250UHJvaikgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5ldGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtY29udGFpbmVyLXRpdGxlXCIpO1xuICAgIGNvbnRhaW5ldGl0bGUudGV4dENvbnRlbnQgPSBjb250UHJvai50aXRsZTtcbiAgICBjb25zb2xlLmxvZyhcIm5ldyB0YXNrIHZpZXdcIik7XG4gICAgdGFza01hbmlwdWxhdG9yLmhpZGVUYXNrRm9ybSgpO1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBzZXRVcFRhc2tDb250YWluZXIoY29udFByb2opO1xuICAgIGNvbnRQcm9qLnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tEaXYgPSBjcmVhdGVUYXNrRGl2KHRhc2spO1xuICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4geyBjcmVhdGVOZXdUYXNrVmlldyB9O1xufTtcblxuY29uc3QgdGFza01hbmlwdWxhdG9yID0gdGFza0RPTSgpO1xuY29uc3QgdGFza1ZpZXcgPSBjcmVhdGVUYXNrVmlld0hlbHBlcigpO1xuXG5mdW5jdGlvbiBzdWJtaXRGdW5jdGlvbihldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZVwiKTtcblxuICBjb25zdCB0aXRsZVRydWUgPSBzdWJtaXRGdW5jdGlvblRpdGxlKCk7XG5cbiAgaWYgKCF0aXRsZVRydWUpIHtcbiAgICB0aXRsZS5mb2N1cygpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEZ1bmN0aW9uVGl0bGUoKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpO1xuICBjb25zdCB0aXRsZUVyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVlcnJkaXZcIik7XG4gIGlmICh0aXRsZS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICB0aXRsZUVyci50ZXh0Q29udGVudCA9IFwiQ2FudCBiZSBlbXB0eVwiO1xuICB9IGVsc2UgaWYgKHRpdGxlLnZhbHVlLmxlbmd0aCA+IDE1KSB7XG4gICAgdGl0bGVFcnIudGV4dENvbnRlbnQgPSBcIkVtYWlsIHNob3VsZCBiZSBvbmx5IDE1IGNoYXJhY3RlcnNcIjtcbiAgfSBlbHNlIHtcbiAgICB0aXRsZUVyci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9udEF3ZXNvbWVJY29uKGNsYXNzT25lLCBjbGFzc1R3bykge1xuICBjb25zdCBpdGFsaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSVwiKTtcbiAgaXRhbGljLmNsYXNzTGlzdC5hZGQoY2xhc3NPbmUsIGNsYXNzVHdvKTtcbiAgcmV0dXJuIGl0YWxpYztcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vLyAvLy8vLyBub3Rlc1xuLy8vIDIuIEFERCAxV0VFSyBDQUxFTkRBUlkgT04gU0lERUJBUlxuLy8gMyBBREQgRFVFIFRPREFZIE9OIFNJREVCQVJEXG4vLyBGT0NVUyBUSUxFICBPTiBPUEVOSU5HIEZPUk1TXG4vLyBjaGFuZ2Ugc3R5bGVcbi8vIFNUWUxFIE5PVEVTXG4vLyBjaG5hZ2UgaG93IGZvcm0gbG9va3Ncbi8vIEZlYXR1cmUgbm90ZXNcbi8vIEFkZCBzaWRlYmFyIGhhbWJ1cmdlclxuLy8gQWRkIGhvbWUgYnV0dG9uIHdoaWNoIGxlYWRzIHRvIGluYm94XG4vLyBNYWtlIHRvZGF5IGFuZCB0aGlzIHdlZWsgYnV0dG9ucyB3b3Jrc1xuLy9cblxuaW1wb3J0IHsgdGFza01hbmlwdWxhdG9yIH0gZnJvbSBcIi4vdGFza2RvbVwiO1xuaW1wb3J0IHtcbiAgcHJvamVjdEZvcm1Db250cm9sbGVyLFxuICByZW5kZXJJbmJveCxcbiAgcmVuZGVyU2lkZUJhclByb2plY3RPbmx5LFxufSBmcm9tIFwiLi9wcm9qZWN0ZG9tXCI7XG5pbXBvcnQgeyBhbGxQcm9qZWN0cywgcHJvamVjdCwgc2V0UHJqSWQgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBzZXRUYXNrSWQgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5sZXQgdGFza0lkID0gMTtcbmxldCBwcmpJZCA9IDE7XG5cbmZ1bmN0aW9uIHNhdmVUb0RvTGlzdCgpIHtcbiAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbn1cblxuZnVuY3Rpb24gbG9hZFRvRG9MaXN0KCkge1xuICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG5cbiAgaWYgKHByb2plY3RzID09IG51bGwpIHtcbiAgICBzZXRQcmpJZChwcmpJZCk7XG4gICAgc2V0VGFza0lkKHRhc2tJZCk7XG4gICAgY29uc3QgaW5ib3ggPSBwcm9qZWN0KFwiSW5ib3hcIik7XG4gICAgYWxsUHJvamVjdHMucHVzaChpbmJveCk7XG4gICAgcmVuZGVySW5ib3goKTtcbiAgICByZW5kZXJTaWRlQmFyUHJvamVjdE9ubHkoKTtcblxuICAgIHByb2plY3RGb3JtQ29udHJvbGxlcigpO1xuICAgIHRhc2tNYW5pcHVsYXRvci50YXNrRm9ybUNvbnRyb2xsZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKCh2YWwpID0+IGFsbFByb2plY3RzLnB1c2godmFsKSk7XG4gICAgcHJqSWQgPSBwYXJzZUludChhbGxQcm9qZWN0cy5hdCgtMSkuaWQpICsgMTtcbiAgICBzZXRQcmpJZChwcmpJZCk7XG4gICAgaWYgKGFsbFByb2plY3RzWzBdLnRhc2tzLmF0KC0xKSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhc2tJZCA9IDE7XG4gICAgICBzZXRUYXNrSWQodGFza0lkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFza0lkID0gcGFyc2VJbnQoYWxsUHJvamVjdHNbMF0udGFza3MuYXQoLTEpLmlkKSArIDE7XG4gICAgICBzZXRUYXNrSWQodGFza0lkKTtcbiAgICB9XG5cbiAgICBwcm9qZWN0Rm9ybUNvbnRyb2xsZXIoKTtcbiAgICByZW5kZXJTaWRlQmFyUHJvamVjdE9ubHkoKTtcbiAgICByZW5kZXJJbmJveCgpO1xuICAgIHRhc2tNYW5pcHVsYXRvci50YXNrRm9ybUNvbnRyb2xsZXIoKTtcbiAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCAoKSA9PiB7XG4gIHNhdmVUb0RvTGlzdCgpO1xuICByZXR1cm4gbnVsbDtcbn0pO1xuXG5sb2FkVG9Eb0xpc3QoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==