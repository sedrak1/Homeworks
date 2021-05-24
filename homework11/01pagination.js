let pagination = {
    alphabet_array: "abcdefghijklmnopqrstuvwxyz".split(""),
    res_arr: [],
    init: (arr = pagination.alphabet_array,  size = 4) => {
        let temp = []
        pagination.res_arr = []
        for (let i = 0; i < arr.length; i += size){
            if(i + size > arr.length){
                for(let j = i; j < arr.length; j++){
                    temp.push(arr[j])
                }
            }
            else{
                for(let j = 0; j < size; j++){
                    temp.push(arr[i + j])
                }
            }
            pagination.res_arr.push(temp)
            temp = []
        }
        return pagination.res_arr
    },

    page: 0,
    prev_page: () => {
        if(pagination.page !== 0){
            pagination.page--
        }
        return pagination
    },
    next_page: () => {
        if(pagination.page < pagination.init().length - 1){
            pagination.page += 1
        }
        return pagination
    },
    first_page: () => {
        pagination.page = 0
        return pagination
    },
    last_page: () => {
        pagination.page = pagination.res_arr.length - 1
        return pagination
    },
    go_to_page: (page_num) => {
        pagination.page = page_num - 1
        return pagination
    },
    get_page_items: () =>{ return pagination.init()[pagination.page]}
}
pagination.prev_page().prev_page()
console.log(pagination.get_page_items())
pagination.next_page()
console.log(pagination.get_page_items())
pagination.next_page()
console.log(pagination.get_page_items())
pagination.last_page()
console.log(pagination.get_page_items())
pagination.first_page()
console.log(pagination.get_page_items())
pagination.next_page().next_page().next_page()
// pagination.first_page()
console.log(pagination.get_page_items())


