<template>
  <div class="container">
    <h1>Calendar</h1><br>
    <router-link to="/event">
      <b> + </b>
    </router-link>
    <div class="header">
      <button @click="prevMonth">Prev month</button>
      <h3>{{ months[currentMonth] }}</h3>
      <button @click="nextMonth">Next month</button>
    </div>
    <ul>
      <li v-for="(item, index) in daysInMonth" :key="item">
        <span :class="{ 'active-day' : index === currentMonthDay }"> {{item}} </span>
      </li>
    </ul><ul>
    <li v-for="(day, index) in weekDays" :key="day">
      <span  :class="{ 'active-day' : index === currentDay }"> {{day}} </span>
    </li>
  </ul>
    <ul>
      <li class="events" v-for="event in events" :key="event">
        <span>{{event.nume}}</span>
        <span>{{event.ora}}</span>
        <span>{{event.ziua}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data() {
    return {
      months: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
      currentMonth: new Date().getMonth(),
      daysInMonth: new Date(new Date().getMonth(), new Date().getFullYear(), 0).getDate(),
      currentMonthDay: new Date().getDate() -1,
      weekDays: ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata', 'Duminica'],
      currentDay: new Date().getDay() -1
    }
  },
  methods: {
    prevMonth() {
      if (this.currentMonth > 0) {
        this.currentMonth -= 1
      }
    },
    nextMonth() {
      if(this.currentMonth < this.months.length - 1) {
        this.currentMonth +=1
      }
    }
  },
  computed: {
   events  () {
      return this.$store.state.events
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  background-color: transparent;
}
ul {
  list-style-type: none;
  li {
    padding: 0 5px;
    display: inline;
  }
}
.active-day {
  background-color: green;
}
router-link {
  display: inline-block;
}
.events {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
}
</style>