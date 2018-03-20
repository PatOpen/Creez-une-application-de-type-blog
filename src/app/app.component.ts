import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    posts = [
        {
            title: 'Mon premier post',
            content: 'Tout va bien il fait beau, je file à la plage!',
            loveIts: 0,
            created_at: '20/03/2018, 10:20 AM'
        },
        {
            title: 'Mon deuxième post',
            content: 'Arff!! j\'ai pas un sous je vais devoir manger encore des nouilles !',
            loveIts: 0,
            created_at: '14/03/2018, 09:20 AM'
        },
        {
            title: 'Mon troisème post',
            content: 'Je vais boire un café, car j\'ai pas encore fini de bosser.',
            loveIts: 0,
            created_at: '02/03/2018, 07:20 PM'
        }
    ];
}
