(async function(){
	const url = 'http://localhost/WIDGETS/body_widget/0_default/index.html';
	const html = await (await fetch(url)).text();
	console.log(html);
})();