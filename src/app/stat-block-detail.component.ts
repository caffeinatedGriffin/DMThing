import { Component } from '@angular/core';

export class Action {
  name: string;
  description: string;
}
export class Attack extends Action {
  attackType: string;
  attackBonus: number;
  range: number | { shortRange:number, longRange: number };
  target: string;
  damage: string;
  damageType: string;
}

export class StatBlock {
  name: string;
  size: string;
  creatureType: string;
  alignment: string;
  ac: number;
  acDescription: string;
  hp: number;
  speeds: { movementType:string, movementSpeed:number }[];

  actions?: Action[];
  attacks: Attack[];
}


@Component({
  selector: 'stat-block-detail',
  // templateUrl: './stat-block-detail.component.html'
  template: `
    <div>
      <div class="statBlockHeader">
        <h1>{{statBlock.name}}</h1>
        <p class="headerInfo">{{statBlock.size}} {{statBlock.creatureType}}, {{statBlock.alignment}}</p>
      </div>
      <dl>
        <dt>Armor Class</dt> <dd>{{statBlock.ac}} ({{statBlock.acDescription}}) </dd>
      </dl>
      <div class="statBlockBasic">
        <div><label>Armor Class</label> {{statBlock.ac}} ({{statBlock.acDescription}})</div>
        <div><label>Hit Points</label> {{statBlock.hp}}</div>
        <div><label>Speed</label><span *ngFor="let speed of statBlock.speeds">{{speed.movementType}} {{speed.movementSpeed}} ft </span></div>
      </div>
    </div>
  `})
export class StatBlockDetailComponent {
  statBlock: StatBlock = {
    name: "Hobgoblin",
    size: "Medium",
    creatureType: "humanoid (goblinoid)",
    alignment: "lawful evil",
    ac: 18,
    acDescription: "chain mail, shield",
    hp: 11,
    speeds: [{ movementType: "", movementSpeed: 30}],
    actions: [
      { name: "Martial advantage", description: "Once per turn, the hobgoblin can deal an extra 2d6 damage to a creature it hits with a weapon attack if that creature is within 5 ft of an ally of the hobgoblin that isn't incapacitated." },
    ],
    attacks: [
      {
        name: "Longsword",
        description: "",
        attackType: "Melee Weapon Attack",
        attackBonus: 3,
        range: 5,
        target: "one target",
        damage: "1d8 + 1",
        damageType: "slashing"
      },
      {
        name: "Longbow",
        description: "Once per turn, the hobgoblin can deal an extra 2d6 damage to a creature it hits with a weapon attack if that creature is within 5 ft of an ally of the hobgoblin that isn't incapacitated.",
        attackType: "Ranged Weapon Attack",
        attackBonus: 3,
        range: { shortRange: 150, longRange: 600 },
        target: "one target",
        damage: "1d8 + 1",
        damageType: "piercing"
      }
    ]
  };
}
