import { roleEnum, statusEnum } from "./constants";
import moment from "moment";
import uuidv4 from 'uuid';

const dateFormat = 'YYYY-MM-DD';

function createData(name, role, connectedDate, status, id) {
  return { name, role, connectedDate, status, id };
}

const testData = [
  createData('John Doe', roleEnum.CUSTOMER_SUPPORT, moment().format(dateFormat), statusEnum.EXPLORED, uuidv4()),
  createData('Meow Cat', roleEnum.ENGINEER, moment().format(dateFormat), statusEnum.EXPLORED, uuidv4()),
  createData('John Connor', roleEnum.MANAGER, moment().format(dateFormat), statusEnum.EXPLORED, uuidv4()),
  createData('Some Name', roleEnum.SALES, moment().format(dateFormat), statusEnum.EXPLORED, uuidv4()),
  createData('Harry Potter', roleEnum.CUSTOMER_SUPPORT, moment().format(dateFormat), statusEnum.EXPLORED, uuidv4()),
  createData('Keanu Reeves', roleEnum.SALES, moment().format(dateFormat), statusEnum.EXPLORED, uuidv4()),
  createData('Travis Rice', roleEnum.CUSTOMER_SUPPORT, moment().format(dateFormat), statusEnum.EXPLORED, uuidv4()),
  createData('Tom Hardy', roleEnum.CUSTOMER_SUPPORT, moment().format(dateFormat), statusEnum.EXPLORED, uuidv4()),
  createData('Batman Forever', roleEnum.ENGINEER, moment().format(dateFormat), statusEnum.EXPLORED, uuidv4()),
  createData('No Name', roleEnum.CUSTOMER_SUPPORT, moment().format(dateFormat), statusEnum.EXPLORED, uuidv4()),
];

export default testData;
