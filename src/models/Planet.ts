import * as mongoose from 'mongoose'

export interface Planet extends mongoose.Document {
  readonly _id:  string, 
  name: string,
  climate: string,
  terrain: string,
  planetAppearance?: number
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
  planetAppearance: {
    type: Number, 
    required: false,
  }
});

export const Planet = mongoose.model<Planet>('Planet', planetSchema)


