let courseApi = 'http://localhost:3000/courses'
fetch(courseApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        document.querySelector("body").innerHTML = `<h1>${data[0].name}</h1> <p>${data[0].id}</p> <span style="color: red" >${data[0].description}</span>`
    })

