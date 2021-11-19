const inputs = document.querySelectorAll('input[data-rule]');
const form =document.querySelector('#authorization');

form.addEventListener('submit', function (e) {
    e.preventDefault();

})


    const validation=()=>{
        for (let input of inputs) {
            input.addEventListener('blur', function () {
                let rule = this.dataset.rule;
                let value = this.value;
                let length = value.length;
                let isValid=false;

                switch (rule) {
                    case 'required':
                        isValid = length > 0;
                        break;
                    case 'number':
                        isValid = /^\d+$/.test(value);
                        break;
                    case 'emailRequired':
                        isValid = /.+@.+\..+/i.test(value);
                        break;

                }

                this.classList.remove('invalid');
                this.classList.remove('valid');
                if (isValid) {
                    this.classList.remove('text-field--error');
                } else {
                    this.classList.add('text-field--error');
                }
            });
        }

    }


