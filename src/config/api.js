const DEFAULT_CONFIG = {
    successCode: 10000,          // 请求成功错误码
    invalidAuthTokenCode: 20001, // 重新登录错误码

    // 响应结构配置
    code: 'code',
    msg: 'msg',
    subCode: 'sub_code',         // 业务错误码
    subMsg: 'sub_msg',           // 业务错误说明
    data: 'data',
};

export default DEFAULT_CONFIG
