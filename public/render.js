let aValue = localStorage.getItem('newUser');
let currentUser = aValue.split(',')[1].split(':')[1].replace(/['"]+/g, '');
let currentEmail = aValue.split(',')[2].split(':')[1].replace(/['"]+/g, '');

var nameOfUser = $('#currentUser');
console.log(currentUser);
var allEvents = $('#allEvents');
var listPugs = $('#listPugs');
var events;
$(document).ready(function () {
    $.get('/findall', function (data) {
        type: 'GET'
        events = data;
        initializeEvents(events);
    })

    function userName() {
        let name = $('<h4>');
        name.addClass('card-title');
        name.addClass('text-center');
        name.text(currentUser);
        nameOfUser.append(name);
    }

    userName();

    function initializeEvents(events) {
        allEvents.empty();
        var eventsToAdd = [];
        console.log(events);
        for (let i = 0; i < events.length; i++) {
            console.log(i);
            eventsToAdd.push(createNewEvent(events[i]))
        }
        allEvents.prepend(eventsToAdd);
        console.log(eventsToAdd);
    }

    function createNewEvent(events) {
        var m = moment(events.StartTime, 'HH-mm-ss').format('h:mm A');
        console.log(m);
        let event = $('<div>');
        let body = $('<div>');
        let city = $('<p>');
        let name = $('<h4>');
        let time = $('<p>');
        let descript = $('<p>');
        let btn = $('<button>')
        event.addClass("card");
        event.addClass("eventRendering");
        body.addClass('card-body');
        time.addClass('float-right');
        name.addClass('bold');
        city.addClass('bold');
        btn.attr('type', 'button');
        btn.attr('event', events.name);
        btn.attr('time', events.StartTime);
        btn.attr("email", currentEmail);  
        btn.addClass('join');
        btn.addClass('btn btn-primary');
        btn.text('Join');
        descript.text(events.description);
        time.text(m);
        name.text(events.name);
        city.text(events.city);
        body.append(name);
        body.append(time);
        body.append(city);
        body.append(descript);
        body.append(btn);
        event.append(body);
        return event;
    }

    $(document).on('click', '.join', function (event) {
        var time = $(this).attr('time');
        var name = $(this).attr('event');
        var email = $(this).attr('email');
        console.log(event);

        let myPug = $('<li>');
        myPug.text(name + ' ' + time);
        myPug.addClass('list-group');
        myPug.addClass('p-2');
        listPugs.append(myPug);

        $.get('/sendmail/'+time+'/'+name + '/' +email, function(){
            type: 'GET'              
          })
    })

    $('#goTime').on('click', function (event) {
        event.preventDefault();
        var newEvent = {
            name: $('#materialContactFormName').val().trim(),
            city: $('#event_Loc').val().trim(),
            StartTime: $('#event_Time').val(),
            description: $('#form79textarea').val().trim()
        }
        console.log(newEvent)
        $.post('/newevent', {
            type: 'POST',
            data: newEvent
        }).then(function (result) {
            console.log(result);
            location.reload();
        });
    })
})