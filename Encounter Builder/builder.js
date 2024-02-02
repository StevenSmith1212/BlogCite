class Player{
    constructor(lvl, name, initiative){
        this.lvl = lvl;
        this.name = name;
        this.initiative = initiative; 
        this.easyXP;
        this.medXP;
        this.hardXP;
        this.deadXP;
    }
 
    rollInitiative(bonus){
        this.intitiative = init = (Math.random() * (max - min) + min)+bonus;
        return this.initiative;
    }
}


class Party{
    construtor(partyMembers){
        this.partyMembers = partyMembers;
        this.eXP;
        this.mXP;
        this.hXP;
        this.dXP;
    }


    addPlayer(Player){
        this.partyMembers.push(Player);
    }

    removePlayer(Player){
        const index = this.partyMembers.indexOf(Player);
        if(index !== -1){
            this.partyMemberss.splice(index,1);
        }
    }


    calculateXps(){
        if(partyMembers.size != 0){
            
        } 
    }
}