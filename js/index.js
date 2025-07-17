window.addEventListener('DOMContentLoaded', () => {renderPost()});

const container = document.querySelector('.irasai');

const renderPost = async () => {
    let uri = 'http://195.14.173.10:3000/naujienos'

    const res = await axios.get(uri);
    const posts = res.data;

    let template = ''
    posts.forEach(post => {
        template += `
            <div class="post">
                <h2>${post.title}</h2>
                <p><small>${post.id} likes</small></p>
                <p>${post.content.slice(0, 200)}</p>
                <a href="details.html?id=${post.id}">Placiau</a>
                <button class="btn btn-primary">Skaityti daugiau</button>
            </div>
        `
    })
    container.innerHTML = template;
}