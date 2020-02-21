import App from './providers/App';

(async () => {
  await App.loadConfigurations();
  await App.loadDatabase();
  App.loadServer();
})();
