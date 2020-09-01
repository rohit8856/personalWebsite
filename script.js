let themedots = document.getElementsByClassName('theme-dot')
let theme = localStorage.getItem('theme')
if(theme== null){
    settheme('light')
}
else{
    settheme(theme)
}

for(var i=0;themedots.length>i;i++){
    themedots[i].addEventListener('click',function(){
        let mode = this.dataset.mode
        console.log(mode)
        settheme(mode)
    })
}

function settheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'default.css'
    }
    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css'
    }
    if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css'
    }
    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme',mode)
}