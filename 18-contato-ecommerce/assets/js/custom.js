$(document).ready(function () {
    $('.owl-carousel').owlCarousel();

    let titulos = $('h4');
    let itens = $('.featured-item');
    let features = $('#featured');

    // Adiciona classes aos links dentro dos itens destacados
    $('.featured-item a').addClass('btn btn-dark stretch-link');

    // Adiciona a marca "Novo" aos primeiros itens destacados
    $('.featured-item:first h4, #NewItem-01 h4').append('<span class="badge bg-success g-2">Novo</span>');

    // Manipulação de evento para exibir alerta de produto esgotado
    $('.featured-item a').on('click', function (event) {
        event.preventDefault();
        alert('Produto esgotado');
    });

    // Ouvinte de eventos para abrir modal
    $('[rel="contato"]').on('click', function (e) {
        e.preventDefault();
        let elem = $(this).attr('rel');
        $('.modal-body').html($('#' + elem).html());
        $('.modal-header h5.modal-title').html($(this).text());
        let myModal = new bootstrap.Modal($('#modelId'));
        myModal.show();
    });

    // Função para validar campos do formulário
    function validate(elem) {
        let isValid = true;
        elem.each(function () {
            if ($(this).val() == '') {
                $(this).parent().find('.invalid-message').show();
                $(this).addClass('invalid');
                isValid = false;
            } else {
                $(this).parent().find('.invalid-message').hide();
                $(this).removeClass('invalid');
            }
        });
        return isValid;
    }

    // Ouvinte de evento de submissão do formulário
    $('body').on('submit', '.modal-body .form', function (e) {
        e.preventDefault();

        const inputs = $(this).find('input.required'); // Seleciona todos os campos obrigatórios

        if (!validate(inputs)) {
            console.log('Verifique os campos obrigatórios');
            return false;
        } else {
            $(this).submit();
        }
    });

    // Adicionando ouvinte de evento blur para validar campos quando o foco é perdido
    $('body').on('blur', '#nome, #email, #data, #hora, #cep, #phone, #cpf', function () {
        validate($(this));
    });

    // Adicionando máscaras de entrada para os campos
    $('body').on('blur', '#data', function () {
        validate($(this));
        $(this).mask('00/00/0000');
    });

    $('body').on('blur', '#hora', function () {
        validate($(this));
        $(this).mask('00:00:00');
    });

    $('body').on('blur', '#cep', function () {
        validate($(this));
        $(this).mask('00000-000');
    });

    $('body').on('blur', '#phone', function () {
        validate($(this));
        $(this).mask('(00)00000-0000');
    });

    $('body').on('blur', '#cpf', function () {
        validate($(this));
        $(this).mask('000.000.000-00');
    });

    // Adiciona um ouvinte de evento para cada item do menu
    $('.navbar-nav .nav-link').on('click', function () {
        // Recolhe a barra de navegação
        $('.navbar-collapse').collapse('hide');
    });
});
