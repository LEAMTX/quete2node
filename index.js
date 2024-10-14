
// charger les var de env
import "dotenv/config";
import   cowsay  from  "cowsay";

const name = process.env.NAME
const campus = process.env.CAMPUS

// const name = "toto"
// const campus = "lyon"

console.log ( cowsay . say ( { 
    text : `Hi, I am ${name} from ${campus} campus!`, 
    e : "oO" , 
    T : "U " 
} ) ) ;
