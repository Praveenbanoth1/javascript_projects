let seasonSmallImageElement = document.getElementById("seasonSmallImage");
let seasonMediumImageElement = document.getElementById("seasonMediumImage");

let springSmallImage = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let springMediumImage = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
let summerSmallImage = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
let summerMediumImage = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
let autumnSmallImagae = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
let autumnMediumImage = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
let winterSmallImage = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
let winterMediumImage = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";

function springSeason() {
    seasonSmallImageElement.src = springSmallImage;
    seasonMediumImageElement.src = springMediumImage;
}

function summerSeason() {
    seasonSmallImageElement.src = summerSmallImage;
    seasonMediumImageElement.src = summerMediumImage;
}

function autumnSeason() {
    seasonSmallImageElement.src = autumnSmallImagae;
    seasonMediumImageElement.src = autumnMediumImage;
}

function winterSeason() {
    seasonSmallImageElement.src = winterSmallImage;
    seasonMediumImageElement.src = winterMediumImage;
}