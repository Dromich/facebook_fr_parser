let userinfo = document.getElementsByClassName('_698');//лішка з юзерінфою

let usInfoWrp = document.getElementsByClassName('_3i9');//обгортка для інфи
let usInfoWrpIn = document.getElementsByClassName('_5h60');//обгортка для інфи iner


setInterval(() => {
	//usInfoWrp[0].scrollTop =  usInfoWrpIn[0].scrollHeight  ;

	scrollBy(0,usInfoWrpIn[0].scrollHeight)
	console.log(userinfo.length)
}, 3000);
