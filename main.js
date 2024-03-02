let pHello = document.querySelector(".p")
let btnBody = document.querySelector(".btn")
let box = document.querySelector(".box")
console.log(pHello)

let arr =  [1, 4, 5,4,5,6,34,4,3,4,343,4,4,222]
// console.log(arr.length - 1, arr[0], arr[2] )
console.log(arr[arr.length - 1])

let arrStr = ["abc", "hello", "a"]
console.log(arrStr[1])
console.log(arrStr[arrStr.length - 1])

arr[2] = 55
arr[arr.length - 1] = 200
arr.push(300)
arr.push(301)
arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()
arr.unshift(0)
arr.shift()

console.log(arr)


pHello.classList.add("pMain")
pHello.classList.add("abc")

pHello.classList.remove("abc")
pHello.classList.remove("pMain")

let dark = false

btnBody.addEventListener("click", function(){
    if (dark === true){
        document.body.classList.remove("dark")
        dark = false
    }else if (dark === false){
        document.body.classList.add("dark")
        dark = true
    }
}) 


let boxColored = false
let num = 10
let elementArr = []

box.addEventListener("click", function (){
    if(boxColored === false){
        box.classList.add("box-colored")
        boxColored = true
    }else if(boxColored === true){
        box.classList.remove("box-colored")
        boxColored = false
    }

    

    num += 1
    box.textContent = num
    

    let h2 = document.createElement("h2")
    h2.textContent = "Hello" 
    h2.classList.add("h2")
    box.append(h2)
    elementArr.push(h2)
})

// html -ის ელემენტის შექმნა ჯავასკრიპტიდან

// ელემენტის შექმნა
const elem = document.createElement("button")

elem.textContent = "abc"
console.log(elem)

// ელემენტის ბody-ში ჩასმა (თორე ისე არ გამოჩნდება ეს ელემენტი ფეიჯზე)
document.body.append(elem)


// მაგალითი 1
let p1 = document.createElement("p")
console.log(p1)
p1.textContent = "Hello"
document.body.append(p1)
p1.classList.add("abc")
