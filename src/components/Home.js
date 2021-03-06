import MVVM from 'MVVM';
import styles from './homecss';

export const id = 'home';
export const template = `
    <div id=${id} style="display: none; padding: 0 20px">
        <h3 class="blue">Home Page: I am global class.</h3>
        <span>我是home组件，尝试了服务器渲染和浏览器渲染, 是同步加载的。可以通过浏览器dev tools查看。</span>
        <h4>History Router:&nbsp;&nbsp;<a href="/list">list link</a>&nbsp;&nbsp;<a href="/detail">detail link</a></h4>
        <h4>V-model, input something.</h4>
        <input type="text" v-model="someStr">
        <p v-text="someStr" v-class="className"></p>
        <textarea v-model="child.someStr" cols="20"></textarea>
        <p v-text="child.someStr" v-class="className"></p>
        <h4>Computed attribute</h4>
        <p v-class="className" v-text="getHelloWord"></p>
        <h4>V-on:click  <button v-on:click="clickBtn">Change data</button></h4>
        <h4>V-html</h4>
        <div v-html="child.htmlStr"></div>
        <h4>V-for <button v-on:click="changePeople">Change data</button></h4>
        <ul v-for="item in items">
            <li>{{ item.name }} {{ item.message }}</li>
        </ul>
    </div>
`;
export default new MVVM({
    // 多个空白符和换行符号会被html解析器处理成一个空白，要用多个&nbsp;或者<br>
    template,
    id,
    el: '#app',
    data() {
        return {
            someStr: 'Hello',
            className: styles.yellow,
            child: {
                someStr: 'World !',
                htmlStr:
                    '<p>I am generated by<strong style="color: red">&nbsp;v-html</strong></p>',
            },
            items: [
                { name: '曹操', message: '对酒当歌，人生几何？' },
                { name: '李清照', message: '知否？知否？应是绿肥红瘦。' },
            ],
        };
    },
    computed: {
        getHelloWord() {
            return `${this.someStr}  ${this.child.someStr}`;
        },
    },
    methods: {
        clickBtn() {
            const randomStrArr = ['郭嘉', '典韦', '夏侯惇'];
            this.someStr = randomStrArr[parseInt(Math.random() * 3, 10)];
            this.child.someStr = randomStrArr[parseInt(Math.random() * 3, 10)];
        },
        changePeople() {
            this.items = [
                { name: '李白', message: '呼儿将出换美酒，与尔同销万古愁。' },
                { name: '杜甫', message: '安得广厦千万间，大庇天下寒士俱欢颜。' },
            ];
        },
    },
});
