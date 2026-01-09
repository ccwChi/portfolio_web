// api.js
const weatherKey = process.env.REACT_APP_WEATHER_API_KEY;
const weatherUrl = process.env.REACT_APP_WEATHER_API_URL;
// GET
const getData = async (url = "") => {

	// const headers = {
	// 	"Content-Type": "application/json",
	// };

	return await fetch(`https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${weatherKey}&${url}`, {
		method: "GET",
		// headers,
	})
		.then((response) => {
			if (!response.ok) {
				const statusCode = response.status;
				console.error("HTTP Error: Status Code", statusCode);
			}
			return response.json();
		})
		.catch((error) => {
			console.error("System Error：", error);
			// throw error;
			return error.message;
		});
};

export {getData}