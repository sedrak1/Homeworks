const obj = {
    _name: [], // ['name', length][]
    set name(value){
        let names_arr = value.split(", ")
        for(let i = 0; i < names_arr.length; i++){ 
            obj._name.push([names_arr[i], names_arr[i].length])
        }
    },
    get name(){
        return obj._name
    },
}
obj.name = 'Vrezh, Artavazd, Sedrak';

console.log(obj.name) // [['Vrezh', 7], ['Artavazd', 10]]