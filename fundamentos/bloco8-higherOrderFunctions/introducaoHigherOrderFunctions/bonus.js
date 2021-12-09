const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
const warrior = {
healthPoints: 200,
strength: 30,
weaponDmg: 2,
damage: undefined,
};

const dragon = {
healthPoints: 350,
strength: 50,
damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDmg = () => Math.random() * (dragon.strength-15) + 15
const warriorDmg = () => Math.random() * (warrior.strength*warrior.weaponDmg - warrior.strength) + warrior.strength
const mageDmgAndMana = () => {
    let dmgDealt;
    const manaCost = 15
    let currentMana = mage.mana
    if (currentMana < 15){
    dmgDealt = 'Não possui mana suficiente'
    } else {
    dmgDealt = Math.random() * (mage.intelligence*2 + mage.intelligence) + mage.intelligence
    currentMana -= manaCost
    } 
    return {dano: dmgDealt, mana: currentMana}    
}

const warriorTurn = (warriorStatus = warriorDmg()) => {
    dragon.healthPoints -= warriorStatus
    warrior.damage = warriorStatus
}

const mageTurn = (mageStatus = mageDmgAndMana()) => {
    dragon.healthPoints -= mageStatus['dano']
    mage.mana = mageStatus['mana']
}

const dragonTurn = (dragonStatus = dragonDmg) => {
  warrior.healthPoints -= dragonDmg
  mage.healthPoints -= dragonDmg
  dragon.damage = dragonDmg
}

const battleLog = (battleMembers) => {
  if (mage.healthPoints <= 0){
    delete battleMembers.mage
  } else if (warrior.healthPoints <= 0){
    delete battleMembers.warrior
  } else if (dragon.healthPoints <= 0){
    delete battleMembers.dragon
  }
  return battleMembers
}
const gameActions = {
    warriorTurn: warriorTurn,
    mageTurn: mageTurn,
    dragonTurn: dragonTurn,
    battleLog: battleLog
  };

/* gameActions.warriorTurn()
console.log(dragon.healthPoints);
gameActions.mageTurn()
console.log(dragon.healthPoints); */

console.log(battleLog(battleMembers));