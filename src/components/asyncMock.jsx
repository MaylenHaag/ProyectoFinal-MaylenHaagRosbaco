const products = [
    {
        id: '1',
        name: 'Shampoo Elvive Hidra Hialurónico x 400 ml',
        price: 1000,
        category: 'cuidadoPersonal',
        img: 'https://farmacityar.vteximg.com.br/arquivos/ids/228352-1000-1000/221679_shampoo-elvive-hidra-hialuronico-x-400-ml_imagen-1.jpg?v=637986815594830000',
        stock: 5,
        descripcion: 'El shampoo Hidra rellenador, con Ácido Hialurónico y efecto Anti-Sal°, recarga la fibra con una hidratación intensa para una transformación instantánea y un cabello suave, ligero y brillante. Elvive Hidra Hialurónico para cabello deshidratado.'
    },
    {
        id: '2',
        name: 'Shampoo Elvive Reparación Total Extreme x 400 ml',
        price: 1000,
        category: 'cuidadoPersonal',
        img: 'https://farmacityar.vteximg.com.br/arquivos/ids/228448-600-600/143506_shampoo-reparacion-total-extreme-x-400-ml_imagen-1.jpg?v=637987726277500000',
        stock: 6,
        descripcion: '¿Cabello muy dañado? Nuestro Shampoo Reconstructor, con un concentrado reparador con KERATINxs, LAK 1000 y con efecto Anti-Sal°, transforma el cabello muy dañado. Elvive Reparación Total Extreme para cabello muy dañado.'
    },
    {
        id: '3',
        name: 'Shampoo Dove Regeneración Extrema x 200 ml',
        price: 700,
        category: 'cuidadoPersonal',
        img: 'https://farmacityar.vteximg.com.br/arquivos/ids/239142-600-600/215075_shampoo-dove-regeneracion-extrema-x-200-ml___imagen-1.jpg?v=638149981472000000',
        stock: 4,
        descripcion: 'Descubre el shampoo Dove Regeneración Extrema un concentrado poderoso de ingredientes activos regeneradores que nutren profundamente la fibra capilar activando el proceso de regeneración interna del cabello.'
    },
    {
        id: '4',
        name: 'Eucerin Urearepair plus 10% espuma para pies 150 ml',
        price: 10000,
        category: 'dermo',
        img: 'https://farmaonline.vtexassets.com/arquivos/ids/358123-1200-1200?v=637898730954530000&width=1200&height=1200&aspect=true',
        stock: 3,
        descripcion: 'Enriquecida con Urea, Ceramida y otros factores naturales de hidratación (NMF), se ha demostrado clínicamente que esta fórmula aporta una hidratación inmediata e intensiva, con resultados duraderos incluso durante 48 horas. Previene una mayor pérdida de hidratación, fortalece la barrera lipídica natural de la piel, suaviza la piel extremadamente seca y cura las grietas de los talones.'
    },
    {
        id: '5',
        name: 'Avene Intense protect spf 50+ 150 ml',
        price: 9300,
        category: 'dermo',
        img: 'https://farmaonline.vtexassets.com/arquivos/ids/417930-1200-1200?v=638089717176300000&width=1200&height=1200&aspect=true',
        stock: 12,
        descripcion: 'Protector solar spf 50 de ultra-amplio espectro que cumple con los requisitos más exigentes , incluso para las pieles más vulnerables y en condiciones de luz solar más intensas, a la vez que minimiza nuestro impacto en el medioambiente.'
    },
    {
        id: '6',
        name: 'La Roche Posay Lipikar surgras pan dermatológico 150gr',
        price: 6500,
        category: 'dermo',
        img: 'https://farmaonline.vtexassets.com/arquivos/ids/386976-1200-1200?v=637998013346630000&width=1200&height=1200&aspect=true',
        stock: 4,
        descripcion: 'Lipikar Surgras de La Roche-Posay es una barra de limpieza enriquecida con lípidos que mantiene la barrera de la piel. Limpia y protege la piel sensible y seca de toda la familia: bebés, niños, adultos.  Su fórmula contiene Niacinamida y manteca de Karité para ayudar a restaurar la barrea cutánea. Deja la piel limpia, humectada y no irrita. Consejo de uso: Aplicar diariamente en la ducha o baño sobre la piel húmeda. Masajear suavemente y enjuagar. Evitar el contorno de los ojos.'
    },
    {
        id: '7',
        name: 'Bebefantitos Set gift box hola bebé',
        price: 4900,
        category: 'bebes',
        img: 'https://farmaonline.vtexassets.com/arquivos/ids/383371-1600-1600?v=637992301492900000&width=1600&height=1600&aspect=true',
        stock: 2,
        descripcion: 'Contiene:   -Mamadera decorada -Chupete anatomico -Prendedor -Mordillo -Babero'
    },
    {
        id: '8',
        name: 'Nuk Mamadera nature sense celeste 150ml',
        price: 5000,
        category: 'bebes',
        img: 'https://farmaonline.vtexassets.com/arquivos/ids/383692-1200-1200?v=637992731135100000&width=1200&height=1200&aspect=true',
        stock: 7,
        descripcion: '- Varios orificios pequeños toman como ejemplo los conductos mamarios y aseguran un flujo suave y natural. Apoyo labial ancho y flexible con punta de tetina extra-suave similar al pezón materno. Innovadora Válvula Anti-Cólicos que ayuda a prevenir la ingesta de aire. Botella de polipropileno (PP) de alta calidad, resistente y libre de BPA. Con tetina de 0-6 meses, flujo M (6 pequeños orificios para fórmula). Capacidad 150 ml'
    },
    {
        id: '9',
        name: 'Chicco Chupete physio light boy 6 a 16 meses 2 unidades',
        price: 3800,
        category: 'bebes',
        img: 'https://farmaonline.vtexassets.com/arquivos/ids/382941-1200-1200?v=637992278085170000&width=1200&height=1200&aspect=true',
        stock: 9,
        descripcion: 'Physio Light es el chupete extra ligero de Chicco con grandes orificios de aireación para evitar la acumulación de saliva del bebé.  Así su delicada piel no se irrita, y el chupete es tan ligero que no sentirá ninguna incomodidad. Con tetina higiénica de silicona no se deforma y su acabado les resulta muy suave y agradable. Todos los chupetes Chicco son  PhysioForma: desarrollados para ayudar a colocar la lengua hacia adelante y favorecer así la respiración fisiológica del bebé.'
    },
    {
        id: '10',
        name: 'Fuyi Espirales country',
        price: 300,
        category: 'hogar',
        img: 'https://farmaonline.vtexassets.com/arquivos/ids/387007-1200-1200?v=637998014796600000&width=1200&height=1200&aspect=true',
        stock: 16,
        descripcion: 'Fuyi espirales ofrece protección efectiva contra mosquitos durante 8 horas.'
    },
    {
        id: '11',
        name: 'Raid Insecticida en aerosol mata moscas y mosquitos 370 ml',
        price: 900,
        category: 'hogar',
        img: 'https://farmaonline.vtexassets.com/arquivos/ids/337711-1600-1600?v=637834956068200000&width=1600&height=1600&aspect=true',
        stock: 17,
        descripcion: 'Aerosol mata moscas y mosquitos 370 ml'
    },
    {
        id: '12',
        name: 'Duracell Pilas alcalinas aa de larga duración (Pack de 4)',
        price: 2000,
        category: 'hogar',
        img: 'https://farmaonline.vtexassets.com/arquivos/ids/1077674-1200-1200?v=638192448709930000&width=1200&height=1200&aspect=true',
        stock: 7,
        descripcion: 'Duracell es sinónimo de alto desempeño y de máximo rendimiento, ya que los productos de la marca proporcionan alimentación fiable y duradera a todos los dispositivos que requieran un toque de potencia adicional. Las pilas alcalinas multiuso AA duran hasta 10 veces más en comparación con las pilas comunes de zinc-carbón (los resultados pueden variar por dispositivo), lo cual las convierte en la opción ideal para obtener energía confiable y de larga duración. '
    },
    {
        id: '13',
        name: 'Jean Paul Gaultier Fragancia la belle le parfum intense edp for woman 30 ml',
        price: 38800,
        category: 'belleza',
        img: 'https://farmaonline.vtexassets.com/arquivos/ids/333167-1600-1600?v=637805480661300000&width=1600&height=1600&aspect=true',
        stock: 1,
        descripcion: 'La belle Le Parfum, la nueva intensidad de la mujer original de Jean Paul Gaultier. '
    },
    {
        id: '14',
        name: 'Calvin Klein Fragancia be edt unisex 100 ml',
        price: 39500,
        category: 'belleza',
        img: 'https://farmaonline.vtexassets.com/arquivos/ids/1069864-1200-1200?v=638161472050030000&width=1200&height=1200&aspect=true',
        stock: 1,
        descripcion: 'Se puede percibir un toque especiado de enebro, notas tónicas de menta y de mandarina. Un toque de lavanda le imprime un carácter mixto y sostiene las flores de magnolia. El fondo es de almizcle y madera, con una suave y afrutada calidez de piel que caracteriza a la fragancia.'
    },
    {
        id: '15',
        name: 'Cheeky Cool boys edt 100 ml',
        price: 5900,
        category: 'belleza',
        img: 'https://farmaonline.vtexassets.com/arquivos/ids/392703-1200-1200?v=637998221506400000&width=1200&height=1200&aspect=true',
        stock: 2,
        descripcion: 'Es una fragancia súper canchera de estilo fougere aromático, donde gotas de lavanda, limón, almizcle y ámbar se funden y acompañan a los chicos en sus aventuras y juegos durante todo el día. El diseño los invita a soñar e imaginar nuevos universos y planetas que los prepara para las más divertidas aventuras.'
    },
    {
        id: '16',
        name: 'Cif Detergente active gel limon 300 ml',
        price: 300,
        category: 'limpieza',
        img: 'https://farmaonline.vtexassets.com/arquivos/ids/1071731-1600-1600?v=638169074779800000&width=1600&height=1600&aspect=true',
        stock: 6,
        descripcion: 'Cif Active Gel Detergente Lavavajilla Concentrado Limón (300 ml), con fórmula evolucionada, se mantiene por más tiempo en tu esponja versus lavavajillas regulares. Si disfrutaste de una comida un poco grasosa o aceitosa, el detergente de platos Cif Active Gel Limón Verde sin dudas te va a salvar. La grasa se adhiere a los platos y plásticos, y los aceites son inmunes al efecto del agua: lo que necesitas es un detergente líquido como alguno de la línea de Cif Active Gel, que terminan con la grasa de modo definitivo dejando los platos limpios y usando menos cantidad de producto. Cif Active Gel tiene una fórmula exclusiva, diferente a la de otros detergentes disponibles en el mercado.'
    },
    {
        id: '17',
        name: 'Glade Limpiador pisos mañana de campo 900 ml',
        price: 400,
        category: 'limpieza',
        img: 'https://farmaonline.vtexassets.com/arquivos/ids/261657-1600-1600?v=637689684730300000&width=1600&height=1600&aspect=true',
        stock: 3,
        descripcion: 'Con el inspirador aroma a frutas y flores Glade multisuperficies es ideal para pisos, azulejos, mesadas, lavamanos, y todas las superficies lavables de tu casa.'
    },
    {
        id: '18',
        name: 'Cif Detergente active gel citrica 300 ml',
        price: 300,
        category: 'limpieza',
        img: 'https://farmaonline.vtexassets.com/arquivos/ids/337014-1200-1200?v=637829644207100000&width=1200&height=1200&aspect=true',
        stock: 5,
        descripcion: 'Cif Detergente Active Gel Citrica (300 ml), con fórmula evolucionada, se mantiene por más tiempo en tu esponja versus lavavajillas regulares. Si disfrutaste de una comida un poco grasosa o aceitosa, el detergente de platos Cif Active Gel Citrica sin dudas te va a salvar. La grasa se adhiere a los platos y plásticos, y los aceites son inmunes al efecto del agua: lo que necesitas es un detergente líquido como alguno de la línea de Cif Active Gel, que terminan con la grasa de modo definitivo dejando los platos limpios y usando menos cantidad de producto.'
    },
    {
        id: '19',
        name: 'Ena Combo enargy gel vainilla + enargy gel uva con cafeína',
        price: 5000,
        category: 'nutricionYDeportes',
        img: 'https://farmaonline.vtexassets.com/arquivos/ids/1082062-1200-1200?v=638213286070300000&width=1200&height=1200&aspect=true',
        stock: 4,
        descripcion: 'Suplemento deportivo enargy gel +  cafeína sabor a vainilla (12 unidades):Enargy Gel es un repositor energético creado para el entrenamiento cotidiano y la competencia. Es rico en carbohidratos en un paquete portátil para mejorar resistencia y potencia. Es un suplemento dietario a base de carbohidratos, vitamina C, E y minerales, con cafeína, que aporta energía en movimiento, ideal para todo trabajo aeróbico.'
    },
    {
        id: '20',
        name: 'Ena Suplemento deportivo quemador ripped 60 cáspsulas',
        price: 3100,
        category: 'nutricionYDeportes',
        img: 'https://farmaonline.vtexassets.com/arquivos/ids/587280-1200-1200?v=638119081961470000&width=1200&height=1200&aspect=true',
        stock: 3,
        descripcion: 'NUEVA GENERACIÓN EN QUEMADORES DE GRASAS'
    },
    {
        id: '21',
        name: 'Lafarmen Amino 2000 por 120 comprimidos',
        price: 3000,
        category: 'nutricionYDeportes',
        img: 'https://farmaonline.vtexassets.com/arquivos/ids/385234-1600-1600?v=637995589396770000&width=1600&height=1600&aspect=true',
        stock: 2,
        descripcion: 'Esta fórmula contiene los 8 aminoácidos esenciales. De los 22 aminoácidos de la proteína, 14 pueden ser fabricados en el cuerpo, mientras que los 8 restantes deben ser procurados en el exterior. Es esencial que estos 8 aminoácidos sean suministrados al mismo tiempo y en cantidades suficientes para que los demás sean fabricados en el cuerpo.'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory= (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

