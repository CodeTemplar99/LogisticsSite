// side bar
let isOpen = false;

function showSideBar() {
    document.querySelector('#navbarSupportedContent').style.display = isOpen ? "none" : "block"
    isOpen = !isOpen;

}

// $(".show-modal").click(function () {
//     $('modal').modal('show')
// });

// $('.show-modal').click(function showModal() {
//         $('#myModal').modal('show')

//     }
//     showModal();
// )