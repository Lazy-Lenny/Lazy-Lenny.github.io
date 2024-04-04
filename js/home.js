let movie = document.getElementById('currMovie');
let label = document.getElementById('currLabel');
let count = 0;
let movies = [
    'abigail.jpg',
    'apes.jpg',
    'cavilwar.jpg',
    'dm.jpg',
    'immaculate.jpg',
    'insideout.jpg',
    'omen.jpg',
    'robot.jpg',
    'thecrow.jpeg',
    'deadpool.jpg',
]
let labels = [
    'abigail.png',
    'apes.png',
    'cavilwar.png',
    'dm.png',
    'immaculate.png',
    'insideout.png',
    'omen.png',
    'robot.png',
    'thecrow.png',
    'deadpool.png',
]
setInterval(async () => {
    movie.style.opacity = 0;
    label.style.opacity = 0;
    await new Promise((r) => setInterval(r, 1000));
    movie.src = `../assets/images/movies/${movies[count]}`;
    label.src = `../assets/images/labels/${labels[count]}`;
    count = (count + 1) % 10;
    movie.style.opacity = 1;
    label.style.opacity = 1;
}, 6000)