const { createApp, ref } = Vue;

const batmanQuotes = ref([
  {
    quote: "It's not who I am underneath, but what I do that defines me.",
    author: "Bruce Wayne/Batman, Batman Begins",
  },
  {
    quote: "I have one power. I never give up.",
    author: "Bruce Wayne/Batman, Batman: Year One",
  },
  {
    quote:
      "A hero can be anyone. Even a man doing something as simple as reassuring a boy that the world hasn’t ended.",
    author: "Bruce Wayne/Batman, The Dark Knight Rises",
  },
  {
    quote: "Criminals are a superstitious cowardly lot.",
    author: "Bruce Wayne/Batman, Detective Comics #33",
  },
  {
    quote:
      "You either die a hero, or you live long enough to see yourself become the villain.",
    author: "Bruce Wayne/Batman, The Dark Knight",
  },
  {
    quote:
      "I wear a mask. And that mask, it's not to hide who I am, but to create what I am.",
    author: "Bruce Wayne/Batman, Batman: Hush",
  },
]);

const app = createApp({
  setup() {
    const showAuthor = ref(true);
    const newMessage =ref('')

    changeAuthorView = () => {
      if (showAuthor.value === true) {
        showAuthor.value = false;
      } else {
        showAuthor.value = true;
      }
    };

    const addQuote = () => {
      batmanQuotes.value.unshift({ quote: newMessage.value , author: "Fernando" })
      newMessage.value='';
    };

    return {
      batmanQuotes,
      showAuthor,
      newMessage,
      changeAuthorView,
      addQuote,
    };
  },
});

app.mount("#myApp2");
