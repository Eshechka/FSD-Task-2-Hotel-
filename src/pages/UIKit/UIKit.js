import 'inputmask/dist/jquery.inputmask';



import './UIKit.scss';


function importAll (r) {
  r.keys().forEach(r);
}

importAll(require.context('../../components/', true, /\.(svg|png|js)$/));
