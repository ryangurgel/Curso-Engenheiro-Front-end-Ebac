document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (validateForm()) {
        console.log('Formulário válido. Enviar dados...');
      } else {
        console.log('Formulário inválido. Por favor, corrija os erros.');
      }
    });
  
    // Adiciona formatação automática para o campo de telefone
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function (event) {
      const formattedPhone = formatPhone(event.target.value);
      event.target.value = formattedPhone;
    });
  
    // Adiciona o traço automaticamente no campo de CEP
    const cepInput = document.getElementById('cep');
    cepInput.addEventListener('input', function (event) {
      const cep = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
      event.target.value = cep.slice(0, 5);
      if (cep.length >= 5) {
        event.target.value += '-' + cep.slice(5, 8);
      }
    });
  
    // Restringe a entrada no campo de cidade para permitir apenas letras e espaços
    const cityInput = document.getElementById('city');
    cityInput.addEventListener('input', function (event) {
      event.target.value = event.target.value.replace(/[^a-zA-Z\s]/g, ''); // Remove caracteres não alfabéticos
    });
  
    // Permite caracteres minúsculos no campo de UF e converte-os automaticamente para maiúsculas
    const ufInput = document.getElementById('uf');
    ufInput.addEventListener('input', function (event) {
      event.target.value = event.target.value.toUpperCase(); // Converte para maiúsculas
      event.target.value = event.target.value.slice(0, 2); // Limita a entrada a 2 caracteres
    });
  });
  
  function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const cep = document.getElementById('cep').value.trim();
    const city = document.getElementById('city').value.trim();
    const uf = document.getElementById('uf').value.trim();
  
    // Expressão regular para validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Expressão regular para validar telefone (formato: (99) 99999-9999 ou (99) 9999-9999)
    const phoneRegex = /^\(\d{2}\)\s\d{5}-\d{4}$/;
  
    // Expressão regular para validar CEP (formato: 99999-999)
    const cepRegex = /^\d{5}-\d{3}$/;
  
    // Verificar se todos os campos são válidos
    const isValidName = name !== '';
    const isValidEmail = emailRegex.test(email);
    const isValidPhone = phoneRegex.test(phone);
    const isValidCep = cepRegex.test(cep);
    const isValidCity = city !== '';
    const isValidUf = /^[A-Z]{2}$/i.test(uf); // Verifica se são exatamente duas letras maiúsculas
  
    // Atualizar as mensagens de erro diretamente nos elementos HTML
    document.getElementById('nameError').textContent = !isValidName ? 'Nome é obrigatório' : '';
    document.getElementById('emailError').textContent = !isValidEmail ? 'Email inválido' : '';
    document.getElementById('phoneError').textContent = !isValidPhone ? 'Telefone inválido' : '';
    document.getElementById('cepError').textContent = !isValidCep ? 'CEP inválido' : '';
    document.getElementById('cityError').textContent = !isValidCity ? 'Cidade é obrigatória' : '';
    document.getElementById('ufError').textContent = !isValidUf ? 'UF é obrigatória e deve ter 2 letras' : '';
  
    // Retornar verdadeiro se todos os campos forem válidos, falso caso contrário
    return isValidName && isValidEmail && isValidPhone && isValidCep && isValidCity && isValidUf;
  }
  
  // Função para formatar o número de telefone
  function formatPhone(phone) {
    // Remove todos os caracteres não numéricos
    phone = phone.replace(/\D/g, '');
  
    // Limita a quantidade de caracteres no número de telefone (11 caracteres)
    phone = phone.slice(0, 11);
  
    // Aplica a formatação (99) 99999-9999 ou (99) 9999-9999
    if (phone.length === 11) {
      return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (phone.length === 10) {
      return phone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
  
    // Retorna o número original se não corresponder aos formatos desejados
    return phone;
  }
  