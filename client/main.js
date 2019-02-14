import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../lib/collections.js';

Template.profile.helpers({
	proffname(){
		return userDB.findOne({}).firstname;
	}
});

Template.profile.events({
  'click .js-like'(event, instance) {
   console.log("You clicked like");
  },
  'click .js-dislike'(event, instance){
  	alert("Clicked dislike");
  },
});


Template.addProfile.events({
	'click .js-save'(event, instance){
		//get user data
	var fName = $("#exampleModal input[name='firstname']").val();
	var lName = $("#exampleModal input[name='lastname']").val();
	var Photopic = $("#exampleModal input[name='Photopic']").val();
	console.log("The first name is",fName);
	console.log("The last name is",lName);
	console.log("The Photo is",Photopic);
	 $("#exampleModal input[name='firstname']").val("");
	 $("#exampleModal input[name='lastname']").val("");
	 $("#exampleModal input[name='Photopic']").val("");		
  	$('#exampleModal').modal("hide");
  	userDB.insert({'firstname':fName,
  		'lastname':lName, 'img':Photopic});
  },
});