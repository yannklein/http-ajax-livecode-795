const authorization = "Bearer sk_f9deb0090ac7688f94eb11ce09fd6a6e";

// Pseudocode

// 1. Select submit button, form area, results area, userName, userEmail, userBio, userLocation
const submit = document.querySelector("#clearbitSubmit");
const userText = document.querySelector("#clearbitEmail");
const name = document.querySelector("#userName");
const email = document.querySelector("#userEmail");
const bio = document.querySelector("#userBio");
const location = document.querySelector("#userLocation");

const displayData = (person) => {
  name.innerText = person.name.fullName;
  email.innerText = person.email;
  bio.innerText = person.bio;
  location.innerText = person.location;
};

const fetchUserData = (email) => {
  const url = `https://person-stream.clearbit.com/v2/combined/find?email=${email}`;
  fetch(url, {
    headers: {'Authorization': authorization}
  })
    .then(response => response.json())
    .then((data)=> {
      console.log(data);
      const person = data.person;
      displayData(person);
    });
};

const stalkSomeone = (event) => {
  // preventdefault()?
  event.preventDefault();
  // 2.5 fetch(url)
  fetchUserData(userText.value);
};

// take out the contents 
// 2. submit event listener to the submit button
submit.addEventListener("click", stalkSomeone);

// 3. change the DOM 
// send the datas to results(tds)
