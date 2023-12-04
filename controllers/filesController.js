const sql = require('mssql');
const config = require('../config');
const filesModel = require('../models/filesModel');

const uploadFile = async (req, res) => {


    

  // Dosya yükleme başarılı olduğunda burada işlemler yapabilirsiniz
  const fileName = req.file.originalname;
  const fileSize = req.file.size;
  const fileType = req.file.mimetype;
  const userId = req.body.userId; // Örnek olarak kullanıcı kimlik numarasını buraya koyuyoruz. Gerçek senaryoda kullanıcının kimlik bilgilerini almanız gerekir.
  const courseId = req.body.courseId;


  // Veritabanına dosya bilgilerini kaydeden fonksiyonu çağırın
  await filesModel.saveFileInfoToDatabase(fileName, fileSize, fileType, userId, courseId);
  console.log('control 25')

  console.log(fileName)

  res.json({ message: 'Dosya başarıyla yüklendi.' });
};

module.exports = {
  uploadFile,
};
