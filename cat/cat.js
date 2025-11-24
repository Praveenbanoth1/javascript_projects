function buttonOff() {
document.getElementById("bulbImage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
document.getElementById("catImage").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
document.getElementById("offBtn").style.backgroundColor = "#7b8794";
document.getElementById("onBtn").style.backgroundColor = "green";
document.getElementById("switchStatus").textContent = "Switched Off";
document.getElementById("switchStatus").style.color = "red";
}

function buttonOn() {
document.getElementById("bulbImage").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
document.getElementById("catImage").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
document.getElementById("onBtn").style.backgroundColor = "#7b8794";
document.getElementById("offBtn").style.backgroundColor = "red";
document.getElementById("switchStatus").textContent = "Switched On";
document.getElementById("switchStatus").style.color="Green";
}