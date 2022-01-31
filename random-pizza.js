function randomPizza(){
    var dic = {
        crustType: [1, "deep_dish","hand_tossed","thin","thick"],
        sauceType: [2, "tradition","bbq","ranch","marinara","asian"],
        cheese: [2,"blue cheese","mozzarella","feta"],
        toppings:[6,"olives","onions","mushrooms","bacon","corn","beef"]
    }
    // crustType, sauceType, cheeses, toppings
    // choose 1,choose 1~2, choose 1~2, toppings 1~all
    
    function helper(type){
        var num = Math.floor(Math.random()*type[0]+1)
        var items = []
        while (items.length < num){
            var ele = type[Math.floor(Math.random()*(type.length-1))+1]
            if (!items.includes(ele)){
                items.push(ele)
            }
        }

        return items
    }


    var rand_pizza = {}
    rand_pizza.crustType = helper(dic.crustType)
    rand_pizza.sauceType = helper(dic.sauceType)
    rand_pizza.cheese =helper(dic.cheese)
    rand_pizza.toppings = helper(dic.toppings)

    return rand_pizza
}

console.log(randomPizza())

