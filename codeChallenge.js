
class Park {
    constructor (name,yearofBuild,area,trees){
    this.name= name;
    this.yearofBuild = yearofBuild; 
    this.area= area;
    this.trees=trees;
    }
    density(){
        let density= this.trees/this.area ;
        return density;
    }
    thousandTrees(){
        return (this.trees > 1000);
    }
    age(){
        let age = new Date().getFullYear()-this.yearofBuild;
        return age;
    }
    
}

class Street {
    constructor(name,yearofBuild,length,classification){
    this.name=name;
    this.yearofBuild= yearofBuild;
    this.length= length;
    this.classification=classification;
    }
    
}

//parks calcualtions
let parks= [];
function newPark (name,yearofBuild,area,trees){
    parks.push(new Park(name,yearofBuild,area,trees));
    return;
}

function reportAverageParkAge(parks) {
    let count = 0;
    parks.forEach(park => count = count + park.age())
    let average = count / parks.length;
    return console.log(`Our ${parks.length} parks have an average age of ${average} years`);
}
function reportDensity(parks) {
    return parks.forEach(park => console.log(`${park.name} has a tree density of  ${park.density()} trees per sq km`))
}
function reportThousandTrees(parks) {
    parks.forEach(park => {
        if (park.thousandTrees()) {
            return console.log(`${park.name} has more than 1000 trees`);
        }
    })
}

newPark('Green Park',1950,0.5,538);
newPark('National Park',1960,0.67,819);
newPark('Oak Park',1930,0.6,1425);

//streets calculations
let streets = []; 
function newStreet (name,yearofBuild,length,classification='normal') {
    streets.push(new Street (name,yearofBuild,length,classification));
    return; 
}
newStreet('Ocean Avenue',1999,2,'big');
newStreet('Evergreeen Streeet',2008,1,'small');
newStreet('4th Street',2015,1.5);
newStreet('Sunset Boulevard',1982,2.6,'huge')

function streetsSummary (streets) {
    let totalLength=0;
    streets.forEach( s => {
       totalLength += s.length;
    })
    let average = totalLength/ streets.length;
    return console.log(`Our ${streets.length} have a total length of ${totalLength} km, with and average of ${average} km`);

}
function reportStreetSize(streets) {
    streets.forEach(street => console.log(`${street.name}, built in ${street.yearofBuild}, is ${street.classification} street`));
    return;
}

//parks Report 
console.log('----------PARKS REPORT---------');
reportAverageParkAge(parks);
reportDensity(parks);
reportThousandTrees(parks);
console.log('----------STREETS REPORT--------');
streetsSummary(streets);
reportStreetSize(streets);
