
$(document).ready(function () {
    $('#formCadastroBenef').submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: urlPostBene,
            method: "POST",
            data: {
                "NOME": $(this).find("#Nome").val(),
                "CPF": $(this).find("#CPF").val(),


            },
            error:
                function (r) {
                    if (r.status == 400)
                        ModalDialog("Ocorreu um erro", r.responseJSON);
                    else if (r.status == 500)
                        ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
                },
            success:
                function (r) {
                    ModalDialog("Sucesso!", r)
                    $("#formCadastroBenef")[0].reset();
                }
        });
    })

})

function ModalDialog(titulo, texto) {
    var random = Math.random().toString().replace('.', '');
    var texto = '<div id="' + random + '" class="modal fade">                                                               ' +
        '        <div class="modal-dialog">                                                                                 ' +
        '            <div class="modal-content">                                                                            ' +
        '                <div class="modal-header">                                                                         ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-body">                                                                           ' +
        '                    <p>' + texto + '</p>                                                                           ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-footer">                                                                         ' +
        '                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>             ' +
        '                                                                                                                   ' +
        '                </div>                                                                                             ' +
        '            </div><!-- /.modal-content -->                                                                         ' +
        '  </div><!-- /.modal-dialog -->                                                                                    ' +
        '</div> <!-- /.modal -->                                                                                        ';

    $('body').append(texto);
    $('#' + random).modal('show');
}



function txtCPF_KeyUp(s, e) {

    if (CPF.value.length == 3 || CPF.value.length == 7) {
        var text = CPF.value
        CPF.value = text += "."
    } else if (CPF.value.length == 11) {
        var text = CPF.value
        CPF.value = text += "-"
    }
}


document.getElementById("btnBeneficiario").addEventListener('click', () => {
    ModalDialog(
        'Beneficiário',
        `   <form method="">
            <div class= "row" >
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="Nome">Nome:</label>
                        <input required="required" type="text" class="form-control" id="Nome" name="Nome" placeholder="Ex.: João" maxlength="50">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="CPF">CPF:</label>
                        <div style="display: flex; gap: 1rem;">
                            <input required="required" type="text" class="form-control" id="CPF" name="CPF" onkeyup="txtCPF_KeyUp()" placeholder="Ex: 010.011.111-00" maxlength="14">
                            <button type="submit" class="btn btn-sm btn-success">Incluir</button>
                        </div>
                    </div>
                </div>
            </div>
            </form>
    `);
});

