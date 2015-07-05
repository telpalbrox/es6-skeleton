require('!bootstrap-webpack!./config/bootstrap/bootstrap.config.js');
require('./styles/styles.less');
import Operations from './Operations.js';
import $ from 'jquery';

$("#myModal").modal({
    show: false
});

$("#save-button").click(function() {
    alert("saved");
    $("#myModal").modal("hide");
});

let operations = new Operations(5, 6);
console.log(operations.add());
console.log(operations.subtract());
console.log(operations.divide());
console.log(operations.multiply());