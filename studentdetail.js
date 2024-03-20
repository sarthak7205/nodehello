const pro=(a,b)=>a*b
console.log(pro(3,7))

const stu={
    name:'yash',
    age:"10",
    marks:'60',
    greet(){
        console.log('hello this is '+this.name+' my age is '+this.age+" and i got "+this.marks+" marks in maths")
    }
}
stu.greet();