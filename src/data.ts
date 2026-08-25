import { Recipe, CostItem, Testimonial, FAQItem } from './types';

export const RECIPES: Recipe[] = [
  {
    id: 'ninho-morango',
    title: 'Ninho com Morango Gourmet',
    category: 'sucesso',
    description: 'O sabor mais vendido em todo o Brasil. O contraste do creme aveludado de leite em pó com o azedinho e frescor do morango natural é simplesmente imbatível.',
    prepTime: '45 min',
    yield: '10 potes de 250ml',
    image: '🍓',
    ingredients: [
      { id: '1', name: 'Leite Condensado', amount: 395, unit: 'g' },
      { id: '2', name: 'Creme de Leite 17%', amount: 200, unit: 'g' },
      { id: '3', name: 'Leite em Pó de boa qualidade', amount: 80, unit: 'g' },
      { id: '4', name: 'Manteiga sem Sal', amount: 15, unit: 'g' },
      { id: '5', name: 'Morangos Frescos e Firmes', amount: 250, unit: 'g' },
      { id: '6', name: 'Massa de Bolo Branca Pão de Ló', amount: 300, unit: 'g' },
      { id: '7', name: 'Calda de leite cond. e água para molhar', amount: 100, unit: 'ml' }
    ],
    instructions: [
      'Em uma panela de fundo grosso, misture o leite condensado, o creme de leite e o leite em pó até dissolver por completo.',
      'Adicione a manteiga e leve ao fogo médio, mexendo sempre com uma espátula de silicone para não queimar no fundo.',
      'Cozinhe até começar a ferver e engrossar levemente, atingindo o ponto de mingau cremoso (não deixe chegar a ponto de enrolar!).',
      'Desligue o fogo, despeje o creme em um recipiente, cubra com plástico filme em contato e deixe esfriar completamente à temperatura ambiente antes de usar.',
      'Lave bem os morangos, seque-os perfeitamente com papel toalha e corte em cubos médios (guarde alguns inteiros para decorar).',
      'Montagem: No fundo do pote de 250ml, coloque uma colher de creme de ninho. Adicione uma camada de bolo esfarelado ou cortado em disco e umedeça com a calda.',
      'Coloque morangos picados nas laterais com as fatias encostadas na parede do pote para dar um visual lindo. Preencha o meio com creme.',
      'Adicione mais uma camada fina de bolo umedecido e finalize com bastante creme de ninho por cima.',
      'Decore com um morango lindo partido ao meio por cima e salpique leite em pó para dar o acabamento profissional.'
    ],
    secrets: [
      'Passe um papel toalha nos morangos após picá-los para retirar o excesso de umidade. Isso evita que soltem água e estraguem o bolo rápido.',
      'Use sempre morangos bem vermelhos e novos. A validade deste pote com fruta in natura é de no máximo 2 dias na geladeira.',
      'Se quiser aumentar a validade para 5 dias, cozinhe os morangos picados com açúcar refinado para fazer uma geleia rápida antes de rechear.'
    ]
  },
  {
    id: 'prestigio',
    title: 'Prestígio Supremo com Ganache',
    category: 'premium',
    description: 'A união perfeita de uma massa fofinha de chocolate 50% cacau com um recheio de beijinho cremoso e cobertura sedosa de ganache de chocolate meio amargo.',
    prepTime: '50 min',
    yield: '12 potes de 250ml',
    image: '🥥',
    ingredients: [
      { id: 'p1', name: 'Leite Condensado', amount: 395, unit: 'g' },
      { id: 'p2', name: 'Creme de Leite 17%', amount: 200, unit: 'g' },
      { id: 'p3', name: 'Coco Ralado Desidratado Sem Açúcar', amount: 100, unit: 'g' },
      { id: 'p4', name: 'Manteiga sem Sal', amount: 10, unit: 'g' },
      { id: 'p5', name: 'Chocolate Meio Amargo (Ganache)', amount: 150, unit: 'g' },
      { id: 'p6', name: 'Creme de Leite para Ganache', amount: 100, unit: 'g' },
      { id: 'p7', name: 'Massa de Bolo de Chocolate Cacau 50%', amount: 350, unit: 'g' },
      { id: 'p8', name: 'Umedecedor (Leite de Coco + Leite)', amount: 120, unit: 'ml' }
    ],
    instructions: [
      'Em uma panela, junte o leite condensado, os 200g de creme de leite, o coco ralado e a manteiga.',
      'Misture bem e cozinhe em fogo médio-baixo, mexendo sempre, até criar uma consistência cremosa firme (soltando levemente do fundo mas ainda úmido). Deixe esfriar.',
      'Para a ganache de cobertura: Derreta o chocolate meio amargo de 30 em 30 segundos no microondas ou em banho-maria. Adicione os 100g de creme de leite morno e mexa até ficar bem brilhante e liso.',
      'Montagem: No fundo do pote alternado, comece com uma generosa colher de beijinho de coco.',
      'Adicione a massa de bolo de chocolate esfarelada e regue delicadamente com a misturinha de leite de coco e leite com bico dosador.',
      'Espalhe mais uma boa camada do beijinho cremoso.',
      'Finalize com o bolo de chocolate umedecido e, por cima de tudo, deite uma camada brilhante de ganache meio amargo.',
      'Decore salpicando coco ralado fino no centro ou adicionando um pedaço pequeno de chocolate tipo prestígio.'
    ],
    secrets: [
      'Utilize coco ralado de espessura média. Evite coco ralado adoçado muito fino, pois tira a textura rústica e deixa o bolo excessivamente doce.',
      'Umedecer o bolo com leite de coco traz um aroma espetacular que combina perfeitamente com a ganache de chocolate meio amargo.'
    ]
  },
  {
    id: 'brigadeiro-belga',
    title: 'Brigadeiro Belga Clássico',
    category: 'tradicional',
    description: 'O queridinho que nunca sobra nas prateleiras. Um recheio ultra aveludado de chocolate 50% com cobertura de granulados belgas macios de alta qualidade.',
    prepTime: '40 min',
    yield: '10 potes de 250ml',
    image: '🍫',
    ingredients: [
      { id: 'b1', name: 'Leite Condensado', amount: 395, unit: 'g' },
      { id: 'b2', name: 'Creme de Leite 17%', amount: 300, unit: 'g' },
      { id: 'b3', name: 'Chocolate em Pó 50% Cacau', amount: 50, unit: 'g' },
      { id: 'b4', name: 'Chocolate Meio Amargo em Barra', amount: 80, unit: 'g' },
      { id: 'b5', name: 'Manteiga', amount: 15, unit: 'g' },
      { id: 'b6', name: 'Massa de Chocolate Cacau 50%', amount: 300, unit: 'g' },
      { id: 'b7', name: 'Granulado Belga (Splits ou Callets)', amount: 100, unit: 'g' },
      { id: 'b8', name: 'Calda de Água com Açúcar e Cacau', amount: 100, unit: 'ml' }
    ],
    instructions: [
      'Misture o chocolate em pó peneirado com o leite condensado na panela fria para evitar grumos.',
      'Adicione o creme de leite, o chocolate picado em barra e a manteiga.',
      'Cozinhe em fogo médio mexendo sempre de forma constante nas bordas e no centro para obter consistência homogênea.',
      'Desligue assim que o brigadeiro cair em blocos grossos ao erguer a espátula (ponto de brigadeiro cremoso de colher). Esfrie.',
      'Montagem: Alterne com perfeição camadas de massa de chocolate bem molhada e brigadeiro cremoso belga.',
      'Termine com uma camada farta de brigadeiro para esconder todo o bolo por completo.',
      'Jogue generosamente os granulados belgas legítimos por cima para uma identidade visual de luxo.'
    ],
    secrets: [
      'Adicionar a barra picada junto ao chocolate em pó traz firmeza e brilho insuperáveis para o recheio sem ficar com textura pegajosa.',
      'O granulado de chocolate belga ou granulado gourmet macio é o principal argumento de venda dessa receita. Evite os granulados plásticos duros comuns.'
    ]
  },
  {
    id: 'limao-gourmet',
    title: 'Limão Siciliano Delicato',
    category: 'sucesso',
    description: 'Leveza pura. Um creme azedinho de limão siciliano perfeitamente equilibrado intercalado com uma massa amanteigada branca e raspas frescas.',
    prepTime: '35 min',
    yield: '10 potes de 250ml',
    image: '🍋',
    ingredients: [
      { id: 'l1', name: 'Leite Condensado', amount: 395, unit: 'g' },
      { id: 'l2', name: 'Creme de Leite Fracionado 20%', amount: 200, unit: 'g' },
      { id: 'l3', name: 'Suco Puro de Limão Siciliano', amount: 80, unit: 'ml' },
      { id: 'l4', name: 'Chantilly Batido Firme', amount: 150, unit: 'g' },
      { id: 'l5', name: 'Massa Amanteigada Branca com Baunilha', amount: 300, unit: 'g' },
      { id: 'l6', name: 'Raspas de Casca de Limão Siciliano', amount: 10, unit: 'g' },
      { id: 'l7', name: 'Calda de Leite Condensado com Limão', amount: 100, unit: 'ml' }
    ],
    instructions: [
      'Em um bowl grande, misture o leite condensado com o suco de limão siciliano puro utilizando um fouet vigorosamente até engrossar (a acidez do limão coalha e firma o leite condensado naturalmente de forma instantânea).',
      'Incorpore delicadamente o creme de leite e continue batendo.',
      'Adicione o chantilly batido previamente em ponto firme ao creme de limão, misturando de baixo para cima com movimentos leves para manter o creme aerado e macio como mousse.',
      'Leve à geladeira por 30 minutos antes de montar para pegar consistência perfeita.',
      'Montagem: Coloque mousse de limão nas bases, adicione pão de ló esfarelado bem úmido e pressione levemente.',
      'Alterne até o topo e decore com zests/raspas frescas de casca de limão siciliano e raspas de chocolate branco.'
    ],
    secrets: [
      'Nunca raspe a parte branca da casca do limão siciliano, use apenas a camada externa amarela para que seu recheio não fique amargo após algumas horas.',
      'O limão taiti comum também funciona maravilhosamente bem, porém o Siciliano traz um aroma mais nobre e sofisticado à receita.'
    ]
  },
  {
    id: 'red-velvet',
    title: 'Red Velvet Supreme Cream',
    category: 'premium',
    description: 'O visual mais atraente do mercado. Massa aveludada cor rubi contrastando com o sabor levemente ácido do recheio de cream cheese e notas de baunilha.',
    prepTime: '55 min',
    yield: '8 potes de 250ml',
    image: '🍰',
    ingredients: [
      { id: 'r1', name: 'Cream Cheese Nobre', amount: 200, unit: 'g' },
      { id: 'r2', name: 'Manteiga sem Sal Temperatura Ambiente', amount: 60, unit: 'g' },
      { id: 'r3', name: 'Açúcar de Confeiteiro Glaçúcar', amount: 120, unit: 'g' },
      { id: 'r4', name: 'Creme de Leite bem Frio batido em Chantilly', amount: 100, unit: 'g' },
      { id: 'r5', name: 'Massa Red Velvet esmigalhada', amount: 300, unit: 'g' },
      { id: 'r6', name: 'Frutas vermelhas secas ou frescas (opcional)', amount: 50, unit: 'g' },
      { id: 'r7', name: 'Essência/Extrato de Baunilha', amount: 5, unit: 'ml' }
    ],
    instructions: [
      'Bata a manteiga em ponto pomada com o açúcar de confeiteiro e a essência de baunilha na batedeira até obter um creme esbranquiçado, aerado e leve.',
      'Adicione o cream cheese em temperatura ambiente aos poucos e bata apenas para homogeneizar (não bata muito para não amolecer o cream cheese).',
      'Desligue a batedeira e misture o creme de leite bem gelado previamente batido em ponto médio de chantilly ao creme para atingir leveza.',
      'Esfarele a massa luxuosa vermelha do bolo Red Velvet deixando migalhas médias e soltas.',
      'Montagem: Alterne o farelo vermelho vivo vibrante com o creme branco de cream cheese bem modelado na lateral de vidro/pote.',
      'Finalize polvilhando o próprio farelo fino do bolo vermelho por cima como veludo natural para decorar de forma minimalista.'
    ],
    secrets: [
      'Este bolo é considerado um produto super premium e deve ser cobrado em valor superior na sua tabela de vendas.',
      'Umedeça moderadamente a massa: a massa red velvet já costuma ser rica em gordura e naturalmente muito macia, absorvendo menos calda que o pão de ló.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Mariana Costa',
    role: 'Ex-Desempregada / Empreendedora',
    location: 'Campinas - SP',
    achievement: 'Fatura R$ 3.800/mês na cozinha de casa',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120',
    comment: 'Eu tinha pavor de ficar sem dinheiro para as contas no fim do mês. Comprei o e-book do Braian sem muita pretensão, fiz meu primeiro bolo de Ninho de Morango em casa e vendi 15 potes nas primeiras duas horas pro condomínio! Hoje vivo exclusivamente disso.'
  },
  {
    id: 't2',
    name: 'Carlos Mendes',
    role: 'Ex-Frentista / Chefe de Família',
    location: 'Belo Horizonte - MG',
    achievement: 'Abriu uma distribuidora com 3 funcionários',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120',
    comment: 'A calculadora inclusa no e-book abriu meus olhos. Eu vendia bolo sem saber que estava tendo prejuízo nas embalagens. Consegui padronizar minhas receitas, reduzi custos e hoje forneço mais de 200 potes por dia para 15 lanchonetes da cidade!'
  },
  {
    id: 't3',
    name: 'Juliana Guedes',
    role: 'Mãe e Dona de Casa',
    location: 'Curitiba - PR',
    achievement: 'Conseguiu reforma completa da sua cozinha',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120',
    comment: 'As etiquetas do e-book dão uma cara tão profissional que os clientes achavam que eu tinha uma loja no Shopping! Ter as receitas explicadas detalhadamente passo-a-passo me salvou de errar pontos de brigadeiros. Recomendo de olhos fechados.'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Como vou receber o conteúdo do E-book?',
    answer: 'Você recebe acesso imediato por e-mail após a confirmação do pagamento. O e-book está disponível em formato PDF de alta resolução, facilitando a leitura no celular, tablet, computador ou até mesmo para impressão física se desejar.'
  },
  {
    id: 'faq2',
    question: 'Não sei nada de confeitaria. Esse guia serve para mim?',
    answer: 'Sim, com certeza! O material foi desenvolvido com linguagem extremamente simples e didática. Mostramos desde as marcas corretas de ingredientes, utensílios de baixo custo, modo de preparo das massas básicas e recheios corretos até a montagem impecável no pote.'
  },
  {
    id: 'faq3',
    question: 'Como funciona a Calculadora de Custos automática?',
    answer: 'É uma ferramenta exclusiva criada para planilhar todos os seus gastos. Você insere o valor que pagou em cada insumo (leite condensado, creme de leite, coco, potes, etc.), diz quanto usou na receita e ela calcula instantaneamente o gasto por pote, margem de lucro sugerida e preço de venda rentável!'
  },
  {
    id: 'faq4',
    question: 'Qual a validade média de um bolo no pote?',
    answer: 'Bolos com recheios cozidos e sem frutas frescas duram de 5 a 7 dias na geladeira bem fechados. Bolos que levam frutas frescas in natura (como morangos e kiwis picados) devem ser consumidos em até 2 ou 3 dias para garantir o frescor absoluto e evitar azedar.'
  },
  {
    id: 'faq5',
    question: 'Quais os métodos de pagamento aceitos?',
    answer: 'Aceitamos PIX com liberação imediata em menos de 1 minuto, boleto bancário (compensação em até 48 horas úteis) e cartões de crédito parcelado com recebimento imediato do seu material.'
  }
];

export const DEFAULT_COSTS: CostItem[] = [
  { id: '1', name: 'Leite Condensado (Caixa/Lata)', cost: 6.20, purchasedAmount: 395, unit: 'g', amountNeeded: 395 },
  { id: '2', name: 'Creme de Leite (Caixinha)', cost: 3.50, purchasedAmount: 200, unit: 'g', amountNeeded: 300 },
  { id: '3', name: 'Leite em Pó Gourmet', cost: 16.90, purchasedAmount: 400, unit: 'g', amountNeeded: 80 },
  { id: '4', name: 'Massa de Pão de Ló Branca', cost: 7.50, purchasedAmount: 600, unit: 'g', amountNeeded: 300 },
  { id: '5', name: 'Potes de Plástico 250ml + Tampas', cost: 8.50, purchasedAmount: 10, unit: 'un', amountNeeded: 10 },
  { id: '6', name: 'Morangos Frescos Selecionados', cost: 7.50, purchasedAmount: 250, unit: 'g', amountNeeded: 250 },
  { id: '7', name: 'Manteiga sem Sal Nobre', cost: 18.00, purchasedAmount: 500, unit: 'g', amountNeeded: 15 },
  { id: '8', name: 'Colheres descartáveis pequenas', cost: 2.00, purchasedAmount: 10, unit: 'un', amountNeeded: 10 }
];
