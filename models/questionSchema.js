const mongoose = require("mongoose");
const { Schema } = mongoose;

const preguntaSchema = new Schema({
  name: { type: String, required: true },
  adress: { type: String, required: true },
  phone: { type: Number, required: true },
  pregunta1: { type: String, require: true },
  pregunta2: { type: String, require: true },
  pregunta3: { type: String, require: true },
  pregunta4: { type: String, require: true },
  pregunta5: { type: String, require: true },
  pregunta6: { type: String, require: true },
  pregunta7: { type: String, require: true },
  pregunta8: { type: String, require: true },
  pregunta9: { type: String, require: true },
  pregunta10: { type: String, require: true },
  pregunta11: { type: String, require: true },
}, {timestamps: true, versionKey: false});

module.exports = mongoose.model("Cuestionario", preguntaSchema);
