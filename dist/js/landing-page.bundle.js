/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"landing-page": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/site-pages/landing-page/landing-page.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/images/arrow_back.svg":
/*!******************************************!*\
  !*** ./src/assets/images/arrow_back.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/arrow_back.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/arrow_back.svg?");

/***/ }),

/***/ "./src/assets/images/expand_more.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/expand_more.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/expand_more.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/expand_more.svg?");

/***/ }),

/***/ "./src/assets/images/room-big-1.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/room-big-1.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/room-big-1.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/room-big-1.jpg?");

/***/ }),

/***/ "./src/assets/images/room-big-2.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/room-big-2.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/room-big-2.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/room-big-2.jpg?");

/***/ }),

/***/ "./src/assets/images/room-big-3.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/room-big-3.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/room-big-3.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/room-big-3.jpg?");

/***/ }),

/***/ "./src/blocks/button/_decoration/_enter-arrow/button_decoration_enter-arrow.scss":
/*!***************************************************************************************!*\
  !*** ./src/blocks/button/_decoration/_enter-arrow/button_decoration_enter-arrow.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/button/_decoration/_enter-arrow/button_decoration_enter-arrow.scss?");

/***/ }),

/***/ "./src/blocks/button/_hovered/button_hovered.scss":
/*!********************************************************!*\
  !*** ./src/blocks/button/_hovered/button_hovered.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/button/_hovered/button_hovered.scss?");

/***/ }),

/***/ "./src/blocks/button/_size/button_size_wide.scss":
/*!*******************************************************!*\
  !*** ./src/blocks/button/_size/button_size_wide.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/button/_size/button_size_wide.scss?");

/***/ }),

/***/ "./src/blocks/button/_size/button_text-sized.scss":
/*!********************************************************!*\
  !*** ./src/blocks/button/_size/button_text-sized.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/button/_size/button_text-sized.scss?");

/***/ }),

/***/ "./src/blocks/button/_type/button_type_bordered.scss":
/*!***********************************************************!*\
  !*** ./src/blocks/button/_type/button_type_bordered.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/button/_type/button_type_bordered.scss?");

/***/ }),

/***/ "./src/blocks/button/_type/button_type_filled.scss":
/*!*********************************************************!*\
  !*** ./src/blocks/button/_type/button_type_filled.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/button/_type/button_type_filled.scss?");

/***/ }),

/***/ "./src/blocks/button/_type/button_type_text.scss":
/*!*******************************************************!*\
  !*** ./src/blocks/button/_type/button_type_text.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/button/_type/button_type_text.scss?");

/***/ }),

/***/ "./src/blocks/button/button.js":
/*!*************************************!*\
  !*** ./src/blocks/button/button.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./button.scss */ \"./src/blocks/button/button.scss\");\n\n__webpack_require__(/*! ./_type/button_type_bordered.scss */ \"./src/blocks/button/_type/button_type_bordered.scss\");\n\n__webpack_require__(/*! ./_type/button_type_filled.scss */ \"./src/blocks/button/_type/button_type_filled.scss\");\n\n__webpack_require__(/*! ./_type/button_type_text.scss */ \"./src/blocks/button/_type/button_type_text.scss\");\n\n__webpack_require__(/*! ./_size/button_size_wide.scss */ \"./src/blocks/button/_size/button_size_wide.scss\");\n\n__webpack_require__(/*! ./_hovered/button_hovered.scss */ \"./src/blocks/button/_hovered/button_hovered.scss\");\n\n__webpack_require__(/*! ./_decoration/_enter-arrow/button_decoration_enter-arrow.scss */ \"./src/blocks/button/_decoration/_enter-arrow/button_decoration_enter-arrow.scss\");\n\n__webpack_require__(/*! ./_size/button_text-sized.scss */ \"./src/blocks/button/_size/button_text-sized.scss\");\n\n//# sourceURL=webpack:///./src/blocks/button/button.js?");

/***/ }),

/***/ "./src/blocks/button/button.scss":
/*!***************************************!*\
  !*** ./src/blocks/button/button.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/button/button.scss?");

/***/ }),

/***/ "./src/blocks/input/_decoration/_enter-arrow/input_decoration_enter-arrow.scss":
/*!*************************************************************************************!*\
  !*** ./src/blocks/input/_decoration/_enter-arrow/input_decoration_enter-arrow.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_decoration/_enter-arrow/input_decoration_enter-arrow.scss?");

/***/ }),

/***/ "./src/blocks/input/_decoration/_expand-arrow/input_decoration_expand-arrow.scss":
/*!***************************************************************************************!*\
  !*** ./src/blocks/input/_decoration/_expand-arrow/input_decoration_expand-arrow.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_decoration/_expand-arrow/input_decoration_expand-arrow.scss?");

/***/ }),

/***/ "./src/blocks/input/_focused/input_focused.scss":
/*!******************************************************!*\
  !*** ./src/blocks/input/_focused/input_focused.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_focused/input_focused.scss?");

/***/ }),

/***/ "./src/blocks/input/_type/_datepicker/_inline/datepicker_inline.scss":
/*!***************************************************************************!*\
  !*** ./src/blocks/input/_type/_datepicker/_inline/datepicker_inline.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_type/_datepicker/_inline/datepicker_inline.scss?");

/***/ }),

/***/ "./src/blocks/input/_type/_datepicker/input_type_datepicker.js":
/*!*********************************************************************!*\
  !*** ./src/blocks/input/_type/_datepicker/input_type_datepicker.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.parseAttrToDate = parseAttrToDate;\nexports.setDates = setDates;\nexports.initDatepickerInput = initDatepickerInput;\nexports.initDatepickerInputs = initDatepickerInputs;\n\n__webpack_require__(/*! air-datepicker */ \"./node_modules/air-datepicker/src/js/air-datepicker.js\");\n\n__webpack_require__(/*! ../../../../assets/images/arrow_back.svg */ \"./src/assets/images/arrow_back.svg\");\n\n__webpack_require__(/*! ../../../../assets/images/expand_more.svg */ \"./src/assets/images/expand_more.svg\");\n\n/* eslint-disable no-undef */\n// jquery объявлена глобально вебпаком\nvar confirmButton = '<div class=\"button button_type_text input_type_datepicker__confirm-button\">' + '<button class=\"button__control text_type_label-CTA datepicker--button\" data-action=\"hide\">Применить' + '</button><div class=\"button__decoration material-icons\"></div></div>';\nvar clearButton = '<div class=\"button button_type_text button_hovered input_type_datepicker__clear-button\">' + '<button class=\"button__control text_type_label-CTA datepicker--button\" data-action=\"clear\">Очистить' + '</button><div class=\"button__decoration material-icons\"></div></div>';\n\nfunction parseAttrToDate(attrDate) {\n  var dateParts = attrDate.split('.');\n  var day = dateParts[0];\n  var month = dateParts[1];\n  var year = dateParts[2];\n  var dateString = \"\".concat(year, \"-\").concat(month, \"-\").concat(day);\n  return new Date(dateString);\n}\n\nfunction getInitDates($datepickerControl) {\n  var dates = [];\n\n  if ($datepickerControl.attr('data-firstdate')) {\n    dates.push(parseAttrToDate($datepickerControl.attr('data-firstDate')));\n  }\n\n  if ($datepickerControl.attr('data-seconddate')) {\n    dates.push(parseAttrToDate($datepickerControl.attr('data-secondDate')));\n  }\n\n  return dates.length === 0 ? undefined : dates;\n}\n\nfunction addClickHandler(arrowElement, expandableElement, controlElement) {\n  $(controlElement).click(function () {\n    if ($(arrowElement).hasClass('expanded')) {\n      expandableElement.hide();\n    } else {\n      expandableElement.show();\n    }\n  });\n}\n\nfunction disableLabelClicks(event) {\n  // при клике на заголовок/стрелку итак происходит анфокус и календарь прячется,\n  // лишний клик не нужен\n  event.preventDefault();\n}\n\nfunction setExpandArrowEventHandlers($expandArrow, $inputControl, $ownerLabel) {\n  var expandableElement = null;\n  $inputControl.each(function () {\n    expandableElement = $inputControl.data('datepicker');\n    expandableElement.update({\n      onHide: function onHide(inst, animationCompleted) {\n        if (!animationCompleted) {\n          $expandArrow.text('expand_more');\n          return;\n        }\n\n        $($expandArrow).removeClass('expanded'); // чтобы лейбловые прокликивания снова заработали\n        // нужно показывать календарь при клике на что-то кроме инпута\n\n        $($ownerLabel).unbind('click', disableLabelClicks);\n      },\n      onShow: function onShow(inst, animationCompleted) {\n        if (!animationCompleted) {\n          $expandArrow.text('expand_less');\n          return;\n        }\n\n        $expandArrow.addClass('expanded');\n        $ownerLabel.click(disableLabelClicks);\n      },\n      todayButton: false\n    });\n  });\n  return expandableElement;\n}\n\nfunction initExpandableEvents($expandArrow, $control) {\n  var $ownerLabel = $(this).parent();\n  var expandableElement = setExpandArrowEventHandlers($expandArrow, $control, $ownerLabel);\n\n  if (expandableElement) {\n    addClickHandler($expandArrow, expandableElement, $control, $ownerLabel);\n  }\n}\n/**\r\n * Устанавливает даты в первый календарь\r\n * (второй подцепляет это значение в логике two-calendar-range-picker)\r\n * Если даты не переданы, используется сегодняшняя\r\n * @param $datepickerInput\r\n * @param dates\r\n */\n\n\nfunction setDates($datepickerInput, dates) {\n  if (!dates) {\n    return;\n  }\n\n  var datepickerData = $datepickerInput.data('datepicker');\n  datepickerData.selectDate(dates);\n}\n\nfunction initDatepickerInput(index, input) {\n  var $input = $(input);\n  var $inputControl = $input.find('.input__control_type_datepicker');\n  var isInline = $input.hasClass('datepicker_inline');\n  var datepicker = $inputControl.datepicker({\n    range: true,\n    inline: isInline,\n    dateFormat: 'd M',\n    multipleDatesSeparator: ' - ',\n    todayButton: true,\n    showEvent: '',\n    position: 'bottom center',\n    offset: 5,\n    navTitles: {\n      days: '<span class=\"text_type_item-title\">MM yyyy</span>',\n      months: '<span class=\"text_type_item-title\">yyyy</span>',\n      years: '<span class=\"text_type_item-title\">yyyy1 - yyyy2</span>'\n    },\n    prevHtml: '<img src=\"./images/arrow_back.svg\" alt=\"назад\"\">',\n    nextHtml: '<img src=\"./images/arrow_back.svg\" alt=\"назад\" style=\"transform: scale(-1, 1)\">',\n    onSelect: function onSelect(formattedDate) {\n      $inputControl.val(formattedDate.toLowerCase());\n    }\n  }).data('datepicker'); // замена кнопок на свои в элементе календаря\n\n  datepicker.$datepicker.find('.datepicker--button[data-action=\"today\"]').remove();\n  datepicker.$datepicker.find('.datepicker--buttons').append(clearButton);\n  datepicker.$datepicker.find('.datepicker--buttons').append(confirmButton); // установка ивентов отображения/исчезновения\n\n  var $expandArrow = $($input.find('.input__arrow_decoration_expand-arrow')[0]);\n  initExpandableEvents($expandArrow, $inputControl);\n  var initDates = getInitDates($inputControl);\n  datepicker.selectDate(initDates);\n}\n\nfunction initDatepickerInputs() {\n  var $datepickers = $('.input_type_datepicker');\n  $datepickers.each(initDatepickerInput);\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/input/_type/_datepicker/input_type_datepicker.js?");

/***/ }),

/***/ "./src/blocks/input/_type/_datepicker/input_type_datepicker.scss":
/*!***********************************************************************!*\
  !*** ./src/blocks/input/_type/_datepicker/input_type_datepicker.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_type/_datepicker/input_type_datepicker.scss?");

/***/ }),

/***/ "./src/blocks/input/_type/_dropdown/input__list_type_dropdown.js":
/*!***********************************************************************!*\
  !*** ./src/blocks/input/_type/_dropdown/input__list_type_dropdown.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.initDropdownInput = initDropdownInput;\nexports.initDropdowns = initDropdowns;\n\n__webpack_require__(/*! jquery-ui/ui/effects/effect-fade */ \"./node_modules/jquery-ui/ui/effects/effect-fade.js\");\n\nvar _functions = __webpack_require__(/*! ../../../../common/functions */ \"./src/common/functions.js\");\n\nvar _input_type_spinner = __webpack_require__(/*! ../_spinner/input_type_spinner */ \"./src/blocks/input/_type/_spinner/input_type_spinner.js\");\n\n/* eslint-disable no-undef */\n// jquery объявлена глобально вебпаком\n\n/**\r\n * Функция для получения пар имя-значение со всех переданных спиннеров\r\n *\r\n * @param spinnerElements   массив спиннеров\r\n * @returns {Array}\r\n */\nfunction getCurrentNamesValues(spinnerElements) {\n  var result = [];\n\n  function getNameValue() {\n    result.push({\n      name: $(this).attr('data-name'),\n      value: parseInt($(this).val(), 10)\n    });\n  }\n\n  $(spinnerElements).each(getNameValue);\n  return result;\n}\n\nvar typeRooms = 'rooms';\nvar typeCustomers = 'customers';\n\nfunction getDropdownType(dropdown) {\n  var dropdownType = {};\n\n  if ($(dropdown).hasClass('input__dropdown-list-wrapper_unified')) {\n    dropdownType.isUnified = true;\n  }\n\n  if ($(dropdown).hasClass('input__dropdown-list-wrapper_rooms')) {\n    dropdownType.name = typeRooms;\n  } else if ($(dropdown).hasClass('input__dropdown-list-wrapper_customers')) {\n    dropdownType.name = typeCustomers;\n  } else return false;\n\n  return dropdownType;\n}\n\nfunction selectNiceWord(itemsCount, itemName) {\n  var result = '';\n\n  switch (itemName.toLowerCase()) {\n    case 'спальни':\n      result = (0, _functions.ruDeclination)(itemsCount, 'спал|ьня|ьни|ен');\n      break;\n\n    case 'кровати':\n      result = (0, _functions.ruDeclination)(itemsCount, 'кроват|ь|и|ей');\n      break;\n\n    case 'ванные комнаты':\n      result = \"\".concat((0, _functions.ruDeclination)(itemsCount, 'ванн|ая|ых|ых'), \" \").concat((0, _functions.ruDeclination)(itemsCount, 'комнат|а|ы|'));\n      break;\n\n    case 'гости':\n      result = (0, _functions.ruDeclination)(itemsCount, 'гост|ь|я|ей');\n      break;\n\n    case 'младенцы':\n      result = (0, _functions.ruDeclination)(itemsCount, 'младен|ец|ца|цев');\n      break;\n\n    default:\n  }\n\n  return result;\n}\n\nfunction areAllValuesZero(namesValues) {\n  return !namesValues.some(function (nameValue) {\n    return parseInt(nameValue.value, 10) !== 0;\n  });\n}\n\nfunction createUnifiedString(namesValues, declinationsString) {\n  var sum = namesValues.reduce(function (accumulator, currentValue) {\n    return accumulator + parseInt(currentValue.value, 10);\n  }, 0);\n  return \"\".concat(sum, \" \").concat((0, _functions.ruDeclination)(sum, declinationsString));\n}\n\nfunction createSeparateRoomsString(namesValues) {\n  var result = namesValues.reduce(function (accumulator, currentNameValue) {\n    return \"\".concat(accumulator, \" \") + \"\".concat(currentNameValue.value, \" \") + \"\".concat(selectNiceWord(currentNameValue.value, currentNameValue.name), \", \");\n  }, '');\n  result = result.substring(0, result.length - 2).trim();\n  return result;\n}\n\nfunction createRoomsString(namesValues, isUnified) {\n  var result;\n\n  if (isUnified) {\n    result = createUnifiedString(namesValues, 'комнаты');\n  } else {\n    result = createSeparateRoomsString(namesValues);\n  }\n\n  return result;\n}\n\nfunction createCustomersWithInfantsString(namesValues) {\n  var infants = 0;\n  var sum = 0;\n  namesValues.forEach(function (nameValue) {\n    if (nameValue.name.toLowerCase() === 'младенцы') {\n      infants = nameValue.value;\n      return;\n    }\n\n    sum += parseInt(nameValue.value, 10);\n  });\n  return \"\".concat(sum, \" \").concat(selectNiceWord(sum, 'гости'), \", \") + \"\".concat(infants, \" \").concat(selectNiceWord(infants, 'младенцы'));\n}\n\nfunction createCustomersString(namesValues, isUnified) {\n  var resultString;\n\n  if (isUnified) {\n    resultString = createUnifiedString(namesValues, 'гост|ь|я|ей');\n  } else {\n    resultString = createCustomersWithInfantsString(namesValues);\n  }\n\n  return resultString;\n}\n/**\r\n * Создание строки, содержащей суммарную информацию по дропдауну.\r\n * Формат строки зависит от типа дропдауна\r\n *\r\n * @param namesValues   массив пар имя-значение, из которых составляется строка\r\n * @param dropdownType  тип дропдауна\r\n * @returns {string}    результирующая строка\r\n */\n\n\nfunction createInputText(namesValues, dropdownType) {\n  var result = '';\n  if (areAllValuesZero(namesValues)) return result;\n\n  switch (dropdownType.name) {\n    case typeRooms:\n      {\n        result = createRoomsString(namesValues, dropdownType.isUnified);\n        break;\n      }\n\n    case typeCustomers:\n      {\n        result = createCustomersString(namesValues, dropdownType.isUnified);\n        break;\n      }\n\n    default:\n      {\n        var sum = namesValues.reduce(function (accumulator, nameValue) {\n          return accumulator + parseInt(nameValue.value, 10);\n        }, 0);\n        result += \"\".concat(sum, \" \\u0447\\u0435\\u0433\\u043E-\\u0442\\u043E\");\n        break;\n      }\n  }\n\n  return result;\n}\n\nfunction changeInputText(dropdown, namesValues, input) {\n  var dropdownType = getDropdownType(dropdown);\n  var newInputText = createInputText(namesValues, dropdownType);\n  $(input).val(newInputText);\n}\n/**\r\n * Поэлементное сравнение двух массивов имя-значение по значениям.\r\n * @param namesValues1  первый массив\r\n * @param namesValues2  второй массив\r\n * @returns {boolean}   одинаковы ли они\r\n */\n\n\nfunction areValuesEqual(namesValues1, namesValues2) {\n  return !namesValues2.some(function (nameValue, index) {\n    return namesValues1[index].value !== nameValue.value;\n  });\n}\n\nfunction manageControlsVisibility(oldNamesValues, namesValues, clearButton, confirmButton, buttonsContainer, areControlsEnabled, areValuesConfirmed) {\n  var clearVisibleClass = 'input__clear-button_visible';\n  var confirmVisibleClass = 'input__confirm-button_visible';\n  var containerVisibleClass = 'input__control-buttons-container_visible';\n  var areEmpty = areAllValuesZero(namesValues);\n\n  if (areEmpty) {\n    $(clearButton).removeClass(clearVisibleClass);\n  } else {\n    $(clearButton).addClass(clearVisibleClass);\n  }\n\n  var areEqual = areValuesEqual(namesValues, oldNamesValues);\n\n  if (areEqual && areValuesConfirmed) {\n    $(confirmButton).removeClass(confirmVisibleClass);\n  } else {\n    $(confirmButton).addClass(confirmVisibleClass);\n  }\n\n  var hasClearVisibleClass = $(clearButton).hasClass(clearVisibleClass);\n  var hasConfirmVisibleClass = $(confirmButton).hasClass(confirmVisibleClass);\n  var areControlsVisible = hasClearVisibleClass || hasConfirmVisibleClass;\n\n  if (areControlsVisible && areControlsEnabled) {\n    $(buttonsContainer).addClass(containerVisibleClass);\n  } else {\n    $(buttonsContainer).removeClass(containerVisibleClass);\n  }\n}\n\nfunction setSpinnerValues(namesValuesToSet, namesValuesToChange, $spinners, options) {\n  $spinners.each(function (i) {\n    var $currentSpinner = $($spinners[i]);\n\n    if (options.includes('array')) {\n      namesValuesToChange[i].value = namesValuesToSet[i].value;\n      $currentSpinner.spinner('value', namesValuesToSet[i].value);\n      (0, _input_type_spinner.disableButtonsAtExtremum)($currentSpinner, namesValuesToSet[i].value);\n    }\n\n    if (options.includes('value')) {\n      namesValuesToChange[i].value = namesValuesToSet;\n      $currentSpinner.spinner('value', namesValuesToSet);\n      (0, _input_type_spinner.disableButtonsAtExtremum)($currentSpinner, namesValuesToSet);\n    }\n  });\n}\n\nfunction clearSpinnersValues(namesValues, spinners) {\n  setSpinnerValues(0, namesValues, spinners, ['value']);\n}\n\nfunction dropdownOnChange(oldNamesValues, namesValues, spinners, clearButton, confirmButton, buttonsContainer, dropdown, input, areControlsEnabled, areValuesConfirmed) {\n  setSpinnerValues(oldNamesValues, namesValues, spinners, ['array']);\n  manageControlsVisibility(oldNamesValues, namesValues, clearButton, confirmButton, buttonsContainer, areControlsEnabled, areValuesConfirmed);\n  changeInputText(dropdown, namesValues, input);\n}\n\nfunction getInitialNamesValues($spinnerElements) {\n  var result = [];\n\n  function getNameValueFromSpinner() {\n    var $spinnerElement = $(this);\n    result.push({\n      name: $spinnerElement.attr('data-name'),\n      value: parseInt($spinnerElement.attr('value') ? $spinnerElement.attr('value') : 0, 10)\n    });\n  }\n\n  $spinnerElements.each(getNameValueFromSpinner);\n  return result;\n}\n\nvar dropdownVisibleClass = 'input__dropdown-list-wrapper_visible';\n\nfunction initDropdownInput(index, rootElement) {\n  var $inputWrapper = $(rootElement);\n  var $dropdown = $inputWrapper.children('.input__dropdown-list-wrapper_type_dropdown');\n  var $control = $inputWrapper.find('.input__control_type_dropdown');\n  var $spinnerValueElements = $inputWrapper.find('.input__value_type_spinner');\n  var $controlButtonsContainer = $inputWrapper.find('.input__control-buttons-container');\n  var $clearButton = $inputWrapper.find('.input__clear-button');\n  var $confirmButton = $inputWrapper.find('.input__confirm-button');\n  var areValuesConfirmed = !$inputWrapper.hasClass('input_type_dropdown-unaccepted');\n  var isOpened = $inputWrapper.hasClass('input_type_dropdown-opened');\n\n  if (isOpened) {\n    $dropdown.toggle('fade');\n    $dropdown.toggleClass(dropdownVisibleClass);\n  }\n\n  var areControlsEnabled = !$inputWrapper.hasClass('input_type_dropdown-pure');\n  var spinnersNameValue = getInitialNamesValues($spinnerValueElements);\n  var oldSpinnersNameValue = getInitialNamesValues($spinnerValueElements);\n  changeInputText($dropdown, spinnersNameValue, $control);\n  manageControlsVisibility(oldSpinnersNameValue, spinnersNameValue, $clearButton, $confirmButton, $controlButtonsContainer, areControlsEnabled, areValuesConfirmed);\n\n  function handleClearButtonClick() {\n    clearSpinnersValues(spinnersNameValue, $spinnerValueElements);\n    manageControlsVisibility(oldSpinnersNameValue, spinnersNameValue, $clearButton, $confirmButton, $controlButtonsContainer, areControlsEnabled, areValuesConfirmed);\n    changeInputText($dropdown, spinnersNameValue, $control);\n  }\n\n  $clearButton.click(handleClearButtonClick);\n\n  function handleConfirmButtonClick() {\n    if (!isOpened) {\n      $control.removeClass('input__control_focused');\n      $dropdown.toggle('fade');\n      $dropdown.toggleClass(dropdownVisibleClass);\n    }\n\n    areValuesConfirmed = true;\n    oldSpinnersNameValue = getCurrentNamesValues($spinnerValueElements);\n    manageControlsVisibility(oldSpinnersNameValue, spinnersNameValue, $clearButton, $confirmButton, $controlButtonsContainer, areControlsEnabled, areValuesConfirmed);\n  }\n\n  $confirmButton.click(handleConfirmButtonClick); // on spin\n\n  $spinnerValueElements.each(function (i) {\n    var $spinner = $($spinnerValueElements[i]);\n\n    function handleSpin(event, ui) {\n      spinnersNameValue[$spinner.attr('data-index')].value = ui.value;\n      changeInputText($dropdown, spinnersNameValue, $control);\n      manageControlsVisibility(oldSpinnersNameValue, spinnersNameValue, $clearButton, $confirmButton, $controlButtonsContainer, areControlsEnabled, areValuesConfirmed);\n    }\n\n    $spinner.on('spin', handleSpin);\n  });\n  $dropdown.position({\n    my: 'center',\n    at: 'center',\n    of: $control\n  });\n  var clickedElement;\n  $(document).click(function (event) {\n    clickedElement = $(event.target); // если клик происходит не в дропдауне\n\n    if (!$.contains($inputWrapper.get(0), clickedElement.get(0))) {\n      // и дропдаун отображается\n      if ($dropdown.hasClass(dropdownVisibleClass)) {\n        if (!isOpened) {\n          $dropdown.toggle('fade');\n          $dropdown.toggleClass(dropdownVisibleClass);\n          $control.removeClass('input__control_focused');\n        }\n\n        setSpinnerValues(oldSpinnersNameValue, spinnersNameValue, $spinnerValueElements, ['array']);\n        manageControlsVisibility(oldSpinnersNameValue, spinnersNameValue, $clearButton, $confirmButton, $controlButtonsContainer, areControlsEnabled, areValuesConfirmed);\n        changeInputText($dropdown, spinnersNameValue, $control);\n      }\n    }\n  });\n  $control.click(function () {\n    if (!isOpened) {\n      console.log('hey');\n      $control.toggleClass('input__control_focused');\n      $dropdown.toggle('fade');\n      $dropdown.toggleClass(dropdownVisibleClass);\n    }\n\n    if (!$dropdown.hasClass(dropdownVisibleClass)) {\n      dropdownOnChange(oldSpinnersNameValue, spinnersNameValue, $spinnerValueElements, $clearButton, $confirmButton, $controlButtonsContainer, $dropdown, $control, areControlsEnabled, areValuesConfirmed);\n    }\n  });\n}\n\nfunction initDropdowns() {\n  var $dropdowns = $('.input_type_dropdown');\n  $dropdowns.each(initDropdownInput);\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/input/_type/_dropdown/input__list_type_dropdown.js?");

/***/ }),

/***/ "./src/blocks/input/_type/_dropdown/input__list_type_dropdown.scss":
/*!*************************************************************************!*\
  !*** ./src/blocks/input/_type/_dropdown/input__list_type_dropdown.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_type/_dropdown/input__list_type_dropdown.scss?");

/***/ }),

/***/ "./src/blocks/input/_type/_masked/input_masked.js":
/*!********************************************************!*\
  !*** ./src/blocks/input/_type/_masked/input_masked.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\n__webpack_require__(/*! ../../../../../vendor/jquery.maskedinput/src/jquery.maskedinput */ \"./vendor/jquery.maskedinput/src/jquery.maskedinput.js\");\n\n/* eslint-disable no-undef */\n// jquery объявлена глобально вебпаком\nvar $document = $(document);\n$document.ready(function () {\n  $.mask.definitions.m = '[012]';\n  $.mask.definitions.d = '[0123]';\n  var $maskedInput = $('.input__control_masked');\n  $maskedInput.mask('99.99.9999', {\n    placeholder: 'ДД.ММ.ГГГГ',\n    autoclear: false\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/input/_type/_masked/input_masked.js?");

/***/ }),

/***/ "./src/blocks/input/_type/_masked/input_masked.scss":
/*!**********************************************************!*\
  !*** ./src/blocks/input/_type/_masked/input_masked.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_type/_masked/input_masked.scss?");

/***/ }),

/***/ "./src/blocks/input/_type/_spinner/input_type_spinner.js":
/*!***************************************************************!*\
  !*** ./src/blocks/input/_type/_spinner/input_type_spinner.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.disableButtonsAtExtremum = disableButtonsAtExtremum;\nexports.increaseButtonClasses = exports.decreaseButtonClasses = void 0;\n\n__webpack_require__(/*! jquery-ui/ui/widgets/spinner */ \"./node_modules/jquery-ui/ui/widgets/spinner.js\");\n\n/* eslint-disable no-undef,no-underscore-dangle */\n// jquery импортирована вебпаком, функции с подчеркиванием - часть плагина\nvar decreaseButtonClasses = 'input__dropdown-decrease_type_dropdown input__button_type_spinner ui-spinner-button ui-spinner-down';\nexports.decreaseButtonClasses = decreaseButtonClasses;\nvar increaseButtonClasses = 'input__dropdown-increase_type_dropdown input__button_type_spinner ui-spinner-button ui-spinner-up'; // морф, чтобы кнопки были по бокам\n\nexports.increaseButtonClasses = increaseButtonClasses;\n$.widget('ui.spinner', $.ui.spinner, {\n  _enhance: function _enhance() {\n    this.uiSpinner = this.element.attr('autocomplete', 'off').wrap(this._uiSpinnerHtml()).parent() // Add buttons\n    .prepend(this._buttonHtml()[0]).append(this._buttonHtml()[1]);\n  },\n  _buttonHtml: function _buttonHtml() {\n    return [\"<button class=\\\"\".concat(decreaseButtonClasses, \"\\\">-</button>\"), \"<button class=\\\"\".concat(increaseButtonClasses, \"\\\">+</button>\")];\n  },\n  // обёртка своя есть\n  _uiSpinnerHtml: function _uiSpinnerHtml() {\n    return '';\n  }\n});\n\nfunction disableButtonsAtExtremum($spinner, currentValue) {\n  var disabledButtonClass = 'input__button_disabled';\n  var min = $spinner.attr('data-min');\n  var max = $spinner.attr('data-max');\n  var $decreaseButton = $spinner.siblings('.input__dropdown-decrease_type_dropdown');\n  var $increaseButton = $spinner.siblings('.input__dropdown-increase_type_dropdown');\n\n  if (currentValue <= min) {\n    $decreaseButton.addClass(disabledButtonClass);\n  } else {\n    $decreaseButton.removeClass(disabledButtonClass);\n  }\n\n  if (currentValue >= max) {\n    $increaseButton.addClass(disabledButtonClass);\n  } else {\n    $increaseButton.removeClass(disabledButtonClass);\n  }\n}\n\nvar $dropdowns = $('.input_type_dropdown');\n\nfunction findSpinnersAndPassData(whereToSearch) {\n  var $spinners = $(whereToSearch).find('.input__value_type_spinner');\n  $spinners.spinner({\n    min: $spinners.attr('data-min'),\n    max: $spinners.attr('data-max')\n  });\n  return $spinners;\n}\n\nfunction initSpinner() {\n  var $spinner = $(this);\n  var spinnerValue = $spinner.attr('value');\n  disableButtonsAtExtremum($spinner, spinnerValue);\n\n  function handleOnSpin(event, ui) {\n    disableButtonsAtExtremum($spinner, ui.value);\n  }\n\n  $spinner.on('spin', handleOnSpin);\n}\n\nfunction findAndInitSpinners() {\n  var $spinners = findSpinnersAndPassData(this);\n  $spinners.each(initSpinner);\n}\n\n$dropdowns.each(findAndInitSpinners);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/input/_type/_spinner/input_type_spinner.js?");

/***/ }),

/***/ "./src/blocks/input/_type/_spinner/input_type_spinner.scss":
/*!*****************************************************************!*\
  !*** ./src/blocks/input/_type/_spinner/input_type_spinner.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_type/_spinner/input_type_spinner.scss?");

/***/ }),

/***/ "./src/blocks/input/_type/input_type_text.scss":
/*!*****************************************************!*\
  !*** ./src/blocks/input/_type/input_type_text.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_type/input_type_text.scss?");

/***/ }),

/***/ "./src/blocks/input/_width/input_width_medium.scss":
/*!*********************************************************!*\
  !*** ./src/blocks/input/_width/input_width_medium.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_width/input_width_medium.scss?");

/***/ }),

/***/ "./src/blocks/input/_width/input_width_narrow.scss":
/*!*********************************************************!*\
  !*** ./src/blocks/input/_width/input_width_narrow.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_width/input_width_narrow.scss?");

/***/ }),

/***/ "./src/blocks/input/_width/input_width_preMedium.scss":
/*!************************************************************!*\
  !*** ./src/blocks/input/_width/input_width_preMedium.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_width/input_width_preMedium.scss?");

/***/ }),

/***/ "./src/blocks/input/input.js":
/*!***********************************!*\
  !*** ./src/blocks/input/input.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./input.scss */ \"./src/blocks/input/input.scss\");\n\n__webpack_require__(/*! ./_type/_masked/input_masked.scss */ \"./src/blocks/input/_type/_masked/input_masked.scss\");\n\n__webpack_require__(/*! ./_type/_masked/input_masked */ \"./src/blocks/input/_type/_masked/input_masked.js\");\n\n__webpack_require__(/*! ./_focused/input_focused.scss */ \"./src/blocks/input/_focused/input_focused.scss\");\n\n__webpack_require__(/*! ./_width/input_width_narrow.scss */ \"./src/blocks/input/_width/input_width_narrow.scss\");\n\n__webpack_require__(/*! ./_width/input_width_preMedium.scss */ \"./src/blocks/input/_width/input_width_preMedium.scss\");\n\n__webpack_require__(/*! ./_width/input_width_medium.scss */ \"./src/blocks/input/_width/input_width_medium.scss\");\n\n__webpack_require__(/*! ./_type/input_type_text.scss */ \"./src/blocks/input/_type/input_type_text.scss\");\n\n__webpack_require__(/*! ./_type/_datepicker/input_type_datepicker */ \"./src/blocks/input/_type/_datepicker/input_type_datepicker.js\");\n\n__webpack_require__(/*! ./_type/_datepicker/input_type_datepicker.scss */ \"./src/blocks/input/_type/_datepicker/input_type_datepicker.scss\");\n\n__webpack_require__(/*! ./_type/_datepicker/_inline/datepicker_inline.scss */ \"./src/blocks/input/_type/_datepicker/_inline/datepicker_inline.scss\");\n\n__webpack_require__(/*! ./_type/_dropdown/input__list_type_dropdown */ \"./src/blocks/input/_type/_dropdown/input__list_type_dropdown.js\");\n\n__webpack_require__(/*! ./_type/_dropdown/input__list_type_dropdown.scss */ \"./src/blocks/input/_type/_dropdown/input__list_type_dropdown.scss\");\n\n__webpack_require__(/*! ./_type/_spinner/input_type_spinner */ \"./src/blocks/input/_type/_spinner/input_type_spinner.js\");\n\n__webpack_require__(/*! ./_type/_spinner/input_type_spinner.scss */ \"./src/blocks/input/_type/_spinner/input_type_spinner.scss\");\n\n__webpack_require__(/*! ./_decoration/_expand-arrow/input_decoration_expand-arrow.scss */ \"./src/blocks/input/_decoration/_expand-arrow/input_decoration_expand-arrow.scss\");\n\n__webpack_require__(/*! ./_decoration/_enter-arrow/input_decoration_enter-arrow.scss */ \"./src/blocks/input/_decoration/_enter-arrow/input_decoration_enter-arrow.scss\");\n\n//# sourceURL=webpack:///./src/blocks/input/input.js?");

/***/ }),

/***/ "./src/blocks/input/input.scss":
/*!*************************************!*\
  !*** ./src/blocks/input/input.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/input.scss?");

/***/ }),

/***/ "./src/blocks/text/_type/text_type_item-title.scss":
/*!*********************************************************!*\
  !*** ./src/blocks/text/_type/text_type_item-title.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/text/_type/text_type_item-title.scss?");

/***/ }),

/***/ "./src/blocks/text/_type/text_type_label-CTA.scss":
/*!********************************************************!*\
  !*** ./src/blocks/text/_type/text_type_label-CTA.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/text/_type/text_type_label-CTA.scss?");

/***/ }),

/***/ "./src/blocks/text/_type/text_type_regular.scss":
/*!******************************************************!*\
  !*** ./src/blocks/text/_type/text_type_regular.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/text/_type/text_type_regular.scss?");

/***/ }),

/***/ "./src/blocks/text/_type/text_type_widget-title.scss":
/*!***********************************************************!*\
  !*** ./src/blocks/text/_type/text_type_widget-title.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/text/_type/text_type_widget-title.scss?");

/***/ }),

/***/ "./src/blocks/text/text.js":
/*!*********************************!*\
  !*** ./src/blocks/text/text.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_type/text_type_item-title.scss */ \"./src/blocks/text/_type/text_type_item-title.scss\");\n\n__webpack_require__(/*! ./_type/text_type_label-CTA.scss */ \"./src/blocks/text/_type/text_type_label-CTA.scss\");\n\n__webpack_require__(/*! ./_type/text_type_regular.scss */ \"./src/blocks/text/_type/text_type_regular.scss\");\n\n__webpack_require__(/*! ./_type/text_type_widget-title.scss */ \"./src/blocks/text/_type/text_type_widget-title.scss\");\n\n//# sourceURL=webpack:///./src/blocks/text/text.js?");

/***/ }),

/***/ "./src/blocks/two-calendar-range-picker/two-calendar-range-picker.js":
/*!***************************************************************************!*\
  !*** ./src/blocks/two-calendar-range-picker/two-calendar-range-picker.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.setInitialDates = setInitialDates;\nexports.initTwoCalendarPicker = initTwoCalendarPicker;\n\nvar _input_type_datepicker = __webpack_require__(/*! ../input/_type/_datepicker/input_type_datepicker */ \"./src/blocks/input/_type/_datepicker/input_type_datepicker.js\");\n\n__webpack_require__(/*! ./two-calendar-range-picker.scss */ \"./src/blocks/two-calendar-range-picker/two-calendar-range-picker.scss\");\n\n/* eslint-disable no-undef */\n// jquery подключена вебпаком\nvar isSecondAssignStarted = false;\n\nfunction handleOnSelect(formattedDate, datepicker, otherDatepicker, input, otherInput, number) {\n  if (isSecondAssignStarted) return;\n  var otherNumber = 1 - number;\n  var newDates = datepicker.selectedDates; // если дат в пикере больше одной, то перезаписываем данные в инпуте,\n  // если одна - оставляем дефолтное поведение\n  // иначе второй пикер будет очищать оба при фокусе на нём\n\n  if (datepicker.selectedDates.length > 1) {\n    $(input).val(newDates[number].toLocaleDateString());\n  } else {\n    datepicker.update({\n      dateFormat: ''\n    });\n    otherDatepicker.update({\n      dateFormat: 'ДД.ММ.ГГГГ'\n    });\n  }\n\n  isSecondAssignStarted = true;\n  otherDatepicker.clear();\n  otherDatepicker.selectDate(datepicker.selectedDates);\n  isSecondAssignStarted = false;\n\n  if (datepicker.selectedDates.length > 1) {\n    $(otherInput).val(newDates[otherNumber].toLocaleDateString());\n  } // вызов ивента вручную, поскольку автоматически этого не происходит\n  // (отслеживание изменения инпута используется в booking-card)\n\n\n  $(input).change();\n}\n\nfunction datepickerAddOnSelect(datepicker, otherDatepicker, input, otherInput, number) {\n  datepicker.update({\n    dateFormat: '',\n    multipleDatesSeparator: ',',\n    onSelect: function onSelect(formattedDate) {\n      handleOnSelect(formattedDate, datepicker, otherDatepicker, input, otherInput, number);\n    }\n  });\n}\n\nfunction getInitDates($rangePicker) {\n  var dates = {};\n\n  if ($rangePicker.attr('data-firstdate')) {\n    dates.firstDate = (0, _input_type_datepicker.parseAttrToDate)($rangePicker.attr('data-firstdate'));\n  }\n\n  if ($rangePicker.attr('data-seconddate')) {\n    dates.secondDate = (0, _input_type_datepicker.parseAttrToDate)($rangePicker.attr('data-seconddate'));\n  }\n\n  return dates;\n}\n\nfunction setInitialDates($rangePicker, $input) {\n  var initDates = getInitDates($rangePicker);\n  (0, _input_type_datepicker.setDates)($input, Object.values(initDates));\n}\n\nfunction safeDatepickerInit($datepicker, $datepickerControl) {\n  if (!$datepickerControl.data('datepicker')) {\n    $datepicker.each(_input_type_datepicker.initDatepickerInput);\n    return $datepickerControl.data('datepicker');\n  }\n\n  return $datepickerControl.data('datepicker');\n}\n\nfunction initTwoCalendarPicker(index, element) {\n  var $twoCalendarRange = $(element);\n  var $firstInput = $($twoCalendarRange.find('.two-calendar-range-picker__first-datepicker')[0]);\n  var $firstInputControl = $($firstInput.find('.input__control_type_datepicker')[0]);\n  var firstDatepicker = safeDatepickerInit($firstInput, $firstInputControl);\n  var $secondInput = $($twoCalendarRange.find('.two-calendar-range-picker__second-datepicker')[0]);\n  var $secondInputControl = $($secondInput.find('.input__control_type_datepicker')[0]);\n  var secondDatepicker = safeDatepickerInit($secondInput, $secondInputControl);\n  if (!(firstDatepicker && secondDatepicker)) return;\n  firstDatepicker.update({\n    position: 'bottom left'\n  });\n  secondDatepicker.update({\n    position: 'bottom right'\n  });\n  datepickerAddOnSelect(firstDatepicker, secondDatepicker, $firstInputControl, $secondInputControl, 0);\n  datepickerAddOnSelect(secondDatepicker, firstDatepicker, $secondInputControl, $firstInputControl, 1);\n  var initDates = getInitDates($twoCalendarRange);\n\n  if (initDates.firstDate) {\n    firstDatepicker.selectDate(initDates.firstDate);\n  }\n\n  if (initDates.secondDate) {\n    secondDatepicker.selectDate(initDates.secondDate);\n  }\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/two-calendar-range-picker/two-calendar-range-picker.js?");

/***/ }),

/***/ "./src/blocks/two-calendar-range-picker/two-calendar-range-picker.scss":
/*!*****************************************************************************!*\
  !*** ./src/blocks/two-calendar-range-picker/two-calendar-range-picker.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/two-calendar-range-picker/two-calendar-range-picker.scss?");

/***/ }),

/***/ "./src/cards/find-room-card/find-room-card.js":
/*!****************************************************!*\
  !*** ./src/cards/find-room-card/find-room-card.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = initFindRoomCard;\n\n__webpack_require__(/*! ./find-room-card.scss */ \"./src/cards/find-room-card/find-room-card.scss\");\n\n__webpack_require__(/*! ../../blocks/input/input */ \"./src/blocks/input/input.js\");\n\nvar _twoCalendarRangePicker = __webpack_require__(/*! ../../blocks/two-calendar-range-picker/two-calendar-range-picker */ \"./src/blocks/two-calendar-range-picker/two-calendar-range-picker.js\");\n\nvar _input__list_type_dropdown = __webpack_require__(/*! ../../blocks/input/_type/_dropdown/input__list_type_dropdown */ \"./src/blocks/input/_type/_dropdown/input__list_type_dropdown.js\");\n\n/* eslint-disable no-undef */\n// jquery подключена вебпаком\nfunction initFindRoomCard(index, cardElement) {\n  var $card = $(cardElement);\n  var $twoCalendarPickers = $card.find('.two-calendar-range-picker');\n  $twoCalendarPickers.each(_twoCalendarRangePicker.initTwoCalendarPicker);\n  var $dropdowns = $card.find('.input_type_dropdown');\n  $dropdowns.each(_input__list_type_dropdown.initDropdownInput);\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/cards/find-room-card/find-room-card.js?");

/***/ }),

/***/ "./src/cards/find-room-card/find-room-card.scss":
/*!******************************************************!*\
  !*** ./src/cards/find-room-card/find-room-card.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/cards/find-room-card/find-room-card.scss?");

/***/ }),

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n\n__webpack_require__(/*! ./common/fonts.scss */ \"./src/common/fonts.scss\");\n\n__webpack_require__(/*! ./common/functions */ \"./src/common/functions.js\");\n\n__webpack_require__(/*! ./blocks/text/text */ \"./src/blocks/text/text.js\");\n\n__webpack_require__(/*! ./page-elements/footer/footer */ \"./src/page-elements/footer/footer.js\");\n\n__webpack_require__(/*! ./page-elements/header/header */ \"./src/page-elements/header/header.js\");\n\n//# sourceURL=webpack:///./src/common.js?");

/***/ }),

/***/ "./src/common/fonts.scss":
/*!*******************************!*\
  !*** ./src/common/fonts.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common/fonts.scss?");

/***/ }),

/***/ "./src/common/functions.js":
/*!*********************************!*\
  !*** ./src/common/functions.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(jQuery) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.formatNumber = formatNumber;\nexports.checkDateArraysEquality = checkDateArraysEquality;\nexports.ruDeclination = ruDeclination;\nexports.copyArrayOfObjects = copyArrayOfObjects;\nexports.clamp = clamp;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* eslint-disable no-undef */\n// jquery объявлена вебпаком\n\n/**\r\n * добавляет пробелы на каждом третьем разряде числа\r\n * @param number форматируемое число\r\n * @param {string} symbol символ для вставки между триадами\r\n * @returns {string} итоговое число в виде строки\r\n */\nfunction formatNumber(number, symbol) {\n  if (Number.isNaN(number * 1)) {\n    return 'not number';\n  }\n\n  var stringNum = number.toString();\n  var formattedNum = [];\n\n  for (var i = stringNum.length - 1; i >= 0; i -= 1) {\n    if ((stringNum.length - i) % 3 === 0 && stringNum.length - i > 0) {\n      formattedNum[i] = \"\".concat(symbol).concat(stringNum[i]);\n    } else {\n      formattedNum[i] = stringNum[i];\n    }\n  }\n\n  return formattedNum.join('');\n}\n\nfunction checkDateArraysEquality(first, second) {\n  if (first.length !== second.length) return false;\n  return !first.some(function (value, index) {\n    var _second$index;\n\n    return value.getTime() !== ((_second$index = second[index]) === null || _second$index === void 0 ? void 0 : _second$index.getTime());\n  });\n}\n/**\r\n * Функция для склонения русских слов\r\n * Пример использования: ruDeclination(5,'комментари|й|я|ев')\r\n *\r\n * @author Павел Белоусов <pafnuty10@gmail.com>\r\n *\r\n * @param      {number}  number  Число, для которого будет расчитано окончание\r\n * @param      {string}  words   Слово и варианты окончаний для 1|2|100\r\n * (1 комментарий, 2 комментария, 100 комментариев)\r\n * @return     {string}  Cлово с правильным окончанием\r\n */\n\n\nfunction ruDeclination(number, words) {\n  var w = words.split('|');\n  var n = Math.abs(number); // abs на случай отрицательного значения\n\n  var firstEndingCondition = n % 10 === 1 && n % 100 !== 11;\n  var secondEndingCondition = n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20);\n\n  if (firstEndingCondition) {\n    return w[0] + w[1];\n  }\n\n  if (secondEndingCondition) {\n    return w[0] + w[2];\n  }\n\n  return w[0] + w[3];\n}\n/**\r\n * Возвращает HTML-код, включая сам объект, а не только его содержимое\r\n * @returns {jQuery}\r\n */\n\n\nfunction outerHTML() {\n  return jQuery('<div />').append(this.eq(0).clone()).html();\n} // eslint-disable-next-line no-undef\n\n\njQuery.fn.outerHTML = outerHTML;\n/**\r\n * Копирует простые объекты (без вложенных ссылочных типов) в новый экземпляр\r\n * @param arrayOfObj [{}, {}...] исходный массив объектов\r\n * @returns {[]} новый массив объектов\r\n */\n\nfunction copyArrayOfObjects(arrayOfObj) {\n  return arrayOfObj.map(function (obj) {\n    return _objectSpread({}, obj);\n  });\n}\n\nfunction clamp(value, min, max) {\n  return Math.min(Math.max(value, min), max);\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/common/functions.js?");

/***/ }),

/***/ "./src/page-elements/footer/_type/_large/footer_type_large.scss":
/*!**********************************************************************!*\
  !*** ./src/page-elements/footer/_type/_large/footer_type_large.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/page-elements/footer/_type/_large/footer_type_large.scss?");

/***/ }),

/***/ "./src/page-elements/footer/_type/_simple/footer_type_simple.scss":
/*!************************************************************************!*\
  !*** ./src/page-elements/footer/_type/_simple/footer_type_simple.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/page-elements/footer/_type/_simple/footer_type_simple.scss?");

/***/ }),

/***/ "./src/page-elements/footer/footer.js":
/*!********************************************!*\
  !*** ./src/page-elements/footer/footer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../../blocks/input/input */ \"./src/blocks/input/input.js\");\n\n__webpack_require__(/*! ./footer.scss */ \"./src/page-elements/footer/footer.scss\");\n\n__webpack_require__(/*! ./_type/_large/footer_type_large.scss */ \"./src/page-elements/footer/_type/_large/footer_type_large.scss\");\n\n__webpack_require__(/*! ./_type/_simple/footer_type_simple.scss */ \"./src/page-elements/footer/_type/_simple/footer_type_simple.scss\");\n\n__webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ \"./node_modules/@fortawesome/fontawesome-free/css/all.css\");\n\n//# sourceURL=webpack:///./src/page-elements/footer/footer.js?");

/***/ }),

/***/ "./src/page-elements/footer/footer.scss":
/*!**********************************************!*\
  !*** ./src/page-elements/footer/footer.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/page-elements/footer/footer.scss?");

/***/ }),

/***/ "./src/page-elements/header/__menu-item/header__menu-item.js":
/*!*******************************************************************!*\
  !*** ./src/page-elements/header/__menu-item/header__menu-item.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./header__menu-item.scss */ \"./src/page-elements/header/__menu-item/header__menu-item.scss\");\n\n//# sourceURL=webpack:///./src/page-elements/header/__menu-item/header__menu-item.js?");

/***/ }),

/***/ "./src/page-elements/header/__menu-item/header__menu-item.scss":
/*!*********************************************************************!*\
  !*** ./src/page-elements/header/__menu-item/header__menu-item.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/page-elements/header/__menu-item/header__menu-item.scss?");

/***/ }),

/***/ "./src/page-elements/header/_narrow/header__narrow.scss":
/*!**************************************************************!*\
  !*** ./src/page-elements/header/_narrow/header__narrow.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/page-elements/header/_narrow/header__narrow.scss?");

/***/ }),

/***/ "./src/page-elements/header/header.js":
/*!********************************************!*\
  !*** ./src/page-elements/header/header.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\n__webpack_require__(/*! ../../blocks/button/button */ \"./src/blocks/button/button.js\");\n\n__webpack_require__(/*! ./__menu-item/header__menu-item */ \"./src/page-elements/header/__menu-item/header__menu-item.js\");\n\n__webpack_require__(/*! ./header.scss */ \"./src/page-elements/header/header.scss\");\n\n__webpack_require__(/*! ./_narrow/header__narrow.scss */ \"./src/page-elements/header/_narrow/header__narrow.scss\");\n\n/* eslint-disable no-undef */\n// jquery подключается вебпаком\nvar indexURL = 'landing-page.html';\nvar $logoLink = $('.header__logo-link');\n$logoLink.attr('href', indexURL);\nvar registrationLoginURL = 'registration-login.html';\nvar loginURL = \"\".concat(registrationLoginURL, \"?login=true\");\nvar registerURL = \"\".concat(registrationLoginURL, \"?login=false\");\nvar $registerButton = $('.header__register-button');\n$registerButton.attr('href', registerURL);\nvar $loginButton = $('.header__login-button');\n$loginButton.attr('href', loginURL);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/page-elements/header/header.js?");

/***/ }),

/***/ "./src/page-elements/header/header.scss":
/*!**********************************************!*\
  !*** ./src/page-elements/header/header.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/page-elements/header/header.scss?");

/***/ }),

/***/ "./src/site-pages/landing-page/landing-page.js":
/*!*****************************************************!*\
  !*** ./src/site-pages/landing-page/landing-page.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\n__webpack_require__(/*! ../../common */ \"./src/common.js\");\n\nvar _findRoomCard = _interopRequireDefault(__webpack_require__(/*! ../../cards/find-room-card/find-room-card */ \"./src/cards/find-room-card/find-room-card.js\"));\n\n__webpack_require__(/*! ./landing-page.scss */ \"./src/site-pages/landing-page/landing-page.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n/* eslint-disable no-undef */\n// jquery подключена вебпаком\nvar imagePaths = [];\nimagePaths.push(__webpack_require__(/*! ../../assets/images/room-big-1.jpg */ \"./src/assets/images/room-big-1.jpg\"));\nimagePaths.push(__webpack_require__(/*! ../../assets/images/room-big-2.jpg */ \"./src/assets/images/room-big-2.jpg\"));\nimagePaths.push(__webpack_require__(/*! ../../assets/images/room-big-3.jpg */ \"./src/assets/images/room-big-3.jpg\"));\nvar $roomContainers = $('.landing-page__room-container');\n\nfunction initRoomContainer() {\n  var $container = $(this);\n  var randomNum = Math.floor(Math.random() * imagePaths.length);\n  $container.css('background-image', \"url(\".concat(imagePaths[randomNum], \")\"));\n}\n\n$roomContainers.each(initRoomContainer);\nvar $findRoomCardButton = $('.find-room-card__button');\n$findRoomCardButton.click(function () {\n  window.location.href = 'search-room.html';\n});\nvar $findRoomCards = $('.find-room-card');\n$findRoomCards.each(_findRoomCard[\"default\"]);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/site-pages/landing-page/landing-page.js?");

/***/ }),

/***/ "./src/site-pages/landing-page/landing-page.scss":
/*!*******************************************************!*\
  !*** ./src/site-pages/landing-page/landing-page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/site-pages/landing-page/landing-page.scss?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles.scss?");

/***/ }),

/***/ "./vendor/jquery.maskedinput/src/jquery.maskedinput.js":
/*!*************************************************************!*\
  !*** ./vendor/jquery.maskedinput/src/jquery.maskedinput.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n(function (factory) {\n  if (true) {\n    // AMD. Register as an anonymous module.\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n})(function ($) {\n  var ua = navigator.userAgent,\n      iPhone = /iphone/i.test(ua),\n      chrome = /chrome/i.test(ua),\n      android = /android/i.test(ua),\n      caretTimeoutId;\n  $.mask = {\n    //Predefined character definitions\n    definitions: {\n      '9': \"[0-9]\",\n      'a': \"[A-Za-z]\",\n      '*': \"[A-Za-z0-9]\"\n    },\n    autoclear: true,\n    dataName: \"rawMaskFn\",\n    placeholder: '_'\n  };\n  $.fn.extend({\n    //Helper Function for Caret positioning\n    caret: function caret(begin, end) {\n      var range;\n\n      if (this.length === 0 || this.is(\":hidden\") || this.get(0) !== document.activeElement) {\n        return;\n      }\n\n      if (typeof begin == 'number') {\n        end = typeof end === 'number' ? end : begin;\n        return this.each(function () {\n          if (this.setSelectionRange) {\n            this.setSelectionRange(begin, end);\n          } else if (this.createTextRange) {\n            range = this.createTextRange();\n            range.collapse(true);\n            range.moveEnd('character', end);\n            range.moveStart('character', begin);\n            range.select();\n          }\n        });\n      } else {\n        if (this[0].setSelectionRange) {\n          begin = this[0].selectionStart;\n          end = this[0].selectionEnd;\n        } else if (document.selection && document.selection.createRange) {\n          range = document.selection.createRange();\n          begin = 0 - range.duplicate().moveStart('character', -100000);\n          end = begin + range.text.length;\n        }\n\n        return {\n          begin: begin,\n          end: end\n        };\n      }\n    },\n    unmask: function unmask() {\n      return this.trigger(\"unmask\");\n    },\n    mask: function mask(_mask, settings) {\n      var input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;\n\n      if (!_mask && this.length > 0) {\n        input = $(this[0]);\n        var fn = input.data($.mask.dataName);\n        return fn ? fn() : undefined;\n      }\n\n      settings = $.extend({\n        autoclear: $.mask.autoclear,\n        placeholder: $.mask.placeholder,\n        // Load default placeholder\n        completed: null\n      }, settings);\n      defs = $.mask.definitions;\n      tests = [];\n      partialPosition = len = _mask.length;\n      firstNonMaskPos = null;\n      _mask = String(_mask);\n      $.each(_mask.split(\"\"), function (i, c) {\n        if (c == '?') {\n          len--;\n          partialPosition = i;\n        } else if (defs[c]) {\n          tests.push(new RegExp(defs[c]));\n\n          if (firstNonMaskPos === null) {\n            firstNonMaskPos = tests.length - 1;\n          }\n\n          if (i < partialPosition) {\n            lastRequiredNonMaskPos = tests.length - 1;\n          }\n        } else {\n          tests.push(null);\n        }\n      });\n      return this.trigger(\"unmask\").each(function () {\n        var input = $(this),\n            buffer = $.map(_mask.split(\"\"), function (c, i) {\n          if (c != '?') {\n            return defs[c] ? getPlaceholder(i) : c;\n          }\n        }),\n            defaultBuffer = buffer.join(''),\n            focusText = input.val();\n\n        function tryFireCompleted() {\n          if (!settings.completed) {\n            return;\n          }\n\n          for (var i = firstNonMaskPos; i <= lastRequiredNonMaskPos; i++) {\n            if (tests[i] && buffer[i] === getPlaceholder(i)) {\n              return;\n            }\n          }\n\n          settings.completed.call(input);\n        }\n\n        function getPlaceholder(i) {\n          if (i < settings.placeholder.length) return settings.placeholder.charAt(i);\n          return settings.placeholder.charAt(0);\n        }\n\n        function seekNext(pos) {\n          while (++pos < len && !tests[pos]) {\n            ;\n          }\n\n          return pos;\n        }\n\n        function seekPrev(pos) {\n          while (--pos >= 0 && !tests[pos]) {\n            ;\n          }\n\n          return pos;\n        }\n\n        function shiftL(begin, end) {\n          var i, j;\n\n          if (begin < 0) {\n            return;\n          }\n\n          for (i = begin, j = seekNext(end); i < len; i++) {\n            if (tests[i]) {\n              if (j < len && tests[i].test(buffer[j])) {\n                buffer[i] = buffer[j];\n                buffer[j] = getPlaceholder(j);\n              } else {\n                break;\n              }\n\n              j = seekNext(j);\n            }\n          }\n\n          writeBuffer();\n          input.caret(Math.max(firstNonMaskPos, begin));\n        }\n\n        function shiftR(pos) {\n          var i, c, j, t;\n\n          for (i = pos, c = getPlaceholder(pos); i < len; i++) {\n            if (tests[i]) {\n              j = seekNext(i);\n              t = buffer[i];\n              buffer[i] = c;\n\n              if (j < len && tests[j].test(t)) {\n                c = t;\n              } else {\n                break;\n              }\n            }\n          }\n        }\n\n        function androidInputEvent(e) {\n          var curVal = input.val();\n          var pos = input.caret();\n\n          if (oldVal && oldVal.length && oldVal.length > curVal.length) {\n            // a deletion or backspace happened\n            checkVal(true);\n\n            while (pos.begin > 0 && !tests[pos.begin - 1]) {\n              pos.begin--;\n            }\n\n            if (pos.begin === 0) {\n              while (pos.begin < firstNonMaskPos && !tests[pos.begin]) {\n                pos.begin++;\n              }\n            }\n\n            input.caret(pos.begin, pos.begin);\n          } else {\n            var pos2 = checkVal(true);\n            var lastEnteredValue = curVal.charAt(pos.begin);\n\n            if (pos.begin < len) {\n              if (!tests[pos.begin]) {\n                pos.begin++;\n\n                if (tests[pos.begin].test(lastEnteredValue)) {\n                  pos.begin++;\n                }\n              } else {\n                if (tests[pos.begin].test(lastEnteredValue)) {\n                  pos.begin++;\n                }\n              }\n            }\n\n            input.caret(pos.begin, pos.begin);\n          }\n\n          tryFireCompleted();\n        }\n\n        function blurEvent(e) {\n          checkVal();\n          if (input.val() != focusText) input.change();\n        }\n\n        function keydownEvent(e) {\n          if (input.prop(\"readonly\")) {\n            return;\n          }\n\n          var k = e.which || e.keyCode,\n              pos,\n              begin,\n              end;\n          oldVal = input.val(); //backspace, delete, and escape get special treatment\n\n          if (k === 8 || k === 46 || iPhone && k === 127) {\n            pos = input.caret();\n            begin = pos.begin;\n            end = pos.end;\n\n            if (end - begin === 0) {\n              begin = k !== 46 ? seekPrev(begin) : end = seekNext(begin - 1);\n              end = k === 46 ? seekNext(end) : end;\n            }\n\n            clearBuffer(begin, end);\n            shiftL(begin, end - 1);\n            e.preventDefault();\n          } else if (k === 13) {\n            // enter\n            blurEvent.call(this, e);\n          } else if (k === 27) {\n            // escape\n            input.val(focusText);\n            input.caret(0, checkVal());\n            e.preventDefault();\n          }\n        }\n\n        function keypressEvent(e) {\n          if (input.prop(\"readonly\")) {\n            return;\n          }\n\n          var k = e.which || e.keyCode,\n              pos = input.caret(),\n              p,\n              c,\n              next;\n\n          if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {\n            //Ignore\n            return;\n          } else if (k && k !== 13) {\n            if (pos.end - pos.begin !== 0) {\n              clearBuffer(pos.begin, pos.end);\n              shiftL(pos.begin, pos.end - 1);\n            }\n\n            p = seekNext(pos.begin - 1);\n\n            if (p < len) {\n              c = String.fromCharCode(k);\n\n              if (tests[p].test(c)) {\n                shiftR(p);\n                buffer[p] = c;\n                writeBuffer();\n                next = seekNext(p);\n\n                if (android) {\n                  //Path for CSP Violation on FireFox OS 1.1\n                  var proxy = function proxy() {\n                    $.proxy($.fn.caret, input, next)();\n                  };\n\n                  setTimeout(proxy, 0);\n                } else {\n                  input.caret(next);\n                }\n\n                if (pos.begin <= lastRequiredNonMaskPos) {\n                  tryFireCompleted();\n                }\n              }\n            }\n\n            e.preventDefault();\n          }\n        }\n\n        function clearBuffer(start, end) {\n          var i;\n\n          for (i = start; i < end && i < len; i++) {\n            if (tests[i]) {\n              buffer[i] = getPlaceholder(i);\n            }\n          }\n        }\n\n        function writeBuffer() {\n          input.val(buffer.join(''));\n        }\n\n        function checkVal(allow) {\n          //try to place characters where they belong\n          var test = input.val(),\n              lastMatch = -1,\n              i,\n              c,\n              pos;\n\n          for (i = 0, pos = 0; i < len; i++) {\n            if (tests[i]) {\n              buffer[i] = getPlaceholder(i);\n\n              while (pos++ < test.length) {\n                c = test.charAt(pos - 1);\n\n                if (tests[i].test(c)) {\n                  buffer[i] = c;\n                  lastMatch = i;\n                  break;\n                }\n              }\n\n              if (pos > test.length) {\n                clearBuffer(i + 1, len);\n                break;\n              }\n            } else {\n              if (buffer[i] === test.charAt(pos)) {\n                pos++;\n              }\n\n              if (i < partialPosition) {\n                lastMatch = i;\n              }\n            }\n          }\n\n          if (allow) {\n            writeBuffer();\n          } else if (lastMatch + 1 < partialPosition) {\n            if (settings.autoclear || buffer.join('') === defaultBuffer) {\n              // Invalid value. Remove it and replace it with the\n              // mask, which is the default behavior.\n              if (input.val()) input.val(\"\");\n              clearBuffer(0, len);\n            } else {\n              // Invalid value, but we opt to show the value to the\n              // user and allow them to correct their mistake.\n              writeBuffer();\n            }\n          } else {\n            writeBuffer();\n            input.val(input.val().substring(0, lastMatch + 1));\n          }\n\n          return partialPosition ? i : firstNonMaskPos;\n        }\n\n        input.data($.mask.dataName, function () {\n          return $.map(buffer, function (c, i) {\n            return tests[i] && c != getPlaceholder(i) ? c : null;\n          }).join('');\n        });\n        input.one(\"unmask\", function () {\n          input.off(\".mask\").removeData($.mask.dataName);\n        }).on(\"focus.mask\", function () {\n          if (input.prop(\"readonly\")) {\n            return;\n          }\n\n          clearTimeout(caretTimeoutId);\n          var pos;\n          focusText = input.val();\n          pos = checkVal();\n          caretTimeoutId = setTimeout(function () {\n            if (input.get(0) !== document.activeElement) {\n              return;\n            }\n\n            writeBuffer();\n\n            if (pos == _mask.replace(\"?\", \"\").length) {\n              input.caret(0, pos);\n            } else {\n              input.caret(pos);\n            }\n          }, 10);\n        }).on(\"blur.mask\", blurEvent).on(\"keydown.mask\", keydownEvent).on(\"keypress.mask\", keypressEvent).on(\"input.mask paste.mask\", function () {\n          if (input.prop(\"readonly\")) {\n            return;\n          }\n\n          setTimeout(function () {\n            var pos = checkVal(true);\n            input.caret(pos);\n            tryFireCompleted();\n          }, 0);\n        });\n\n        if (chrome && android) {\n          input.off('input.mask').on('input.mask', androidInputEvent);\n        }\n\n        checkVal(); //Perform initial check for existing values\n      });\n    }\n  });\n});\n\n//# sourceURL=webpack:///./vendor/jquery.maskedinput/src/jquery.maskedinput.js?");

/***/ })

/******/ });