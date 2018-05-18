import MVVM from 'MVVM';
import styles from './detailcss';

export const id = 'detail';
const template = `
    <div id=${id} style="display: none">
        <h3 class=${styles.detailTitle}>Detail Page: I am local class</h3>
        <p><a href="/">home link</a>&nbsp;&nbsp;<a href="/list">list link</a></p>
    </div>`;
export const Detail = new MVVM({
    // 空白符和换行符号会被html解析起处理成一个空白，要用&nbsp;或者<br>
    template,
    id,
    el: '#app',
    data() {
        return {};
    },
});
