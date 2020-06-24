const journey = {
  from: "Tallinn",
  to: "Berlin",
  cards: [
    {
      id: 1,
      color: "is-success",
      title: "⏰ 7:55 AM",
      subtitle: "Wake up",
    },
    {
      id: 2,
      color: "is-info",
      title: "🚕 8:45 AM",
      subtitle: "Taxi",
    },
  ],
};

var app = new Vue({
  el: "#app",
  data: {
    from: journey.from,
    to: journey.to,
  },
});
