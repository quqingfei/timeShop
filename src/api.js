import axios from 'axios';

/* ES6写法给String扩展一个参数字符串格式化传参方法，名称为 _format */
Object.assign(String.prototype, {
    _format() {
        var source = this;
        for (var i = 0; i <= arguments.length - 1; i++) {
            var reg = new RegExp('\\{' + i + '\\}', 'gm');// g--全局匹配，m--非负整数
            source = source.replace(reg, arguments[i]);
        }
        return source;
    }
});

// ES5 写法
// String.prototype._format = function() {
//   var source = this;
//   for (var i = 0; i <= arguments.length - 1; i++) {
//     var reg = new RegExp('\\{' + i + '\\}', 'gm');
//     source = source.replace(reg, arguments[i]);
//   }
//   return source;
// };

/* 封装axios的ajax请求，方便使用 */
class ApiList {
    constructor() {
        this._ajax = (method, subUrl, data, context) => {
            var _options = {
                method: method,
                url: subUrl,
                data: data
            };

            if(_options.method.toUpperCase() === 'get') {
                _options.url += ((_options.url.indexOf('?') > -1 ? '' : '?') + '&___t=' + (new Date()).getTime());
            }

            if(context) {
                _options.context = context;
            }

            return axios(_options);
        };

        this._get = (url, data, context) => {
            return this._ajax('get', url, data, context);
        };

        this._post = (url, data, context) => {
            return this._ajax('post', url, data, context);
        };
    };

    /* all interface methods---所有的接口管理方法，方便管理 */
    getImgUrl(img, context) {
        let itemUrl = '/api/geiimglist?a={0}'._format(img);
        return this._get(itemUrl, {});
    };
};
export const api = new ApiList();
