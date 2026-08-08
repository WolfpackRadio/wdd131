import { statBlockData } from "./data.js";
import { popStatBlocks } from "./statpanal.js";

const searchResults = document.querySelector('#search-results');
const searchInput = document.querySelector('#unit-search');
let allUnits = [];

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
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const skills = statBlock.skills ?? [];
  return (
    statBlock.monster_class.toLowerCase().includes(q) ||
    (statBlock.type ?? "").toLowerCase().includes(q) ||
    (statBlock.faction ?? "").toLowerCase().includes(q) ||
    skills.some((skill) => skill.toLowerCase().includes(q))
  );
}


function search() {
  const filtered = allUnits.filter((u) => matchesSearch(u, searchInput.value));
  popSearch(filtered);
}

async function handleSearchSelection(event){
    const selected = event.target.closest('li')
    if(! selected)
        return;
    const monster_class = selected.querySelector('h2').textContent
    const allStatBlocks = await statBlockData()
    const statBlock = allStatBlocks.find((stat) => stat.monster_class == monster_class);
    popStatBlocks(statBlock)
}

export async function initSearch() {
    const statBlocks = await statBlockData();
    popSearch(statBlocks);
    searchInput.addEventListener('input', search);
    searchResults.addEventListener('click', handleSearchSelection)
}