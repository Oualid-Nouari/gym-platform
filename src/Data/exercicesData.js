export const exercicesOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cbd3b44da7msh9123292416f1f9cp13cbcajsn58b13c7af286',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const fetchExercicesData = async (link, options) => {
    const result = await fetch(link, options);
    const data = await result.json();
    return data;
}