angular.module('module_profile', [])
    .controller('module_profileCtrl', ['communication', '$rootScope', '$scope', 'file', 'showMessage', 'api', 'db',
        function(communication, $rootScope, $scope, file, showMessage, api, db) {
            $rootScope.header.title = 'Личный кабинет';
            $scope.editable = false;
            $scope.preview = false;

            // заполняем массив для отображения
            api.getRow('participants', localStorage.row_id).then(function (response) {
                console.log(response);
                //alert(JSON.stringify(response));
                $scope.user = {
                    fname:          response["fname"] || "",
                    lname:          response["lname"] || "",
                    photo:          response["photo"] || "",
                    team:           response["team"] || "",
                    position:       response["position"] || "",
                    city:           response["city"] || ""
                };
                console.log($scope.user);
                //alert(JSON.stringify($scope.user));
            });

            // обработчик кнопки удаления аватара
            $scope.removeAvatar = function() {
                $scope.user.photo = 'False';
                $rootScope.avatar_preview = 'False';
                db.edit('participants', {'photo': 'False'}, localStorage.row_id);
                localStorage.user_photo = $scope.user.photo;
                $scope.$applyAsync();
                showMessage.show("Ваша фотография удалена", 1000);
            };

            // функция редактирования
            var toggle = function(){
                //alert('toggle ');
                $scope.editable = !$scope.editable;
                $scope.$parent.header.edit = !$scope.editable?toggle:false;
                $scope.$parent.header.done = $scope.editable?toggle:false;
                //alert('user ' + JSON.stringify($scope.user));
                if(!$scope.editable){
                    //alert(' user_ ' + JSON.stringify($scope.user));
                    var data = {
                        fname: $scope.user.fname,
                        lname: $scope.user.lname,
                        position: $scope.user.position,
                        team: $scope.user.team,
                        city: $scope.user.city,
                        photo: $scope.user.photo
                    };
                    //alert('data ' + JSON.stringify(data));
                    db.edit('participants', data, localStorage.row_id);
                    localStorage.user_fname = $scope.user.fname;
                    localStorage.user_lname = $scope.user.lname;
                }
            };
            $rootScope.header.edit = toggle;

            // обработчик кнопку установки фото
            $scope.setPhoto = function(){
                //alert('set');
                file.attach();
            };

            // приём данных с сервера
            communication.receive = function(type, data){
                //alert(JSON.stringify(type));
                //alert(JSON.stringify(data));
                if(type=='gallery' || type=='photo'){
                    var url = data.result.split('/');
                    db.edit('participants', {'photo': url[url.length-1]}, localStorage.row_id);
                    localStorage.user_photo = url[url.length-1];
                    $scope.preview = data.result;
                    $scope.user.photo = url[url.length-1];
                    $scope.$apply();
                }
            };

            //Свайп по табам
            $scope.swipe = function (ev, turn) {
                var _tabs = ev.currentTarget.querySelectorAll('md-tab-item');
                if (turn == 'right') {
                    if ($scope.tab < _tabs.length - 1) {
                        $scope.tab += 1;
                    }
                } else {
                    if ($scope.tab > 0) {
                        $scope.tab -= 1
                    }
                }

                //$scope.topFunction();
            };

            //Принудительное изменения номера таба в результате клика по нему.
            //Для избежания некорректного подсчета при свайпе
            $scope.setTab = function (id) {
                $scope.tab = id;
            };

            // прокрутка содержания таба вверх при свайпе например
            $scope.topFunction = function() {
                $("#fBoxes").animate({"scrollTop":0},"fast");
            };
        }
    ]);
