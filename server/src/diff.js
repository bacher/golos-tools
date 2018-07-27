const DiffMatchPatch = require('diff-match-patch');

const text = 'За этот спринт в части мобильной разработки была проведена большая работа по адаптации приложений под 18 хардфорк. А также, в iOs приложении оформлена Swift-библиотека и реализована поддержка пуш-уведомлений; в Android приложении исправлено множество багов и увеличена скорость открытия поста.\n\n1. iOS приложение Golos.io\n\nSwift-библиотека оформлена в компилятор рod для удобства установки через сервис https://cocoapods.org.\n\nБиблиотека поддерживает работу с протоколами для обмена сообщениями между браузером и веб-сервером (Websocket), поэтому отправлять и принимать запросы от сервера на стороне клиента нет необходимости. Все ответы приходят уже в готовых моделях.\n\nРеализована поддержка пуш-уведомлений (Remote Push Notifications) через сервис Firebase Cloud Messaging Client App on iOS.\n\nДля работы пуш-уведомлений в активном режиме приложения был сделан алгоритм преобразования Remote Push Notification -> Local Notification.\n\nРазработан алгоритм формирования строки запроса с учётом установленного в Xcode для App параметра «Build Configuration». Добавлена возможность работы с testnet.\n\nПроведена работа по внесению изменений в API под 18 хардфорк.\n\n2. Android приложение Golos.io\n\nБиблиотека и само приложение адаптированы к 18 хардфорку.\n\nПроведен фикс багов: случайные краши при создании поста, мигание аватара пользователя на странице профиля при переходе в кошелек и обратно (при подписке на этого пользователя), а также множество багов, которые визуально выглядели как сообщение «произошла неизвестная ошибка».\n\nУвеличена скорость открытия поста.\n\nПланируется работа над расширением функций редактора поста и комментариев\n\nСкачать Android приложение Golos.io можно здесь.';
const patchText = '@@ -904,16 +904,22 @@\n ication \n+Agent \n -%3E Local\n@@ -1377,13 +1377,10 @@\n %D0%B2 %D0%BA%D0%BE\n-%D1%88%D0%B5%D0%BB%D0%B5%D0%BA\n+%D1%82%D1%8B\n  %D0%B8 %D0%BE\n@@ -1528,44 +1528,8 @@\n %C2%BB.%0A%0A\n-%D0%A3%D0%B2%D0%B5%D0%BB%D0%B8%D1%87%D0%B5%D0%BD%D0%B0 %D1%81%D0%BA%D0%BE%D1%80%D0%BE%D1%81%D1%82%D1%8C %D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D1%8F %D0%BF%D0%BE%D1%81%D1%82%D0%B0.%0A%0A\n %D0%9F%D0%BB%D0%B0%D0%BD\n';

const dmp = new DiffMatchPatch();

const patch = dmp.patch_fromText(patchText);

console.log(dmp.patch_apply(patch, text));
