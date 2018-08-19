const changeThemeButtons = document.querySelectorAll('[name=theme]');

const rootStyle = document.documentElement.style;


const lightTheme = {
    '--bg-color'    :  "#eee",
    '--bg-color-2'  :  "#fff",
    '--text-color'  :  "#53575A",
    '--accent-color':  "#007BDF",
    '--font'        :  "'Open Sans',sans-serif"
}

const darkTheme = {
    '--bg-color'    :  "#53575A",
    '--bg-color-2'  :  "#282D31",
    '--text-color'  :  "#eee",
    '--accent-color':  "#FF3C32",
    '--font'        :  "'Lato',sans-serif"
}

for(let button of changeThemeButtons){
    button.addEventListener('change',e => {
        if(e.target.id === 'dark'){
            changeTheme(darkTheme)
        }else if(e.target.id === 'light'){
            changeTheme(lightTheme)
        }
    })
}

console.log(darkTheme)

const changeTheme = theme => {
    let cssVars = Object.keys(theme);
    for(let cssVar of cssVars){
        rootStyle.setProperty(cssVar,theme[cssVar])
    }
}

// console.log(changeThemeButtons)


ohara = {
    name : 'junya',
    mioji :'ohara',
    years: 25

}


console.log(ohara[name]);

