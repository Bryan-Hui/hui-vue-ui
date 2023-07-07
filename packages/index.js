// import Button from './button';
// import Alert from './alert';
// import './fonts/font.scss';

/**
 * 整个包的入口;
 */
/**
 * 存储组件列表;
 */
const components = [
    // Button,
    // Alert,
];
/**
 * 定义install方法,接收Vue作为参数。如果使用use注册插件,则所有的组件都将被注册;
 */
const install = function (Vue) {
    components.forEach((item) => { //全局注册所有组件;
        Vue.component(item.name, item);
    });
}
/**
 * 判断是否是直接引入文件,如果是,就不用调用Vue.use();
 */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    install,
}

