import { View } from './View';

//namespace Views{
    export class MensagemView extends /*Views.View*/View<string> {
    
        template(model: string): string {
            return `<p class="alert alert-info">${model}</p>`;
        }
    }
//}