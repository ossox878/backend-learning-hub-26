// part 0 and 1==================================================================================================================================================================================================
function calculateOrderTotal(
  items: { price: number; qty: number }[],
  discount: number,
): number {
  let total: number = 0;
  for (const item of items) {
    total += item.price * item.qty;
    console.log(total);
  }
  return total - discount;
}

const order = {
  customer: "Layla",
  items: [
    { price: "250 EGP", qty: 2 },
    { price: 100, qty: 1 },
  ],
};

//console.log(calculateOrderTotal(order.items, "50"));
//* because the second argument which is discount must a number not a string

//part 2====================================================================================================================================================================================================
type OrderStatus = "pending" | "shipped" | "delivered" | "cancelled";

function canCancelOrder(status: OrderStatus): boolean {
  if (status === "pending" || status === "shipped") return true;
  else return false;
}

// console.log(canCancelOrder("refunded")); // it would take a lot of time to figure out the problem is a typo mistake

//part 3================================================================================================================================================================================================

type WarehouseBin = [aisle: number, shelf: number];
const binForOrder: WarehouseBin = [4, 12];

// const badBin: WarehouseBin = [4, 12, "extra"]

// because this is  considered as a Tuple (readonly array) so you can't change the number of elements or it's types

// part B

interface Product1 {
  id: string;
  name: string;
  price: number;
}
interface Customer {
  id: string;
  name: string;
}
class Repository<T extends { id: string }> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  findById(id: string): T | undefined {
    return this.items.find((item) => item.id === id);
  }
}

const productRepo = new Repository<Product1>();

productRepo.add({ id: "2024", name: "Phone", price: 30000 });
productRepo.add({ id: "2025", name: "Laptop", price: 900000 });

console.log(productRepo.findById("2025"));

const customerRepo = new Repository<Customer>();

customerRepo.add({ id: "2024", name: "mohsen" });
customerRepo.add({ id: "2025", name: "abo mohsen" });

console.log(productRepo.findById("2025"));
console.log(customerRepo.findById("2024"));
//so we did this instead of making three copies from the same class for  each data type  so the generic allows us to use the same class for a different data  types

// part 4===============================================================================================================================================================================

interface Product {
  id: string;
  name: string;
  price: number;
  costPrice: number; // internal, never shown to customers
}

interface OrderItem {
  product: Product;
  qty: number;
}

interface Order {
  id: string;
  customer: string;
  items: OrderItem[];
  status: OrderStatus; // reuse Part 2's type
  shippedAt?: string; // optional — only exists once shipped
  readonly createdAt: string; // set once, never changes
}

const myOrder: Order = {
  id: "2222",
  customer: "Yousef",
  items: [
    {
      product: { id: "222", name: "ahmed", price: 22, costPrice: 10 },
      qty: 10,
    },
  ],
  status: "pending",
  createdAt: "1 AM",
};

function shipOrder(order: Order): Order {
  let newOrder: Order = { ...order };

  newOrder.status = "shipped";
  newOrder.shippedAt = new Date().toISOString();
  //order.createdAt = "new date" // because when use readonly we can set the value once and never change it

  return newOrder;
}
function newCalculateOrderTotal(items: OrderItem[], discount: number): number {
  let total: number = 0;
  for (const item of items) {
    total += item.product.price * item.qty;
    console.log(total);
  }
  return total - discount;
}

// part 5==========================================================================================================================================================================

// What the customer-facing API is allowed to return — never leak costPrice
type PublicProduct = Omit<Product, "costPrice">;

// What's required to create a new product — no id yet, the DB assigns it
type CreateProductInput = Omit<Product, "id">;

// What's allowed when editing a product — any subset of fields
type UpdateProductInput = Partial<Product>;

// A fast lookup table by product id
type ProductCatalog = Record<string, Product>;

function toPublicProduct(product: Product): PublicProduct {
  const { costPrice, ...publicProps } = product;
  return publicProps;
}
function createProduct(input: CreateProductInput): Product {
  return {
    id: crypto.randomUUID(),
    name: "bur3y",
    price: 23,
    costPrice: 10,
  };
}
function updateProduct(product: Product, changes: UpdateProductInput): Product {
  return { ...product, ...changes };
}

const catalog: ProductCatalog = {
  "product 1": {
    id: "product 1",
    name: "3am 7amada",
    price: 80,
    costPrice: 10,
  },
  "product 2": {
    id: "product 2",
    name: "el 7ob gany gany",
    price: 5,
    costPrice: 50,
  },
};
console.log(catalog["product 1"]);

// in the old js if I added an new field in "Product" which is "discountPercent" will not be added in the Manually-Written Public Product
// While in Ts when we use "Type" to create "Public Product" any new filed added to "Product" will be also added to "Public Product".

//Part 6 =====================================================================================================================================================================================

// In small teams, it is usually better to use colocated types because
// there are fewer types to manage, making them easier to find, maintain,
// and debug.

// In large teams, it is usually better to use centralized types because
// many files may share the same types. Keeping them in one place improves
// consistency, reduces duplication, and makes them easier to discover and maintain.

// part 7 ======================================================================================================================================================================================

function getExternalWarehouseData() {
  return {
    id: "w-99",
    name: "Desk Lamp",
    price: 150,
    costPrice: 60,
    extra: "ignored",
  };
}

function receiveFromWarehouse(product: Product): void {
  console.log(product.name);
}
receiveFromWarehouse(getExternalWarehouseData()); // it works because when we assign product to the return value of getExternalWarehouseData() "Product" will find its fields

//receiveFromWarehouse({ id: "w-1", name: "Chair", price: 90, costPrice: 40, extra: "oops" })
// in that line fail because we are filling "Product" fields filed by field so we have to fill it with required fields only and
// it protects me from adding new fields by mistake

// Final boss (El bo3bo3)========================================================================================================================================================================

type Result<T> = { success: true; data: T } | { success: false; error: string };

function placeOrder(customer: string, items: OrderItem[]): Result<Order> {
  if (items.length === 0) {
    return { success: false, error: "Order must contain at least one item" };
  }
  const myOrder2: Order = {
    id: "eeee",
    customer,
    items,
    status: "pending",
    createdAt: "1 AM",
  };
  if(newCalculateOrderTotal(items,80) > 0)
    return { success: true, data: myOrder2 }
  else
    return { success: false, error: "el7a2ona ....... el7a2ona begad " }
}