const cardList = [
    {
        title: "Meet Snowball the Cute Rabbit!!",
        image: "images/img 4.jpg",
        link: "Snowball",
        desciption: "Ola, I hope you have a wonderful day :D!!!"
    },
    {
        title: "Meet Fudge!",
        image: "images/img 5.jpg",
        link: "Fudge",
        desciption: "Cute but kind of evil :P!!"
    }
]

const clickMe = () => {
    alert("Thank you for the click! I wish you have a wonderful & fantastic day :)!");
}

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#First_name').val();
    formData.last_name = $('#Last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();

    console.log("Form Data Submitted: ", formData);
}

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text card-desc-color">' + item.desciption + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend);
    });
}

$(document).ready(function(){
    $('.materialboxed').materialbox();

//Event listener for Click Me button
$('#clickMeButton').click(() => {
    clickMe() ;
}) ;
//Event listener for form submission
    $('#formSubmit').click(() => {
        submitForm();
    }) ;

    addCards(cardList);
    $('.modal').modal();
});