import mongoose from "mongoose";

export const conectarDB = async (): Promise<void> => {
  // Implementación de la conexión a la base de datos
  try {
    await mongoose.connect(
      "mongodb+srv://IRON-DB:TobiGoia1003@iron-db.ozug32n.mongodb.net/"
    );
    console.log("Base de datos conectada");
  } catch (error) {
    console.log(error);
    throw new Error("Error al conectar a la base de datos");
  }
};
