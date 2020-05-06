(async function() {

  let loading = false
  let error = false

  const fetchData = async () => {
    const API_URL = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72'
    let data = []
    try {
      loading = true
      const response = await fetch(API_URL)
      data = await response.json()        
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

    elements.forEach(({photo, property_type, name, price}) => {
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
          <span class="item__score"><i class="fa fa-heart" aria-hidden="true"></i>4.8</span>
          <span class="item__price"><strong>${floatToCurrency(price)}</strong>/noite</span>
        </div>
      </div>
    </div>`
    });

    const itemsWapper = document.getElementById('items')
    itemsWapper.innerHTML = template
  }

  const homes = await fetchData()
  render(homes)
})()