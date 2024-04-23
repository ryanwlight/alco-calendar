
const cal = new CalHeatmap();

cal.paint({
  itemSelector: "#ex-year",
  range: 120,
  domain: {
    type: "month",
    gutter: 10,
  },
  subDomain: {
    type: "day",
    radius: 2,
  },
  date: {
    start: '2019-01-01',
    min: '2019-01-01',
    max: '2030-12-31',
  },
  data: {
    source: './data.json',
    type: 'json',
    x: 'date',
    y: 'value',
  },
  scale: { color: { type: 'linear', range: ["red, green"], } },
});
