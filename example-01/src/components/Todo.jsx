import {defineComponent,ref} from 'vue'

export default defineComponent({
    setup(props) {
        let title=ref('')
        let todos=ref( [
            { title: '学习Vue', done: false },
            { title: '学习React', done: false },
        ])
        function addTodo(){
            todos.value.push({
                title: title.value
            })
            title.value=''
        }
        return ()=><div>
            <input type="text" vModel="{title.value}" />
            <button onClick={addTodo}>click</button>
            <ul>
                {
                    todos.value.length?todos.value.map(todo=>{
                        return <li>{todo.title}</li>
                    }):<li>no data</li>
                }
            </ul>
        </div>
    }
})