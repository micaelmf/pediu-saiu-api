
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.3.1
 * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
 */
Prisma.prismaVersion = {
  client: "5.3.1",
  engine: "61e140623197a131c2a6189271ffee05a7aa9a59"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  email: 'email',
  nickname: 'nickname',
  role: 'role',
  firstName: 'firstName',
  lastName: 'lastName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  enterpriseId: 'enterpriseId'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  status: 'status',
  enterpriseId: 'enterpriseId'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  type: 'type',
  price: 'price',
  free: 'free',
  status: 'status',
  additionalsMax: 'additionalsMax',
  accompanimentsMax: 'accompanimentsMax',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  categoryId: 'categoryId',
  enterpriseId: 'enterpriseId'
};

exports.Prisma.AccompanimentScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  productId: 'productId'
};

exports.Prisma.AdditionalScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  productId: 'productId'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  totalPrice: 'totalPrice',
  status: 'status',
  updatedAt: 'updatedAt',
  orderDate: 'orderDate',
  userId: 'userId',
  enterpriseId: 'enterpriseId'
};

exports.Prisma.OrderItemScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  quantity: 'quantity',
  price: 'price',
  productId: 'productId',
  orderId: 'orderId'
};

exports.Prisma.OrderHistoryScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  status: 'status',
  description: 'description',
  orderId: 'orderId',
  createdAt: 'createdAt'
};

exports.Prisma.EnterpriseScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  responsiblePerson: 'responsiblePerson',
  phoneNumber: 'phoneNumber',
  email: 'email',
  description: 'description',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.ConfigurationScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  configKey: 'configKey',
  configValue: 'configValue',
  configText: 'configText',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  enterpriseId: 'enterpriseId'
};

exports.Prisma.TagScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  textColor: 'textColor',
  backgroundColor: 'backgroundColor',
  status: 'status',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  description: 'description'
};

exports.Prisma.ProductTagScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  productId: 'productId',
  tagId: 'tagId'
};

exports.Prisma.PromotionTagScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  promotionId: 'promotionId',
  tagId: 'tagId'
};

exports.Prisma.PromotionScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  status: 'status',
  discountRate: 'discountRate',
  startDate: 'startDate',
  endDate: 'endDate',
  categoryId: 'categoryId',
  enterpriseId: 'enterpriseId',
  deletedAt: 'deletedAt'
};

exports.Prisma.ComboScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  description: 'description',
  price: 'price',
  status: 'status',
  categoryId: 'categoryId',
  enterpriseId: 'enterpriseId',
  productId: 'productId'
};

exports.Prisma.ComboProductsScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  comboId: 'comboId',
  productId: 'productId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  Category: 'Category',
  Product: 'Product',
  Accompaniment: 'Accompaniment',
  Additional: 'Additional',
  Order: 'Order',
  OrderItem: 'OrderItem',
  OrderHistory: 'OrderHistory',
  Enterprise: 'Enterprise',
  Configuration: 'Configuration',
  Tag: 'Tag',
  ProductTag: 'ProductTag',
  PromotionTag: 'PromotionTag',
  Promotion: 'Promotion',
  Combo: 'Combo',
  ComboProducts: 'ComboProducts'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
