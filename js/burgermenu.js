const burgerMenu = document.querySelector('.burger-menu')
let statusMenu = false

function openAndCloseBurgerMenu (){
    if(statusMenu === false){
        burgerMenu.insertAdjacentHTML('beforeend', `
            <div class="opened-menu">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Shop</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>
        `)
        statusMenu = true
    }
    else{
        const openedMenu = document.querySelector('.opened-menu')
        openedMenu.remove()

        statusMenu = false
    }
    
}

burgerMenu.addEventListener('click', openAndCloseBurgerMenu)