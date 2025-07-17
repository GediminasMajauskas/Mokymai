
const naujaUzdotis = {
    userId: 1,
    id: 101,
    title: "Nauja užduotis",
    body: "Ši užduotis yra pavyzdinė.",
    completed: false,
};

axios.post('https://jsonplaceholder.typicode.com/posts', naujaUzdotis)
  .then(response => {console.log('Response:', response);
  })
  .catch(error => {console.error('error', error);
  });