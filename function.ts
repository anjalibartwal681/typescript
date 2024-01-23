// let student=(name:string,id:number=4):string=> {
//   return `${name} is id ${id}`;
// }

// const ans= student("anjali");
// console.log(ans)

//**************************optional parameter*****************************************

// let  emp =(name:string,id?:number):string=>{
//   return ` welcome ${name}` ;
// }
 
 
//   const ans= emp("anjali")
//   console.log(ans)
   
   
   let emp = (name: string, id:number)=>{
 if(id){
      console.log(`welcome ${name} and id ${id}`)
  }
     
     else{
       console.log(`welcome ${name}`)
     }
  
  }
   
   
 emp("aprajita",2)
  
   
   
   
