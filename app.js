var app = new Vue({
  el: "#app",
  data: {
    users: [],
  },
  methods: {
    fetchusers: function () {
      fetch("https://sign-me-up-app.herokuapp.com/showusers")
        .then((res) => res.json())
        .then((json) => (this.users = json));
      console.log(this.users);
    },
  },
});
var refreshfunc = () => {
  window.location.reload();
};

var refresh = () => {
  setTimeout(refreshfunc, 2000);
};

app.fetchusers();
