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

addingEventListener();