import {API} from './api.js';
import * as UI from './ui.js';


UI.searchForm.addEventListener('submit',(e) => {
     
    e.preventDefault();

    const artist= document.querySelector('#artist').value,
          song=document.querySelector('#song').value;

    if(artist === '' || song === '')
    {
        UI.messageDiv.innerHTML= 'Error...All fields are mandatory';
        UI.messageDiv.classList.add('error');
        setTimeout(() => {
            UI.messageDiv.innerHTML= '';
           UI.messageDiv.classList.remove('error');
        },3000);
    }
    else{
       const api= new API(artist,song);
       api.queryAPI()
             .then(data => {
                 if(data.lyric.lyrics){
                 const result=data.lyric.lyrics;
                 UI.resultDiv.textContent=result;
                 }
                 else{
                     UI.messageDiv.innerHTML='No lyrics Found';
                     UI.messageDiv.classList.add('error');
                     setTimeout(() => {
                         UI.messageDiv.innerHTML='';
                         UI.messageDiv.classList.remove('error');
                         UI.searchForm.reset();
                     },3000);
                 }
             })
    }
})