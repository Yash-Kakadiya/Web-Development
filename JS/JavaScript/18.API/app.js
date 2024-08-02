//API

{ //reruest => early using XMLHHTP Request object, now uing fetch,etc...
    const url = "https://catfact.ninja/fact";


    //using fetch => returns a promise, automatically parse into JSON
    fetch(url)
        .then((response) => {
            return response.json(); //returns object
        })
        .then((data) => {
            console.log("data1 = " + data.fact);
            return fetch(url);
        })
        .then((response) => {
            return response.json();
        })
        .then((data2) => {
            console.log("data2 = " + data2.fact);
        })
        .catch((err) => {
            console.log("Error : " + err);
        });

    console.log("Helo World!");

    //using fetch with async nd await
    async function getFacts() {
        try {
            let response = await fetch(url);
            let data = await response.json();
            console.log(data.fact);

            let response2 = await fetch(url);
            let data2 = await response2.json();
            console.log(data2.fact);
        } catch (err) {
            console.log("Error : " + err);
        }
        console.log("Hi!");
    }

    getFacts();

}

{   //Axios => library to make HTTP requests (CDN link(as script in HTML file) can be used)
    //link from github: https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js
    //directly returns object
    //format: axiox.get/put/...(url)


    let btn = document.querySelector(".getBTN");
    const url = "https://dog.ceo/api/breeds/image/random";
    btn.addEventListener("click", async () => {
        let link = await getImageLink();
        let img = document.querySelector("#image");
        img.setAttribute("src", link);
        console.log("src : " + link);
    });
    async function getImageLink() {
        try {
            let response = await axios.get(url);
            return response.data.message;
        } catch (err) {
            console.log("Error : " + err);
            return "/";
        }
    }
}

{ //Sending headers with API request
    const url = "https://icanhazdadjoke.com/";
    async function getJokes() {
        try {
            const config = { headers: { Accept: "application/json" } };  //text/plain, text/html
            let response = await axios.get(url, config);
            console.log(response);
            console.log(response.data);
            console.log(response.data.joke);
        } catch (err) {
            console.log("Error : " + err);
        }
    }

    getJokes();
}


{ //Add informationn in url (query string)
    const url = "http://universities.hipolabs.com/search?name=";
    let btn = document.querySelector(".getUni");

    btn.addEventListener("click", async () => {
        let country = document.querySelector("input").value;
        console.log(country);

        let colArr = await getColleges(country);
        show(colArr);
    })

    function show(colArr) {
        let list = document.querySelector("#list");
        list.innerHTML = "";
        for (col of colArr) {
            console.log(col.name);

            let li = document.createElement("li");
            li.innerText = col.name;
            list.appendChild(li);
        }
    }

    async function getColleges(country) {
        try {
            let response = await axios.get(url + country);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log("Error : " + err);
            return [];
        }
    }
}