var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BookGenre = new Schema(
  {
    name: {type: String, ref: 'Book', max: 100 , required : true },
  }
);

//virtual for BookGener's URL
BookGenre
.virtual('url')
.get(function(){
  return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('Genre', BookGenre);
