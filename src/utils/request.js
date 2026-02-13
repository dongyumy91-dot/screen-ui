import axios from 'axios';
import { ElNotification } from 'element-plus'
import sysConfig from "@/config";
import apiConfig from "@/config/api";
import Tools from "@/utils/tools"
import RequestSign from "@/utils/requestSign"
import SystemEnum from "@/enum/SystemEnum"

axios.defaults.baseURL = ''
axios.defaults.timeout = sysConfig.TIMEOUT

// HTTP request 拦截器
axios.interceptors.request.use(
    (config) => {
        let token = Tools.cookie.get(SystemEnum.TOKEN_KEY);
        if(token){
            config.headers[sysConfig.TOKEN_NAME] = sysConfig.TOKEN_PREFIX + token
        }
        if(!sysConfig.REQUEST_CACHE && config.method === 'get'){
            config.params = config.params || {};
            config.params['_'] = new Date().getTime();
            config.params['sign'] = RequestSign.make(config.params);
        }else{
            config.data = config.data || {};
            if(config.data)config.data['sign'] = RequestSign.make(config.data);
        }
        Object.assign(config.headers, sysConfig.HEADERS)
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// HTTP response 拦截器
axios.interceptors.response.use(
    (response) => {
        let errRs = {code:response.data[apiConfig.code], msg:response.data[apiConfig.msg]||(!!response.data[apiConfig.data]?response.data[apiConfig.data]:'')||'', data: []};
        if (response.data[apiConfig.code] === apiConfig.successCode) {
            return {
                data: response.data[apiConfig.data]
            }
        }
        console.warn('response拦截：', response)
        return Promise.reject(errRs);
        // notification.warn({
        //     message: `响应错误:${response.data['code']||response.status}`,
        //     description: `${response.data['msg']||'未知错误'}！`
        // })
        // return errRs
    },
    (error) => {
        console.log('axios->error:', error)
        if (error.response) {
            let _msg = error.response.data.msg || error.response.data.message || `Status:${error.response.status}，未知错误！`;
            if(error.response.status === 429){ // 请求频繁
                ElNotification({
                    type: 'error',
                    title: '请求频繁',
                    message: _msg
                })
            }else{
                console.error('[响应错误]' + error.response.data.msg || `Status:${error.response.status}，未知错误！`)
                ElNotification({
                    type: 'error',
                    title: '响应错误',
                    message: `[响应错误] ${_msg}`
                })
                // ElNotification({
                //     type: 'error',
                //     title: '响应错误',
                //     message: error.response.data.msg || `Status:${error.response.status}，未知错误！`,
                // })
            }
        } else {
            console.error('[响应错误]' + error.message)
            // ElNotification({
            //     type: 'error',
            //     title: '响应错误',
            //     message: error.message||'请求服务器无响应',
            // })
        }
        return Promise.reject(error);
    }
);

var http = {

    /** get 请求
     * @param  {String} url 接口地址
     * @param  {Object} params 请求参数
     * @param  {Object} config 参数
     */
    get: function(url, params={}, config={}) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: url,
                params: params,
                ...config
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            })
        })
    },

    /** post 请求
     * @param  {String} url 接口地址
     * @param  {Object} data 请求参数
     * @param  {Object} config 参数
     */
    post: function(url, data={}, config={}) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: url,
                data: data,
                ...config
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            })
        })
    },

    /** put 请求
     * @param  {String} url 接口地址
     * @param  {Object} data 请求参数
     * @param  {Object} config 参数
     */
    put: function(url, data={}, config={}) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'put',
                url: url,
                data: data,
                ...config
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            })
        })
    },

    /** patch 请求
     * @param  {String} url 接口地址
     * @param  {Object} data 请求参数
     * @param  {Object} config 参数
     */
    patch: function(url, data={}, config={}) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'patch',
                url: url,
                data: data,
                ...config
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            })
        })
    },

    /** delete 请求
     * @param  {String} url 接口地址
     * @param  {Object} data 请求参数
     * @param  {Object} config 参数
     */
    delete: function(url, data={}, config={}) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'delete',
                url: url,
                data: data,
                ...config
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            })
        })
    },

    /** jsonp 请求
     * @param  {String} url 接口地址
     * @param  {String} name JSONP回调函数名称
     */
    jsonp: function(url, name='jsonp') {
        return new Promise((resolve) => {
            var script = document.createElement('script')
            var _id = `jsonp${Math.ceil(Math.random() * 1000000)}`
            script.id = _id
            script.type = 'text/javascript'
            script.src = url
            window[name] =(response) => {
                resolve(response)
                document.getElementsByTagName('head')[0].removeChild(script)
                try {
                    delete window[name];
                }catch(e){
                    window[name] = undefined;
                }
            }
            document.getElementsByTagName('head')[0].appendChild(script)
        })
    },
}

export default http;