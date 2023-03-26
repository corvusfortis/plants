//burger menu start

(function () {
    const burgerItem = document.querySelector('.header-burger');
    const menu = document.querySelector('.navbar')
    const menuCloseItem = document.querySelector('.navbar-close');
    const menuItem = document.querySelectorAll('.navbar-item');
    burgerItem.addEventListener('click', (event) => {
        event.stopImmediatePropagation();
        menu.classList.add('navbar-active');
    });

    menuCloseItem.addEventListener('click', (event) => {
        
        menu.classList.remove('navbar-active')
    });

    document.addEventListener('click', (event) => {
       
        if (event.target != burgerItem && event.target != menu){
            menu.classList.remove('navbar-active');
            
        }
    })


    if(window.innerWidth <= 380){
        for(let i = 0; i < menuItem.length; i++){
            menuItem[i].addEventListener('click', (event) => {
                
                menu.classList.remove('navbar-active');
            })
        }
    }

}());

//burger menu end

//services blur start
let gardensBtn = document.querySelector('.gardens-btn');
let plantingBtn = document.querySelector('.planting-btn');
let lawnBtn = document.querySelector('.lawn-btn');
let gardensServices = document.querySelectorAll('.service-garden-care');
let plantingServices = document.querySelectorAll('.service-planting');
let lawnServices = document.querySelectorAll('.service-lawn-care');
let services = document.querySelectorAll('.services-item');
let servicesBtns = document.querySelectorAll('.btn-services');
let firstClickCheck = true;
let clickCounter = 0;





gardensBtn.addEventListener('click', function(){
    if(!this.classList.contains('services-btns-activated')){
        clickCounter++;
    }else{
        clickCounter--;
    }
    
    console.log(clickCounter);



    if(firstClickCheck){
        for(let i = 0; i < services.length; i++){
            services[i].classList.add('blurred-service');
        }
        firstClickCheck = false;
    }


    for(let i = 0; i < gardensServices.length; i++){
        gardensServices[i].classList.toggle('blurred-service');
    }

    gardensBtn.classList.toggle('services-btns-activated');

    if(clickCounter === 2){
        for(let btn of servicesBtns){
            if(!btn.classList.contains('services-btns-activated')){
                btn.classList.add('disabled-btn')
            }
        }
    }else if(clickCounter === 0){
        for(let item of services){
            item.classList.remove('blurred-service');
            firstClickCheck = true;
        }
    }else{
        for(let btn of servicesBtns){
            if(btn.classList.contains('disabled-btn')){
                btn.classList.remove('disabled-btn')
                btn.disabled = false;
            }
        }
    }
})

plantingBtn.addEventListener('click', function(){
    if(!this.classList.contains('services-btns-activated')){
        clickCounter++;
    }else{
        clickCounter--;
    };
    console.log(clickCounter);



    if(firstClickCheck){
        for(let i = 0; i < services.length; i++){
            services[i].classList.add('blurred-service');
        }
        firstClickCheck = false;
    }


    for(let i = 0; i < plantingServices.length; i++){
        plantingServices[i].classList.toggle('blurred-service');
    }

    plantingBtn.classList.toggle('services-btns-activated');

    if(clickCounter === 2){
        for(let btn of servicesBtns){
            if(!btn.classList.contains('services-btns-activated')){
                btn.classList.add('disabled-btn')
                btn.disabled = true;
            }
        }
    }else if(clickCounter === 0){
        for(let item of services){
            item.classList.remove('blurred-service');
            firstClickCheck = true;
        }
    }else{
        for(let btn of servicesBtns){
            if(btn.classList.contains('disabled-btn')){
                btn.classList.remove('disabled-btn')
                btn.disabled = false;
            }
        }
    }
})

lawnBtn.addEventListener('click', function(){
    if(!this.classList.contains('services-btns-activated')){
        clickCounter++;
    }else{
        clickCounter--;
    }
    console.log(clickCounter);



    if(firstClickCheck){
        for(let i = 0; i < services.length; i++){
            services[i].classList.add('blurred-service');
        }
        firstClickCheck = false;
    }


    for(let i = 0; i < lawnServices.length; i++){
        lawnServices[i].classList.toggle('blurred-service');
    }

    lawnBtn.classList.toggle('services-btns-activated');

    if(clickCounter === 2){
        for(let btn of servicesBtns){
            if(!btn.classList.contains('services-btns-activated')){
                btn.classList.add('disabled-btn')
                btn.disabled = true;
            }
        }
    }else if(clickCounter === 0){
        for(let item of services){
            item.classList.remove('blurred-service');
            firstClickCheck = true;
        }
    }else{
        for(let btn of servicesBtns){
            if(btn.classList.contains('disabled-btn')){
                btn.classList.remove('disabled-btn')
                btn.disabled = false;
            }
        }
    }
})


//services blur end

//prices dropdown start

let pricesItems = document.querySelectorAll('.prices-item');

for(let item of pricesItems){
    item.addEventListener('click', pricesDropDown);
}

let counter = 0;


function pricesDropDown (event) {
    console.log(event.target);
    if(!event.target.classList.contains('prices-open-button')){
    for(let elem of pricesItems){
        if(elem !== this){
            elem.classList.remove('prices-item-dropdown');
            elem.querySelector('.bottom-line').classList.add('hidden');
            elem.querySelector('.prices-item-hidden-container').classList.add('hidden');
            elem.querySelector('.accordion-img').classList.remove('accordion-rotate');
            elem.querySelector('.prices-item-hidden-container').style.transition = "0s";
            elem.querySelector('.prices-item-hidden-container').style.transitionDelay = "0s";
            elem.querySelector('.bottom-line').style.transition = "0s";
            elem.querySelector('.bottom-line').style.transitionDelay = "0s";
            elem.querySelector('.accordion-img').src = './assets/accordion_btn2.svg';
        }
    }

    if(this.classList.contains('prices-item-dropdown')){
        this.querySelector('.prices-item-hidden-container').style.transition = "0s";
        this.querySelector('.prices-item-hidden-container').style.transitionDelay = "0s";
        this.querySelector('.bottom-line').style.transition = "0s";
        this.querySelector('.bottom-line').style.transitionDelay = "0s";
        this.querySelector('.accordion-img').src = './assets/accordion_btn2.svg'
    }else{
        this.querySelector('.prices-item-hidden-container').style.transition = ".5s";
        this.querySelector('.prices-item-hidden-container').style.transitionDelay = ".5s";
        this.querySelector('.bottom-line').style.transition = ".5s";
        this.querySelector('.bottom-line').style.transitionDelay = ".5s";
        this.querySelector('.accordion-img').src = './assets/accordion_btn1.svg'
    }
    this.classList.toggle('prices-item-dropdown');
    this.querySelector('.accordion-img').classList.toggle('accordion-rotate');
    this.querySelector('.bottom-line').classList.toggle('hidden');
    this.querySelector('.prices-item-hidden-container').classList.toggle('hidden');
 }
}

//prices dropdown end

//contacts select start


let contactsContainer = document.querySelector('.contacts-container');
let contactsContainerList = document.querySelector('.contacts-container-list');
let contactsContainerListItems = document.querySelectorAll('.contacts-container-item');
let cityName = document.querySelector('.city-name');
let contactsCard = document.querySelector('.contacts-card');
let city = document.querySelector('.city');
let phone = document.querySelector('.phone');
let address = document.querySelector('.address');
let contactsCallButton = document.querySelector('.callref');
let accordionContacts = document.querySelector('.accordion-contacts');

contactsContainer.addEventListener('mouseover', function(){
    contactsContainer.style.backgroundColor = '#C1E698';
    contactsContainer.style.boxShadow = 'none';
})

contactsContainer.addEventListener('click', function(){
    contactsContainer.style.backgroundColor = '#C1E698';
    contactsContainer.style.boxShadow = 'none';
    contactsContainerList.classList.toggle('removed');
    contactsCard.classList.add('removed');
    accordionContacts.src = './assets/contacts_acc_btn_up.svg';
    accordionContacts.classList.toggle('accordion-rotate');
    if(window.innerWidth <= 768  && !contactsContainerList.classList.contains('removed')){
        document.querySelector('.woman').style.top = '4px';
        document.querySelector('.contacts-header-wrapper').style.top = '67px';
    }else if(window.innerWidth <= 768 && contactsContainerList.classList.contains('removed')){
        document.querySelector('.woman').style.top = '104px';
        document.querySelector('.contacts-header-wrapper').style.top = '24px';
    }

    if(window.innerWidth <= 768 && cityName.innerHTML !== 'City' && contactsContainerList.classList.contains('removed')){
        contactsCard.classList.remove('removed');
        document.querySelector('.woman').style.top = '4px';
        document.querySelector('.contacts-header-wrapper').style.top = '67px';
    }

    if(window.innerWidth <= 380){
        document.querySelector('.contacts-header-wrapper').style.top = '126px';
    }

    if(window.innerWidth <= 380 && cityName.innerHTML === 'City'){
        document.querySelector('.woman').classList.toggle('removed');
    }

    if(window.innerWidth <= 380 && cityName.innerHTML !== 'City' && contactsContainerList.classList.contains('removed')){
        contactsCard.classList.remove('removed');
    }
})

contactsContainer.addEventListener('mouseleave', function(){
    if(contactsContainerList.classList.contains('removed') && cityName.innerHTML === 'City'){
    contactsContainer.style.backgroundColor = '#D6E7D2';
    contactsContainer.style.boxShadow = '0 4px 4px 0 rgb(0, 0, 0, 0.25)';
    }
})

for (let item of contactsContainerListItems){
    item.addEventListener('mouseover', function(){
        item.classList.add('contacts-container-item-selected');
    })    

    item.addEventListener('mouseleave', function(){
        item.classList.remove('contacts-container-item-selected');
    })    

    item.addEventListener('click', function(){
        contactsContainerList.classList.add('removed');
        item.classList.remove('contacts-container-item-selected');
        cityName.innerHTML = item.innerHTML;
        cityName.style.fontSize = '16px';
        cityName.style.color = '#499A18';
        contactsCard.classList.remove('removed');
        city.innerHTML = item.innerHTML;

        if(window.innerWidth <= 768){
            document.querySelector('.woman').style.top = '4px';
        }

        if(window.innerWidth <= 380){
            document.querySelector('.woman').style.top = '4px';
            document.querySelector('.contacts-header-wrapper').style.top = '126px';
        }

        switch(item.innerHTML){
            case 'Canandaigua, NY':
                phone.innerHTML = '+1  585	393 0001';
                address.innerHTML = '151 Charlotte Street';
            break;

            case 'New York City':
                phone.innerHTML = '+1	212	456 0002';
                address.innerHTML = '9 East 91st Street';
            break;

            case 'Yonkers, NY':
                phone.innerHTML = '+1	914	678 0003';
                address.innerHTML = '511 Warburton Ave';
            break;

            case 'Sherrill, NY':
                phone.innerHTML = '+1	315	908 0004';
                address.innerHTML = '14 WEST Noyes BLVD';
            break;
        }

        contactsCallButton.href = "tel:+" + phone.innerHTML.split('').filter(item => /[0-9]/.test(item)).join('');

    })
}

document.addEventListener('click', function(event){
    if(event.target !== contactsContainerList && event.target !== contactsContainer && event.target !== cityName && event.target !== document.querySelector('.accodrion-contacts')){
        contactsContainerList.classList.add('removed');
        accordionContacts.src = './assets/contacts_acc_btn_down.svg';
        accordionContacts.classList.remove('accordion-rotate');
        if(cityName.innerHTML !== 'City'){
            contactsCard.classList.remove('removed');
        }else{
            contactsContainer.style.backgroundColor = '#D6E7D2';
            contactsContainer.style.boxShadow = '0 4px 4px 0 rgb(0, 0, 0, 0.25)';
            if(window.innerWidth <= 768 && !event.target.classList.contains('contacts-container-item')){
                document.querySelector('.woman').style.top = '104px';
                document.querySelector('.contacts-header-wrapper').style.top = '24px';
            }
            if(window.innerWidth <= 380 && !event.target.classList.contains('contacts-container-item')){
                document.querySelector('.woman').style.top = '104px';
                document.querySelector('.woman').classList.remove('removed');
                document.querySelector('.contacts-header-wrapper').style.top = '126px';
            }
        }
    }
})

//contacts select end

console.log('125 баллов\n\nВыполненные пункты:\n\n1) При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной\n\n2) Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг\n\n3) Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur\n\n4) При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым\n\n5) Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается\n\n6) В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе\n\n7) При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу');