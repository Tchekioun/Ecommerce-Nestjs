export class CreateProductDto {
  sku?: string;
  name?: string;
  description?: string;
  unit_price?: number;
  image_url?: string;
  active?: number;
  units_in_stock?: number;
  date_created?: Date;
  last_updated?: Date;
  category_id?: number;
}
