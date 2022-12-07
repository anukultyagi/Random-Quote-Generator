const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4872ff2cfemshd29335df099b642p11b5d2jsn533b8bedf436',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
};

const generate = () => {
    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            author_name.innerHTML = response.originator.name;
            message.innerHTML = response.content;
        })
        .catch(err => console.error(err));
}
next.addEventListener('click', () => {
    generate()
})
generate()