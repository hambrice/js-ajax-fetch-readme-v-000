const app = "I don't do much.";
const token = bdca0940a37aade6ffe317b0dce909acf54e9383
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
