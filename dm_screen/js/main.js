const searchResults = document.querySelector('#search-results');
const searchInput = document.querySelector('#unit-search');
const seeStatBlock = document.querySelector('.stat-panel')

let statBlocks = []
async function main() {
    statBlocks = await statBlockData();
    popSearch(statBlocks)
    console.log(statBlocks);
    searchInput.addEventListener('input', search);
}

async function statBlockData() {
    const res = await fetch('dnd_advent_stat_blocks.json');
    const data = await res.json();
    return data;
}

function panelTemplate(){
    return `<h2 id="stat-heading">${statBlock.monster_class}</h2>
            <div id="stat-block-container">
            <p class="empty-state">Select a unit from search results.</p>
            </div>`;
}

function popStatBlocks(statBlock) {
    
}

function popSearch(statBlocks) {
    const searchResultsHtml = statBlocks.map(unitRow).join('');
    searchResults.innerHTML = searchResultsHtml

}

function unitRow(statBlock) {
    return `<li>
            <button class="search-result" type="button">
            <h2>${statBlock.monster_class}</h2>
            <p>${statBlock.type}</p>
            </button>
            </li>`;
}

function matchesSearch(statBlock, query) {
	const q = query.toLowerCase();
	return (
		statBlock.monster_class.toLowerCase().includes(q) ||
		statBlock.type.toLowerCase().includes(q) ||
		statBlock.skills.find(skill => skill.toLowerCase().includes(q))
	);
}

function search() {
    const query = searchInput.value;
    console.log(query);
    
    const filtered = statBlocks.filter(statBlock => matchesSearch(statBlock, query));
    popSearch(filtered);
}




main()