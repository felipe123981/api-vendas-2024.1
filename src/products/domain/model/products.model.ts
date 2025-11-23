export interface ProductModel {
  id: string
  name: string
  description: string
  price: number
  size?: string //P, L, XL ...
  number?: number //e. g. 42
  width: number
  height: number
  length: number
  weight: number
  brand?: string
  model?: string
  color?: string
  categories: string []
  photos?: string []
  publisher?: string
  created_at?: Date
  updated_at?: Date
}
