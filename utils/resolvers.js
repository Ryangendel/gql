const dogDatabase = [{name:"Runa", age:3, caretaker:"Odie"}, {name:"odie", age:4, caretaker:"Ryan"},  {name:"Hntr", age:5, caretaker:"Vic"}]

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
        }
    }
}

module.exports = resolvers

