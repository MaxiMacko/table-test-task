import _ from 'lodash';

export default function filteredRecordsHelper(state) {
  const allRecords = state.get('userData');
  const plainRecords = allRecords.toJS();
  const filterValue = state.get('filterValue');
  return plainRecords.filter(record => {
    return Object.values(record).some(recordValue => recordValue.toLowerCase().includes(filterValue.toLowerCase()))
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
