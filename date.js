// 2 farklı tarih fonksiyonu tanımlıyoruz ve modülleri export ediyoruz app.js dosyasında kullanabilmek için

exports.getDate = function(){ // getDate fonksiyonu basit bir şekilde böylede tanımlayabilriz alttaki gibide olabilir

  const today = new Date();

  const options = {  //tarih formatını belirtiyoruz
    weekday:"long",
    day:"numeric",
    month:"long",
  };

  return today.toLocaleDateString("en-US", options);  // o günün tarihini belirttiğimiz formatta alıyoruz
}

//module.exports ile exports aynı anlama geliyor ikisinide kullanabiliriz

module.exports.getDay = getDay;

function getDay(){

  const today = new Date();

  const options={  //tarih formatını belirtiyoruz sadece günü aldık
    weekday:"long",
  };

  return today.toLocaleDateString("en-US", options);  // o günün tarihini belirttiğimiz formatta alıyoruz

}
