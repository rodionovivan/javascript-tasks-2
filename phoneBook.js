'use strict';

var phoneBook = [];
     // Здесь вы храните записи как хотите

/*
   Функция добавления записи в телефонную книгу.
   На вход может прийти что угодно, будьте осторожны.
*/
module.exports.add = function add(name, phone, email) {
    if (isPhoneValid(phone) && isEmailValid(email)) {
        phoneBook[phoneBook.length].name = name;
        phoneBook[phoneBook.length].phone = phone;
        phoneBook[phoneBook.length].email = email;
    }

    // Ваша невероятная магия здесь

};

/*
   Функция поиска записи в телефонную книгу.
   Поиск ведется по всем полям.
*/
module.exports.find = function find(query) {
    for (var i = 0; i < phoneBook.length; i++) {
        if ((phoneBook[i].name.indexOf(query) !== -1) ||
                (phoneBook[i].phone.indexOf(query) !== -1) ||
                    (phoneBook[i].email.indexOf(query) !== -1)) {
            console.info (phoneBook[i].name + phoneBook[i].phone + phoneBook[i].email);
        }

    }

    // Ваша удивительная магия здесь

};

/*
   Функция удаления записи в телефонной книге.
*/
module.exports.remove = function remove(query) {
    for (var i = 0; i < phoneBook.length; i++) {
        if (phoneBook.name[i] === query) {
            deleteQueryFromPhoneBook(i);
        }
    }

    // Ваша необьяснимая магия здесь

};

function deleteQueryFromPhoneBook(position) {
    for (var j = position; j < phoneBook.length; j++) {
        phoneBook[j] = phoneBook[j + 1];
    }
    phoneBook.length--;
}

/*
   Функция импорта записей из файла (задача со звёздочкой!).
*/
/* module.exports.importFromCsv = function importFromCsv(filename) {
    var data = require('fs').readFileSync(filename, 'utf-8');

    // Ваша чёрная магия:
    // - Разбираете записи из `data`
    // - Добавляете каждую запись в книгу
};

/*
   Функция вывода всех телефонов в виде ASCII (задача со звёздочкой!).
*/
/* module.exports.showTable = function showTable() {

    // Ваша чёрная магия здесь

};
*/


function isPhoneValid(phone) {
    return formatPh(deletePhJunk(isPhCharsValid(deleteFirstPlus(areBracketsCorrect(phone)))));

}
function isPhCharsValid(phone) {
    for (var k = 0; k < phone.length; k++) {
        if ((phone.charAt(k) < '0' || phone.charAt(k) > '9') &&
             phone.charAt(k) !== '(' && phone.charAt(k) !== ')' &&
            phone.charAt(k) !== ' ' && phone.charAt(k) !== '-') {
            return;
        }
    }

    return phone;
}
function deleteFirstPlus(phone) {
    if (phone.charAt(0) === '+') {
        phone = phone.substring(1);
    }


    return phone;
}
function deletePhJunk(phone) {
    var newPhone = '';
    for (var k = 0; k < phone.length; k++) {
        if (phone.charAt(k) !== '(' && phone.charAt(k) !== ')' &&
            phone.charAt(k) !== ' ' && phone.charAt(k) !== '-') {
            newPhone = newPhone + phone.charAt(k);
        }
    }
}


function formatPh(phone) {
    if (phone.length >= 11) {
        return '+' + phone;
    } else if (phone.length === 10) {
        return '+7' + phone;
    }

    return;

}
function areBracketsCorrect(phone) {
    var openBrackets = 0;
    var closeBrackets = 0;
    for (var j = 0; j < phone.length; j++) {
        if (phone.charAt(j) === '(') {
            openBrackets++;
        } else if (phone.charAt(j) === ')') {
            openBrackets++;
        }

    }
    if ((openBrackets - closeBrackets === 0) && (openBrackets <= 1)) {
        return phone;
    }

    return;

}
function isEmailValid(email) {
    var atsNumber = 0;
    var dotsNumber = 0;
    for (var i = 0; i < email.length; i++) {
        if (email.charAt(i) === '@') {
            atsNumber++;
        } else if (email.charAt(i) === '.') {
            dotsNumber++;
        }
    }
    if (atsNumber === 1 && dotsNumber >= 1) {
        return email;
    }

    return;
}
