
let Male = [
        {
            id: 1,
            name: 'Getachew',
            amharic: "ጌታቸው",
            meaning: "their lord",
          },
          {
            id: 2,
            name: 'Eskindir',
            amharic: "እስክንድር",
            meaning: "Till the time of marriage",
          },
          {
            id:3 ,
            name: 'Girma',
            amharic: "ግርማ",
            meaning: "Magesty",
          },
          {
            id: 4,
            name: 'Bereket',
            amharic: "በረከት",
            meaning: "Blessing",
          },
          {
            id: 5,
            name: 'Wasihun',
            amharic: 'ዋሲሁን',
            meaning: 'Trust advocator',
          },
            
            
]        
            
	let Female= [
        {
            id: 1,
            name: 'Chaltu',
            amharic: "ጫልቱ",
            meaning: " above the list",
          },
          {
            id: 2,
            name: 'Kidist',
            amharic: "ቅድስት",
            meaning: "holy",
          },
          {
            id:3 ,
            name: 'Meheret',
            amharic: "ምህረት",
            meaning: "Forgivness",
          },
          {
            id: 4,
            name: 'Beletech',
            amharic: "በለጠች",
            meaning: "she surpassed",
          },
          {
            id: 5,
            name: 'Amarech',
            amharic: 'አማረች',
            meaning: 'she is beautiful',
          },
          {
            id: 6,
            name: 'Samrawit',
            amharic: 'ሳምራዊት',
            meaning: 'she is unity',
          },
        
        
        
        
        
        
        
        
        "chaltu", "Kidist", "Meheret", "Beletech", "Amarech", "Samri"];
	let rand_man = Math.floor(Math.random()*Male.length); 
	let rand_women = Math.floor(Math.random()*Female.length); 
    const man = document.getElementById('man');
    const women = document.getElementById('women');
    let result = document.getElementById('result');
    let form = document.getElementById('form-container')
	let resultName= document.getElementById('result-name');
    let resultAmharic= document.getElementById('result-amharic');
    let resultMeaning= document.getElementById('result-meaning');


function generateName(){
	
	result.classList.remove('display');
    form.classList.add('display');
    if (man.checked === true){
        resultName.innerHTML= Male[rand_man].name;
        resultAmharic.innerHTML= Male[rand_man].amharic;
        resultMeaning.innerHTML= Male[rand_man].meaning;
    
    } else if(women.checked === true) {
        resultName.innerHTML= Female[rand_man].name;
        resultAmharic.innerHTML= Female[rand_man].amharic;
        resultMeaning.innerHTML= Female[rand_man].meaning;
    
    }
    else{
        alert("pick gender");
    }
    
    

	
}

