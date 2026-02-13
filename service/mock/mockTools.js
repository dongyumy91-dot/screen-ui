export function createMockApi(method, url, response)
{
    return {
        url: `/mock/${url}`,
        method: method,
        response: () => {
            return {
                code: 10000,
                message: "ok",
                data: response
            }
        }
    }
}