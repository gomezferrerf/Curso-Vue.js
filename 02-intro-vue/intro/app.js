const { createApp, ref } = Vue;

const app = createApp({
  //  template: `
  //        <h1>{{ message }}<h1>
  //       <p>-{{ author }}<p>
  //    `,

  setup() {
    const message = ref("I'm Batman");
    const author = ref("Bruce Wayne");

    changeQuote = () => {
      (message.value = "Soy Gokú"), (author.value = " Ya no sé");
    };

    //setTimeout(()=> {
    //    message.value = " Soy Gokú",
    //    author.value = " Ya no sé"
    //}, 3000)

    return { message, author, changeQuote };
  },
});

app.mount("#myApp");
