/** 实现组件的全局注册 */

// 导入各个组件库
import vueIp from './ip/index'

// 以数组的结构保存组件，便于遍历
const components = [
    vueIp
]

// 定义install 方法
const install = function(Vue){
    if(install.installed) return 
    install.installed = true
    components.map(component=>{
        Vue.component(component.name,component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    // 导出的对象必须具备一个 install 方法
    install,
    // 组件列表
    ...components
}