export default {
    template: `
        <div>
            <h2>{{message}}</h2>
            <button @click="btnClick">按钮</button>
            <h2>{{name}}</h2>
        </div>
    `,
    data() {
        return {
            message: 'hello webpack',
            name: '小明'
        }
    },
    methods: {
        btnClick() {
            console.log(1)
        }
    }
}