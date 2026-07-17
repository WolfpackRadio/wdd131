let statBlocks

export async function statBlockData() {
    if (!statBlocks) {
        const res = await fetch('dnd_advent_stat_blocks.json');
        statBlocks = await res.json();
    }
    return statBlocks;
}