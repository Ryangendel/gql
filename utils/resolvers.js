const dogDatabase = [
    {id:1, name:"Runa", age:3, caretaker:"Odie"}, 
    {id:2, name:"odie", age:4, caretaker:"Ryan"}, 
    {id:3, name:"Hunter", age:5, caretaker:"Vic"},
    {id:4, name:"Hunter", age:5, caretaker:"Vic"}
]

const personDatabase = [
    {id:1, name:"Ryan", age:31, dog:"Odie"}, 
    {id:2, name:"Kim", age:41, dog:"Runa"}, 
    {id:3, name:"Tia", age:50, dog:"Skadi"},
    {id:4, name:"Jame", age:50, dog:"Hunter"}
]

const resolvers={
    Query:{
        getAllDogs: async ()=>{
            let returnDog = {}
            for (let i =0;i<dogDatabase.length;i++){
                if(dogDatabase[i].name ==="odie"){
                    returnDog=dogDatabase[i]
                }
            }
            return returnDog
        },
        banana: async () => {
            return dogDatabase
        },
        specificDog: async (parent, something)=>{
            console.log(something.id)
            let returnDog 
            for (let i =0;i<dogDatabase.length;i++){
                if(dogDatabase[i].id ==something.id){
                    returnDog=dogDatabase[i]
                }
            }
            return returnDog
        }, 
    },
    Mutation:{
        addDog: async (parent, args)=>{
          var id = dogDatabase.length+1
            let newData = {...args, id}
            console.log(newData)
            dogDatabase.push(newData)
            return newData
        }
    }
}

module.exports = resolvers

