	import React from 'react';
	import ReactDOM from 'react-dom';
	import './index.css';
	import $ from 'jquery';
	import App from './App';
	import * as serviceWorker from './serviceWorker';

	ReactDOM.render( < App / > , document.getElementById('root'));
	// If you want your app to work offline and load faster, you can change
	// unregister() to register() below. Note this comes with some pitfalls.
	// Learn more about service workers: http://bit.ly/CRA-PWA
	serviceWorker.unregister();

	$(document).ready(function() {

	    var i = 0;
	    $('#add').click(function() {
	    	alert("ok");
	        if (document.getElementById('link').value != "") {
	            i++;
	            $('#dynamic_field').append(
	                '<tr id="row' + i + '">+\
	           	<td><p readonly type="text" +\
	           	id="repo' + i + '" +\
	           	class="form-control name_list"> ' + $('#link').val() + '</p></td> +\
	           	<td><button type="button" +\
	           	name="remove" id="' + i + '" class="btn btn-danger btn_remove"><i class="fas fa-trash-alt"></i></button></td>+\
	           	</tr>'
	            );
	            document.getElementById('link').value = "";
	            $("#submit").removeAttr('disabled');
	        }
	    });
	    $(document).on('click', '.btn_remove', function() {
	        var button_id = $(this).attr("id");
	        $('#row' + button_id + '').remove();
	    });
	    // $('#submit').click(function() {
	    //     $.ajax({
	    //         url: "name.php",
	    //         method: "POST",
	    //         data: $('#add_name').serialize(),
	    //         success: function(data) {
	    //             alert(data);
	    //             $('#add_name')[0].reset();
	    //         }
	    //     });
	    // });
	});