/*!
 * 全局配置url，方便后端部署在多个域名下面
 *
 * @version   v1.0.0
 * @auhor    maguoxiong@ourhz.com
 * @data     2019-03-12 15:25:26
 *
 */

(function (root, name, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && typeof exports === 'object') {
    module.exports = factory();
  } else if (typeof exports === 'object') {
    exports[name] = factory();
  } else {
    root[name] = factory();
  }
}(this, 'serverConfig', function () {
  var serverConfig = {
    baseURL: 'http://59.215.225.32',
    pro: 'http://59.215.223.193:8181',
    url1: 'url111111',
    url2: 'url2'
  };
  return serverConfig;
}));
