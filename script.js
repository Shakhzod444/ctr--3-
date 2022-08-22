let courses = [

   {
   
   title: 'SMM',
   
   howLong: 3
   
   },
   
   {
   
   title: 'Dev',
   
   howLong: 6
   
   },
   
   {
   
   title: 'Graph',
   
   howLong: 4
   
   },
   
   ]
   
   let earnings = {
   
   total: 0,
   
   max: 0,
   
   min: 0
   
   }
   
   let m = Number
   
   let w = Number
   
   let average_age = Number
   
   let smm = Number
   
   let dev = Number
   
   let graph = Number
   
   let students = [
   
   {
   
   sex: 'm',
   
   age: 14,
   
   payment: 1220000,
   
   course: {
   
   title: 'SMM',
   
   }
   
   },
   
   {
   
   sex: 'm',
   
   age: 24,
   
   payment: 1883000,
   
   course: {
   
   title: 'Graph'
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 16,
   
   payment: 2190000,
   
   course: {
   
   title: 'Dev'
   
   }
   
   },
   
   {
   
   sex: 'm',
   
   age: 19,
   
   payment: 718000,
   
   course: {
   
   title: 'Graph'
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 15,
   
   payment: 2195000,
   
   course: {
   
   title: 'Dev'
   
   }
   
   },
   
   {
   
   sex: 'm',
   
   age: 24,
   
   payment: 460000,
   
   course: {
   
   title: 'SMM'
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 14,
   
   payment: 560000,
   
   course: {
   
   title: 'SMM'
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 22,
   
   payment: 160000,
   
   course: {
   
   title: 'Dev'
   
   }
   
   },
   
   {
   
   sex: 'm',
   
   age: 26,
   
   payment: 883000,
   
   course: {
   
   title: 'Graph'
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 26,
   
   payment: 750000,
   
   course: {
   
   title: 'Dev'
   
   }
   
   },
   
   {
   
   sex: 'm',
   
   age: 23,
   
   payment: 212000,
   
   course: {
   
   title: 'Graph',
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 24,
   
   payment: 883000,
   
   course: {
   
   title: 'Graph'
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 27,
   
   payment: 190000,
   
   course: {
   
   title: 'Dev'
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 19,
   
   payment: 210000,
   
   course: {
   
   title: 'Graph'
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 21,
   
   payment: 770000,
   
   course: {
   
   title: 'Dev'
   
   }
   
   },
   
   {
   
   sex: 'm',
   
   age: 18,
   
   payment: 1200000,
   
   course: {
   
   title: 'SMM'
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 51,
   
   payment: 880000,
   
   course: {
   
   title: 'SMM'
   
   }
   
   },
   
   {
   
   sex: 'm',
   
   age: 51,
   
   payment: 2430000,
   
   course: {
   
   title: 'Dev'
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 33,
   
   payment: 1277000,
   
   course: {
   
   title: 'Graph'
   
   }
   
   },
   
   {
   
   sex: 'w',
   
   age: 21,
   
   payment: 2750000,
   
   course: {
   
   title: 'Dev'
   
   }
   
   },
   
   ]
   
   // В этом примере перед вами учебный центр, в котором учиться несколько студентов. Каждый из них учиться на каком-то курсе и платит за обучение. У студентов мы видим пол, возраст, оплату, а также курс, которые они выбрали.*

   // 1. Добавить студентам ключ howLong внутри ключа course, рядом с title. HowLong - цифра, означающая сколько месяцев длиться курс*

   // 2. Сохранить количество девочек и мальчиков внутри переменных m и w*

   // 3. Сохранить заработок учебного центра в earning.total*

   // 4. Узнать кто больше всех платит за обучение в earning.max*

   // 5. Узнать кто меньше всех платит за обучение в earning.min*

   // 6. Посчитать сколько студентов учиться на курсах внутри dev, smm и graph*

   // 7. Посчитать средний возраст студентов в average_age*
   


   const stup = (a) => {
       m = 0
       w = 0
       average_age = 0
       smm = 0
       dev = 0
       graph = 0
      let i = [] 
        
   for(let item of a) {
   for(let elem of courses){
      if(item.course.title === elem.title) {
         item.course.howLong = elem.howLong
      }
   }
   // 2 задание 

 if(item.sex === 'm'){
   m++
 } else {
   w++
 }
// 3 задание 
   earnings.total += item.payment
//  4 задание // 5 задание 
   i.push(item.payment)      
    
   
// 6 задание
   
if(item.course.title === 'SMM'){
smm++
} else if(item.course.title === 'Dev'){
   dev++
} else {
   graph++
}
///// 7 задание 
// i.push(item.age)
// average_age += item.age / i.length

let ss = 0

average_age += item.age / 20 

   }
   
   max= Math.max(...i)
   min = Math.min(...i)

  students.filter(item => {
      if (item.payment === max ) {
       earnings.max = max
      } else if (item.payment === min) {
      earnings.min = min
      }
  })
  
   }
   
   stup(students)

console.log (students);
console.log('mans', m);
console.log('womens' , w);
console.log(earnings);
console.log('smm' , smm);
console.log('dev' , dev);
console.log('graph' , graph);
console.log('average_age' , average_age);





// const setup = () => {
//    /// 1
//    for(let item of students) {
//      for(let elem of courses) {
//        if(item.course.title === elem.title ){
//          item.course.howLong = elem.howLong
//        }
//      }
    
//    }
//    console.log(students);
   
//    let i = []
//    //  ///3 /// 4 
//            for(let item of  students) {
//                i.push(item.payment)
//            }
   
//             max= Math.max(...i)
//             min = Math.min(...i)
   
//            students.filter(item => {
//                if (item.payment === max ) {
                
//                    console.log(max);
//                } else if (item.payment === min) {
//                    console.log(min);
//                }
//            })
   
   
   
//    }
   
//    setup()




// let temp_num = []

// for (let item of a) {
//    temp_num.push(item.price)

//    total = 0
//    a.forEach((item) => {
//       total += item.price
//    })
//    totalSale = total - (total / 100 * discount)

//    arr_sale = arr.map((item) => {
//       price_sale = item.price - (item.price / 100 * discount)
//       return item = {
//          name: item.name,
//          sale_price: price_sale
//       }
//    })

   
//    average = total / arr.length 
  
// }

// max = Math.max(...temp_num)
// min = Math.min(...temp_num)
// max = arr.find(item => item.price === max)
// min = arr.find(item => item.price === min)
