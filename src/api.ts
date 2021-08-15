import { createServer } from "miragejs"

createServer({
  routes() {
    this.namespace = "api"

    this.get("/continents", () => {
      return [
        {
          continent: "africa",
          name: "África",
          callToAction: "O segundo continente mais populoso da Terra.",
          image: "https://unsplash.com/photos/kfxEUCTUeyg",
          description: "A África é o terceiro continente mais extenso com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra com cerca de um bilhão de pessoas, representando cerca de um sétimo da população mundial, e 54 países independentes.",
          countries: "47",
          languages: "197",
          topCities: [
            {
              name: "Cairo",
              image: "https://unsplash.com/photos/pwMbtwA9LRc",
              countrie: "Egito",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/egipto_R.gif"
            },
            {
              name: "Johanesburgo",
              image: "https://unsplash.com/photos/xvJVDUoGpoU",
              countrie: "África do Sul",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/africadosul_R.gif"
            },
            {
              name: "Marrakech",
              image: "https://unsplash.com/photos/ILxHs003uMc",
              countrie: "Marrocos",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/marrocos_R.gif"
            },
            {
              name: "Hurghada",
              image: "https://unsplash.com/photos/33qVyGyb3oM",
              countrie: "Egito",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/egipto_R.gif"
            }
          ]
        },
        {
          continent: "americas",
          name: "Américas",
          callToAction: "O continente localizado no hemisfério ocidental.",
          image: "https://unsplash.com/photos/BFyhlZYMd0Y",
          description: "América é o continente localizado no hemisfério ocidental e que se estende, no sentido norte-sul, desde o oceano Ártico até o cabo Horn, ao longo de cerca de 15 mil quilômetros. O seu extremo oriental insular encontra-se na Groenlândia, o Nordostrundingen, enquanto o ocidental localiza-se nas Aleutas.",
          countries: "36",
          languages: "34",
          topCities: [
            {
              name: "Nova Iorque",
              image: "https://unsplash.com/photos/TaCk3NspYe0",
              countrie: "Estados Unidos da América",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/usa_R.gif"
            },
            {
              name: "Miami",
              image: "https://unsplash.com/photos/mqpawAQXRyA",
              countrie: "Estados Unidos da América",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/usa_R.gif"
            },
            {
              name: "Los Angeles",
              image: "https://unsplash.com/photos/pTCcJSBOTxY",
              countrie: "Estados Unidos da América",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/usa_R.gif"
            },
            {
              name: "Las Vegas",
              image: "https://unsplash.com/photos/iKlafvet_w0",
              countrie: "Estados Unidos da América",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/usa_R.gif"
            },
            {
              name: "Cancún",
              image: "https://unsplash.com/photos/jdswuUaDeKM",
              countrie: "México",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/mexico_R.gif"
            },
            {
              name: "Orlando",
              image: "https://unsplash.com/photos/Tyn3-Cljx-A",
              countrie: "Estados Unidos da América",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/usa_R.gif"
            },
            {
              name: "Toronto",
              image: "https://unsplash.com/photos/gOq27RHoL3s",
              countrie: "Canadá",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/canada_R.gif"
            },
            {
              name: "Vancouver",
              image: "https://unsplash.com/photos/QibVt4TcPQ4",
              countrie: "Canadá",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/canada_R.gif"
            },
            {
              name: "São Francisco",
              image: "https://unsplash.com/photos/gZXx8lKAb7Y",
              countrie: "Estados Unidos da América",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/usa_R.gif"
            },
            {
              name: "Honolulu",
              image: "https://unsplash.com/photos/XwCgFPLalP4",
              countrie: "Estados Unidos da América",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/usa_R.gif"
            },
            {
              name: "Buenos Aires",
              image: "https://unsplash.com/photos/_yo28TDZFNo",
              countrie: "Argentina",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/argentina_R.gif"
            },
            {
              name: "Lima",
              image: "https://unsplash.com/photos/Yrqyn1Gb80k",
              countrie: "Peru",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/peru_R.gif"
            },
            {
              name: "Rio de Janeiro",
              image: "https://unsplash.com/photos/7F65HDP0-E0",
              countrie: "Brasil",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/brasil_R.gif"
            }
          ]
        },
        {
          continent: "asia",
          name: "Ásia",
          callToAction: "O maior dos continentes.",
          image: "https://unsplash.com/photos/TnUG2pWraPE",
          description: "A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial.",
          countries: "50",
          languages: "199",
          topCities: [
            {
              name: "Hong Kong",
              image: "https://unsplash.com/photos/WMSvsWzhM0g",
              countrie: "China",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/hongkong_R.gif"
            },
            {
              name: "Bangkok",
              image: "https://unsplash.com/photos/-y3sidWvDxg",
              countrie: "Tailândia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/tailandia_R.gif"
            },
            {
              name: "Macau",
              image: "https://unsplash.com/photos/I0fnFdtE9zc",
              countrie: "China",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/macau_R.gif"
            },
            {
              name: "Singapura",
              image: "https://unsplash.com/photos/__cBlRzLSTg",
              countrie: "Malásia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/singapura_R.gif"
            },
            {
              name: "Dubai",
              image: "https://unsplash.com/photos/wJ6xyh1YMxU",
              countrie: "Emirados Árabes Unidos",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/emiratosarun_R.gif"
            },
            {
              name: "Kuala Lumpur",
              image: "https://unsplash.com/photos/qzVTbe_WHSw",
              countrie: "Malásia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/malasia_R.gif"
            },
            {
              name: "Istanbul",
              image: "https://unsplash.com/photos/trkTXDoTRY8",
              countrie: "Turquia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/turquia_R.gif"
            },
            {
              name: "Deli",
              image: "https://unsplash.com/photos/tFqGkt0iwnc",
              countrie: "Índia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/india_R.gif"
            },
            {
              name: "Antália",
              image: "https://unsplash.com/photos/Hs1tXq1g4kQ",
              countrie: "Turquia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/turquia_R.gif"
            },
            {
              name: "Shenzhen",
              image: "https://unsplash.com/photos/xQdUIo_MSQ4",
              countrie: "China",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/china_R.gif"
            },
            {
              name: "Bombaim",
              image: "https://unsplash.com/photos/l57vjomVK20",
              countrie: "Índia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/india_R.gif"
            },
            {
              name: "Phuket",
              image: "https://unsplash.com/photos/z6-wQHB6p2Y",
              countrie: "Tailândia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/tailandia_R.gif"
            },
            {
              name: "Tóquio",
              image: "https://unsplash.com/photos/layMbSJ3YOE",
              countrie: "Japão",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/japao_R.gif"
            },
            {
              name: "Pattaya",
              image: "https://unsplash.com/photos/Q6dB5Z6hJqA",
              countrie: "Tailândia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/tailandia_R.gif"
            },
            {
              name: "Taipé",
              image: "https://unsplash.com/photos/yMKRCniwoNk",
              countrie: "Taiwan",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/taiwan_R.gif"
            },
            {
              name: "Meca",
              image: "https://unsplash.com/photos/cAQXApsh490",
              countrie: "Arábia Saudita",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/arabiasaud_R.gif"
            },
            {
              name: "Cantão",
              image: "https://unsplash.com/photos/b4lrCXkwqfQ",
              countrie: "China",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/china_R.gif"
            },
            {
              name: "Medina",
              image: "https://unsplash.com/photos/rzzS0_pMsD0",
              countrie: "Arábia Saudita",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/arabiasaud_R.gif"
            },
            {
              name: "Seul",
              image: "https://unsplash.com/photos/ITu-L0FuPPk",
              countrie: "Coreia do Sul",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/coreiasul_R.gif"
            },
            {
              name: "Agra",
              image: "https://unsplash.com/photos/iWMfiInivp4",
              countrie: "Índia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/india_R.gif"
            },
            {
              name: "Osaka",
              image: "https://unsplash.com/photos/uBfK5i6j1B8",
              countrie: "Japão",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/japao_R.gif"
            },
            {
              name: "Xangai",
              image: "https://unsplash.com/photos/5h_dMuX_7RE",
              countrie: "China",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/china_R.gif"
            },
            {
              name: "Saigon",
              image: "https://unsplash.com/photos/wUk2U5Wirxg",
              countrie: "Vietnã",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/vietname_R.gif"
            },
            {
              name: "Denpasar",
              image: "https://unsplash.com/photos/zK2fzhp21ss",
              countrie: "Indonésia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/indonesia_R.gif"
            },
            {
              name: "Chennai",
              image: "https://unsplash.com/photos/QXIBCvvA_jc",
              countrie: "Índia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/india_R.gif"
            },
            {
              name: "Johor Bahru",
              image: "https://unsplash.com/photos/-qvuTqP-XLE",
              countrie: "Malásia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/malasia_R.gif"
            },
            {
              name: "Jaipur",
              image: "https://unsplash.com/photos/6rDbvXzIVpQ",
              countrie: "Índia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/india_R.gif"
            },
            {
              name: "Hạ Long",
              image: "https://unsplash.com/photos/lAEBHah6MSQ",
              countrie: "Vietnã",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/vietname_R.gif"
            },
            {
              name: "Riad",
              image: "https://unsplash.com/photos/yL2fZUso5g0",
              countrie: "Arábia Saudita",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/arabiasaud_R.gif"
            },
            {
              name: "Hanói",
              image: "https://unsplash.com/photos/niFWqrLdjlE",
              countrie: "Vietnã",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/vietname_R.gif"
            },
            {
              name: "Jacarta",
              image: "https://unsplash.com/photos/Uz-LsnjxJ6U",
              countrie: "Indonésia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/indonesia_R.gif"
            },
            {
              name: "Pequim",
              image: "https://unsplash.com/photos/0xn9T2cEigE",
              countrie: "China",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/china_R.gif"
            },
            {
              name: "Jerusalém",
              image: "https://unsplash.com/photos/ex9KQrN1mj0",
              countrie: "Israel",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/israel_R.gif"
            },
            {
              name: "Dammam",
              image: "https://unsplash.com/photos/KW-qmD8hOx4",
              countrie: "Arábia Saudita",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/arabiasaud_R.gif"
            },
            {
              name: "Ilha de Penang",
              image: "https://unsplash.com/photos/oeUMCJ0AeLM",
              countrie: "Malásia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/malasia_R.gif"
            },
            {
              name: "Quioto",
              image: "https://unsplash.com/photos/gd3ysFyrsTQ",
              countrie: "Japão",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/japao_R.gif"
            },
            {
              name: "Zhuhai",
              image: "https://unsplash.com/photos/NctVNctdLkE",
              countrie: "China",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/china_R.gif"
            },
            {
              name: "Chiang Mai",
              image: "https://unsplash.com/photos/6D05B660ydE",
              countrie: "Tailândia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/tailandia_R.gif"
            },
            {
              name: "Calcutá",
              image: "https://unsplash.com/photos/0AB9vnwMlqc",
              countrie: "Índia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/india_R.gif"
            },
            {
              name: "Cebu",
              image: "https://unsplash.com/photos/y4_tdapnjQs",
              countrie: "Filipinas",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/filipinas_R.gif"
            },
            {
              name: "Telavive",
              image: "https://unsplash.com/photos/LJzggyttyMQ",
              countrie: "Israel",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/israel_R.gif"
            },
            {
              name: "Guilin",
              image: "https://unsplash.com/photos/_75I7lCDgY8",
              countrie: "China",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/china_R.gif"
            },
            {
              name: "Chiba",
              image: "https://unsplash.com/photos/4Y4BN6qT7e8",
              countrie: "Japão",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/japao_R.gif"
            },
            {
              name: "Da Nang",
              image: "https://unsplash.com/photos/pCTuLkx8erE",
              countrie: "Vietnã",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/vietname_R.gif"
            },
            {
              name: "Batam",
              image: "https://unsplash.com/photos/xmkbJXofDEQ",
              countrie: "Indonésia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/indonesia_R.gif"
            },
            {
              name: "Fukuoka",
              image: "https://unsplash.com/photos/Si4k9aNcr1c",
              countrie: "Japão",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/japao_R.gif"
            },
            {
              name: "Abu Dhabi",
              image: "https://unsplash.com/photos/kZ1zThg6G40",
              countrie: "Emirados Árabes Unidos",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/emiratosarun_R.gif"
            },
            {
              name: "Jeju",
              image: "https://unsplash.com/photos/tZ6nv29QUfY",
              countrie: "Coreia do Sul",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/coreiasul_R.gif"
            },
            {
              name: "Krabi",
              image: "https://unsplash.com/photos/KNmjUL9T1sA",
              countrie: "Tailândia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/tailandia_R.gif"
            },
            {
              name: "Bangalore",
              image: "https://unsplash.com/photos/ky1d-IWCBis",
              countrie: "Índia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/india_R.gif"
            }
          ]
        },
        {
          continent: "europe",
          name: "Europa",
          callToAction: "O continente mais antigo.",
          image: "https://unsplash.com/photos/MZWBMNP7Nro",
          description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
          countries: "50",
          languages: "72",
          topCities: [
            {
              name: "Londres",
              image: "https://unsplash.com/photos/EXdXLrZXS9Q",
              countrie: "Inglaterra",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/inglaterra_R.gif"
            },
            {
              name: "Paris",
              image: "https://unsplash.com/photos/QAwciFlS1g4",
              countrie: "França",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/franca_R.gif"
            },
            {
              name: "Istanbul",
              image: "https://unsplash.com/photos/trkTXDoTRY8",
              countrie: "Turquia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/turquia_R.gif"
            },
            {
              name: "Roma",
              image: "https://unsplash.com/photos/VFRTXGw1VjU",
              countrie: "Itália",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/italia_R.gif"
            },
            {
              name: "Praga",
              image: "https://unsplash.com/photos/aDxmYZtYj7g",
              countrie: "República Checa",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/checa_R.gif"
            },
            {
              name: "Amsterdã",
              image: "https://unsplash.com/photos/t2hgHV1R7_g",
              countrie: "Holanda",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/holanda_R.gif"
            },
            {
              name: "Barcelona",
              image: "https://unsplash.com/photos/kMde0v9tYYM",
              countrie: "Espanha",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/espanha_R.gif"
            },
            {
              name: "Milão",
              image: "https://unsplash.com/photos/I9MeNSxtoJ8",
              countrie: "Itália",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/italia_R.gif"
            },
            {
              name: "Viena",
              image: "https://unsplash.com/photos/5SjAaqqCCmY",
              countrie: "Áustria",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/austria_R.gif"
            },
            {
              name: "Berlim",
              image: "https://unsplash.com/photos/iPOZf3tQfHA",
              countrie: "Alemanha",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/alemanha_R.gif"
            },
            {
              name: "Atenas",
              image: "https://unsplash.com/photos/iD4r0bm0ZDU",
              countrie: "Grécia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/grecia_R.gif"
            },
            {
              name: "Moscou",
              image: "https://unsplash.com/photos/L4jrg4c7928",
              countrie: "Rússia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/russia_R.gif"
            },
            {
              name: "Veneza",
              image: "https://unsplash.com/photos/t2yh3mlISdQ",
              countrie: "Itália",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/italia_R.gif"
            },
            {
              name: "Madrid",
              image: "https://unsplash.com/photos/WBGjg0DsO_g",
              countrie: "Espanha",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/espanha_R.gif"
            },
            {
              name: "Dublin",
              image: "https://unsplash.com/photos/KT4dOfvtZSg",
              countrie: "Irlanda",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/irlanda_R.gif"
            },
            {
              name: "Florença",
              image: "https://unsplash.com/photos/X35Ivset6-Y",
              countrie: "Itália",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/italia_R.gif"
            },
            {
              name: "Munique",
              image: "https://unsplash.com/photos/C6l894Q7wpI",
              countrie: "Alemanha",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/alemanha_R.gif"
            },
            {
              name: "São Petersburgo",
              image: "https://unsplash.com/photos/pX43I7JF3kI",
              countrie: "Rússia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/russia_R.gif"
            },
            {
              name: "Bruxelas",
              image: "https://unsplash.com/photos/suTr28QV4wU",
              countrie: "Bélgica",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/belgica_R.gif"
            },
            {
              name: "Budapeste",
              image: "https://unsplash.com/photos/qnUg1rdnUlk",
              countrie: "Hungria",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/hungria_R.gif"
            },
            {
              name: "Lisboa",
              image: "https://unsplash.com/photos/rYVmXecm64Q",
              countrie: "Portugal",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/portugal_R.gif"
            },
            {
              name: "Iráklio",
              image: "https://unsplash.com/photos/3E2UjHu1194",
              countrie: "Grécia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/grecia_R.gif"
            },
            {
              name: "Copenhage",
              image: "https://unsplash.com/photos/3_ZGrsirryY",
              countrie: "Dinamarca",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/dinamarca_R.gif"
            },
            {
              name: "Cracóvia",
              image: "https://unsplash.com/photos/0fl-WGMuNPA",
              countrie: "Polônia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/polonia_R.gif"
            },
            {
              name: "Varsóvia",
              image: "https://unsplash.com/photos/xcPw1-5OHTk",
              countrie: "Polônia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/polonia_R.gif"
            },
            {
              name: "Muğla",
              image: "https://unsplash.com/photos/3ofE9SM7SVE",
              countrie: "Turquia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/turquia_R.gif"
            },
            {
              name: "Frankfurt",
              image: "https://unsplash.com/photos/q18A6PEaQ6U",
              countrie: "Alemanha",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/alemanha_R.gif"
            },
            {
              name: "Estocolmo",
              image: "https://unsplash.com/photos/fPgooLPQB2Y",
              countrie: "Suécia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/suecia_R.gif"
            },
            {
              name: "Nice",
              image: "https://unsplash.com/photos/mpVZVCClgac",
              countrie: "França",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/franca_R.gif"
            },
            {
              name: "Porto",
              image: "https://unsplash.com/photos/g3O3xWspoN4",
              countrie: "Portugal",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/portugal_R.gif"
            },
            {
              name: "Rodes",
              image: "https://unsplash.com/photos/mAOTatwrE_o",
              countrie: "Grécia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/grecia_R.gif"
            }
          ]
        },
        {
          continent: "oceania",
          name: "Oceania",
          callToAction: "Grupos de ilhas do oceano Pacífico.",
          image: "https://unsplash.com/photos/TnUG2pWraPE",
          description: "Oceania ou Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico. O termo Oceania foi criado em 1831 pelo explorador francês Dumont d'Urville.",
          countries: "14",
          languages: "38",
          topCities: [
            {
              name: "Sydney",
              image: "https://unsplash.com/photos/7Zb7kUyQg1E",
              countrie: "Austrália",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/australia_R.gif"
            },
            {
              name: "Melbourne",
              image: "https://unsplash.com/photos/-gmtAa0Q5MI",
              countrie: "Austrália",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/australia_R.gif"
            },
            {
              name: "Auckland",
              image: "https://unsplash.com/photos/x0NvSdPk404",
              countrie: "Nova Zelândia",
              flag: "https://paginas.fe.up.pt/~fff/Homepage/Bandeiras/Imagens/novazelandia_R.gif"
            }
          ]
        }
      ]
    })
  }
})