import { statBlockData } from "./data.js";

const searchResults = document.querySelector('#search-results');
const searchInput = document.querySelector('#unit-search');

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

    const filtered = statBlocks.filter(statBlock => matchesSearch(statBlock, query));
    popSearch(filtered);
}

export async function initSearch() {
    const statBlocks = await statBlockData();
    popSearch(statBlocks);
    searchInput.addEventListener('input', search);

}