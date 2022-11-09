const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			cart: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			createOrder: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/order/create-checkout-session")
					const data = await resp.json()
					setStore({ cart: data })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
		}
	};
};

export default getState;
