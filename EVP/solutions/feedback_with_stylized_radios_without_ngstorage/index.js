angular.module('feedback', [])
.controller('feedbackCtrl', ['communication', '$rootScope', '$scope', '$state', '$mdDialog',
  function(communication, $rootScope, $scope, $state, $mdDialog) {
  	$scope.title = 'Обратная связь';
    $scope.items = pageOptions.slice(1);
    $scope.$parent.header.hide = false;

    /*$scope.$storage = $localStorage.$default({
      completeFeedback: false
    });*/

    console.log('$scope.$storage', $scope.$storage);

    $scope.showModal = function(title, body, buttonText) {
      $mdDialog.show(
        $mdDialog.alert()
          .title(title)
          .textContent(body)
          .ok(buttonText)
      );
    };

    $scope.validateFieldsFeedback = function(data) {
      var data = data || {},
          result;

      //console.log('data', data);

      if (  data.group0_0 == undefined ||
            data.group0_1 == undefined ||
            data.group0_2 == undefined ||
            data.group0_3 == undefined
      ) {
        //console.log('validateFieldsFeedback return undefined');
        result = undefined;
      } else {
        //console.log('validateFieldsFeedback return true');
        result = true;
      };

      return result;
    };

    $scope.sendFeedback = function(data) {
      var   _data = [],
            result = true;

      _data.push({'title':'Тебе понравилось событие в целом?', 'value': data.group0_0, 'reference':'group0_0'});
      _data.push({'title':'Обучение было информативным?', 'value': data.group0_1, 'reference':'group0_1'});
      _data.push({'title':'Школа была интересной?', 'value': data.group0_2, 'reference':'group0_2'});
      _data.push({'title':'Событие оправдало твои ожидания?', 'value': data.group0_3, 'reference':'group0_3'});
      _data.push({'title':'Как ты считаешь, должна ли увеличиться продолжительность Школы?', 'value': data.group0_4, 'reference':'group0_4'});

      _data.push({'title':'Предложите тему 1:', 'value': data.group1_0, 'reference':'group1_0'});
      _data.push({'title':'Предложите тему 2:', 'value': data.group1_1, 'reference':'group1_1'});
      _data.push({'title':'Предложите тему 3:', 'value': data.group1_2, 'reference':'group1_2'});

      _data.push({'title':'Чартер:', 'value': data.group2_0, 'reference':'group2_0'});
      _data.push({'title':'Трансферы:', 'value': data.group2_1, 'reference':'group2_1'});
      _data.push({'title':'Проживание:', 'value': data.group2_2, 'reference':'group2_2'});

      try {
        communication.send("guid",{for:"feedback.add"});
        $scope.feedback_data = _data;
        console.log('_data', $scope.feedback_data);

        communication.receive = function (c, d) {
          if("guid"==c&&"feedback.add"==d.for) {
            console.log('comm ok');
            communication.send("feedback",{
              feedback_reference: "feedback",
              title: "Обратная связь",
              post_reference: d.guid,
              values: $scope.feedback_data
            });
          }
        };
      }
      catch(err) {
        result = undefined;
        console.log('error send ', err.message);
      }

      return result;
    };

    $scope.submitFeedback = function(data) {
      //console.log('valid val', $scope.validateFieldsFeedback(data));

      if($scope.validateFieldsFeedback(data) == true) {
        //console.log('valid');

        if($scope.sendFeedback(data) == true) {
          //console.log('Данные отправлены!');
          /*$scope.$storage.completeFeedback = true;*/
          $scope.showModal('Спасибо', 'Данные отправлены!', 'ОК');
        } else {
          //console.log('not sended');
        };
      } else {
        //console.log('not valid');
        $scope.showModal('Ошибка', 'Необходимо заполнить все поля!', 'ОК');
      };
    };
  }
]);
