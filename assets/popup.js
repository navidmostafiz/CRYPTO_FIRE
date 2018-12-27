function popupFunction1_Callback(response) {
	console.log('successCallbackFun', response);
	boxString1 = '<div class="whole">';
	boxString1 += '<div class="type"><p>BITCOIN</p></div>';
	boxString1 += '<div class="plan"><div class="header"><span>$</span>' + response.BTC.USD + '</div></div>';
	boxString1 += '</div>';

	boxString2 = '<div class="whole">';
	boxString2 += '<div class="type"><p>ETHERIUM</p></div>';
	boxString2 += '<div class="plan"><div class="header"><span>$</span>' + response.ETH.USD + '</div></div>';
	boxString2 += '</div>';
	$('#box1').append(boxString1);
	$('#box2').append(boxString2);
}

function popupFunction1() {
	console.log('popupFunction1 called');
	apiCallHandler('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD', popupFunction1_Callback);
};

popupFunction1();