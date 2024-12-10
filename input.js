document.getElementById("accordionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const header = document.getElementById("headerTextInput").value;
    const message = document.getElementById("messageTextInput").value;

    const data = {
        header: header,
        message: message
    };

    fetch('https://web6api.onrender.com/api/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            alert(result.message);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

function FlushAccordions(){
    fetch('https://web6api.onrender.com/api/delete', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(result => {
            alert(result.message);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}