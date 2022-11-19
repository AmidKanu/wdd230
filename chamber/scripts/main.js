let text = document.lastModified;
document.getElementById("lastmodified").innerHTML = "Last Modification: " + text;

const datefield = document.getElementById("header_date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;

let curryear = now.getFullYear();
document.getElementById("curryear").innerHTML =`@${curryear} Amid Chamber`;
document.getElementById("curryear2").innerHTML =`@${curryear} Amid Chamber | Amid Kanu | WDD 230 Project |`;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

// banner
var banner = document.createElement("div");
banner.className = "b";
banner.innerHTML = "🤝🏼 The chamber is for you and you are welcome to join us";

if (now.getDay() == 1 || now.getDay() == 2) {
    document.body.insertBefore(banner,document.body.childNodes[0]);
}

