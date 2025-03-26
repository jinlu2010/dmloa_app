(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/tabBar/assign/edittask"],{

/***/ 236:
/*!*******************************************************************************************!*\
  !*** D:/HBuilderProjects/dmloa_app/main.js?{"page":"pages%2FtabBar%2Fassign%2Fedittask"} ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _edittask = _interopRequireDefault(__webpack_require__(/*! ./pages/tabBar/assign/edittask.vue */ 237));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_edittask.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 237:
/*!**********************************************************************!*\
  !*** D:/HBuilderProjects/dmloa_app/pages/tabBar/assign/edittask.vue ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edittask_vue_vue_type_template_id_daa146d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edittask.vue?vue&type=template&id=daa146d2& */ 238);
/* harmony import */ var _edittask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edittask.vue?vue&type=script&lang=js& */ 240);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _edittask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _edittask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs




/* normalize component */

var component = Object(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edittask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edittask_vue_vue_type_template_id_daa146d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edittask_vue_vue_type_template_id_daa146d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _edittask_vue_vue_type_template_id_daa146d2___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/tabBar/assign/edittask.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 238:
/*!*****************************************************************************************************!*\
  !*** D:/HBuilderProjects/dmloa_app/pages/tabBar/assign/edittask.vue?vue&type=template&id=daa146d2& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edittask_vue_vue_type_template_id_daa146d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./edittask.vue?vue&type=template&id=daa146d2& */ 239);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edittask_vue_vue_type_template_id_daa146d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edittask_vue_vue_type_template_id_daa146d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edittask_vue_vue_type_template_id_daa146d2___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edittask_vue_vue_type_template_id_daa146d2___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 239:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HBuilderProjects/dmloa_app/pages/tabBar/assign/edittask.vue?vue&type=template&id=daa146d2& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uniDatetimePicker: function () {
      return Promise.all(/*! import() | uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.vue */ 465))
    },
    uniIcons: function () {
      return Promise.all(/*! import() | components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/components/uni-icons/uni-icons.vue */ 413))
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
  var l0 = _vm.__map(_vm.executorArr, function (item, index) {
    var $orig = _vm.__get_orig(item)
    var g0 = JSON.stringify(item.id)
    return {
      $orig: $orig,
      g0: g0,
    }
  })
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 240:
/*!***********************************************************************************************!*\
  !*** D:/HBuilderProjects/dmloa_app/pages/tabBar/assign/edittask.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edittask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./edittask.vue?vue&type=script&lang=js& */ 241);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edittask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edittask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edittask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edittask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edittask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 241:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HBuilderProjects/dmloa_app/pages/tabBar/assign/edittask.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uniIcons: uniIcons
  },
  data: function data() {
    return {
      task_id: '',
      user_ids: [],
      //执行人
      name: '',
      level_id: 0,
      project_id: 0,
      user_type: '',
      is_assigned: '',
      executor: '',
      helper: '',
      remark: '',
      show: false,
      project: '',
      module: '',
      module_id: 0,
      moduleArr: [],
      index: 0,
      projectArr: [{
        id: 0,
        name: '无项目'
      }],
      disabled: false,
      levelArr: [{
        id: 0,
        name: '正常'
      }, {
        id: 1,
        name: '紧急'
      }],
      start_at: getDate({
        format: true
      }),
      end_at: getDate({
        format: true
      }),
      startDate: getDate('start'),
      endDate: getDate('end'),
      executorArr: [{
        id: 0,
        name: ''
      }],
      range: []
    };
  },
  watch: {
    range: function range(newval) {
      this.start_at = this.range[0];
      this.end_at = this.range[1];
    }
  },
  onLoad: function onLoad(option) {
    var _this = this;
    this.task_id = option.id;
    this.axios.get('employee/get_all').then(function (res) {
      _this.executorArr = res.data.data;
      console.log('执行人：', _this.executorArr);
    });
    this.axios.get('task/get', {
      params: {
        'id': this.task_id
      }
    }).then(function (res) {
      console.log(res.data.data);
      _this.name = res.data.data.name, _this.level_id = res.data.data.status_id, _this.project = res.data.data.project.id, _this.module = res.data.data.module.id, _this.user_type = res.data.data.itself, _this.remark = res.data.data.remark,
      // this.start_at=res.data.data.start_at,
      // this.end_at=res.data.data.end_at,
      _this.range = [res.data.data.start_at, res.data.data.end_at];
      _this.axios.get('project/get_all').then(function (res) {
        _this.projectArr = res.data.data;
        var projectlist = _this.projectArr;
        _this.project_id = projectlist.findIndex(function (projectlist) {
          return projectlist.id == _this.project;
        });
      });
      _this.axios.get('module/get_all', {
        params: {
          //'level_id': 1,
          'project_id': _this.project
        }
      }).then(function (res) {
        _this.moduleArr = res.data.data;
        var modulelist = _this.moduleArr;
        _this.module_id = modulelist.findIndex(function (modulelist) {
          return modulelist.id == _this.module;
        });
      });
      if (_this.user_type == true) {
        _this.show = false;
      } else {
        _this.show = true;
      }
      for (var i = 0; i < res.data.data.task_items.length; i++) {
        //取id值
        _this.user_ids.push(JSON.stringify(res.data.data.task_items[i].operator.id));
        console.log('userid:', _this.user_ids);
      }
    });
  },
  methods: {
    addTask: function addTask() {
      if (this.user_type === '') {
        this.is_assigned = false;
      } else {
        this.is_assigned = true;
      }
      var data = {
        id: this.task_id,
        operator_user_ids: this.user_ids,
        start_at: this.start_at,
        name: this.name,
        statusId: this.level_id,
        project_id: this.projectArr[this.project_id].id,
        itself: this.user_type,
        end_at: this.end_at,
        remark: this.remark,
        module_id: this.moduleArr[this.module_id].id,
        is_assigned: this.is_assigned
      };
      var task = JSON.stringify(data);
      console.log(task);
      var that = this;
      this.axios.post('task/save', task).then(function (res) {
        console.log(res);
        if (res.data.code == 200) {
          uni.showModal({
            title: "提示",
            content: '恭喜您，修改任务成功！',
            confirmText: '返回列表',
            //这块是确定按钮的文字
            showCancel: false,
            success: function success(res) {
              if (res.confirm) {
                uni.navigateBack({
                  delta: 1
                });
                console.log('用户点击确定');
              } else if (res.cancel) {
                console.log('用户点击取消');
              }
            }
          });
        } else {
          uni.showModal({
            content: res.data.message,
            confirmText: "知道了",
            showCancel: false
          });
        }
      });
    },
    stopTask: function stopTask() {
      this.axios.post('task/stop', {
        id: this.task_id,
        is_sub_task: false
      }).then(function (res) {
        console.log(res);
        if (res.data.code == 200) {
          uni.showToast({
            title: '已终止',
            icon: 'success',
            duration: 1000
          });
          uni.navigateBack({
            delta: 1
          });
        } else {
          uni.showModal({
            content: res.data.message,
            confirmText: "知道了",
            showCancel: false
          });
        }
      });
    },
    delTask: function delTask() {
      var that = this;
      uni.showModal({
        title: "提示",
        content: '确定删除此条任务吗？',
        success: function success(res) {
          if (res.confirm) {
            that.axios.post('task/remove', {
              id: that.task_id
            }).then(function (res) {
              console.log(res);
              if (res.data.code == 200) {
                uni.showToast({
                  title: '删除成功',
                  icon: 'success'
                });
                setTimeout(function () {
                  //that.reload()
                }, 1000);
              } else {
                uni.showModal({
                  content: res.data.message,
                  confirmText: "知道了",
                  showCancel: false
                });
              }
            });
            console.log('用户点击确定');
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
    },
    levelArrChange: function levelArrChange(e) {
      this.level_id = e.detail.value;
    },
    startDateChange: function startDateChange(e) {
      this.start_at = e.target.value;
    },
    endDateChange: function endDateChange(e) {
      this.end_at = e.target.value;
    },
    userTypeChange: function userTypeChange(e) {
      var _this2 = this;
      if (e.detail.value == 0) {
        this.show = false, this.user_type = true, this.user_ids = [], this.executorArr = [];
      } else {
        this.show = true;
        this.user_type = false;
        this.axios.get('employee/get_all').then(function (res) {
          _this2.executorArr = res.data.data;
        });
      }
    },
    executorChange: function executorChange(e) {
      this.user_ids = e.detail.value;
    },
    bindTextAreaBlur: function bindTextAreaBlur(e) {
      console.log(e.detail.value);
    },
    projectList: function projectList(e) {
      var _this3 = this;
      this.axios.get('project/get_all').then(function (res) {
        _this3.projectArr = res.data.data;
        _this3.axios.get('module/get_all', {
          params: {
            //'level_id': 1,
            'project_id': _this3.projectArr[_this3.project_id].id
          }
        }).then(function (res) {
          _this3.moduleArr = res.data.data;
        });
      });
    },
    projectArrChange: function projectArrChange(e) {
      var _this4 = this;
      this.project_id = e.detail.value;
      this.axios.get('module/get_all', {
        params: {
          //'level_id': 1,
          'project_id': this.projectArr[this.project_id].id
        }
      }).then(function (res) {
        _this4.moduleArr = res.data.data;
        console.log('module:', _this4.moduleArr);
      });
    },
    moduleArrChange: function moduleArrChange(e) {
      this.module_id = e.detail.value;
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

},[[236,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/tabBar/assign/edittask.js.map