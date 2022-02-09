const authorization = "Bearer sk_f9deb0090ac7688f94eb11ce09fd6a6e";

// 1. Select
const input = document.querySelector("#clearbitEmail");
const submitBtn = document.querySelector("#clearbitSubmit");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const userBio = document.querySelector("#userBio");
const userLocation = document.querySelector("#userLocation");
console.log(input, submitBtn, userName, userEmail, userBio, userLocation);
console.log("User email is.....");

const displayResults = (person) => {
  userBio.innerText = person.bio;
  userEmail.innerText = person.email;
  userName.innerText = person.name.fullName;
  userLocation.innerText = person.location;
};

const fetchClearbitAPI = (email) => {
  const url = `https://person.clearbit.com/v2/combined/find?email=${email}`;
  fetch(url, {
    headers: {Authorization: authorization}
  })
    .then(response => response.json())
    .then((data) => {
      const person = data.person;
      // 3. Modify the DOM
      // display clearBit data in the HTML elements
      displayResults(person);
    });
};

const stalkAPerson = (event) => {
  event.preventDefault();
  console.log(event);
  const emailAddress = input.value;
  // 2.5 API calls
  // get HTTP request to clearbit
  // submitBtn. onclick do
  // GET https://person.clearbit.com/v2/combined/find?email=:email
  fetchClearbitAPI(emailAddress);
};

// 2. Events
submitBtn.addEventListener("click", stalkAPerson);