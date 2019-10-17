const vscode = require('vscode');
const axios = require('axios');

function activate(context) {
	let cityAqi = vscode.commands.registerCommand('extension.helloWorld', function () {

		const options = {
			ignoreFocusOut: true,
			password: false,
			prompt: "Please type your city (eg.beijing or 北京)"
		};

		vscode.window.showInputBox(options).then((value) => {
			if (value === undefined || value.trim() === '') {
				vscode.window.showInformationMessage('Please type your city.');
			}
			else {
				const cityName = value.trim();
				// appkey=xxxxxxxx 替换成事先申请好的 key
				// @ts-ignore
				axios.get(`https://way.jd.com/he/freeweather?city=${cityName}&appkey=bbb7ea06cbcfa79cc6c1d96b00d08515`)
					.then((rep) => {
						if (rep.data.code !== '10000') {
							vscode.window.showInformationMessage('Sorry, Please try again.');
							return;
						}
						const weatherData = rep.data.result.HeWeather5[0]
						if (weatherData.status !== 'ok') {
							vscode.window.showInformationMessage(`Sorry, ${weatherData.status}`);
							return;
						}

						vscode.window.showInformationMessage(`${weatherData.basic.city} 's AQI => PM25: ${weatherData.aqi.city.pm25}, PM10: ${weatherData.aqi.city.pm10} ${weatherData.aqi.city.qlty},WIND => ${weatherData.daily_forecast[0].wind.dir}, sug=>${weatherData.suggestion.comf.txt}`);
					});
			}
		});
	});

	context.subscriptions.push(cityAqi);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;