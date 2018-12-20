import { MoovieProvider } from './../../providers/moovie/moovie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Luiz Gustavo",
    data: "November 5, 1955",
    descricao: "Criando um app",
    qntd_likes: 12,
    qntd_comentarios: 4,
    time_publicacao: "11h ago"
  }

  public lista_filmes = new Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private movieProvider: MoovieProvider) {
    }

  ionViewDidLoad() {
    this.movieProvider.getLatersMovies().subscribe(
      data => {
        const response = (data as any);
        this.lista_filmes = response.results;

        console.log(response);
      }, error => {
        console.log(error);
      }
    )
  }

}
