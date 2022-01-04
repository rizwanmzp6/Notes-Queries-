// 1. Callbacks

const posts = [
  { title: 'Post One', body: 'This is post One' },
  { title: 'Post two', body: 'This is post two' },
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);

// 2. Promise

function createPost(post, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = true;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

createPost({ title: 'Post Three', body: 'This is post three' })
  .then(getPosts)
  .catch((err) => console.log(err));

//2.1 Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, 'Goodbye'),
);

Promise.all([promise1, promise2, promise3]).then((values) =>
  console.log(values),
);

// 3. Async - await

//ex1
async function init() {
  await createPost({ title: 'Post Three', body: 'This is post three' });
  getPosts();
}

init();

// ex2
async function fetchUsers() {
  const res = await fetch('hkn.com');

  const data = await res.json();
  console.log(data);
}

fetchUsers();


// 3.1 async/await error handling


// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {
    try {
        // wait until the promise resolves 
        let result = await promise; 

        console.log(result);
    }   
    catch(error) {
        console.log(error);
    }
}

// calling the async function
asyncFunc(); // Promise resolved
