export interface FoodItem {
    id: number,
    name: string,
    description: string,
    price: number,
    image?: string
}

const menu: FoodItem[] = [
    {
        id: 1,
        name: "Pizza margherita",
        description: "Pizza clássica com molho de tomate, mussarela e manjericão",
        price: 39.90,
        image: "https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/494feec171f5683665eba434d22e52f5.jpg?itok=n3xpYgtR"
    },
    {
        id: 2,
        name: "Suco natural de laranja",
        description: "Suco fresco feito com laranjas selecionadas",
        price: 9.5,
        image: "https://veja.abril.com.br/wp-content/uploads/2024/02/suco-laranja.jpg?crop=1&resize=1212,909"
    },
    {
        id: 3,
        name: "Batata frita crocante",
        description: "Porção de batatas fritas douradas e crocantes",
        price: 15.0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvI3cuFeniVQDADuq_8xALt8NNMu4sWYahMw&s"
    },
    {
        id: 4,
        name: "Refrigerante lata",
        description: "Lata de refrigerante gelado 350ml",
        price: 6.0,
        image: "https://imagens.jotaja.com/produtos/3188/B2C915600AEE2842AAB73537AE6D602670CAE2300BD2436EDCA9C85102AD27D8.jpeg"
    },
    {
        id: 5,
        name: "Sanduíche natural",
        description: "Pão integral com frango, alface e tomate",
        price: 12.5,
        image: "https://www.nutrella.com.br/img/receitas/11-receita-05.jpg"
    },
    {
        id: 6,
        name: "Milkshake de chocolate",
        description: "Milkshake cremoso com sorvete de chocolate",
        price: 18.0,
        image: "https://wholefoodsoulfoodkitchen.com/wp-content/uploads/2022/04/chocolate-milkshake-no-ice-cream-2.jpg"
    },
    {
        id: 7,
        name: "Coxinha",
        description: "Salgado frito recheado com frango desfiado",
        price: 7.5,
        image: "https://cdn0.tudoreceitas.com/pt/posts/1/9/1/coxinha_simples_191_orig.jpg"
    },
    {
        id: 8,
        name: "Açaí na tigela",
        description: "Açaí cremoso com granola e banana",
        price: 14.0,
        image: "https://acai.greak.com.br/_core/_uploads/228/2023/09/1147220923k5fghj5bg6.jpg"
    },
    {
        id: 9,
        name: "Pastel de queijo",
        description: "Pastel frito recheado com queijo derretido",
        price: 8.0,
        image: "https://www.sabornamesa.com.br/media/k2/items/cache/990810f9242641a8e264ce996a78ed28_XL.jpg"
    },
    {
        id: 10,
        name: "Café expresso",
        description: "Café forte e encorpado servido quente",
        price: 5.0,
        image: "https://cdn.sistemawbuy.com.br/arquivos/f101ef5b9be464a6c8854310ae5f5327/produtos/65bb164199b0d/5fc4fca2a8cea2deb2743064358f7bee-65bb21d8524e1.jpg"
    }
]

export default menu;