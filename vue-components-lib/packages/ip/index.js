import vueIp from './src/index.vue'

vueIp.install = function(Vue){
    Vue.component(vueIp.name, vueIp)
}

export default vueIp