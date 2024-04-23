const weekDaysTemplate = DateHelper => ({
  name: 'weekday',
  parent: 'day',
  rowsCount: () => 5,
  columnsCount: () => 54,
  mapping: (startTimestamp, endTimestamp) => {
    let weekNumber = 0;
    let x = -1;

    return DateHelper.intervals(
      'day',
      startTimestamp,
      DateHelper.date(endTimestamp)
    )
      .map(ts => {
        const date = DateHelper.date(ts);

        if (weekNumber !== date.week()) {
          weekNumber = date.week();
          x += 1;
        }

        if (date.format('d') === '0' || date.format('d') === '6') {
          return null;
        }

        return {
          t: ts,
          x,
          y: date.format('d') - 1,
        };
      })
      .filter(n => n !== null);
  },
});


const cal = new CalHeatmap();
cal.addTemplates(weekDaysTemplate);

cal.paint({
  itemSelector: "#ex-year",
  range: 48,
  domain: {
    type: "year",
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
