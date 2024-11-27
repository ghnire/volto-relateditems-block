"use strict";(self.webpackChunk_plone_volto=self.webpackChunk_plone_volto||[]).push([[2976],{"./src/components/manage/Widgets/SchemaWidgetFieldset.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SchemaWidgetFieldsetComponent:function(){return SchemaWidgetFieldsetComponent}});var _home_runner_work_volto_relateditems_block_volto_relateditems_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js"),_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/helpers/Loadable/Loadable.jsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const SchemaWidgetFieldsetComponent=({title:title,order:order,active:active,onShowEditFieldset:onShowEditFieldset,onShowDeleteFieldset:onShowDeleteFieldset,onClick:onClick,getItemStyle:getItemStyle,isDraggable:isDraggable,isDisabled:isDisabled,reactBeautifulDnd:reactBeautifulDnd})=>__jsx(reactBeautifulDnd.Draggable,{draggableId:title,index:order,key:title},((provided,snapshot)=>__jsx("div",(0,_home_runner_work_volto_relateditems_block_volto_relateditems_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.c)({className:"item"+(active?" active":""),onClick:()=>onClick(order),ref:provided.innerRef},provided.draggableProps,{style:getItemStyle(snapshot.isDragging,provided.draggableProps.style)}),isDraggable&&__jsx("i",(0,_home_runner_work_volto_relateditems_block_volto_relateditems_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.c)({"aria-hidden":"true",className:"grey bars icon drag handle"},provided.dragHandleProps)),title,!isDisabled&&__jsx("button",{className:"item ui noborder button",onClick:event=>{event.stopPropagation(),event.preventDefault(),onShowEditFieldset(order)}},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.c,{name:"write square",size:"large",color:"blue"})),!isDisabled&&__jsx("button",{className:"item ui noborder button",onClick:event=>{event.stopPropagation(),event.preventDefault(),onShowDeleteFieldset(order)}},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.c,{name:"close",size:"large",color:"red"})))));__webpack_exports__.default=(0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_1__.yM)(["reactBeautifulDnd"])(SchemaWidgetFieldsetComponent),SchemaWidgetFieldsetComponent.__docgenInfo={description:"Schema widget fieldset component.\n@function SchemaWidgetFieldset\n@returns {string} Markup of the component.",methods:[],displayName:"SchemaWidgetFieldsetComponent",props:{order:{description:"",type:{name:"number"},required:!0},active:{description:"",type:{name:"bool"},required:!0},onOrderFieldset:{description:"",type:{name:"func"},required:!0},onShowEditFieldset:{description:"",type:{name:"func"},required:!0},onShowDeleteFieldset:{description:"",type:{name:"func"},required:!0},onClick:{description:"",type:{name:"func"},required:!0},getItemStyle:{description:"",type:{name:"func"},required:!0},isDraggable:{description:"",type:{name:"bool"},required:!1},isDisabled:{description:"",type:{name:"bool"},required:!1}}}}}]);