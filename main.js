const { log } = console;

let path = "/search?q=nas";
let hostname = "http://kam.com";

let u = new URL(path, hostname);

let getQueryName = u.search.split("=")[1];

let key = "NAS";

if (path.endsWith(key.toLowerCase())) {
    if (getQueryName === path.split("q")[1].split("=")[1].toLowerCase()) {
        log ('correct');
    }
}