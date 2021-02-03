<template>
  <div class="calendar-page">
    <div class="title">
      <h1>Calendar</h1><br>
      <router-link to="/event">
        <img src="../assets/add.svg" alt="add event">
      </router-link>
      <div v-if="!user.name">
        <router-link to="/register">Register</router-link>
        <router-link to="/login">Login</router-link>
      </div>
      <button  @click="logout">Logout</button>
      <router-link to="/profile">Profile</router-link>
    </div>
    <header>
      <button @click="prevMonth" :disabled="currentMonth === 0">
        <img src="../assets/right-arrow.svg" alt="next-month">
      </button>
      <h3>{{ months[currentMonth] }}</h3>
      <button @click="nextMonth" :disabled="currentMonth === 11">
        <img src="../assets/right-arrow.svg" alt="next-month">
      </button>
    </header>
    <div class="calendar">
      <ul class="width">
        <li v-for="(item, index) in daysInMonth" :key="item">
          <button :class="{ 'active-day' : index === currentMonthDay }" @click="filterEvents"> {{ item }} </button>
        </li>
      </ul>
      <ul class="width">
        <li v-for="(day, index) in weekDays" :key="day">
          <span :class="{ 'active-day' : index === currentDay }"> {{ day }} </span>
        </li>
      </ul>
      <ul>
        <li class="events" v-for="(event, index) in events" :key="event">
          <span>{{ event.value.name }}</span>
          <span>{{ event.value.details }}</span>
          <span>{{ event.value.date }}</span>
          <button @click="deleteEvent(index)">Delete</button>
          <router-link :to="`/event/${event.id}`">EDIT</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data() {
    return {
      months: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
      currentMonth: new Date().getMonth(),
      daysInMonth: new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate(),
      currentMonthDay: new Date().getDate() - 1,
      weekDays: ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata', 'Duminica'],
      currentDay: new Date().getDay() - 1
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
    filterEvents(index) {
      this.$store.commit('FILTER_EVENTS', index)
    },
    deleteEvent(index) {
      this.$store.dispatch('DELETE_EVENT')
    },
    prevMonth() {
      if (this.currentMonth > 0) {
        this.currentMonth -= 1
        this.updateDaysInMonth()
      }
    },
    nextMonth() {
      if (this.currentMonth < this.months.length - 1) {
        this.currentMonth += 1
        this.updateDaysInMonth()
      }
    },
    updateDaysInMonth() {
      this.daysInMonth = new Date(new Date().getFullYear(), this.currentMonth + 1, 0).getDate();
    }
  },
  computed: {
    events() {
      return this.$store.state.events
    },
    user() {
      return this.$store.state.user
    }
  },
  created() {
    this.$store.dispatch('get_events');
  }
}
</script>

<style lang="scss">
.calendar-page {
  .calendar {
    margin: 0 10rem;
  }

  .width {
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;

  }

  .title {
    margin: 3rem 10rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    img {
      width: 35px;
    }
  }

  header {
    width: 220px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button:first-child {
      img {
        transform: rotate(180deg);
      }
    }
  }


  button {
    border: none;
    width: 30px;
    background-color: transparent;

    &:disabled {
      img {
        opacity: .3;
      }
    }

    img {
      width: 100%;
    }
  }

  ul {
    li {
      display: inline-flex;
    }
  }

  .active-day {
    background-color: greenyellow;
  }


  .events {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid transparent;
    justify-content: space-between;
  }
}

</style>