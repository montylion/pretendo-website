const router = require('express').Router();
const utilHelper = require('../helpers/util');

router.get('/connecting', (request, response) => {
	const locale = utilHelper.getLocale('US', 'en');

	return response.render('connecting', {
		title: 'Pretendo | Connecting',
		description: locale.about.text,
		url: request.protocol + '://' + request.get('host') + request.originalUrl,
		baseurl: request.protocol + '://' + request.get('host'),
		locale
	});
});

module.exports = router;