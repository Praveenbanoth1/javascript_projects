let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResults(result){
    let {link,title,description} = result;

    let resultItem = document.createElement("div");
    resultItem.classList.add("result-item");

    let titleEl = document.createElement("a");
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    titleEl.classList.add("result-title");
    resultItem.appendChild(titleEl);

    let titleBreakEl = document.createElement("br");
    resultItem.appendChild(titleBreakEl);

    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.textContent = link;
    urlEl.target = "_blank";
    urlEl.href = link;
    resultItem.appendChild(urlEl);

    let urlBreak = document.createElement("br");
    resultItem.appendChild(urlBreak);

    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    resultItem.appendChild(descriptionEl);


    searchResultsEl.appendChild(resultItem);
};

function dispayResults(searchResults){
    spinnerEl.classList.add("d-none")
    for (let result of searchResults){
        createAndAppendSearchResults(result);
    }
}

function searchWikipedia(event){
    if(event.key ==="Enter"){
        spinnerEl.classList.remove("d-none")
        searchResultsEl.textContent = "";
       let searchInput = searchInputEl.value;
        url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;

        let options = {
            method : "GET"
        };
        fetch(url,options)
            .then(function (response){
                return response.json();
            })
            .then(function(jsonData){
                let {search_results} = jsonData;
                dispayResults(search_results);
            }); 
    }
    
}

searchInputEl.addEventListener("keydown",searchWikipedia);
