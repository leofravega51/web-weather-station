import $ from 'jquery'

export default function getInitials(nombre){
    var words = nombre.split(' ');
    var text = '';
    $.each(words, function () {
        text +=  this.substring(0, 1);
    });
    return text;
}
