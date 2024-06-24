const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
enunciado: "quais são os principais impactos da inteligência artificial no mercado de trabalho?",
alternativas: [
"A IA apenas subistitui empregos sem criar movas oportunidades",
"A IA pode automatizar tarefas repetitivas e criar novas"
]
},
{
enunciado: "como a inteligência artificial está transformando a industria da saúde?",
alternativas: [
"A IA pode melhorar diagnosticos, auxiliar no desenvolvimento de medicamentos e peronalizar tratamentos para pacientes",
"A IA não tem aplicação pratica na analise de dados de saúde"
]
},
{
enunciado: "quais são os risco eticos associados ao uso da inteligência artificial?",
alternativas: [
"Não há impacto na privacidade dos dados com o uso da IA",
"A IA pode ser usado de forma mal-intencionado, como na vigilância e manipulação de informações"
]
},
{
enunciado: "pergunta 4",
alternativas: [
"Alternativa 1",
"Alternativa 2"
]
},
{
enunciado: "Pergunta 5",
alternativas: [
"Alternativa 1",
"Alternativa 2"
]
}
];