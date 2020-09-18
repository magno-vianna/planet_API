import * as mongoose from 'mongoose'

export interface Planet extends mongoose.Document {
  name: string,
  climate: string,
  terrain: string
}

const planetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  climate: {
    type: String,
    required: true,
  },
  terrain: {
    type: String,
    required: true,
  },
});

export const Planet = mongoose.model<Planet>('Planet', planetSchema)


