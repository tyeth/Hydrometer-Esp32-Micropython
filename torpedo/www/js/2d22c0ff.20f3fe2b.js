(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d22c0ff"],{f241:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-layout",{attrs:{view:"lHh Lpr lFf"}},[s("q-header",{attrs:{elevated:""}},[s("q-toolbar",{staticClass:"bg-deep-orange"},[s("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Settings"},on:{click:e.handleSettingsBtn}},[s("q-icon",{attrs:{name:"build"}})],1),s("q-toolbar-title",[e._v("\n        无线电子比重计 - 校准模式\n      ")])],1)],1),s("q-drawer",{attrs:{bordered:"","content-class":"bg-grey-2"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[s("q-list",[s("q-item-label",{attrs:{header:""}},[e._v("设置选项")]),s("q-item",[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"account_circle"}})],1),s("q-item-section",[s("q-item-label",[e._v("无线SSID")]),s("q-item-label",[s("q-input",{attrs:{outlined:"",dense:"",rules:[function(e){return!!e||"此项为必填项"}]},model:{value:e.settings.apSsid,callback:function(t){e.$set(e.settings,"apSsid",t)},expression:"settings.apSsid"}})],1)],1)],1),s("q-separator",{attrs:{spaced:""}}),s("q-item",[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"wifi"}})],1),s("q-item-section",[s("q-item-label",[e._v("WiFi热点")]),s("q-item-label",[s("q-select",{attrs:{outlined:"",options:e.settings.wifiList,dense:"","options-dense":""},model:{value:e.settings.wifi.ssid,callback:function(t){e.$set(e.settings.wifi,"ssid",t)},expression:"settings.wifi.ssid"}})],1),s("q-item-label",[s("q-input",{attrs:{outlined:"",type:e.isPwd?"password":"text",dense:""},scopedSlots:e._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.settings.wifi.pass,callback:function(t){e.$set(e.settings.wifi,"pass",t)},expression:"settings.wifi.pass"}})],1)],1),s("q-item-section",{attrs:{avatar:""}},[s("q-item-label",[e._v(" ")]),s("q-item-label",[s("q-btn",{attrs:{dense:"",round:"",color:"deep-orange",icon:"refresh"},on:{click:e.handleWifiRefreshBtn}},[s("q-tooltip",{attrs:{anchor:"bottom middle",self:"top middle"}},[e._v("\n                刷新WiFi列表\n              ")])],1)],1),s("q-item-label",[s("q-btn",{attrs:{dense:"",disable:!this.settings.wifi.ssid,round:"",color:"deep-orange",icon:"rss_feed"},on:{click:e.handleWifiConnectBtn}},[s("q-tooltip",{attrs:{anchor:"bottom middle",self:"top middle"}},[e._v("\n                连接WiFi热点\n              ")])],1)],1)],1)],1),s("q-separator",{attrs:{spaced:""}}),s("q-item",[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"cloud_upload"}})],1),s("q-item-section",[s("q-item-label",[e._v("开启FTP服务")]),s("q-item-label",{attrs:{caption:""}},[e._v("ftp://192.168.4.1:21")])],1),s("q-item-section",{attrs:{avatar:""}},[s("q-btn",{attrs:{round:"",dense:"",color:"deep-orange",icon:"create_new_folder"},on:{click:e.handleFtpConnectBtn}},[s("q-tooltip",{attrs:{anchor:"bottom middle",self:"top middle"}},[e._v("\n              开启FTP服务\n            ")])],1)],1)],1),s("q-separator",{attrs:{spaced:""}}),s("q-item",[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"search"}})],1),s("q-item-section",[s("q-item-label",[e._v("将数据发送至...")]),s("q-item-label",[s("div",{staticClass:"row justify-center"},[s("q-toggle",{attrs:{"checked-icon":"check",color:"red","unchecked-icon":"clear",label:"发酵箱","left-label":""},model:{value:e.settings.fermenterAp.enabled,callback:function(t){e.$set(e.settings.fermenterAp,"enabled",t)},expression:"settings.fermenterAp.enabled"}}),s("q-toggle",{attrs:{"checked-icon":"check",color:"red","unchecked-icon":"clear",label:"MQTT","left-label":""},model:{value:e.settings.mqtt.enabled,callback:function(t){e.$set(e.settings.mqtt,"enabled",t)},expression:"settings.mqtt.enabled"}})],1)])],1)],1),s("q-separator",{attrs:{spaced:""}}),s("q-item",{directives:[{name:"show",rawName:"v-show",value:e.settings.fermenterAp.enabled,expression:"settings.fermenterAp.enabled"}]},[s("q-item-section",[s("q-item-label",[s("q-icon",{staticClass:"q-mr-lg",attrs:{name:"settings_remote",size:"26px"}}),s("span",{staticClass:"q-ml-sm"},[e._v("发酵箱AP设置")])],1),s("q-item-label",[s("q-select",{attrs:{outlined:"",options:e.settings.wifiList,disable:!e.settings.fermenterAp.enabled,dense:"","options-dense":""},model:{value:e.settings.fermenterAp.ssid,callback:function(t){e.$set(e.settings.fermenterAp,"ssid",t)},expression:"settings.fermenterAp.ssid"}})],1),s("q-item-label",[s("q-input",{attrs:{outlined:"",type:e.isPwd?"password":"text",disable:!e.settings.fermenterAp.enabled,dense:""},scopedSlots:e._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.settings.fermenterAp.pass,callback:function(t){e.$set(e.settings.fermenterAp,"pass",t)},expression:"settings.fermenterAp.pass"}})],1)],1),s("q-item-section",{attrs:{avatar:""}},[s("q-item-label",[e._v("  ")]),s("q-item-label",[s("q-btn",{staticClass:"q-mt-sm",attrs:{dense:"",disable:!e.settings.fermenterAp.enabled,round:"",color:"deep-orange",icon:"refresh"},on:{click:e.handleWifiRefreshBtn}},[s("q-tooltip",{attrs:{anchor:"bottom middle",self:"top middle"}},[e._v("\n                刷新AP列表\n              ")])],1)],1),s("q-item-label",[s("q-btn",{attrs:{dense:"",disable:!this.settings.fermenterAp.ssid,round:"",color:"deep-orange",icon:"speaker_phone"},on:{click:e.handleFermenterConnectBtn}},[s("q-tooltip",{attrs:{anchor:"bottom middle",self:"top middle"}},[e._v("\n                连接发酵箱AP\n              ")])],1)],1)],1)],1),s("q-item",{directives:[{name:"show",rawName:"v-show",value:e.settings.fermenterAp.enabled,expression:"settings.fermenterAp.enabled"}]},[s("q-item-section",[s("q-item-label",[s("q-select",{attrs:{outlined:"",options:e.settings.hostList,disable:!e.settings.fermenterAp.enabled,dense:"","options-dense":""},model:{value:e.settings.host,callback:function(t){e.$set(e.settings,"host",t)},expression:"settings.host"}})],1),s("q-item-label",[s("q-input",{staticClass:"q-mb-xs",attrs:{outlined:"",disable:!e.settings.fermenterAp.enabled,dense:""},model:{value:e.settings.fermenterAp.host,callback:function(t){e.$set(e.settings.fermenterAp,"host",t)},expression:"settings.fermenterAp.host"}}),s("q-input",{attrs:{outlined:"",disable:!e.settings.fermenterAp.enabled,dense:""},model:{value:e.settings.fermenterAp.api,callback:function(t){e.$set(e.settings.fermenterAp,"api",t)},expression:"settings.fermenterAp.api"}})],1)],1)],1),s("q-item",{directives:[{name:"show",rawName:"v-show",value:e.settings.mqtt.enabled,expression:"settings.mqtt.enabled"}]},[s("q-item-section",[s("q-item-label",[s("q-icon",{staticClass:"q-mr-lg",attrs:{name:"insert_chart",size:"26px"}}),s("span",{staticClass:"q-ml-sm"},[e._v("MQTT设置")])],1),s("q-item-label",[s("div",{staticClass:"row justify-between"},[s("q-input",{staticStyle:{width:"69%"},attrs:{dense:"",outlined:"",label:"Broker地址",disable:!e.settings.mqtt.enabled},model:{value:e.settings.mqtt.brokerAddr,callback:function(t){e.$set(e.settings.mqtt,"brokerAddr",t)},expression:"settings.mqtt.brokerAddr"}}),s("q-input",{staticStyle:{width:"29%"},attrs:{dense:"",outlined:"",label:"端口",disable:!e.settings.mqtt.enabled},model:{value:e.settings.mqtt.brokerPort,callback:function(t){e.$set(e.settings.mqtt,"brokerPort",t)},expression:"settings.mqtt.brokerPort"}})],1)]),s("q-item-label",[s("q-input",{attrs:{dense:"",outlined:"",label:"用户名",disable:!e.settings.mqtt.enabled},model:{value:e.settings.mqtt.username,callback:function(t){e.$set(e.settings.mqtt,"username",t)},expression:"settings.mqtt.username"}})],1),s("q-item-label",[s("q-input",{attrs:{dense:"",outlined:"",label:"密码",type:e.isPwd?"password":"text",disable:!e.settings.mqtt.enabled},scopedSlots:e._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.settings.mqtt.password,callback:function(t){e.$set(e.settings.mqtt,"password",t)},expression:"settings.mqtt.password"}})],1),s("q-item-label",[s("q-input",{attrs:{dense:"",outlined:"",label:"Topic",disable:!e.settings.mqtt.enabled},model:{value:e.settings.mqtt.topic,callback:function(t){e.$set(e.settings.mqtt,"topic",t)},expression:"settings.mqtt.topic"}})],1),s("q-item-label",{staticClass:"row justify-end"},[s("q-btn",{attrs:{dense:"",disable:!e.settings.mqtt.brokerAddr||!e.settings.mqtt.brokerPort||!e.settings.mqtt.username||!e.settings.mqtt.topic,round:"",color:"deep-orange",icon:"speaker_notes"},on:{click:e.handleMqttTestBtn}})],1)],1)],1),s("q-separator",{attrs:{spaced:""}}),s("q-item",[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"restore"}})],1),s("q-item-section",[s("q-item-label",[e._v("唤醒采样频率")]),s("q-item-label",[s("q-input",{staticClass:"text-h5",attrs:{outlined:"",type:"number","input-class":"text-right",dense:"",rules:[function(e){return!!e||"此项为必填项"},function(e){return e>=5||"采样频率建议在5-60分钟之间"},function(e){return e<=60||"采样频率建议在5-60分钟之间"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[e._v("\n                每\n              ")]},proxy:!0},{key:"append",fn:function(){return[e._v("\n                分钟\n              ")]},proxy:!0}]),model:{value:e.deepSleepIntervalMinute,callback:function(t){e.deepSleepIntervalMinute=t},expression:"deepSleepIntervalMinute"}})],1)],1)],1),s("q-separator",{attrs:{spaced:""}}),s("q-item",{staticClass:"q-mt-sm"},[s("q-item-section",{staticClass:"q-mr-sm"},[s("q-btn",{attrs:{glossy:"",unelevated:"",color:"deep-orange",icon:"autorenew",label:"重 启",size:"md"},on:{click:e.handleRebootBtn}},[s("q-tooltip",[e._v("\n              重启后将进入工作模式\n            ")])],1)],1),s("q-item-section",[s("q-btn",{attrs:{glossy:"",unelevated:"",color:"deep-orange",icon:"save",label:"保 存",size:"md",disable:!(e.settings.apSsid&&e.deepSleepIntervalMinute)},on:{click:e.handleSaveSettingsBtn}},[s("q-tooltip",[e._v("\n              保存设置选项\n            ")])],1)],1)],1)],1)],1),s("q-page-container",{staticClass:"bg-grey-2"},[s("router-view")],1)],1)},i=[],o=(s("c5f6"),s("0967"),s("2b0e"),{name:"MyLayout",watch:{fermenterApEnabled:function(){this.settings.fermenterAp.enabled?this.settings.mqtt.enabled=!1:this.settings.mqtt.enabled=!0},mqttEnabled:function(){this.settings.mqtt.enabled?this.settings.fermenterAp.enabled=!1:this.settings.fermenterAp.enabled=!0},host:function(){console.log(this.host),"default"===this.host?(this.settings.fermenterAp.host="192.168.4.1",this.settings.fermenterAp.api="/hydrometer"):"cbpi"===this.host?(this.settings.fermenterAp.host="192.168.255.255:5000",this.settings.fermenterAp.api="/api/hydrometer/v1/data"):(this.settings.fermenterAp.host="",this.settings.fermenterAp.api="")}},computed:{fermenterApEnabled:function(){return this.settings.fermenterAp.enabled},mqttEnabled:function(){return this.settings.mqtt.enabled},deepSleepIntervalMinute:{get:function(){return Math.ceil(this.settings.deepSleepIntervalMs/1e3/60)},set:function(e){this.settings.deepSleepIntervalMs=60*e*1e3}},host:function(){return this.settings.host.value}},data:function(){return{leftDrawerOpen:!1,isPwd:!0,rebootBtnIsDisabled:!0,settings:{apSsid:"Hydrometer",wifi:{ssid:"",pass:""},fermenterAp:{enabled:!0,ssid:"",pass:"",host:"192.168.4.1",api:"/hydrometer"},deepSleepIntervalMs:9e5,wifiList:["Fermenter","ChinaNet1234","ChinaNet4542","UnionCom8876"],host:"API预设选项",hostList:[{label:"默认设定",value:"default"},{label:"CraftBeerPi",value:"cbpi"},{label:"自定义",value:"user"}],mqtt:{enabled:!1,brokerAddr:"",brokerPort:1883,username:"",password:"",topic:""}}}},created:function(){setTimeout(this.loadSettings,1e4)},methods:{handleSettingsBtn:function(){this.leftDrawerOpen||this.loadSettings(),this.leftDrawerOpen=!this.leftDrawerOpen},loadSettings:function(){var e=this;this.$axios.get("/settings").then(function(t){e.settings=t.data}).catch(function(t){console.log(t),e.$q.notify({color:"negative",icon:"error_outline",message:"Error: 无法从后台获取设置选项数据!"})})},handleWifiRefreshBtn:function(){var e=this;this.$axios.get("/wifi").then(function(t){e.settings.wifiList=t.data.wifiList}).catch(function(t){console.log(t),e.$q.notify({color:"negative",icon:"signal_wifi_off",message:"Error: 无法刷新WiFi热点列表!"})})},handleWifiConnectBtn:function(){var e=this;this.$axios.post("/wifi",this.settings.wifi).then(function(t){e.$q.notify({color:"info",icon:"signal_wifi_4_bar_lock",message:"已成功连接WiFi热点“".concat(e.settings.wifi.ssid,"”!")})}).catch(function(t){console.log(t),e.$q.notify({color:"negative",icon:"signal_wifi_off",message:"Error: 无法连接WiFi热点“".concat(e.settings.wifi.ssid,"”!")})})},handleFtpConnectBtn:function(){var e=this;this.$axios.get("/ftp").then(function(t){e.$q.notify({color:"info",icon:"check_circle_outline",message:"FTP服务已经开启!"})}).catch(function(t){console.log(t),e.$q.notify({color:"negative",icon:"error_outline",message:"Error: 无法开启FTP服务!"})})},handleFermenterConnectBtn:function(){var e=this;this.$axios.post("/wifi",this.settings.fermenterAp).then(function(t){e.$q.notify({color:"info",icon:"signal_wifi_4_bar_lock",message:"已成功连接发酵箱AP信号“".concat(e.settings.fermenterAp.ssid,"”!")})}).catch(function(t){console.log(t),e.$q.notify({color:"negative",icon:"signal_wifi_off",message:"Error: 无法连接发酵箱AP信号“".concat(e.settings.fermenterAp.ssid,"”!")})})},handleMqttTestBtn:function(){var e=this;this.$axios.post("/mqtttest",{mqtt:this.settings.mqtt}).then(function(t){e.$q.notify({color:"info",icon:"check_circle_outline",message:"已成功向MQTT服务器发送测试数据!"}),e.rebootBtnIsDisabled=!1}).catch(function(t){console.log(t),e.$q.notify({color:"negative",icon:"error_outline",message:"Error: 发送测试数据失败!"})})},handleSaveSettingsBtn:function(){var e=this;console.log(this.settings),this.$axios.post("/settings",{apSsid:this.settings.apSsid,wifi:this.settings.wifi,fermenterAp:this.settings.fermenterAp,mqtt:this.settings.mqtt,deepSleepIntervalMs:Number(this.settings.deepSleepIntervalMs)}).then(function(t){e.$q.notify({color:"info",icon:"check_circle_outline",message:"已成功保存设置选项! 请重启设备!"}),e.rebootBtnIsDisabled=!1}).catch(function(t){console.log(t),e.$q.notify({color:"negative",icon:"error_outline",message:"Error: 保存设置选项失败!"})})},handleRebootBtn:function(){this.confirmReboot()},confirmReboot:function(){var e=this;this.$q.dialog({title:"确认重启设备",message:"是否确认要重启设备的主控板？",ok:{push:!0},cancel:{push:!0,color:"negative"},persistent:!0}).onOk(function(){e.$axios.get("/deepsleep").then(function(t){e.$q.notify({color:"info",icon:"autorenew",message:"正在重启设备，请稍候..."})}).catch(function(t){console.log(t),e.$q.notify({color:"negative",icon:"error_outline",message:"Error: 无法与主控板通讯，未能重启设备!"})})}).onCancel(function(){})}}}),a=o,r=s("2877"),l=Object(r["a"])(a,n,i,!1,null,null,null);t["default"]=l.exports}}]);