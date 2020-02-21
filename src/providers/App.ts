import Express from './Express';
import Database from './Database';
import Locals from './Locals';

const App = {
  loadConfigurations: () => {
    return Locals.init();
  },
  loadDatabase: () => {
    return Database.init();
  },
  loadServer: () => {
    return Express.init();
  }
};

export default App;
