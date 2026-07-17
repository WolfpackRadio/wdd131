const statContainer = document.querySelector('#stat-block-container');

function panelTemplate(statBlock){
    return `
    <article class="stat-block">
      <header>
        <h2 id="stat-heading">${statBlock.monster_class}</h2>
        <p class="unit-type">${statBlock.type} · ${statBlock.movement}</p>
      </header>
      <p><strong>Skills:</strong> ${statBlock.skills.join(', ')}</p>
      <p><strong>Languages:</strong> ${statBlock.languages.join(', ')}</p>
      <section class="ability-scores">${abilityScoresHtml(statBlock)}</section>
      <section class="tiers">${tiersHtml(statBlock)}</section>
    </article>
     `;
}

function abilityScoresHtml(statBlock) {
  return Object.entries(statBlock.ability_scores)
    .map(([ability, data]) => {
      const [mod, save] = data.modifiers;
      const proficientMark = data.proficient ? ' *' : '';
      return `
        <div class="ability-score">
          <h3>${ability}${proficientMark}</h3>
          <p class="ability-value">${data.value}</p>
          <p class="ability-mods">${mod} / ${save}</p>
        </div>
      `;
    })
    .join('');
}

function tiersHtml(statBlock) {
  return statBlock.tiers
    .map((tier) => `
      <article class="tier-card">
        <h3>${tier.tier_name} <span class="tier-level">(Level ${tier.level})</span></h3>
        <ul class="tier-stats">
          <li><strong>HP:</strong> ${tier.hp}</li>
          <li><strong>Armor:</strong> ${tier.armor}</li>
          <li><strong>AC:</strong> ${tier.ac}</li>
          <li><strong>Proficiency:</strong> +${tier.proficiency_bonus}</li>
          <li><strong>Initiative:</strong> ${tier.initiative}</li>
          <li><strong>Crit bonus:</strong> ${tier.crit_bonus}</li>
          <li><strong>Flank bonus:</strong> ${tier.flank_bonus}</li>
          <li><strong>Passive Perception:</strong> ${tier.passive_perception}</li>
        </ul>
        <h4>Actions</h4>
        ${actionsHtml(tier.actions)}
        ${featuresHtml(tier.features)}
      </article>
    `)
    .join('');
}

function actionHtml(action) {
  const parts = [
    action.damage,
    action.crit_damage != null ? `crit ${action.crit_damage}` : null,
    action.shots != null ? `${action.shots} shots` : null,
    action.to_hit,
    action.range,
    action.radius,
    action.shred != null ? `shred ${action.shred}` : null,
    action.notes
  ].filter(Boolean);
  return `<li><strong>${action.name}</strong>: ${parts.join('; ')}</li>`;
}

function actionsHtml(actions) {
  if (!actions || actions.length === 0) {
    return '<p>No actions listed.</p>';
  }
  return `<ul class="actions-list">${actions.map(actionHtml).join('')}</ul>`;
}

function featuresHtml(features) {
  if (!features || features.length === 0) {
    return '';
  }
  return `<p><strong>Features:</strong> ${features.join(', ')}</p>`;
}

export function popStatBlocks(statBlock) {
    statContainer.innerHTML = panelTemplate(statBlock)
}