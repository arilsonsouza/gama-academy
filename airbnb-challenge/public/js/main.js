(async function() {

  let loading = false
  let error = false
  let currentPage = 1
  let collectionLength = 0
  let rowsPerPage = 4
  let pages = []
  let lengthOfStay = 1
  let searchQuery = null
  const selectedDates = {
    checkIn: null,
    checkOut: null
  }

  let filteredItems = []
  let items = []

  const itemsWapper = document.getElementById('items')
  const spinnerWrapper = document.getElementById('spinner')
  const mainContainer = document.querySelector('.main')
  const searchInput = document.getElementById('searchInput')
  const searchButton = document.getElementById('searchButton')
  const resetButton = document.getElementById('resetButton')

  resetButton.addEventListener('click', () => {
    updateDOM(items)
  })

  searchButton.addEventListener('click', () => {    
    searchQuery = searchInput.value
    
    filteredItems = items
    if (searchQuery) {            
      const regExp = new RegExp(searchQuery, 'i')
      filteredItems = filteredItems
        .filter(item => regExp.test(item.nome))
        .map(item =>  ({ ...item, nome: item.nome.replace(regExp, `<b>$&</b>`)}))
    }

    updateDOM(filteredItems)
  })

  const datepikerOptions = {
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'],
    dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
    dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
    defaultDate: new Date()
  }

  $('#startDate').datepicker({ ...datepikerOptions, buttonText: "CHECK-IN", onSelect: (dateText) => setDate(dateText, 'checkIn')})
  $('#endDate').datepicker({ ...datepikerOptions, buttonText: "CHECKOUT", onSelect: (dateText) => setDate(dateText, 'checkOut')})

  const getDifferenceBetweenDates = (start, end) => {
    const date1 = new Date(start);
    const date2 = new Date(end);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    
    return diffDays
  }

  const setDate = (date, key) => {
    selectedDates[key] = date
    const { checkIn, checkOut } = selectedDates
    if( checkIn && checkOut) {
      const quantityOfDays = getDifferenceBetweenDates(checkIn, checkOut)
      lengthOfStay = quantityOfDays >= 1 ? quantityOfDays : 1
      updateDOM(items)
    }
  }
  const fetchData = async () => {
    const API_URL = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72'
    let data = []    
    try {
      loading = true
      const response = await fetch(API_URL)
      data = await response.json()
      data = data.map((item, index) => {
        let score = (Math.random() * (5 - 1) + 1).toFixed(1)
        return {
          ...item,
          score,
          ...locations[index]
        }
      })

      console.log('ITEMS: ', data)
      mainContainer.style.visibility = 'visible'  
      spinnerWrapper.style.display = 'none'      
    } catch (err) {
      error = true
    } finally {
      loading = false
    } 

    return data
  }

  const render = (elements) => {
    let template = ''

    const mappoints = elements.map(({name, nome, price, latitude, longitude, estado: { nome: estado }}) => ({name, nome, price, latitude, longitude, estado}))
    clearMarkers()
    createMapMarkers(mappoints)

    elements.forEach(({photo, property_type, name, price, score, nome,  estado: { nome: estado }}) => {
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
            <span class="item__location">${nome} - ${estado}</span>                  
          </div>

          <div class="header__info__icon">
            <i class="fa fa-heart" aria-hidden="true"></i>
          </div>
        </header>
        <div class="item__info__footer">
          <span class="item__score"><i class="fa fa-heart" aria-hidden="true"></i>${score}</span>
          <span class="item__price"><strong>${floatToCurrency(price)}</strong>/noite
          <br/><span class="item__total__price">Total de ${floatToCurrency(price * lengthOfStay)}</span>
          </span>
        </div>
      </div>
    </div>`
    });

    itemsWapper.innerHTML = template
  }

  const navigate = evt => {     
    currentPage = parseInt(evt.target.dataset.pagenumber) 
    updateDOM((searchQuery && pages.length > 1) ? filteredItems : items)
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

  function paginate(data) {    
    return data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
  }

  const updateDOM = (data) => {
    collectionLength = data.length 
    pages = generatePagesArray(currentPage, collectionLength, rowsPerPage)
    render(paginate(data))
    renderPages()    
  }

  items = await fetchData()   
  updateDOM(items)

})()