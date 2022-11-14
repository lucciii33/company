const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      cart: [],
      language: "en",
    },
    actions: {
      // Use getActions to call a function within a fuction
      changeLanguege: () => {
        if (getStore().language === "en") {
          setStore({
            language: "es",
          });
        } else {
          setStore({
            language: "en",
          });
        }

        // if (getStore().language === "es") {
        //   setStore({
        //     language: "en",
        //   });
        // }
      },

      createOrder: (order) => {
        const store = getStore();
        fetch(`${process.env.BACKEND_URL}/order/create-checkout-session`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(order),
        })
          .then((response) => response.json())
          .then((data) => {
            return (window.location.href = data.url);
          })
          .catch((err) => console.log(err));
      },

      addToCart: (item) => {
        const store = getStore();
        const newList = [...store.cart, item];
        setStore({ cart: newList });
      },
    },
  };
};

export default getState;
