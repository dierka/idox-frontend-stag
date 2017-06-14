angular.module('newsApp', []).controller('newsController', function($scope) {
	$scope.sources = [];
    $scope.news = [];
    $scope.sourceName = 'reuters';
    $scope.sort = 'top';
    $scope.key = '77a4f1c173664832a89a7d3cac6b4f0a';


    $scope.getNews = function() {

    	$.ajax({
			url: "https://newsapi.org/v1/articles?source=" + $scope.sourceName + "&sortBy=" + $scope.sort + "&apiKey=" + $scope.key, type: 'get', async: false,
			success: function(data) {
				$scope.news = data;
			}
		});

		// $.ajax({
		// 	url: "https://newsapi.org/v1/articles?source=" + $scope.sourceName + "&sortBy=" + $scope.sort + "&apiKey=" + $scope.key
		// }).then(function(data) {
		// 	$scope.news = data;
		// });

		$.each($scope.sources.sources, function(index, source) {
			if (source.id == $scope.sourceName) {
				$scope.source = source;
			}
		});

    }

    $scope.getSources = function() {

    	$.ajax({
			url: "https://newsapi.org/v1/sources", type: 'get', async: false,
			success: function(data) {
				$scope.sources = data;
			}
		});

  //   	$.ajax({
		// 	url: "https://newsapi.org/v1/sources"
		// }).then(function(data) {
		// 	$scope.sources = data;
		// });
    }

    $scope.init = function() {
    	$scope.getSources();
    	$scope.getNews();
    }
})