// Import stylesheets
import './style.css';

liff.init({
  liffId: '2000215406-oapqAqqk', // Use own liffId
  withLoginOnExternalBrowser: true, // Enable automatic login process
})
  .then(() => {
      // start to use LIFF's api
  })
  .catch((err) => {
      console.log(err);
  });