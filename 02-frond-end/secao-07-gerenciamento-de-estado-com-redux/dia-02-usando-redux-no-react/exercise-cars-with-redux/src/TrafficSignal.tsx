import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import { Signals } from './types';

const renderSignal = (signalColor: Signals) => {
  switch (signalColor) {
    case 'red':
      return redSignal;
    case 'green':
      return greenSignal;
    case 'yellow':
      return yellowSignal;
    default:
      return '';
  }
};