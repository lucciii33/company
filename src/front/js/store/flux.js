const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      cart: [],
      language: "en",
      contactForm: [],
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

      createContactForm: (email, phone, terms, fullName, description) => {
        // let storeCartShop = getStore().carShop;
        //   let favoriteString = favorites.toString();
        fetch("http://localhost:5000/contact/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, phone, terms, fullName, description }),
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({ contactForm: data });
          })

          .catch((err) => console.log(err));
      },
    },
  };
};

export default getState;
