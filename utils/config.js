var DOMAIN = "jacarandastock.top/";
var WEBSITENAME="蓝楹会"; //网站名称
var PAGECOUNT='10'; //每页文章数目
var WECHAT='微信号：Jacaranda-USYD'; 
//是否启用小程序扫描二维码登录网站  true 启用  false  不启用
const enableScanLogin =true
//////////////////////////////////////////////////////


//小程序端版本,请勿修改
const minapperVersion=4.5
const minapperSource="free"
//////////////////////////////////////////////////////

export default {
  getDomain: DOMAIN,
  getWebsiteName: WEBSITENAME,  
  getPageCount: PAGECOUNT,
  getWecat: WECHAT,
  enableScanLogin,
  minapperVersion,
  minapperSource
}