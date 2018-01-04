<template>
    <table id="LastOperations" class="table">
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
          <td><a v-on:click="viewInfo({{ transaction.id }})">More Info</a></td>
        </tr>
      </tbody>
    </table>
</template>
<script>

let nextItem = 1;

export default {
  name: 'LastOperations',
  data () {
    return {
      lastOperations: [
        {
            id: nextItem++,
            amount: 500,
            reason: 'Buying more alcohol to continue new year party',
            time: '12:00:01 01.01.2018'
        },
        {
            id: nextItem++,
            amount: 1200,
            reason: 'Buying drugs for new year party',
            time: '14:23:12 29.12.2017'
        },        
        {
            id: nextItem++,
            amount: 260,
            reason: 'Buying ',
            time: '11:24:21 26.12.2017'
        },
        {
            id: nextItem++,
            amount: 3200,
            reason: 'Buying shoes Dr.Martince',
            time: '16:05:21 11.11.2017'
        },
      ]
    }
  },
  methods: {
    viewInfo (transactionId) {
    
    }
  }
}         
</script>