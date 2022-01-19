const App = {
  data() {
    return {
      placeholderString: "Введите название заметки",
      title: "Список заметок",
      inputValue: "",
      notes: ["Заметка 1", "Заметка 2"],
    };
  },
  methods: {
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    toUpperCase(item) {
        return item.toUpperCase()
    },
    removeNote(idx) {
      this.notes.splice(idx, 1);
    },
  },
  computed: {
      doubleCount() {
          return this.notes.length*2
      }
  },
  watch: {
      inputValue(value) {
          if (value.length>10){
              this.inputValue = 0
          }
      }
  }
};

Vue.createApp(App).mount("#app");
