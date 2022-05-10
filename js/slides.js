const slides01 = [
  {
    title: "",
    content: `
      `,
    phase: 'philadelphia',
    showpopups: true,
    bounds: [[39.9, -75.35], [40.16, -74.87]],
    philly: true,
    emphasis: false,
  },
  {
    title: "La Finquita",
    content: `
      Nuestra historia comienza en una pequeña esquina del noreste de Filadelfia
      llamada La Finquita.
      `,
    phase: 'finquita',
    showpopups: true,
    bounds: [[39.9, -75.35], [40.16, -74.87]],
    philly: true,
    emphasis: false,
  },
  {
    title: "",
    content: `
      La Finquita era un próspero jardín comunal ubicado en un lote baldío del
      barrio de Kensington en Filadelfia. Por década, La Finquita brindó una
      fuente muy necesitada de legumbres y frutas a los habitantes y miembros de
      esta comunidad.
      <br></br>
      <img src='img/slide09_finquita.jpg' alt='Community Garden'>
    `,
    phase: 'finquitaZoom',
    showpopups: true,
    // bounds: [[39.9, -75.35], [40.16, -74.87]],
    philly: false,
    emphasis: false,
  },
  {
    title: "",
    content: `
      …eso es, hasta la primavera de 2019 cuando La Finquita fue <a href='https://
      whyy.org/articles/how-one-urban-farm-was-lost-la-finquitas-finale/'>
      cerrado permanentemente.</a>
      <br></br>
      <img src='img/slide02_finquita.png' alt='Empty Lot'>
      <br></br>
      De pasar al frente de La Finquita hoy en día, uno no pensaría que este
      lote baldío hace unos pocos años era un rebosante jardín urbano querido
      por los miembros de la comunidad alrededor de este barrio.
    `,
    phase: 'finquitaZoom',
    // showpopups: true,
    // bounds: [[39.9, -75.35], [40.16, -74.87]],
    philly: false,
    emphasis: true,
  },
  {
    title: "Lotes Baldíos en Filadelfia",
    content: `
      La Finquita es solo uno de los más de <b>27,000</b> lotes a lo largo de
      Filadelfia, muchos de los cuáles sirven una variedad de propósitos
      preciados en su comunidad, desde jardines urbanos a parques públicos a
      pequeños patios colindantes.
      <br></br>En los últimos años, sin embargo, recursos comunales como La
      Finquita han enfrentado una amenaza creciente. La Ciudad de Filadelfia ha
      estado realizando ejecuciones hipotecarias sobre propiedades baldía al
      por mayor, vendiéndolas a la fuerza a través de subastas públicas.
      <br></br>Frecuentemente, los vecinos que han cuidado estas propiedades por
      años no se enteran que estas están en venta hasta ya han sido compradas.
      `,
    phase: 'vacant',
    // showpopups: true,
    bounds: [[39.9, -75.35], [40.16, -74.87]],
    philly: false,
    emphasis: false,
  }
];

const slides02 = [
  {
    title: "Lotes baldíos",
    content: `
      <img src='img/points-01.png' class='points' alt='diagram of vacant lots'>
      <br>De las más de 580 mil propiedades en Filadelfia, cerca de
      <b>27 mil</b>, o <b>4,71%</b> eran baldías en el año 2021.
      `,
    phase: 'vacant',
    // showpopups: true,
    bounds: [[39.9, -75.35], [40.16, -74.87]],
    philly: false,
    emphasis: false,
  },
  {
    title: "Morosidades Fiscales de Propiedades Inmuebles",
    content: `
      <img src='img/points-02.png' class='points' alt='diagram of delinquencies'>
      <br>
      De las <b>27 mil</b> propiedades baldías en Filadelfia, aproximadamente
      <b>27,5%</b> tienen morosidades fiscales. Eso significa que casi
      <b>7500</b> de estas propiedades a través de Filadelfia están en riesgo de
      una ejecución hipotecaria.
      `,
    phase: 'delinquent',
    // showpopups: true,
    bounds: [[39.9, -75.35], [40.16, -74.87]],
    philly: false,
    emphasis: true,
  },
  {
    title: "Gravámenes del US Bank",
    content: `
      <img src='img/points-03.png' class='points' alt='diagram us bank liens'>
      Complicando aún más este tema, más de 1500 propiedades baldías están
      comprometidas con deudas obligadas al U.S. Bank. A finales de la década
      de 1990, la Ciudad de Filadelfia enfrentó una crisis en el financiamiento
      de sus escuelas, así que, en una movida desesperada para obtener liquidez,
      combinó y titulizó miles de gravámenes fiscales y los
      <a href='https://www.inquirer.com/news/philadelphia-community-garden-tax-l
      ien-us-bank-gentrification-20211006.html'>vendió al U.S. Bank</a>. Al ser
      una institución financiera privada, el U.S. Bank puede iniciar una
      ejecución hipotecaria sin notificar o consultar a los miembros de una
      comunidad local.
      `,
    phase: 'usbank',
    // showpopups: true,
    bounds: [[39.9, -75.35], [40.16, -74.87]],
    philly: false,
    emphasis: true,
  },
  {
    title: "Ventas del Alguacil",
    content: `
      <img src='img/points-04.png' class='points' alt='diagram of sheriff sales
      '>Al menos <b>8750</b> lotes baldíos a lo largo de la Ciudad de Filadelfia
      han sido vendidos o están agendados para ser vendidos en una venta de
      alguacil. Este número se ha disparado en los últimos años.
      <br></br>
      Las ventas de alguacil han crecido exponencialmente durante la década
      luego de la Crisis de hipotecas ‘subprime’ de 2008, aumentando con la ola
      del mercado de bienes raíces en general. A pesar de la reciente caída en
      ventas de alguacil durante la pandemia del coronavirus, esta tendencia
      será pasajera, ya que las ventas han sido puestas en línea, expandiendo
      enormemente la cantidad de posibles compradores.
      <br></br>
      <img src='img/sheriff-chart.png' alt='diagram of sheriff sales'>

      `,
    phase: 'sheriff',
    // showpopups: true,
    bounds: [[39.9, -75.35], [40.16, -74.87]],
    philly: false,
    emphasis: true,
  }
];

const slides03 = [
  {
    title: "",
    content: `
      Placeholder.
      `,
    phase: 'permits',
    year: 2007,
    bounds: [[39.9, -75.35], [40.16, -74.87]],
    philly: false,
    emphasis: false,
  },
  {
    title: "Permisos de Zonificación en 2007",
    content: `
      En 2007 la Ciudad de Filadelfia otorgó <b>2586</b> permisos de
      zonificación relacionados a nuevas construcciones o demoliciones. Durante
      los años siguientes, este número cayó, probablemente por la crisis
      hipotecaria de 2008, antes de reestablecerse a los niveles de antes cerca
      de 2012.
      `,
    phase: 'permits',
    year: 2007,
    bounds: [[39.9, -75.35], [40.16, -74.87]],
    philly: false,
    emphasis: false,
  },
  {
    title: "...en 2012",
    content: `
      En 2012, el total de permisos de zonificación volvió a los niveles previos
      a la crisis, llegando a <b>2521</b>. En ese momento, el desarrollo se
      concentraba alrededor de tres focos en las afueras del centro de la
      ciudad: el área de Graduate Hospital-Point Breeze al sureste, los barrios
      de Northern Liberties-Fishtown al noreste, y el área al oeste de Broad
      Street, entre Fairmount y Cecil B. Moore Avenue.
      `,
    phase: 'permits',
    year: 2012,
    bounds: [[39.9, -75.35], [40.16, -74.87]],
    philly: false,
    emphasis: false,
  },
  {
    title: "...y en 2017",
    content: `
      Corte a 2017, el número de permisos de zonificación llegó a <b>3234</b> y
      se expandió hacia afuera, de los focos antes mencionados hacia los barrios
      de Kensington, Point Breeze y Fairmount.
      <br></br>
      Desde 2017, la actividad de desarrollo inmobiliario ha seguido creciendo
      y expandiéndose hacia afuera en los barrios de Filadelfia, incluyendo
      aquellos donde hay un gran suministro de lotes baldíos.
      `,
    phase: 'permits',
    year: 2017,
    bounds: [[39.9, -75.35], [40.16, -74.87]],
    philly: false,
    emphasis: false,
  }
];

const slides04 = [
  {
    title: "",
    content: `
      `,
    phase: 'minority',
    // showpopups: true,
    bounds: [[39.9, -75.35], [40.16, -74.87]],
    philly: true,
    emphasis: false,
  },
  {
    title: "Los Barrios Mayoritariamente de Minorías",
    content: `
      Debido a que las propiedades baldías se tienden a encontrar concentradas
      en barrios específicos, el impacto de las ejecuciones hipotecarias es
      desigual a través de diferentes categorías demográficas. Ciertas áreas
      cuya población es <b>mayoritariamente no blanca</b> tienen una mucho mayor
      proporción de propiedades morosas o baldías que aquellas en las que sí lo
      es.
      <img src='img/disparity-02.png' alt='Racial disparity chart'>
    `,
    phase: 'minority',
    // showpopups: true,
    bounds: [[39.9, -75.35], [40.16, -74.87]],
    philly: true,
    emphasis: true,
  },
  {
    title: "...y los Barrios con Ingreso por Debajo de la Media.",
    content: `
      De manera similar, las áreas que tienen una población <b>debajo de la
      línea de ingreso medio</b> contienen más propiedades morosas o baldías
      que aquellas con un ingreso por encima de la media. Estos patrones
      demográficos muestran que cuando la Ciudad de Filadelfia o el U.S. Bank
      deciden ejecutar la hipoteca de una propiedad baldía, el impacto no es el
      mismo para todos los grupos demográficos.
      <img src='img/disparity-01.png' alt='Racial disparity chart'>
    `,
    phase: 'income',
    // showpopups: true,
    bounds: [[39.9, -75.35], [40.16, -74.87]],
    philly: true,
    emphasis: true,
  },
  {
    title: "Kensington: La Frontera del Desarrollo Inmobiliario",
    content: `
      El barrio de Filadelfia que es quizás más representativo de la creciente
      demanda por lotes baldíos es Kensington. Aquí el nuevo desarrollo ha
      comenzado a desbordarse desde los barrios con intensa actividad en el
      mercado inmobiliario, como Fishtown y Northern Liberties en sus costados
      este y sur respectivamente.
    `,
    phase: 'kensington',
    // showpopups: true,
    bounds: [[39.96869, -75.14654], [39.98648, -75.13045]],
    philly: false,
    emphasis: false,
  },
  {
    title: "Lotes Baldíos en Kensington",
    content: `
      La evidencia de esta ola de desarrollo puede observarse en cómo en el
      sureste de Kensington, adyacente a Fishtown y Northern Liberties, hay
      muchos menos lotes baldíos disponibles, mientras que un gran número de
      lotes baldíos siguen sin construirse en el cuadrante noroeste de este
      barrio. A como el nuevo desarrollo continúe su avance gradual hacia el
      norte, el número de lotes restantes podría disminuir con el tiempo.
    `,
    phase: 'vacantLand',
    // showpopups: true,
    bounds: [[39.96869, -75.14654], [39.98648, -75.13045]],
    philly: false,
    emphasis: false,
  },
  {
    title: "Los Jardínes Comunitarios de Kensington",
    content: `
      Mientras que los terrenos baldíos en Kensington se han vuelto más
      atractivos para nuevo desarrollo inmobiliario, los lotes que son
      utilizados por los vecinos de esta comunidad han empezado a soportar
      presión externa.
      <br></br>
      Los jardines comunitarios en Kensington son un ejemplo cautivador de esto.
      <br></br>
      La Finquita, el jardín comunitario donde nuestra historia comenzó, era
      uno de estos lotes baldíos de Kensington hasta que finalmente fue
      vendido en 2019. La misma suerte le espera a muchos otros recursos
      comunales en Kensington—y más allá— si no se toman acciones para
      protegerlos.
    `,
    phase: 'garden',
    showpopups: true,
    bounds: [[39.96869, -75.14654], [39.98648, -75.13045]],
    philly: false,
    emphasis: false,
  },
  {
    title: "Jardín Comunitario César Iglesias",
    content: `
      Un recurso comunal en Kensington cuyo futuro sigue siendo incierto es el
      César Andreu Iglesias Community Garden. Ubicado en el noroeste de
      Kensington, donde la actividad inmobiliaria apenas empieza a acelerarse,
      el Jardín Comunitario Iglesias ha sido el sitio de una larga campaña de
      sus vecinos por preservar su uso comunal. Este esfuerzo continúa en curso
      desde que el sitio fue parcialmente comprado por un desarrollador privado
      y ahora está en riesgo de ser clausurado.
      <br></br>
      <img src='img/slide10_cesar.png' alt='Community Garden'>
    `,
    phase: 'gardenZoom',
    showpopups: true,
    philly: false,
    emphasis: false,
  }
];
