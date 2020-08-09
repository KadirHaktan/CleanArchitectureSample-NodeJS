

function MakeRulesRunner(...rules){
   rules.map((rule)=>{
       if(rule instanceof Error){
           return rule
       }     
   })

   return null
}

module.exports=MakeRulesRunner