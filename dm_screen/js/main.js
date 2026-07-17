
async function main(){
   const statBlocks = await statBlockData();

   console.log(statBlocks);
   
}

async function statBlockData(){
    const res = await fetch('dnd_advent_stat_blocks.json');
    const data = await res.json();
    return data;
}



















main()