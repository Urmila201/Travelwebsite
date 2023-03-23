const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

// const generateJokes=()=>{

// const setHeaders = {
//     Headers:{
//         Accept:"appliation/json"
//     }
// }

//     fetch('',setHeaders)
// .then((res)=> res.json());
// .then((data)=>{
//         jokes.innerHTML=data.joke;
//     }).catch((error)=>{
//         console.log(error);
//     })

// }
// jokeBtn.addEventListener('click',generateJokes);
// generateJokes();

// method to  use async //


// async function generateJokes(){
    
// }


const generateJokes= async()=>{
 
 try{
    const generateJokes= async()=>{
 
        const setHeaders = {
            Headers:{
                Accept:"appliation/json"
            }
        }
        
            const res = await fetch('',setHeaders);
               const data = await res.json();
               jokes.innerHTML=data.joke;
    
    
    }catch(error){
        console.log(`the error is $(err)`);
    }
 
}
}


    jokeBtn.addEventListener('click',generateJokes);
    generateJokes();