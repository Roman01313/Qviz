let start = document.querySelector('.start')
let num_div = document.querySelector('.numbers')
let numbers_btns = document.querySelectorAll('.el')
let example = document.querySelector('.exam')
let span = document.querySelector('.record_div')
let input = document.querySelector('.sumbit_input')
let record = document.querySelectorAll('.record')
let nav_btn = document.querySelectorAll('.nav-item')

let counter = 0
let answer_ex = []
let count_suces = 0
let count_drfeat = 0
let all_counter = 0
let count_input = -1
let indicator = false

let random_int = ["+", "-", "*", "/"]

let rand = Math.floor(Math.random() * 4)
let rand2 = Math.floor(Math.random() * 5)




function random_int_generate(){
    let int = Math.round(Math.random() * 30)
}


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) { // Цикл повторяется до тех пор, пока остаются элементы для перемешивания
    randomIndex = Math.floor(Math.random() * currentIndex); // Выбираем оставшийся элемент.
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [    // Меняем местами с текущим элементом.
      array[randomIndex], array[currentIndex]];
  }
  return array; // Возвращаем перемешанный массив
}



class Question{
    constructor( first_int, sign, second_int, v1, v2, v3, v4, v5_correct){
        this.first_int = Math.floor(Math.random() * first_int),
        this.sign =  random_int[rand]
        this.second_int = Math.floor(Math.random() * second_int),
        this.v5_correct = v5_correct

        this.answer = [
            this.v1 = v1,
            this.v2 = v2,
            this.v3 = v3,
            this.v4 = v4,
            this.v5_correct = v5_correct]

        
    }

    sign_gen(){
        rand = Math.floor(Math.random() * 4)
        random_int[rand]
        return random_int[rand]
    }
    display(){
        rand = Math.floor(Math.random() * 4)
        this.sign = random_int[rand]

        rand2 = Math.floor(Math.random() * 5)
        answer_ex = this.answer
        if (this.sign == "+"){
            this.sign = random_int[rand]
            let corr = +this.first_int + +this.second_int
            numbers_btns[rand2].innerHTML = corr
            this.answer[rand] = corr
        } 
        if (this.sign == "-"){
            this.sign = random_int[rand]
            let corr = +this.first_int - +this.second_int
            numbers_btns[rand2].innerHTML = corr
            this.answer[rand2] = corr
        } 
        if (this.sign == "*"){
            this.sign = random_int[rand]
            let corr = +this.first_int * +this.second_int
            numbers_btns[rand2].innerHTML = corr
            this.answer[rand2] = corr

        } 
        if (this.sign == "/"){
            this.sign = random_int[rand]
            let corr = (+this.first_int / +this.second_int).toFixed(2)
            numbers_btns[rand2].innerHTML = corr
            this.answer[rand2] = corr                    
        
 
        } 


        example.innerHTML = `${this.first_int} ${this.sign} ${this.second_int}`

    }

}


mas_quest = [
exam1 = new Question(1000, rand, 1000 ,5, 7, 6, 2),
exam2 = new Question(1000, rand, 1000 ,4, -5 , -6, 6, 12),
exam3 = new Question(1000, rand, 1000 , 4, 5 , 6, 6, 5),
exam4 = new Question(1000, rand, 1000, 4, 5 , -6, 6, 10),
exam5 = new Question(1000, rand, 1000, 4, -5 , 6, 6, 108)
]


let now_question = mas_quest[counter]
now_question.display()


function is_started(){


let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        if(indicator == false){
            let new_coockie = `form1 = ${Math.round(count_suces * 100 / all_counter)}; max-age: 100000000`
            document.cookie = new_coockie
            console.log(new_coockie)
            alert(`Правильно: ${count_suces} Всего: ${all_counter} Точность: ${Math.round(count_suces * 100 / all_counter)}%`)
            input.style.display = 'flex'
            start.style.display = 'flex'
            document.querySelector('.input_time').style.display = 'flex'
            example.style.display = 'none'
            num_div.style.display = 'none'
            count_input = -1
            count_suces = 0
            all_counter = 0            
        }else{
            reject(new Error('Промис не сработал'))
        }

        }, document.querySelector('.input_time').value*1000 )
    })

    let cookies = document.cookie.split(";")
    let isCookieSaved = false
    
    for(let i = 0; i < cookies.length; i += 1){
        if(cookies[i].split('=')[0] == 'form1'){
            console.log(cookies)
            document.cookie = cookies[i].split('=')[1]
            isCookieSaved = true
            break
        }

    }

    let data = document.cookie.split('/')
    span.innerHTML = `hh: ${data[1]}`

    
    if (start.style.display != 'none' && input.value != '' && input.value > 0){
        input.style.display = 'none'
        start.style.display = 'none'
        document.querySelector('.input_time').style.display = 'none'
        num_div.style.display = 'flex'
        example.style.display = 'flex'
    }
}

start.addEventListener('click', is_started)

function stat(){
}

function ans(){
    shuffle(mas_quest[counter].answer)
    ///console.log(mas_quest[counter].answer[rand2])
    for (let i = 0 ; i < mas_quest.length; i += 1){
        numbers_btns[i].addEventListener('click', function(){
            count_input += 1
            if(count_input != input.value && count_input <= input.value){
                indicator = false
                    let promise = new Promise(function(resolve, reject){
                        setTimeout(function(){
                        resolve(numbers_btns[i].style.borderColor = 'green')
                        }, 0)
                    }).then(function(){
                        setTimeout(function(){
                        now_question = mas_quest[counter]
                        now_question.display()
                        numbers_btns[i].style.borderColor = 'rgba(224, 181, 181, 0.829)'
                        numbers_btns[i].style.borderRadius = "10%"
                        }, 500)
                    })
                    
                if(answer_ex[i] == mas_quest[counter].answer[rand2]){
                    count_suces += 1
                    counter += 1
                    all_counter +=1                 
                    if (counter == mas_quest.length){
                        counter = 0
                    }

                }else{

                    counter += 1
                    count_drfeat += 1
                    all_counter += 1
                    if (counter == mas_quest.length){
                        counter = 0
                    }
                    promise = new Promise(function(resolve, reject){
                        setTimeout(function(){
                        resolve(numbers_btns[i].style.borderColor = 'red')
                        }, 0)
                    }).then(function(){
                        setTimeout(function(){
                        now_question = mas_quest[counter]
                        now_question.display()
                        numbers_btns[i].style.borderColor = 'rgba(224, 181, 181, 0.829)'
                        numbers_btns[i].style.borderRadius = "10%"
                        }, 500)
                    })
                
                }
            }
            else{
            
                alert(`Правильно: ${count_suces} Всего: ${all_counter} Точность: ${Math.round(count_suces * 100 / all_counter)}%`)
                indicator = true
                count_input = -1
                count_suces = 0
                all_counter = 0
                input.style.display = 'flex'
                document.querySelector('.input_time').style.display = 'flex'
                start.style.display = 'flex'
                num_div.style.display = 'none'
                example.style.display = 'none'
            }


        })
    }
}
ans()
