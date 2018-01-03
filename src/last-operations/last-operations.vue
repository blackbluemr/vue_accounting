<template>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Amount</th>
          <th scope="col">Reason/Purpose</th>
          <th scope="col">Date</th>
          <th scope="col">Information</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in lastOperations">
          <th scope="row">{{ transaction.id }}</th>
          <td>{{ transaction.amount }}</td>
          <td>{{ transaction.reason }}</td>
          <td>{{ transaction.time }}</td>
          <td><a href="#">More Info</a></td>
        </tr>
      </tbody>
    </table>
</template>
<script>

let nextItem = 1;

export default {
  data () {
    return {
      lastOperations: [
        {
            id: nextItem++,
            amount: 500,
            reason: 'Buy more alcohol to continue new year party',
            time: '12:00:01 01.01.2018'
        },
        {
            id: nextItem++,
            amount: 500,
            reason: 'Buy more alcohol to continue new year party',
            time: '12:00:01 01.01.2018'
        },        
        {
            id: nextItem++,
            amount: 500,
            reason: 'Buy more alcohol to continue new year party',
            time: '12:00:01 01.01.2018'
        },
        {
            id: nextItem++,
            amount: 500,
            reason: 'Buy more alcohol to continue new year party',
            time: '12:00:01 01.01.2018'
        },
      ]
    }
  },
    methods: {
        addTodo () {
            const trimmedText = this.newTodoText.trim()
            if (trimmedText) {
                this.todos.push({
                    id: nextTodoId++,
                    text: trimmedText
                })
                this.newTodoText = ''
            }
        },
        removeTodo (idToRemove) {
            this.todos = this.todos.filter(todo => {
                return todo.id !== idToRemove
            })
          
</script>