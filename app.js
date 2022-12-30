let users=[]
users=saveItemsOnArray()
renderFromeUsers(users)
document.querySelector('#form').addEventListener('submit',(event)=>{
    event.preventDefault()
    
    
    if(event.target.elements.age.value==='' && event.target.elements.name.value===''){
        //name error
    const nameError= document.querySelector('#nameError')
    nameError.style.display='block'
    nameError.textContent='enter name!'
    const nameInput=event.target.elements.name
    nameInput.style.border='solid'
    nameInput.style.borderColor='red'
////
//age error
    const ageError= document.querySelector('#ageError')
    ageError.style.display='block'
    ageError.textContent='enter age!'
    const ageInput=event.target.elements.age
    ageInput.style.border='solid'
    ageInput.style.borderColor='red'}
    
    
    //ege name error:
    else if(event.target.elements.name.value===''){
        //without age error::
        const ageError= document.querySelector('#ageError')
        ageError.style.display='none'
        ageError.textContent=''
        const ageInput=event.target.elements.age
        ageInput.style.border='none'
        ageInput.style.borderColor=''




            const nameError= document.querySelector('#nameError')
            nameError.style.display='block'
             nameError.textContent='enter name!'
            const nameInput=event.target.elements.name
             nameInput.style.border='solid'
             nameInput.style.borderColor='red'
}

//age error:
else if(event.target.elements.age.value===''){
    //without name error!:
    const nameError= document.querySelector('#nameError')
    nameError.style.display='none'
    nameError.textContent=''
    const nameInput=event.target.elements.name
    nameInput.style.border='none'
    nameInput.style.borderColor=''



    const ageError= document.querySelector('#ageError')
    ageError.style.display='block'
    ageError.textContent='enter age!'
    const  ageInput=event.target.elements.age
    ageInput.style.border='solid'
    ageInput.style.borderColor='red'
}



else{
//without error!::::
//name error
const nameError= document.querySelector('#nameError')
nameError.style.display='none'
nameError.textContent=''
const nameInput=event.target.elements.name
nameInput.style.border='none'
nameInput.style.borderColor=''
////
//age error
const ageError= document.querySelector('#ageError')
ageError.style.display='none'
ageError.textContent=''
const ageInput=event.target.elements.age
ageInput.style.border='none'
ageInput.style.borderColor=''

    
const id=uuidv4()

console.log(event.target.elements.age.value)
    users.push({
        name:event.target.elements.name.value
        ,age:event.target.elements.age.value
        ,id:id
    })
    renderFromeUsers(users)
    saveItemOnDataBase(users)
    event.target.elements.name.value=''
    event.target.elements.age.value=''
}})
