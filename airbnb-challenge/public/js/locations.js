const locations = [
  {
    "codigo_ibge": 2800308,
    "nome": "Aracaju",
    "latitude": -10.9091,
    "longitude": -37.0677,
    "capital": true,
    "codigo_uf": 28,
    "estado": {
      "codigo_uf": 28,
      "uf": "SE",
      "nome": "Sergipe",
      "latitude": -10.57,
      "longitude": -37.45
    }
  },
  {
    "codigo_ibge": 1501402,
    "nome": "Belém",
    "latitude": -1.4554,
    "longitude": -48.4898,
    "capital": true,
    "codigo_uf": 15,
    "estado": {
      "codigo_uf": 15,
      "uf": "PA",
      "nome": "Pará",
      "latitude": -3.79,
      "longitude": -52.48
    }
  },
  {
    "codigo_ibge": 3106200,
    "nome": "Belo Horizonte",
    "latitude": -19.9102,
    "longitude": -43.9266,
    "capital": true,
    "codigo_uf": 31,
    "estado": {
      "codigo_uf": 31,
      "uf": "MG",
      "nome": "Minas Gerais",
      "latitude": -18.1,
      "longitude": -44.38
    }
  },
  {
    "codigo_ibge": 1400100,
    "nome": "Boa Vista",
    "latitude": 2.82384,
    "longitude": -60.6753,
    "capital": true,
    "codigo_uf": 14,
    "estado": {
      "codigo_uf": 14,
      "uf": "RR",
      "nome": "Roraima",
      "latitude": 1.99,
      "longitude": -61.33
    }
  },
  {
    "codigo_ibge": 5300108,
    "nome": "Brasília",
    "latitude": -15.7795,
    "longitude": -47.9297,
    "capital": true,
    "codigo_uf": 53,
    "estado": {
      "codigo_uf": 53,
      "uf": "DF",
      "nome": "Distrito Federal",
      "latitude": -15.83,
      "longitude": -47.86
    }
  },
  {
    "codigo_ibge": 5002704,
    "nome": "Campo Grande",
    "latitude": -20.4486,
    "longitude": -54.6295,
    "capital": true,
    "codigo_uf": 50,
    "estado": {
      "codigo_uf": 50,
      "uf": "MS",
      "nome": "Mato Grosso do Sul",
      "latitude": -20.51,
      "longitude": -54.54
    }
  },
  {
    "codigo_ibge": 5103403,
    "nome": "Cuiabá",
    "latitude": -15.601,
    "longitude": -56.0974,
    "capital": true,
    "codigo_uf": 51,
    "estado": {
      "codigo_uf": 51,
      "uf": "MT",
      "nome": "Mato Grosso",
      "latitude": -12.64,
      "longitude": -55.42
    }
  },
  {
    "codigo_ibge": 4106902,
    "nome": "Curitiba",
    "latitude": -25.4195,
    "longitude": -49.2646,
    "capital": true,
    "codigo_uf": 41,
    "estado": {
      "codigo_uf": 41,
      "uf": "PR",
      "nome": "Paraná",
      "latitude": -24.89,
      "longitude": -51.55
    }
  },
  {
    "codigo_ibge": 4205407,
    "nome": "Florianópolis",
    "latitude": -27.5945,
    "longitude": -48.5477,
    "capital": true,
    "codigo_uf": 42,
    "estado": {
      "codigo_uf": 42,
      "uf": "SC",
      "nome": "Santa Catarina",
      "latitude": -27.45,
      "longitude": -50.95
    }
  },
  {
    "codigo_ibge": 2304400,
    "nome": "Fortaleza",
    "latitude": -3.71664,
    "longitude": -38.5423,
    "capital": true,
    "codigo_uf": 23,
    "estado": {
      "codigo_uf": 23,
      "uf": "CE",
      "nome": "Ceará",
      "latitude": -5.2,
      "longitude": -39.53
    }
  },
  {
    "codigo_ibge": 5208707,
    "nome": "Goiânia",
    "latitude": -16.6864,
    "longitude": -49.2643,
    "capital": true,
    "codigo_uf": 52,
    "estado": {
      "codigo_uf": 52,
      "uf": "GO",
      "nome": "Goiás",
      "latitude": -15.98,
      "longitude": -49.86
    }
  },
  {
    "codigo_ibge": 2507507,
    "nome": "João Pessoa",
    "latitude": -7.11509,
    "longitude": -34.8641,
    "capital": true,
    "codigo_uf": 25,
    "estado": {
      "codigo_uf": 25,
      "uf": "PB",
      "nome": "Paraíba",
      "latitude": -7.28,
      "longitude": -36.72
    }
  },
  {
    "codigo_ibge": 1600303,
    "nome": "Macapá",
    "latitude": 0.034934,
    "longitude": -51.0694,
    "capital": true,
    "codigo_uf": 16,
    "estado": {
      "codigo_uf": 16,
      "uf": "AP",
      "nome": "Amapá",
      "latitude": 1.41,
      "longitude": -51.77
    }
  },
  {
    "codigo_ibge": 2704302,
    "nome": "Maceió",
    "latitude": -9.66599,
    "longitude": -35.735,
    "capital": true,
    "codigo_uf": 27,
    "estado": {
      "codigo_uf": 27,
      "uf": "AL",
      "nome": "Alagoas",
      "latitude": -9.62,
      "longitude": -36.82
    }
  },
  {
    "codigo_ibge": 1302603,
    "nome": "Manaus",
    "latitude": -3.11866,
    "longitude": -60.0212,
    "capital": true,
    "codigo_uf": 13,
    "estado": {
      "codigo_uf": 13,
      "uf": "AM",
      "nome": "Amazonas",
      "latitude": -3.47,
      "longitude": -65.1
    }
  },
  {
    "codigo_ibge": 2408102,
    "nome": "Natal",
    "latitude": -5.79357,
    "longitude": -35.1986,
    "capital": true,
    "codigo_uf": 24,
    "estado": {
      "codigo_uf": 24,
      "uf": "RN",
      "nome": "Rio Grande do Norte",
      "latitude": -5.81,
      "longitude": -36.59
    }
  },
  {
    "codigo_ibge": 1721000,
    "nome": "Palmas",
    "latitude": -10.24,
    "longitude": -48.3558,
    "capital": true,
    "codigo_uf": 17,
    "estado": {
      "codigo_uf": 17,
      "uf": "TO",
      "nome": "Tocantins",
      "latitude": -9.46,
      "longitude": -48.26
    }
  },
  {
    "codigo_ibge": 4314902,
    "nome": "Porto Alegre",
    "latitude": -30.0318,
    "longitude": -51.2065,
    "capital": true,
    "codigo_uf": 43,
    "estado": {
      "codigo_uf": 43,
      "uf": "RS",
      "nome": "Rio Grande do Sul",
      "latitude": -30.17,
      "longitude": -53.5
    }
  },
  {
    "codigo_ibge": 1100205,
    "nome": "Porto Velho",
    "latitude": -8.76077,
    "longitude": -63.8999,
    "capital": true,
    "codigo_uf": 11,
    "estado": {
      "codigo_uf": 11,
      "uf": "RO",
      "nome": "Rondônia",
      "latitude": -10.83,
      "longitude": -63.34
    }
  },
  {
    "codigo_ibge": 2611606,
    "nome": "Recife",
    "latitude": -8.04666,
    "longitude": -34.8771,
    "capital": true,
    "codigo_uf": 26,
    "estado": {
      "codigo_uf": 26,
      "uf": "PE",
      "nome": "Pernambuco",
      "latitude": -8.38,
      "longitude": -37.86
    }
  },
  {
    "codigo_ibge": 1200401,
    "nome": "Rio Branco",
    "latitude": -9.97499,
    "longitude": -67.8243,
    "capital": true,
    "codigo_uf": 12,
    "estado": {
      "codigo_uf": 12,
      "uf": "AC",
      "nome": "Acre",
      "latitude": -8.77,
      "longitude": -70.55
    }
  },
  {
    "codigo_ibge": 3304557,
    "nome": "Rio de Janeiro",
    "latitude": -22.9129,
    "longitude": -43.2003,
    "capital": true,
    "codigo_uf": 33,
    "estado": {
      "codigo_uf": 33,
      "uf": "RJ",
      "nome": "Rio de Janeiro",
      "latitude": -22.25,
      "longitude": -42.66
    }
  },
  {
    "codigo_ibge": 2927408,
    "nome": "Salvador",
    "latitude": -12.9718,
    "longitude": -38.5011,
    "capital": true,
    "codigo_uf": 29,
    "estado": {
      "codigo_uf": 29,
      "uf": "BA",
      "nome": "Bahia",
      "latitude": -13.29,
      "longitude": -41.71
    }
  },
  {
    "codigo_ibge": 2111300,
    "nome": "São Luís",
    "latitude": -2.53874,
    "longitude": -44.2825,
    "capital": true,
    "codigo_uf": 21,
    "estado": {
      "codigo_uf": 21,
      "uf": "MA",
      "nome": "Maranhão",
      "latitude": -5.42,
      "longitude": -45.44
    }
  },
  {
    "codigo_ibge": 3550308,
    "nome": "São Paulo",
    "latitude": -23.5329,
    "longitude": -46.6395,
    "capital": true,
    "codigo_uf": 35,
    "estado": {
      "codigo_uf": 35,
      "uf": "SP",
      "nome": "São Paulo",
      "latitude": -22.19,
      "longitude": -48.79
    }
  },
  {
    "codigo_ibge": 2211001,
    "nome": "Teresina",
    "latitude": -5.09194,
    "longitude": -42.8034,
    "capital": true,
    "codigo_uf": 22,
    "estado": {
      "codigo_uf": 22,
      "uf": "PI",
      "nome": "Piauí",
      "latitude": -6.6,
      "longitude": -42.28
    }
  },
  {
    "codigo_ibge": 3205309,
    "nome": "Vitória",
    "latitude": -20.3155,
    "longitude": -40.3128,
    "capital": true,
    "codigo_uf": 32,
    "estado": {
      "codigo_uf": 32,
      "uf": "ES",
      "nome": "Espírito Santo",
      "latitude": -19.19,
      "longitude": -40.34
    }
  }
]

const floatToCurrency = value => Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)

const mapZoomLevel = 4
let markers = [];
let map = null
let mapcenter = null

//Create markers for the randomly generated points
function createMapMarkers(mappoints) {
  mapcenter = mapcenter ? mapcenter : new google.maps.LatLng(-15.7795, -47.9297)
  //Create the default map
  const myOptions = {
    zoom: mapZoomLevel,
    scaleControl: true,
    center: mapcenter
  }

  map = map ? map : new google.maps.Map(document.getElementById('map_canvas'), myOptions)
  
  mappoints.forEach(({ name, nome, price, latitude, longitude, estado }) => { 
    nome = nome.replace(/<[^>]+>/g, '')  
    //Map points without the east/west adjustment
    const newmappoint = new google.maps.LatLng(latitude, longitude)
    let marker = new google.maps.Marker({
        position: newmappoint,
        map: map,
        title: `${name}, ${nome} - ${estado} ${floatToCurrency(price)}`,
        zIndex: 2
    });
    markers.push(marker)
     
  })
}

//Destroy all markers
function clearMarkers() {
  markers.forEach(marker => marker.setMap(null))
  markers = [];
}