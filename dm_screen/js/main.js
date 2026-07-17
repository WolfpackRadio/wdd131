const searchResults = document.querySelector('#search-results');
const searchInput = document.querySelector('#search');
const searchButton = document.querySelector('.search-btn');

let statBlocks = []
async function main(){
    statBlocks = await statBlockData();
    popSearch(statBlocks)
    console.log(statBlocks);
   
}

async function statBlockData(){
    const res = await fetch('dnd_advent_stat_blocks.json');
    const data = await res.json();
    return data;
}

function popStatBlocks(){

}

function popSearch(statBlocks){
    const searchResultsHtml = statBlocks.map(unitRow).join('');
    searchResults.innerHTML = searchResultsHtml

}

function unitRow(statBlock){
    return `<li>
            <button class="search-result" type="button">
            <h2>${statBlock.monster_class}</h2>
            <p>${statBlock.type}</p>
            </button>
            </li>`;
}

function search() {
	const query = searchInput.value;
	// const filtered = statBlocks.filter(statBlock => matchesSearch(statBlock, query));
	// const sorted = filtered.sort(compareByName);
	// renderRecipes(sorted);
}

// searchButton.addEventListener('click', search);
// searchInput.addEventListener('keypress', (event) => {
// 	if (event.key === 'Enter') search();
// });

















main()