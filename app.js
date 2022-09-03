const app = Vue.createApp({
  // We can write html codes in template but larger application will make code noisy
  // template: `<h1>Hello {{firstName}}!</h1>`,

  // Data is a function that returns an object
  data() {
    return {
      firstName: 'Gaurav',
      lastName: 'Suhanda',
      email: 'gaurav.suhanda@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/1.jpg',
    };
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api');
      const { results } = await res.json();

      // console.log(results);

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});

app.mount('#app');
