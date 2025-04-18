import { prisma } from './prisma.js';

async function seed() {
    const data = [
        {
            name: 'Expresso Tradicional',
            tags: ['Tradicional'],
            slugs: ['tradicional'],
            image: 'https://github.com/matheus369k/matheus369k.github.io/blob/main/coffee-delivery-images/expresso-tradicional.png?raw=true',
            description: 'O tradicional café feito com água quente e grãos moídos',
            price: '9,90',
        },
        {
            name: 'Expresso Americano',
            tags: ['Tradicional'],
            slugs: ['tradicional'],
            image: 'https://github.com/matheus369k/matheus369k.github.io/blob/main/coffee-delivery-images/expresso-americano.png?raw=true',
            description: 'Expresso diluído, menos intenso que o tradicional',
            price: '9,90',
        },
        {
            name: 'Expresso Cremoso',
            tags: ['Tradicional'],
            slugs: ['tradicional'],
            image: 'https://github.com/matheus369k/matheus369k.github.io/blob/main/coffee-delivery-images/expresso-cremoso.png?raw=true',
            description: 'Café expresso tradicional com espuma cremosa',
            price: '9,90',
        },
        {
            name: 'Expresso Gelado',
            tags: ['Tradicional', 'Gelado'],
            slugs: ['tradicional', 'gelado'],
            image: 'https://github.com/matheus369k/matheus369k.github.io/blob/main/coffee-delivery-images/expresso-gelado.png?raw=true',
            description: 'Bebida preparada com café expresso e cubos de gelo',
            price: '9,90',
        },
        {
            name: 'Café com Leite',
            tags: ['Tradicional', 'Com Leite'],
            slugs: ['tradicional', 'com-leite'],
            image: 'https://github.com/matheus369k/matheus369k.github.io/blob/main/coffee-delivery-images/caf%C3%A9-com-leite.png?raw=true',
            description: 'Meio a meio de expresso tradicional com leite vaporizado',
            price: '9,90',
        },
        {
            name: 'Latte',
            tags: ['Tradicional', 'Com Leite'],
            slugs: ['tradicional', 'com-leite'],
            image: 'https://github.com/matheus369k/matheus369k.github.io/blob/main/coffee-delivery-images/latte.png?raw=true',
            description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
            price: '9,90',
        },
        {
            name: 'Capuccino',
            tags: ['Tradicional', 'Com Leite'],
            slugs: ['tradicional', 'com-leite'],
            image: 'https://github.com/matheus369k/matheus369k.github.io/blob/main/coffee-delivery-images/capuccino.png?raw=true',
            description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
            price: '9,90',
        },
        {
            name: 'Macchiato',
            tags: ['Tradicional', 'Com Leite'],
            slugs: ['tradicional', 'com-leite'],
            image: 'https://github.com/matheus369k/matheus369k.github.io/blob/main/coffee-delivery-images/macchiato.png?raw=true',
            description: 'Café expresso misturado com um pouco de leite quente e espuma',
            price: '9,90',
        },
        {
            name: 'Mocaccino',
            tags: ['Tradicional', 'Com Leite'],
            slugs: ['tradicional', 'com-leite'],
            image: 'https://github.com/matheus369k/matheus369k.github.io/blob/main/coffee-delivery-images/mocaccino.png?raw=true',
            description: 'Café expresso com calda de chocolate, pouco leite e espuma',
            price: '9,90',
        },
        {
            name: 'Chocolate Quente',
            tags: ['Especial', 'Com Leite'],
            slugs: ['especial', 'com-leite'],
            image: 'https://github.com/matheus369k/matheus369k.github.io/blob/main/coffee-delivery-images/chocolate-quente.png?raw=true',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            price: '9,90',
        },
        {
            name: 'Cubano',
            tags: ['Especial', 'Alcoólico', 'Gelado'],
            slugs: ['especial', 'alcoolico', 'gelado'],
            image: 'https://github.com/matheus369k/matheus369k.github.io/blob/main/coffee-delivery-images/cubano.png?raw=true',
            description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
            price: '9,90',
        },
        {
            name: 'Havaiano',
            tags: ['Especial'],
            slugs: ['especial'],
            image: 'https://github.com/matheus369k/matheus369k.github.io/blob/main/coffee-delivery-images/havaiano.png?raw=true',
            description: 'Bebida adocicada preparada com café e leite de coco',
            price: '9,90',
        },
        {
            name: 'Árabe',
            tags: ['Especial'],
            slugs: ['especial'],
            image: 'https://github.com/matheus369k/matheus369k.github.io/blob/main/coffee-delivery-images/%C3%A1rabe.png?raw=true',
            description: 'Bebida preparada com grãos de café árabe e especiarias',
            price: '9,90',
        },
        {
            name: 'Irlandês',
            tags: ['Especial', 'Alcoólico'],
            slugs: ['especial', 'alcoolico'],
            image: 'https://github.com/matheus369k/matheus369k.github.io/blob/main/coffee-delivery-images/irland%C3%AAs.png?raw=true',
            description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
            price: '9,90',
        },
    ];

    await Promise.all([
        prisma.coffee.deleteMany({}).then(() => {
            console.log('postgresql coffees deleted');
        }),
        prisma.coffee.createMany({ data }).then(() => {
            console.log('postgresql coffees created');
        }),
    ]);
}

seed().finally();
