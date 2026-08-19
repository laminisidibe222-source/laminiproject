
 const fl = require("fs").promises;
 const path = require("path");

  const Test = async (req,res) => {
       
        const fll = path.join(__dirname ,"reastau.html");
        const Rd = await fl.readFile(fll , "utf-8");
        res.writeHead(200,{"content-type" : "text/html"});
        res.end(Rd);

};

 module.exports = Test;
 
function Part1(){
      return Promise.resolve("Lamini");
}
 
function Part2(val){
      return Promise.resolve(val);
}
 
function Part3(val){
      return Promise.resolve(val);
}
 
function Infos(val){

   console.log(val);  
}

/*Part1()
.then(function(){
  return Part2(5);    
})
 .then(function(){
      return Part3(36);
})
.then(function(val){
 return Infos(val);
})*/


