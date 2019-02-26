var field_required = "Поле обязательно для заполнения";
var field_email = "Значение не является адресом электронной почты ";
var field_check = "Небходимо принять соглашение";
var field_d = "Значение поля должно состоять только из цифр";
var field_w = "Значение поля должно состоять только из цифр и букв ";
var field_length = "В поле должно быть ровно n символов ";
var field_phone = "Телефонный номер введен неверно";
var field_max_length = "Максимальная длина не более n символов ";
var field_min_length = "Минимальная длина не менее n символов ";
var field_year = "Нужно указать год. ";


// $(document).ready(function(){
// $('form').submit(function(){
// // debugger;

// });
// });


function formValidateInit(form) {
// debugger;
var newFormValidate = new formValidate();
return newFormValidate.construct(form);
}

function formValidate() {
this.formElements;
this.submit = true;

this.viewError = function(element, rules) {
var errorMessage = rules["message"];
$(element).closest('.wrap-for-error').addClass('error');
$(element).closest('.wrap-for-error').find('p.err_text').text(errorMessage);
}
this.clearError = function(element, rules) {
$(element).closest('.wrap-for-error').removeClass('error');
}


this.formValidateRequired = function(element, rules) {
if (element.value) return true;
else return false;
}
this.formValidate_d = function(element, rules) {
var regexp = /(\d+[\.|\,]?\d+)|(\d+)/;
return regexp.test(element.value);
}
this.formValidate_w = function(element, rules) {
var regexp = /\w/;
return regexp.test(element.value);
}
this.formValidateLength = function(element, rules) {
var _length = parseInt(element.className.substring(element.className.indexOf(rules["name"]) + rules["name"].length + 1, element.className.length));
rules["message"] = rules["message"].replace("n", _length);
if (element.value.length == _length) return true;
else return false;
}
this.formValidateMaxLength = function(element, rules) {
var _length = parseInt(element.className.substring(element.className.indexOf(rules["name"]) + rules["name"].length + 1, element.className.length));
rules["message"] = rules["message"].replace("n", _length);
if (element.value.length <= _length) return true;
else return false;
}
this.formValidateMinLength = function(element, rules) {
var _length = parseInt(element.className.substring(element.className.indexOf(rules["name"]) + rules["name"].length + 1, element.className.length));
rules["message"] = rules["message"].replace("n", _length);
if (element.value.length >= _length) return true;
else return false;
}
this.formValidateYear = function(element, rules) {
var date = new Date();
if (element.value > 0 && element.value <= date.getFullYear()) return true;
else return false;
}
this.formValidateEmail = function(element, rules) {
var regexp = /\b([0-9a-z][.\-\w]*)@((?:[0-9a-z][\-0-9a-z]*[0-9a-z]\.)+[a-z]{2,6})\b/i;
return regexp.test(element.value);
}
this.formValidateCheck = function(element, rules) {
return $(element).prop("checked");
}
this.formValidatePhone = function(element, rules) {
var regexp = /^\+(1|20|210|211|212|213|214|215|216|217|218|219|220|221|222|223|224|225|226|227|228|229|230|231|232|233|234|235|236|237|238|239|240|241|242|243|244|245|246|247|248|249|250|251|252|253|254|255|256|257|258|259|260|261|262|263|264|265|266|267|268|269|27|28|290|291|292|293|294|295|296|297|298|299|30|31|32|33|34|350|351|352|353|354|355|356|357|358|359|36|370|371|372|373|374|375|376|377|378|379|380|381|382|383|384|385|386|387|388|389|39|40|41|420|421|422|423|424|425|426|427|428|429|43|44|45|46|47|48|49|500|501|502|503|504|505|506|507|508|509|51|52|53|54|55|56|57|58|590|591|592|593|594|595|596|597|598|599|60|61|62|63|64|65|66|670|671|672|673|674|675|676|677|678|679|680|681|682|683|684|685|686|687|688|689|690|691|692|693|694|695|696|697|698|699|7|800|801|802|803|804|805|806|807|808|809|81|82|83|84|850|851|852|853|854|855|856|857|858|859|86|870|871|872|873|874|875|876|877|878|879|880|881|882|883|884|885|886|887|888|889|89|90|91|92|93|94|95|960|961|962|963|964|965|966|967|968|969|970|971|972|973|974|975|976|977|978|979|98|990|991|992|993|994|995|996|997|998|999)\s*(?:(?:\(\s*(?:(?:(\d{1})\s*\)\s*(\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d))|(?:(\d{2})\s*\)\s*(\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d))|(?:(\d{3})\s*\)\s*(\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d))|(?:(\d{4})\s*\)\s*(\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d))|(?:(\d{5})\s*\)\s*(\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d))|(?:(\d{6})\s*\)\s*(\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d))|(?:(\d{7})\s*\)\s*(\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d))|(?:(\d{8})\s*\)\s*(\d(?:\s*-?\s*)\d))))|((?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d(?:\s*-?\s*)\d))$/i;
return regexp.test(element.value);
}


this.formValidateRulesType = [{
name: "phone",
handler: this.formValidatePhone,
message: field_phone ? field_phone : "телефонный номер введен неверно"
}, {
name: "email",
handler: this.formValidateEmail,
message: field_email ? field_email : "Значение не является адресом электронной почты"
}, {
name: "form-validate:check",
handler: this.formValidateCheck,
message: field_check ? field_check : "Небходимо принять соглашение"
}, {
name: "form-validate:d",
handler: this.formValidate_d,
message: field_d ? field_d : "Значение поля должно состоять только из цифр"
}, {
name: "form-validate:w",
handler: this.formValidate_w,
message: field_w ? field_w : "Значение поля должно состоять только из цифр и букв"
}, {
name: "form-validate:length",
handler: this.formValidateLength,
message: field_length ? field_length : "В поле должно быть ровно n символов"
}, {
name: "form-validate:max-length",
handler: this.formValidateMaxLength,
message: field_max_length ? field_max_length : "Максимальная длина не более n символов"
}, {
name: "form-validate:min-length",
handler: this.formValidateMinLength,
message: field_min_length ? field_min_length : "Минимальная длина не менее n символов"
}, {
name: "form-validate:year",
handler: this.formValidateYear,
message: field_year ? field_year : "Нужно указать год. "
}];


this.formValidateRulesAttr = [{
name: "required",
handler: this.formValidateRequired,
message: field_required ? field_required : "Поле обязательно для заполнения"
}];



this.construct = function(form) {

this.formElements = form.getElementsByTagName("textarea");
var focusFlag = false;

for (var i = 0; i < this.formElements.length; i++) {


if (typeof $(this.formElements[i]).attr('required') !== 'undefined') {
flag = true;

for (var j = 0; j < this.formValidateRulesAttr.length; j++) {

if (typeof $(this.formElements[i]).attr(this.formValidateRulesAttr[j]["name"]) !== 'undefined') {

if (!this.formValidateRulesAttr[j]["handler"](this.formElements[i], this.formValidateRulesAttr[j])) {

flag = false;
this.clearError(this.formElements[i], this.formValidateRulesAttr[j]);
this.viewError(this.formElements[i], this.formValidateRulesAttr[j]);
this.submit = false;
}
}
}


for (var j = 0; j < this.formValidateRulesType.length; j++) {

if (typeof $(this.formElements[i]).attr(this.formValidateRulesType[j]["name"]) !== 'undefined') {

if (!this.formValidateRulesType[j]["handler"](this.formElements[i], this.formValidateRulesType[j])) {

flag = false;
this.clearError(this.formElements[i], this.formValidateRulesType[j]);
this.viewError(this.formElements[i], this.formValidateRulesType[j]);
this.submit = false;
}
}
}



if (flag) this.clearError(this.formElements[i], this.formValidateRulesType[j]);
}
}

this.formElements = form.getElementsByTagName("input","textarea");
var focusFlag = false;
for (var i = 0; i < this.formElements.length; i++) {

debugger;

if (typeof $(this.formElements[i]).attr('required') !== 'undefined') {
flag = true;

for (var j = 0; j < this.formValidateRulesAttr.length; j++) {

if (typeof $(this.formElements[i]).attr(this.formValidateRulesAttr[j]["name"]) !== 'undefined') {

if (!this.formValidateRulesAttr[j]["handler"](this.formElements[i], this.formValidateRulesAttr[j])) {

flag = false;
this.clearError(this.formElements[i], this.formValidateRulesAttr[j]);
this.viewError(this.formElements[i], this.formValidateRulesAttr[j]);
this.submit = false;
}
}
}


for (var j = 0; j < this.formValidateRulesType.length; j++) {

if ($(this.formElements[i]).attr('type') === this.formValidateRulesType[j]["name"]) {

if (!this.formValidateRulesType[j]["handler"](this.formElements[i], this.formValidateRulesType[j])) {

flag = false;
this.clearError(this.formElements[i], this.formValidateRulesType[j]);
this.viewError(this.formElements[i], this.formValidateRulesType[j]);
this.submit = false;
}
}
}



if (flag) this.clearError(this.formElements[i], this.formValidateRulesType[j]);
}


}
return this.submit;
}
}