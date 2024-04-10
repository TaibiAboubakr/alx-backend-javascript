export default function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const data = {
				message: "Data fetched successfully from API",
				payload: {
					key1: "value1",
					key2: "value2"
				}
			};
			resolve(data);

		}, 2000);
	});
}
