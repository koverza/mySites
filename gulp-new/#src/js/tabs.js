let tabsBtn = document.querySelectorAll('.tabs-nav__button')
let tabsItems = document.querySelectorAll('.tabs-block')


tabsBtn.forEach(function (item) {
    let currentBtn = item
    currentBtn.addEventListener('click', () => {

        let tabId = currentBtn.getAttribute("data-tab")
        let currentTab = document.querySelector(tabId)

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function (btn) {
                btn.classList.remove('active')
            })
    
            tabsItems.forEach(function (tab) {
                tab.classList.remove('active')
            })
    
            currentBtn.classList.add('active')
            currentTab.classList.add('active')

        }
    })
})

document.querySelector('.tabs-nav__button:nth-child(1)').click()