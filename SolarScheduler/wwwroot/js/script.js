$('.datetimepicker').datetimepicker({
    timepicker: true,
    datapicker: true,
    format: "Y-m-d H:i",
    theme: "dark",
    step: 5
});

let preloader = document.querySelector('.preloader');
setTimeout(window.addEventListener('load', () => {
    preloader.style.visibility = "hidden";
}), 2000)

window.onload = function () {
    document.querySelector('.is-checked').click()
}

//*****************************************************************************************
var Create_wrap = document.querySelector(".Create_wrap");
var Open = document.querySelector(".open");
var Close = document.querySelector(".close");

Open.addEventListener("click", () => {

    if (Open.classList.contains('Close')) {
        Create_wrap.classList.remove('Create_wrap_open');
        Create_wrap.classList.add('Create_wrap_close');
        Open.classList.remove('Close');
        return;
    }
    else {
        Create_wrap.classList.add('Create_wrap_open');
        Create_wrap.classList.remove('Create_wrap_close');
        Open.classList.add('Close');
        return;
    }
})

Close.addEventListener("click", () => {
    Create_wrap.classList.remove('Create_wrap_open');
    Create_wrap.classList.add('Create_wrap_close');
    Open.classList.remove('Close');
})


var sort = document.querySelector(".sort");
var buttonGroup = document.querySelector(".button-group");

sort.addEventListener("click", () => {

    if (sort.classList.contains('closeSort')) {
        buttonGroup.classList.remove('sort_open');
        buttonGroup.classList.add('sort_close');
        sort.classList.remove('closeSort');
        sort.classList.add('openSort');
        return;
    }
    else if (sort.classList.contains('openSort')){
        buttonGroup.classList.add('sort_open');
        buttonGroup.classList.remove('sort_close');
        sort.classList.add('closeSort');
        sort.classList.remove('openSort');
        return;
    }
})


//*****************************************************************************************


var Labels1 = document.querySelectorAll('.important');
var Labels2 = document.querySelectorAll('.not_important');
var Labels3 = document.querySelectorAll('.none');


for (var i = 0; i < Labels1.length; i++) {
    var Label1 = Labels1[i];
    Label1.innerText = "1"
}
for (var i = 0; i < Labels2.length; i++) {
    var Label2 = Labels2[i];
    Label2.innerText = "2"
}

for (var i = 0; i < Labels3.length; i++) {
    var Label3 = Labels3[i];
    Label3.innerText = "3"
}






//*****************************************************************************************

document.addEventListener("DOMContentLoaded", function (event) {
    docReady();
});

function docReady() {
    setInterval(updateCards, 1000);
}
var cards = document.querySelectorAll('.todo-card');
function updateCards() {
  
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        updateCard(card);
    }
}

function updateCard(card) {
    var timeLeftElem = card.querySelector('.time-left');
    var doneElem = card.querySelector('.done');
    var timeElem = card.querySelector('.due-date');
    var timeStr = card.querySelector('.due-date').innerText;
    var timeElemNone = "0001-01-01 00:00";

    if (doneElem != null) {
        timeLeftElem.innerText = 'Done';
        if (timeStr == timeElemNone) {
            timeElem.innerHTML = "";
        }
        if (doneElem = null) {
            timeLeftElem.style.display = "none";
        }
        return;
    }

    if (timeStr == timeElemNone) {
        timeElem.innerHTML = "";
        timeLeftElem.style.display = "none";
        return;
    }

    var dueDate = moment(timeStr);
    var now = moment();
    var nowIf = moment().format("YYYY-MM-DD HH:mm")
    var daysBetween = dueDate.diff(now, 'days');

    if (daysBetween > 0) {
        timeLeftElem.innerText = 'Left: ' + daysBetween + ' day(s)';
        return;
    }

    if (timeStr > nowIf) {
        var diff = dueDate.diff(now);
        var formattedTime = moment.utc(diff).format("HH:mm");
        timeLeftElem.innerText = 'Left: ' + formattedTime;
        return;
    }
    if (timeStr > timeElemNone) {
        timeLeftElem.innerText = "Time's up!";
        timeLeftElem.style.color = "#ff0000";
        return;
    }


}
//*****************************************************************************************

$(document).ready(function () {
    var iso = new Isotope('.card-content', {
        itemSelector: '.todo-wrap',
        stagger: 30,
        layoutMode: 'masonry',
        getSortData: {
            todoTitle: '.todoTitle',
            ID_min_max: '.ID parseInt',
            ID_max_min: '.ID parseInt',
            dueDate: '.due-date',
            CreationDateSort: '.CreationDateSort',
            card_box_label: '.card_box_label',
           
        },
        sortAscending: {
            ID_min_max: false,
            dueDate: false,
            CreationDateSort: false,
        },
    }
    );

    var sortByGroup = document.querySelector('.sort-by-button-group');
    sortByGroup.addEventListener('click', function (event) {

        if (!matchesSelector(event.target, '.button')) {
            return;
        }
        var sortValue = event.target.getAttribute('data-sort-value');
        iso.arrange({ sortBy: sortValue });
    });


    var buttonGroups = document.querySelectorAll('.button-group');
    for (var i = 0; i < buttonGroups.length; i++) {
        buttonGroups[i].addEventListener('click', onButtonGroupClick);
    }

    function onButtonGroupClick(event) {
        if (!matchesSelector(event.target, '.button')) {
            return;
        }
        var button = event.target;
        button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
        button.classList.add('is-checked');
    }
})







