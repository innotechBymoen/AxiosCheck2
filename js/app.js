
function postSuccess(response) {
    let post_container = document.getElementById(`post_container`);
    for(let i=0; i<response[`data`].length; i++) {
        post_container.insertAdjacentHTML(`beforeend`, 
            `<div>
                <h3>${response[`data`][i][`title`]}</h3>
                <p>${response[`data`][i][`body`]}</p>
            </div>`
        );
    }
}

function postFailure(error) {
    let post_container = document.getElementById(`post_container`);
    post_container.insertAdjacentHTML(`beforeend`, `<h1>Something has gone wrong. Please try again.</h1>`);
}

axios.request({
    url: `https://jsonplaceholder.typicode.com/posts`
}).then(postSuccess).catch(postFailure);