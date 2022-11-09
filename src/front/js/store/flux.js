const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      cart: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      createOrder: () => {
        const store = getStore();
        fetch(`${process.env.BACKEND_URL}/order/create-checkout-session`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cart: {},
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            // setStore({ cart: data });
            // return data;
            return (window.location.href = data.url);
          })
          .catch((err) => console.log(err));
      },
    },
  };
};

export default getState;
