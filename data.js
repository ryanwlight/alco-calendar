const cal = new CalHeatmap();

cal.paint({
  itemSelector: "#ex-year",
  domain: {
    type: "month",
    gutter: 10,
  },
  subDomain: {
    type: "day",
    radius: 2,
  },
  date: {
    start: '2015-01-01',
  },
  data: {
    source: 'https://raw.githubusercontent.com/wa0x6e/cal-heatmap/gh-pages/fixtures/seattle-weather.csv',
    requestInit: {
      mode: 'cors',
    },
    type: 'csv',
    x: 'date',
    y: d => +d['temp_max'],
    groupY: 'max',
  },
  scale: { color: { type: 'linear', scheme: 'PRGn', domain: [0, 40] } },
});
