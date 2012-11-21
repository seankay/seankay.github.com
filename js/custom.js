$(document).ready(function() {
	$('#home').click(function() { loadPage('home') } );
	$('#projects').click(function() { loadPage('projects') } );
	$('#about').click(function() { loadPage('about') } );
	initPopover('#nav-skype');
});

function email(name, domain, withImage, msg) {
    var addr = name + '@' + domain;
    if(withImage) {
        document.write('<a id="nav-email" href="mailto:' + addr + '"><img src="img/mail.png" alt="email height="32px" width="32px"></a>');
    } else {
        document.write('<a id="nav-email" href="mailto:' + addr + '">' + msg +'</a>');
    }
}

function loadPage(page) {
	$('#navbar > li').attr('class', '');
	$('#navbar > li#' + page).attr('class','active');
	if(page === 'home')
		page = '';
	else
		page = page + '.html';
	$('#content').load('/' + page + ' #content');
}

function proxyClick(id)
{
	id = '#' + id;
	switch(id) {
		case '#nav-email':
		case '#nav-skype':
			$(id)[0].click();
			break;
		default:
			console.log("Unkown ID:" + id);
	}
}

function initPopover(id)
{
	$(id).popover({
		animation: true,
		html: true,
		placement: 'bottom',
		trigger: 'click',
		title: initPopoverTitle(id),
		content: initPopoverContent(id)
	})
}

function initPopoverContent(id)
{
	switch(id) {
		case '#nav-skype':
			return "<div class='well'><p class='tk-p-font'>dotxep</p></div>"
		default:
			console.log("Unknown ID:" + id);
	}
}

function initPopoverTitle(id)
{
	switch(id) {
		case '#nav-skype':
			return "<div><p class='tk-p-font text-info'>Skype Username:</p></div>"
		default:
			console.log("Unknown ID:" + id);
	}
}