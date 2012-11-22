$(document).ready(function() {
	$('#home a').attr('href', '/')
	$('#projects a').attr('href', 'projects.html')
	$('#about a').attr('href', 'about.html')
	initPopover('#nav-skype');
});

function email(name, domain, withImage, msg) {
    var addr = name + '@' + domain;
    if(withImage) {
        document.write('<a id="nav-email" href="mailto:' + addr + '"><img src="/img/mail.png" alt="email height="32px" width="32px"></a>');
    } else {
        document.write('<a id="nav-email" href="mailto:' + addr + '">' + msg +'</a>');
    }
}

function loadPage(page) {
	$('#navbar > li').attr('class', '');
	$('#navbar > li#' + page).attr('class','active');
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
			return "<div class='text-info'><p class='tk-p-font'>Username: dotxep</p></div>"
		default:
			console.log("Unknown ID:" + id);
	}
}

function initPopoverTitle(id)
{
	switch(id) {
		case '#nav-skype':
			// return "<div><p class='tk-p-font text-info'>Add me on Skype</p></div>"
			return null;
		default:
			console.log("Unknown ID:" + id);
	}
}