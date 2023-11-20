class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampiresToOriginal = 0;
    let currentVampire = this;
    while(currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampiresToOriginal++;
    }
    return numberOfVampiresToOriginal;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.creator === null) {
      return true;
    }
    if (vampire.creator <= this.creator) {
      return false;
    }
  
    if (this.creator < vampire.creator) {
      return true;
    }

    return false;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }


  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    let vampire = null;
    if (this.name === name) {
      vampire = this;
    }
    for(let child of this.offspring) {
      if (vampire) {
        vampire = vampire
      } else {
        vampire = child.vampireWithName(name);
      }
    }
    return vampire;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let totalDescendents = 0;
    for(let child of this.offspring) {
      totalDescendents += child.totalDescendents;
      totalDescendents++;
    }
    return totalDescendents;
  }
  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let results = [];

    if(this.yearConverted > 1980) {
      results.push(this);
    }

    for (let child of this.offspring) {
      const answer = child.allMillennialVampires;
        results.push(...answer);
    }

    return results;
  }

}
module.exports = Vampire;

