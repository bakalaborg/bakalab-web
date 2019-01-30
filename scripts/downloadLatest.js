function downloadLatest()
{
	var req = new XMLHttpRequest();
	req.open("GET", "https://api.github.com/repos/bakalaborg/bakalab/releases",false);
	req.send(null);
	var releases = JSON.parse(req.responseText);
	window.location.assign(releases[0].assets[0].browser_download_url);
}
