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