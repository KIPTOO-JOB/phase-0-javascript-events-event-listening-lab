// const input = document.getElementById ('button')
// input.addEventListener("click", addingEventListener)

// function addingEventListener() {
//     console.log("hello")
// }

function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', function() {
        alert('Element clicked!');
    });
}

// Call the function to set up the event listener
addingEventListener();