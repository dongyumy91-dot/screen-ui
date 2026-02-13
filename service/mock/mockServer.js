import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

let mockApi = [];
let mockMap = import.meta.glob('@mock/api/*.js', {import: 'default', eager: true});
for(let apiKey in mockMap)
{
  mockApi.push(...mockMap[apiKey])
}

export function setupProdMockServer() {
  createProdMockServer([...mockApi])
}