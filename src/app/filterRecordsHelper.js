import _ from 'lodash';

export default function filteredRecordsHelper(records, filterValue) {
  const plainRecords = records.toJS();

  const filterWords = filterValue.toLowerCase().trim().split(' ');

  return plainRecords.filter(userRecord=> {
    const recordValues = Object.values(userRecord).map(item => item.toLowerCase());
    return filterWords.every(filterWord => {
      return recordValues.some(value => value.includes(filterWord))
    })
  });
}

export const counterForStatus = filteredRecords => {
  const temp = _.groupBy(filteredRecords, 'status');
  return Object.entries(temp).reduce((acc, [key, arrayValue]) => {
    return {
      ...acc,
      [key]: arrayValue.length,
    };
  }, {});
}
