import { createMockApi } from '../mockTools';

const MockApi = [
    // 用户登录
    createMockApi('post', 'system/login', {
        token: 'auth_token',
        userInfo: {
            userId: 1,
            userName: 'Administrator',
            portrait: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
            role: [
                "SA",
                "admin",
                "Auditor"
            ]
        }
    })
];

export default MockApi
