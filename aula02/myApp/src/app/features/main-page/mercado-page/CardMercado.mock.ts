export interface Mercado {
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number,
    image?: string
}

const MockMercado: Mercado[] = [
    {
        id: 1,
        name: "Arroz branco 5kg",
        description: "Arroz tipo 1, ideal para o dia a dia",
        price: 25.9,
        stock: 40,
        image: "https://supermercadobomdemais.com.br/wp-content/uploads/2020/05/Arroz-Branco-Prato-Fino-5kg.jpg"
    },
    {
        id: 2,
        name: "Feijão carioca 1kg",
        description: "Feijão selecionado de alta qualidade",
        price: 8.5,
        stock: 60,
        image: "https://www.extramercado.com.br/img/uploads/1/969/33198969.jpeg"
    },
    {
        id: 3,
        name: "Macarrão espaguete 500g",
        description: "Massa de trigo para preparo rápido",
        price: 4.2,
        stock: 80,
        image: "https://redemix.vteximg.com.br/arquivos/ids/208908-1000-1000/7896022200756.jpg?v=638350601909730000"
    },
    {
        id: 4,
        name: "Óleo de soja 900ml",
        description: "Óleo vegetal para frituras e cozimento",
        price: 7.9,
        stock: 50,
        image: "https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/15165/medium/oleo-de-soja-liza-900ml_10676.png"
    },
    {
        id: 5,
        name: "Açúcar refinado 1kg",
        description: "Açúcar branco fino para uso diário",
        price: 4.5,
        stock: 70,
        image: "https://muffatosupermercados.vtexassets.com/arquivos/ids/226101-800-auto?v=636295822778330000&width=800&height=auto&aspect=true"
    },
    {
        id: 6,
        name: "Sal refinado 1kg",
        description: "Sal de cozinha iodado",
        price: 2.5,
        stock: 100,
        image: "https://www.contabilista.com.br/media/catalog/product/cache/e7bd975ee72b2e17c1d729a77564a9f3/0/7/073746A.jpg"
    },
    {
        id: 7,
        name: "Leite integral 1L",
        description: "Leite integral pasteurizado",
        price: 5.2,
        stock: 45,
        image: "https://prezunic.vtexassets.com/arquivos/ids/180496/65678a451ef373968076148f.jpg?v=638368812248130000"
    },
    {
        id: 8,
        name: "Café moído 500g",
        description: "Café torrado e moído tradicional",
        price: 14.9,
        stock: 30,
        image: "https://cdn.awsli.com.br/600x450/548/548525/produto/280919220/70ee7693b706c96a44f5432c6e5b1dce-h6ula2ypoa.jpg"
    },
    {
        id: 9,
        name: "Farinha de trigo 1kg",
        description: "Farinha branca ideal para massas e bolos",
        price: 6.3,
        stock: 55,
        image: "https://fortatacadista.vteximg.com.br/arquivos/ids/157113-800-800/Farinha-de-Trigo-Anaconda-Premium-1kg.jpg?v=637400105724070000"
    },
    {
        id: 10,
        name: "Margarina 500g",
        description: "Margarina cremosa com sal",
        price: 6.8,
        stock: 35,
        image: "https://zaffari.vtexassets.com/arquivos/ids/253552/1000575-00.jpg?v=638585413470030000"
    }
]

export default MockMercado;