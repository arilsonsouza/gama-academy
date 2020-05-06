(async function() {

  let loading = false
  let error = false
  let currentPage = 1
  let  collectionLength = 0
  let rowsPerPage = 4
  let pages = []
  const itmes = []

  const itemsWapper = document.getElementById('items')
  const spinnerWrapper = document.getElementById('spinner')
  const mainContainer = document.querySelector('.main')

  const fetchData = async () => {
    const API_URL = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72'
    let data = []    
    try {
      loading = true
      const response = await fetch(API_URL)
      data = await response.json()
      data.forEach(item => item.score = (Math.random() * (5 - 1) + 1).toFixed(1))
      mainContainer.style.visibility = 'visible'  
      spinnerWrapper.style.display = 'none'      
    } catch (err) {
      error = true
    } finally {
      loading = false
    } 

    return data
  }

  const floatToCurrency = value => Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)

  const render = (elements) => {
    let template = ''

    elements.forEach(({photo, property_type, name, price, score}) => {
      template += `<div class="item">
      <div class="item__image">
        <a href="#">
          <img src="${photo}" alt="${name}">
        </a>
      </div>

      <div class="item__info">
        <header class="item__info__header">
          <div class="header__info__wrapper">
            <span class="item__type">
              ${property_type}
            </span>
            <a href="#" class="item__name">
              ${name}
            </a>                  
          </div>

          <div class="header__info__icon">
            <i class="fa fa-heart" aria-hidden="true"></i>
          </div>
        </header>              
        <div class="item__content">
          <span>
            3 hóspedes . 1 quarto . 1 cama . 1 banheiro compartilhado <br>
            Wifi . Cozinha
          </span>
        </div>

        <div class="item__info__footer">
          <span class="item__score"><i class="fa fa-heart" aria-hidden="true"></i>${score}</span>
          <span class="item__price"><strong>${floatToCurrency(price)}</strong>/noite</span>
        </div>
      </div>
    </div>`
    });

    itemsWapper.innerHTML = template
  }

  const navigate = evt => {     
    currentPage = parseInt(evt.target.dataset.pagenumber) 
    updateDOM()
  }

  const renderPages = () => {
    let paginationTemplate = ''

    pages.forEach(page => {
      paginationTemplate += page === '...' ? 
      `<li class="pagination-item-disabled"> ${page} </li>` : 
      `<li 
          class="pagination-item ${ page === currentPage ? 'current-page-item' : 'page-item' }"
          data-pageNumber=${page}>${page}</li>`

    })

    if (collectionLength > 0) {

      if (currentPage !== 1) {
        paginationTemplate = `<li 
            class="prev-page pagination-item"
            data-pageNumber=${currentPage - 1}>
              <i class="fa fa-angle-left" data-pageNumber=${currentPage - 1} ></i>
          </li>` + paginationTemplate
      }

      if (currentPage !== pages[pages.length - 1]) {
        paginationTemplate += `<li 
            class="next-page pagination-item"
            data-pageNumber=${currentPage + 1}>
              <i class="fa fa-angle-right" data-pageNumber=${currentPage + 1} ></i>
        </li>`
      }
        
    }
      
    document.getElementById('pagination').innerHTML = paginationTemplate
    
    document.querySelectorAll('li.next-page, li.prev-page').forEach(el => {
      el.addEventListener('click', navigate)
    })

    document.querySelectorAll('.page-item').forEach(el => {
      el.addEventListener('click', navigate)
    })
  }

  function paginate() {    
    return items.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
  }

  const updateDOM = () => {
    pages = generatePagesArray(currentPage, collectionLength, rowsPerPage)
    render(paginate())
    renderPages()    
  }

  items = await fetchData()
  collectionLength = items.length  

  updateDOM()

})()