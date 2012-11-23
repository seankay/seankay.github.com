var employment_status = "unemployed";
var available = "Jan 2013";
var social = ['twitter', 'github', 'linkedin','rss'];

$(document).ready(function() {
	$('#home a').attr('href', '/');
	$('#projects a').attr('href', 'projects.html');
	initSocialBarIcons(social);
	createEmploymentButton(employment_status);
	$('#social-email').append(email('f.sean.kay','gmail.com',true, true));
});

function initSocialBarIcons(social) {
	var socialId = "";
	for( var i = 0; i < social.length; i++) {
		socialId = "#social-" + social[i] + " a";
		$(socialId).append(getImage(social[i]));
	}
}

/* 
 * Creates the employment button on the projects page.
 * Button created depends on employment_status.
 * 'employed' : creates red button
 * 'unemployed' : creates green button
 */
function createEmploymentButton(status) {
	var btn = "";
	switch(status) {
		case 'employed':
			btn = "<a id='employmentBtn' class='btn btn-red btn-small tk-p-font'> Available "+ available +"</a>"
			break;
		case 'unemployed':
			btn = "<a id='employmentBtn' class='btn btn-green btn-small tk-p-font' href='mailto:"
			 + email('f.sean.kay', 'gmail.com', false, false) + "'>Contact me!</a>"
			break;
		default: console.log("No idea what that status means. Maybe you should have some coffee ...");
	}

	$('#project-header').append(btn);

	//Bind action to button
	$('#employmentBtn').click(function() { evaluateEmploymentStatus(status) } );
}

function evaluateEmploymentStatus(status) {
	var msg = "";
	var popupColor = "";
	switch(status) {
		case('employed'):
			msg = "<h4>Sorry!</h4><p class='tk-p-font'>I'm currently not taking on any more projects. <i>Feel free to leave me an email!</i></p>";
			popupColor = "red";
			break;
		case('unemployed'):
			msg = "<h4>Thanks!</h4><p class='tk-p-font'>I'll get back to you as soon as humanly possible.</p>";
			popupColor = "green";
			break;
		default: console.log("No idea what that status means. Maybe you should have some coffee ...");
	}
	var popup = initPopup('popup',popupColor, msg)
	displayPopup(popup);
}

function displayPopup(popup) {
	popup.slideDown('slow');
}

function initPopup(id, popupColor, msg) {
	var alertClass = "";
	var popup = $('#' + id);
	switch(popupColor) {
		case 'red':
			alertClass = "alert-error";
			break;
		case 'green':
			alertClass = "alert-success";
			break;
		default: 
			alertClass = "alert-info";
	}
	popup.empty();
	popup.append("<div class='alert alert-block " + alertClass + "'>\
		  <button type='button' class='close' data-dismiss='alert'>x</button>" + msg +
		"</div>").hide();

	return popup;
}

function email(name, domain, withImage, withLink) {
    var addr = name + '@' + domain;

    if(withLink)
    	if(withImage) {
    		return ('<a href="mailto:' + addr + '">'+ getImage('email') + '</a>');	
    	} else {
        	return ('<a href="mailto:' + addr + '">' + addr + '</a>');
    }
    else
    	return addr;
}

function getImage(image)
{
	switch(image){
		case 'email':
			return "<img src='/img/mail.png' alt='email height='32px' width='32px'>";
			break;
		case 'twitter':
			return "<img src='/img/twitter.png' alt='twitter' height='32px' width='32px'>";
			break;
		case 'linkedin':
			return "<img src='/img/linkedin.png' alt='linkedin' height='32px' width='32px'>";
			break;
		case 'rss':
			return "<img src='/img/rss.png' alt='rss' height='32px' width='32px'>";
			break;
		case 'github':
			return "<img src='/img/octocat.png' alt='github' height='32px' width='32px'>";
			break;
		default: console.log("I don't know what image that is.");
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