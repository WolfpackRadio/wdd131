let statBlocks;
let armories;
let feats;

export async function loadStatBlockFile() {
    if (!statBlocks) {
        const res = await fetch('dnd_advent_stat_blocks.json');
        const data = await res.json();
        // Support legacy root array and new { units, armories, feats } shape
        if (Array.isArray(data)) {
            statBlocks = data;
            armories = {};
            feats = [];
        } else {
            statBlocks = data.units ?? [];
            armories = data.armories ?? {};
            feats = data.feats ?? [];
        }
    }
    return { units: statBlocks, armories, feats };
}

export async function statBlockData() {
    const data = await loadStatBlockFile();
    return data.units;
}

export async function armoryData() {
    const data = await loadStatBlockFile();
    return data.armories;
}

export async function featData() {
    const data = await loadStatBlockFile();
    return data.feats;
}
