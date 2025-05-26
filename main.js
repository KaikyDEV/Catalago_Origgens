const products = [
    // Chás Medicinais
    { name: "Chá de Hibisco", description: "O hibisco é uma planta medicinal que pode ser utilizada para auxiliar nas dietas de emagrecimento.", price: "9,40", category: "chás", benefits: "emagrecimento dieta" },
    { name: "Cavalinha", description: "A cavalinha pode ser usada para auxiliar o tratamento de pedra nos rins e infecções urinárias.", price: "11,20", category: "chás", benefits: "rins infecção urinária" },
    { name: "Canela de Velho", description: "Serve para reduzir a dor e a inflamação das articulações e estimulando a regeneração das cartilagens.", price: "9,75", category: "chás", benefits: "articulação dor inflamação cartilagem" },
    { name: "Chá Verde", description: "Colesterol, previne câncer, retarda o envelhecimento celular, acelera o metabolismo, digestão, doenças cardíacas.", price: "7,75", category: "chás", benefits: "colesterol câncer envelhecimento metabolismo digestão coração" },
    { name: "Carqueja", description: "A Carqueja é uma planta medicinal que serve para ajudar no tratamento de má digestão, prisão de ventre.", price: "9,00", category: "chás", benefits: "digestão prisão ventre" },
    { name: "Oliveira", description: "As folhas de oliveira, ajudam a baixar o açúcar no sangue, fazendo com que haja menos insulina na circulação.", price: "11,05", category: "chás", benefits: "açúcar sangue insulina diabetes" },
    { name: "Amora", description: "Colesterol, dores de cabeça frequentes, insônia, alterações de líbido, depressão, rins, fígado, cólica, menopausa.", price: "5,50", category: "chás", benefits: "colesterol dor cabeça insônia libido depressão rins fígado menopausa" },
    { name: "Hortelã", description: "Digestão, alivia dores musculares, diarreias, cólicas e dores de estômago, dor de garganta, melhora o hálito.", price: "8,30", category: "chás", benefits: "digestão dor muscular diarreia cólica estômago garganta hálito" },
    { name: "Centella Asiática", description: "Planta medicinal com propriedades cicatrizantes e anti-inflamatórias.", price: "10,60", category: "chás", benefits: "cicatrização inflamação" },
    { name: "Camomila", description: "Apresenta propriedades relaxantes e ligeiramente sedativas que ajudam a tratar a insônia, a relaxar e a tratar a ansiedade.", price: "12,60", category: "chás", benefits: "relaxante sedativo insônia ansiedade nervosismo" },
    { name: "Melissa", description: "Muitos estudos apontam que tomar chá da planta melissa alivia o estresse e ajuda a melhorar o humor.", price: "8,80", category: "chás", benefits: "estresse humor calmante" },
    { name: "Erva Doce", description: "Esta planta tem capacidade de reduzir os efeitos da fermentação dos alimentos no intestino.", price: "9,50", category: "chás", benefits: "intestino fermentação digestão" },
    { name: "Alecrim", description: "O chá de alecrim é conhecido pelo seu sabor, aroma e pelos seus benefícios para a saúde como melhora da digestão.", price: "11,00", category: "chás", benefits: "digestão aroma sabor" },
    { name: "Maracujá", description: "Pode ser usado para o tratamento da insônia, dores menstruais, dores de cabeça causadas por tensão.", price: "8,65", category: "chás", benefits: "insônia dor menstrual tensão cabeça hiperatividade" },
    { name: "Quebra Pedra", description: "Ajuda a diminuir a retenção de líquido, prevenir pedras na vesícula, alivia os sintomas de azia.", price: "21,60", category: "chás", benefits: "retenção líquido pedra vesícula azia rins", warning: "Usar conforme orientação" },
    { name: "Moringa", description: "A moringa possui propriedades antioxidantes que regulam o estresse oxidativo no organismo.", price: "27,00", category: "chás", benefits: "antioxidante estresse oxidativo" },
    { name: "Salsa", description: "É muito conhecido por sua ação diurética, capaz de aumentar a atividade renal.", price: "10,45", category: "chás", benefits: "diurético renal rins" },
    { name: "Guaco", description: "É uma planta medicinal normalmente utilizada em forma de chá para tratar problemas respiratórios.", price: "8,40", category: "chás", benefits: "respiratório bronco dilatador expectorante" },

    // Farinhas e Grãos
    { name: "Semente de Chia", description: "Cardiovascular, inflamações, dores, glicemia, imunidade, emagrecimento, colesterol, diabetes.", price: "5,20", category: "farinhas", benefits: "coração inflamação dor glicemia imunidade emagrecimento colesterol diabetes" },
    { name: "Farinha de Batata Doce", description: "Diabetes, anemia, anti-inflamatória, colesterol, perda de peso, energética, imunidade.", price: "5,00", category: "farinhas", benefits: "diabetes anemia inflamação colesterol peso energia imunidade" },
    { name: "Farinha de Linhaça Dourada", description: "Problemas cardiovasculares, colesterol, regulador intestinal, diabetes, câncer de mama, menopausa, TPM.", price: "2,50", category: "farinhas", benefits: "coração colesterol intestino diabetes câncer mama menopausa TPM" },
    { name: "Farinha de Linhaça Marrom", description: "Coração, intestino, câncer, emagrecimento, colesterol, diabetes, ossos (mais ômega 3 e 6).", price: "2,00", category: "farinhas", benefits: "coração intestino câncer emagrecimento colesterol diabetes ossos ômega" },
    { name: "Farinha de Aveia", description: "Intestino, diminui a barriga, colesterol, doenças cardiovasculares, diabetes, imunidade, depressão.", price: "2,50", category: "farinhas", benefits: "intestino barriga colesterol coração diabetes imunidade depressão" },
    { name: "Aveia em Flocos", description: "Rico em fibras, proteínas e vitaminas essenciais para uma alimentação saudável.", price: "1,90", category: "farinhas", benefits: "fibras proteínas vitaminas saudável" },
    { name: "Farelo de Aveia", description: "Alto teor de fibras solúveis, ideal para redução do colesterol e controle glicêmico.", price: "1,80", category: "farinhas", benefits: "fibras solúveis colesterol glicemia" },
    { name: "Farinha de Quinoa", description: "Baixo índice glicêmico, emagrecimento, metabolismo, saciedade, colesterol, sem glúten, cérebro.", price: "5,50", category: "farinhas", benefits: "glicêmico emagrecimento metabolismo saciedade colesterol glúten cérebro" },
    { name: "Quinoa em Flocos", description: "Versão em flocos da quinoa, mantendo todos os benefícios nutricionais.", price: "5,25", category: "farinhas", benefits: "quinoa flocos nutrição" },
    { name: "Quinoa Grão", description: "Imunidade, doenças cardíacas, alívio da hipertensão, proteção do Alzheimer e osteoporose.", price: "4,25", category: "farinhas", benefits: "imunidade coração hipertensão alzheimer osteoporose" },
    { name: "Farinha de Amêndoas", description: "Colesterol, câncer, elimina impurezas, desenvolvimento do bebê, emagrecimento, ossos, diabetes.", price: "10,00", category: "farinhas", benefits: "colesterol câncer impurezas bebê emagrecimento ossos diabetes" },

    // Temperos
    { name: "Açafrão", description: "Rico em antioxidantes, anti-inflamatório natural, fortalece o sistema imunológico.", price: "4,56", category: "temperos", benefits: "antioxidante inflamação imunidade" },
    { name: "Alho Frito Granulado", description: "Sabor intenso de alho, prático para temperar diversos pratos.", price: "8,75", category: "temperos", benefits: "sabor tempero prático" },
    { name: "Cebola Frita", description: "Cebola desidratada e frita, ideal para finalizar pratos e dar crocância.", price: "6,85", category: "temperos", benefits: "sabor crocância finalização" },
    { name: "Chimichurri com Pimenta", description: "Mistura de ervas aromáticas com pimenta, perfeito para carnes.", price: "7,60", category: "temperos", benefits: "ervas aromático carnes pimenta" },
    { name: "Cominho em Pó", description: "Tempero aromático, digestivo e rico em ferro.", price: "6,20", category: "temperos", benefits: "aromático digestivo ferro" },
    { name: "Canela em Pó", description: "Controla açúcar no sangue, anti-inflamatória, antioxidante.", price: "6,90", category: "temperos", benefits: "açúcar sangue inflamação antioxidante" },
    { name: "Páprica Defumada", description: "Rica em antioxidantes carotenoides, vitaminas A, B6 e C.", price: "5,90", category: "temperos", benefits: "antioxidante carotenoides vitaminas" },
    { name: "Tempero Origgens para Frango", description: "Mistura especial de temperos para realçar o sabor do frango.", price: "6,50", category: "temperos", benefits: "frango sabor especial" },
    { name: "Sal do Himalaia Grosso", description: "Sal rosa puro, rico em minerais essenciais.", price: "2,25", category: "temperos", benefits: "sal rosa minerais essenciais" },
    { name: "Orégano", description: "Antioxidante, antimicrobiano, digestivo.", price: "9,20", category: "temperos", benefits: "antioxidante antimicrobiano digestivo" },

    // Suplementos
    { name: "Whey Protein", description: "Proteína do soro do leite com todos os aminoácidos essenciais para regeneração muscular.", price: "Consulte", category: "suplementos", benefits: "proteína aminoácidos muscular regeneração" },
    { name: "Albumina", description: "Proteína mais abundante no corpo, fortalece sistema imunológico e acelera recuperação muscular.", price: "18,00", category: "suplementos", benefits: "proteína imunológico muscular recuperação" },
    { name: "Colágeno Hidrolisado", description: "Promove elasticidade e firmeza da pele e fortalece as articulações.", price: "12,00", category: "suplementos", benefits: "elasticidade firmeza pele articulações" },
    { name: "Spirulina", description: "Alga rica em minerais, vitaminas e proteínas, excelente suplemento alimentar.", price: "26,62", category: "suplementos", benefits: "minerais vitaminas proteínas suplemento" },
    { name: "Creatina", description: "Auxilia na hipertrofia muscular, fornece energia, melhora a força máxima.", price: "30,00", category: "suplementos", benefits: "hipertrofia muscular energia força" },
    { name: "Glutamina", description: "Crescimento dos músculos, favorece sistema imunológico, antioxidante.", price: "19,80", category: "suplementos", benefits: "músculos imunológico antioxidante" },
    { name: "Maca Peruana", description: "Emagrecimento, diabetes, doenças cardiovasculares, energético, afrodisíaco, imunidade.", price: "17,00", category: "suplementos", benefits: "emagrecimento diabetes coração energético afrodisíaco imunidade" },
    { name: "Açaí em Pó", description: "Imunidade, colesterol, infarto, doenças cardiovasculares, memória, energético natural.", price: "12,00", category: "suplementos", benefits: "imunidade colesterol infarto coração memória energético" },
    { name: "Guaraná em Pó", description: "Energético, câimbras, enxaquecas, problemas gastrointestinais, concentração, colesterol.", price: "12,00", category: "suplementos", benefits: "energético câimbra enxaqueca gastrointestinal concentração colesterol" },

    // Óleos Essenciais
    { name: "Lavanda", description: "Óleo essencial relaxante e calmante, ideal para aromaterapia.", price: "63,00", category: "óleos", benefits: "relaxante calmante aromaterapia" },
    { name: "Melaleuca", description: "Óleo essencial com propriedades antissépticas e antimicrobianas.", price: "55,00", category: "óleos", benefits: "antisséptico antimicrobiano" },
    { name: "Eucalipto", description: "Óleo essencial para problemas respiratórios, descongestionante.", price: "Consulte", category: "óleos", benefits: "respiratório descongestionante" },
    { name: "Rosa Mosqueta", description: "Óleo regenerador, anti-idade, cicatrizante.", price: "Consulte", category: "óleos", benefits: "regenerador idade cicatrização" }
];

let filteredProducts = [...products];
let currentCategory = 'todos';

function renderProducts(productsToRender = filteredProducts) {
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');

    if (productsToRender.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        grid.style.display = 'grid';
        noResults.style.display = 'none';

        grid.innerHTML = productsToRender.map(product => `
            <div class="product-card fade-in">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-price">R$ ${product.price} / 100g</div>
                ${product.warning ? `<div class="warning">⚠️ ${product.warning}</div>` : ''}
            </div>
        `).join('');
    }

    updateStats(productsToRender.length);
}

function updateStats(visibleCount) {
    document.getElementById('totalProducts').textContent = products.length;
    document.getElementById('visibleProducts').textContent = visibleCount;
}

function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    filteredProducts = products.filter(product => {
        const matchesCategory = currentCategory === 'todos' || product.category === currentCategory;
        const matchesSearch = !searchTerm ||
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.benefits.toLowerCase().includes(searchTerm);

        return matchesCategory && matchesSearch;
    });

    renderProducts(filteredProducts);
}

// Event Listeners
document.getElementById('searchInput').addEventListener('input', filterProducts);

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentCategory = e.target.dataset.category;
        filterProducts();
    });
});

// Inicialização
renderProducts();
updateStats(products.length);