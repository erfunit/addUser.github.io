//save items on dbs:
const saveItemOnDataBase=(usersArray)=>{
localStorage.setItem('users',JSON.stringify(usersArray))
}

//save on array:
const saveItemsOnArray=()=>{
    const JSONusers=localStorage.getItem('users')
    try {
        return JSONusers!==null?JSON.parse(JSONusers):[]
    } catch (error) {
        return []
    }
}

const removeUser=(usersArray,userID)=>{
   const Index= usersArray.findIndex(item=>item.id===userID)
   usersArray.splice(Index,1)
}

const renderFromeUsers=(usersArray)=>{
    document.querySelector('#usersPlace').innerHTML=''
    if(usersArray.length===0){
        const divemoon=document.querySelector('#usersPlace')
        divemoon.style.display='none'
    }
    else{
        const divemoon=document.querySelector('#usersPlace')
        divemoon.style.display='inline-block'
    }
    usersArray.forEach(item => {
        document.querySelector('#usersPlace').appendChild(renderUser(item))      
    })
}
const renderUser=(user)=>{
    const userDiv=document.createElement('div')
    userDiv.setAttribute('class','userDiv')
    const userName=document.createElement('a')
    userName.textContent=user.name
    userName.setAttribute('href',`./userEdit.html#${user.id}`)
    const userAge=document.createElement('span')
    userAge.textContent=user.age
    const removeBtn=document.createElement('input')
    userDiv.setAttribute('class','userdiv')
    removeBtn.setAttribute('type','button')
    removeBtn.setAttribute('class','removeBtn')
    userName.setAttribute('class','userNames')
    userAge.setAttribute('class','userAges')
    removeBtn.value='remove'

    //appened child items:
    userDiv.appendChild(userName)
    userDiv.appendChild(userAge)
    userDiv.appendChild(removeBtn)
//add event listener for remove here::
removeBtn.addEventListener('click',(event)=>{
removeUser(users,user.id)
saveItemOnDataBase(users)
renderFromeUsers(users)
})
return userDiv
}
