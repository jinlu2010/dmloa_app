(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/tabBar/task/task"],{

/***/ 64:
/*!*************************************************************************************!*\
  !*** D:/HBuilderProjects/dmloa_app/main.js?{"page":"pages%2FtabBar%2Ftask%2Ftask"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _task = _interopRequireDefault(__webpack_require__(/*! ./pages/tabBar/task/task.vue */ 65));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_task.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 65:
/*!****************************************************************!*\
  !*** D:/HBuilderProjects/dmloa_app/pages/tabBar/task/task.vue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task_vue_vue_type_template_id_3b44d8b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.vue?vue&type=template&id=3b44d8b7& */ 66);
/* harmony import */ var _task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.vue?vue&type=script&lang=js& */ 68);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _task_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.vue?vue&type=style&index=0&lang=css& */ 70);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _task_vue_vue_type_template_id_3b44d8b7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _task_vue_vue_type_template_id_3b44d8b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _task_vue_vue_type_template_id_3b44d8b7___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/tabBar/task/task.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 66:
/*!***********************************************************************************************!*\
  !*** D:/HBuilderProjects/dmloa_app/pages/tabBar/task/task.vue?vue&type=template&id=3b44d8b7& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_template_id_3b44d8b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./task.vue?vue&type=template&id=3b44d8b7& */ 67);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_template_id_3b44d8b7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_template_id_3b44d8b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_template_id_3b44d8b7___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_template_id_3b44d8b7___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 67:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HBuilderProjects/dmloa_app/pages/tabBar/task/task.vue?vue&type=template&id=3b44d8b7& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    calendar: function () {
      return Promise.all(/*! import() | components/calendar/calendar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/calendar/calendar")]).then(__webpack_require__.bind(null, /*! @/components/calendar/calendar.vue */ 421))
    },
    uniIcons: function () {
      return Promise.all(/*! import() | components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/components/uni-icons/uni-icons.vue */ 413))
    },
    uniFilePicker: function () {
      return Promise.all(/*! import() | uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue */ 428))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l1 = _vm.__map(_vm.tasklist, function (item, __i0__) {
    var $orig = _vm.__get_orig(item)
    var l0 = _vm.__map(item.task_items, function (items, __i1__) {
      var $orig = _vm.__get_orig(items)
      var g0 =
        items.operator.id == _vm.userid &&
        _vm.nowdate < item.end_at &&
        items.finished == false
          ? item.end_at.slice(5, 10)
          : null
      var m0 =
        items.operator.id == _vm.userid &&
        _vm.nowdate > item.end_at &&
        items.finished == false
          ? _vm.getGraceDateBeforeNow(item.end_at)
          : null
      return {
        $orig: $orig,
        g0: g0,
        m0: m0,
      }
    })
    return {
      $orig: $orig,
      l0: l0,
    }
  })
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l1: l1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 68:
/*!*****************************************************************************************!*\
  !*** D:/HBuilderProjects/dmloa_app/pages/tabBar/task/task.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./task.vue?vue&type=script&lang=js& */ 69);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 69:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HBuilderProjects/dmloa_app/pages/tabBar/task/task.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var uniIcons = function uniIcons() {
  Promise.all(/*! require.ensure | components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-icons/uni-icons")]).then((function () {
    return resolve(__webpack_require__(/*! @/components/uni-icons/uni-icons.vue */ 413));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var uniCalendar = function uniCalendar() {
  Promise.all(/*! require.ensure | components/uni-calendar/uni-calendar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-calendar/uni-calendar")]).then((function () {
    return resolve(__webpack_require__(/*! @/components/uni-calendar/uni-calendar.vue */ 449));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var uniList = function uniList() {
  __webpack_require__.e(/*! require.ensure | components/uni-list/uni-list */ "components/uni-list/uni-list").then((function () {
    return resolve(__webpack_require__(/*! @/components/uni-list/uni-list.vue */ 458));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var calendar = function calendar() {
  Promise.all(/*! require.ensure | components/calendar/calendar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/calendar/calendar")]).then((function () {
    return resolve(__webpack_require__(/*! @/components/calendar/calendar.vue */ 421));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
function getDateBeforeNow(stringTime) {
  //console.log("传参未格式化", stringTime);
  stringTime = new Date(stringTime.replace(/-/g, '/'));

  // 统一单位换算
  var minute = 1000 * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var week = day * 7;
  var month = day * 30;
  var year = month * 12;
  var time1 = new Date().getTime(); //当前的时间戳
  console.log("当前时间", time1);

  // 对时间进行毫秒单位转换
  var time2 = new Date(stringTime).getTime(); //指定时间的时间戳

  //console.log("传过来的时间", time2);

  var time = time1 - time2;
  //console.log("计算后的时间", time);

  var result = null;
  if (time < 0) {
    // alert("设置的时间不能早于当前时间！");
    result = stringTime;
  } else if (time / year >= 1) {
    result = parseInt(time / year) + "年";
  } else if (time / month >= 1) {
    result = parseInt(time / month) + "月";
  } else if (time / week >= 1) {
    result = parseInt(time / week) + "周";
  } else if (time / day >= 1) {
    result = parseInt(time / day) + "天";
  } else if (time / hour >= 1) {
    result = parseInt(time / hour) + "小时";
  } else if (time / minute >= 1) {
    result = parseInt(time / minute) + "分钟";
  } else {
    result = "刚刚";
  }
  //console.log("格式化后的时间", result);
  return result;
}
function getDate(type) {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  if (type === 'start') {
    year = year - 60;
  } else if (type === 'end') {
    year = year + 2;
  }
  month = month > 9 ? month : '0' + month;
  ;
  day = day > 9 ? day : '0' + day;
  return "".concat(year, "-").concat(month, "-").concat(day);
}
var _default = {
  components: {
    uniIcons: uniIcons,
    uniCalendar: uniCalendar,
    uniList: uniList,
    calendar: calendar
  },
  data: function data() {
    return {
      tasklist: [],
      titleText: "我的任务",
      imgUrl: "../../../static/image/userface.png",
      // imgUrl: "../../../static/image/userface2.png",
      showCalendar: true,
      info: {
        date: new Date().toISOString().slice(0, 10),
        selected: []
      },
      windowWith: 0,
      windowHeight: 0,
      dateWidth: '',
      dateHeight: '',
      date: getDate({
        format: true
      }),
      startDate: getDate('start'),
      endDate: getDate('end'),
      show: false,
      finish: true,
      delay: false,
      stop: false,
      status: [{
        id: 0,
        name: '完成'
      }, {
        id: 1,
        name: '终止'
      }],
      status_id: 0,
      time: [{
        name: 60
      }, {
        name: 30
      }, {
        name: 10
      }],
      time_id: 0,
      title: 'uploadFile',
      remark: '',
      day: '',
      imageSrc: '',
      task_item_id: '',
      is_finished: false,
      is_stoped: false,
      upload_ids: [],
      files: [],
      upload_id: '',
      filePathsList: [],
      number: 0,
      userid: '',
      taskItemArr: [],
      taskItemId: 0,
      true: true,
      false: false,
      nowdate: new Date().toISOString().slice(0, 10)
    };
  },
  onShow: function onShow() {
    this.taskList();
  },
  onUnload: function onUnload() {
    this.imageSrc = '';
    this.filePathsList = '';
  },
  onLoad: function onLoad() {
    var _this = this;
    this.axios.get('profile/get').then(function (res) {
      _this.userid = res.data.data.id;
      console.log('userid:', _this.userid);
    });

    //this.getDateBeforeNow(this.data);
    //let token = uni.getStorageSync('token')
    /* uni.request({
    	method: 'get',
    	url: 'http://47.100.125.167:8082/task/get_all',
    	data: {
    		'is_mine':true,
    	},
    	header: {
    		'token': token,
    		'content-type': 'application/json' // 默认值
    	},
    	success: (res) => {
    		this.tasklist = res.data.data;
    		console.log(this.tasklist)
    	},
    	fail: (err) => {
    		console.log(err)
    	}
    }) */
  },

  methods: {
    getGraceDateBeforeNow: function getGraceDateBeforeNow(date) {
      return getDateBeforeNow(date);
    },
    reload: function reload() {
      var pages = getCurrentPages();
      var curPage = pages[pages.length - 1];
      curPage.onLoad(curPage.options); // 传入参数
      curPage.onShow();
      curPage.onReady();
    },
    taskList: function taskList() {
      var _this2 = this;
      this.axios.get('task/get_all', {
        params: {
          // 'is_assigned': true,
          'is_mine': true,
          'start_at': this.date
        }
      }).then(function (res) {
        _this2.tasklist = res.data.data;
        console.log(_this2.tasklist);
      });
    },
    delFile: function delFile(e) {
      var index = this.filePathsList.findIndex(function (v) {
        return v === e.tempFile.path;
      });
      this.upload_ids.splice(index, 1);
    },
    upload: function upload(e) {
      var _this3 = this;
      var token = uni.getStorageSync('token');
      console.log(e.tempFilePaths);
      this.filePathsList = e.tempFilePaths;
      for (var i = 0; i < e.tempFilePaths.length; i++) {
        uni.uploadFile({
          url: 'http://110.40.229.45:8082/api/upload',
          header: {
            'token': token
          },
          filePath: e.tempFilePaths[i],
          name: 'file',
          success: function success(res) {
            console.log('uploadImage success, res is:', res);
            _this3.upload_id = JSON.parse(res.data).data.id;
            _this3.upload_ids.push(_this3.upload_id);
            _this3.number++;
            console.log(_this3.upload_ids);
            uni.showToast({
              title: '上传第' + _this3.number + '张成功',
              icon: 'success',
              duration: 1000
            });
          },
          fail: function fail(err) {
            uni.showModal({
              content: err,
              confirmText: "知道了",
              showCancel: false
            });
          }
        });
      }
    },
    open: function open() {
      this.$refs.calendar.open();
    },
    changeDate: function changeDate(date) {
      this.date = date.date;
      console.log('date:', this.date);
      this.taskList();
    },
    confirm: function confirm(e) {
      var choosetime = e.fulldate;
      this.info.date = choosetime;
    },
    statusChange: function statusChange(e) {
      console.log('picker发送选择改变，携带值为：' + e.detail.value);
      this.status_id = e.detail.value;
      if (this.status_id == 0) {
        this.finish = true;
        this.stop = false;
      } else if (this.status_id == 1) {
        this.finish = false;
        this.stop = true;
      }
    },
    timeChange: function timeChange(e) {
      console.log('picker发送选择改变，携带值为：' + e.detail.value);
      this.time_id = e.detail.value;
    },
    bindTextAreaBlur: function bindTextAreaBlur(e) {
      console.log(e.detail.value);
    },
    bindDateChange: function bindDateChange(e) {
      this.date = e.detail.value;
    },
    FinishTask: function FinishTask() {
      var _this4 = this;
      if (this.finish == true) {
        this.axios.post('task/done', {
          file_ids: this.upload_ids,
          desc: this.remark,
          time: this.time[this.time_id].name,
          task_item_id: this.task_item_id
        }).then(function (res) {
          console.log(res);
          if (res.data.code == 200) {
            uni.showToast({
              title: '已完成',
              icon: 'success',
              duration: 1000
            });
            _this4.show = false;
            _this4.reload();
          } else {
            uni.showModal({
              content: res.data.message,
              confirmText: "知道了",
              showCancel: false
            });
          }
        });
      } else if (this.delay == true) {
        this.axios.post('task/delay', {
          end_at: this.date,
          id: this.task_item_id
        }).then(function (res) {
          console.log(res);
          if (res.data.code == 200) {
            uni.showToast({
              title: '已延期',
              icon: 'success',
              duration: 1000
            });
            _this4.show = false;
            _this4.reload();
          } else {
            uni.showModal({
              content: res.data.message,
              confirmText: "知道了",
              showCancel: false
            });
          }
        });
      } else if (this.stop == true) {
        this.axios.post('task/stop', {
          id: this.task_item_id,
          is_sub_task: true
        }).then(function (res) {
          console.log(res);
          if (res.data.code == 200) {
            uni.showToast({
              title: '已终止',
              icon: 'success',
              duration: 1000
            });
            _this4.show = false;
            _this4.reload();
          } else {
            uni.showModal({
              content: res.data.message,
              confirmText: "知道了",
              showCancel: false
            });
          }
        });

        /* this.$request.post('task/stop', {
        	id: this.task_item_id
        }).then(res => {
        	console.log(res.data);
        	if (res.data.code == 200) {
        		uni.showToast({
        			title: "已终止",
        			duration: 2000
        		})
        		this.show = false
        		location.reload()
        	} else {
        		this.message = res.data.message
        		alert(this.message)
        	}
        }) */
      }
    },

    tapshow: function tapshow(items) {
      this.show = true;
      this.task_item_id = items.id;
      console.log('task_item_id:', this.task_item_id);
      // for(let i =0; i<item.task_items.length; i++){//取id值
      // 	this.taskItemArr.push(item.task_items[i])
      // }
      // let taskItemList = this.taskItemArr
      // this.taskItemId = (taskItemList).findIndex ((taskItemList) => taskItemList.operator.id  ==  this.userid );
      // this.task_item_id= item.task_items[this.taskItemId].id
    },

    taphide: function taphide() {
      this.show = false;
    },
    UserCenter: function UserCenter() {
      uni.navigateTo({
        url: '../../usercenter/usercenter'
      });
    },
    Detail: function Detail(item) {
      uni.navigateTo({
        url: 'detail?id=' + item.id
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 70:
/*!*************************************************************************************************!*\
  !*** D:/HBuilderProjects/dmloa_app/pages/tabBar/task/task.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./task.vue?vue&type=style&index=0&lang=css& */ 71);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_task_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 71:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HBuilderProjects/dmloa_app/pages/tabBar/task/task.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[64,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/tabBar/task/task.js.map