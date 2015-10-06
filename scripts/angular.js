var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    /*$scope.translateold = function() {
    	$scope.translated = $scope.toTranslate.replace(/\b(\w)(\w+)\b/g, '$2$1ay');
    };*/
    $scope.translated = "";

    $scope.translate = function() {
    	$scope.translated = "";
    	var myArray = $scope.toTranslate.split(" ");
    	for (var i = 0; i < myArray.length; i++){
    		var punctuation = "";
    		if ((myArray[i].substring(myArray[i].length-1) == '.') || (myArray[i].substring(myArray[i].length-1) == ',') || (myArray[i].substring(myArray[i].length-1) == '!') || (myArray[i].substring(myArray[i].length-1) == '?')) {
    			punctuation = myArray[i].substring(myArray[i].length -1);
    			myArray[i] = myArray[i].substring(0,myArray[i].length -1);
    		}
    		if (i > 0) {
    			$scope.translated += " ";
    		}
    		$scope.translated += $scope.translateWord(myArray[i]);
    		if (punctuation != "") {
    			$scope.translated += punctuation;
    		}
    	}
    };

    $scope.translateWord = function(str) {
    	var vowels = ["a","e","i","o","u"];
		var stringVowels = []; //Vowels in The String;

	    var firstLetter = ''; //Stores the first letter in the string
	    for (var i = 0; i < str.length; i++) {
	      for (var j = 0; j < vowels.length; j++) {
	        if (str[i] === vowels[j]) {
	            stringVowels.push(str[i]);
	        }
	        else if (str.charAt(0) !== vowels[j]) {
	            firstLetter = str.charAt(0);
	        }
	      }
	    }
	    
	    firstVowel = stringVowels[0]; //First Vowel in The String;

	    if (firstLetter === firstVowel) {
	    	var newString = str + "yay"; //If the first letter is a vowel return this;
	    	//$scope.translated += newString; 
	    	return newString;
	    }
	    else {
			var firstVowelIndex = str.indexOf(firstVowel);//index of the first vowel
			var charsBefore = str.slice(0,firstVowelIndex);//chars b4 the idx of the vowel;
			var charsAfter = str.slice(firstVowelIndex,str.length);//chars after the idx of the first vowel;
			var newString = charsAfter + charsBefore + "ay";
			//$scope.translated += newString;
			return newString;
	    }
	};

    /*$scope.translateWord = function() {
    	$scope.vowels = ["a","e","i","o","u"];
		$scope.stringVowels = []; //Vowels in The String;

	    $scope.firstLetter = ''; //Stores the first letter in the string
	    for ($scope.i = 0; i < $scope.toTranslate.length; i++) {
	      for ($scope.j = 0; j < vowels.length; j++) {
	        if ($scope.toTranslate[i] === vowels[j]) {
	            stringVowels.push($scope.toTranslate[i]);
	        }
	        else if ($scope.toTranslate.charAt(0) !== vowels[j]) {
	            firstLetter = $scope.toTranslate.charAt(0);
	        }
	      }
	    }
	    
	    $scope.firstVowel = stringVowels[0]; //First Vowel in The String;

	    if (firstLetter === firstVowel) {
	    	$scope.translated = $scope.toTranslate + "yay"; //If the first letter is a vowel return this;
	    }
	    else {
			$scope.firstVowelIndex = $scope.toTranslate.indexOf(firstVowel);//index of the first vowel
			$scope.charb4 = $scope.toTranslate.slice(0,firstVowelIndex);//chars b4 the idx of the vowel;
			$scope.charaf = $scope.toTranslate.slice(firstVowelIndex,$scope.toTranslate.length);//chars after the idx of the first vowel;
			$scope.translated = charaf + charb4 + "ay";
	    }
	};*/
});