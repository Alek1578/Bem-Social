export class FormPost {
    constructor(idForm, idTextarea, idUlPost) {
        this.form = document.getElementById(idForm);
        this.textarea = document.getElementById(idTextarea);
        this.ulPost = document.getElementById(idUlPost);
        this.addSubmit();

    }
    onSubmit(func) {
        this.form.addEventListener('submit', func)
    }

    formValidate(value) {
        if(value === '' || value === null === undefined || value.length <1) {
            return false
        }
        return true
    }
    // Pegando a hora e minutos que o usuário publicou o post.
    getTime() {
        const time = new Date();
        const hour = time.getHours();
        const minutes = time.getMinutes();
        return `${hour}h ${minutes}min`
    }
    addSubmit() {
        const handleSubmit = (event) => {
            event.preventDefault();
            if(this.formValidate(this.textarea.value)) {
                const time = this.getTime();
                const newPost = document.createElement('li');
                newPost.classList.add('post')
                newPost.innerHTML = `
                <div class="infoUserPost">
                        <div class="imgUserPost"></div>
    
                        <div class="nameAndHour">
                            <strong>Jonathan Alves</strong>
                            <p>${time}</p>
                        </div>
                    </div>
                    <p>
                    ${this.textarea.value}
                    </p>
    
                    <div class="actionBtnPost">
                        <button type="button" class="filesPost like"><img src="/assets/heart.svg" alt="Curtir">Curtir</button>
                        <button type="button" class="filesPost comment"><img src="/assets/comment.svg" alt="Comentar">Comentar</button>
                        <button type="button" class="filesPost share"><img src="/assets/share.svg" alt="Compartilhar">Compartilhar</button>
                        <button type="button" class="filesPost delete"><img src="/assets/bx-message-square-x.svg" alt="Excluir">Excluir</button>
                    </div>
                  `;
                   this.ulPost.append(newPost);
                   this.textarea.value = null;
            } else {
                alert('Digite algo para publicar.')
            }
        }
            

        this.onSubmit(handleSubmit)
    }
      
}

function deleteComment(button) {
    var commentDiv = button.comment; // Pega o elemento pai (div de comentário)
    commentDiv.remove(); // Remove o elemento div de comentário
  }
  
const postForm = new FormPost('formPost', 'textarea', 'posts')