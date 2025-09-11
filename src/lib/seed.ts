import { prisma } from './prisma.js';

async function seed() {
    const data = [
        {
            name: 'Expresso Tradicional',
            tags: ['Tradicional'],
            slugs: ['tradicional'],
            image: 'https://drive.google.com/thumbnail?id=1SWmXqOPUqUKzGrJqWnMbGc8RMPcqF33b',
            description: 'O tradicional café feito com água quente e grãos moídos',
            price: '9,90',
        },
        {
            name: 'Expresso Americano',
            tags: ['Tradicional'],
            slugs: ['tradicional'],
            image: 'https://drive.google.com/thumbnail?id=1cKcNNas0HACdX_Xew3BuIeqPpxTmdJuq',
            description: 'Expresso diluído, menos intenso que o tradicional',
            price: '9,90',
        },
        {
            name: 'Expresso Cremoso',
            tags: ['Tradicional'],
            slugs: ['tradicional'],
            image: 'https://drive.google.com/thumbnail?id=1wAjF3BHy2PtvAXM0QV8vRYWDqRzTmIav',
            description: 'Café expresso tradicional com espuma cremosa',
            price: '9,90',
        },
        {
            name: 'Expresso Gelado',
            tags: ['Tradicional', 'Gelado'],
            slugs: ['tradicional', 'gelado'],
            image: 'https://drive.google.com/thumbnail?id=1eHsl76OoBE-zgn0GX-iP4IjhC72p2MbI',
            description: 'Bebida preparada com café expresso e cubos de gelo',
            price: '9,90',
        },
        {
            name: 'Café com Leite',
            tags: ['Tradicional', 'Com Leite'],
            slugs: ['tradicional', 'com-leite'],
            image: 'https://drive.google.com/thumbnail?id=1Y0s6ZSpij7GVbnGDkl0OXmA8rBYeI3gA',
            description: 'Meio a meio de expresso tradicional com leite vaporizado',
            price: '9,90',
        },
        {
            name: 'Latte',
            tags: ['Tradicional', 'Com Leite'],
            slugs: ['tradicional', 'com-leite'],
            image: 'https://drive.google.com/thumbnail?id=11Wjc6zQ8G3cutGYUsEt-LpCbTgXCoIly',
            description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
            price: '9,90',
        },
        {
            name: 'Capuccino',
            tags: ['Tradicional', 'Com Leite'],
            slugs: ['tradicional', 'com-leite'],
            image: 'https://drive.google.com/thumbnail?id=10upxSr2-5EhHET0KbnTB2dEmIOnVngdW',
            description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
            price: '9,90',
        },
        {
            name: 'Macchiato',
            tags: ['Tradicional', 'Com Leite'],
            slugs: ['tradicional', 'com-leite'],
            image: 'https://drive.google.com/thumbnail?id=1RHZJDXTDUpAq4od8rK4epPHFIE0mZjfj',
            description: 'Café expresso misturado com um pouco de leite quente e espuma',
            price: '9,90',
        },
        {
            name: 'Mocaccino',
            tags: ['Tradicional', 'Com Leite'],
            slugs: ['tradicional', 'com-leite'],
            image: 'https://drive.google.com/thumbnail?id=1RftW_WzHUBED158WnCqEZDC3NIYGgkHx',
            description: 'Café expresso com calda de chocolate, pouco leite e espuma',
            price: '9,90',
        },
        {
            name: 'Chocolate Quente',
            tags: ['Especial', 'Com Leite'],
            slugs: ['especial', 'com-leite'],
            image: 'https://drive.google.com/thumbnail?id=1gEBcnqgJnJUXtZIgq0YEOeX-qWCeYxh6',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            price: '9,90',
        },
        {
            name: 'Cubano',
            tags: ['Especial', 'Alcoólico', 'Gelado'],
            slugs: ['especial', 'alcoolico', 'gelado'],
            image: 'https://drive.google.com/thumbnail?id=1PjCsfcEiIwkjfC36guPDvpNxv0Ak5OGC',
            description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
            price: '9,90',
        },
        {
            name: 'Havaiano',
            tags: ['Especial'],
            slugs: ['especial'],
            image: 'https://drive.google.com/thumbnail?id=18r1mmnvnRsFlxRasHFmkp2gbDhi2RItM',
            description: 'Bebida adocicada preparada com café e leite de coco',
            price: '9,90',
        },
        {
            name: 'Árabe',
            tags: ['Especial'],
            slugs: ['especial'],
            image: 'https://drive.google.com/thumbnail?id=1gchZg2gSmwe6gbbhtIARY6sA3NY6SeCe',
            description: 'Bebida preparada com grãos de café árabe e especiarias',
            price: '9,90',
        },
        {
            name: 'Irlandês',
            tags: ['Especial', 'Alcoólico'],
            slugs: ['especial', 'alcoolico'],
            image: 'https://drive.google.com/thumbnail?id=11DeqVFfXvD8tWbK18gZQ7YhFN4Mn_HEm',
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
