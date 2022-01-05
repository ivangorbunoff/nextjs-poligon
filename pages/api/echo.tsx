import {NextApiRequest, NextApiResponse} from "next";

/**
 * В папке api пишется бэкенд на next
 * */

// этот интерфейс для подсветки синтаксиса request.query.message и автокомплита полей
interface MessageNextApiRequest extends NextApiRequest {
	query: {
		message?: string,
	}
}

export default function echo(request: MessageNextApiRequest, response: NextApiResponse) {
	response.statusCode = 200;
	response.setHeader('Content-Type', 'application/json');
	response.end(JSON.stringify({
		// в request.query параметры урла
		message: request.query.message || 'Base message',
	}))
}
