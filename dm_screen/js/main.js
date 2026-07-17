import { statBlockData } from "./data.js";
import { initSearch } from "./search.js";
import { popStatBlocks } from "./statpanal.js";


async function main() {
    const statBlocks = await statBlockData();
    console.log(statBlocks);

    await initSearch()
    
    popStatBlocks(statBlocks[0])
}


main()