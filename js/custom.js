$(document).ready(function() {
});

function email(name, domain, withlink) {
    var addr = name + '@' + domain;
    if(withlink) {
        return '<a href="mailto:' + addr + '"><img src="img/mail.png" alt="email height="32px" width="32px"></a>';
    } else {
        return addr;
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