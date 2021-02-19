let add_to_do_button = document.getElementById ('add_to_do');
//Proměnná add_to_do_button bude pracovat s ID parametrem, který je v HTML souboru jako "add_to_do"
let to_do_container = document.getElementById ('to_do_container');
//Proměnná to_do_container bude pracovat s ID parametrem, který je v HTML souboru jako "to_do_container"
let input_field = document.getElementById ('input_field');
//Proměnná input_field bude pracovat s ID parametrem, který je v HTML souboru jako "input_field"

//Tyto tři kódy zajišťují, že naše let proměnné budou mít vazbu na elementy v HTML souboru.

add_to_do_button.addEventListener('click', function () {
    var paragraph = document.createElement('p')
    paragraph.innerText = input_field.value;
    //Zde udáváme, že proměnná paragraf se po napsaní do input_field stane hodnotou, která se v konzoli uloží jako <p>hodnota
    to_do_container.appendChild(paragraph);
    //Proměnné add_to_do_button jsme přidali funkci seznamu, kdy po kliknutí na přidání položky na seznam, se nám v kontejneru v konzoli objeví nový "p" element.
    //appenchild definuje řazení položek do seznamu
    paragraph.classList.add('paragraph-styling');
    //zde se odkazujeme na styling v našem css sheetu a JS ho využije
    input_field.value = "";
    //nyní když zadáme text do pole, tak po kliknutí na tlačítko z pole zmizí / předtím stále zůstávalo v poli
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through";
    })
    //nyní po kliknutí na položku na seznamu, se položka přeškrtne
    paragraph.addEventListener('dblclick', function () {
        to_do_container.removeChild(paragraph);
    })
    //po dvojitém kliknutí na položku na seznamu, položka zmizí
    
})