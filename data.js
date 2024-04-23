const weekDaysTemplate = DateHelper => ({
  name: 'weekday',
  parent: 'day',
  rowsCount: () => 10,
  columnsCount: () => 54,
});


const cal = new CalHeatmap();
cal.addTemplates(weekDaysTemplate);

cal.paint({
  itemSelector: "#ex-year",
  domain: {
    type: "month",
    gutter: 10,
  },
  subDomain: {
    type: "weekday",
    radius: 2,
  },
  date: {
    start: '2019-01-01',
  },
  data: {
    source: './data.json',
    type: 'json',
    x: 'date',
    y: 'value',
  },
  scale: { color: { type: 'linear', range: ["red, green"], } },
});
