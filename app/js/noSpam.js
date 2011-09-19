function nospam(user,domain,subject) {
	locationstring = "mailto:" + user + "@" + domain + "?subject=" + subject;
window.location = locationstring;
}