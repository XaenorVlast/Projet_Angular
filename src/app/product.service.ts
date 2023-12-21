import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    products: any[] = []

    constructor() {
        this.products.push( { name: 'Mojito', description: 'Rien de mieux qu\'un bon mojito maison fait dans les régles de l\'art', img: 'assets/mojito.jpg', alcohol: true } )
        this.products.push( { name: 'Cuba libre', description: 'Le Cuba libre est un cocktail officiel de l\'IBA4, à base de rhum, citron vert, et cola.', img: 'assets/cubalibre.jpg', alcohol: true } )
        this.products.push( { name: 'Margarita', description: 'La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique', img: 'assets/margarita.jpg', alcohol: true } )
        this.products.push( { name: 'Sex on the beach', description: 'Le Sex on the Beach est un cocktail alcoolisé contenant de la vodka, du Schnaps à la pêche, du jus d\'orange et du jus de canneberge', img: 'assets/sexonthebeach.jpg', alcohol: true } )
        this.products.push( { name: 'Virgin Mojito', description: 'Le Virgin Mojito est inspiré par le célèbre Mojito cubain, l\'un des ceux qui représente le plus la culture cubaine, à l\'égal du Cuba libre et du Daiquiri.', img: 'assets/virginmojito.jpg', alcohol: false } )
        this.products.push( { name: 'Halloween Punch', description: 'Pour en mettre plein les yeux le soir le plus effrayant de l\'année, préparez un punch d\'Halloween facile… couleur rouge sang et rempli de globes oculaires !', img: 'assets/holloweenpunch.jpg', alcohol: false } )
    }

    getCocktails(): Observable<any[]> {
        return of(this.products)
    }

    getCocktailsWith(): Observable<any[]> {
        return of(this.products.filter( el => el.alcohol ))
    }

    getCocktailsWithout(): Observable<any[]> {
        return of(this.products.filter( el => !el.alcohol ))
    }

    getCocktailsContains(search: string): Observable<any[]> {
        return of(this.products.filter( el => el.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) >= 0 ))
    }

    getCocktailsFirstLetter(letter: string): Observable<any[]> {
        return of(this.products.filter( el => el.name.toLocaleLowerCase()[0] === letter.toLocaleLowerCase() ))
    }


}
