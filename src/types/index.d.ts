interface ITask {
  id: string;
  title: string;
  duration_ms: number;
  description: string;
  color: string;
}

// #region - Weather -

interface Coord {
	lon: number;
	lat: number;
}

interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

interface Main {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
}

interface Wind {
	speed: number;
	deg: number;
	gust: number;
}

interface Snow {
	1h: number;
}

interface Cloud {
	all: number;
}

interface Sy {
	type: number;
	id: number;
	country: string;
	sunrise: number;
	sunset: number;
}

interface IWeatherData {
	coord: Coord;
	weather: Weather[];
	base: string;
	main: Main;
	visibility: number;
	wind: Wind;
	snow: Snow;
	clouds: Cloud;
	dt: number;
	sys: Sy;
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

// #endregion - Weather -

// #region - News - 

export interface INewsArticle {
	title: string;
	href: string;
	imageSrc: string;
}

// #endregion - News -