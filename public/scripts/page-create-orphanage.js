const map = L.map('mapid').setView([-23.5408711, -46.3178662], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
});

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker);

    // add icon layer
    marker = L.marker([lat, lng], {
            icon
        })
        .addTo(map);

});


// add photos field
function addPhotoField() {
    // get container photos
    const container = document.querySelector('#images');

    // get container to duplicate
    const fieldsContainer = document.querySelectorAll('.new-upload');

    //clone last photo added
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    // if empty, can't add
    const input = newFieldContainer.children[0];

    if (input.value == "") {
        alert('Não foi possivel adicionar. Verifique se o campo anterior "Foto" foi preenchido.');
        return;
    }

    // clear field text
    input.value = "";

    // add clone to container #images
    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if (fieldsContainer.length < 2) {
        // clear field text when X is clicked
        span.parentNode.children[0].value = "";
        return;
    }

    // delete field
    span.parentNode.remove();
}

// yes or no to add orphanage
function toggleSelect(event) {
    // remove .active class (buttons)
    document.querySelectorAll('.button-select button').forEach(button => button.classList.remove('active'));

    // add .active class to clicked button
    const button = event.currentTarget;
    button.classList.add('active');

    // update input hidden to selected value
    const input = document.querySelector('[name="open_on_weekends"]');

    input.value = button.dataset.value;
}

function validate(event) {
    //validate of lat lng 
    const validateLatLng = document.querySelector('[name=lat, name=lng]').value

    if (validateLatLng == "") {
        event.preventDefault()
        alert('Verifique o mapa!')
    }
}

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', )
//     .addTo(map);