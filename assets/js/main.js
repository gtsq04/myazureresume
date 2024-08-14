const functionApi = '';

const getVisitCount = () => {
let count =30;
fetch(functionApi),then(Response =>{
    return Response.json()
}).then(response =>{
    console.log("Website called the function api")
    count = response.count;
    document.getElementById("counter").innerText =count;
})
}