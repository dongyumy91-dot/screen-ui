import { defineStore } from 'pinia'

export const useIframeStore = defineStore({
  id: 'iframe',
  state: () => ({
    list: [],
  }),
  getters: {
    getIframeList: (store) => store.list,
  },
  actions: {
    setIframeList: function(route)
    {
        this.list = [];
        this.list.push(route);
    }
  },
})
