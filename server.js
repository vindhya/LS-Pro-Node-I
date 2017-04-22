const express = require('express');
const friends = ['Inky', 'Pinky', 'Bob'];
const film = {
	name: 'Bridesmaids',
	genre: 'Comedy',
	description: 'This is a description of the movie, Bridesmaids.'
};

const app = express();

app.get('/name', (request, response) => {
	response.send('Vindhya');
});

app.get('/friends', (req, res) => {
	res.send(friends);
});

app.get('/favorite-film', (req, res) => {
	res.send(film);
});

app.listen(5000, () => {
	console.log('app listening on port 5000');
});